/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'moveSideways': 'moveSideways 4s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideUp': 'slideUp 1s ease-in-out',
      },
      keyframes: {
        moveSideways: {
          '0%': { 
            transform: 'translateX(0) scale(1)',
            filter: 'brightness(1)'
          },
          '50%': { 
            transform: 'translateX(-20px) scale(1.1)',
            filter: 'brightness(1.2)'
          },
          '100%': { 
            transform: 'translateX(20px) scale(1)',
            filter: 'brightness(1)'
          }
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          'to': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideUp: {
          'from': { 
            transform: 'translateY(20px)',
            opacity: '0'
          },
          'to': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 