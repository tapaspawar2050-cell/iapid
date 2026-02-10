// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'iap-orange': '#FFA500', // Ye image wala orange color hai
        'iap-dark': '#2D2D2D',   // Text ke liye dark grey
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Professional font
      }
    },
  },
  plugins: [],
}