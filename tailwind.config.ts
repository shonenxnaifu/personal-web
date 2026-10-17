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
      colors: {
        primary: "#0D0D0C",
        onPrimary: "#FFFFFF",
        primaryContainer: "#232322",
        onPrimaryContainer: "#8B8A88",
        tertiary: "#00388A",
        onTertiary: "#FFFFFF",
        tertiaryContainer: "#134EB2",
        onTertiaryContainer: "#B5C7FF",
        secondary: "#5F5E5D",
        onSecondary: "#FFFFFF",
        secondaryContainer: "#E5E2E0",
        onSecondaryContainer: "#656463",
        outline: "#767873",
        outlineVariant: "#C6C7C1",
        neutral: "#EAEAEA",
        tertiaryVariant: "#7ABA3A",
        onTertiaryVariant: "#254600",
        tertiaryVariant2: "#3A6A00",
        onTertiaryVariant2: "#FFFFFF",
        darkPrimary: "",
        darkOnPrimary: "",
        darkPrimaryContainer: "",
        darkOnPrimaryContainer: "",
        darkTertiary: "",
        darkOnTertiary: "",
        darkTertiaryContainer: "",
        darkOnTertiaryContainer: "",
        darkSecondary: "",
        darkOnSecondary: "",
        darkSecondaryContainer: "",
        darkOnSecondaryContainer: "",
        darkOutline: "",
        darkOutlineVariant: "",
        darkNeutral: "",
        darkTertiaryVariant: "",
        darkOnTertiaryVariant: "",
        darkTertiaryVariant2: "",
        darkOnTertiaryVariant2: "",

      },
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
        "circuit-light": `
          linear-gradient(135deg, transparent 0%, transparent 20%, #232322 40%, #232322 60%, transparent 80%, transparent 100%),
          repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
          radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
          radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
        `,
        "circuit-dark": `
          linear-gradient(135deg, transparent 0%, transparent 20%, #EAEAEA 40%, #EAEAEA 60%, transparent 80%, transparent 100%),
          repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
          radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
          radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
        `,
      },
      backgroundSize: {
        "circuit-size": "auto, 40px 40px, 40px 40px, 40px 40px, 40px 40px",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "blob-1": "blob-anim-1 13s ease-in-out infinite",
        "blob-2": "blob-anim-2 5s ease-in-out infinite",
        "blob-3": "blob-anim-3 10s ease-in-out infinite",
      },
    },
  },
  plugins: [
    typography,
  ],
};
export default config;
