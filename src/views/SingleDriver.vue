<template>
  <div class="w-full bg-secondary">
    <div class="">
      <div
        class="driver-page h-80vh lg:h-84vh w-full flex flex-col px-6 py-2 md:p-6"
        :style="{
          'background-image':
            driverInfo.code === 'VER'
              ? this.max
              : driverInfo.code === 'HAM'
              ? this.lewis
              : driverInfo.code === 'BOT'
              ? this.bottas
              : driverInfo.code === 'PER'
              ? this.perez
              : driverInfo.code === 'SAI'
              ? this.sainz
              : driverInfo.code === 'NOR'
              ? this.norris
              : driverInfo.code === 'LEC'
              ? this.leclerc
              : driverInfo.code === 'RIC'
              ? this.ricciardo
              : driverInfo.code === 'GAS'
              ? this.gasly
              : driverInfo.code === 'ALO'
              ? this.alonso
              : driverInfo.code === 'OCO'
              ? this.ocon
              : driverInfo.code === 'VET'
              ? this.vettel
              : driverInfo.code === 'STR'
              ? this.stroll
              : driverInfo.code === 'TSU'
              ? this.tsunoda
              : driverInfo.code === 'RUS'
              ? this.russell
              : driverInfo.code === 'ZHO'
              ? this.zhou
              : driverInfo.code === 'LAT'
              ? this.latifi
              : driverInfo.code === 'ALB'
              ? this.albon
              : driverInfo.code === 'MSC'
              ? this.mick
              : driverInfo.code === 'MAG'
              ? this.magnussen
              : driverInfo.code === 'KUB'
              ? this.kubica
              : '',
        }"
      >
        <driver-title :driverInfo="driverInfo" />
        <p>{{ currentDriver }}</p>
        <div class="w-full h-full flex justify-center items-center">
          <drivers-card :driverInfo="driverInfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DriversCard from '../components/Drivers/DriversCard.vue';
import DriverTitle from '../components/Drivers/DriverTitle.vue';
import max from '../assets/Drivers/max.jpeg';
import alonso from '../assets/Drivers/alonso.jpg';
import bottas from '../assets/Drivers/bottas.jpeg';
import gasly from '../assets/Drivers/gasly.jpeg';
import latifi from '../assets/Drivers/latifi.jpeg';
import leclerc from '../assets/Drivers/leclerc.jpeg';
import lewis from '../assets/Drivers/lewis.jpeg';
import mazepin from '../assets/Drivers/mazepin.jpeg';
import norris from '../assets/Drivers/norris.jpeg';
import ocon from '../assets/Drivers/ocon.jpeg';
import perez from '../assets/Drivers/perez.jpeg';
import ricciardo from '../assets/Drivers/ricciardo.jpeg';
import russell from '../assets/Drivers/russell.jpeg';
import sainz from '../assets/Drivers/sainz.jpeg';
import stroll from '../assets/Drivers/stroll.jpeg';
import tsunoda from '../assets/Drivers/tsunoda.jpeg';
import vettel from '../assets/Drivers/vettel.jpeg';
import zhou from '../assets/Drivers/zhou.jpeg';
import mick from '../assets/Drivers/mick.jpeg';
import albon from '../assets/Drivers/albon.jpeg';
import magnussen from '../assets/Drivers/magnussen.jpeg';
export default {
  components: {
    DriverTitle,
    DriversCard,
    max,
    alonso,
    bottas,
    gasly,
    latifi,
    leclerc,
    lewis,
    mazepin,
    norris,
    ocon,
    perez,
    ricciardo,
    russell,
    sainz,
    stroll,
    tsunoda,
    vettel,
    zhou,
    albon,
    magnussen,
  },
  data() {
    return {
      driverInfo: '',
      currentDriver: [],
      max: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(1, 1, 1, 0.10)),url(${max})`,
      lewis: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${lewis})`,
      bottas: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${bottas})`,
      perez: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${perez})`,
      sainz: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${sainz})`,
      norris: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${norris})`,
      leclerc: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${leclerc})`,
      ricciardo: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${ricciardo})`,
      gasly: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${gasly})`,
      alonso: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${alonso})`,
      ocon: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${ocon})`,
      vettel: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${vettel})`,
      stroll: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${stroll})`,
      tsunoda: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${tsunoda})`,
      russell: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${russell})`,
      albon: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${albon})`,
      latifi: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${latifi})`,
      zhou: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${zhou})`,
      mick: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${mick})`,
      magnussen: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(${magnussen})`,
      // kubica: `linear-gradient(rgba(1, 1, 1, 100),rgba(1, 1, 1, 0.10)),url(https://cdn-1.motorsport.com/static/img/amp/4900000/4980000/4981000/4981700/4981771/s6_1008021/1008021.jpg)`,
    };
  },
  methods: {
    getDriver() {
      this.driverInfo = this.$props.driver;
    },
    loadDriverData() {
      this.currentDriver = this.driverInfo;
      console.log(this.currentDriver, 'hmm?');
    },
  },
  mounted() {
    this.loadDriverData();
    this.driverInfo = this.$route.params;
    // console.log(this.$route.params, 'params');
    console.log(this.driverInfo, 'this.driverInfo');
  },
};
</script>

<style>
.bg-max {
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.75),
      rgba(1, 1, 1, 0.1)
    ),
    url(${max});
}
.driver-page {
  position: relative;
  display: flex;
  background-image: linear-gradient(
    rgba(1, 1, 1, 100),
    rgba(255, 255, 255, 0.43)
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
