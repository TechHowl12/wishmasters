/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
      screens: {
        'sm': '650px',
        'md': '1100px'
      }
  },
  plugins: [
    require('flowbite/plugin')
]
}