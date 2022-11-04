/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Mono One", "sans-serif"],
        anek: ["Anek Latin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
