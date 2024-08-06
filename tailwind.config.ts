import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FCFBF4',
        customGray: '#7E7E7E',
      },
      fontFamily: {
        robotoMono: ['Roboto Mono', 'monospace'],
        clashDisplay: ['Clash Display', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 65s linear infinite',
        fadeIn: 'fadeIn 300ms ease-in-out',
        fadeOut: 'fadeOut 300ms ease-in-out',
        scroll: 'scroll 100s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
