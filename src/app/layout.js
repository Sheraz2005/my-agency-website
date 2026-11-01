import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "../../public/fonts/inter-variable.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../../public/fonts/space-grotesk-variable.ttf",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "NEXCRAFT – Digital Agency",
    template: "%s | NEXCRAFT",
  },
  icons: {
    icon: [
      {
        url: "/images/brand/nexcraft-favicon.png",
        type: "image/png",
        sizes: "48x48",
      },
    ],
  },
  description:
    "NEXCRAFT is an independent digital studio specializing in modern website design, frontend development, UI/UX design, responsive landing pages and website optimization.",
  openGraph: {
    title: "NEXCRAFT — Crafting Digital Experiences",
    description:
      "Thoughtful design. Modern frontend development. Exceptional digital experiences.",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXCRAFT — Crafting Digital Experiences",
    description:
      "Thoughtful design. Modern frontend development. Exceptional digital experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased font-sans ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
