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
      red_bull: '#0600ef',
      mercedes: '#00D2BE',
      ferrari: '#DC0000',
      mclaren: '#FF9800',
      alphatauri: '#2B4562',
      alfa: '#900000',
      haas: '#FFF',
      alpine: '#0090FF',
      aston_martin: '#006F62',
      williams: '#005AFF',
      white: '#f5f5f5',
    }),
    extend: {
      backgroundImage: (theme) => ({
        ...theme('images'),
        max: "linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(1, 1, 1, 0.10)),url('/src/assets/Drivers/max.jpeg')",
        lewis:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://static.independent.co.uk/2021/05/09/15/1317116893.jpg?width=982&height=726&auto=webp&quality=75);',
        bottas:
          'linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://i.dailymail.co.uk/1s/2019/10/13/08/19647754-0-image-a-27_1570951703190.jpg);',
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
        maxBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)), url(https://www.formula1.com/content/dam/fom-website/sutton/2020/AbuDhabi/Saturday/1290862295.jpg)',
        hamiltonBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/race-winner-lewis-hamilton-of-great-britain-and-mercedes-gp-news-photo-1636925829.jpg)',
        bottasBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/10/10141604/valtteri-bottas-arms-raised-celebration-planetf1-1200x630.jpg)',
        perezBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/4/20/cjfwx2fomovkyrd5w4sk/sergio-perez-emilia-eomagna-grand-prix-2021)',
        sainzBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://cdn.crash.net/styles/article/s3/image_importer/F1/2806911.0064.jpg?itok=djpUAc_u)',
        norrisBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/09/25143812/lando-norris-holds-up-one-finger-sochi-planetf1.jpg)',
        leclercBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://f1beat.com/wp-content/uploads/2021/06/polesitter-charles-leclerc-fer.jpg)',
        ricciardoBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://lh3.googleusercontent.com/eEkrCtJNqjfuZ5neDS667-Me6aU3pbo_k6THoAgw4kdMvuzg27_1Q4GNEbqS_rCYzZWZsuWO-0GWxdNnhAURjJH0EzI6L2y4kSI=s1500-pp)',
        gaslyBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://pbs.twimg.com/media/EhJyRuIWsAEIwdJ?format=jpg&name=large)',
        alonsoBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://www.motorsportweek.com/wp-content/uploads/2021/07/jm2117jy751-Custom.jpg)',
        oconBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://w0.peakpx.com/wallpaper/133/344/HD-wallpaper-esteban-ocon-alpine-alpine-f1-driver-f1-formula-1-formula-one-formula1-motorsport-sports.jpg)',
        vettelBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://w0.peakpx.com/wallpaper/182/920/HD-wallpaper-sebastian-vettel-azerbaijan-green-sports-teams-baku-formula-1-f1-aston-martin.jpg)',
        strollBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://cdn-1.motorsport.com/images/amp/YP3J3Ne2/s1000/lance-stroll-aston-martin-1.jpg)',
        tsunodaBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://carmaniadotmx.files.wordpress.com/2020/12/4nlshj1z.jpeg)',
        russellBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://w0.peakpx.com/wallpaper/704/645/HD-wallpaper-george-russell-63-williams-george-russell-formula-1-gr63-f1.jpg)',
        raikkonenBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://f1i.com/wp-content/uploads/2020/11/Kimi-Raikkonen-Alfa-Romeo-725x500.jpg)',
        latifiBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://www.thecheckeredflag.co.uk/wp-content/uploads/2019/10/Latifi-Williams.jpg)',
        giovinazziBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2020/10/06091051/Antonio-Giovinazzi-Alfa-Romeo.jpg)',
        mickBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://w0.peakpx.com/wallpaper/696/180/HD-wallpaper-mick-schumacher-47-formula-1-ms47-f1-haas-mick-schumacher.jpg)',
        mazepinBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://files.gpblog.com/news/2021/05/15/v2_large_c024ea95476bd36c8d000148695603da9bc5984c.jpg)',
        kubicaBattle:
          'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.40)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/08/18101104/robert-kubica-alfa-romeo-garage-hungary-planetf1.jpg)',
      }),
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
        '30rem': '30rem',
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
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
  },

  daisyui: {
    themes: [
      {
        f1: {
          /* your theme name */ primary: '#0090FF' /* Primary color */,
          'primary-focus': '#212226' /* Primary color - focused */,
          'primary-content':
            '#ffffff' /* Foreground content color to use on primary color */,
          'primary-redbull': '#0600ef',

          third: '#0600ef',

          secondary: '#2B4562' /* Secondary color */,
          'secondary-focus': '#f3cc30' /* Secondary color - focused */,
          'secondary-content':
            '#ffffff' /* Foreground content color to use on secondary color */,

          fourth: '#212226' /* fourth color */,
          'fourth-focus': '#2aa79b' /* fourth color - focused */,
          'fourth-content':
            '#ffffff' /* Foreground content color to use on accent color */,

          neutral: '#3d4451' /* Neutral color */,
          'neutral-focus': '#FFF' /* Neutral color - focused */,
          'neutral-content':
            '#900000' /* Foreground content color to use on neutral color */,

          'base-100':
            '#005AFF' /* Base color of page, used for blank backgrounds */,
          'base-200': '#006F62' /* Base color, a little darker */,
          'base-300': '#2B4562' /* Base color, even more darker */,
          'base-content':
            '#0090FF' /* Foreground content color to use on base color */,

          info: '#0600ef' /* Info */,
          success: '#FF0000' /* Success */,
          warning: '#ff9900' /* Warning */,
          error: '#00D2BE' /* Error */,
          accent: '#006F62',
        },
        red_bull: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#0600ef' /* Foreground content color to use on primary color */,
          success: '#0600ef' /* Success */,
        },
        mercedes: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#00D2BE' /* Primary color - focused */,
          'primary-content':
            '#00D2BE' /* Foreground content color to use on primary color */,
          success: '#00D2BE' /* Success */,
        },
        ferrari: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#DC0000' /* Foreground content color to use on primary color */,
          success: '#DC0000',
        },
        mclaren: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#FF9800' /* Foreground content color to use on primary color */,
          success: '#FF9800',
        },
        alphatauri: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#2B4562' /* Foreground content color to use on primary color */,
          success: '#2B4562',
        },
        alfa: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#900000' /* Foreground content color to use on primary color */,
          success: '#900000',
        },
        haas: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#FFF' /* Foreground content color to use on primary color */,
          success: '#fff',
        },
        alpine: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#0090FF' /* Foreground content color to use on primary color */,
          success: '#0090FF',
        },
        aston_martin: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#006F62' /* Foreground content color to use on primary color */,
          success: '#006F62',
        },
        williams: {
          /* your theme name */ primary: '#0600ef' /* Primary color */,
          'primary-focus': '#0600ef' /* Primary color - focused */,
          'primary-content':
            '#005AFF' /* Foreground content color to use on primary color */,
          success: '#005AFF',
        },
      },
    ],
  },
};
