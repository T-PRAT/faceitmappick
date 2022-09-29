/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Play', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#141616',
      'darker': '#0A0C0C',
      'grey': '#232828',
      'grey-light': '#323838',
      'orange': '#FF5500',
      'orange-dark': '#E14A00',
      'primary': '#EBEFF3',
      'primary-dark': '#D7DBDF',
    },
  },
  plugins: [],
}

