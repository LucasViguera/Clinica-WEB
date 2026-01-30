/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // 👇 AQUÍ ESTÁ EL CAMBIO: Usamos el paquete nuevo entre comillas
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};

export default config;