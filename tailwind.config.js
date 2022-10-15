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
        secondary: "#181813;",
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
