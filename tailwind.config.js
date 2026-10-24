/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corral: {
          50: '#fff5f2',
          100: '#ffe8e2',
          200: '#ffd4c9',
          300: '#ffb5a3',
          400: '#ff856c',
          500: '#ff6243',
          600: '#ee4322',
          700: '#c83115',
          800: '#a42c16',
          900: '#852b19',
        },
        loopgreen: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        darkbg: {
          DEFAULT: '#0b0f17',
          card: '#121824',
          border: '#1f293d',
          subtle: '#182030'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 35px -5px rgba(16, 185, 129, 0.3)',
        'glow-coral': '0 0 35px -5px rgba(255, 98, 67, 0.35)',
        'glow-combined': '0 0 50px -10px rgba(16, 185, 129, 0.2), 0 0 50px -10px rgba(255, 98, 67, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
        spinSlow: 'spinSlow 20s linear infinite',
      }
    },
  },
  plugins: [],
}
