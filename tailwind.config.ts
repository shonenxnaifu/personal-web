/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "neon-purple":
          "inset 0 0 10px 0 rgb(151,71,255), 0 0 10px 0 rgb(151,71,255, 0.75), 0 0 20px 0 rgb(151,71,255, 0.5)",
        "neon-pink":
          "inset 0 0 10px 0 rgb(255,166,246, 0.3), 0 0 5px 0 rgb(255,166,246, 0.75), 0 0 10px 0 rgb(255,166,246, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "section-pattern": "url('/assets/images/bg-pattern.png')",
        "section-pattern-2": "url('/assets/images/bg-pattern-2.png')",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
