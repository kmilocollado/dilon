import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffe66b',
        secondary: '#2d2917',
      },
      fontFamily: {
        heading: ["'Trattatello'", 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
