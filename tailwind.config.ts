import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        insetcustom: "inset 0 0 0 2000px rgba(18, 72, 107, .9)",
      },
      screens: {
        "1025-1165": { min: "1025px", max: "1165px" },
      },
      colors: {
        bgColors: "#12486b",
        grey: "#868383",
        "light-grey": "#F6F3F4",
        "denim-blue": "#E9EEF6",
        "skin-light": "#e9c8b3",
        "soft-orange": "#e9c8b3",
        "gulf-blue": "#062152",
        "elegant-navy": "#4a536b",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease forwards",
        slideUp: "slideUp 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
