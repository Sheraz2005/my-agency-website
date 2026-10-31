"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Portfolio.module.css";

const projects = [
  {
    number: "01",
    title: "Business Website",
    category: "Website Development",
    description: "A modern digital presence for a growing business.",
    visual: "business",
  },
  {
    number: "02",
    title: "Creative Landing Page",
    category: "UI Development",
    description:
      "A visually engaging landing page designed around clarity and conversion.",
    visual: "landing",
  },
  {
    number: "03",
    title: "Digital Studio",
    category: "Frontend Experience",
    description:
      "An immersive digital experience combining bold typography and thoughtful interactions.",
    visual: "studio",
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

function BrowserFrame({ variant }) {
  return (
    <div className={styles.browserFrame} aria-hidden="true">
      <div className={styles.browserBar}>
        <div className={styles.browserDots}>
          <i />
          <i />
          <i />
        </div>
        <span className={styles.addressBar}>nexcraft.studio / concept</span>
        <span className={styles.browserMenu}>•••</span>
      </div>

      {variant === "business" && (
        <div className={styles.businessScreen}>
          <div className={styles.businessNav}>
            <span className={styles.businessMark}>FORM / FIELD</span>
            <span>ABOUT&nbsp;&nbsp;&nbsp; SERVICES&nbsp;&nbsp;&nbsp; CONTACT</span>
          </div>
          <div className={styles.businessContent}>
            <div className={styles.businessCopy}>
              <span className={styles.previewEyebrow}>A CLEARER DIRECTION</span>
              <strong>Build around<br />what matters.</strong>
              <span className={styles.previewLink}>Discover the approach <b>↗</b></span>
            </div>
            <div className={styles.businessArt}>
              <span className={styles.businessArch} />
              <span className={styles.businessOrb} />
              <span className={styles.businessArtLine} />
              <span className={styles.businessArtCaption}>FORM FOLLOWS FEELING — 01</span>
            </div>
          </div>
          <div className={styles.businessFoot}>
            <span>INDEPENDENT BY DESIGN</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      )}

      {variant === "landing" && (
        <div className={styles.landingScreen}>
          <div className={styles.landingNav}>
            <span>FORM<span className={styles.landingMark}>+</span></span>
            <span>THE NEW COLLECTION</span>
            <span className={styles.landingNavButton}>EXPLORE&nbsp; ↗</span>
          </div>
          <div className={styles.landingHero}>
            <div className={styles.landingCopy}>
              <span className={styles.previewEyebrow}>MADE FOR WHAT&apos;S NEXT</span>
              <strong>Make room<br />for more.</strong>
              <span className={styles.landingCaption}>Thoughtfully made. Ready to move.</span>
              <span className={styles.landingButton}>Find your next <b>↗</b></span>
            </div>
            <div className={styles.landingArt}>
              <span className={styles.landingOrb} />
              <span className={styles.landingRing} />
              <span className={styles.landingLight} />
            </div>
          </div>
          <div className={styles.landingFoot}>01 — 03 <span>BUILT TO STAND APART</span></div>
        </div>
      )}

      {variant === "studio" && (
        <div className={styles.studioScreen}>
          <div className={styles.studioNav}>
            <span className={styles.studioLogo}>N°<i>FORM</i></span>
            <span>SELECTED WORK&nbsp;&nbsp;&nbsp; STUDIO&nbsp;&nbsp;&nbsp; CONTACT</span>
          </div>
          <div className={styles.studioCenter}>
            <span className={styles.studioNote}>CREATIVE PRACTICE — VISUAL SYSTEM</span>
            <strong>IN<br /><span>FORM</span></strong>
            <div className={styles.studioShape}>
              <span />
            </div>
            <span className={styles.studioIndex}>DESIGN THAT MOVES WITH YOU</span>
          </div>
          <div className={styles.studioFoot}>
            <span>INDEPENDENT DIGITAL STUDIO</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      )}
    </div>
  );
}

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
                <div className={styles.mockupWrap}>
                  <BrowserFrame variant={project.visual} />
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
