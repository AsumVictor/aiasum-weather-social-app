/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#101014",
        "dark-overlay": "#1B1A1D",
         "dark-text-primary":"#e9e9e9",
         "dark-text-active":"#0196FF",
      }
    },
  },
  plugins: [],
}