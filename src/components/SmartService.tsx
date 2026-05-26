"use client";

import styles from "./SmartService.module.css";

const STEPS = [
  {
    step: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 8l-8 8" />
        <path d="M8 8h8v8" />
      </svg>
    ),
    title: "Escanea el QR",
    description: "Escanea el código QR ubicado en tu cama balinesa, toldo o zona VIP.",
  },
  {
    step: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Explora el Menú",
    description: "Navega nuestro menú interactivo con fotos de alta resolución de cada platillo.",
  },
  {
    step: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Pide y Disfruta",
    description: "Tu pedido llega directo a la cocina o barra. Relájate, nosotros nos encargamos.",
  },
];

export default function SmartService() {
  return (
    <section className={styles.smart} id="smartservice">
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Phone Mockup */}
          <div className={`${styles.phoneCol} scroll-reveal`}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                {/* Simulated App UI */}
                <div className={styles.appHeader}>
                  <img src="/logo.svg" alt="Logo" className={styles.appLogo} />
                  <span className={styles.appTitle}>Smart Service</span>
                </div>

                <div className={styles.appContent}>
                  <div className={styles.appLabel}>Tu ubicación: <strong>Balinesa #7</strong></div>

                  <div className={styles.appCategory}>🍸 Cocteles</div>
                  <div className={styles.appItem}>
                    <div className={styles.appItemImg} style={{ background: "linear-gradient(135deg, #00b4d8, #0d1f3c)" }} />
                    <div className={styles.appItemInfo}>
                      <span className={styles.appItemName}>Blue Lagoon Royal</span>
                      <span className={styles.appItemPrice}>$28</span>
                    </div>
                    <button className={styles.appAddBtn}>+</button>
                  </div>
                  <div className={styles.appItem}>
                    <div className={styles.appItemImg} style={{ background: "linear-gradient(135deg, #ff8c42, #d4a853)" }} />
                    <div className={styles.appItemInfo}>
                      <span className={styles.appItemName}>Sunset Urama</span>
                      <span className={styles.appItemPrice}>$24</span>
                    </div>
                    <button className={styles.appAddBtn}>+</button>
                  </div>

                  <div className={styles.appCategory}>🍽️ Especialidades</div>
                  <div className={styles.appItem}>
                    <div className={styles.appItemImg} style={{ background: "linear-gradient(135deg, #ff6b6b, #d4a853)" }} />
                    <div className={styles.appItemInfo}>
                      <span className={styles.appItemName}>Langosta Caribeña</span>
                      <span className={styles.appItemPrice}>$85</span>
                    </div>
                    <button className={styles.appAddBtn}>+</button>
                  </div>
                </div>

                <div className={styles.appCart}>
                  <span>2 items · $52</span>
                  <button className={styles.appOrderBtn}>Pedir Ahora</button>
                </div>
              </div>
            </div>
            <div className={styles.phoneGlow} />
          </div>

          {/* Right: Info */}
          <div className={styles.infoCol}>
            <div className="scroll-reveal">
              <span className="section-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                Smart Service
              </span>
              <h2 className={styles.title}>
                Tu Menú, en la{" "}
                <span className="text-gradient">Palma de tu Mano</span>
              </h2>
              <p className={styles.description}>
                Olvídate de esperar al mesero. Con nuestro sistema de pedidos
                inteligente, ordenas desde tu teléfono y nosotros llevamos
                la experiencia gourmet directo a tu ubicación.
              </p>
            </div>

            {/* Steps */}
            <div className={styles.steps}>
              {STEPS.map((s, i) => (
                <div key={i} className={`${styles.step} scroll-reveal`}>
                  <div className={styles.stepIcon}>{s.icon}</div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepNum}>{s.step}</span>
                    <h4 className={styles.stepTitle}>{s.title}</h4>
                    <p className={styles.stepDesc}>{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
