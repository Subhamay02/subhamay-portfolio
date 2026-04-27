/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0F19', // Deep dark blue-ish slate
        surface: '#111827', // slate-900
        primary: '#f59e0b', // amber-500
        primaryDark: '#d97706', // amber-600
        textMain: '#f3f4f6', // gray-100
        textMuted: '#9ca3af', // gray-400
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

