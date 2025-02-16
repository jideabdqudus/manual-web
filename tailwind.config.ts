import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
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
