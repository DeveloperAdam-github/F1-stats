<template>
  <div>
    <div class="">
      <!-- src="https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png" -->
      <img
        class="w-48"
        :src="
          driverInfo.code === 'VER'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'HAM'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'BOT'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'PER'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'SAI'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'NOR'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'LEC'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'RIC'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'GAS'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'ALO'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'OCO'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'VET'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'STR'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'TSU'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'RUS'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'RAI'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'LAT'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'GIO'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/A/ANTGIO01_Antonio_Giovinazzi/antgio01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'MSC'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png.transform/2col-retina/image.png'
            : driverInfo.code === 'MAZ'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/N/NIKMAZ01_Nikita_Mazepin/nikmaz01.png.transform/2col-retina/image.png'
            : driverInfo.code === 'KUB'
            ? 'https://www.formula1.com/content/dam/fom-website/drivers/R/ROBKUB01_Robert_Kubica/robkub01.png.transform/2col-retina/image.png'
            : ''
        "
        alt=""
      />
    </div>
    <div
      class="bg-fourth h-64 w-72 rounded-lg flex flex-col p-4 shadow-3xl shadow-white"
    >
      <div class="flex items-center p-2">
        <img
          class="w-7 rounded-sm mr-5"
          :src="
            driverInfo.code === 'VER'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Netherlands.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'HAM'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'BOT'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Finland.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'PER'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Mexico.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'SAI'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Spain.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'NOR'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'LEC'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Monaco.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'RIC'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Australia.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'GAS'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/France.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'ALO'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Spain.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'OCO'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/France.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'VET'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Germany.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'STR'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Canada.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'TSU'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Japan.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'RUS'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/United%20Kingdom.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'RAI'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Finland.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'LAT'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Canada.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'GIO'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Italy.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'MSC'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Germany.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'MAZ'
              ? 'https://www.formula1.com/content/dam/fom-website/flags/Poland.jpg.transform/2col-retina/image.jpg'
              : driverInfo.code === 'KUB'
              ? ''
              : ''
          "
          alt=""
        />
        <h2 class="text-white font-bold">
          {{ driverInfo.givenName }} <span></span>{{ driverInfo.familyName }}
        </h2>
      </div>
      <max-stats v-if="driverInfo.code === 'VER'" />
      <lewis-stats v-if="driverInfo.code === 'HAM'" />
      <bottas-stats v-if="driverInfo.code === 'BOT'" />
      <perez-stats v-if="driverInfo.code === 'PER'" />
      <sainz-stats v-if="driverInfo.code === 'SAI'" />
      <lando-stats v-if="driverInfo.code === 'NOR'" />
      <leclerc-stats v-if="driverInfo.code === 'LEC'" />
      <ricciardo-stats v-if="driverInfo.code === 'RIC'" />
      <gasly-stats v-if="driverInfo.code === 'GAS'" />
      <alonso-stats v-if="driverInfo.code === 'ALO'" />
      <ocon-stats v-if="driverInfo.code === 'OCO'" />
      <vettel-stats v-if="driverInfo.code === 'VET'" />
      <stroll-stats v-if="driverInfo.code === 'STR'" />
      <yuki-stats v-if="driverInfo.code === 'TSU'" />
      <russell-stats v-if="driverInfo.code === 'RUS'" />
      <kimi-stats v-if="driverInfo.code === 'RAI'" />
      <latifi-stats v-if="driverInfo.code === 'LAT'" />
      <giovinazzi-stats v-if="driverInfo.code === 'GIO'" />
      <mick-stats v-if="driverInfo.code === 'MSC'" />
      <kubica-stats v-if="driverInfo.code === 'KUB'" />
      <mazepin-stats v-if="driverInfo.code === 'MAZ'" />

      <div
        v-else-if="driverInfo === null"
        class="flex flex-col mt-40 p-1 text-gray-400 text-sm"
      >
        <div class="flex w-full justify-between m-1">
          <p>Championship Standing</p>
          <p class="text-white font-bold">14</p>
        </div>
        <div class="flex w-full justify-between m-1">
          <p>Team</p>
          <p class="text-white font-bold">AlphaTauri</p>
        </div>
        <div class="flex w-full justify-between m-1">
          <p>Podiums</p>
          <p class="text-white font-bold">N/A</p>
        </div>
        <div class="flex w-full justify-between m-1">
          <p>Age</p>
          <p class="text-white font-bold"></p>
        </div>
        <div class="flex w-full justify-between m-1">
          <p>Place of Birth</p>
          <p class="text-white font-bold">Sagamihara, Japan</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaxStats from './Drivers-Stat-Card/MaxStats.vue';
import LewisStats from './Drivers-Stat-Card/LewisStats.vue';
import BottasStats from './Drivers-Stat-Card/BottasStats.vue';
import PerezStats from './Drivers-Stat-Card/PerezStats.vue';
import SainzStats from './Drivers-Stat-Card/SainzStats.vue';
import GaslyStats from './Drivers-Stat-Card/GaslyStats.vue';
import OconStats from './Drivers-Stat-Card/OconStats.vue';
import LandoStats from './Drivers-Stat-Card/LandoStats.vue';
import RicciardoStats from './Drivers-Stat-Card/RicciardoStats.vue';
import AlonsoStats from './Drivers-Stat-Card/AlonsoStats.vue';
import LeclercStats from './Drivers-Stat-Card/LeclercStats.vue';
import VettelStats from './Drivers-Stat-Card/VettelStats.vue';
import StrollStats from './Drivers-Stat-Card/StrollStats.vue';
import YukiStats from './Drivers-Stat-Card/YukiStats.vue';
import RussellStats from './Drivers-Stat-Card/RussellStats.vue';
import KimiStats from './Drivers-Stat-Card/KimiStats.vue';
import LatifiStats from './Drivers-Stat-Card/LatifiStats.vue';
import GiovinazziStats from './Drivers-Stat-Card/GiovinazziStats.vue';
import MickStats from './Drivers-Stat-Card/MickStats.vue';
import KubicaStats from './Drivers-Stat-Card/KubicaStats.vue';
import MazepinStats from './Drivers-Stat-Card/MazepinStats.vue';

export default {
  components: {
    MaxStats,
    LewisStats,
    BottasStats,
    PerezStats,
    SainzStats,
    GaslyStats,
    OconStats,
    LandoStats,
    RicciardoStats,
    AlonsoStats,
    LeclercStats,
    VettelStats,
    YukiStats,
    RussellStats,
    KimiStats,
    LatifiStats,
    GiovinazziStats,
    MickStats,
    MazepinStats,
    KubicaStats,
    StrollStats,
  },
  props: ['driverInfo'],
  data() {
    return {
      // driverInfo: '',
    };
  },
  methods: {},
  created() {},
};
</script>

<style></style>
