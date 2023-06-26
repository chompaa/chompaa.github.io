/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "screen-d": "100dvh",
      },
      colors: {
        main: "#1a1818",
        alt: "#ece7e1",
      },
    },
    fontFamily: {
      sans: ["Roboto, sans-serif"],
      display: ["Playfair\\ Display"],
    },
  },
  plugins: [],
};
