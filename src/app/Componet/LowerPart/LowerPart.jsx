"use client";
import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function LowerPart() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add(styles.animate);
          } else {
            section.classList.remove(styles.animate);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.section} ${styles.hidden}`} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.smallheading}>OURS</h2>

        <h1 className={styles.mainheading}>UPPER ADIGE</h1>

        <p className={styles.description}>
          We have always found in the beauty of our land
          <br />
          the inspiration to enhance its centuries-old winemaking
          <br />
          tradition
          <br />
          and create our wines.
        </p>

        <button className={styles.button}>
          <span className={styles.icon}>→</span>
          <span className={styles.text}>DISCOVER THE AREA</span>
        </button>
      </div>
    </div>
  );
}
