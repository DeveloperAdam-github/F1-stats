<template>
  <div class="w-full flex-1 bg-secondary overflow-hidden text-white">
    <div class="">
      <div
        class="h-84vh w-full flex flex-col px-6 py-2 md:p-6 overflow-y-scroll"
      >
        <single-race-title :circuit="circuit" />
        <single-race-map :circuit="circuit" />
        <!-- <h1 class="font-boldHeadline text-lg text-left">Schedule</h1> -->
        <single-race-times
          :circuit="circuit"
          :round="round"
          :singleRace="singleRace"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SingleRaceMap from '../components/Races/SingleRaceMap.vue';
import SingleRaceTimes from '../components/Races/SingleRaceTimes.vue';
import SingleRaceTitle from '../components/Races/SingleRaceTitle.vue';
export default {
  data() {
    return {
      circuit: '',
      round: '',
      qualifyingResults: [],
      singleRace: '',
    };
  },
  components: { SingleRaceTimes, SingleRaceTitle, SingleRaceMap },
  methods: {
    async getSingleRaceData() {
      await axios
        .get(`https://ergast.com/api/f1/2022/${this.$route.params.round}.json`)
        .then((response) => {
          this.singleRace = response.data.MRData.RaceTable.Races[0];
        });
    },
    // getQualifyingData() {
    //   axios
    //     .get(
    //       `https://ergast.com/api/f1/current/${this.$route.params.round}/qualifying.json`
    //     )
    //     .then((response) => {
    //       this.qualifyingResults =
    //         response.data.MRData.RaceTable.Races[0].QualifyingResults;
    //       console.log(response, 'the qualifying response');
    //     });
    // },
    // getDriver() {
    //   this.driverInfo = this.$props.driver;
    // },
    // loadDriverData() {
    //   this.currentDriver = this.driverInfo;
    //   console.log(this.currentDriver, 'hmm?');
    // },
  },
  async mounted() {
    await this.getSingleRaceData();
    this.circuit = this.$route.params;
    this.round = this.$route.params.round;
    console.log(this.circuit, 'params');
    // console.log(this.circuit, 'this.circuit');
    // console.log(this.round, 'the round?');
  },
};
</script>

<style></style>
