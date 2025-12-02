"use client";
import { useState } from "react";
import styles from "./index.module.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoSection}>
        <img src="/logo.png" alt="Logo" width={60} height={60} />
      </div>

      {/* HAMBURGER ANIMATED ICON */}
      <div
        className={`${styles.hamburger} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`${styles.navLinks} ${open ? styles.openMenu : ""}`}>
        <li>MANIFESTO</li>
        <li>TERRITORIO</li>
        <li>IL METODO CLASSICO</li>
        <li className={styles.dropdown}>
          VINI <span className={styles.arrow}>▼</span>
        </li>
        <li>ESPERIENZE</li>
        <li>K-NEWS</li>
        <li>CONTATTI</li>
        <li>SHOP</li>
      </ul>

      <div className={styles.lang}>IT</div>
    </nav>
  );
}
