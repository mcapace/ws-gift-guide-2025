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
        wine: {
          burgundy: {
            DEFAULT: "#722F37",
            dark: "#5A252C",
            light: "#8B3D47",
          },
        },
        champagne: {
          gold: {
            DEFAULT: "#C9A962",
            dark: "#A68B4B",
            light: "#D4BC7D",
          },
        },
        neutral: {
          black: "#1C1C1C",
          charcoal: "#2D2D2D",
          slate: "#4A4A4A",
          cream: "#FDFBF7",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

