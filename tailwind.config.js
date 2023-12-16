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
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
};
