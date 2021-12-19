<template>
  <div class="w-full flex justify-between p-1 bg-black">
    <div class="h-full p-2 cursor-pointer">
      <a @click="$router.go(-1)" class="cursor-pointer">
        <i class="fas fa-arrow-left text-white text-xl"></i>
      </a>
    </div>
    <div class="h-full p-2">
      <img class="w-12" src="../assets/F1-logo.png" alt="" />
    </div>
    <div class="h-full p-2 flex items-center">
      <img class="w-10" src="../assets/Teams/RedBull.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
