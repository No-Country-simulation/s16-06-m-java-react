/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Para estilos de formularios
    require('@tailwindcss/typography'), // Para estilos de tipografía
    require('@tailwindcss/aspect-ratio'), // Para relación de aspecto responsiva
    require('@tailwindcss/line-clamp'), // Para truncado de texto
    require('@tailwindcss/aspect-ratio'), // Para relación de aspecto responsiva
    // Otros plugins según necesites
  ],
}

