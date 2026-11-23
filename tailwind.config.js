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
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          accent: '#E66A1F',
        },
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          deep: '#1B4D3E',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf5eb',
          200: '#f5eedb',
          300: '#ebe1c5',
          400: '#decfa6',
          500: '#cbba88',
          bg: '#FAF7F2',
          card: '#FFFDF9',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(224, 109, 20, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(27, 77, 62, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 20px 40px -6px rgba(234, 88, 12, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
