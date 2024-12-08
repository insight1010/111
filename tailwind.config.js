/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#4f46e5',
        background: '#f8fafc',
        text: '#1e293b',
        card: '#ffffff',
        accent: '#f43f5e',
        health: '#22c55e',
        evil: '#dc2626',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 