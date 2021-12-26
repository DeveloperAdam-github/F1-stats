<template>
  <div class="w-full flex-1 bg-secondary">
    <div class="">
      <div class="driver-page h-84vh w-full flex flex-col p-6">
        <driver-title />
        <p>
          {{ currentDriver }}
          lol
        </p>
        <div class="w-full flex justify-center pt-10">
          <drivers-card @driver="loadDriverData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DriversCard from '../components/Drivers/DriversCard.vue';
import DriverTitle from '../components/Drivers/DriverTitle.vue';
export default {
  components: { DriverTitle, DriversCard },
  data() {
    return {
      currentDriver: [],
    };
  },
  methods: {
    loadDriverData() {
      this.currentDriver = this.driverInfo;
      console.log(this.currentDriver, 'hmm?');
    },
  },
  mounted() {
    this.loadDriverData();
  },
};
</script>

<style>
/* linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%); */
/* linear-gradient(
      rgba(1, 1, 1, 100),
      rgba(1, 1, 1, 0.43)
    ) */
.driver-page {
  position: relative;
  display: flex;
  background-image: linear-gradient(
      rgba(1, 1, 1, 100),
      rgba(255, 255, 255, 0.43)
    ),
    url(https://qph.fs.quoracdn.net/main-qimg-b391f91142376d97500ed2b4c36668d5);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* .driver-page::before {
  content: '';
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.45);
} */
</style>
