<template>
  <div class="w-full bg-secondary">
    <div class="">
      <div
        class="live-page h-80vh lg:h-84vh w-full flex flex-col px-6 py-2 md:p-6 text-white overflow-hidden"
      >
        <live-stats-title :sessionData="sessionData" />
        <div class="w-full h-full flex flex-col items-center pt-5">
          <live-stats-map :sessionData="sessionData" />
          <div
            class="w-full flex h-20 lg:h-28 items-center justify-between text-xs font-headline flex-wrap"
          >
            <p
              class="m-1 cursor-pointer transition-all text-xs lg:text-lg"
              :class="leaderBoard === true ? 'underline text-third' : ''"
              @click="
                (this.leaderBoard = true),
                  (this.pitStops = false),
                  (this.fastestLaps = false)
              "
            >
              LeaderBoard
            </p>
            <p
              class="m-1 cursor-pointer transition-all text-xs lg:text-lg"
              :class="pitStops === true ? 'underline text-third' : ''"
              @click="
                (this.leaderBoard = false),
                  (this.pitStops = true),
                  (this.fastestLaps = false)
              "
            >
              Pit Stops
            </p>
            <p
              class="m-1 cursor-pointer transition-all text-xs lg:text-lg"
              :class="fastestLaps === true ? 'underline text-third' : ''"
              @click="
                (this.leaderBoard = false),
                  (this.pitStops = false),
                  (this.fastestLaps = true)
              "
            >
              Top Speeds
            </p>
          </div>

          <div
            class="w-full px-2 flex h-27rem lg:h-full flex-col overflow-scroll"
          >
            <transition name="component" mode="out-in">
              <leader-board v-if="leaderBoard" :sessionData="sessionData" />
            </transition>

            <transition name="component" mode="out-in">
              <pit-stops v-if="pitStops" :sessionData="sessionData" />
            </transition>

            <transition name="component" mode="out-in">
              <fastest-lap v-if="fastestLaps" :sessionData="sessionData" />
            </transition>
          </div>

          <!-- <div
            class="w-full px-2 flex flex-col h-96 overflow-scroll"
            v-if="pitStops"
          >
            <pit-stops />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FastestLap from '../components/LiveStats/FastestLap.vue';
import LeaderBoard from '../components/LiveStats/LeaderBoard.vue';
import LiveStatsMap from '../components/LiveStats/LiveStatsMap.vue';
import LiveStatsTitle from '../components/LiveStats/LiveStatsTitle.vue';
import PitStops from '../components/LiveStats/PitStops.vue';
export default {
  components: {
    LiveStatsTitle,
    LiveStatsMap,
    LeaderBoard,
    PitStops,
    FastestLap,
  },
  data() {
    return {
      leaderBoard: true,
      pitStops: false,
      fastestLaps: false,
      sessionId: 3093,
      isTimerON: false,
      interval: '',
      countdown: '',
      sessionData: null,
      driverData: [],
      red_bull: '#0600ef',
      mercedes: '#00D2BE',
      ferrari: '#DC0000',
      mclaren: '#FF9800',
      alphatauri: '#2B4562',
      alfa: '#900000',
      haas: '#FFF',
      alpine: '#0090FF',
      aston_martin: '#006F62',
      williams: '#005AFF',
    };
  },
  methods: {
    getTimeToFeedInSessionId() {
      var todaysDateInUTC = new Date().getTime();
      // Bahrain Start & Finish Times.
      var bahrainStartDate = new Date('20 Mar 2022 15:00').getTime();
      var bahrainFinishDate = new Date('20 Mar 2022 18:18').getTime();

      // Saudi Arabia Start & Finish Times.
      var saudiStartDate = new Date('27 Mar 2022 18:00').getTime();
      var saudiFinishDate = new Date('27 Mar 2022 21:00').getTime();

      // Australia Start & Finish Times.
      var australiaStartDate = new Date('27 Mar 2022 18:00').getTime();
      var australiaFinishDate = new Date('27 Mar 2022 21:00').getTime();

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
        todaysDateInUTC >= bahrainStartDate &&
        todaysDateInUTC <= bahrainFinishDate
      ) {
        this.sessionId = 3111;
      } else if (
        todaysDateInUTC >= saudiStartDate &&
        todaysDateInUTC <= saudiFinishDate
      ) {
        this.sessionId = 3120;
      } else if (
        todaysDateInUTC >= australiaStartDate &&
        todaysDateInUTC <= australiaFinishDate
      ) {
        this.sessionId = 3129;
      } else if (
        todaysDateInUTC >= emiliaStartDate &&
        todaysDateInUTC <= emiliaFinishDate
      ) {
        this.sessionId = 3138;
      } else if (
        todaysDateInUTC >= miamiStartDate &&
        todaysDateInUTC <= miamiFinishDate
      ) {
        this.sessionId = 3147;
      } else if (
        todaysDateInUTC >= spainStartDate &&
        todaysDateInUTC <= spainFinishDate
      ) {
        this.sessionId = 3156;
      } else if (
        todaysDateInUTC >= monacoStartDate &&
        todaysDateInUTC <= monacoFinishDate
      ) {
        this.sessionId = 3165;
      } else if (
        todaysDateInUTC >= azerbaijanStartDate &&
        todaysDateInUTC <= azerbaijanFinishDate
      ) {
        this.sessionId = 3174;
      } else if (
        todaysDateInUTC >= canadaStartDate &&
        todaysDateInUTC <= canadaFinishDate
      ) {
        this.sessionId = 3183;
      } else if (
        todaysDateInUTC >= greatbritainStartDate &&
        todaysDateInUTC <= greatbritainFinishDate
      ) {
        this.sessionId = 3192;
      } else if (
        todaysDateInUTC >= austriaStartDate &&
        todaysDateInUTC <= austriaFinishDate
      ) {
        this.sessionId = 3201;
      } else if (
        todaysDateInUTC >= franceStartDate &&
        todaysDateInUTC <= franceFinishDate
      ) {
        this.sessionId = 3210;
      } else if (
        todaysDateInUTC >= hungaryStartDate &&
        todaysDateInUTC <= hungaryFinishDate
      ) {
        this.sessionId = 3219;
      } else if (
        todaysDateInUTC >= belgiumStartDate &&
        todaysDateInUTC <= belgiumFinishDate
      ) {
        this.sessionId = 3228;
      } else if (
        todaysDateInUTC >= netherlandsStartDate &&
        todaysDateInUTC <= netherlandsFinishDate
      ) {
        this.sessionId = 3237;
      } else if (
        todaysDateInUTC >= italyStartDate &&
        todaysDateInUTC <= italyFinishDate
      ) {
        this.sessionId = 3246;
      } else if (
        todaysDateInUTC >= singaporeStartDate &&
        todaysDateInUTC <= singaporeFinishDate
      ) {
        this.sessionId = 3255;
      } else if (
        todaysDateInUTC >= japanStartDate &&
        todaysDateInUTC <= japanFinishDate
      ) {
        this.sessionId = 3264;
      } else if (
        todaysDateInUTC >= usaStartDate &&
        todaysDateInUTC <= usaFinishDate
      ) {
        this.sessionId = 3273;
      } else if (
        todaysDateInUTC >= mexicoStartDate &&
        todaysDateInUTC <= mexicoFinishDate
      ) {
        this.sessionId = 3282;
      } else if (
        todaysDateInUTC >= brazilStartDate &&
        todaysDateInUTC <= brazilFinishDate
      ) {
        this.sessionId = 3300;
      } else if (
        todaysDateInUTC >= abudhabiStartDate &&
        todaysDateInUTC <= abudhabiFinishDate
      ) {
        this.sessionId = 3309;
      } else {
        this.stopInterval();
      }
      this.getLiveData();
    },
    stopInterval() {
      console.log('stopping');
      clearInterval(this.interval);
    },
    getLiveData() {
      var options = {
        method: 'GET',
        url: `https://f1-live-motorsport-data.p.rapidapi.com/session/${this.sessionId}`,
        headers: {
          'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
          'x-rapidapi-key':
            '3473e9306amshb366e69081a5fcfp1a12bcjsn82243f92310b',
        },
      };

      axios
        .request(options)
        .then((response) => {
          console.log(response.data);
          this.sessionData = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
      console.log('👑');
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.getTimeToFeedInSessionId();
    this.interval = setInterval(() => {
      this.getTimeToFeedInSessionId();
    }, 20 * 100000);
  },
};
</script>

<style>
.live-page {
  background-image: linear-gradient(rgba(1, 1, 1, 1), rgba(0, 0, 0, 0.1));
}

/* Route transitions */
.component-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.component-enter-active {
  transition: all 0.4s ease-in-out;
}

.component-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.component-leave-active {
  transition: all 0.4s ease-in-out;
}
</style>
