<template>
  <div class="h-20 flex p-3 lg:mt-4 mb-5">
    <div class="h-full border-l-2 border-red-500"></div>
    <div class="h-full flex flex-col justify-start pl-3">
      <div class="text-left text-lg font-bold text-white">
        <h1 class="font-boldHeadline tracking-wide text-base">Drivers</h1>
      </div>
      <div
        class="text-xs lg:text-lg text-gray-400 flex-wrap lg:flex-nowrap w-4/5 text-left font-headline lg:w-full"
      >
        <p v-if="driverInfo.code === 'VER'">
          He’s Max by name, and max by nature. The Lion 🦁
        </p>
        <p v-if="driverInfo.code === 'HAM'">
          Lewis Hamilton 7 time World Champion
        </p>
        <p v-if="driverInfo.code === 'BOT'">
          Learning his craft on Finnish roads of ice and snow, he was born to be
          a Grand Prix racer.
        </p>
        <p v-if="driverInfo.code === 'PER'">
          He’s the fighter with a gentle touch from the land of the Lucha Libre.
        </p>
        <p v-if="driverInfo.code === 'SAI'">
          He’s the matador from Madrid racing royalty. The Smooth Operator.
        </p>
        <p v-if="driverInfo.code === 'NOR'">
          Lando Norris may not be named after Star Wars rebel Lando Calrissian
          but he has flair and fighting spirit in bountiful supply.
        </p>
        <p v-if="driverInfo.code === 'LEC'">
          Born in the Mediterranean idyll of Monaco, Leclerc arrived in F1 on a
          tidal wave of expectation.
        </p>
        <p v-if="driverInfo.code === 'RIC'">
          The self-styled “Honey Badger” is fuzzy on the outside and feisty on
          the inside. 🦡
        </p>
        <p v-if="driverInfo.code === 'GAS'">
          If there’s one man who knows how big a rollercoaster ride an F1
          driver’s career can be, it’s Pierre Gasly!
        </p>
        <p v-if="driverInfo.code === 'ALO'">
          Fiercely competitive, Alonso is not shy about his talent, rating
          himself as 9/10 “in everything”.
        </p>
        <p v-if="driverInfo.code === 'OCO'">
          If there’s one word that dominates Esteban Ocon’s career, it’s
          ‘sacrifice’.
        </p>
        <p v-if="driverInfo.code === 'VET'">
          Born and raised a Bull, then a Prancing Horse, and now the face of
          Aston Martin’s Formula 1 revival, F1's poster boy of early
          achievement.
        </p>
        <p v-if="driverInfo.code === 'STR'">
          There is no such thing as too much too soon for Stroll, a teenage
          sensation with a wet weather predilection.
        </p>
        <p v-if="driverInfo.code === 'TSU'">
          In the entire history of Formula 1, no Japanese driver has ever won a
          World Championship Grand Prix. Could Yuki Tsunoda be the first?
        </p>
        <p v-if="driverInfo.code === 'RUS'">
          He’s the driver with the motto: “If in doubt, go flat out”.
        </p>
        <p v-if="driverInfo.code === 'RAI'">
          He’s the world-famous racing driver who just wants to be left alone.
        </p>
        <p v-if="driverInfo.code === 'LAT'">
          Thirteen is an advanced age to begin your karting career these days.
          But that’s how old Toronto native Nicholas Latifi was when he took his
          first steps in motorsport.
        </p>
        <p v-if="driverInfo.code === 'GIO'">
          He’s the Italian steed with speed from the stable of the Prancing
          Horse.
        </p>
        <p v-if="driverInfo.code === 'MSC'">
          Plenty of sons of former F1 drivers have joined the sport over the
          years – two have even emulated their fathers to become world champions
          – but carrying the Schumacher name is surely an extra level of
          pressure for Mick.
        </p>
        <p v-if="driverInfo.code === 'MAZ'">
          Nikita Mazepin might be bringing a healthy chunk of budget with him to
          the Haas team, but don’t be fooled into thinking he hasn’t also got
          the driving chops to go with it.
        </p>
        <p v-if="driverInfo.code === 'KUB'">
          Robert Kubica got his first car at the age of four: “it had a
          four-stroke engine, no horsepower but still could do about 40kph”.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['driverInfo'],
};
</script>

<style></style>
