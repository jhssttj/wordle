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
          '0%, 100%': {transform: 'scaleX(1)'},
          '50%': {transform: 'scaleX(0)'}
        }
      },
      animation: {
        flip: 'flip 1000ms ease forwards'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

