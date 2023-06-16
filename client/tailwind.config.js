/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'shake-left-right': 'shake-left-right 6s linear 3s infinite',
        'shake-up-down': 'shake-up-down 8s linear 3s infinite',
        'fade-in': 'fade-in 3s',
        'fade-out': 'fade-out 3s',
      },
      backgroundImage: {
        test: "url('./assets/background/eric-jacob-G0miZ5OYaXI-unsplash.jpg')",
      },
      fontFamily: {
        akronim: ['Akronim', 'cursive'],
        aladin: ['Aladin', 'cursive'],
        'allerta-stencil': ['Allerta Stencil', 'sans-serif'],
        'almendra-sc': ['Almendra SC', 'serif'],
        'alumni-sans-inline-one': ['Alumni Sans Inline One', 'cursive'],
        'amatic-sc': ['Amatic SC', 'cursive'],
        'black-ops-one': ['Black Ops One', 'cursive'],
        foldit: ['Foldit', 'cursive'],
        'six-caps': ['Six Caps', 'sans-serif'],
      },
      keyframes: {
        'shake-left-right': {
          '0%, 10%, 20%, 30%, 50%, 70%, 80%, 90%, 100%': { transform: 'translate-x-0' },
          '30%, 50%': { transform: ' translateX(-5px)' },
          '40%, 60%': { transform: 'translateX(10px)' },
        },
        'shake-up-down': {
          '0%, 50%, 100%': { transform: 'translate-y-0' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateY(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateY(10px)' },
        },
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        'fade-out': {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
