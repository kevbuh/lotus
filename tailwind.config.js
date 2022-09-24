/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lotus: "#e6007a",
        petal: "#50e3c2 ",
        deep: "#0053d6",
      },
    },
    fontFamily: {
      sans: ["Work Sans", "ui-monospace", "Arial", "Segoe UI", "Roboto"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
  extend: {
    animation: {
      text: "text 5s ease infinite",
    },
    keyframes: {
      text: {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
    },
  },
};
