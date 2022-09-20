/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 100s linear infinite',
      },
      backgroundImage: {
        'background-img': "url('./public/img/background.jpg')",
      }
    },
  },
  plugins: [],
}