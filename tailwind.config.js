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
        primary: "#0c2434",
        secondary: "#ECAA43",
        white: "#FFFFFF",
      },
      backgroundImage: {
        pane: "linear-gradient(90deg,#463c3a14 2.5px,#0000 0),linear-gradient(180deg,#463c3a14 2.5px,#0000 0)",
        "pane-html": "linear-gradient(to bottom, transparent, #0c2434)",
      },
      backgroundSize: {
        pane: "60px 45px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animated")],
};
