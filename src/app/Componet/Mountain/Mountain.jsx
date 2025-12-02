"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.css";

export default function Mountain() {
  const heroRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div ref={heroRef} className={styles.hero}>
      <h1 className={`${styles.title} ${animate ? styles.animateTitle : ""}`}>
        STYLISTIC ELEGANCE <br /> OF THE MOUNTAIN
      </h1>

      <p
        className={`${styles.subtitle} ${
          animate ? styles.animateSubtitle : ""
        }`}
      >
        Fascinated by the prestigious potential of the Classic Method,
        <br />
        we bring the finesse of South Tyrolean bubbles towards
        <br />
        horizons still unexplored.
      </p>

      <button
        className={`${styles.ctaBtn} ${animate ? styles.animateBtn : ""}`}
      >
        <span className={styles.circle}>→</span>
        <span className={styles.text}>DISCOVER THE CLASSIC METHOD</span>
      </button>
    </div>
  );
}
