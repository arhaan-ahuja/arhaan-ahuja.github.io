/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm neutral "ink on paper" scale (keys kept as `navy` to limit churn,
        // but values are a muted editorial charcoal, not blue).
        navy: {
          50: '#f7f5f0',
          100: '#efece4',
          200: '#ddd8cc',
          300: '#c3bdae',
          400: '#9c9587',
          500: '#6f6a5e',
          600: '#4f4b42',
          700: '#3a3730',
          800: '#262420',
          900: '#1a1814',
          950: '#100f0c',
        },
        // Single restrained accent: a muted brick / oxblood red (editorial).
        gold: {
          300: '#c4897a',
          400: '#b06450',
          500: '#9a3b2c',
          600: '#7e2e21',
        },
        // Desaturated data palette for charts.
        data: {
          slate: '#3f5d73',
          teal: '#4e7d74',
          brick: '#9a3b2c',
          ochre: '#b3924f',
          moss: '#5b7a52',
          gray: '#8a8478',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        md: '5px',
        lg: '7px',
        xl: '9px',
        '2xl': '11px',
        '3xl': '14px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 15, 12, 0.04)',
      },
    },
  },
  plugins: [],
}
