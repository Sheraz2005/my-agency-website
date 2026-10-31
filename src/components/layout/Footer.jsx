import { ArrowUp, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import styles from "./Footer.module.css";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.cta} aria-labelledby="footer-cta-title">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} /> Start something meaningful
          </p>
          <div className={styles.ctaContent}>
            <div>
              <h2 className={styles.ctaTitle} id="footer-cta-title">
                Have an idea? <span>Let&apos;s make it happen.</span>
              </h2>
              <p className={styles.ctaDescription}>
                Let&apos;s create something meaningful together.
              </p>
            </div>
            <a className={styles.ctaButton} href="#contact">
              Start a Project <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div className={styles.main}>
        <div className={`${styles.inner} ${styles.columns}`}>
          <div className={styles.brandColumn}>
            <a className={styles.wordmark} href="#home" aria-label="NEXCRAFT, back to home">
              <span className={styles.brandMark} aria-hidden="true">N</span>
              <span>NEXCRAFT</span>
            </a>
            <p className={styles.tagline}>
              Crafting Digital Experiences.<br />Building What&apos;s Next.
            </p>
            <p className={styles.brandDescription}>
              An independent digital studio focused on thoughtful design and
              modern frontend development.
            </p>
          </div>

          <nav className={styles.navigation} aria-label="Footer navigation">
            <h2 className={styles.columnHeading}>Navigate</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.connect}>
            <h2 className={styles.columnHeading}>Connect</h2>
            <dl className={styles.contactList}>
              <div className={styles.contactItem}>
                <dt>Email</dt>
                <dd>
                  <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
                </dd>
              </div>

              <div className={styles.contactItem}>
                <dt>Phone / WhatsApp</dt>
                <dd className={styles.phoneLine}>
                  <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
                  <span className={styles.phoneActions}>
                    <a
                      className={styles.iconLink}
                      href={siteConfig.contact.phoneHref}
                      aria-label={`Call NEXCRAFT at ${siteConfig.contact.phone}`}
                      title="Call"
                    >
                      <Phone size={14} aria-hidden="true" />
                    </a>
                    <a
                      className={styles.iconLink}
                      href={siteConfig.contact.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Message NEXCRAFT on WhatsApp at ${siteConfig.contact.phone}`}
                      title="WhatsApp"
                    >
                      <MessageCircle size={14} aria-hidden="true" />
                    </a>
                  </span>
                </dd>
              </div>

              <div className={styles.contactItem}>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={siteConfig.contact.linkedinHref} target="_blank" rel="noreferrer">
                    Visit our LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`${styles.inner} ${styles.bottomInner}`}>
          <span>© 2026 NEXCRAFT.</span>
          <span className={styles.crafted}>Crafted with intention.</span>
          <a className={styles.backToTop} href="#home">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
