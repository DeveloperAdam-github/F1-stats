<template>
  <div class="carousel-item flex flex-col pt-10 m-2 mx-5 pl-2 lg:mx-8 w-auto">
    <div class="pl-4 w-64 flex justify-center relative">
      <img
        class="w-40 absolute -top-14 z-10"
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
      class="race-card w-72 h-96 rounded-lg flex flex-col p-4"
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
              ? '26-28 Mar'
              : race.Circuit.circuitId === 'imola'
              ? '16-18 Apr'
              : race.Circuit.circuitId === 'portimao'
              ? '30-02 Apr-May'
              : race.Circuit.circuitId === 'catalunya'
              ? '07-09 May'
              : race.Circuit.circuitId === 'monaco'
              ? '20-23 May'
              : race.Circuit.circuitId === 'BAK'
              ? '04-06 Jun'
              : race.Circuit.circuitId === 'ricard'
              ? '18-20 Jun'
              : race.raceName === 'Styrian Grand Prix'
              ? '25-27 Jun'
              : race.raceName === 'Austrian Grand Prix'
              ? '02-04 Jul'
              : race.Circuit.circuitId === 'silverstone'
              ? '16-18 Jul'
              : race.Circuit.circuitId === 'hungaroring'
              ? '30-01 Jul-Aug'
              : race.Circuit.circuitId === 'spa'
              ? '27-29 Aug'
              : race.Circuit.circuitId === 'zandvoort'
              ? '03-05 Sep'
              : race.Circuit.circuitId === 'monza'
              ? '10-12 Sep'
              : race.Circuit.circuitId === 'sochi'
              ? '24-26 Sep'
              : race.Circuit.circuitId === 'istanbul'
              ? '08-10 Oct'
              : race.Circuit.circuitId === 'americas'
              ? '22-24 Oct'
              : race.Circuit.circuitId === 'rodriguez'
              ? '05-07 Nov'
              : race.Circuit.circuitId === 'interlagos'
              ? '12-14 Nov'
              : race.Circuit.circuitId === 'losail'
              ? '19-21 Nov'
              : race.Circuit.circuitId === 'jeddah'
              ? '03-05 Dec'
              : race.Circuit.circuitId === 'yas_marina'
              ? '10-12 Dec'
              : ''
          }}
        </p>
      </div>
      <div
        class="flex flex-col text-white font-headline text-xs h-full justify-end pb-4"
      >
        <div class="flex justify-between">
          <p v-if="first">{{ first.Results[0].Driver.familyName }}</p>
          <!-- {{ first }} -->
          <p class="font-boldHeadline">1st</p>
        </div>
        <div class="flex justify-between">
          <p v-if="second">{{ second.Results[0].Driver.familyName }}</p>
          <p class="font-boldHeadline">2nd</p>
        </div>
        <div class="flex justify-between">
          <p v-if="third">{{ third.Results[0].Driver.familyName }}</p>
          <p class="font-boldHeadline">3rd</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

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
      },
      bahrain:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)), url(https://www.telegraph.co.uk/content/dam/travel/Spark/bahrain-grand-prix/start-of-bahrain-grand-prix-2017-xlarge.jpg)',
      imola:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Emilia%20Romagna.jpg.transform/12col-retina/image.jpg)',
      portimao:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Portugal.jpg.transform/12col-retina/image.jpg)',
      catalunya:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Spain.jpg.transform/fullbleed-retina/image.jpg)',
      monaco:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Monaco.jpg.transform/fullbleed-retina/image.jpg)',
      BAK: 'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Azerbaijan.jpg.transform/fullbleed-retina/image.jpg)',
      ricard:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/France.jpg.transform/fullbleed-retina/image.jpg)',
      red_bull_ring:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Styria.jpg.transform/fullbleed-retina/image.jpg)',
      silverstone:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Great%20Britain.jpg.transform/fullbleed-retina/image.jpg)',
      hungaroring:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Hungary.jpg.transform/fullbleed-retina/image.jpg)',
      spa: 'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Belgium.jpg.transform/fullbleed-retina/image.jpg)',
      zandvoort:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Netherlands.jpg.transform/fullbleed-retina/image.jpg)',
      monza:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Italy.jpg.transform/fullbleed-retina/image.jpg)',
      sochi:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Russia.jpg.transform/fullbleed-retina/image.jpg)',
      istanbul:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Turkey.jpg.transform/fullbleed-retina/image.jpg)',
      americas:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/USA.jpg.transform/fullbleed-retina/image.jpg)',
      rodriguez:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Mexico.jpg.transform/fullbleed-retina/image.jpg)',
      interlagos:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Brazil.jpg.transform/fullbleed-retina/image.jpg)',
      losail:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Qatar.jpg.transform/fullbleed-retina/image.jpg)',
      jeddah:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Saudi_Arabia.jpg.transform/fullbleed-retina/image.jpg)',
      yas_marina:
        'linear-gradient(to bottom right, rgba(1,1,1,0.25), rgba(1,1,1,0.45)),url(https://www.urbanrealm.com/blogs/media/blogs/pauls/yashotelabudhabi10.jpg?mtime=1530381789)',
    };
  },
  props: ['race', 'first', 'second', 'third', 'secondPlace'],
  created() {
    console.log(this.first, '1️⃣');
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
