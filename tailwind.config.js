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
        max: 'linear-gradient(to bottom right, rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://qph.fs.quoracdn.net/main-qimg-b391f91142376d97500ed2b4c36668d5);',
        lewis:
          'linear-gradient(to bottom right, rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://static.independent.co.uk/2021/05/09/15/1317116893.jpg?width=982&height=726&auto=webp&quality=75);',
        bottas:
          'linear-gradient(to bottom right, rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://i.dailymail.co.uk/1s/2019/10/13/08/19647754-0-image-a-27_1570951703190.jpg);',
        perez:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://www.formula1.com/content/dam/fom-website/ooyala-videos/2020/12/Zod2l1ajE6es8CTKRv9RbOhaB-3QRWuw);',
        sainz:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://f1chronicle.com/wp-content/uploads/bb-plugin/cache/21057-monaco-gp-carlos-sainz-race-scaled-panorama.jpg);',
        norris:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/05/15184837/Lando-Norris-PA11.jpg);',
        leclerc:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://www.formula1.com/content/dam/fom-website/manual/XPB_Images/Belgium_2019/Sunday/XPB_1004901_HiRes.jpg);',
        ricciardo:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://o.aolcdn.com/images/dims3/GLOB/crop/3932x2212+0+0/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2021-09/d343e250-13e6-11ec-aaee-636b5c9c16cf);',
        gasly:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/01/06133440/PierreGaslyMonza.jpg);',
        alonso:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Fernando_Alonso/_jcr_content/image16x9.img.1536.high.jpg);',
        ocon: 'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://i.guim.co.uk/img/media/f74d0a63acd94b1cf4d4b29826415ab842a520a7/0_111_3319_1992/master/3319.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0c52cec3a5480620b465cb3d43983193);',
        vettel:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://cdn.crash.net/styles/large_article/s3/field/image/XPB_1009963_HiRes_0.jpg?itok=WR3hqT7K);',
        stroll:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://www.formula1.com/content/dam/fom-website/sutton/2020/Italy/Sunday/1270975265.jpg);',
        tsunoda:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(http://www.automobilsport.com/uploads/_neustart37/f2-f3/1-01%20Yuki%20Tsunoda%20-%20Carlin%20formula%20Motorsport%20Limited23.jpg);',
        russell:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/08/31205109/George-Russell-on-Belgian-Grand-Prix-podium-planetF1-1200x630.jpg);',
        raikonnen:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://as00.epimg.net/motor/imagenes/2018/10/21/formula_1/1540153583_859722_1540153667_noticia_normal.jpg);',
        latifi:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://wieck-nissanao-stage.s3-us-west-1.amazonaws.com/releaseInlineImages/6b96f992b930e420c3d0d3116578c9c37f5d39be);',
        giovinazzi:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://cdn-1.motorsport.com/static/img/amp/5000000/5030000/5036000/5036500/5036562/s6_1006536/1006536.jpg);',
        mick: 'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://e0.365dm.com/20/09/768x432/skysports-mick-schumacher-2020_5088052.jpg?20200905184331);',
        mazepin:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://cdn-1.motorsport.com/images/amp/0rGpe952/s1000/winning-constructor-representa.jpg);',
        kubica:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://cdn-1.motorsport.com/static/img/amp/4900000/4980000/4981000/4981700/4981771/s6_1008021/1008021.jpg);',
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
