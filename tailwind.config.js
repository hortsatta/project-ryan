/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      maxWidth: {
        main: '1232px',
      },
      colors: {
        primary: '#0d67ff',
        'primary-100': '#29aff9',
        'primary-200': '#3ac2f8',
        'primary-300': '#0068ff',
        secondary: '#21b721',
        'secondary-100': '#20b721',
        accent: '#9b00db',
        backdrop: '#000930',
      },
      fontFamily: {
        body: ['Body', 'sans-serif'],
        heading: ['Heading', 'sans-serif'],
      },
      fontSize: {
        default: ['16px', '24px'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'cursor-blink': {
          '0%': { background: 'transparent' },
          '50%': { background: '#21b721' },
          '100%': { background: 'transparent' },
        },
        boost: {
          '0%': { transform: 'scaleX(1.1)' },
          '50%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(1.1)' },
        },
        'boost-ring': {
          '0%': { transform: 'translateY(0px) scaleX(1.0)', opacity: 1 },
          '50%': { transform: 'translateY(30px) scaleX(0.9)', opacity: 1 },
          '100%': { transform: 'translateY(60px) scaleX(0.6)', opacity: 0 },
        },
        'beam-end': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'cursor-blink': 'cursor-blink 1.5s step-end infinite',
        boost: 'boost 0.3s linear infinite',
        'boost-ring': 'boost-ring 0.6s linear infinite',
        'beam-end': 'beam-end 0.2s linear infinite',
      },
    },
  },
  plugins: [require('preline/plugin')],
};
