const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#A4082E",
          light: "#D50A3C",
          dark: "#4C0D1C",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".drop-shadow-black": {
          filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7))",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px #000",
        },
      });
    }),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        "grid-area": (value) => ({
          "grid-area": value.split(" ").join(" / "),
        }),
      });
    }),
  ],
};
