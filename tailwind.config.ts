import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E7",
        surface: "#FFFFFF",
        ink: "#111111",
        muted: "#5E5A52",
        accent: {
          DEFAULT: "#F28C38",
          soft: "#FBE3C7",
        },
        slate: {
          DEFAULT: "#1F3A4A",
        },
        line: "#E7DDCC",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Sora", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px -12px rgba(17,17,17,0.10)",
        cardHover: "0 4px 10px rgba(17,17,17,0.06), 0 20px 40px -18px rgba(17,17,17,0.18)",
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
      backgroundImage: {
        dotgrid:
          "radial-gradient(circle, rgba(17,17,17,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        dotgrid: "18px 18px",
      },
    },
  },
  plugins: [],
};

export default config;
