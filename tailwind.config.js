/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bank-black': '#202123',
        'bank-grey': '#2d2d2e',
        'bank-light-grey': '#f3f3f3',
        'bank-letter-grey': '#717173'
      }
    },
  },
  plugins: [],
}