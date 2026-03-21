import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'sm':  '1px',
        DEFAULT: '2px',
        'md':  '2px',
        'lg':  '2px',
        'xl':  '3px',
        '2xl': '4px',
        '3xl': '5px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}

export default config
