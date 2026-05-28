"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
  width: string;
  height: string;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Disable parallax on mobile to prevent scrolling lag
    if (window.innerWidth < 768) return;

    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Generate particles only on client to avoid SSR hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
      }))
    );
  }, []);

  return (
    <section className={styles.hero} id="inicio">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className={styles.bgWrapper}
      >
        <Image
          src="/iniciofondo.webp"
          alt="UramaBeach aerial view"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Floating Particles — client only, no SSR */}
      <div className={styles.particles}>
        {particles.map((p, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
              width: p.width,
              height: p.height,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.labelWrapper}>
          <span className={styles.label}>
            <span className={styles.labelDot} />
            Experiencia Exclusiva de Playa
          </span>
        </div>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            Donde el Lujo
          </span>
          <span className={`${styles.titleLine} ${styles.titleAccent}`}>
            Encuentra el Mar
          </span>
        </h1>

        <p className={styles.subtitle}>
          Descubre un oasis de exclusividad frente al Caribe. Camas balinesas,
          gastronomía gourmet, coctelería de autor y un servicio que redefine
          el concepto de playa premium.
        </p>

        <div className={styles.actions}>
          <a href="#reservas" className="btn btn-gold">
            <span style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:"0.5rem"}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Reservar Experiencia
            </span>
          </a>
          <a href="#experiencia" className="btn btn-outline">
            <span style={{position:"relative",zIndex:1,display:"flex",alignItems:"center",gap:"0.5rem"}}>
              Explorar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5★</span>
            <span className={styles.statLabel}>Experiencia</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Exclusivo</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>VIP</span>
            <span className={styles.statLabel}>Servicio</span>
          </div>
        </div>

        {/* Scroll Indicator - inside content flow */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span className={styles.scrollText}>Desliza hacia abajo</span>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,40 C360,120 720,0 1080,60 C1260,90 1380,40 1440,50 L1440,120 L0,120 Z"
            fill="var(--ocean-deep)"
          />
        </svg>
      </div>
    </section>
  );
}

