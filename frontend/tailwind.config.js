/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js,ts,jsx,tsx}",
    "./src/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: 'font-family: Arial, Helvetica, sans-serif'
      },
      colors: {
        customGrey: 'rgb(92,92,92)',
      },
    },
  },
  plugins: [],
}

