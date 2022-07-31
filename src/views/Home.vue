<template>
  <div class="w-full flex-1 bg-secondary home overflow-hidden">
    <div class="">
      <div class="h-84vh w-full flex flex-col px-6 py-2 md:p-6">
        <home-title class="mb-3" />
        <div class="w-full h-full flex flex-col text-white">
          <div
            v-if="lastRaceResults.Circuit"
            class="h-1/2 w-full last-race"
            :style="{
              'background-image':
                lastRaceResults.Circuit.circuitId === 'bahrain'
                  ? this.bahrain
                  : lastRaceResults.Circuit.circuitId === 'imola'
                  ? this.imola
                  : lastRaceResults.Circuit.circuitId === 'portimao'
                  ? this.portimao
                  : lastRaceResults.Circuit.circuitId === 'catalunya'
                  ? this.catalunya
                  : lastRaceResults.Circuit.circuitId === 'monaco'
                  ? this.monaco
                  : lastRaceResults.Circuit.circuitId === 'BAK'
                  ? this.BAK
                  : lastRaceResults.Circuit.circuitId === 'ricard'
                  ? this.ricard
                  : lastRaceResults.Circuit.circuitId === 'red_bull_ring'
                  ? this.red_bull_ring
                  : lastRaceResults.Circuit.circuitId === 'silverstone'
                  ? this.silverstone
                  : lastRaceResults.Circuit.circuitId === 'hungaroring'
                  ? this.hungaroring
                  : lastRaceResults.Circuit.circuitId === 'spa'
                  ? this.spa
                  : lastRaceResults.Circuit.circuitId === 'zandvoort'
                  ? this.zandvoort
                  : lastRaceResults.Circuit.circuitId === 'monza'
                  ? this.monza
                  : lastRaceResults.Circuit.circuitId === 'sochi'
                  ? this.sochi
                  : lastRaceResults.Circuit.circuitId === 'istanbul'
                  ? this.istanbul
                  : lastRaceResults.Circuit.circuitId === 'americas'
                  ? this.americas
                  : lastRaceResults.Circuit.circuitId === 'rodriguez'
                  ? this.rodriguez
                  : lastRaceResults.Circuit.circuitId === 'interlagos'
                  ? this.interlagos
                  : lastRaceResults.Circuit.circuitId === 'losail'
                  ? this.losail
                  : lastRaceResults.Circuit.circuitId === 'jeddah'
                  ? this.jeddah
                  : lastRaceResults.Circuit.circuitId === 'yas_marina'
                  ? this.yas_marina
                  : lastRaceResults.Circuit.circuitId === 'albert_park'
                  ? this.albert_park
                  : lastRaceResults.Circuit.circuitId === 'miami'
                  ? this.miami
                  : lastRaceResults.Circuit.circuitId === 'villeneuve'
                  ? this.villeneuve
                  : lastRaceResults.Circuit.circuitId === 'marina_bay'
                  ? this.marina
                  : lastRaceResults.Circuit.circuitId === 'suzuka'
                  ? this.suzuka
                  : '',
            }"
          >
            <div class="w-full p-2 lg:py-3 home">
              <h2 class="font-headline">Last Race</h2>
              <p
                v-if="lastRaceResults.Circuit"
                class="font-headline text-xs text-white"
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
          <div
            class="h-1/2 w-full upcoming-race"
            v-if="upcomingRace.Circuit"
            :style="{
              'background-image':
                upcomingRace.Circuit.circuitId === 'bahrain'
                  ? this.bahrain
                  : upcomingRace.Circuit.circuitId === 'imola'
                  ? this.imola
                  : upcomingRace.Circuit.circuitId === 'portimao'
                  ? this.portimao
                  : upcomingRace.Circuit.circuitId === 'catalunya'
                  ? this.catalunya
                  : upcomingRace.Circuit.circuitId === 'monaco'
                  ? this.monaco
                  : upcomingRace.Circuit.circuitId === 'BAK'
                  ? this.BAK
                  : upcomingRace.Circuit.circuitId === 'ricard'
                  ? this.ricard
                  : upcomingRace.Circuit.circuitId === 'red_bull_ring'
                  ? this.red_bull_ring
                  : upcomingRace.Circuit.circuitId === 'silverstone'
                  ? this.silverstone
                  : upcomingRace.Circuit.circuitId === 'hungaroring'
                  ? this.hungaroring
                  : upcomingRace.Circuit.circuitId === 'spa'
                  ? this.spa
                  : upcomingRace.Circuit.circuitId === 'zandvoort'
                  ? this.zandvoort
                  : upcomingRace.Circuit.circuitId === 'monza'
                  ? this.monza
                  : upcomingRace.Circuit.circuitId === 'sochi'
                  ? this.sochi
                  : upcomingRace.Circuit.circuitId === 'istanbul'
                  ? this.istanbul
                  : upcomingRace.Circuit.circuitId === 'americas'
                  ? this.americas
                  : upcomingRace.Circuit.circuitId === 'rodriguez'
                  ? this.rodriguez
                  : upcomingRace.Circuit.circuitId === 'interlagos'
                  ? this.interlagos
                  : upcomingRace.Circuit.circuitId === 'losail'
                  ? this.losail
                  : upcomingRace.Circuit.circuitId === 'jeddah'
                  ? this.jeddah
                  : upcomingRace.Circuit.circuitId === 'yas_marina'
                  ? this.yas_marina
                  : upcomingRace.Circuit.circuitId === 'albert_park'
                  ? this.albert_park
                  : upcomingRace.Circuit.circuitId === 'miami'
                  ? this.miami
                  : upcomingRace.Circuit.circuitId === 'villeneuve'
                  ? this.villeneuve
                  : upcomingRace.Circuit.circuitId === 'marina_bay'
                  ? this.marina
                  : upcomingRace.Circuit.circuitId === 'suzuka'
                  ? this.suzuka
                  : '',
            }"
          >
            <div class="w-full p-2 home lg:py-3">
              <h2 class="font-headline">Upcoming Race</h2>
              <p
                v-if="upcomingRace.Circuit"
                class="font-headline text-xs text-white"
              >
                {{ upcomingRace.Circuit.Location.locality }}
              </p>
            </div>
            <div
              class="h-full w-full flex items-center justify-center flex-col pb-20 uppercase"
            >
              <div
                class="relative flex justify-center items-center h-full w-full flex-col p-4"
              >
                <!-- PRACTICE 1 -->
                <div
                  class="p-2 flex w-full justify-between"
                  v-if="upcomingRace"
                >
                  <div class="flex items-center">
                    <p class="text-sm font-boldHeadline">P1</p>
                  </div>
                  <div class="flex items-center text-xxs font-boldHeadline">
                    <p>
                      {{
                        new Date(upcomingRace.FirstPractice.date).toDateString()
                      }}
                    </p>
                    <p class="mx-1">
                      {{
                        localeTimeString(
                          upcomingRace.FirstPractice.date,
                          upcomingRace.FirstPractice.time
                        )
                      }}
                    </p>
                  </div>
                </div>

                <!-- PRACTICE 2 -->
                <div
                  class="p-2 flex w-full justify-between"
                  v-if="upcomingRace"
                >
                  <div class="flex items-center">
                    <p class="text-sm font-boldHeadline">P2</p>
                  </div>
                  <div class="flex items-center text-xxs font-boldHeadline">
                    <p>
                      {{
                        new Date(
                          upcomingRace.SecondPractice.date
                        ).toDateString()
                      }}
                    </p>
                    <p class="mx-1">
                      {{
                        localeTimeString(
                          upcomingRace.SecondPractice.date,
                          upcomingRace.SecondPractice.time
                        )
                      }}
                    </p>
                  </div>
                </div>

                <!-- PRACTICE 3 -->
                <div
                  class="p-2 flex w-full justify-between"
                  v-if="upcomingRace"
                >
                  <div class="flex items-center">
                    <p class="text-sm font-boldHeadline">P3</p>
                  </div>
                  <div class="flex items-center text-xxs font-boldHeadline">
                    <p>
                      {{
                        new Date(upcomingRace.ThirdPractice.date).toDateString()
                      }}
                    </p>
                    <p class="mx-1">
                      {{
                        localeTimeString(
                          upcomingRace.ThirdPractice.date,
                          upcomingRace.ThirdPractice.time
                        )
                      }}
                    </p>
                  </div>
                </div>

                <!-- QUALIFYING -->
                <div
                  class="p-2 flex w-full justify-between"
                  v-if="upcomingRace"
                >
                  <div class="flex items-center">
                    <p class="text-sm font-boldHeadline">Q</p>
                  </div>
                  <div class="flex items-center text-xxs font-boldHeadline">
                    <p>
                      {{
                        new Date(upcomingRace.Qualifying.date).toDateString()
                      }}
                    </p>
                    <p class="mx-1">
                      {{
                        localeTimeString(
                          upcomingRace.Qualifying.date,
                          upcomingRace.Qualifying.time
                        )
                      }}
                    </p>
                  </div>
                </div>

                <!-- RACE -->
                <div
                  class="p-2 flex w-full justify-between"
                  v-if="upcomingRace"
                >
                  <div class="flex items-center">
                    <p class="text-sm font-boldHeadline">Race</p>
                  </div>
                  <div class="flex items-center text-xxs font-boldHeadline">
                    <p>
                      {{ new Date(upcomingRace.date).toDateString() }}
                    </p>
                    <p class="mx-1">
                      {{
                        localeTimeString(upcomingRace.date, upcomingRace.time)
                      }}
                    </p>
                  </div>
                </div>
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
import albert from '../assets/Circuits/albert.jpeg';
import americas from '../assets/Circuits/americas.jpeg';
import bahrain from '../assets/Circuits/bahrain.jpeg';
import baku from '../assets/Circuits/baku.jpeg';
import catalunya from '../assets/Circuits/catalunya.jpeg';
import circuit_gilles from '../assets/Circuits/circuit_gilles.jpeg';
import hungaroring from '../assets/Circuits/hungaroring.jpeg';
import imola from '../assets/Circuits/imola.jpeg';
import interlagos from '../assets/Circuits/interlagos.jpeg';
import istanbul from '../assets/Circuits/istanbul.jpeg';
import jeddah from '../assets/Circuits/jeddah.jpeg';
import losail from '../assets/Circuits/losail.jpeg';
import marina from '../assets/Circuits/marina.jpeg';
import miami from '../assets/Circuits/miami.jpeg';
import monaco from '../assets/Circuits/monaco.jpeg';
import monza from '../assets/Circuits/monza.jpeg';
import portimao from '../assets/Circuits/portimao.jpeg';
import red_bull_ring from '../assets/Circuits/red_bull_ring.jpeg';
import ricard from '../assets/Circuits/ricard.jpeg';
import rodriguez from '../assets/Circuits/rodriguez.jpeg';
import silverstone from '../assets/Circuits/silverstone.jpeg';
import sochi from '../assets/Circuits/sochi.jpeg';
import spa from '../assets/Circuits/spa.jpeg';
import suzuka from '../assets/Circuits/suzuka.jpeg';
import yas_marina from '../assets/Circuits/yas_marina.jpeg';
import zandvoort from '../assets/Circuits/zandvoort.jpeg';
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
      bahrain: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)), url(${bahrain})`,
      imola: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${imola})`,
      portimao: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${portimao})`,
      catalunya: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${catalunya})`,
      monaco: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${monaco})`,
      BAK: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${baku})`,
      ricard: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${ricard})`,
      red_bull_ring: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${red_bull_ring})`,
      silverstone: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${silverstone})`,
      hungaroring: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${hungaroring})`,
      spa: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${spa})`,
      zandvoort: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${zandvoort})`,
      monza: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${monza})`,
      sochi: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${sochi})`,
      istanbul: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${istanbul})`,
      americas: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${americas})`,
      rodriguez: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${rodriguez})`,
      interlagos: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${interlagos})`,
      losail: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${losail})`,
      jeddah: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${jeddah})`,
      yas_marina: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${yas_marina})`,
      albert_park: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${albert})`,
      miami: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${miami})`,
      villeneuve: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${circuit_gilles})`,
      suzuka: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${suzuka})`,
      marina: `linear-gradient(to bottom right, rgba(1,1,1,0.35), rgba(1,1,1,0.65)),url(${marina})`,
    };
  },
  components: {
    HelloWorld,
    HomeTitle,
  },
  computed: {
    localeTimeString() {
      return (date, time) => {
        let passedInDate = date;
        let passedInTime = time;
        let joinedDate = passedInDate.concat('T', passedInTime);
        let localTime = new Date(joinedDate).toLocaleTimeString().slice(0, -3);

        return localTime;
      };
    },
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
          console.log(this.upcomingRace, 'upcoming');

          const todaysDate = Math.floor(new Date().getTime() / 1000.0);
          const raceDate = Math.floor(
            new Date(response.data.MRData.RaceTable.Races[0].date).getTime() /
              1000
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
