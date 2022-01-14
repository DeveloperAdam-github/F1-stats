<template>
  <div
    class="h-14 md:h-16 lg:h-24 2xl:h-28 w-full rounded-md small-card flex rounded-br-full items-center carousel-item mt-4 lg:mt-5"
    :style="{
      'background-image':
        team.Constructor.constructorId === 'red_bull'
          ? this.backgroundImage.red_bull
          : team.Constructor.constructorId === 'mercedes'
          ? this.backgroundImage.mercedes
          : team.Constructor.constructorId === 'ferrari'
          ? this.backgroundImage.ferrari
          : team.Constructor.constructorId === 'mclaren'
          ? this.backgroundImage.mclaren
          : team.Constructor.constructorId === 'alphatauri'
          ? this.backgroundImage.alphatauri
          : team.Constructor.constructorId === 'alpine'
          ? this.backgroundImage.alpine
          : team.Constructor.constructorId === 'aston_martin'
          ? this.backgroundImage.aston_martin
          : team.Constructor.constructorId === 'williams'
          ? this.backgroundImage.williams
          : team.Constructor.constructorId === 'alfa'
          ? this.backgroundImage.alfa
          : team.Constructor.constructorId === 'haas'
          ? this.backgroundImage.haas
          : '',
    }"
  >
    <div
      class="card-line w-10 h-10 border-r-3 flex items-center justify-center text-white font-boldHeadline text-lg p-5"
      :style="{
        'border-color':
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
      <h3>{{ team.position }}</h3>
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <p class="font-headline text-white">{{ team.Constructor.name }}</p>
    </div>
    <div
      class="w-16 h-full flex flex-col items-center justify-center text-white font-headline text-xs flash-card rounded-tr-md rounded-br-md transform -skew-x-12"
    >
      <p>{{ team.points }}</p>
      <p class="hidden sm:block text-xxs lg:text-xs">pts</p>
    </div>
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
      backgroundImage: {
        red_bull: `linear-gradient(to bottom right,#0600ef, rgba(1, 1, 1, 0.9)), url(${redbull})`,
        mercedes: `linear-gradient(to bottom right, #00D2BE, rgba(1,1,1,0.9)),url(${mercedes})`,
        ferrari: `linear-gradient(to bottom right, #DC0000, rgba(1,1,1,0.9)),url(${ferrari})`,
        mclaren: `linear-gradient(to bottom right, #FF9800, rgba(1,1,1,0.9)),url(${mclaren})`,
        alphatauri: `linear-gradient(to bottom right, #2B4562, rgba(1,1,1,0.9)),url(${alphatauri})`,
        alfa: `linear-gradient(to bottom right, #900000, rgba(1,1,1,0.9)),url(${alfa})`,
        williams: `linear-gradient(to bottom right, #005AFF, rgba(1,1,1,0.9)),url(${williams2})`,
        haas: `linear-gradient(to bottom right, #ffff, rgba(1,1,1,0.9)),url(${haas})`,
        alpine: `linear-gradient(to bottom right, #0090FF, rgba(1,1,1,0.9)),url(${alpine})`,
        aston_martin: `linear-gradient(to bottom right, #006F62, rgba(1,1,1,0.9)),url(${aston})`,
      },
    };
  },
  props: ['team'],
  methods: {
    whatTeam() {},
  },
  mounted() {
    this.whatTeam();
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
