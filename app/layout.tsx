import type { Metadata } from "next";
// 1. Importamos fuentes de Google que dan el toque "Clínica Premium"
import { Playfair_Display, Lato } from "next/font/google"; 
import "./globals.css";

// 2. Configuramos la fuente Serif (Para "Wellness" y Títulos)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Esto conecta con tu tailwind.config.ts
  display: "swap",
});

// 3. Configuramos la fuente Sans (Para textos largos)
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans", // Esto conecta con tu tailwind.config.ts
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wellness Clinic",
  description: "Clínica de medicina alternativa",
  icons: {
    icon: '/icon.png', // Asegura que el favicon funcione
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 4. Aplicamos las variables de fuente y el arreglo de hidratación */}
      <body 
        className={`${playfair.variable} ${lato.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}