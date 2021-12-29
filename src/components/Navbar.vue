<template>
  <div
    class="bottom-0 h-10vh font-headline w-full flex items-center p-2 bg-secondary text-gray-400 text-xxs sm:text-xs justify-around lg:text-base"
  >
    <div class="w-auto p-1">
      <router-link
        class="flex items-center w-full m-2 p-1"
        :to="{ name: 'Drivers' }"
      >
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span>
        Drivers
      </router-link>
    </div>
    <div class="w-auto p-1">
      <router-link
        class="flex items-center w-auto m-2 p-1"
        :to="{ name: 'Races' }"
      >
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span
        >Races</router-link
      >
    </div>
    <div class="w-auto p-1">
      <router-link
        class="flex items-center w-auto m-2 p-1"
        :to="{ name: 'Teams' }"
      >
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span
        >Teams</router-link
      >
    </div>
    <div class="w-auto p-1">
      <router-link
        class="flex items-center w-auto m-2 p-1"
        :to="{ name: 'Standings' }"
      >
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span
        >Standings</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .router-link {
  width: auto;
  padding: 2px;
  margin: 2px;
  display: flex;
  align-items: center;
} */
.router-link-active {
  color: white;
  font-weight: bold;

  /* transition: font-weight 0.3s linear; */
}

.router-link-active span {
  font-weight: bold;
  opacity: 100;
  color: #ff2e0c;
}
</style>
