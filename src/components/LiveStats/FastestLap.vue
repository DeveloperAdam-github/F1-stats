<template>
  <div v-if="sessionData">
    <div
      v-for="(driver, index) in sessionData.results.speed.top_speeds"
      :key="index"
    >
      <!-- SECTOR 1 -->
      <div class="w-full font-boldHeadline flex">
        <h2>Sector {{ driver.sector }}</h2>
      </div>
      <!-- Driver card -->
      <div
        v-for="(driverDetails, index) in driver.drivers"
        :key="index"
        class="w-full border-b-2 lg:border-b-4 lg:border-r-4 border-r-2 border-gray-800 rounded-br-lg h-6 md:h-10 my-2 flex px-1 items-center text-xs md:text-lg"
      >
        <div class="font-boldHeadline w-11 text-left pl-1 text-xs md:text-base">
          #{{ driverDetails.position }}
        </div>
        <div
          class="border-r-2 lg:border-r-4 h-4 md:h-5 mr-2 w-2"
          :style="{
            'border-color':
              driverDetails.team_name === 'Red Bull'
                ? this.red_bull
                : driverDetails.team_name === 'Mercedes'
                ? this.mercedes
                : driverDetails.team_name === 'Ferrari'
                ? this.ferrari
                : driverDetails.team_name === 'McLaren'
                ? this.mclaren
                : driverDetails.team_name === 'AlphaTauri'
                ? this.alphatauri
                : driverDetails.team_name === 'Alpine'
                ? this.alpine
                : driverDetails.team_name === 'Aston Martin'
                ? this.aston_martin
                : driverDetails.team_name === 'Williams'
                ? this.williams
                : driverDetails.team_name === 'Alfa Romeo Racing'
                ? this.alfa
                : driverDetails.team_name === 'Haas'
                ? this.haas
                : '',
          }"
        ></div>
        <div class="font-headline w-full flex">
          <p>{{ driverDetails.driver }}</p>
        </div>
        <div class="w-32 font-headline text-left">
          {{ driverDetails.speed }}
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
  props: ['sessionData'],
};
</script>

<style></style>
