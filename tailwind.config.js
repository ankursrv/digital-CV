/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1877f2',
        gray: '#ECEEEF',
        grayLight: '#e0e0e0',
        graySecondary: '#999191',
        black: '#0E0E0E',
        borderGray : '#D1D1D1',
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      boxShadow:{
        shadowPrimary:' 0 -3px 30px 0 rgb(197 197 197 / 100%);',
        shadowSecondary : ' 0 8px 25px 0 rgb(0 0 0 / 15%)',
        shadowTertary :'0 1px 50px 0 rgb(197 197 197 / 60%)'
      }
    },
  },
  plugins: [],
}