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
      borderRadius: {
        "blob-1": "50% 80% 50% 100%",
        "blob-2": "100% 40% 80% 50%",
        "blob-3": "30% 100% 70% 80%",
      },
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
      animation: {
        "blob-1": "blob-anim-1 25s ease-in-out infinite",
        "blob-2": "blob-anim-2 30s ease-in-out infinite",
        "blob-3": "blob-anim-3 35s ease-in-out infinite",
      },
    },
  },
  plugins: [typography],
};
export default config;
