<template>
  <div
    class="bottom-0 h-10vh z-100 font-headline w-full flex items-center p-2 bg-secondary text-gray-400 text-xxs sm:text-xs lg:text-base carousel"
  >
    <div class="w-1/5 mx-1 carousel-item flex justify-center">
      <router-link class="flex items-center mx-2 p-1" :to="{ name: 'Home' }">
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span>
        Home
      </router-link>
    </div>
    <div
      class="w-1/5 mx-1 carousel-item flex items-center justify-center"
      v-if="sessionActive"
    >
      <router-link
        class="flex items-center mx-2 p-1"
        :to="{ name: 'LiveDetails' }"
      >
        <!-- <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span> -->
        Live
        <i class="fa-solid fa-circle text-xxs mt-0.5 ml-1 live-span"></i>
      </router-link>
    </div>
    <div class="w-1/5 mx-1 carousel-item flex justify-center">
      <router-link class="flex items-center mx-2 p-1" :to="{ name: 'Drivers' }">
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span>
        Drivers
      </router-link>
    </div>
    <div class="w-1/5 mx-1 carousel-item flex justify-center">
      <router-link class="flex items-center mx-2 p-1" :to="{ name: 'Races' }">
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span
        >Races</router-link
      >
    </div>
    <div class="w-1/5 mx-1 carousel-item flex justify-center">
      <router-link class="flex items-center mx-2 p-1" :to="{ name: 'Teams' }">
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span
        >Teams</router-link
      >
    </div>
    <div class="w-1/5 mx-1 carousel-item flex justify-center">
      <router-link
        class="flex items-center mx-2 p-1"
        :to="{ name: 'Standings' }"
      >
        <span class="text-3xl opacity-0 mr-1 mb-1">&#183;</span
        >Standings</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sessionActive: false,
    };
  },
  methods: {
    isLive() {
      var todaysDateInUTC = new Date().getTime();

      // Bahrain Practice Sessions
      // var bahrainPractice2 = new Date('11 Mar 2022 09:00').toUTCString();
      // var bahrainPractice2Finish = new Date('11 Mar 2022 15:20').toUTCString();

      // Bahrain Start & Finish Times.
      var bahrainStartDate = new Date('20 Mar 2022 15:00').getTime();
      var bahrainFinishDate = new Date('20 Mar 2022 18:30').getTime();

      // Saudi Arabia Start & Finish Times.
      var saudiStartDate = new Date('27 Mar 2022 18:00').getTime();
      var saudiFinishDate = new Date('27 Mar 2022 21:00').getTime();

      // Australia Start & Finish Times.
      var australiaStartDate = new Date('10 Apr 2022 06:00').getTime();
      var australiaFinishDate = new Date('10 Apr 2022 09:30').getTime();

      // Emilia-Romagna Start & Finish Times.
      var emiliaStartDate = new Date('24th Apr 2022 14:00').getTime();
      var emiliaFinishDate = new Date('24th Apr 2022 19:00').getTime();

      // Miami Start & Finish Times.
      var miamiStartDate = new Date('08th May 2022 20:30').getTime();
      var miamiFinishDate = new Date('08th May 2022 23:30').getTime();

      // Spain Start & Finish Times.
      var spainStartDate = new Date('22nd May 2022 14:00').getTime();
      var spainFinishDate = new Date('22nd May 2022 17:00').getTime();

      // Monaco Start & Finish Times.
      var monacoStartDate = new Date('29th May 2022 14:00').getTime();
      var monacoFinishDate = new Date('29th May 2022 17:00').getTime();

      // Azerbaijan Start & Finish Times.
      var azerbaijanStartDate = new Date('12th Jun 2022 12:00').getTime();
      var azerbaijanFinishDate = new Date('12th Jun 2022 15:00').getTime();

      // Canda Start & Finish Times.
      var canadaStartDate = new Date('19th Jun 2022 19:00').getTime();
      var canadaFinishDate = new Date('19th Jun 2022 21:00').getTime();

      // greatbritain Start & Finish Times.
      var greatbritainStartDate = new Date('03rd Jul 2022 15:00').getTime();
      var greatbritainFinishDate = new Date('03rd Jul 2022 18:00').getTime();

      // Austria Start & Finish Times.
      var austriaStartDate = new Date('10th Jul 2022 14:00').getTime();
      var austriaFinishDate = new Date('10th Jul 2022 17:00').getTime();

      // France Start & Finish Times.
      var franceStartDate = new Date('24th Jul 2022 14:00').getTime();
      var franceFinishDate = new Date('24th Jul 2022 17:00').getTime();

      // Hungary Start & Finish Times.
      var hungaryStartDate = new Date('31st Jul 2022 14:00').getTime();
      var hungaryFinishDate = new Date('31st Jul 2022 17:00').getTime();

      // Beligum Start & Finish Times.
      var belgiumStartDate = new Date('28th Aug 2022 14:00').getTime();
      var belgiumFinishDate = new Date('28th Aug 2022 17:00').getTime();

      // Netherlands Start & Finish Times.
      var netherlandsStartDate = new Date('04th Sep 2022 14:00').getTime();
      var netherlandsFinishDate = new Date('04th Sep 2022 17:00').getTime();

      // Italy Start & Finish Times.
      var italyStartDate = new Date('11th Sep 2022 14:00').getTime();
      var italyFinishDate = new Date('11th Sep 2022 17:00').getTime();

      // Singapore Start & Finish Times.
      var singaporeStartDate = new Date('02nd Oct 2022 13:00').getTime();
      var singaporeFinishDate = new Date('02nd Oct 2022 16:00').getTime();

      // Japan Start & Finish Times.
      var japanStartDate = new Date('09th Oct 2022 06:00').getTime();
      var japanFinishDate = new Date('09th Oct 2022 09:00').getTime();

      // USA Start & Finish Times.
      var usaStartDate = new Date('23rd Oct 2022 20:00').getTime();
      var usaFinishDate = new Date('23rd Oct 2022 23:00').getTime();

      // Mexico Start & Finish Times.
      var mexicoStartDate = new Date('30th Oct 2022 20:00').getTime();
      var mexicoFinishDate = new Date('30th Oct 2022 23:00').getTime();

      // Brazil Start & Finish Times.
      var brazilStartDate = new Date('13th Nov 2022 18:00').getTime();
      var brazilFinishDate = new Date('13th Nov 2022 21:00').getTime();

      // Abu Dhabi Start & Finish Times.
      var abudhabiStartDate = new Date('20th Nov 2022 14:00').getTime();
      var abudhabiFinishDate = new Date('20th Nov 2022 17:00').getTime();

      if (
        // 10 > 2
        todaysDateInUTC >= bahrainStartDate &&
        todaysDateInUTC <= bahrainFinishDate
      ) {
        this.sessionActive = true;
        console.log('hellloooo 🚀');
      } else if (
        todaysDateInUTC >= saudiStartDate &&
        todaysDateInUTC <= saudiFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= australiaStartDate &&
        todaysDateInUTC <= australiaFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= emiliaStartDate &&
        todaysDateInUTC <= emiliaFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= miamiStartDate &&
        todaysDateInUTC <= miamiFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= spainStartDate &&
        todaysDateInUTC <= spainFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= monacoStartDate &&
        todaysDateInUTC <= monacoFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= azerbaijanStartDate &&
        todaysDateInUTC <= azerbaijanFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= canadaStartDate &&
        todaysDateInUTC <= canadaFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= greatbritainStartDate &&
        todaysDateInUTC <= greatbritainFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= austriaStartDate &&
        todaysDateInUTC <= austriaFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= franceStartDate &&
        todaysDateInUTC <= franceFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= hungaryStartDate &&
        todaysDateInUTC <= hungaryFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= belgiumStartDate &&
        todaysDateInUTC <= belgiumFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= netherlandsStartDate &&
        todaysDateInUTC <= netherlandsFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= italyStartDate &&
        todaysDateInUTC <= italyFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= singaporeStartDate &&
        todaysDateInUTC <= singaporeFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= japanStartDate &&
        todaysDateInUTC <= japanFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= usaStartDate &&
        todaysDateInUTC <= usaFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= mexicoStartDate &&
        todaysDateInUTC <= mexicoFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= brazilStartDate &&
        todaysDateInUTC <= brazilFinishDate
      ) {
        this.sessionActive = true;
      } else if (
        todaysDateInUTC >= abudhabiStartDate &&
        todaysDateInUTC <= abudhabiFinishDate
      ) {
        this.sessionActive = true;
      } else {
        this.sessionActive = false;
      }
      console.log(this.sessionActive, 'is the session active?');
      console.log(todaysDateInUTC, 'todays date');
      console.log(bahrainStartDate, 'date1', bahrainFinishDate, 'date 2');
    },
  },
  mounted() {
    this.isLive();
  },
};
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

.live-span {
  font-weight: bold;
  opacity: 100;
  color: #ff2e0c;
}

.router-link-active span {
  font-weight: bold;
  opacity: 100;
  color: #ff2e0c;
}
</style>
