<template>
  <div
    class="pt-10 pl-2 w-72 lg:h-30rem lg:w-96 m-2 mx-5 carousel-item flex flex-col lg:mx-8"
  >
    <router-link
      :to="{
        name: 'SingleDriver',
        params: { ...driver.Driver },
        query: { driver: driver.Driver.driverId },
      }"
    >
      <div class="pl-4 relative w-64 flex right-10 lg:left-14">
        <p
          class="transform text-2xl absolute top-1 -right-15 z-10 text-black font-boldHeadline"
        >
          <span class="text-sm">#</span>{{ driver.Driver.permanentNumber }}
        </p>
        <p
          class="transform text-2xl absolute top-1.5 -right-14 z-10 text-red-600 font-boldHeadline"
        >
          <span class="text-sm">#</span>{{ driver.Driver.permanentNumber }}
        </p>
      </div>
      <div
        class="race-card w-72 lg:w-96 h-96 lg:h-30rem rounded-lg flex flex-col p-4"
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
        <div class="flex flex-col p-2 mt-10 h-full justify-end">
          <!-- <p class="faded-bg text-gray-100 font-boldHeadline text-sm text-right">
          {{ driver.position }}
        </p>
        <p class="faded-bg text-white font-headline text-base text-right">
          {{ driver.points }}
        </p> -->
          <h2 class="font-boldHeadline text-white text-right">
            {{ driver.Driver.givenName }}
          </h2>
          <h2 class="font-boldHeadline text-base text-white text-right">
            {{ driver.Driver.familyName }}
          </h2>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Merc from '../../assets/Teams/mercedes.svg.png';
import redbull from '../../assets/Teams/RedBull.svg';
import ferrari from '../../assets/Teams/ferrari.svg';
import mclaren from '../../assets/Teams/McLaren.svg';
export default {
  data() {
    return {
      teamLogos: {
        mercedes: Merc,
        red_bull: redbull,
        ferrari: ferrari,
        mclaren: mclaren,
        williams: '',
      },
      // rgba(255,255,255,0.22)
      verstappen:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)), url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/17/19/max-verstappen-1.jpg?width=982&height=726&auto=webp&quality=75)',
      hamilton:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/race-winner-lewis-hamilton-of-great-britain-and-mercedes-gp-news-photo-1636925829.jpg)',
      bottas:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/10/10141604/valtteri-bottas-arms-raised-celebration-planetf1-1200x630.jpg)',
      perez:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/4/20/cjfwx2fomovkyrd5w4sk/sergio-perez-emilia-eomagna-grand-prix-2021)',
      sainz:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://cdn.crash.net/styles/article/s3/image_importer/F1/2806911.0064.jpg?itok=djpUAc_u)',
      norris:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/09/25143812/lando-norris-holds-up-one-finger-sochi-planetf1.jpg)',
      leclerc:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://f1beat.com/wp-content/uploads/2021/06/polesitter-charles-leclerc-fer.jpg)',
      ricciardo:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://lh3.googleusercontent.com/eEkrCtJNqjfuZ5neDS667-Me6aU3pbo_k6THoAgw4kdMvuzg27_1Q4GNEbqS_rCYzZWZsuWO-0GWxdNnhAURjJH0EzI6L2y4kSI=s1500-pp)',
      gasly:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://pbs.twimg.com/media/EhJyRuIWsAEIwdJ?format=jpg&name=large)',
      alonso:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://www.motorsportweek.com/wp-content/uploads/2021/07/jm2117jy751-Custom.jpg)',
      ocon: 'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://w0.peakpx.com/wallpaper/133/344/HD-wallpaper-esteban-ocon-alpine-alpine-f1-driver-f1-formula-1-formula-one-formula1-motorsport-sports.jpg)',
      vettel:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://w0.peakpx.com/wallpaper/182/920/HD-wallpaper-sebastian-vettel-azerbaijan-green-sports-teams-baku-formula-1-f1-aston-martin.jpg)',
      stroll:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://cdn-1.motorsport.com/images/amp/YP3J3Ne2/s1000/lance-stroll-aston-martin-1.jpg)',
      tsunoda:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://carmaniadotmx.files.wordpress.com/2020/12/4nlshj1z.jpeg)',
      russell:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://w0.peakpx.com/wallpaper/704/645/HD-wallpaper-george-russell-63-williams-george-russell-formula-1-gr63-f1.jpg)',
      raikkonen:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://f1i.com/wp-content/uploads/2020/11/Kimi-Raikkonen-Alfa-Romeo-725x500.jpg)',
      latifi:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://www.thecheckeredflag.co.uk/wp-content/uploads/2019/10/Latifi-Williams.jpg)',
      giovinazzi:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2020/10/06091051/Antonio-Giovinazzi-Alfa-Romeo.jpg)',
      mick_schumacher:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://w0.peakpx.com/wallpaper/696/180/HD-wallpaper-mick-schumacher-47-formula-1-ms47-f1-haas-mick-schumacher.jpg)',
      mazepin:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://files.gpblog.com/news/2021/05/15/v2_large_c024ea95476bd36c8d000148695603da9bc5984c.jpg)',
      kubica:
        'linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/08/18101104/robert-kubica-alfa-romeo-garage-hungary-planetf1.jpg)',
    };
  },
  props: ['driver'],
};
</script>

<style scoped>
.circle-div {
  background-image: linear-gradient(
    to bottom right,
    rgba(1, 1, 1, 0.55),
    rgba(1, 1, 1, 1)
  );
}

.race-card {
  position: relative;
  display: flex;
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.95),
      rgba(255, 255, 255, 0.22)
    ),
    url(https://f1lead.com/wp-content/uploads/2020/08/F1-ANNIVERSARY-GP-2020-MAX-VERSTAPPEN-WINS-RACE-1.jpg?is-pending-load=1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
