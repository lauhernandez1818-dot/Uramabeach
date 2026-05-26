"use client";

import { useState } from "react";
import styles from "./Spaces.module.css";

const SPACES = [
  {
    id: "balinesa",
    name: "Camas Balinesas",
    subtitle: "Relax Absoluto",
    description:
      "Sumérgete en el confort definitivo frente al mar. Nuestras camas balinesas con cortinas flotantes y servicio personalizado ofrecen la máxima privacidad y lujo bajo el sol caribeño.",
    image: "/balinese-daybed.png",
    features: ["Servicio Personalizado", "Champagne de Bienvenida", "WiFi Premium"],
    price: "Desde $150",
    capacity: "2-4 personas",
  },
  {
    id: "vip",
    name: "Zona VIP",
    subtitle: "Exclusividad Total",
    description:
      "Un espacio elevado con vistas panorámicas al océano, mobiliario premium, iluminación ambiental y bar privado. El lugar perfecto para celebraciones exclusivas y momentos inolvidables.",
    image: "/vip-zone.png",
    features: ["Bar Privado", "DJ Personal", "Piscina Infinity"],
    price: "Desde $500",
    capacity: "6-12 personas",
  },
  {
    id: "toldo",
    name: "Toldos Premium",
    subtitle: "Vista al Mar",
    description:
      "Toldos elegantes estratégicamente ubicados en primera línea de playa. Equipados con sillas lounger de diseñador, mesa de servicio y acceso directo a nuestro menú digital.",
    image: "/hero-beach.png",
    features: ["Primera Línea", "Menú Digital", "Toallas Premium"],
    price: "Desde $80",
    capacity: "2-4 personas",
  },
];

export default function Spaces() {
  const [activeSpace, setActiveSpace] = useState(0);
  const space = SPACES[activeSpace];

  return (
    <section className={styles.spaces} id="espacios">
      {/* Background */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className="container">
        {/* Header */}
        <div className={`${styles.header} scroll-reveal`}>
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Nuestros Espacios
          </span>
          <h2 className={styles.title}>
            Elige tu{" "}
            <span className="text-gold-gradient">Paraíso</span>
          </h2>
          <p className={styles.desc}>
            Cada rincón de UramaBeach ha sido diseñado para ofrecer una experiencia
            única. Selecciona el espacio que se adapta a tu estilo.
          </p>
        </div>

        {/* Space Tabs */}
        <div className={`${styles.tabs} scroll-reveal`}>
          {SPACES.map((s, i) => (
            <button
              key={s.id}
              className={`${styles.tab} ${activeSpace === i ? styles.tabActive : ""}`}
              onClick={() => setActiveSpace(i)}
            >
              <span className={styles.tabName}>{s.name}</span>
              <span className={styles.tabSub}>{s.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Space Content */}
        <div className={`${styles.content}`} key={activeSpace}>
          <div className={`${styles.imageCol} reveal-left`}>
            <div className={styles.imageFrame}>
              <img
                src={space.image}
                alt={space.name}
                className={`${styles.spaceImage} parallax-img`}
              />
              <div className={styles.imageGlow} />
            </div>
          </div>

          <div className={`${styles.infoCol} reveal-right`}>
            <div className={styles.spaceMeta}>
              <span className={styles.spacePrice}>{space.price}</span>
              <span className={styles.spaceCap}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
                {space.capacity}
              </span>
            </div>

            <h3 className={styles.spaceName}>{space.name}</h3>
            <p className={styles.spaceDesc}>{space.description}</p>

            <div className={styles.features}>
              {space.features.map((f, i) => (
                <div key={i} className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className={styles.spaceCta}>
              <a href="#reservas" className="btn btn-gold">
                Reservar Este Espacio
              </a>
              <a href="#contacto" className="btn btn-outline">
                Más Información
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
