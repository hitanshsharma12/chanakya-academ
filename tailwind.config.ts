import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(210, 175, 98, 0.18)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(210,175,98,0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(78,121,255,0.12), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
