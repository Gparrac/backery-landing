/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'primary' : '#F87984'
        },
        height:{
          '70vh': '70vh',
          '60vh': '60vh'
        }
      },
    },
    plugins: [],
  }