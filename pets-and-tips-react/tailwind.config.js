/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        fontcolor: "var(--fontcolor)",
        white: "#f4f6f9",
        "black-800": "#222222",
        "brown-800": "#33000F",
        "purple-200": "#DA99FF",
        "purple-400": "#C766FF",
        "purple-800": "#B02EF9",
        "green-200": "#30FC8B",
        "green-800": "#11AB56",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
