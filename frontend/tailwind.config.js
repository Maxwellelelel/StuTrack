/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js,ts,jsx,tsx}",
    "./src/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

