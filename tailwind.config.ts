import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-yellow': '#f7f2e9',
        'light-yellow': '#edc84b',
        'mid-yellow': '#e9bb24',
        'soft-grey': '#888',
      },
      top: {
        'top-calc-50-1': 'calc(50% - 1px)',
      },
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
      }
  
    }
  },
  plugins: [],
};
export default config;
