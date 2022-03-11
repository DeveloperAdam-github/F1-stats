<template>
  <div
    class="w-full h-full pt-6 lg:pt-10 lg:px-5 flex flex-col items-center"
    :data-theme="team.constructorId"
  >
    <div class="w-full md:w-4/6 h-56 lg:h-96 flex relative">
      <div
        class="h-full w-1/2 bg-cover bg-center bg-maxBattle"
        :style="{
          'background-image':
            team.constructorId === 'red_bull'
              ? this.verstappen
              : team.constructorId === 'mercedes'
              ? this.hamilton
              : team.constructorId === 'ferrari'
              ? this.sainz
              : team.constructorId === 'mclaren'
              ? this.norris
              : team.constructorId === 'alpine'
              ? this.ocon
              : team.constructorId === 'alphatauri'
              ? this.tsunoda
              : team.constructorId === 'aston_martin'
              ? this.vettel
              : team.constructorId === 'williams'
              ? this.albon
              : team.constructorId === 'alfa'
              ? this.zhou
              : team.constructorId === 'haas'
              ? this.magnussen
              : 'bg-maxBattle',
        }"
      ></div>
      <div
        class="h-full w-1/2 bg-cover bg-center"
        :class="team.constructorId === 'haas' ? '' : ''"
        :style="{
          'background-image':
            team.constructorId === 'red_bull'
              ? this.perez
              : team.constructorId === 'mercedes'
              ? this.russell
              : team.constructorId === 'ferrari'
              ? this.leclerc
              : team.constructorId === 'mclaren'
              ? this.ricciardo
              : team.constructorId === 'alpine'
              ? this.alonso
              : team.constructorId === 'alphatauri'
              ? this.gasly
              : team.constructorId === 'aston_martin'
              ? this.stroll
              : team.constructorId === 'williams'
              ? this.latifi
              : team.constructorId === 'alfa'
              ? this.bottas
              : team.constructorId === 'haas'
              ? this.mick
              : 'bg-bottasBattle',
        }"
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
            ? 'Albon'
            : team.constructorId === 'alfa'
            ? 'Zhou'
            : team.constructorId === 'haas'
            ? 'Magnussen'
            : ''
        }}
      </p>
      <p>
        {{
          team.constructorId === 'red_bull'
            ? 'Perez'
            : team.constructorId === 'mercedes'
            ? 'Russell'
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
            ? 'Bottas'
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
import max from '../../assets/Drivers/DriversBattle/max.jpeg';
import bottas from '../../assets/Drivers/DriversBattle/bottas.jpeg';
import leclerc from '../../assets/Drivers/DriversBattle/leclerc.jpeg';
import lewis from '../../assets/Drivers/DriversBattle/lewis.jpeg';
import alex from '../../assets/Drivers/DriversBattle/alex.jpeg';
import alonso from '../../assets/Drivers/DriversBattle/alonso.jpeg';
import latifi from '../../assets/Drivers/DriversBattle/latifi.jpeg';
import gasly from '../../assets/Drivers/DriversBattle/gasly.jpeg';
import mazepin from '../../assets/Drivers/DriversBattle/mazepin.jpeg';
import mick from '../../assets/Drivers/DriversBattle/mick.jpeg';
import norris from '../../assets/Drivers/DriversBattle/norris.jpeg';
import ocon from '../../assets/Drivers/DriversBattle/ocon.jpeg';
import perez from '../../assets/Drivers/DriversBattle/perez.jpeg';
import ricciardo from '../../assets/Drivers/DriversBattle/ricciardo.jpeg';
import russell from '../../assets/Drivers/DriversBattle/russell.jpeg';
import sainz from '../../assets/Drivers/DriversBattle/sainz.jpg';
import stroll from '../../assets/Drivers/DriversBattle/stroll.jpeg';
import yuki from '../../assets/Drivers/DriversBattle/yuki.jpeg';
import vettel from '../../assets/Drivers/DriversBattle/vettel.jpeg';
import zhou from '../../assets/Drivers/DriversBattle/zhou.jpeg';
import magnussen from '../../assets/Drivers/DriversBattle/kmag.jpeg';
export default {
  props: ['team'],
  data() {
    return {
      driverBattleInfo: [],
      verstappen: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)), url(${max})`,
      hamilton: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${lewis})`,
      bottas: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${bottas})`,
      perez: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${perez})`,
      sainz: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${sainz})`,
      norris: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${norris})`,
      leclerc: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${leclerc})`,
      ricciardo: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${ricciardo})`,
      gasly: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${gasly})`,
      alonso: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${alonso})`,
      ocon: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${ocon})`,
      vettel: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${vettel})`,
      stroll: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${stroll})`,
      tsunoda: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${yuki})`,
      russell: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${russell})`,
      zhou: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${zhou})`,
      latifi: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${latifi})`,
      albon: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${alex})`,
      mick: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${mick})`,
      magnussen: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(${magnussen})`,
      kubica: `linear-gradient(to bottom right, rgba(1,1,1,0.01), rgba(1,1,1,0.90)),url(https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/08/18101104/robert-kubica-alfa-romeo-garage-hungary-planetf1.jpg)`,
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
