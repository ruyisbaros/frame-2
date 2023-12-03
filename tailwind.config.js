/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#0c0c1d",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024,#23272b",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "5px 5px 19px #090916, -5px -5px 19px #10101e",
      },
    },
  },
  plugins: [],
};
