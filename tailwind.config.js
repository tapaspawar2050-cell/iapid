// tailwind.config.js
// Yeh Tailwind CSS ki main settings file hai
// Yahan hum design ke rules set karte hain

module.exports = {
  
  // content ka matlab:
  // Tailwind kin-kin files ko check karega
  // Yahan "./src" folder ke andar sabhi js, jsx, ts, tsx files check hongi
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    // extend ka matlab:
    // Tailwind ke default design ko badhane (add karne) ke liye
    extend: {

      // Yahan hum apne custom colors bana rahe hain
      colors: {

        'iap-orange': '#FFA500',
        // Yeh hamara special orange color hai
        // Isko use karne ke liye likhenge: bg-iap-orange ya text-iap-orange

        'iap-dark': '#2D2D2D',
        // Yeh dark grey color hai
        // Text ke liye use hoga: text-iap-dark
      },

      // Yahan hum font change kar rahe hain
      fontFamily: {

        sans: ['Roboto', 'sans-serif'],
        // Yeh default font ko Roboto bana dega
        // Agar Roboto nahi mila to normal sans-serif use hoga
      }
    },
  },

  // Yahan extra Tailwind plugins add kar sakte hain
  // Abhi koi plugin use nahi kar rahe
  plugins: [],
}
