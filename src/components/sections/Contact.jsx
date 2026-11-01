"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Link2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import styles from "./Contact.module.css";

const contactChannels = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
    icon: Mail,
  },
  {
    label: "Phone / WhatsApp",
    value: siteConfig.contact.phone,
    icon: Phone,
    actions: [
      {
        label: "Call",
        href: siteConfig.contact.phoneHref,
        ariaLabel: `Call NEXCRAFT at ${siteConfig.contact.phone}`,
        icon: Phone,
      },
      {
        label: "WhatsApp",
        href: siteConfig.contact.whatsappHref,
        ariaLabel: `Message NEXCRAFT on WhatsApp at ${siteConfig.contact.phone}`,
        icon: MessageCircle,
        external: true,
      },
    ],
  },
  {
    label: "LinkedIn",
    value: "View LinkedIn profile",
    href: siteConfig.contact.linkedinHref,
    icon: Link2,
  },
];

const serviceOptions = [
  "Website Design & Development",
  "UI/UX Design",
  "Landing Page Development",
  "Website Redesign & Optimization",
];

function validateFields(values) {
  const nextErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.fullName.trim()) {
    nextErrors.fullName = "Please enter your name.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    nextErrors.email = "Enter a valid email address.";
  }

  if (!values.projectDetails.trim()) {
    nextErrors.projectDetails = "Please tell us a little about your project.";
  }

  return nextErrors;
}

const initialValues = {
  fullName: "",
  email: "",
  company: "",
  service: "",
  projectDetails: "",
  website: "",
};

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const formRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submissionState, setSubmissionState] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateFields(values);
    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => {
        formRef.current
          ?.querySelector('[aria-invalid="true"]')
          ?.focus();
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok) {
        setSubmitError(result.error || "We could not send your enquiry. Please try again.");
        return;
      }

      setSubmissionState("success");
    } catch {
      setSubmitError("We could not send your enquiry. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.intro}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} /> Let&apos;s work together
          </p>
          <h2 className={styles.title} id="contact-title">
            Have a project in mind? <span>Let&apos;s make it happen.</span>
          </h2>
          <p className={styles.description}>
            Tell us about your idea. Whether you&apos;re starting from scratch or
            reimagining an existing website, we&apos;d love to hear what you&apos;re
            planning.
          </p>

          <div className={styles.channels} aria-label="Contact details">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const content = (
                <>
                  <span className={styles.channelIcon}>
                    <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className={styles.channelCopy}>
                    <span className={styles.channelLabel}>{channel.label}</span>
                    <span className={styles.channelValue}>{channel.value}</span>
                  </span>
                  {channel.actions ? (
                    <span className={styles.channelActions}>
                      {channel.actions.map((action) => {
                        const ActionIcon = action.icon;

                        return (
                          <a
                            className={styles.channelAction}
                            href={action.href}
                            key={action.label}
                            aria-label={action.ariaLabel}
                            title={action.label}
                            target={action.external ? "_blank" : undefined}
                            rel={action.external ? "noreferrer" : undefined}
                          >
                            <ActionIcon size={15} strokeWidth={1.7} aria-hidden="true" />
                          </a>
                        );
                      })}
                    </span>
                  ) : (
                    channel.href && <ArrowUpRight className={styles.channelArrow} size={15} aria-hidden="true" />
                  )}
                </>
              );

              return channel.href ? (
                <a
                  className={styles.channel}
                  href={channel.href}
                  key={channel.label}
                  target={channel.label === "Email" ? undefined : "_blank"}
                  rel={channel.label === "Email" ? undefined : "noreferrer"}
                >
                  {content}
                </a>
              ) : (
                <div className={styles.channel} key={channel.label}>
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className={styles.formPanel}
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.66, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {submissionState === "success" ? (
            <div className={styles.successState} role="status" aria-live="polite">
              <span className={styles.successIcon}>
                <Check size={21} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className={styles.formEyebrow}>ENQUIRY SENT</p>
              <h3>Your enquiry has been sent.</h3>
              <p>
                Thanks for sharing your project details. We&apos;ll follow up at {values.email}.
              </p>
              <button
                className={styles.editButton}
                type="button"
                onClick={() => setSubmissionState("idle")}
              >
                Update your details <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form className={styles.form} ref={formRef} noValidate onSubmit={handleSubmit}>
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formHeading}>
                <span className={styles.formEyebrow}>PROJECT ENQUIRY</span>
                <span className={styles.formIndex}>01 — 05</span>
              </div>

              <div className={styles.fieldGrid}>
                <div className={`${styles.field} ${styles.fieldHalf}`}>
                  <label htmlFor="fullName">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName && <span className={styles.error} id="fullName-error">{errors.fullName}</span>}
                </div>

                <div className={`${styles.field} ${styles.fieldHalf}`}>
                  <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <span className={styles.error} id="email-error">{errors.email}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">Company <span className={styles.optional}>(optional)</span></label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={values.company}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="service">Service</label>
                  <select id="service" name="service" value={values.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className={`${styles.field} ${styles.fieldFull}`}>
                  <label htmlFor="projectDetails">Project Details <span aria-hidden="true">*</span></label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows="4"
                    value={values.projectDetails}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.projectDetails)}
                    aria-describedby={errors.projectDetails ? "projectDetails-error" : undefined}
                  />
                  {errors.projectDetails && <span className={styles.error} id="projectDetails-error">{errors.projectDetails}</span>}
                </div>
              </div>

              <div className={styles.formActions}>
                <button className={styles.submitButton} type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Project Enquiry"}
                  <Send size={15} strokeWidth={1.7} aria-hidden="true" />
                </button>
                {submitError && <p className={styles.error} role="alert">{submitError}</p>}
                <p className={styles.deliveryNote}>
                  Your enquiry will be sent securely to our team.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
