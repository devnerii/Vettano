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
    },
  },
  plugins: [
    require('tailwindcss-pulse')(),
  ],
}
