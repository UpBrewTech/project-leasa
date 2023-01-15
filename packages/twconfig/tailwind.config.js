const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          50: '#f4f3ff',
          100: '#ebe9fe',
          200: '#d9d6fe',
          300: '#bdb6fc',
          400: '#9c8cf9',
          500: '#8062f5',
          600: '#6a3ceb',
          700: '#5b29d8',
          800: '#4c22b5',
          900: '#401e94',
        },
        tertiary: {
          50: '#fbf4ff',
          100: '#f6e8ff',
          200: '#edd1fd',
          300: '#e2adfa',
          400: '#c962f5',
          500: '#bc49ec',
          600: '#a129d0',
          700: '#891fac',
          800: '#711b8d',
          900: '#601c73',
        },
        secondary: {
          50: '#fff4fd',
          100: '#ffe8fc',
          200: '#fdd1f7',
          300: '#faadeb',
          400: '#f562d7',
          500: '#ec49ca',
          600: '#d029ab',
          700: '#ac1f88',
          800: '#8d1b70',
          900: '#731c5b',
        },
      },
      spacing: {
        xxxs: '2px',
        xxs: '4px',
        xs: '8px',
        st: '12px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        xxl: '80px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },

  plugins: [],
}
