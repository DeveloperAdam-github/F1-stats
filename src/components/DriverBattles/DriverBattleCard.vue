<template>
  <div
    class="w-full h-full pt-6 lg:pt-10 xl:px-5 flex flex-col items-center"
    :data-theme="team.constructorId"
  >
    <div class="w-full md:w-4/6 h-56 xl:h-80 flex relative">
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
            ? 'bg-primary'
            : team.constructorId === 'alphatauri'
            ? 'bg-secondary'
            : team.constructorId === 'aston_martin'
            ? 'bg-accent'
            : team.constructorId === 'williams'
            ? 'bg-primary'
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
    <div class="w-full md:w-4/6 flex mt-2 h-full overflow-scroll">
      <div
        class="w-full flex flex-col items-center p-2 font-headline xl:text-base text-white uppercase text-xs"
      >
        <!-- RACE -->
        <div class="w-full flex flex-col">
          <p>Race</p>
          <div class="p-2 flex items-center">
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              7
            </p>
            <progress
              class="progress w-1/2 transform bg-white rotate-180 mr-1 h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="7"
              max="20"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="13"
              max="20"
            ></progress>
            <p class="w-15 text-base xl:text-xl font-boldHeadline">13</p>
          </div>
        </div>
        <!-- QUALIFYING -->
        <div class="w-full flex flex-col">
          <p>Qualifying</p>
          <div class="p-2 flex items-center">
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              15
            </p>

            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="15"
              max="20"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 bg-white h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="5"
              max="20"
            ></progress>
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              5
            </p>
          </div>
        </div>
        <!-- POINTS -->
        <div class="w-full flex flex-col">
          <p>Points</p>
          <div class="p-2 flex items-center">
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              12
            </p>
            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="12"
              max="20"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 bg-white h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="8"
              max="20"
            ></progress>
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              8
            </p>
          </div>
        </div>

        <!-- BEST RACE FINISH -->
        <div class="w-full flex flex-col">
          <p>Best race finish</p>
          <div class="p-2 flex items-center">
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              10
            </p>
            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="10"
              max="20"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 bg-white h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="10"
              max="20"
            ></progress>
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              10
            </p>
          </div>
        </div>

        <!-- HIGHEST GRID POSITION -->
        <div class="w-full flex flex-col">
          <p>Highest Grid Position</p>
          <div class="p-2 flex items-center">
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              3
            </p>
            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="17"
              max="20"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 bg-white h-3 xl:h-4"
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
                  ? 'progress-success'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="3"
              max="20"
            ></progress>
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              17
            </p>
          </div>
        </div>

        <!-- DNF -->
        <div class="w-full flex flex-col">
          <p>DNF</p>
          <div class="p-2 flex items-center">
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              2
            </p>
            <progress
              class="progress bg-white w-1/2 transform rotate-180 mr-1 h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="2"
              max="20"
            ></progress>
            <progress
              class="progress bg-white w-1/2 ml-1 bg-white h-3 xl:h-4"
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
                  ? 'progress-neutral-content'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              value="4"
              max="20"
            ></progress>
            <p class="w-15 text-base xl:text-xl text-white font-boldHeadline">
              4
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
