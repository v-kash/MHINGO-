/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#429EBD",
        primaryLight: "#9FE7F5",
        primaryDark: "#053F5C",
        accentYellow: "#F7AD19",
        accentOrange: "#F27F0C",
      },
      fontFamily: {
        hand: ["'Patrick Hand'", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
