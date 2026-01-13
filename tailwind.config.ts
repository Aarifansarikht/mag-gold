import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#000008',
          navy: '#000008',
          gold: '#D4AF37',
          accent: '#C5A059',
          silver: '#E2E8F0',
          titanium: '#1A1A1A'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-space)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config