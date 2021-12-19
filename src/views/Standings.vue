<template>
  <div class="standings w-full flex-1 race overflow-hidden">
    <div class="">
      <div class="h-84vh w-full flex flex-col px-6 p-6">
        <standings-title />
        <div class="h-full w-full flex flex-col items-center mt-4">
          <div
            class="w-full h-full md:w-10/12 lg:w-8/12 xl:w-1/2 flex flex-col p-4 md:items-center overflow-scroll no-scrollbar pb-60 carousel-vertical"
          >
            <div class="flex w-full justify-between">
              <h2
                class="font-headline text-white m-5 underline carousel-item text-xs md:text-base cursor-pointer transition-all"
                @click="
                  (this.showDrivers = !this.showDrivers),
                    (this.showConstructors = !this.showConstructors)
                "
                :style="{
                  'text-decoration':
                    this.showDrivers === true ? 'underline' : 'none',
                  color: this.showDrivers === true ? 'red' : 'white',
                  'font-size': this.showDrivers === true ? '16px' : '12px',
                }"
              >
                Driver Standings
              </h2>
              <h2
                class="font-headline text-white m-5 underline carousel-item text-xs md:text-base cursor-pointer transition-all"
                @click="
                  (this.showConstructors = !this.showConstructors),
                    (this.showDrivers = !this.showDrivers)
                "
                :style="{
                  'text-decoration':
                    this.showConstructors === true ? 'underline' : 'none',
                  color: this.showConstructors === true ? 'red' : 'white',
                  'font-size': this.showConstructors === true ? '16px' : '12px',
                }"
              >
                Team Standings
              </h2>
            </div>

            <div class="w-full h-11/12">
              <standings-card
                v-if="showDrivers"
                v-for="(driver, index) in drivers"
                :driver="driver"
                :key="index"
              />

              <constructor-standings-card
                v-if="showConstructors"
                v-for="(team, index) in teams"
                :team="team"
                :key="index"
              />
            </div>
            <!-- <div
              class="w-full h-11/12 mt-4 lg:mt-5"
              v-for="(team, index) in teams"
              :key="index"
            >
              <constructor-standings-card v-if="showConstructors" />
            </div> -->
          </div>
          <!-- <div
            class="w-full md:w-1/2 h-full bg-purple-600 flex flex-col p-4 md:items-center"
          >
            <h2 class="font-headline">Team standings</h2>

          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StandingsCard from '../components/Standings/StandingsCard.vue';
import StandingsTitle from '../components/Standings/StandingsTitle.vue';
import ConstructorStandingsCard from '../components/Standings/ConstructorStandingsCard.vue';

export default {
  data() {
    return {
      drivers: [],
      teams: [],
      showDrivers: true,
      showConstructors: false,
    };
  },
  components: { StandingsCard, StandingsTitle, ConstructorStandingsCard },
  methods: {
    getDrivers() {
      axios
        .get('https://ergast.com/api/f1/current/driverStandings.json')
        .then((response) => {
          this.drivers =
            response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });
    },
    getTeams() {
      axios
        .get('https://ergast.com/api/f1/current/constructorStandings.json')
        .then((response) => {
          this.teams =
            response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        });
    },
  },
  mounted() {
    this.getDrivers();
    this.getTeams();
  },
};
</script>

<style>
.standings {
  background-image: linear-gradient(rgba(1, 1, 1, 1), rgba(0, 0, 0, 0.1));
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
