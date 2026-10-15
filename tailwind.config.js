/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "Times New Roman", "serif"],
      },
      colors: {
        primary: "#0CA16E",
        "text-primary": "#1E293B",
        "neutral-300": "#babcc2",
        "neutral-700": "#494a50",
        accent: "#0CA16E",
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
};

