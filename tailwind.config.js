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
      backgroundImage: {
        "blob-dark": "url('/src/assets/blob-dark.svg')",
        "blob-light": "url('/src/assets/blob-light.svg')",
      },
    },
    fontFamily: {
      sans: ["Inter, sans-serif"],
      display: ["Inter, Playfair\\ Display"],
    },
  },
  plugins: [],
};
