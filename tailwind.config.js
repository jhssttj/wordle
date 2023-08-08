/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: "#6AAA64",
        yellow: "#C9B458",
        gray: "#787C7E",
      },
      keyframes: {
        flip: {
          '0%': {transform: 'rotateX(0deg)'},
          '100%': {transform: 'rotateX(359deg)'}
        }
      },
      animation: {
        flip: 'flip 2000ms ease forwards'
      }
    },
  },
  plugins: [],
}

