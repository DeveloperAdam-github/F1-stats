<template>
  <div class="w-full flex justify-between pt-5 lg:pt-2 px-2 bg-black">
    <div class="h-full p-2 pl-4 cursor-pointer mt-5 lg:mt-0">
      <a @click="$router.go(-1)" class="cursor-pointer">
        <i class="fas fa-arrow-left text-white text-xl"></i>
      </a>
    </div>
    <div class="h-full p-2 mt-5 lg:mt-0">
      <p class="font-boldHeadline font-bold text-success text-base lg:text-lg">
        Formula GP
      </p>
    </div>
    <div class="h-full p-2 w-10 flex items-center mt-2 lg:mt-0">
      <router-link to="">
        <i class="fa-solid fa-user text-white text-xl"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
