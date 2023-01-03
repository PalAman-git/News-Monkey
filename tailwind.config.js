/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins","sans-serif"]
      },
      colors:{
        navbar:"#052A52",
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'mustard-yellow':"#FFDB58",
        'bright-pink':"#ff69b4",
        'cherry-red':"#D2042D",
        'metallic-gold':"#FFD700", 
      },
    },
  },
  plugins: [],
}
