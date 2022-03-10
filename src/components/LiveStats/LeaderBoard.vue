<template>
  <div v-if="sessionData">
    <div v-for="(driver, index) in sessionData.results.drivers" :key="index">
      <!-- Driver card -->
      <div
        class="w-full border-b-2 border-r-2 border-gray-800 rounded-br-lg h-6 md:h-10 my-2 flex px-1 items-center text-xs md:text-lg"
      >
        <div
          class="font-boldHeadline w-14 text-left pl-1 text-xxs md:text-base"
        >
          #{{ driver.position }}
        </div>
        <div
          class="border-r-2 lg:border-r-4 h-4 md:h-5 mr-2 w-2"
          :style="{
            'border-color':
              driver.team_name === 'Red Bull'
                ? this.red_bull
                : driver.team_name === 'Mercedes'
                ? this.mercedes
                : driver.team_name === 'Ferrari'
                ? this.ferrari
                : driver.team_name === 'McLaren'
                ? this.mclaren
                : driver.team_name === 'AlphaTauri'
                ? this.alphatauri
                : driver.team_name === 'Alpine'
                ? this.alpine
                : driver.team_name === 'Aston Martin'
                ? this.aston_martin
                : driver.team_name === 'Williams'
                ? this.williams
                : driver.team_name === 'Alfa Romeo Racing'
                ? this.alfa
                : driver.team_name === 'Haas'
                ? this.haas
                : '',
          }"
        ></div>
        <div class="font-headline w-full flex">
          <p>{{ driver.name }}</p>
        </div>
        <div class="w-40 font-headline text-xxs md:text-base text-left">
          + {{ this.intervalText === true ? driver.interval : driver.gap }}
        </div>
        <div class="w-10 flex justify-end px-1">
          <img
            v-if="
              driver.current_tyre === 'hard-new' ||
              driver.current_tyre === 'hard-used'
            "
            class="h-5 w-5 md:h-10 md:w-10"
            src="../../assets/Tyres/F1_tire_Pirelli_PZero_White.svg"
            alt=""
          />
          <img
            v-if="
              driver.current_tyre === 'soft-new' ||
              driver.current_tyre === 'soft-used'
            "
            class="h-5 w-5 md:h-10 md:w-10"
            src="../../assets/Tyres/F1_tire_Pirelli_PZero_Red.svg"
            alt=""
          />
          <img
            v-if="
              driver.current_tyre === 'medium-new' ||
              driver.current_tyre === 'medium-used'
            "
            class="h-5 w-5 md:h-10 md:w-10"
            src="../../assets/Tyres/F1_tire_Pirelli_PZero_Yellow.svg"
            alt=""
          />
          <img
            v-if="
              driver.current_tyre === 'wet-new' ||
              driver.current_tyre === 'wet-used'
            "
            class="h-5 w-5 md:h-10 md:w-10"
            src="../../assets/Tyres/F1_tire_Pirelli_Cinturato_Blue.svg"
            alt=""
          />
        </div>
      </div>
      <!-- Driver card -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      intervalText: true,
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
    };
  },
  methods: {
    rotateText() {
      this.intervalText = !this.intervalText;
    },
    intervalTimer() {
      this.interval = setInterval(() => {
        this.rotateText();
      }, 10 * 1000);
    },
  },
  props: ['sessionData'],
  created() {
    this.intervalTimer();
    console.log(this.$props.sessionData, 'lol?');
  },
};
</script>

<style></style>
