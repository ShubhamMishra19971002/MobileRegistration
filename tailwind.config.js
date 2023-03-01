/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      boxShadow: {
        "custom": '0 50px 25px -24px rgb(0 0 0 / 0.3)'
      }
    },
    container: {
      padding: {
        // DEFAULT: '2rem',
        // sm: '4rem',
        // lg: '8rem',
        // xl: '10rem',
        // '2xl': '12rem',
      },
    },
  },

  plugins: [],
}