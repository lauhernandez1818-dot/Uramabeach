import type { Metadata } from "next";
import { Montserrat, Outfit, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UramaBeach — Experiencia Premium de Playa & Resort",
  description:
    "Descubre UramaBeach: tu destino exclusivo de playa con camas balinesas, zonas VIP, gastronomía gourmet y coctelería de autor. Reserva tu experiencia de lujo.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  keywords: [
    "beach club",
    "playa",
    "resort",
    "VIP",
    "cama balinesa",
    "lujo",
    "UramaBeach",
    "gastronomía",
    "coctelería",
  ],
  openGraph: {
    title: "UramaBeach — Experiencia Premium de Playa & Resort",
    description:
      "Tu destino exclusivo de playa. Reserva camas balinesas, zonas VIP y vive una experiencia de lujo inigualable.",
    type: "website",
    url: "https://uramabeach.com",
    siteName: "UramaBeach",
    images: [
      {
        url: "/share-card.png",
        width: 1200,
        height: 630,
        alt: "UramaBeach Logo",
      },
    ],
    locale: "es_VE",
  },
  twitter: {
    card: "summary_large_image",
    title: "UramaBeach — Experiencia Premium de Playa & Resort",
    description: "Tu destino exclusivo de playa y lujo.",
    images: ["/share-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Theme init: runs before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('uramabeach-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
