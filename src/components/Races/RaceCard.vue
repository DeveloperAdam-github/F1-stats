<template>
  <div class="carousel-item flex flex-col pt-10 m-2 mx-5 pl-2 lg:mx-8 w-auto">
    <router-link
      :to="{
        name: 'SingleRace',
        params: { ...race.Circuit, ...race, ...race.FirstPractice },
        query: { race: race.Circuit.circuitId },
      }"
    >
      <div class="pl-4 w-64 flex justify-center relative">
        <img
          class="w-40 lg:w-48 absolute -top-14 lg:-top-20 lg:left-24 z-40"
          :src="
            race.Circuit.circuitId === 'bahrain'
              ? this.trackImage.bahrain
              : race.Circuit.circuitId === 'imola'
              ? this.trackImage.imola
              : race.Circuit.circuitId === 'portimao'
              ? this.trackImage.portimao
              : race.Circuit.circuitId === 'catalunya'
              ? this.trackImage.catalunya
              : race.Circuit.circuitId === 'monaco'
              ? this.trackImage.monaco
              : race.Circuit.circuitId === 'BAK'
              ? this.trackImage.BAK
              : race.Circuit.circuitId === 'ricard'
              ? this.trackImage.ricard
              : race.Circuit.circuitId === 'red_bull_ring'
              ? this.trackImage.red_bull_ring
              : race.Circuit.circuitId === 'silverstone'
              ? this.trackImage.silverstone
              : race.Circuit.circuitId === 'hungaroring'
              ? this.trackImage.hungaroring
              : race.Circuit.circuitId === 'spa'
              ? this.trackImage.spa
              : race.Circuit.circuitId === 'zandvoort'
              ? this.trackImage.zandvoort
              : race.Circuit.circuitId === 'monza'
              ? this.trackImage.monza
              : race.Circuit.circuitId === 'sochi'
              ? this.trackImage.sochi
              : race.Circuit.circuitId === 'istanbul'
              ? this.trackImage.istanbul
              : race.Circuit.circuitId === 'americas'
              ? this.trackImage.americas
              : race.Circuit.circuitId === 'rodriguez'
              ? this.trackImage.rodriguez
              : race.Circuit.circuitId === 'interlagos'
              ? this.trackImage.interlagos
              : race.Circuit.circuitId === 'losail'
              ? this.trackImage.losail
              : race.Circuit.circuitId === 'jeddah'
              ? this.trackImage.jeddah
              : race.Circuit.circuitId === 'yas_marina'
              ? this.trackImage.yas_marina
              : race.Circuit.circuitId === 'albert_park'
              ? this.trackImage.albert_park
              : race.Circuit.circuitId === 'miami'
              ? this.trackImage.miami
              : race.Circuit.circuitId === 'villeneuve'
              ? this.trackImage.villeneuve
              : race.Circuit.circuitId === 'marina_bay'
              ? this.trackImage.marina_bay
              : race.Circuit.circuitId === 'suzuka'
              ? this.trackImage.suzuka
              : ''
          "
          alt=""
        />
      </div>

      <!-- :style="{
        'background-image':
          race.Circuit.circuitId === 'bahrain'
            ? 'url(https://i.guim.co.uk/img/media/fc002a7021125efe95a2681c424a8e90ae5898d4/174_0_5164_3100/master/5164.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=d08c652e0f1a1954b1c41aead1b4e681)'
            : race.Circuit.circuitId === 'imola'
            ? 'url(https://i.pinimg.com/originals/76/72/1e/76721e1ea0f7d3be46eceec9492f0ca6.jpg)'
            : 'url(https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789)',
      }" -->

      <div
        class="race-card w-72 lg:w-96 h-96 lg:h-30rem rounded-lg flex flex-col p-4"
        :style="{
          'background-image':
            race.Circuit.circuitId === 'bahrain'
              ? this.bahrain
              : race.Circuit.circuitId === 'imola'
              ? this.imola
              : race.Circuit.circuitId === 'portimao'
              ? this.portimao
              : race.Circuit.circuitId === 'catalunya'
              ? this.catalunya
              : race.Circuit.circuitId === 'monaco'
              ? this.monaco
              : race.Circuit.circuitId === 'BAK'
              ? this.BAK
              : race.Circuit.circuitId === 'ricard'
              ? this.ricard
              : race.Circuit.circuitId === 'red_bull_ring'
              ? this.red_bull_ring
              : race.Circuit.circuitId === 'silverstone'
              ? this.silverstone
              : race.Circuit.circuitId === 'hungaroring'
              ? this.hungaroring
              : race.Circuit.circuitId === 'spa'
              ? this.spa
              : race.Circuit.circuitId === 'zandvoort'
              ? this.zandvoort
              : race.Circuit.circuitId === 'monza'
              ? this.monza
              : race.Circuit.circuitId === 'sochi'
              ? this.sochi
              : race.Circuit.circuitId === 'istanbul'
              ? this.istanbul
              : race.Circuit.circuitId === 'americas'
              ? this.americas
              : race.Circuit.circuitId === 'rodriguez'
              ? this.rodriguez
              : race.Circuit.circuitId === 'interlagos'
              ? this.interlagos
              : race.Circuit.circuitId === 'losail'
              ? this.losail
              : race.Circuit.circuitId === 'jeddah'
              ? this.jeddah
              : race.Circuit.circuitId === 'yas_marina'
              ? this.yas_marina
              : race.Circuit.circuitId === 'albert_park'
              ? this.albert_park
              : race.Circuit.circuitId === 'miami'
              ? this.miami
              : race.Circuit.circuitId === 'villeneuve'
              ? this.villeneuve
              : race.Circuit.circuitId === 'marina_bay'
              ? this.marina
              : race.Circuit.circuitId === 'suzuka'
              ? this.suzuka
              : '',
        }"
      >
        <div class="flex flex-col p-2 mt-10">
          <h2 class="font-boldHeadline text-white uppercase">
            {{ race.raceName }}
          </h2>
          <h2 class="font-boldHeadline text-sm text-white">
            {{ race.Circuit.circuitName }}
          </h2>
          <p class="text-gray-300 font-headline text-xs">
            {{
              race.Circuit.circuitId === 'bahrain'
                ? '18-20 Mar'
                : race.Circuit.circuitId === 'albert_park'
                ? '08-10 Apr'
                : race.Circuit.circuitId === 'imola'
                ? '22-24 Apr'
                : race.Circuit.circuitId === 'miami'
                ? '06-08 May'
                : race.Circuit.circuitId === 'portimao'
                ? '30-02 Apr-May'
                : race.Circuit.circuitId === 'catalunya'
                ? '20-22 May'
                : race.Circuit.circuitId === 'monaco'
                ? '27-29 May'
                : race.Circuit.circuitId === 'BAK'
                ? '10-12 Jun'
                : race.Circuit.circuitId === 'villeneuve'
                ? '17-19 Jun'
                : race.Circuit.circuitId === 'ricard'
                ? '22-24 Jul'
                : race.raceName === 'Austrian Grand Prix'
                ? '08-10 Jul'
                : race.Circuit.circuitId === 'silverstone'
                ? '01-03 Jul'
                : race.Circuit.circuitId === 'hungaroring'
                ? '29-31 Jul'
                : race.Circuit.circuitId === 'spa'
                ? '26-28 Aug'
                : race.Circuit.circuitId === 'zandvoort'
                ? '02-04 Sep'
                : race.Circuit.circuitId === 'monza'
                ? '09-11 Sep'
                : race.Circuit.circuitId === 'sochi'
                ? '23-25 Sep'
                : race.Circuit.circuitId === 'sochi'
                ? '23-25 Sep'
                : race.Circuit.circuitId === 'marina_bay'
                ? '30-02 Sep-Oct'
                : race.Circuit.circuitId === 'suzuka'
                ? '07-09 Oct'
                : race.Circuit.circuitId === 'americas'
                ? '21-23 Oct'
                : race.Circuit.circuitId === 'rodriguez'
                ? '28-30 Oct'
                : race.Circuit.circuitId === 'interlagos'
                ? '11-13 Nov'
                : race.Circuit.circuitId === 'jeddah'
                ? '25-27 Mar'
                : race.Circuit.circuitId === 'yas_marina'
                ? '18-20 Nov'
                : ''
            }}
          </p>
        </div>
        <div
          class="flex flex-col text-white font-headline text-xs h-full justify-end pb-4"
        >
          <!-- <div class="flex justify-between">
          <p v-if="first">{{ first.Results[0].Driver.familyName }}</p>

          <p class="font-boldHeadline">1st</p>
        </div>
        <div class="flex justify-between">
          <p v-if="second">{{ second.Results[0].Driver.familyName }}</p>
          <p class="font-boldHeadline">2nd</p>
        </div>
        <div class="flex justify-between">
          <p v-if="third">{{ third.Results[0].Driver.familyName }}</p>
          <p class="font-boldHeadline">3rd</p>
        </div> -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';
import albert from '../../assets/Circuits/albert.jpeg';
import americas from '../../assets/Circuits/americas.jpeg';
import bahrain from '../../assets/Circuits/bahrain.jpeg';
import baku from '../../assets/Circuits/baku.jpeg';
import catalunya from '../../assets/Circuits/catalunya.jpeg';
import circuit_gilles from '../../assets/Circuits/circuit_gilles.jpeg';
import hungaroring from '../../assets/Circuits/hungaroring.jpeg';
import imola from '../../assets/Circuits/imola.jpeg';
import interlagos from '../../assets/Circuits/interlagos.jpeg';
import istanbul from '../../assets/Circuits/istanbul.jpeg';
import jeddah from '../../assets/Circuits/jeddah.jpeg';
import losail from '../../assets/Circuits/losail.jpeg';
import marina from '../../assets/Circuits/marina.jpeg';
import miami from '../../assets/Circuits/miami.jpeg';
import monaco from '../../assets/Circuits/monaco.jpeg';
import monza from '../../assets/Circuits/monza.jpeg';
import portimao from '../../assets/Circuits/portimao.jpeg';
import red_bull_ring from '../../assets/Circuits/red_bull_ring.jpeg';
import ricard from '../../assets/Circuits/ricard.jpeg';
import rodriguez from '../../assets/Circuits/rodriguez.jpeg';
import silverstone from '../../assets/Circuits/silverstone.jpeg';
import sochi from '../../assets/Circuits/sochi.jpeg';
import spa from '../../assets/Circuits/spa.jpeg';
import suzuka from '../../assets/Circuits/suzuka.jpeg';
import yas_marina from '../../assets/Circuits/yas_marina.jpeg';
import zandvoort from '../../assets/Circuits/zandvoort.jpeg';

export default {
  data() {
    return {
      // firstPlace: [],
      raceResults: [],
      trackImage: {
        bahrain:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain.png.transform/2col-retina/image.png',
        imola:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna.png.transform/2col-retina/image.png',
        portimao:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Portugal.png.transform/2col-retina/image.png',
        catalunya:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain.png.transform/2col-retina/image.png',
        monaco:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monaco.png.transform/2col-retina/image.png',
        BAK: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan.png.transform/2col-retina/image.png',
        ricard:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/France.png.transform/2col-retina/image.png',
        red_bull_ring:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria.png.transform/2col-retina/image.png',
        silverstone:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain.png.transform/2col-retina/image.png',
        hungaroring:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungary.png.transform/2col-retina/image.png',
        spa: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium.png.transform/2col-retina/image.png',
        zandvoort:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands.png.transform/2col-retina/image.png',
        monza:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy.png.transform/2col-retina/image.png',
        sochi:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Russia.png.transform/2col-retina/image.png',
        istanbul:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Turkey.png.transform/2col-retina/image.png',
        americas:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/United%20States.png.transform/2col-retina/image.png',
        rodriguez:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico.png.transform/2col-retina/image.png',
        interlagos:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil.png.transform/2col-retina/image.png',
        losail:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Qatar.png.transform/2col-retina/image.png',
        jeddah:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia.png.transform/2col-retina/image.png',
        yas_marina:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhabi.png.transform/2col-retina/image.png',
        albert_park:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia.png.transform/2col-retina/image.png',
        miami:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami.png.transform/2col-retina/image.png',
        villeneuve:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada.png.transform/2col-retina/image.png',
        marina_bay:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapore.png.transform/2col-retina/image.png',
        suzuka:
          'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Japan.png.transform/2col-retina/image.png',
      },
      bahrain: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)), url(${bahrain})`,
      imola: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${imola})`,
      portimao: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${portimao})`,
      catalunya: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${catalunya})`,
      monaco: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${monaco})`,
      BAK: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${baku})`,
      ricard: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${ricard})`,
      red_bull_ring: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${red_bull_ring})`,
      silverstone: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${silverstone})`,
      hungaroring: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${hungaroring})`,
      spa: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${spa})`,
      zandvoort: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${zandvoort})`,
      monza: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${monza})`,
      sochi: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${sochi})`,
      istanbul: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${istanbul})`,
      americas: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${americas})`,
      rodriguez: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${rodriguez})`,
      interlagos: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${interlagos})`,
      losail: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${losail})`,
      jeddah: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${jeddah})`,
      yas_marina: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${yas_marina})`,
      albert_park: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${albert})`,
      miami: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${miami})`,
      villeneuve: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${circuit_gilles})`,
      suzuka: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${suzuka})`,
      marina: `linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(${marina})`,
    };
  },
  props: ['race', 'first', 'second', 'third', 'secondPlace'],
  created() {
    // console.log(this.$props.race, '<====== the race?');
  },
};
</script>

<style scoped>
.race-card {
  position: relative;
  display: flex;
  /* background-image: v-bind(race) linear-gradient(); */
  background-image: linear-gradient(
    rgba(1, 1, 1, 0.55),
    rgba(255, 255, 255, 0.3)
  );
  /* url(https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789 */
</style>
<!-- https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhabi.png.transform/2col-retina/image.png -->
