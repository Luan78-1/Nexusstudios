import type { Config } from "tailwindcss";

/**
 * Direção visual — Naila Figueiredo · Advocacia
 * Editorial, assimétrico, cantos retos, sem sombra/gradiente.
 * Verde petróleo é a cor de assinatura: usar de forma controlada.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101313",
        paper: "#FFFFFF",
        mist: "#F3F4F3",
        muted: "#626867",
        line: "#D8DDDC",
        petrol: {
          DEFAULT: "#123C3A",
          hover: "#19504D",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "Cambria", "serif"],
      },
      maxWidth: {
        shell: "1280px",
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
