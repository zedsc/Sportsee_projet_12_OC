/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        large: "1440px",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".vertical-writing": {
          writingMode: "vertical-lr",
        },
      });
    },
  ],
};
