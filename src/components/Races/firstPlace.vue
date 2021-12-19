<template>
  <div>
    <div
      class="flex justify-between"
      v-for="(first, index) in firstPlace"
      :key="index"
    >
      <p class="text-white">{{ first.Results[0].Driver.familyName }}</p>
      <p class="font-boldHeadline">1st</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      firstPlace: [],
    };
  },
  methods: {
    getFirstPlace() {
      axios
        .get('https://ergast.com/api/f1/current/results/1.json')
        .then((response) => {
          this.firstPlace = response.data.MRData.RaceTable.Races;
        });
    },
  },
  created() {
    this.getFirstPlace();
  },
};
</script>

<style></style>
