<template>
  <div
    class="pt-10 pl-2 w-72 lg:h-30rem lg:w-96 m-2 mx-5 carousel-item flex-col lg:mx-8"
    :class="driver.Driver.driverId === 'mazepin' ? 'hidden' : 'flex'"
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
          {{ driver.Driver.driverId === 'zhou' ? '24' : '' }}
        </p>
        <p
          class="transform text-2xl absolute top-1.5 -right-14 z-10 text-red-600 font-boldHeadline"
        >
          <span class="text-sm">#</span>{{ driver.Driver.permanentNumber
          }}{{ driver.Driver.driverId === 'zhou' ? '24' : '' }}
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
              : driver.Driver.driverId === 'kevin_magnussen'
              ? this.magnussen
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
              : driver.Driver.driverId === 'albon'
              ? this.albon
              : driver.Driver.driverId === 'latifi'
              ? this.latifi
              : driver.Driver.driverId === 'zhou'
              ? this.zhou
              : driver.Driver.driverId === 'mick_schumacher'
              ? this.mick_schumacher
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
import magnussen from '../../assets/Drivers/DriversBattle/kmag.jpeg';

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
      verstappen: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)), url(${max})`,
      hamilton: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${lewis})`,
      bottas: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${bottas})`,
      perez: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${perez})`,
      sainz: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${sainz})`,
      norris: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${norris})`,
      leclerc: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${leclerc})`,
      ricciardo: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${ricciardo})`,
      gasly: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${gasly})`,
      magnussen: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${magnussen})`,
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
      kubica: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/08/18101104/robert-kubica-alfa-romeo-garage-hungary-planetf1.jpg)`,
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
