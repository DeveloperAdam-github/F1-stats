<template>
  <div class="h-20 flex p-3 lg:mt-4">
    <div class="h-full border-l-2 border-red-500"></div>
    <div class="h-full flex flex-col justify-start pl-3">
      <div class="text-left text-sm font-bold text-white">
        <h1 class="font-boldHeadline tracking-wide text-sm lg:text-lg">
          Head to Head
        </h1>
      </div>
      <div
        class="text-xs lg:text-lg text-gray-400 flex-wrap lg:flex-nowrap w-4/5 text-left font-sans lg:w-full"
      >
        <p>See the {{ team.name }} drivers go head to head!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['team'],
};
</script>

<style></style>
