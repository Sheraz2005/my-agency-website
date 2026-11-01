"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Shapes, UserRound } from "lucide-react";
import Image from "next/image";
import styles from "./About.module.css";

const principles = [
  {
    number: "01",
    title: "Thoughtful Design",
    description: "Every detail has a purpose.",
    icon: Shapes,
  },
  {
    number: "02",
    title: "Modern Technology",
    description: "Building with modern frontend technologies.",
    icon: Code2,
  },
  {
    number: "03",
    title: "User First",
    description: "Experiences designed around people.",
    icon: UserRound,
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
};

const principleVariants = {
  hidden: { opacity: 0, x: 14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.editorial}
          variants={revealVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.32 }}
        >
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} /> A little about us
          </p>
          <h2 className={styles.title} id="about-title">
            Good design gets attention. <span>Great experiences earn trust.</span>
          </h2>
          <div className={styles.signature} aria-hidden="true">
            <Image
              className={styles.signatureLogo}
              src="/images/brand/nexcraft-logo-transparent.png"
              alt=""
              width={178}
              height={61}
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.content}
          variants={revealVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.22 }}
        >
          <div className={styles.description}>
            <p>
              NEXCRAFT is an independent digital studio focused on crafting
              thoughtful, modern and engaging web experiences.
            </p>
            <p>
              We combine creative design with modern frontend technologies to
              help businesses establish a stronger digital presence.
            </p>
          </div>

          <div className={styles.principlesHeading}>
            <span>What guides us</span>
            <span className={styles.principlesCount}>03 PRINCIPLES</span>
          </div>

          <ul className={styles.principles}>
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <motion.li
                  className={styles.principle}
                  key={principle.number}
                  variants={principleVariants}
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <span className={styles.principleNumber}>{principle.number}</span>
                  <span className={styles.principleIcon}>
                    <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className={styles.principleCopy}>
                    <span className={styles.principleTitle}>{principle.title}</span>
                    <span className={styles.principleDescription}>{principle.description}</span>
                  </span>
                  <span className={styles.principleMarker} aria-hidden="true" />
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
