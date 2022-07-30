<template>
  <div
    class="carousel-item flex flex-col h-32 m-4 w-full rounded-br-xl text-white font-headline bg-cover"
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
          : race.Circuit.circuitId === 'baku'
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
    <router-link
      class="w-full h-full"
      :to="{
        name: 'SingleRace',
        params: { ...race.Circuit, ...race, ...race.FirstPractice },
        query: { race: race.Circuit.circuitId },
      }"
    >
      <div class="w-full flex h-6 p-4">
        <h2 class="text-base">{{ race.raceName }}</h2>
      </div>
      <div class="w-full flex px-4 p-2">
        <!-- <p>{{ race.date.split('-').reverse().join('-') }}</p> -->
        <p class="font-boldHeadline text-sm">
          {{ new Date(race.date).toDateString() }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
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
      bahrain: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)), url(${bahrain})`,
      imola: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${imola})`,
      portimao: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${portimao})`,
      catalunya: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${catalunya})`,
      monaco: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${monaco})`,
      BAK: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${baku})`,
      ricard: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${ricard})`,
      red_bull_ring: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${red_bull_ring})`,
      silverstone: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${silverstone})`,
      hungaroring: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${hungaroring})`,
      spa: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${spa})`,
      zandvoort: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${zandvoort})`,
      monza: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${monza})`,
      sochi: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${sochi})`,
      istanbul: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${istanbul})`,
      americas: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${americas})`,
      rodriguez: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${rodriguez})`,
      interlagos: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${interlagos})`,
      losail: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${losail})`,
      jeddah: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${jeddah})`,
      yas_marina: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${yas_marina})`,
      albert_park: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${albert})`,
      miami: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${miami})`,
      villeneuve: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${circuit_gilles})`,
      suzuka: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${suzuka})`,
      marina: `linear-gradient(to bottom right, rgba(1,1,1,0.85), rgba(1,1,1,0.15)),url(${marina})`,
    };
  },
  props: ['race', 'first', 'second', 'third', 'secondPlace'],
};
</script>

<style></style>
