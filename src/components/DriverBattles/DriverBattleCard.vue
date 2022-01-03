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
            : ''
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
            ? 'Schumacher'
            : ''
        }}
      </p>
    </div>
    <div class="w-full md:w-4/6 flex mt-2 h-full overflow-scroll">
      <div
        class="w-full flex flex-col items-center p-2 font-headline xl:text-base text-white uppercase text-xs"
      >
        <!-- RACE -->
        <div class="w-full flex flex-col" v-if="driverBattleInfo[0]">
          <p>Race</p>
          <div class="p-2 flex items-center">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              {{ driverBattleInfo[0].Race }}
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
              :value="driverBattleInfo[0].Race"
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
              :value="driverBattleInfo[1].Race"
              max="22"
            ></progress>
            <p class="w-15 text-base xl:text-xl font-boldHeadline text-right">
              {{ driverBattleInfo[1].Race }}
            </p>
          </div>
        </div>
        <!-- QUALIFYING -->
        <div class="w-full flex flex-col" v-if="driverBattleInfo[0]">
          <p>Qualifying</p>
          <div class="p-2 flex items-center">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              {{ driverBattleInfo[0].Qualifying }}
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
              :value="driverBattleInfo[0].Qualifying"
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
              :value="driverBattleInfo[1].Qualifying"
              max="22"
            ></progress>
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-right"
            >
              {{ driverBattleInfo[1].Qualifying }}
            </p>
          </div>
        </div>
        <!-- POINTS -->
        <div class="w-full flex flex-col" v-if="driverBattleInfo[0]">
          <p>Points</p>
          <div class="p-2 flex items-center">
            <p
              class="w-20 text-base xl:text-xl text-white font-boldHeadline text-left mr-1"
            >
              {{ driverBattleInfo[0].Points }}
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
              :value="driverBattleInfo[0].Points"
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
              :value="driverBattleInfo[1].Points"
              max="395.5"
            ></progress>
            <p
              class="w-20 text-base xl:text-xl text-white font-boldHeadline text-right ml-1"
            >
              {{ driverBattleInfo[1].Points }}
            </p>
          </div>
        </div>

        <!-- BEST RACE FINISH -->
        <div class="w-full flex flex-col" v-if="driverBattleInfo[0]">
          <p>Best race finish</p>
          <div class="p-2 flex items-center justify-between">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              {{ driverBattleInfo[0].BestFinish
              }}<span
                class="text-xs lg:text-lg pr-2"
                v-if="driverBattleInfo[0].BestFinish === 1"
                >st</span
              >
              <span
                class="text-xs lg:text-lg pr-2"
                v-if="driverBattleInfo[0].BestFinish === 2"
                >nd</span
              >
              <span
                class="text-xs lg:text-lg pr-2"
                v-if="driverBattleInfo[0].BestFinish === 3"
                >rd</span
              >
              <span
                class="text-xs lg:text-lg pr-2"
                v-if="
                  driverBattleInfo[0].BestFinish !== 1 &&
                  driverBattleInfo[0].BestFinish !== 2 &&
                  driverBattleInfo[0].BestFinish !== 3
                "
                >th</span
              >
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
              :value="
                driverBattleInfo[0].BestFinish === 1
                  ? 20
                  : driverBattleInfo[0].BestFinish === 2
                  ? 19
                  : driverBattleInfo[0].BestFinish === 3
                  ? 18
                  : driverBattleInfo[0].BestFinish === 4
                  ? 17
                  : driverBattleInfo[0].BestFinish === 5
                  ? 16
                  : driverBattleInfo[0].BestFinish === 6
                  ? 15
                  : driverBattleInfo[0].BestFinish === 7
                  ? 14
                  : driverBattleInfo[0].BestFinish === 8
                  ? 13
                  : driverBattleInfo[0].BestFinish === 9
                  ? 12
                  : driverBattleInfo[0].BestFinish === 10
                  ? 11
                  : driverBattleInfo[0].BestFinish === 11
                  ? 10
                  : driverBattleInfo[0].BestFinish === 12
                  ? 9
                  : driverBattleInfo[0].BestFinish === 13
                  ? 8
                  : driverBattleInfo[0].BestFinish === 14
                  ? 7
                  : driverBattleInfo[0].BestFinish === 15
                  ? 6
                  : driverBattleInfo[0].BestFinish === 16
                  ? 5
                  : driverBattleInfo[0].BestFinish === 17
                  ? 4
                  : driverBattleInfo[0].BestFinish === 18
                  ? 3
                  : driverBattleInfo[0].BestFinish === 19
                  ? 2
                  : driverBattleInfo[0].BestFinish === 20
                  ? 1
                  : 20
              "
              max="20"
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
              :value="
                driverBattleInfo[1].BestFinish === 1
                  ? 20
                  : driverBattleInfo[1].BestFinish === 2
                  ? 19
                  : driverBattleInfo[1].BestFinish === 3
                  ? 18
                  : driverBattleInfo[1].BestFinish === 4
                  ? 17
                  : driverBattleInfo[1].BestFinish === 5
                  ? 16
                  : driverBattleInfo[1].BestFinish === 6
                  ? 15
                  : driverBattleInfo[1].BestFinish === 7
                  ? 14
                  : driverBattleInfo[1].BestFinish === 8
                  ? 13
                  : driverBattleInfo[1].BestFinish === 9
                  ? 12
                  : driverBattleInfo[1].BestFinish === 10
                  ? 11
                  : driverBattleInfo[1].BestFinish === 11
                  ? 10
                  : driverBattleInfo[1].BestFinish === 12
                  ? 9
                  : driverBattleInfo[1].BestFinish === 13
                  ? 8
                  : driverBattleInfo[1].BestFinish === 14
                  ? 7
                  : driverBattleInfo[1].BestFinish === 15
                  ? 6
                  : driverBattleInfo[1].BestFinish === 16
                  ? 5
                  : driverBattleInfo[1].BestFinish === 17
                  ? 4
                  : driverBattleInfo[1].BestFinish === 18
                  ? 3
                  : driverBattleInfo[1].BestFinish === 19
                  ? 2
                  : driverBattleInfo[1].BestFinish === 20
                  ? 1
                  : 20
              "
              max="20"
            ></progress>
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-right"
            >
              {{ driverBattleInfo[1].BestFinish
              }}<span
                class="text-xs lg:text-lg"
                v-if="driverBattleInfo[1].BestFinish === 1"
                >st</span
              >
              <span
                class="text-xs lg:text-lg"
                v-if="driverBattleInfo[1].BestFinish === 2"
                >nd</span
              >
              <span
                class="text-xs lg:text-lg"
                v-if="driverBattleInfo[1].BestFinish === 3"
                >rd</span
              >
              <span
                class="text-xs lg:text-lg"
                v-if="
                  driverBattleInfo[1].BestFinish !== 1 &&
                  driverBattleInfo[1].BestFinish !== 2 &&
                  driverBattleInfo[1].BestFinish !== 3
                "
                >th</span
              >
            </p>
          </div>
        </div>

        <!-- HIGHEST GRID POSITION -->
        <div class="w-full flex flex-col" v-if="driverBattleInfo[0]">
          <p>Highest Grid Position</p>
          <div class="p-2 flex items-center justify-between">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              {{ driverBattleInfo[0].HighestGrid
              }}<span
                class="text-xs lg:text-lg pr-2"
                v-if="driverBattleInfo[0].HighestGrid === 1"
                >st</span
              >
              <span
                class="text-xs lg:text-lg pr-2"
                v-if="driverBattleInfo[0].HighestGrid === 2"
                >nd</span
              >
              <span
                class="text-xs lg:text-lg pr-2"
                v-if="driverBattleInfo[0].HighestGrid === 3"
                >rd</span
              >
              <span
                class="text-xs lg:text-lg pr-2"
                v-if="
                  driverBattleInfo[0].HighestGrid !== 1 &&
                  driverBattleInfo[0].HighestGrid !== 2 &&
                  driverBattleInfo[0].HighestGrid !== 3
                "
                >th</span
              >
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
              :value="
                driverBattleInfo[0].HighestGrid === 1
                  ? 20
                  : driverBattleInfo[0].HighestGrid === 2
                  ? 19
                  : driverBattleInfo[0].HighestGrid === 3
                  ? 18
                  : driverBattleInfo[0].HighestGrid === 4
                  ? 17
                  : driverBattleInfo[0].HighestGrid === 5
                  ? 16
                  : driverBattleInfo[0].HighestGrid === 6
                  ? 15
                  : driverBattleInfo[0].HighestGrid === 7
                  ? 14
                  : driverBattleInfo[0].HighestGrid === 8
                  ? 13
                  : driverBattleInfo[0].HighestGrid === 9
                  ? 12
                  : driverBattleInfo[0].HighestGrid === 10
                  ? 11
                  : driverBattleInfo[0].HighestGrid === 11
                  ? 10
                  : driverBattleInfo[0].HighestGrid === 12
                  ? 9
                  : driverBattleInfo[0].HighestGrid === 13
                  ? 8
                  : driverBattleInfo[0].HighestGrid === 14
                  ? 7
                  : driverBattleInfo[0].HighestGrid === 15
                  ? 6
                  : driverBattleInfo[0].HighestGrid === 16
                  ? 5
                  : driverBattleInfo[0].HighestGrid === 17
                  ? 4
                  : driverBattleInfo[0].HighestGrid === 18
                  ? 3
                  : driverBattleInfo[0].HighestGrid === 19
                  ? 2
                  : driverBattleInfo[0].HighestGrid === 20
                  ? 1
                  : 20
              "
              max="20"
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
                  ? 'progress-neutral-focus bg-gray-600'
                  : team.constructorId === 'haas'
                  ? 'progress-neutral-focus bg-gray-600'
                  : 'progress-success bg-white'
              "
              :value="
                driverBattleInfo[1].HighestGrid === 1
                  ? 20
                  : driverBattleInfo[1].HighestGrid === 2
                  ? 19
                  : driverBattleInfo[1].HighestGrid === 3
                  ? 18
                  : driverBattleInfo[1].HighestGrid === 4
                  ? 17
                  : driverBattleInfo[1].HighestGrid === 5
                  ? 16
                  : driverBattleInfo[1].HighestGrid === 6
                  ? 15
                  : driverBattleInfo[1].HighestGrid === 7
                  ? 14
                  : driverBattleInfo[1].HighestGrid === 8
                  ? 13
                  : driverBattleInfo[1].HighestGrid === 9
                  ? 12
                  : driverBattleInfo[1].HighestGrid === 10
                  ? 11
                  : driverBattleInfo[1].HighestGrid === 11
                  ? 10
                  : driverBattleInfo[1].HighestGrid === 12
                  ? 9
                  : driverBattleInfo[1].HighestGrid === 13
                  ? 8
                  : driverBattleInfo[1].HighestGrid === 14
                  ? 7
                  : driverBattleInfo[1].HighestGrid === 15
                  ? 6
                  : driverBattleInfo[1].HighestGrid === 16
                  ? 5
                  : driverBattleInfo[1].HighestGrid === 17
                  ? 4
                  : driverBattleInfo[1].HighestGrid === 18
                  ? 3
                  : driverBattleInfo[1].HighestGrid === 19
                  ? 2
                  : driverBattleInfo[1].HighestGrid === 20
                  ? 1
                  : 20
              "
              max="20"
            ></progress>
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-right"
            >
              {{ driverBattleInfo[1].HighestGrid
              }}<span
                class="text-xs lg:text-lg"
                v-if="driverBattleInfo[1].HighestGrid === 1"
                >st</span
              >
              <span
                class="text-xs lg:text-lg"
                v-if="driverBattleInfo[1].HighestGrid === 2"
                >nd</span
              >
              <span
                class="text-xs lg:text-lg"
                v-if="driverBattleInfo[1].HighestGrid === 3"
                >rd</span
              >
              <span
                class="text-xs lg:text-lg"
                v-if="
                  driverBattleInfo[1].HighestGrid !== 1 &&
                  driverBattleInfo[1].HighestGrid !== 2 &&
                  driverBattleInfo[1].HighestGrid !== 3
                "
                >th</span
              >
            </p>
          </div>
        </div>

        <!-- DNF -->
        <div class="w-full flex flex-col" v-if="driverBattleInfo[0]">
          <p>DNF</p>
          <div class="p-2 flex items-center">
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-left"
            >
              {{ driverBattleInfo[0].DNF }}
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
              :value="driverBattleInfo[0].DNF"
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
              :value="driverBattleInfo[1].DNF"
              max="22"
            ></progress>
            <p
              class="w-15 text-base xl:text-xl text-white font-boldHeadline text-right"
            >
              {{ driverBattleInfo[1].DNF }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import supabase from '../../supabase';
export default {
  props: ['team'],
  data() {
    return {
      driverBattleInfo: [],
    };
  },
  methods: {
    async getDrivers() {
      let { data } = await supabase
        .from('Driver Stats Table')
        .select('*')
        .eq('Team', this.$route.query.team);
      this.driverBattleInfo = data;
      console.log(this.driverBattleInfo, 'info state');
    },
  },
  created() {
    this.getDrivers();
  },
};
</script>

<style></style>
