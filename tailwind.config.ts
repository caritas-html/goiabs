import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-cbpk': "url('/images/bg-cyber.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'color-cyberpink': '#F32B6E',
        'color-neon-green': '#39ff14',
        'color-electric-blue': '#7df9ff',
        'color-hot-pink': '#ff69b4',
        'color-purple-haze': '#7d26cd',
        'color-yellow-pattern': '#ECE30D',
      },
    },
  },
  plugins: [],
};
export default config;
