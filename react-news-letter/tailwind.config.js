/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          // '0%': {opacity:0, transform: 'translateY(-100%)'},
          '0%': {opacity:0, transform: 'translateY(100%)'},
          'to' : {opacity:1, transform: 'translateY(0%)'}
        },
        'fade-slow-up': {
          // '0%': {opacity:0, transform: 'translateY(-100%)'},
          '0%': {opacity:0, transform: 'translateY(100%)'},
          '50%': {opacity:0, transform: 'translateY(100%)'},
          '100%' : {opacity:1, transform: 'translateY(0%)'}
        }
      }
    },
    animation: {
      fadeUp: 'fade-up 1s'
    }
  },
  plugins: [],
}