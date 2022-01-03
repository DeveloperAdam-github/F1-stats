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
                {{ lastRaceResults.Circuit.Location.locality }}
              </p>
            </div>
            <div
              class="h-full w-full flex flex-col items-center justify-center pb-10"
            >
              <div
                v-if="lastRaceResults.Results"
                class="w-1/2 lg:w-1/3 text-sm lg:text-lg lg:p-2 font-boldHeadline m-2 px-2 p-1 flex justify-between bg-red_bull"
              >
                <p class="h-auto">
                  {{ lastRaceResults.Results[0].Driver.familyName }}
                </p>
                <p>1st</p>
              </div>
              <div
                v-if="lastRaceResults.Results"
                class="w-1/2 lg:w-1/3 text-sm lg:text-lg lg:p-2 font-boldHeadline m-2 px-2 p-1 flex justify-between bg-mercedes"
              >
                <p class="h-auto">
                  {{ lastRaceResults.Results[1].Driver.familyName }}
                </p>
                <p>2nd</p>
              </div>
              <div
                v-if="lastRaceResults.Results"
                class="w-1/2 lg:w-1/3 text-sm lg:text-lg lg:p-2 font-boldHeadline m-2 px-2 p-1 flex justify-between bg-ferrari"
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
            <div class="h-full w-full flex items-center justify-center pb-20">
              <div
                class="relative flex justify-center items-center h-20 p-5 w-auto"
              >
                <h2
                  v-if="upcomingRace.Circuit"
                  class="font-boldHeadline text-sm lg:text-xl text-white absolute top-8 left-5 lg:top-6 lg:left-5"
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
                      ? '26 - 28 Mar'
                      : upcomingRace.Circuit.circuitId === 'imola'
                      ? '16 - 18 Apr'
                      : upcomingRace.Circuit.circuitId === 'portimao'
                      ? '30 - 02 Apr - May'
                      : upcomingRace.Circuit.circuitId === 'catalunya'
                      ? '07 - 09 May'
                      : upcomingRace.Circuit.circuitId === 'monaco'
                      ? '20 - 23 May'
                      : upcomingRace.Circuit.circuitId === 'BAK'
                      ? '04 - 06 Jun'
                      : upcomingRace.Circuit.circuitId === 'ricard'
                      ? '18 - 20 Jun'
                      : upcomingRace.raceName === 'Styrian Grand Prix'
                      ? '25 - 27 Jun'
                      : upcomingRace.raceName === 'Austrian Grand Prix'
                      ? '02 - 04 Jul'
                      : upcomingRace.Circuit.circuitId === 'silverstone'
                      ? '16 - 18 Jul'
                      : upcomingRace.Circuit.circuitId === 'hungaroring'
                      ? '30 - 01 Jul - Aug'
                      : upcomingRace.Circuit.circuitId === 'spa'
                      ? '27 - 29 Aug'
                      : upcomingRace.Circuit.circuitId === 'zandvoort'
                      ? '03 - 05 Sep'
                      : upcomingRace.Circuit.circuitId === 'monza'
                      ? '10 - 12 Sep'
                      : upcomingRace.Circuit.circuitId === 'sochi'
                      ? '24 - 26 Sep'
                      : upcomingRace.Circuit.circuitId === 'istanbul'
                      ? '08 - 10 Oct'
                      : upcomingRace.Circuit.circuitId === 'americas'
                      ? '22 - 24 Oct'
                      : upcomingRace.Circuit.circuitId === 'rodriguez'
                      ? '05 - 07 Nov'
                      : upcomingRace.Circuit.circuitId === 'interlagos'
                      ? '12 - 14 Nov'
                      : upcomingRace.Circuit.circuitId === 'losail'
                      ? '19 - 21 Nov'
                      : upcomingRace.Circuit.circuitId === 'jeddah'
                      ? '03 - 05 Dec'
                      : upcomingRace.Circuit.circuitId === 'yas_marina'
                      ? '10 - 12 Dec'
                      : ''
                  }}
                </h2>
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
          this.upcomingRace = response.data.MRData.RaceTable.Races[0];
          console.log(this.upcomingRace, 'upcoming');
        });
    },
  },
  mounted() {
    this.getLastRaceResults();
    this.getUpcomingRace();
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
