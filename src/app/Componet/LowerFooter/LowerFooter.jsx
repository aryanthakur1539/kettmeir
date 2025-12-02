"use client";
import React from "react";
import styles from "./index.module.css";

export default function LowerFooter() {
  return (
    <div className={styles.heroSection}>
      <img src="/6.webp" alt="Background" className={styles.bgImage} />

      <div className={styles.contentWrapper}>
        <h1 className={styles.mainHeading}>
          ESPERIENZE <br /> E OSPITALITÀ
        </h1>

        <p className={styles.description}>
          Scopri l'autenticità, l'eleganza e gli aspetti più sorprendenti
          dell'Alto Adige con i live tour, le degustazioni e gli eventi in
          programma nella nostra cantina.
        </p>

        <button className={styles.visitBtn}>
          <span className={styles.arrow}>→</span> VIENI A TROVARCI
        </button>
      </div>
    </div>
  );
}
