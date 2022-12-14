/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB338",
        secondary: "#181813",
        danger: "#FF0000",
        success: "#00FF00",
        warning: "#FFA500",
        info: "#00FFFF",
        light: "#F8F8F8",
        dark: "#000000",
        white: "#FFFFFF",
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
