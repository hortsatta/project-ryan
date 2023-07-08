/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000930',
      },
      fontFamily: {
        body: ['Body', 'sans-serif'],
        heading: ['Heading', 'sans-serif'],
      },
    },
  },
  plugins: [require('preline/plugin')],
};
