/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // 👇 ESTO ES LO QUE ARREGLA EL PROBLEMA:
    // Usamos 'tailwindcss' a secas, no '@tailwindcss/postcss'
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;