import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: "#fdf2f3",
          100: "#fbe4e6",
          200: "#f5c2c8",
          300: "#e8919c",
          400: "#d65a6d",
          DEFAULT: "#5e0a14",
          500: "#7a0f1c",
          600: "#5e0a14",
          700: "#4a0810",
          800: "#3a060c",
          900: "#2b0408",
          950: "#1c0205",
        },
        gold: {
          50: "#fdf9ed",
          100: "#faf0cf",
          200: "#f3dd9a",
          300: "#ecca65",
          400: "#e3b53d",
          DEFAULT: "#d4af6a",
          500: "#d4af6a",
          600: "#b8924c",
          700: "#92723a",
          800: "#705730",
          900: "#5a4628",
        },
      },
      fontFamily: {
        // Loaded via @import in globals.css (CSS @import, not next/font) so the
        // build never needs to reach fonts.googleapis.com at compile time.
        // If the browser has no internet access, these gracefully fall back
        // to Georgia / Times New Roman.
        serif: ["'Playfair Display'", "Georgia", "'Times New Roman'", "serif"],
        body: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
      backgroundImage: {
        "wine-texture":
          "radial-gradient(circle at 50% 0%, rgba(212,175,106,0.08), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
