/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FBFBF9",
          primary: "#4A6741",
          secondary: "#C5A059",
          text: "#1D1D1F",
          accent: "#E8E2D6",
        }
      }
    },
  },
  plugins: [],
}
