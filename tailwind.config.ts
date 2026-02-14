import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // KodNest Premium Color System
        background: '#F7F6F3',
        primary: '#111111',
        accent: '#8B0000',
        success: '#4A5F4A',
        warning: '#8B7355',
        border: '#D4D2CC',
        'surface-light': '#FEFEFE',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'body-base': ['16px', { lineHeight: '1.6' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'heading-sm': ['24px', { lineHeight: '1.3' }],
        'heading-md': ['32px', { lineHeight: '1.25' }],
        'heading-lg': ['48px', { lineHeight: '1.2' }],
        'heading-xl': ['64px', { lineHeight: '1.1' }],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '40': '40px',
        '64': '64px',
      },
      maxWidth: {
        'text': '720px',
      },
      transitionDuration: {
        'standard': '150ms',
      },
      transitionTimingFunction: {
        'standard': 'ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config
