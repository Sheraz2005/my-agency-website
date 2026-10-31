"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.css";

function ChromeComposition({ reduceMotion }) {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.visualGrid} />
      <motion.div
        className={styles.chromeObject}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.88, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.svg
          className={styles.objectSvg}
          viewBox="0 0 620 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <radialGradient id="chromeFace" cx="0" cy="0" r="1" gradientTransform="matrix(220 265 -265 220 208 140)" gradientUnits="userSpaceOnUse">
              <stop offset="0.02" stopColor="#FFFFFF" />
              <stop offset="0.12" stopColor="#D8E2E0" />
              <stop offset="0.24" stopColor="#738381" />
              <stop offset="0.36" stopColor="#F4F8F7" />
              <stop offset="0.48" stopColor="#657573" />
              <stop offset="0.62" stopColor="#DCE5E3" />
              <stop offset="0.78" stopColor="#53615F" />
              <stop offset="0.91" stopColor="#E9EFEE" />
              <stop offset="1" stopColor="#687775" />
            </radialGradient>
            <linearGradient id="chromeRibbon" x1="117" y1="111" x2="504" y2="513" gradientUnits="userSpaceOnUse">
              <stop stopColor="#53615F" />
              <stop offset="0.17" stopColor="#F4F8F7" />
              <stop offset="0.31" stopColor="#71817F" />
              <stop offset="0.5" stopColor="#EAF0EF" />
              <stop offset="0.68" stopColor="#5B6967" />
              <stop offset="0.85" stopColor="#F7FAF9" />
              <stop offset="1" stopColor="#53615F" />
            </linearGradient>
            <linearGradient id="tealEdge" x1="156" y1="445" x2="486" y2="183" gradientUnits="userSpaceOnUse">
              <stop stopColor="#75B8B0" stopOpacity="0" />
              <stop offset="0.48" stopColor="#A9E3DB" />
              <stop offset="1" stopColor="#75B8B0" stopOpacity="0" />
            </linearGradient>
            <filter id="objectShadow" x="38" y="36" width="544" height="548" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="22" />
            </filter>
            <filter id="softGlow" x="0" y="0" width="620" height="620" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          <ellipse cx="318" cy="325" rx="188" ry="165" fill="#75B8B0" fillOpacity="0.18" filter="url(#objectShadow)" />
          <ellipse cx="310" cy="310" rx="222" ry="103" stroke="url(#tealEdge)" strokeWidth="1.2" transform="rotate(-36 310 310)" filter="url(#softGlow)" />
          <motion.ellipse
            cx="310"
            cy="310"
            rx="222"
            ry="103"
            stroke="url(#chromeRibbon)"
            strokeWidth="18"
            transform="rotate(-36 310 310)"
            animate={reduceMotion ? undefined : { rotate: [0, 3, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "310px 310px" }}
          />
          <circle cx="310" cy="310" r="137" fill="url(#chromeFace)" />
          <circle cx="310" cy="310" r="136.5" stroke="#F7FAF9" strokeOpacity="0.55" />
          <path d="M211 224C239 189 291 171 338 178" stroke="#FFFFFF" strokeOpacity="0.82" strokeWidth="3" strokeLinecap="round" />
          <path d="M394 399C368 429 325 444 286 440" stroke="#142324" strokeOpacity="0.72" strokeWidth="7" strokeLinecap="round" />
          <circle cx="456" cy="163" r="21" fill="url(#chromeRibbon)" />
          <circle cx="456" cy="163" r="21" stroke="#FFFFFF" strokeOpacity="0.55" />
          <circle cx="160" cy="445" r="10" fill="#75B8B0" />
          <circle cx="160" cy="445" r="21" fill="#75B8B0" fillOpacity="0.16" filter="url(#softGlow)" />
        </motion.svg>
      </motion.div>
      <motion.span
        className={styles.orbitLabel}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.45, duration: reduceMotion ? 0 : 0.5 }}
      >
        <span /> Digital, refined.
      </motion.span>
      <span className={styles.visualIndex}>01 / 04</span>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.heroInner}>
        <motion.div
          className={styles.copy}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} /> Independent digital agency
          </p>
          <h1 className={styles.title} id="hero-title">
            We craft
            <br />
            <span>digital</span> experiences.
          </h1>
          <p className={styles.description}>
            We transform ambitious ideas into exceptional digital experiences
            through thoughtful design and modern technology.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryCta} href="#work">
              Explore our work <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a className={styles.secondaryCta} href="#contact">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.scrollCue}>
            <ArrowDown size={14} aria-hidden="true" />
            <span>Scroll to explore</span>
          </div>
        </motion.div>

        <ChromeComposition reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}
