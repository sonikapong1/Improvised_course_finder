/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.4rem',
        'lg': '3rem',
        'full': '9999px',
        'large': '30px',
      },
      colors: {
        'gray': '#F0EBEB',
        'purple': '#6A64F9'
      },
    },
  },
  plugins: [],
}