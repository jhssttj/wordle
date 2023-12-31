/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        green: "#3A6B34",
        yellow: "#E3B448",
        gray: "#787C7E",
        lgray: "#E6E6FA",
        xlgray: "#C3C3D6",
        xlgreen:"#F4FDFF"
      },
      keyframes: {
        flip: {
          '0%, 100%': {transform: 'scaleY(1)'},
          '50%': {transform: 'scaleY(0)'}
        }
      },
      animation: {
        flip: 'flip 500ms linear forwards'
      },
      screens: {
        md:'1060px',
        sm:'768px',
        xs:'480px',
        xxs:'360px',
        xxxs:'300px'
      }
    },
  },
  plugins: [],
}

