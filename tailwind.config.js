/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fefefe",
          100: "#f8f8f8",
          200: "#f0f0f0",
          300: "#e8e8e8",
          400: "#d0d0d0",
          500: "#404040",
          600: "#2a2a2a",
          700: "#1a365d",
          800: "#111111",
          900: "#000000",
        },
        gold: {
          400: "#d4af37",
          500: "#b8941f",
        },
        botanical: {
          500: "#22c55e",
        },
        neutral: {
          100: "#f5f5f5",
          600: "#737373",
          700: "#404040",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
