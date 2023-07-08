/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'primary' : '#F87984'
        },
        height:{
          '70vh': '70vh'
        }
      },
    },
    plugins: [],
  }