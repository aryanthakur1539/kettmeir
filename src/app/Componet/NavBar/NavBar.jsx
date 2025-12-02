import Image from "next/image";
import styles from "./index.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoSection}>
        <img src="/logo.png" alt="Logo" width={60} height={60} />
      </div>

      <ul className={styles.navLinks}>
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
