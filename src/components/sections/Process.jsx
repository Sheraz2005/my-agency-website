"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCheck, Code2, Compass, PenTool } from "lucide-react";
import styles from "./Process.module.css";

const stages = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, goals and audience.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    description: "Create the visual direction, layouts and user experience.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    description: "Transform approved designs into responsive websites.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deliver",
    description: "Test, refine and prepare the website for launch.",
    icon: CheckCheck,
  },
];

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.08 },
  },
};

const stageVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} id="process" aria-labelledby="process-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.intro}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} /> How we work
            </p>
            <h2 className={styles.title} id="process-title">
              A thoughtful process. <span>Exceptional outcomes.</span>
            </h2>
          </div>
          <p className={styles.description}>
            Every great digital experience starts with a clear process. We turn
            ideas into polished experiences through four carefully considered
            stages.
          </p>
        </motion.div>

        <motion.ol
          className={styles.timeline}
          variants={timelineVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.22 }}
        >
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <motion.li
                className={styles.stage}
                key={stage.number}
                variants={stageVariants}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <span className={styles.stageNode} aria-hidden="true">
                  <Icon className={styles.stageIcon} size={15} strokeWidth={1.6} />
                  <span className={styles.stageNumber}>{stage.number}</span>
                </span>
                <div className={styles.stageContent}>
                  <span className={styles.stageLabel}>Stage {stage.number}</span>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDescription}>{stage.description}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
