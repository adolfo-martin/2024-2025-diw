/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rojo-fuerte': '#9f1239',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}