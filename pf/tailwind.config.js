/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      hero: "400px",
    },
    extend: {
      colors: {
        'cd_red': "#ff0000",
        'cd_purple': "#200346",
      },
      fontFamily: {
        rubik: ["Rubik Mono One", "sans-serif"],
        anek: ["Anek Latin", "sans-serif"],
        atkinson_regular: ["Atkinson Regular", "sans-serif"],
        atkinson_bold: ["Atkinson Bold", "sans-serif"],
        atkinson_italic: ["Atkinson Italic", "sans-serif"],
        atkinson_bolditalic: ["Atkinson BoldItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
