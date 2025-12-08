/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'pink-dark': '#e91e63',
        'pink-medium': '#f06292',
        'pink-light': '#f8bbd0',
        'peach': '#ffb74d',
        'peach-light': '#ffe0b2',
      },
      fontFamily: {
        'sans': ['Sour Gummy', 'cursive', 'system-ui', '-apple-system', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

