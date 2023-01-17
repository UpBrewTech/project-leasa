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
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
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
        standard: '4px',
      },
    },
  },

  plugins: [],
}
