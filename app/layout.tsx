import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wellness Clinic",
  description: "Clínica de medicina alternativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 👇 ESTO ES LO IMPORTANTE: suppressHydrationWarning */}
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}