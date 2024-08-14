import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fredoka One", "sans-serif"],
      },
      colors: {
        purple: "#9281B7",
        darkText: "#2A2A37",
        darkBlue: "#2D4F67",
      },
    },
  },
  plugins: [],
} satisfies Config;
