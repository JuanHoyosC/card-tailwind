/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#31394D',
        'gradient': 'linear-gradient(to top right, #8162CE, #F54BA5)'
      }
    },
  },
  plugins: [],
}