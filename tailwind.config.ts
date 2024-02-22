import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{png, svg, jpg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        back: "url('/Main/back.png')",
        form: "url('/Form/image 20.png')",
      },
    },
  },
  plugins: [],
};
export default config;
