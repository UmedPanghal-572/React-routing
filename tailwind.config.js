/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': 'linear-gradient(107.6deg, #FF5501 8.81%, #B1106F 163.48%)',
      },
      screens: {
        'sm-hide': '568.98px',
        'start1920': '1920px',
      },
      height: {
        '800': '800px',
      },
      boxShadow: {
        'custom': '5px 7px 19px -5px #00000026',
      },
    },
  },
  plugins: [],
}
