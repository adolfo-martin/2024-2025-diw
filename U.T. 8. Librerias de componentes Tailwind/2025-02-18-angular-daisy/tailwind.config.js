/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00008b',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}