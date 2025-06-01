"use client";

import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Financial Manage &copy; {currentYear}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
