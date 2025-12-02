"use client";
import React, { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroRef.current.classList.add(styles.show);
          } else {
            heroRef.current.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className={styles.hero}>
      <img src="/bottel.png" alt="Bottle" />
    </div>
  );
}
