<template>
  <div class="w-full flex-1 bg-secondary overflow-hidden text-white">
    <div class="">
      <div
        class="h-84vh w-full flex flex-col px-6 py-2 md:p-6 overflow-y-scroll"
      >
        <single-race-title :circuit="circuit" />
        <single-race-map :circuit="circuit" />
        <!-- <h1 class="font-boldHeadline text-lg text-left">Schedule</h1> -->
        <single-race-times :circuit="circuit" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleRaceMap from '../components/Races/SingleRaceMap.vue';
import SingleRaceTimes from '../components/Races/SingleRaceTimes.vue';
import SingleRaceTitle from '../components/Races/SingleRaceTitle.vue';
export default {
  data() {
    return {
      circuit: '',
    };
  },
  components: { SingleRaceTimes, SingleRaceTitle, SingleRaceMap },
  methods: {
    // getDriver() {
    //   this.driverInfo = this.$props.driver;
    // },
    // loadDriverData() {
    //   this.currentDriver = this.driverInfo;
    //   console.log(this.currentDriver, 'hmm?');
    // },
  },
  mounted() {
    // this.loadDriverData();
    this.circuit = this.$route.params;
    // console.log(this.$route.params, 'params');
    console.log(this.circuit, 'this.circuit');
  },
};
</script>

<style></style>
