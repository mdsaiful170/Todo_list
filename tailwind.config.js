/** @type {import('tailwindcss').Config} */
module.exports = {
  "Mode":"JIT",
  darkMode: "class",
  content: ["./src/**/*.{html,js}", "./{js}", "*"],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
      colors:{
        darkColor:"#08091c",
        WhiteColor:"#faf8fc"
      }
    },
  },
  plugins: [],
};
