import type { Config } from 'tailwindcss';
const flowbite = require('flowbite-react/tailwind');

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#45a500',
        secondary: '#00621d',
        dark: '#1d1d1d',
        light: '#f2f2f2',
        error: '#a6192e',
        success: '#04b34f',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
