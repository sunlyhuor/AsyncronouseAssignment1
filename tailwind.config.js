/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
],
  // content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

