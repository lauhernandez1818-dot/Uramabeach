"use client";

import styles from "./Gastronomy.module.css";

const MENU_ITEMS = [
  {
    name: "Langosta Caribeña",
    desc: "Grillada con mantequilla de hierbas, salsa de mango tropical y vegetales de temporada",
    price: "$85",
    tag: "Chef's Choice",
  },
  {
    name: "Ceviche de Corvina",
    desc: "Corvina fresca marinada en limón, ají limo, cebolla morada y cilantro caribeño",
    price: "$42",
    tag: "Popular",
  },
  {
    name: "Pulpo a la Brasa",
    desc: "Pulpo gallego sobre hummus de carbón, pimientos asados y reducción balsámica",
    price: "$65",
    tag: "",
  },
  {
    name: "Tartar de Atún Rojo",
    desc: "Atún bluefin con aguacate cremoso, sésamo negro y emulsión de ponzu",
    price: "$58",
    tag: "Premium",
  },
];

const COCKTAILS = [
  { name: "Blue Lagoon Royal", desc: "Curaçao azul, vodka premium, champagne", price: "$28" },
  { name: "Sunset Urama", desc: "Ron añejo, maracuyá, granadina artesanal", price: "$24" },
  { name: "Golden Margarita", desc: "Tequila reposado, Grand Marnier, lima gold", price: "$26" },
  { name: "Caribbean Mojito", desc: "Ron blanco, hierbabuena fresca, lima, soda", price: "$18" },
];

export default function Gastronomy() {
  return (
    <section className={styles.gastronomy} id="gastronomia">
      {/* Background */}
      <div className={styles.bgGradient} />

      <div className="container">
        {/* Header */}
        <div className={`${styles.header} scroll-reveal`}>
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8h1a4 4 0 010 8h-1" />
              <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            Gastronomía & Coctelería
          </span>
          <h2 className={styles.title}>
            Sabores del{" "}
            <span className="text-gradient">Caribe</span>
          </h2>
          <p className={styles.desc}>
            Una experiencia gastronómica donde cada plato cuenta una historia.
            Nuestros chefs combinan ingredientes locales con técnicas de vanguardia.
          </p>
        </div>

        {/* Main Grid */}
        <div className={styles.mainGrid}>
          {/* Food Image + Cocktail */}
          <div className={`${styles.mediaCol} scroll-reveal`}>
            <div className={styles.foodFrame}>
              <img
                src="/gastronomy-dish.png"
                alt="Gastronomía gourmet UramaBeach"
                className={styles.foodImg}
              />
              <div className={styles.foodOverlay}>
                <span className={styles.foodBadge}>🍽️ Gastronomía Gourmet</span>
              </div>
            </div>
            <div className={styles.cocktailFrame}>
              <img
                src="/cocktail-premium.png"
                alt="Coctelería premium"
                className={styles.cocktailImg}
              />
              <div className={styles.foodOverlay}>
                <span className={styles.foodBadge}>🍸 Coctelería de Autor</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className={styles.menuCol}>
            {/* Food Menu */}
            <div className={`${styles.menuSection} scroll-reveal`}>
              <h3 className={styles.menuTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
                Especialidades del Chef
              </h3>
              <div className={styles.menuItems}>
                {MENU_ITEMS.map((item, i) => (
                  <div key={i} className={styles.menuItem}>
                    <div className={styles.menuItemHeader}>
                      <div className={styles.menuItemName}>
                        <h4>{item.name}</h4>
                        {item.tag && (
                          <span className={styles.menuTag}>{item.tag}</span>
                        )}
                      </div>
                      <span className={styles.menuPrice}>{item.price}</span>
                    </div>
                    <p className={styles.menuItemDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cocktail Menu */}
            <div className={`${styles.menuSection} scroll-reveal`}>
              <h3 className={styles.menuTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" strokeWidth="2">
                  <path d="M8 22h8" />
                  <path d="M12 11v11" />
                  <path d="M20 5H4l4 6h8z" />
                </svg>
                Cocteles Signature
              </h3>
              <div className={styles.cocktailGrid}>
                {COCKTAILS.map((c, i) => (
                  <div key={i} className={styles.cocktailCard}>
                    <div className={styles.cocktailInfo}>
                      <h4 className={styles.cocktailName}>{c.name}</h4>
                      <p className={styles.cocktailDesc}>{c.desc}</p>
                    </div>
                    <span className={styles.cocktailPrice}>{c.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.menuCta}>
              <a href="#reservas" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 8l-8 8" />
                  <path d="M8 8h8v8" />
                </svg>
                Ver Menú Completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
