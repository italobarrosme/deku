/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./useComponents/**/*.{js,ts,jsx,tsx}",
    "./usePieces/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0D0D0D',
          light: '#FFFFFF',
          primary: '#FDBA12',
          secondary: '#22252A',
          soft: '#2D3035'
        },
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
}