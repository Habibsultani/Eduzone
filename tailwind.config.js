/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Mochiy Pop P One"],
        vazirmtn: ["Vazirmatn", "sens-serif"],
      },
      blur: {
        xs: '1.5px',
      }
    },
  },
  plugins: [],
};
