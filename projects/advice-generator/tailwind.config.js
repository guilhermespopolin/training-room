const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        botticelli: {
          DEFAULT: "#CEE3E9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#EAF3F6",
          500: "#CEE3E9",
          600: "#A7CDD8",
          700: "#81B7C6",
          800: "#5AA1B5",
          900: "#428294",
        },
        aquamarine: {
          DEFAULT: "#52FFA8",
          50: "#FFFFFF",
          100: "#F5FFFA",
          200: "#CCFFE6",
          300: "#A4FFD1",
          400: "#7BFFBD",
          500: "#52FFA8",
          600: "#1AFF8C",
          700: "#00E170",
          800: "#00A954",
          900: "#007138",
        },
        "blue-bayoux": {
          DEFAULT: "#4E5D73",
          50: "#B0BAC9",
          100: "#A3AFC1",
          200: "#8B9AB0",
          300: "#7385A0",
          400: "#5E718B",
          500: "#4E5D73",
          600: "#323a49",
          700: "#212730",
          800: "#0A0C0F",
          900: "#000000",
        },
        "ebony-clay": {
          DEFAULT: "#1F2632",
          50: "#687DA1",
          100: "#5D7397",
          200: "#4E5F7E",
          300: "#3E4C64",
          400: "#2F394B",
          500: "#1F2632",
          600: "#0A0C0F",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus-visible"]);
    }),
  ],
};
