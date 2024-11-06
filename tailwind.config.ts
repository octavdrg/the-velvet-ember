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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-bg': '#1a1a1a',
        'accent': '#c9a66b',
      },
      fontFamily: {
        'sans': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;