/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#F7F7F7",
        darkGrey: "#999999",
        blue: "#3A86FF",
        yellow: "#FFBE0B",
        red: "#ff3e00",
        green: "#00ca48",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
};
