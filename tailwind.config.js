/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modlues/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bank-black': '#202123',
        'bank-hover-grey': '#2d2d2e',
        'bank-light-grey': '#58595a',
        'bank-lighter-grey': '#ebebeb',
        'bank-background-grey': '#f3f3f3',
        'bank-letter-grey': '#717173'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}