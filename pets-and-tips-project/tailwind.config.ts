import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        fontcolor: "var(--fontcolor)",
        "black-800": "#222222",
        "brown-800": "#33000F",
        "purple-200": "#DA99FF",
        "purple-800": "#B02EF9",
        "green-200": "#30FC8B",
        "green-800": "#11AB56",
      },
    },
  },
  plugins: [],
};
export default config;
