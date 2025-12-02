"use client";
import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function Center() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wrapperRef.current.classList.add(styles.show);
          } else {
            wrapperRef.current.classList.remove(styles.show); // RESET animation
          }
        });
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <h2 className={styles.line}>
        With ours
        <img src="/1.webp" alt="wine" className={styles.inlineImg} />
        wines
      </h2>

      <h2 className={styles.lineItalic}>let's tell all this</h2>

      <h2 className={styles.line}>
        <img src="/2.webp" alt="food" className={styles.inlineImg} />
        which makes <span className={styles.italic}>outstanding</span>
      </h2>

      <h2 className={styles.line}>
        our land<span className={styles.dot}>,</span>
      </h2>

      <h2 className={styles.line}>
        south Tyrol.
        <img src="/3.jpg" alt="mountain" className={styles.inlineImg} />
        Since 1919.
      </h2>
    </div>
  );
}
