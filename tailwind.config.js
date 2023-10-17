/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
 theme: {
    screens: {
      // New media queries:
      
      'sm': {
        only: 'screen',
        max: '374px',
        min: '320px',
      },
      'mm': {
        only: 'screen',
        max: '426px',
        min: '375px',
      },
      'tb': {
        only: 'screen',
        max: '768px',
        min: '425px',
      }, 
      'lg': {
        only: 'screen',
        max: '1024px',
        min: '767px',
      },
      'desktop':{
        only: 'screen',
        max: '1280px',
        min: '1025px',
      }
    },
  },
  plugins: [],
}

