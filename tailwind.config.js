module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#0F1012',
      navbar: '#101011',
      secondary: '#141517',
      third: '#FF2E0C',
      fourth: '#212226',
    }),
    extend: {
      fontFamily: {
        headline: ['F1-Regular'],
        boldHeadline: ['F1-Bold'],
      },
      rotate: {
        25: '25deg',
      },
      spacing: {
        15: '3.75rem',
      },
      height: {
        '6vh': '6vh',
        '10vh': '10vh',
        '20vh': '20vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '84vh': '84vh',
      },
      fontSize: {
        md: '0.8rem',
        xxs: '0.60rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
