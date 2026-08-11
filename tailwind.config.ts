import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "Command Deck" token system — MARK-1 / Vyroniq AI
        ink: {
          DEFAULT: "#101B34", // deep indigo — nav bars, headers, dark surfaces
          light: "#1B2A4D",
        },
        paper: {
          DEFAULT: "#F5F7FA", // cool off-white content background
          card: "#FFFFFF",
        },
        brass: {
          DEFAULT: "#B8863B", // signature accent — CEO/earnings/success
          light: "#D9A75C",
          dark: "#8F6524",
        },
        signal: {
          DEFAULT: "#5B6EF5", // AI / assistant accent
          light: "#8B98F9",
        },
        positive: "#2FA98C", // earnings up, completed
        warn: "#D97706",
        danger: "#DC4C4C",
        slate: {
          900: "#16213A",
          600: "#5B6478",
          400: "#8B93A7",
          200: "#E2E6ED",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
