/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 100s linear infinite',
      }
    },
  },
  plugins: [],
}