"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.css";

export default function Image() {
  const imgRef = useRef(null);
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

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <div className={styles.hero} ref={imgRef}>
      <img
        className={animate ? styles.animateImg : ""}
        src="/4.webp"
        alt="Kettmeir Bottle"
      />
    </div>
  );
}
