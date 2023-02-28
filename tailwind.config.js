/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        grayishblue: 'hsl(220, 15%, 55%)',
        darkblue: 'hsl(218, 44%, 22%)',
        lightgray: 'hsl(212, 45%, 89%)',
      },
      fontFamily: {
        outfit: 'Outfit, sans',
      },
    },
  },
  plugins: [],
};
