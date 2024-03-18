/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
    colors: {
      "background-primary": '#23272A',
      "background-secondary": '#222426',
      "accent-primary": '#4CAF50',
      "accent-secondary": '#7289DA',
      "interactive": '#4CAF50',
      "interactive-hoverstate": '#449644',
      "interactive-secondary-hoverstate": '#3c3c3c', 
      "warning": "#ffeb3b"
    }
  }
  },
  plugins: [],
}

