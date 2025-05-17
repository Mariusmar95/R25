/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "100rem": "100rem",
      },
      colors: {
        charcoal: "rgb(51, 51, 51)",
        shade: "rgb(22, 25, 30)",
        bl: "rgb(11,13,15)",
        blu: "rgb(58, 138, 148)",
      },
      fontFamily: {
        custom: ["Poppins"],
      },
    },
  },
  plugins: [],
};
