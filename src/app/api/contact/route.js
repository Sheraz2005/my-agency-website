import { Resend } from "resend";

const MAX_REQUEST_BYTES = 16 * 1024;
const MAX_REQUESTS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_TRACKED_IPS = 10_000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedServices = new Set([
  "Website Design & Development",
  "UI/UX Design",
  "Landing Page Development",
  "Website Redesign & Optimization",
]);

const requestsByIp =
  globalThis.__nexcraftContactRateLimit ??
  (globalThis.__nexcraftContactRateLimit = new Map());

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip")?.trim();

  return (realIp || forwardedFor || "unknown").slice(0, 100);
}

function checkRateLimit(ip, now = Date.now()) {
  const current = requestsByIp.get(ip);

  if (current && current.resetAt > now) {
    if (current.count >= MAX_REQUESTS_PER_WINDOW) {
      return { limited: true, retryAfter: Math.ceil((current.resetAt - now) / 1000) };
    }

    current.count += 1;
    return { limited: false };
  }

  if (requestsByIp.size >= MAX_TRACKED_IPS) {
    for (const [trackedIp, entry] of requestsByIp) {
      if (entry.resetAt <= now) requestsByIp.delete(trackedIp);
    }

    if (requestsByIp.size >= MAX_TRACKED_IPS) {
      return { limited: true, retryAfter: 60 };
    }
  }

  requestsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  return { limited: false };
}

async function readJsonBody(request) {
  const contentLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return { error: "Request body is too large.", status: 413 };
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return { error: "Invalid request body.", status: 400 };
  }

  const reader = request.body?.getReader();
  if (!reader) return { error: "Invalid request body.", status: 400 };

  const chunks = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      totalBytes += value.byteLength;
      if (totalBytes > MAX_REQUEST_BYTES) {
        await reader.cancel();
        return { error: "Request body is too large.", status: 413 };
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return { body: JSON.parse(new TextDecoder().decode(bytes)) };
  } catch {
    return { error: "Invalid request body.", status: 400 };
  }
}

export async function POST(request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (rateLimit.limited) {
    return Response.json(
      { error: "Too many enquiries. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfter) },
      },
    );
  }

  const parsed = await readJsonBody(request);
  if (parsed.error) {
    return Response.json({ error: parsed.error }, { status: parsed.status });
  }

  const body = parsed.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const projectDetails =
    typeof body.projectDetails === "string" ? body.projectDetails.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";

  if (honeypot) return Response.json({ success: true });

  if (
    !fullName ||
    fullName.length > 120 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !projectDetails ||
    projectDetails.length > 5000 ||
    company.length > 200 ||
    (service && !allowedServices.has(service))
  ) {
    return Response.json(
      { error: "Please provide valid contact and project details." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "The enquiry service is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "NEXCRAFT <onboarding@resend.dev>",
      to: ["sheraz2k5@gmail.com"],
      replyTo: email,
      subject: "New NEXCRAFT project enquiry",
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service || "Not specified"}`,
        "",
        "Project details:",
        projectDetails,
      ].join("\n"),
    });

    if (error) {
      return Response.json(
        { error: "We could not send your enquiry. Please try again shortly." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "We could not send your enquiry. Please try again shortly." },
      { status: 502 },
    );
  }
}
