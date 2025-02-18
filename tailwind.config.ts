import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "2000px",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hex: "#6D8A83",
        },
        "primary-light": {
          DEFAULT: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        alternate: {
          DEFAULT: "hsl(var(--alternate))",
        },
      },
      fontFamily: {
        ttnorms: ["var(--font-ttnorms)"],
      },
    },
  },
  plugins: [],
};
export default config;
