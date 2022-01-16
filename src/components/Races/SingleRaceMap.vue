<template>
  <div class="flex flex-col mt-10 px-2">
    <div class="flex flex-col text-left">
      <h1 class="text-lg font-boldHeadline">Circuit</h1>
      <div
        class="h-40 w-full rounded-lg bg-cover"
        :style="{
          'background-image':
            circuit.circuitId === 'bahrain'
              ? this.bahrain
              : circuit.circuitId === 'imola'
              ? this.imola
              : circuit.circuitId === 'portimao'
              ? this.portimao
              : circuit.circuitId === 'catalunya'
              ? this.catalunya
              : circuit.circuitId === 'monaco'
              ? this.monaco
              : circuit.circuitId === 'BAK'
              ? this.BAK
              : circuit.circuitId === 'ricard'
              ? this.ricard
              : circuit.circuitId === 'red_bull_ring'
              ? this.red_bull_ring
              : circuit.circuitId === 'silverstone'
              ? this.silverstone
              : circuit.circuitId === 'hungaroring'
              ? this.hungaroring
              : circuit.circuitId === 'spa'
              ? this.spa
              : circuit.circuitId === 'zandvoort'
              ? this.zandvoort
              : circuit.circuitId === 'monza'
              ? this.monza
              : circuit.circuitId === 'sochi'
              ? this.sochi
              : circuit.circuitId === 'istanbul'
              ? this.istanbul
              : circuit.circuitId === 'americas'
              ? this.americas
              : circuit.circuitId === 'rodriguez'
              ? this.rodriguez
              : circuit.circuitId === 'interlagos'
              ? this.interlagos
              : circuit.circuitId === 'losail'
              ? this.losail
              : circuit.circuitId === 'jeddah'
              ? this.jeddah
              : circuit.circuitId === 'yas_marina'
              ? this.yas_marina
              : circuit.circuitId === 'albert_park'
              ? this.albert_park
              : circuit.circuitId === 'miami'
              ? this.miami
              : circuit.circuitId === 'villeneuve'
              ? this.villeneuve
              : circuit.circuitId === 'marina_bay'
              ? this.marina
              : circuit.circuitId === 'suzuka'
              ? this.suzuka
              : '',
        }"
      ></div>
      <h2 class="font-boldHeadline text-lg">{{ circuit.circuitName }}</h2>
    </div>
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
  props: ['circuit'],
};
</script>

<style></style>
