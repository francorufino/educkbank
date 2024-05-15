/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dlav: "#555875",
        llav: "#eef2ff",
        lav: "#8a98df",
        dgray: "#6b7280",
        myellow: "#fec539",
        morange: "#ec562b",
        mlilas: "#e6e6fa",
      },
      flex: {
        "1/4": "1 1 25%,",
        "1/3": "1 1 33%",
        "1/2": "1 1 50%",
        "2/3": "1 1 67%",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
