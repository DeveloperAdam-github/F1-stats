<template>
  <div
    class="w-full h-full pt-6 lg:pt-10 lg:px-5 flex flex-col items-center"
    :data-theme="team.constructorId"
  >
    <div class="w-full md:w-4/6 h-56 lg:h-96 flex relative">
      <div
        class="h-full w-1/2 bg-cover bg-center bg-maxBattle"
        :class="
          team.constructorId === 'red_bull'
            ? 'bg-maxBattle'
            : team.constructorId === 'mercedes'
            ? 'bg-hamiltonBattle'
            : team.constructorId === 'ferrari'
            ? 'bg-sainzBattle'
            : team.constructorId === 'mclaren'
            ? 'bg-norrisBattle'
            : team.constructorId === 'alpine'
            ? 'bg-oconBattle'
            : team.constructorId === 'alphatauri'
            ? 'bg-tsunodaBattle'
            : team.constructorId === 'aston_martin'
            ? 'bg-vettelBattle'
            : team.constructorId === 'williams'
            ? 'bg-russellBattle'
            : team.constructorId === 'alfa'
            ? 'bg-raikkonenBattle'
            : team.constructorId === 'haas'
            ? 'bg-mazepinBattle'
            : 'bg-maxBattle'
        "
      ></div>
      <div
        class="h-full w-1/2 bg-cover bg-center"
        :class="
          team.constructorId === 'red_bull'
            ? 'bg-perezBattle'
            : team.constructorId === 'mercedes'
            ? 'bg-bottasBattle'
            : team.constructorId === 'ferrari'
            ? 'bg-leclercBattle'
            : team.constructorId === 'mclaren'
            ? 'bg-ricciardoBattle'
            : team.constructorId === 'alpine'
            ? 'bg-alonsoBattle'
            : team.constructorId === 'alphatauri'
            ? 'bg-gaslyBattle'
            : team.constructorId === 'aston_martin'
            ? 'bg-strollBattle'
            : team.constructorId === 'williams'
            ? 'bg-latifiBattle'
            : team.constructorId === 'alfa'
            ? 'bg-giovinazziBattle'
            : team.constructorId === 'haas'
            ? 'bg-mickBattle'
            : 'bg-bottasBattle'
        "
      ></div>
      <div
        class="w-32 absolute bottom-0 mx-auto left-0 right-0 flex items-center justify-center"
        :class="
          team.constructorId === 'red_bull'
            ? 'bg-info'
            : team.constructorId === 'mercedes'
            ? 'bg-error'
            : team.constructorId === 'ferrari'
            ? 'bg-success'
            : team.constructorId === 'mclaren'
            ? 'bg-warning'
            : team.constructorId === 'alpine'
            ? 'bg-base-content'
            : team.constructorId === 'alphatauri'
            ? 'bg-base-300'
            : team.constructorId === 'aston_martin'
            ? 'bg-accent'
            : team.constructorId === 'williams'
            ? 'bg-base-content'
            : team.constructorId === 'alfa'
            ? 'bg-neutral-content'
            : team.constructorId === 'haas'
            ? 'bg-neutral-focus'
            : 'bg-success'
        "
      >
        <p
          class="font-boldHeadline uppercase"
          :class="team.constructorId === 'haas' ? 'text-black' : 'text-white'"
        >
          {{ team.name }}
        </p>
      </div>
    </div>
    <div
      class="w-full md:w-4/6 flex justify-around font-headline text-xs lg:text-base pt-1 text-white"
    >
      <p>
        {{
          team.constructorId === 'red_bull'
            ? 'Verstappen'
            : team.constructorId === 'mercedes'
            ? 'Hamilton'
            : team.constructorId === 'ferrari'
            ? 'Sainz'
            : team.constructorId === 'mclaren'
            ? 'Norris'
            : team.constructorId === 'alpine'
            ? 'Ocon'
            : team.constructorId === 'alphatauri'
            ? 'Tsunoda'
            : team.constructorId === 'aston_martin'
            ? 'Vettel'
            : team.constructorId === 'williams'
            ? 'Russell'
            : team.constructorId === 'alfa'
            ? 'Raikonnen'
            : team.constructorId === 'haas'
            ? 'Mazepin'
            : 'bg-maxBattle'
        }}
      </p>
      <p>
        {{
          team.constructorId === 'red_bull'
            ? 'Perez'
            : team.constructorId === 'mercedes'
            ? 'Bottas'
            : team.constructorId === 'ferrari'
            ? 'Leclerc'
            : team.constructorId === 'mclaren'
            ? 'Ricciardo'
            : team.constructorId === 'alpine'
            ? 'Alonso'
            : team.constructorId === 'alphatauri'
            ? 'Gasly'
            : team.constructorId === 'aston_martin'
            ? 'Stroll'
            : team.constructorId === 'williams'
            ? 'Latifi'
            : team.constructorId === 'alfa'
            ? 'Giovinazzi'
            : team.constructorId === 'haas'
            ? 'Mick'
            : 'bg-bottasBattle'
        }}
      </p>
    </div>
    <div class="w-full md:w-4/6 flex mt-2 h-full overflow-scroll">
      <div
        class="w-full flex flex-col items-center p-2 font-headline xl:text-base text-white uppercase text-xs"
      >
        <!-- RACE -->
        <div class="w-full flex flex-col">
          <p>Race</p>
          <div class="p-2 flex items-center">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              19
            </p>
            <progress
              class="progress w-1/2 transform bg-white rotate-180 mr-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="19"
              max="22"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="3"
              max="22"
            ></progress>
            <p class="w-15 text-base xl:text-xl font-boldHeadline text-right">
              3
            </p>
          </div>
        </div>
        <!-- QUALIFYING -->
        <div class="w-full flex flex-col">
          <p>Qualifying</p>
          <div class="p-2 flex items-center">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              20
            </p>

            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="20"
              max="22"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 bg-white h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="2"
              max="22"
            ></progress>
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-right"
            >
              2
            </p>
          </div>
        </div>
        <!-- POINTS -->
        <div class="w-full flex flex-col">
          <p>Points</p>
          <div class="p-2 flex items-center">
            <p
              class="w-20 text-base xl:text-xl text-white font-boldHeadline text-left mr-1"
            >
              395.5
            </p>
            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="395.5"
              max="395.5"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="190"
              max="395.5"
            ></progress>
            <p
              class="w-20 text-base xl:text-xl text-white font-boldHeadline text-right ml-1"
            >
              190
            </p>
          </div>
        </div>

        <!-- BEST RACE FINISH -->
        <div class="w-full flex flex-col">
          <p>Best race finish</p>
          <div class="p-2 flex items-center justify-between">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              1<span class="text-xs lg:text-lg pr-2">st</span>
            </p>
            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="22"
              max="22"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="22"
              max="22"
            ></progress>
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-right"
            >
              1<span class="text-xs lg:text-lg">st</span>
            </p>
          </div>
        </div>

        <!-- HIGHEST GRID POSITION -->
        <div class="w-full flex flex-col">
          <p>Highest Grid Position</p>
          <div class="p-2 flex items-center justify-between">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              1<span class="text-xs lg:text-lg">st</span>
            </p>
            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="22"
              max="22"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 bg-white h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-focus bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="21"
              max="22"
            ></progress>
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-right"
            >
              2<span class="text-xs lg:text-lg">nd</span>
            </p>
          </div>
        </div>

        <!-- DNF -->
        <div class="w-full flex flex-col">
          <p>DNF</p>
          <div class="p-2 flex items-center">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              3
            </p>
            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="3"
              max="22"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 bg-white h-3 lg:h-4"
              :class="
                team.constructorId === 'red_bull'
                  ? 'progress-info bg-white'
                  : team.constructorId === 'mercedes'
                  ? 'progress-error'
                  : team.constructorId === 'ferrari'
                  ? 'progress-success'
                  : team.constructorId === 'mclaren'
                  ? 'progress-warning'
                  : team.constructorId === 'alpine'
                  ? 'progress-primary'
                  : team.constructorId === 'alphatauri'
                  ? 'progress-secondary'
                  : team.constructorId === 'aston_martin'
                  ? 'progress-accent'
                  : team.constructorId === 'williams'
                  ? 'progress-primary'
                  : team.constructorId === 'alfa'
                  ? 'progress-neutral-content bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="3"
              max="22"
            ></progress>
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-right"
            >
              3
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['team'],
  data() {
    return {};
  },
};
</script>

<style></style>
