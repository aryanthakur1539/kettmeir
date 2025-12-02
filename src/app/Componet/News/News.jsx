import React from "react";
import styles from "./index.module.css";

export default function News() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>K-NEWS</h1>
        <button className={styles.allNewsBtn}>
          <span>→</span> Tutte le news
        </button>
      </div>

      <div className={styles.highlightSection}>
        <div className={styles.dateRow}>
          <span className={styles.filledDot}></span>
          <p>NOVEMBRE 2025</p>
        </div>

        <h2 className={styles.mainHeadline}>
          VINO ROSÈ: QUALI SONO GLI <br /> ABBINAMENTI MIGLIORI?
        </h2>

        <button className={styles.readBtn}>
          Leggi l'articolo <span>→</span>
        </button>

        <span className={styles.arrowUp}>↑</span>
      </div>

      <div className={styles.listSection}>
        <div className={styles.row}>
          <div className={styles.dateRow}>
            <span className={styles.hollowDot}></span>
            <p>NOVEMBRE 2025</p>
          </div>

          <p className={styles.rowTitle}>COSA VUOL DIRE “PAS DOSÉ”?</p>

          <span className={styles.arrowDown}>↓</span>
        </div>

        <div className={styles.row}>
          <div className={styles.dateRow}>
            <span className={styles.hollowDot}></span>
            <p>OTTOBRE 2025</p>
          </div>

          <div className={styles.rowTitleMulti}>
            <p>PINOT NERO: CARATTERISTICHE E CURIOSITÀ SUL</p>
            <p>VITIGNO</p>
          </div>

          <span className={styles.arrowDown}>↓</span>
        </div>
      </div>
    </div>
  );
}
