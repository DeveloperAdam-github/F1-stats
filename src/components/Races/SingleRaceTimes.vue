<template>
  <div class="h-full flex items-center flex-col p-2 lg:p-10 pt-2">
    <!-- PRACTICE 1 -->
    <div class="h-20 w-full mt-5 flex flex-col">
      <div class="flex w-full items-center text-xxs font-headline">
        <p>18th March</p>
        <p class="mx-1">13:00</p>
        <span class="h-3 mb-0.5 mx-1"></span>
        <!-- <p class="text-purple font-bold">
          <i class="fas fa-stopwatch mx-1"></i>Max Verstappen
        </p> -->
      </div>
      <div class="flex w-full items-center">
        <i class="fas fa-cog mr-2"></i>
        <p class="text-xl font-boldHeadline">Practice 1</p>
      </div>
      <div class="w-5/6 h-2 border-b border-gray-700 mx-auto"></div>
    </div>

    <!-- PRACTICE 2 -->
    <div class="h-20 w-full flex flex-col">
      <div class="flex w-full items-center text-xxs font-headline">
        <p>18th March</p>
        <p class="mx-1">17:00</p>
        <span class="h-3 mb-0.5 mx-1"></span>
        <!-- <p class="text-purple font-bold">
          <i class="fas fa-stopwatch mx-1"></i>Lewis Hamilton
        </p> -->
      </div>
      <div class="flex w-full items-center">
        <i class="fas fa-cog mr-2"></i>
        <p class="text-xl font-boldHeadline">Practice 2</p>
      </div>
      <div class="w-5/6 h-2 border-b border-gray-700 mx-auto"></div>
    </div>

    <!-- PRACTICE 3 -->
    <div class="h-20 w-full flex flex-col">
      <div class="flex w-full items-center text-xxs font-headline">
        <p>19th March</p>
        <p class="mx-1">13:00</p>
        <span class="h-3 mb-0.5 mx-1"></span>
        <!-- <p class="text-purple font-bold">
          <i class="fas fa-stopwatch mx-1"></i>Max Verstappen
        </p> -->
      </div>
      <div class="flex w-full items-center">
        <i class="fas fa-cog mr-2"></i>
        <p class="text-xl font-boldHeadline">Practice 3</p>
      </div>
      <div class="w-5/6 h-2 border-b border-gray-700 mx-auto"></div>
    </div>

    <!-- QUALIFYING -->
    <div class="h-20 w-full flex flex-col">
      <div class="flex w-full items-center text-xxs font-headline">
        <p>19th March</p>
        <p class="mx-1" v-if="qualifyingResults">
          {{ qualifyingResults.time }}
        </p>
        <span class="border-red-600 border-r-2 h-3 mb-0.5 mx-1"></span>
        <p class="text-purple font-bold" v-if="qualifyingResults">
          <i class="fas fa-stopwatch mx-1"></i
          >{{ qualifyingResults.QualifyingResults[0].Driver.familyName }}{{ ' '
          }}{{ qualifyingResults.QualifyingResults[0].Q3 }}
        </p>
      </div>
      <div class="flex w-full items-center">
        <i class="fas fa-stopwatch mr-2"></i>
        <p class="text-xl font-boldHeadline">Qualifying</p>
      </div>
      <div class="w-5/6 h-2 border-b border-gray-700 mx-auto"></div>
    </div>

    <!-- RACE -->
    <div class="h-20 w-full flex flex-col">
      <div class="flex w-full items-center text-xxs font-headline">
        <p>20th March</p>
        <p class="mx-1">15:00</p>
        <span class="border-red-600 border-r-2 h-3 mb-0.5 mx-1"></span>
        <p class="text-purple font-bold">
          <i class="fas fa-stopwatch mx-1"></i>Lando Norris
        </p>
      </div>
      <div class="flex w-full items-center">
        <i class="fas fa-flag-checkered mr-2"></i>
        <p class="text-xl font-boldHeadline">Race</p>
      </div>
      <div class="w-5/6 h-2 border-b border-gray-700 mx-auto"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      round: '',
      qualifyingResults: '',
    };
  },
  props: ['circuit'],
  methods: {
    getQualifyingData() {
      axios
        .get(
          `https://ergast.com/api/f1/current/${this.$route.params.round}/qualifying.json`
        )
        .then((response) => {
          this.qualifyingResults = response.data.MRData.RaceTable.Races[0];
          console.log(response, 'the qualifying response');
        });
    },
  },
  mounted() {
    this.getQualifyingData();
    this.round = this.$route.params.round;
    console.log(this.round, 'the round from inside the times?');
  },
};
</script>

<style></style>
