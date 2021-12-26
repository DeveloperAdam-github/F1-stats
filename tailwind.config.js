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
      backgroundImage: {
        max: 'linear-gradient(rgba(1, 1, 1, 100),rgba(255, 255, 255, 0.43)),url(https://qph.fs.quoracdn.net/main-qimg-b391f91142376d97500ed2b4c36668d5);',
        lewis:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(255, 255, 255, 0.43)),url(https://static.independent.co.uk/2021/05/09/15/1317116893.jpg?width=982&height=726&auto=webp&quality=75);',
      },
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
