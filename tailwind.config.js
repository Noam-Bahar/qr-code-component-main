/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)',
        lightGray: 'hsl(212, 45%, 89%)',
        darkRoyalBlue: 'hsl(228, 45%, 44%)',
      },
      fontFamily: {
        outfit: 'Outfit, sans',
      },
    },
  },
  plugins: [],
};
