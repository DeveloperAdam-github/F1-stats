<template>
  <div class="w-full flex-1 bg-secondary race overflow-hidden">
    <div class="">
      <div class="h-84vh w-full flex flex-col px-6 py-2 md:p-6">
        <driver-title />
        <div class="h-full flex items-center">
          <div
            class="w-auto flex overflow-x-scroll no-scrollbar carousel pt-2 lg:pt-8"
          >
            <all-driver-card
              v-for="(driver, index) in drivers"
              :key="index"
              :driver="driver"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DriverTitle from '../components/All-Drivers/DriverTitle.vue';
import AllDriverCard from '../components/All-Drivers/AllDriverCard.vue';
import axios from 'axios';
export default {
  data() {
    return {
      drivers: [],
    };
  },
  components: { DriverTitle, AllDriverCard },
  methods: {
    getDrivers() {
      axios
        .get('https://ergast.com/api/f1/2022/driverStandings.json')
        .then((response) => {
          this.drivers =
            response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          console.log(
            response.data.MRData.StandingsTable.StandingsLists[0]
              .DriverStandings
          );
        });
    },
  },
  mounted() {
    this.getDrivers();
  },
};
</script>

<style scoped>
.race {
  background-image: linear-gradient(rgba(1, 1, 1, 1), rgba(0, 0, 0, 0.1));
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
