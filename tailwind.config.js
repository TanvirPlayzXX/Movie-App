/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        Poppins: ["Poppins", "system-ui"],

      },
      backgroundImage: {
        'HeaderBg': "url('./public/images/HeaderBg.svg')",

      },
      boxShadow: {
        "box-shadows": " 34px 0 54px var(--tw-shadow-color)"
      }
    },
  },
  plugins: [],
}