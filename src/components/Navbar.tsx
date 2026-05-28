"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Espacios", href: "#espacios" },
  { label: "Gastronomía", href: "#gastronomia" },
  { label: "Reservas", href: "#reservas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo} aria-label="UramaBeach Home">
          <img
            src="/logo.svg"
            alt="UramaBeach"
            className={styles.logoImg}
          />
        </a>

        {/* Desktop Navigation Wrapper */}
        <div className={styles.navContent}>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a href="#reservas" className={`btn btn-gold ${styles.ctaBtn}`}>
            Reservar Ahora
          </a>

          {/* Theme Toggle — desktop only, hidden on mobile */}
          <div className={styles.themeToggleDesktop}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          id="menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
      >
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{ animationDelay: `${i * 0.07}s` }}
              className={menuOpen ? styles.mobileItemVisible : ""}
            >
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reservas"
          className="btn btn-gold"
          onClick={handleNavClick}
          style={{ marginTop: "1.5rem", width: "100%" }}
        >
          Reservar Ahora
        </a>

        {/* Theme toggle inside mobile menu */}
        <div className={styles.mobileThemeRow}>
          <span className={styles.mobileThemeLabel}>Cambiar tema</span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
