/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'default': '#2664eb'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out 1s infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'wave-reverse': 'wave-reverse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-10deg)' },
        },
        'wave-reverse': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
};


