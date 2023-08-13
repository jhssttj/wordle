/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: "#3A6B34",
        yellow: "#E3B448",
        gray: "#787C7E",
        lgreen: "#E1E6E1",
      },
      keyframes: {
        flip: {
          '0%, 100%': {transform: 'scaleY(1)'},
          '50%': {transform: 'scaleY(0)'}
        }
      },
      animation: {
        flip: 'flip 500ms linear forwards'
      }
    },
  },
  plugins: [],
}

