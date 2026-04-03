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
          DEFAULT: "#2D1B8E",
          100: "#EAE7FA",
        },
        secondary: {
          DEFAULT: "#7C3AED",
        },
        accent: {
          DEFAULT: "#F59E0B",
        },
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#F8F7FF",
        },
        text: {
          DEFAULT: "#0F0E1A",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        },
        border: {
          DEFAULT: "#E5E7EB",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 24px rgba(45, 27, 142, 0.06)",
        hover: "0 12px 32px rgba(45, 27, 142, 0.12)",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      animation: {
        "scroll-left": "scrollLeft 15s linear infinite",
        "scroll-right": "scrollRight 15s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
