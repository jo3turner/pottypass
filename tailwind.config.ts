import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: '#4CB6F4',
        'sky-light': '#E6F7FE',
        'sky-ice': '#F3FAFE',
        'deep-blue': '#1F4D7A',
        slate: '#334155',
        'soft-gray': '#F5F7FA',
        'light-gray': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
