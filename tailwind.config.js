/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      themeFont: ["Roboto Mono", "monospace", "sans-serif"],
      themeFontRegular: ["Ubuntu Mono", "monospace", "sans-serif"],
      themeFontMontserrat: ["Montserrat", "sans - serif"],
    },

  },
  plugins: [require("@tailwindcss/forms")],
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".justify-center-last": {
          textAlign: "justify",
          "&::after": {
            content: '""',
            display: "inline-block",
            width: "100%",
            height: "0",
          },
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
