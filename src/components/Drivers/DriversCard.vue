<template>
  <div class="mt-8">
    <div class="pl-4">
      <img
        class="w-40"
        src="https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png"
        alt=""
      />
    </div>
    <div
      class="bg-fourth h-64 w-72 rounded-lg flex flex-col p-4 shadow-2xl shadow-white"
    >
      <div class="flex items-center p-2">
        <img
          class="w-5 h-4 rounded-sm mr-5"
          src="../../assets/dutch.gif"
          alt=""
        />
        <h2 class="text-white font-bold">Max</h2>
      </div>
      <div class="flex flex-col mt-4 p-1 text-gray-400 text-sm">
        <div class="flex w-full justify-between m-1">
          <p>Championship Standing</p>
          <p class="text-white font-bold">1</p>
        </div>
        <div class="flex w-full justify-between m-1">
          <p>Points</p>
          <p class="text-white font-bold">365.5</p>
        </div>
        <div class="flex w-full justify-between m-1">
          <p>Podiums</p>
          <p class="text-white font-bold">60</p>
        </div>
        <div class="flex w-full justify-between m-1">
          <p>Age</p>
          <p class="text-white font-bold">24</p>
        </div>
        <div class="flex w-full justify-between m-1">
          <p>GP's entered</p>
          <p class="text-white font-bold">141</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['driver'],
};
</script>

<style></style>
