/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        special: ['"Bruno Ace SC"', 'sans-serif'], 
        normal: ['"Ubuntu"', 'sans-serif'],      
      }
    },
  },
  plugins: [],
}