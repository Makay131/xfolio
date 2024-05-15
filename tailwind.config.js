/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'xfolio-gr-primary': '#B16CEA',
        'xfolio-gr-secondary': '#FF5E69',
        'xfolio-gr-tertiary': '#FF8A56',
        'xfolio-gr-quaternary': '#FFA84B',
        'xfolio-black-primary': '#161513',
        'xfolio-black-secondary': '#1C1C22',
        'xfolio-white-primary': '#F0F2F5',
        'xfolio-white-secondary': '#FFF',
      },
    },
  },
  plugins: [],
};
