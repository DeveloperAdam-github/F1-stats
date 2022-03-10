<template>
  <div
    v-if="sessionData"
    class="w-full h-24 md:h-32 lg:h-40 bg-cover flex items-center justify-center relative"
    :style="{
      'background-image':
        sessionData.results.race.name === 'Styrian Grand Prix'
          ? this.red_bull_ring
          : sessionData.results.race.name === 'Bahrain Grand Prix'
          ? this.bahrain
          : sessionData.results.race.name === 'portimao'
          ? this.portimao
          : sessionData.results.race.name === 'catalunya'
          ? this.catalunya
          : sessionData.results.race.name === 'monaco'
          ? this.monaco
          : sessionData.results.race.name === 'BAK'
          ? this.BAK
          : sessionData.results.race.name === 'ricard'
          ? this.ricard
          : sessionData.results.race.name === 'red_bull_ring'
          ? this.red_bull_ring
          : sessionData.results.race.name === 'silverstone'
          ? this.silverstone
          : sessionData.results.race.name === 'hungaroring'
          ? this.hungaroring
          : sessionData.results.race.name === 'spa'
          ? this.spa
          : sessionData.results.race.name === 'zandvoort'
          ? this.zandvoort
          : sessionData.results.race.name === 'monza'
          ? this.monza
          : sessionData.results.race.name === 'sochi'
          ? this.sochi
          : sessionData.results.race.name === 'istanbul'
          ? this.istanbul
          : sessionData.results.race.name === 'americas'
          ? this.americas
          : sessionData.results.race.name === 'rodriguez'
          ? this.rodriguez
          : sessionData.results.race.name === 'interlagos'
          ? this.interlagos
          : sessionData.results.race.name === 'losail'
          ? this.losail
          : sessionData.results.race.name === 'jeddah'
          ? this.jeddah
          : sessionData.results.race.name === 'yas_marina'
          ? this.yas_marina
          : sessionData.results.race.name === 'albert_park'
          ? this.albert_park
          : sessionData.results.race.name === 'miami'
          ? this.miami
          : sessionData.results.race.name === 'villeneuve'
          ? this.villeneuve
          : sessionData.results.race.name === 'marina_bay'
          ? this.marina
          : sessionData.results.race.name === 'suzuka'
          ? this.suzuka
          : '',
    }"
  >
    <h2 class="text-lg font-boldHeadline">
      {{ sessionData.results.session.general.session_name }}
    </h2>
    <div
      class="absolute w-full bottom-0 text-xxs font-boldHeadline flex items-center px-4 justify-around"
    >
      <p>Laps {{ sessionData.results.session.details.laps }}</p>
      <p>
        Air
        {{
          sessionData.results.weather[sessionData.results.weather.length - 1]
            .air_temp
        }}
      </p>
      <p>
        Track
        {{
          sessionData.results.weather[sessionData.results.weather.length - 1]
            .track_temp
        }}
      </p>
      <p>{{ new Date().toLocaleTimeString() }}</p>
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
  props: ['sessionData'],
};
</script>

<style></style>
