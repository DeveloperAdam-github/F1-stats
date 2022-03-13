<template>
  <div class="h-20 flex p-3 lg:mt-4 z-10">
    <div class="h-full border-l-2 border-red-500"></div>
    <div class="h-full flex flex-col justify-start pl-3">
      <div class="text-left text-lg font-bold text-white">
        <h1 class="font-boldHeadline tracking-wide text-base lg:text-lg">
          {{ circuit.raceName }} Weekend Schedule
        </h1>
      </div>
      <div
        class="text-xs lg:text-lg text-gray-400 flex-wrap lg:flex-nowrap w-4/5 text-left font-sans lg:w-full mt-1"
      >
        <p>
          Here is the weekend schedule, see below for even times and fastest lap
          setter for each session.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['circuit'],
  created() {
    console.log(this.$props.circuit, 'the circuit data');
  },
};
</script>

<style></style>
