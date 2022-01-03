<template>
  <div class="w-full bg-secondary">
    <div class="">
      <div
        class="driver-page h-80vh lg:h-84vh w-full flex flex-col px-6 py-2 md:p-6"
        :class="
          driverInfo.code === 'VER'
            ? 'bg-max'
            : driverInfo.code === 'HAM'
            ? 'bg-lewis'
            : driverInfo.code === 'BOT'
            ? 'bg-bottas'
            : driverInfo.code === 'PER'
            ? 'bg-perez'
            : driverInfo.code === 'SAI'
            ? 'bg-sainz'
            : driverInfo.code === 'NOR'
            ? 'bg-norris'
            : driverInfo.code === 'LEC'
            ? 'bg-leclerc'
            : driverInfo.code === 'RIC'
            ? 'bg-ricciardo'
            : driverInfo.code === 'GAS'
            ? 'bg-gasly'
            : driverInfo.code === 'ALO'
            ? 'bg-alonso'
            : driverInfo.code === 'OCO'
            ? 'bg-ocon'
            : driverInfo.code === 'VET'
            ? 'bg-vettel'
            : driverInfo.code === 'STR'
            ? 'bg-stroll'
            : driverInfo.code === 'TSU'
            ? 'bg-tsunoda'
            : driverInfo.code === 'RUS'
            ? 'bg-russell'
            : driverInfo.code === 'RAI'
            ? 'bg-raikonnen'
            : driverInfo.code === 'LAT'
            ? 'bg-latifi'
            : driverInfo.code === 'GIO'
            ? 'bg-giovinazzi'
            : driverInfo.code === 'MSC'
            ? 'bg-mick'
            : driverInfo.code === 'MAZ'
            ? 'bg-mazepin'
            : driverInfo.code === 'KUB'
            ? 'bg-kubica'
            : ''
        "
      >
        <driver-title :driverInfo="driverInfo" />
        <p>{{ currentDriver }}</p>
        <div class="w-full h-full flex justify-center items-center">
          <drivers-card :driverInfo="driverInfo" />
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
      driverInfo: '',
      currentDriver: [],
    };
  },
  methods: {
    getDriver() {
      this.driverInfo = this.$props.driver;
    },
    loadDriverData() {
      this.currentDriver = this.driverInfo;
      console.log(this.currentDriver, 'hmm?');
    },
  },
  mounted() {
    this.loadDriverData();
    this.driverInfo = this.$route.params;
    // console.log(this.$route.params, 'params');
    console.log(this.driverInfo, 'lol');
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
