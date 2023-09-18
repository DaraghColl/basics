/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f1f5f9',
          DEFAULT: '#f1f5f9',
          dark: '#131517',
        },
        secondary: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#1c1e23',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
