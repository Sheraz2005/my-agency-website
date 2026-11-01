"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import styles from "./Portfolio.module.css";

const projects = [
  {
    number: "01",
    title: "Saffron Bistro",
    category: "Restaurant Website",
    description:
      "A refined restaurant website concept showcasing its menu, dining atmosphere, and essential details.",
    image: "/images/projects/saffron-bistro.webp",
    imageAlt:
      "Saffron Bistro restaurant website concept featuring a plated dish, dining navigation, and warm golden accents.",
  },
  {
    number: "02",
    title: "FitCraft",
    category: "Fitness Website",
    description:
      "A bold fitness website concept with workout programs and a high-energy visual direction.",
    image: "/images/projects/fitcraft-fitness.webp",
    imageAlt:
      "FitCraft fitness website concept showing a trainer lifting a dumbbell beside workout program content.",
  },
  {
    number: "03",
    title: "Wanderly",
    category: "Travel Website",
    description:
      "An image-led travel website concept highlighting destinations and a trip search experience.",
    image: "/images/projects/wanderly-travel.webp",
    imageAlt:
      "Wanderly travel website concept featuring a mountain destination, seated hiker, and trip search panel.",
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Portfolio() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} id="work" aria-labelledby="work-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.sectionIntro}
          variants={revealVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} /> Selected work
          </p>
          <h2 className={styles.title} id="work-title">Selected Work.</h2>
          <p className={styles.subtitle}>
            Digital experiences built with purpose and precision.
          </p>
        </motion.div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <motion.article
              className={styles.project}
              key={project.number}
              variants={revealVariants}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.18 }}
            >
              <motion.div
                className={styles.preview}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <div className={styles.projectImageWrap}>
                  <Image
                    className={styles.projectImage}
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 680px) 90vw, (max-width: 1200px) 50vw, 660px"
                  />
                </div>
                <span className={styles.previewGlow} />
                <span className={styles.conceptBadge}>
                  <span /> Concept Project
                </span>
              </motion.div>

              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <span>{project.number} <i>/</i> 03</span>
                  <span className={styles.category}>{project.category}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectBottom}>
                  <span>CONCEPT PROJECT</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
