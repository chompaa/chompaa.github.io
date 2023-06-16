/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto, sans-serif"],
      display: ["Playfair\\ Display"],
    },
    colors: {
      main: "#1a1818",
      alt: "#ece7e1",
    },
  },
  plugins: [],
};
