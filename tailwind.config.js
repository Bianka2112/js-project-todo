/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024",
    }
  },
  plugins: [],
};
