<template>
  <div
    class="carousel-item flex flex-col pt-10 m-2 mx-5 pl-2 lg:mx-8 w-auto transform"
  >
    <!-- <router-link
      :to="{
        name: 'DriverBattle',
        params: { ...team.Constructor },
        query: { team: team.Constructor.constructorId },
      }"
    > -->
    <router-link
      :to="{
        name: 'TeamPage',
        params: { ...team.Constructor },
        query: { team: team.Constructor.constructorId },
      }"
    >
      <div class="pl-4 w-64 flex justify-center relative">
        <!-- <img
        class="w-40 absolute -top-14 z-10"
        :src="
          team.Circuit.circuitId === 'bahrain' ? this.trackImage.bahrain : ''
        "
        alt=""
      /> -->
      </div>

      <div
        class="team-card w-72 lg:w-96 h-96 lg:h-30rem rounded-lg flex flex-col p-4"
        :style="{
          'background-image':
            team.Constructor.constructorId === 'red_bull'
              ? this.red_bull
              : team.Constructor.constructorId === 'mercedes'
              ? this.mercedes
              : team.Constructor.constructorId === 'ferrari'
              ? this.ferrari
              : team.Constructor.constructorId === 'mclaren'
              ? this.mclaren
              : team.Constructor.constructorId === 'alphatauri'
              ? this.alphatauri
              : team.Constructor.constructorId === 'alpine'
              ? this.alpine
              : team.Constructor.constructorId === 'aston_martin'
              ? this.aston_martin
              : team.Constructor.constructorId === 'williams'
              ? this.williams
              : team.Constructor.constructorId === 'alfa'
              ? this.alfa
              : team.Constructor.constructorId === 'haas'
              ? this.haas
              : '',
        }"
      >
        <div class="flex flex-col p-2 mt-10">
          <h2 class="font-boldHeadline text-white uppercase text-lg">
            {{ team.Constructor.name }}
          </h2>
          <!-- <h2 class="font-boldHeadline text-sm text-white">
          {{ team.points }}
        </h2>
        <p class="text-gray-300 font-boldHeadline text-xs">
          {{ team.position }}
        </p> -->
        </div>
        <div
          class="flex flex-col text-white font-headline text-xs h-full justify-center pb-10"
        >
          <!-- <div class="flex justify-between">
          <p>Max Verstappen</p>
          <p class="font-boldHeadline">1st</p>
        </div>
        <div class="flex justify-between">
          <p>Lewis Hamilton</p>
          <p class="font-boldHeadline">2nd</p>
        </div>
        <div class="flex justify-between">
          <p>Carlos Sainz</p>
          <p class="font-boldHeadline">3rd</p>
        </div> -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import alpine from '../../assets/Teams/alpine.jpeg';
import redbull from '../../assets/Teams/redbull.jpeg';
import mercedes from '../../assets/Teams/mercedes.jpeg';
import ferrari from '../../assets/Teams/ferrari.jpeg';
import mclaren from '../../assets/Teams/mclaren.jpeg';
import haas from '../../assets/Teams/haas.jpeg';
import williams2 from '../../assets/Teams/williams2.jpeg';
import alphatauri from '../../assets/Teams/alphatauri.jpeg';
import alfa from '../../assets/Teams/alfa.jpeg';
import aston from '../../assets/Teams/aston.jpeg';
export default {
  components: {
    alpine,
    redbull,
    mercedes,
    ferrari,
    mclaren,
    haas,
    williams2,
    alphatauri,
    alfa,
    aston,
  },
  data() {
    return {
      red_bull: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.00001)),url(${redbull})`,
      mercedes: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${mercedes})`,
      ferrari: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${ferrari})`,
      mclaren: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${mclaren})`,
      alphatauri: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${alphatauri})`,
      alfa: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${alfa})`,
      williams: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${williams2})`,
      haas: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${haas})`,
      alpine: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${alpine})`,
      aston_martin: `linear-gradient(to bottom right, rgba(1,1,1,0.75), rgba(255,255,255,0.000001)),url(${aston})`,
    };
  },
  props: ['team'],
};
</script>

<style scoped>
.team-card {
  position: relative;
  display: flex;
  /* background-image: v-bind(race) linear-gradient(); */
  background-image: linear-gradient(
    rgba(1, 1, 1, 0.55),
    rgba(255, 255, 255, 0.3)
  );
  /* url(https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789 */
</style>
<!-- https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhabi.png.transform/2col-retina/image.png -->
