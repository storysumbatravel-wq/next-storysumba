/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfcfa",
          100: "#faf6f0",
          200: "#f0eae0",
          300: "#e8dcc8",
          400: "#d4c4a8",
          500: "#c0ac88",
        },
        navy: {
          50: "#e8ecf3",
          100: "#c5cde1",
          200: "#8b9bc3",
          300: "#5169a5",
          400: "#1b2a4a",
          500: "#15223c",
          600: "#101b30",
          700: "#0b1424",
          800: "#060d18",
          900: "#03060c",
        },
        terracotta: {
          400: "#c4532e",
          500: "#a3421f",
          600: "#8a341a",
          700: "#6b2612",
        },
      },
    },
  },
  plugins: [],
};
