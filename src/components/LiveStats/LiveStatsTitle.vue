<template>
  <div class="h-20 flex p-3 lg:mt-4" v-if="sessionData">
    <div class="h-full border-l-2 border-red-500"></div>
    <div class="h-full flex flex-col justify-start pl-3">
      <div class="text-left text-lg font-bold text-white">
        <h1 class="font-boldHeadline tracking-wide text-sm lg:text-lg">
          <span class="live-span text-3xl opacity-0 mr-1">
            <i class="fa-solid fa-circle text-sm live-span"></i>
          </span>
          Live {{ sessionData.results.race.name }}
        </h1>
      </div>
      <div
        class="text-xs lg:text-lg text-gray-400 flex-wrap lg:flex-nowrap w-4/5 text-left font-sans lg:w-full"
      >
        <p>Keep up with the action with real time data updated every minute!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['team', 'sessionData'],
};
</script>

<style scoped>
.live-span {
  font-weight: bold;
  opacity: 100;
  color: #ff2e0c;
}
</style>
