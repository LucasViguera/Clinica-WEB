import type { Config } from "tailwindcss";

const config: Config = {
  // IMPORTANTE: Tailwind buscará en estas carpetas
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Busca en tu carpeta 'app'
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Por si acaso
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Por si acaso
  ],
  theme: {
    extend: {
      // Definimos tus colores personalizados
      colors: {
        'wellness-beige': '#FDFBF7',
        'wellness-brown': '#5D4E44',
        'wellness-gold': '#C5A880',
        'wellness-text': '#4A403A',
      },
      // Conectamos las fuentes elegantes
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;