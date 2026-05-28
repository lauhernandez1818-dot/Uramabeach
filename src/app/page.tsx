"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Spaces from "@/components/Spaces";
import Gastronomy from "@/components/Gastronomy";
import Booking from "@/components/Booking";
import SmartService from "@/components/SmartService";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

/* Beach photo strip divider */
function BeachDivider({ src, alt, height = 280 }: { src: string; alt: string; height?: number }) {
  return (
    <div style={{
      width: "100%",
      height,
      overflow: "hidden",
      position: "relative",
      margin: 0,
      padding: 0,
    }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center 40%",
        }}
      />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.35) 100%)",
        zIndex: 1,
      }} />
    </div>
  );
}

export default function Home() {
  return (
    <ScrollAnimator>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <BeachDivider src="/foto1.webp" alt="Vista aérea playa UramaBeach" height={260} />
        <Spaces />
        <BeachDivider src="/beach-waves.png" alt="Olas playa caribeña" height={220} />
        <Gastronomy />
        <BeachDivider src="/beach-sunset.png" alt="Atardecer playa UramaBeach" height={260} />
        <Booking />
        <SmartService />
        <ContactHub />
      </main>
      <Footer />
    </ScrollAnimator>
  );
}
