"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  LayoutTemplate,
  PanelsTopLeft,
  PenTool,
  RefreshCw,
} from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Modern, responsive and visually engaging websites built using Next.js and React.",
    icon: PanelsTopLeft,
    detail: "DESIGN · FRONTEND DEVELOPMENT",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces, thoughtful layouts and user-friendly digital experiences.",
    icon: PenTool,
    detail: "RESEARCH · INTERFACE DESIGN",
  },
  {
    number: "03",
    title: "Landing Page Development",
    description:
      "High-quality landing pages for startups, products, campaigns and businesses.",
    icon: LayoutTemplate,
    detail: "CAMPAIGNS · PRODUCT LAUNCHES",
  },
  {
    number: "04",
    title: "Website Redesign & Optimization",
    description:
      "Modernizing outdated websites with responsive layouts, improved usability and frontend performance.",
    icon: RefreshCw,
    detail: "RESPONSIVE · PERFORMANCE",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} id="services" aria-labelledby="services-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.sectionIntro}
          variants={sectionVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} /> What we do
          </p>
          <div className={styles.headingRow}>
            <div>
              <h2 className={styles.title} id="services-title">
                Frontend, <span>with intent.</span>
              </h2>
              <p className={styles.introCopy}>
                Focused design and development services for a more thoughtful web.
              </p>
            </div>
            <span className={styles.sectionIndex} aria-hidden="true">
              SERVICES <span>01 — 04</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={sectionVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                className={styles.card}
                key={service.number}
                variants={cardVariants}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.number}>{service.number}</span>
                  <span className={styles.iconWrap}>
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <ArrowUpRight className={styles.cardArrow} size={17} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span>{service.detail}</span>
                  <span className={styles.footerMark} aria-hidden="true" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
