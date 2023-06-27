/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
      redOrange: "#f56408"
    },
    extend: {},
  },
  plugins: [],
}