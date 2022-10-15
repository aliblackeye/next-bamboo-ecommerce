/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB338",
        secondary: "#181813",
        facebook: "#1877F2",
        twitter: " #55ACEE",
        instagram: "#E1306C",

      },
    },
    fontFamily: {
      display: ["Jacques Francois", "serif"],
      body: ["Inter", "sans-serif"],
      header: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
