"use client";

import Image from "next/image";
import styles from "./Experience.module.css";

const FEATURES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Reservas Inteligentes",
    description:
      "Motor de reservas en tiempo real con calendario interactivo. Selecciona tus fechas, elige tu espacio ideal y confirma con un solo toque.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h2m4 0h4" />
        <path d="M7 12h10" />
      </svg>
    ),
    title: "Check-In Digital VIP",
    description:
      "Pre check-in desde tu teléfono, pase QR exclusivo para acceso rápido y check-out exprés. Cero filas, pura exclusividad.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Smart Service",
    description:
      "Menú digital premium con pedidos directos a tu toldo o mesa. Escanea, pide y disfruta sin interrupciones.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    title: "Hub de Comunicación",
    description:
      "WhatsApp con mensajes preconfigurados, ubicación guiada GPS, redes sociales — todo integrado en un ecosistema elegante.",
  },
];

export default function Experience() {
  return (
    <section className={styles.experience} id="experiencia">
      {/* Background Decoration */}
      <div className={styles.bgGlow} />

      <div className="container">
        {/* Section Header */}
        <div className={`${styles.header} scroll-reveal`}>
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Experiencia Digital
          </span>
          <h2 className={styles.title}>
            Tecnología al Servicio del{" "}
            <span className="text-gradient">Placer</span>
          </h2>
          <p className={styles.description}>
            Una plataforma integral que transforma cada visita en una experiencia
            memorable. Desde la reserva hasta el check-out, cada interacción está
            diseñada para la perfección.
          </p>
        </div>

        {/* Feature Grid */}
        <div className={styles.grid}>
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className={`${styles.card} reveal-scale`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.cardIcon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              <div className={styles.cardShine} />
            </div>
          ))}
        </div>

        {/* Aerial Image */}
        <div className={`${styles.showcase} scroll-reveal`}>
          <div className={styles.showcaseFrame}>
            <Image
              src="/foto1.webp"
              alt="Vista aérea de playa UramaBeach"
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              className={styles.showcaseImg}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.showcaseOverlay}>
              <span className={styles.showcaseBadge}>
                Vista Aérea del Complejo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
