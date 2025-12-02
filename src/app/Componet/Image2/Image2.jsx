"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Image2() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - rect.top / windowHeight;
        const newScale = 0.3 + Math.min(Math.max(progress, 0), 1) * 0.7;
        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={styles.hero}>
      <img
        ref={imgRef}
        src="/5.webp"
        alt="Kettmeir Bottle"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.2s ease-out",
          transformOrigin: "center center",
        }}
      />
    </div>
  );
}
