/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'unsplash':"url('./images/unsplash.png')",
      }
    },
  },
  plugins: [],
}
