 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        'adolfo': '#ff5555',
        'primary': '#55ff55',
        'blue': {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          950: '#ff0000',
        },
      }
    },
  },

  plugins: [],
}
