<template>
  <div class="w-full flex-1 bg-secondary race overflow-hidden">
    <div class="">
      <div class="h-84vh w-full flex flex-col px-6 md:p-6">
        <race-title />
        <div>
          <div
            class="w-auto flex pt-10 lg:pt-24 overflow-x-scroll no-scrollbar carousel"
          >
            <race-card
              class=""
              v-for="(race, index) in races"
              :key="index"
              :race="race"
              :first="firstPlace[index]"
              :second="secondPlace[index]"
              :third="thirdPlace[index]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RaceCard from '../components/Races/RaceCard.vue';
import RaceTitle from '../components/Races/RaceTitle.vue';
import axios from 'axios';

export default {
  components: { RaceTitle, RaceCard },
  data() {
    return {
      races: [],
      firstPlace: [],
      secondPlace: [],
      thirdPlace: [],
    };
  },
  methods: {
    getRaces() {
      axios.get('https://ergast.com/api/f1/current.json').then((response) => {
        this.races = response.data.MRData.RaceTable.Races;
      });
    },
    async getFirstPlace() {
      axios
        .get('https://ergast.com/api/f1/current/results/1.json')
        .then((response) => {
          response.data.MRData.RaceTable.Races.forEach((element) =>
            this.firstPlace.push(element)
          );
        });
    },
    getSecondPlace() {
      axios
        .get('https://ergast.com/api/f1/current/results/2.json')
        .then((response) => {
          this.secondPlace = response.data.MRData.RaceTable.Races;
        });
    },
    getThirdPlace() {
      axios
        .get('https://ergast.com/api/f1/current/results/3.json')
        .then((response) => {
          this.thirdPlace = response.data.MRData.RaceTable.Races;
        });
    },
  },
  mounted() {
    this.getRaces();
    this.getFirstPlace();
    this.getSecondPlace();
    this.getThirdPlace();
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
