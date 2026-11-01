"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 701px)");
    const closeMenuOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    desktopBreakpoint.addEventListener("change", closeMenuOnDesktop);
    return () => desktopBreakpoint.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#home"
          aria-label="NEXCRAFT Digital Agency, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.brandMark} aria-hidden="true">
            N
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>NEXCRAFT</span>
            <span className={styles.brandDescriptor}>Digital Agency</span>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.contactLink} href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className={styles.mobileNav}
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            {navigationItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.mobileIndex}>0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a
              className={styles.mobileContact}
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
