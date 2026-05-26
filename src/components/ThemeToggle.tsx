"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="1.5" x2="12" y2="3.5" />
      <line x1="12" y1="20.5" x2="12" y2="22.5" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1.5" y1="12" x2="3.5" y2="12" />
      <line x1="20.5" y1="12" x2="22.5" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [iconHidden, setIconHidden] = useState(false);

  /* Restore saved theme without flash */
  useEffect(() => {
    const saved = localStorage.getItem("uramabeach-theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggle = () => {
    if (spinning) return;

    // Step 1 — start coin flip
    setSpinning(true);

    // Step 2 — hide icon at the midpoint (coin edge = invisible)
    setTimeout(() => setIconHidden(true), 200);

    // Step 3 — switch theme while icon is hidden
    setTimeout(() => {
      const newDark = !isDark;
      setIsDark(newDark);
      document.documentElement.setAttribute("data-theme", newDark ? "dark" : "light");
      localStorage.setItem("uramabeach-theme", newDark ? "dark" : "light");
    }, 280);

    // Step 4 — reveal new icon
    setTimeout(() => setIconHidden(false), 350);

    // Step 5 — done
    setTimeout(() => setSpinning(false), 580);
  };

  return (
    <div className={styles.toggleWrapper}>
      <button
        id="theme-toggle"
        className={[
          styles.toggle,
          isDark ? styles.toggleDark : styles.toggleLight,
          spinning ? styles.spinning : "",
        ].join(" ")}
        onClick={toggle}
        aria-label={isDark ? "Cambiar a modo día" : "Cambiar a modo noche"}
        title={isDark ? "Modo Día" : "Modo Noche"}
      >
        <span className={[styles.iconWrap, iconHidden ? styles.iconHidden : ""].join(" ")}>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
        <span className={styles.orbitRing} aria-hidden="true" />
      </button>
    </div>
  );
}
