/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Slate 900 mais profundo
        surface: '#1e293b',    // Slate 800 para cards
        primary: '#3b82f6',    // Blue 500 vibrante
        secondary: '#ec4899',  // Pink 500 para acentos
        accent: '#8b5cf6',     // Violet para gradientes
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Certifique-se de importar a fonte Inter no index.css ou HTML
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/path-to-subtle-pattern.svg')", // Opcional: Adicionar uma textura sutil
      }
    },
  },
  plugins: [],
}