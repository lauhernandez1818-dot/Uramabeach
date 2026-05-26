"use client";

import { useState } from "react";
import styles from "./Booking.module.css";

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const DAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

export default function Booking() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedSpace, setSelectedSpace] = useState("balinesa");
  const [guests, setGuests] = useState(2);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isPast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  // Simulate some availability
  const getAvailability = (day: number) => {
    if (isPast(day)) return "past";
    const hash = (day * 7 + currentMonth * 13) % 10;
    if (hash < 2) return "limited";
    if (hash < 4) return "popular";
    return "available";
  };

  return (
    <section className={styles.booking} id="reservas">
      <div className={styles.bgPattern} />

      <div className="container">
        {/* Header */}
        <div className={`${styles.header} scroll-reveal`}>
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Motor de Reservas
          </span>
          <h2 className={styles.title}>
            Reserva tu{" "}
            <span className="text-gradient">Experiencia</span>
          </h2>
          <p className={styles.desc}>
            Selecciona tu fecha, elige tu espacio ideal y confirma en segundos.
            Disponibilidad en tiempo real y confirmación instantánea.
          </p>
        </div>

        {/* Booking Grid */}
        <div className={`${styles.grid} scroll-reveal`}>
          {/* Calendar */}
          <div className={styles.calendarCard}>
            <div className={styles.calendarHeader}>
              <button onClick={prevMonth} className={styles.calNav}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <h3 className={styles.calMonth}>
                {MONTHS[currentMonth]} {currentYear}
              </h3>
              <button onClick={nextMonth} className={styles.calNav}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div className={styles.calDays}>
              {DAYS.map((d) => (
                <span key={d} className={styles.calDayLabel}>
                  {d}
                </span>
              ))}
            </div>

            <div className={styles.calGrid}>
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className={styles.calEmpty} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const avail = getAvailability(day);
                return (
                  <button
                    key={day}
                    className={`${styles.calDay} ${
                      selectedDate === day ? styles.calDaySelected : ""
                    } ${isToday(day) ? styles.calDayToday : ""} ${
                      styles[`cal_${avail}`]
                    }`}
                    onClick={() => !isPast(day) && setSelectedDate(day)}
                    disabled={isPast(day)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className={styles.calLegend}>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.dotAvailable}`} />
                Disponible
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.dotPopular}`} />
                Popular
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.legendDot} ${styles.dotLimited}`} />
                Últimas plazas
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Detalles de la Reserva</h3>

            {/* Selected Date */}
            <div className={styles.formField}>
              <label className={styles.formLabel}>Fecha Seleccionada</label>
              <div className={styles.dateDisplay}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                </svg>
                {selectedDate
                  ? `${selectedDate} de ${MONTHS[currentMonth]}, ${currentYear}`
                  : "Selecciona una fecha en el calendario"}
              </div>
            </div>

            {/* Space Selection */}
            <div className={styles.formField}>
              <label className={styles.formLabel}>Tipo de Espacio</label>
              <div className={styles.spaceOptions}>
                {[
                  { id: "balinesa", label: "Cama Balinesa", price: "$150" },
                  { id: "vip", label: "Zona VIP", price: "$500" },
                  { id: "toldo", label: "Toldo Premium", price: "$80" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    className={`${styles.spaceOpt} ${
                      selectedSpace === opt.id ? styles.spaceOptActive : ""
                    }`}
                    onClick={() => setSelectedSpace(opt.id)}
                  >
                    <span className={styles.spaceOptName}>{opt.label}</span>
                    <span className={styles.spaceOptPrice}>{opt.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Guests */}
            <div className={styles.formField}>
              <label className={styles.formLabel}>Número de Huéspedes</label>
              <div className={styles.guestControl}>
                <button
                  className={styles.guestBtn}
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                >
                  −
                </button>
                <span className={styles.guestCount}>{guests}</span>
                <button
                  className={styles.guestBtn}
                  onClick={() => setGuests(Math.min(12, guests + 1))}
                >
                  +
                </button>
              </div>
            </div>

            {/* Summary */}
            {selectedDate && (
              <div className={styles.summary}>
                <div className={styles.summaryRow}>
                  <span>Espacio</span>
                  <span>{selectedSpace === "balinesa" ? "Cama Balinesa" : selectedSpace === "vip" ? "Zona VIP" : "Toldo Premium"}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Fecha</span>
                  <span>{selectedDate} {MONTHS[currentMonth]}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Huéspedes</span>
                  <span>{guests} personas</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                  <span>Total Estimado</span>
                  <span>
                    ${selectedSpace === "balinesa" ? 150 : selectedSpace === "vip" ? 500 : 80}
                  </span>
                </div>
              </div>
            )}

            {/* CTA */}
            <button
              className={`btn btn-gold ${styles.bookBtn}`}
              disabled={!selectedDate}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Confirmar Reserva
            </button>

            <p className={styles.formNote}>
              Al confirmar, recibirás un pase QR digital para acceso VIP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
