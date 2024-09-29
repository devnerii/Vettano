/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      pulse: theme => ({
        colors: theme('colors'),
    }),
      colors: {
        'custom-bg': '#1d1c49',
      },
      height: {
        '19.5': '4.875rem', // Adiciona h-19.5
      },
      padding: {
        '1.5': '0.375rem', // Adiciona p-1.5
      },
      height: {
        '104': '26rem',
        '120': '30rem',
        '140': '35rem',
      },
      scale: {
        '130': '1.3',  // Classe scale-130 que aplica transform: scale(1.3)
      },
    },
  },
  plugins: [
    require('tailwindcss-pulse')(),
  ],
}
