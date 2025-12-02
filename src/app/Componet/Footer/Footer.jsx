import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.column}>
        <p className={styles.linkItem}>Manifesto</p>
        <p className={styles.linkItem}>Il Metodo Classico</p>
        <p className={styles.linkItem}>I Classici</p>
        <p className={styles.linkItem}>K-News</p>
        <p className={styles.linkItem}>Shop</p>
      </div>

      <div className={styles.column}>
        <p className={styles.linkItem}>Territorio</p>
        <p className={styles.linkItem}>Le Selezioni</p>
        <p className={styles.linkItem}>Esperienze</p>
        <p className={styles.linkItem}>Contatti</p>

        <div className={styles.langRow}>
          <span className={styles.langBtn}>IT</span>
          <span>EN</span>
          <span>DE</span>
        </div>
      </div>

      <div className={styles.centerBlock}>
        <div className={styles.logo}>♛</div>
        <h2>VIA DELLE CANTINE, 4</h2>
        <h2>39052 CALDARO (BZ)</h2>
        <h2>ITALIA</h2>
      </div>

      <div className={styles.newsletter}>
        <p className={styles.newsTitle}>
          AGGIORNAMENTI E CONTENUTI ESCLUSIVI DEL MONDO
          <br />
          KETTMEIR DIRETTAMENTE SULLA TUA INBOX.
        </p>

        <p className={styles.iscr}>Iscriviti</p>

        <div className={styles.emailInputContainer}>
          <input type="email" placeholder="La tua mail *" required />
          <button className={styles.arrowBtn}>
            <span>→</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
