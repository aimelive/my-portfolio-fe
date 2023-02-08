/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c6ebb",
        lightPrimary: "#9fcdf5",
      },
      fontFamily: {
        default: "Nunito",
      },
    },
  },
  plugins: [],
};
