/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0) translateY(-10px)' },
          '25%': { transform: 'translateX(-4px) translateY(-10px)' },
          '50%': { transform: 'translateX(4px) translateY(-10px)' },
          '75%': { transform: 'translateX(-4px) translateY(-10px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
      screens: {
        'tablet': '600px',
        'minor' : '541px'
      },
    },
  },
  plugins: [],
};

