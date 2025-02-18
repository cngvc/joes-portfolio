/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Work Sans", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
        code: ["Source Code Pro", "monospace"],
      },
      colors: {
        background: "rgb(var(--background-color) / <alpha-value>)",
        primary: "rgb(var(--primary-color) / <alpha-value>)",
      },
      backgroundImage: {
        pane: "linear-gradient(90deg, #38383920 1px, #0000 0),linear-gradient(180deg, #38383920 1px, #0000 0)",
        "pane-html":
          "linear-gradient(to bottom, transparent, rgb(var(--background-color)))",
      },
      backgroundSize: {
        pane: "60px 45px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animated")],
};
