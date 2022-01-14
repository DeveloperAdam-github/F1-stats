<template>
  <div
    class="h-14 md:h-16 lg:h-24 2xl:h-28 w-full rounded-md small-card flex rounded-br-full items-center carousel-item mt-4 lg:mt-5 bg-center"
    :style="{
      'background-image':
        driver.Driver.driverId === 'max_verstappen'
          ? this.verstappen
          : driver.Driver.driverId === 'hamilton'
          ? this.hamilton
          : driver.Driver.driverId === 'bottas'
          ? this.bottas
          : driver.Driver.driverId === 'perez'
          ? this.perez
          : driver.Driver.driverId === 'sainz'
          ? this.sainz
          : driver.Driver.driverId === 'norris'
          ? this.norris
          : driver.Driver.driverId === 'leclerc'
          ? this.leclerc
          : driver.Driver.driverId === 'ricciardo'
          ? this.ricciardo
          : driver.Driver.driverId === 'gasly'
          ? this.gasly
          : driver.Driver.driverId === 'alonso'
          ? this.alonso
          : driver.Driver.driverId === 'ocon'
          ? this.ocon
          : driver.Driver.driverId === 'vettel'
          ? this.vettel
          : driver.Driver.driverId === 'stroll'
          ? this.stroll
          : driver.Driver.driverId === 'tsunoda'
          ? this.tsunoda
          : driver.Driver.driverId === 'russell'
          ? this.russell
          : driver.Driver.driverId === 'raikkonen'
          ? this.raikkonen
          : driver.Driver.driverId === 'latifi'
          ? this.latifi
          : driver.Driver.driverId === 'giovinazzi'
          ? this.giovinazzi
          : driver.Driver.driverId === 'mick_schumacher'
          ? this.mick_schumacher
          : driver.Driver.driverId === 'mazepin'
          ? this.mazepin
          : driver.Driver.driverId === 'kubica'
          ? this.kubica
          : '',
    }"
  >
    <div
      class="card-line w-10 h-10 border-r-3 flex items-center justify-center text-white font-boldHeadline text-lg p-5"
      :style="{
        'border-color':
          driver.Constructors[0].constructorId === 'red_bull'
            ? this.red_bull
            : driver.Constructors[0].constructorId === 'mercedes'
            ? this.mercedes
            : driver.Constructors[0].constructorId === 'ferrari'
            ? this.ferrari
            : driver.Constructors[0].constructorId === 'mclaren'
            ? this.mclaren
            : driver.Constructors[0].constructorId === 'alphatauri'
            ? this.alphatauri
            : driver.Constructors[0].constructorId === 'alpine'
            ? this.alpine
            : driver.Constructors[0].constructorId === 'aston_martin'
            ? this.aston_martin
            : driver.Constructors[0].constructorId === 'williams'
            ? this.williams
            : driver.Constructors[0].constructorId === 'alfa'
            ? this.alfa
            : driver.Constructors[0].constructorId === 'haas'
            ? this.haas
            : '',
      }"
    >
      <h3>{{ driver.positionText }}</h3>
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <p class="font-headline text-white">{{ driver.Driver.givenName }}</p>
      <p class="pl-2 font-headline text-white">
        {{ driver.Driver.familyName }}
      </p>
    </div>
    <div
      class="w-16 h-full flex flex-col items-center justify-center text-white font-headline text-xs flash-card rounded-tr-md rounded-br-md transform -skew-x-12"
    >
      <p>{{ driver.points }}</p>
      <p class="hidden sm:block text-xxs lg:text-xs">pts</p>
    </div>
  </div>
</template>

<script>
import max from '../../assets/Drivers/DriversBattle/max.jpeg';
import bottas from '../../assets/Drivers/DriversBattle/bottas.jpeg';
import leclerc from '../../assets/Drivers/DriversBattle/leclerc.jpeg';
import lewis from '../../assets/Drivers/DriversBattle/lewis.jpeg';
import alex from '../../assets/Drivers/DriversBattle/alex.jpeg';
import alonso from '../../assets/Drivers/DriversBattle/alonso.jpeg';
import latifi from '../../assets/Drivers/DriversBattle/latifi.jpeg';
import gasly from '../../assets/Drivers/DriversBattle/gasly.jpeg';
import mazepin from '../../assets/Drivers/DriversBattle/mazepin.jpeg';
import mick from '../../assets/Drivers/DriversBattle/mick.jpeg';
import norris from '../../assets/Drivers/DriversBattle/norris.jpeg';
import ocon from '../../assets/Drivers/DriversBattle/ocon.jpeg';
import perez from '../../assets/Drivers/DriversBattle/perez.jpeg';
import ricciardo from '../../assets/Drivers/DriversBattle/ricciardo.jpeg';
import russell from '../../assets/Drivers/DriversBattle/russell.jpeg';
import sainz from '../../assets/Drivers/DriversBattle/sainz.jpg';
import stroll from '../../assets/Drivers/DriversBattle/stroll.jpeg';
import yuki from '../../assets/Drivers/DriversBattle/yuki.jpeg';
import vettel from '../../assets/Drivers/DriversBattle/vettel.jpeg';
import zhou from '../../assets/Drivers/DriversBattle/zhou.jpeg';
export default {
  data() {
    return {
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
      verstappen: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)), url(${max})`,
      hamilton: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${lewis})`,
      bottas: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${bottas})`,
      perez: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${perez})`,
      sainz: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${sainz})`,
      norris: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${norris})`,
      leclerc: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${leclerc})`,
      ricciardo: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${ricciardo})`,
      gasly: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${gasly})`,
      alonso: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${alonso})`,
      ocon: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${ocon})`,
      vettel: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${vettel})`,
      stroll: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${stroll})`,
      tsunoda: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${yuki})`,
      russell: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${russell})`,
      zhou: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${zhou})`,
      latifi: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${latifi})`,
      albon: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${alex})`,
      mick_schumacher: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${mick})`,
      mazepin: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${mazepin})`,
      // verstappen:
      //   'linear-gradient(to bottom right,rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)), url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/17/19/max-verstappen-1.jpg?width=982&height=726&auto=webp&quality=75)',
      // hamilton:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/race-winner-lewis-hamilton-of-great-britain-and-mercedes-gp-news-photo-1636925829.jpg)',
      // bottas:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/10/10141604/valtteri-bottas-arms-raised-celebration-planetf1-1200x630.jpg)',
      // perez:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/4/20/cjfwx2fomovkyrd5w4sk/sergio-perez-emilia-eomagna-grand-prix-2021)',
      // sainz:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://cdn.crash.net/styles/article/s3/image_importer/F1/2806911.0064.jpg?itok=djpUAc_u)',
      // norris:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://pbs.twimg.com/media/D0WmaZcW0AADllR.jpg)',
      // leclerc:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://stadiumastro-kentico.s3.amazonaws.com/stadiumastro/media/perform-article/2019/sep/7/charlesleclerc-cropped_lzg0il9tnqpd15ok6j5xmwdvs.jpg)',
      // ricciardo:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F03%2Fmclaren-formula-1-team-daniel-ricciardo-interview-000.jpg?w=960&cbr=1&q=90&fit=max)',
      // gasly:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://pbs.twimg.com/media/EhJyRuIWsAEIwdJ?format=jpg&name=large)',
      // alonso:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://www.motorsportweek.com/wp-content/uploads/2021/07/jm2117jy751-Custom.jpg)',
      // ocon: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/05/11105451/Esteban-Ocon-Alpine.jpg)',
      // vettel:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://www.formula1.com/content/dam/fom-website/Upgrade/PortugalManualUploads/Sunday/GP2103_154108_2ST8107.jpg)',
      // stroll:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://preview.redd.it/paqcej8uw6l61.jpg?auto=webp&s=61be46bba0386e0e86ee6b30ef03194ab2206273)',
      // tsunoda:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://carmaniadotmx.files.wordpress.com/2020/12/4nlshj1z.jpeg)',
      // russell:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://photos.grandprix.com/jpeg/races/peif20/sat/wil/russell1-lg.jpg)',
      // raikkonen:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/02/23060409/Kimi-Raikkonen.jpg)',
      // latifi:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/09/29094314/nicholas-latifi-sitting-in-his-williams-planetf1.jpg)',
      // giovinazzi:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://f1i.com/wp-content/uploads/2021/04/antonio-giovinazzi.jpg)',
      // mick_schumacher:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://park.shifting-gears.com/wp-content/uploads/2020/12/mic-schumacher-haas-f1-2021-2.jpeg)',
      // mazepin:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://files.gpblog.com/news/2021/05/15/v2_large_c024ea95476bd36c8d000148695603da9bc5984c.jpg)',
      // kubica:
      //   'linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(1, 1, 1, 0.9)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/08/18101104/robert-kubica-alfa-romeo-garage-hungary-planetf1.jpg)',
    };
  },
  props: ['driver'],
  methods: {
    whosDriver() {},
  },
  mounted() {
    this.whosDriver();
  },
};
</script>

<style>
.small-card {
  background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.3),
      rgba(1, 1, 1, 0.9)
    ),
    url(https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/4/20/cjfwx2fomovkyrd5w4sk/sergio-perez-emilia-eomagna-grand-prix-2021);
  background-size: cover;
  background-position: center;
}

.flash-card {
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.9),
    rgba(1, 1, 1, 0.9)
  );
}

.card-line {
  border-color: #0600ef;
}
</style>
