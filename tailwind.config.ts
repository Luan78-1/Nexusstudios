import type { Config } from "tailwindcss";

/**
 * Direção visual — Naila Figueiredo · Advocacia
 * Confiança e profissionalismo: azul-marinho profundo (assinatura) ancorado
 * por neutros quentes (off-white + pedra). Editorial, assimétrico, cantos retos,
 * sem sombra/gradiente. Painel navy sangrando compõe o contraste do Hero.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        paper: "#FCFBF9",
        stone: "#ECE8E1",
        cream: "#EDEAE3",
        muted: "#5B6472",
        line: "#DED9D0",
        navy: {
          DEFAULT: "#16233B",
          hover: "#26385A",
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
