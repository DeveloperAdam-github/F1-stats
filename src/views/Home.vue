<template>
  <div class="w-full flex-1 bg-secondary home overflow-hidden">
    <div class="">
      <div class="h-84vh w-full flex flex-col px-6 py-2 md:p-6">
        <home-title class="mb-3" />
        <div class="w-full h-full flex flex-col text-white">
          <div class="h-1/2 w-full last-race">
            <div class="w-full p-2 lg:py-3 home">
              <h2 class="font-headline">Last Race</h2>
              <p
                v-if="lastRaceResults.Circuit"
                class="font-headline text-xs text-gray-500"
              >
                {{ lastRaceResults.raceName }}
              </p>
            </div>
            <div
              class="h-full w-full flex flex-col items-center justify-center pb-10"
            >
              <div
                v-if="lastRaceResults.Results"
                class="w-1/2 lg:w-1/3 text-sm lg:text-lg lg:p-2 font-boldHeadline m-2 px-2 p-1 flex justify-between"
                :style="{
                  'background-color':
                    lastRaceResults.Results[0].Constructor.constructorId ===
                    'red_bull'
                      ? this.red_bull
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'mercedes'
                      ? this.mercedes
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'ferrari'
                      ? this.ferrari
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'mclaren'
                      ? this.mclaren
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'alphatauri'
                      ? this.alphatauri
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'alpine'
                      ? this.alpine
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'aston_martin'
                      ? this.aston_martin
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'williams'
                      ? this.williams
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'alfa'
                      ? this.alfa
                      : lastRaceResults.Results[0].Constructor.constructorId ===
                        'haas'
                      ? this.haas
                      : '',
                }"
              >
                <p class="h-auto">
                  {{ lastRaceResults.Results[0].Driver.familyName }}
                </p>
                <p>1st</p>
              </div>
              <div
                v-if="lastRaceResults.Results"
                class="w-1/2 lg:w-1/3 text-sm lg:text-lg lg:p-2 font-boldHeadline m-2 px-2 p-1 flex justify-between"
                :style="{
                  'background-color':
                    lastRaceResults.Results[1].Constructor.constructorId ===
                    'red_bull'
                      ? this.red_bull
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'mercedes'
                      ? this.mercedes
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'ferrari'
                      ? this.ferrari
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'mclaren'
                      ? this.mclaren
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'alphatauri'
                      ? this.alphatauri
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'alpine'
                      ? this.alpine
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'aston_martin'
                      ? this.aston_martin
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'williams'
                      ? this.williams
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'alfa'
                      ? this.alfa
                      : lastRaceResults.Results[1].Constructor.constructorId ===
                        'haas'
                      ? this.haas
                      : '',
                }"
              >
                <p class="h-auto">
                  {{ lastRaceResults.Results[1].Driver.familyName }}
                </p>
                <p>2nd</p>
              </div>
              <div
                v-if="lastRaceResults.Results"
                class="w-1/2 lg:w-1/3 text-sm lg:text-lg lg:p-2 font-boldHeadline m-2 px-2 p-1 flex justify-between"
                :style="{
                  'background-color':
                    lastRaceResults.Results[2].Constructor.constructorId ===
                    'red_bull'
                      ? this.red_bull
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'mercedes'
                      ? this.mercedes
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'ferrari'
                      ? this.ferrari
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'mclaren'
                      ? this.mclaren
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'alphatauri'
                      ? this.alphatauri
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'alpine'
                      ? this.alpine
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'aston_martin'
                      ? this.aston_martin
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'williams'
                      ? this.williams
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'alfa'
                      ? this.alfa
                      : lastRaceResults.Results[2].Constructor.constructorId ===
                        'haas'
                      ? this.haas
                      : '',
                }"
              >
                <p class="h-auto">
                  {{ lastRaceResults.Results[2].Driver.familyName }}
                </p>
                <p>3rd</p>
              </div>
            </div>
          </div>
          <div class="h-1/2 w-full upcoming-race">
            <div class="w-full p-2 home lg:py-3">
              <h2 class="font-headline">Upcoming Race</h2>
              <p
                v-if="upcomingRace.Circuit"
                class="font-headline text-xs text-gray-500"
              >
                {{ upcomingRace.Circuit.Location.locality }}
              </p>
            </div>
            <div
              class="h-full w-full flex items-center justify-center flex-col pb-20 uppercase"
            >
              <div
                class="relative flex justify-center items-center h-14 p-5 w-auto"
              >
                <h2
                  v-if="upcomingRace.Circuit"
                  class="font-boldHeadline text-sm lg:text-xl text-white absolute top-5 left-5 lg:top-4 lg:left-5"
                >
                  {{
                    upcomingRace.Circuit.circuitId === 'bahrain'
                      ? '18 - 20 Mar'
                      : upcomingRace.Circuit.circuitId === 'jeddah'
                      ? '25 - 27 Mar'
                      : upcomingRace.Circuit.circuitId === 'albert_park'
                      ? '08 - 10 Apr'
                      : upcomingRace.Circuit.circuitId === 'imola'
                      ? '22 - 24 Apr'
                      : upcomingRace.Circuit.circuitId === 'miami'
                      ? '06 - 08 May'
                      : upcomingRace.Circuit.circuitId === 'catalunya'
                      ? '20 - 22 May'
                      : upcomingRace.Circuit.circuitId === 'monaco'
                      ? '27 - 29 May'
                      : upcomingRace.raceName === 'BAK'
                      ? '10 - 12 Jun'
                      : upcomingRace.raceName === 'villeneuve'
                      ? '17 - 19 Jun'
                      : upcomingRace.Circuit.circuitId === 'silverstone'
                      ? '01 - 03 Jul'
                      : upcomingRace.Circuit.circuitId === 'red_bull_ring'
                      ? '08 - 10 Jul'
                      : upcomingRace.Circuit.circuitId === 'ricard'
                      ? '22 - 24 Jul'
                      : upcomingRace.Circuit.circuitId === 'hungaroring'
                      ? '29 - 31 Jul'
                      : upcomingRace.Circuit.circuitId === 'spa'
                      ? '26 - 28 Aug'
                      : upcomingRace.Circuit.circuitId === 'zandvoort'
                      ? '02 - 04 Sep'
                      : upcomingRace.Circuit.circuitId === 'monza'
                      ? '09 - 11 Sep'
                      : upcomingRace.Circuit.circuitId === 'sochi'
                      ? '23 - 25 Sep'
                      : upcomingRace.Circuit.circuitId === 'marina_bay'
                      ? '30 - 02 Sep - Oct'
                      : upcomingRace.Circuit.circuitId === 'suzuka'
                      ? '07 - 09 Oct'
                      : upcomingRace.Circuit.circuitId === 'austin'
                      ? '21 - 23 Oct'
                      : upcomingRace.Circuit.circuitId === 'rodriguez'
                      ? '28 - 30 Oct'
                      : upcomingRace.Circuit.circuitId === 'interlagos'
                      ? '11 - 13 Nov'
                      : upcomingRace.Circuit.circuitId === 'yas_marina'
                      ? '18 - 20 Nov'
                      : ''
                  }}
                </h2>
                <h2
                  v-if="upcomingRace.Circuit"
                  class="font-boldHeadline text-sm lg:text-xl text-black"
                >
                  {{
                    upcomingRace.Circuit.circuitId === 'bahrain'
                      ? '18 - 20 Mar'
                      : upcomingRace.Circuit.circuitId === 'jeddah'
                      ? '25 - 27 Mar'
                      : upcomingRace.Circuit.circuitId === 'albert_park'
                      ? '08 - 10 Apr'
                      : upcomingRace.Circuit.circuitId === 'imola'
                      ? '22 - 24 Apr'
                      : upcomingRace.Circuit.circuitId === 'miami'
                      ? '06 - 08 May'
                      : upcomingRace.Circuit.circuitId === 'catalunya'
                      ? '20 - 22 May'
                      : upcomingRace.Circuit.circuitId === 'monaco'
                      ? '27 - 29 May'
                      : upcomingRace.raceName === 'BAK'
                      ? '10 - 12 Jun'
                      : upcomingRace.raceName === 'villeneuve'
                      ? '17 - 19 Jun'
                      : upcomingRace.Circuit.circuitId === 'silverstone'
                      ? '01 - 03 Jul'
                      : upcomingRace.Circuit.circuitId === 'red_bull_ring'
                      ? '08 - 10 Jul'
                      : upcomingRace.Circuit.circuitId === 'ricard'
                      ? '22 - 24 Jul'
                      : upcomingRace.Circuit.circuitId === 'hungaroring'
                      ? '29 - 31 Jul'
                      : upcomingRace.Circuit.circuitId === 'spa'
                      ? '26 - 28 Aug'
                      : upcomingRace.Circuit.circuitId === 'zandvoort'
                      ? '02 - 04 Sep'
                      : upcomingRace.Circuit.circuitId === 'monza'
                      ? '09 - 11 Sep'
                      : upcomingRace.Circuit.circuitId === 'sochi'
                      ? '23 - 25 Sep'
                      : upcomingRace.Circuit.circuitId === 'marina_bay'
                      ? '30 - 02 Sep - Oct'
                      : upcomingRace.Circuit.circuitId === 'suzuka'
                      ? '07 - 09 Oct'
                      : upcomingRace.Circuit.circuitId === 'austin'
                      ? '21 - 23 Oct'
                      : upcomingRace.Circuit.circuitId === 'rodriguez'
                      ? '28 - 30 Oct'
                      : upcomingRace.Circuit.circuitId === 'interlagos'
                      ? '11 - 13 Nov'
                      : upcomingRace.Circuit.circuitId === 'yas_marina'
                      ? '18 - 20 Nov'
                      : ''
                  }}
                </h2>
              </div>
              <div class="relative p-1">
                <p class="font-boldHeadline text-black mb-4 lg:text-lg">
                  {{ secondsToDhms(this.raceDate) }}
                </p>
                <p
                  class="font-boldHeadline text-white absolute bottom-2.5 mb-2 ml-0.5 lg:text-lg"
                >
                  {{ secondsToDhms(this.raceDate) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import HomeTitle from '../components/HomeTitle.vue';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      lastRaceResults: [],
      upcomingRace: [],
      raceDate: '',
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
  components: {
    HelloWorld,
    HomeTitle,
  },
  methods: {
    getLastRaceResults() {
      axios
        .get('https://ergast.com/api/f1/current/last/results.json')
        .then((response) => {
          this.lastRaceResults = response.data.MRData.RaceTable.Races[0];
          console.log(this.lastRaceResults);
        });
    },
    getUpcomingRace() {
      axios
        .get('https://ergast.com/api/f1/current/next.json')
        .then((response) => {
          console.log(response);
          this.upcomingRace = response.data.MRData.RaceTable.Races[0];
          // console.log(this.upcomingRace, 'upcoming');

          const todaysDate = Math.floor(new Date().getTime() / 1000.0);
          const raceDate = Math.floor(
            new Date(response.data.MRData.RaceTable.Races[0].date).getTime() /
              1000.0
          );
          const calculatedTime = raceDate - todaysDate;
          this.raceDate = calculatedTime;
          console.log(this.raceDate);
        });
    },
    secondsToDhms(seconds) {
      seconds = Number(seconds);
      const d = Math.floor(seconds / (3600 * 24));
      const h = Math.floor((seconds % (3600 * 24)) / 3600);

      const dDisplay =
        d > 0
          ? d + (d === 1 ? ' day until lights out' : ' days until lights out')
          : '';
      const hDisplay = h > 0 ? h + (h === 1 ? ' hour ' : ' hours ') : '';

      return hDisplay, dDisplay;
    },
  },
  mounted() {
    this.getLastRaceResults();
    this.getUpcomingRace();
    // this.countdownToNextRace();
  },
};
</script>
<style scoped>
.home {
  background-image: linear-gradient(rgba(1, 1, 1, 1), rgba(0, 0, 0, 0.1));
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.upcoming-race {
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.35),
      rgba(1, 1, 1, 0.55)
    ),
    url(https://www.telegraph.co.uk/content/dam/travel/Spark/bahrain-grand-prix/start-of-bahrain-grand-prix-2017-xlarge.jpg);
  background-position: center;
  background-size: cover;
}
.last-race {
  background-image: linear-gradient(
      to bottom right,
      rgba(1, 1, 1, 0.35),
      rgba(1, 1, 1, 0.55)
    ),
    url(https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789);
  background-position: center;
  background-size: cover;
}
</style>
