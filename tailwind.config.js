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
        tertiary: "#E94F37",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animated")],
};
