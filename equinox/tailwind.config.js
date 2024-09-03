/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html, js}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000'
      },
      fontFamily: {
        cprime: ['Courier', 'monotype']
      }
    },
  },
  plugins: [],
}

