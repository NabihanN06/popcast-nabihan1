/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
 theme: {
    extend: {
    fontFamily: {
      'poppins': ["Poppins", "serif"],
      'jakarta': ["Plus Jakarta Sans"],
    },
    colors: {
      background: "#1F1E25",
      mango: "#FED049",
      ungu: "#A12568",
    },
    padding: {
      30: "120px",
    },
  },
 },
  plugins: [],
}