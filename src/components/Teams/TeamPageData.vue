<template>
  <div
    class="h-full flex items-center overflow-y-scroll flex-col p-2 lg:p-10 pt-2"
  >
    <!-- https://www.formula1.com/content/dam/fom-website/teams/2021-Team-Pages/teamcar-ferrari.png.transform/2col-retina/image.png" -->
    <img
      class="h-40 p-4"
      :src="
        team.constructorId === 'mercedes'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes.png.transform/4col-retina/image.png'
          : team.constructorId === 'red_bull'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing.png.transform/4col-retina/image.png'
          : team.constructorId === 'ferrari'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021-Team-Pages/teamcar-ferrari.png.transform/2col-retina/image.png'
          : team.constructorId === 'mclaren'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/mclaren.png.transform/4col-retina/image.png'
          : team.constructorId === 'alpine'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/alpine.png.transform/4col-retina/image.png'
          : team.constructorId === 'alphatauri'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/alphatauri.png.transform/4col-retina/image.png'
          : team.constructorId === 'aston_martin'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/aston-martin.png.transform/4col-retina/image.png'
          : team.constructorId === 'williams'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/williams.png.transform/4col-retina/image.png'
          : team.constructorId === 'alfa'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/alfa-romeo-racing.png.transform/4col-retina/image.png'
          : team.constructorId === 'haas'
          ? 'https://www.formula1.com/content/dam/fom-website/teams/2021/haas-f1-team.png.transform/4col-retina/image.png'
          : ''
      "
      alt=""
    />

    <div
      v-if="team.constructorId === 'mercedes'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        Mercedes’ modern F1 revival started with the creation of a works squad
        for 2010 - the platform for a meteoric rise up the Grand Prix order. The
        team generated huge excitement from the off with the sensational return
        of Michael Schumacher, but headlines soon followed on track: three
        podiums in their debut season, all via Nico Rosberg - who then claimed a
        breakthrough pole/victory double at China in 2012.
      </p>
      <p class="mt-2">
        The following season he was paired with Lewis Hamilton, the duo going on
        to stage some epic title battles as the Silver Arrows swept all before
        them to become one of the most dominant forces of the modern F1 era. And
        with Hamilton now partnered by steely Finn Valtteri Bottas, Mercedes
        remain very much the team to beat…
      </p>
    </div>

    <div
      v-if="team.constructorId === 'red_bull'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        Red Bull were no strangers to F1 - as sponsors - prior to formally
        entering as a works team in 2004. Nonetheless, the scale of their
        success over the following decade was staggering. After a first podium
        in 2006, the team hit their stride in 2009, claiming six victories and
        second in the constructors' standings.
      </p>
      <p class="mt-2">
        Over the next four seasons they were a tour de force, claiming
        consecutive title doubles between 2010 and 2013, with Sebastian Vettel
        emerging as the sport's youngest quadruple champion. Now their hopes of
        recapturing that glory lie with an equally exciting talent – one named
        Max Verstappen…
      </p>
    </div>

    <div
      v-if="team.constructorId === 'ferrari'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        For many, Ferrari and Formula 1 racing have become inseparable. The only
        team to have competed in every season since the world championship
        began, the Prancing Horse has grown from the humble dream of founder
        Enzo Ferrari to become one of the most iconic and recognised brands in
        the world.
      </p>
      <p class="mt-2">
        Success came quickly through the likes of Alberto Ascari and John
        Surtees, and continued – in amongst leaner times – with Niki Lauda in
        the 1970s and then Michael Schumacher in the 2000s, when Ferrari claimed
        a then unprecedented five consecutive title doubles, securing their
        status as the most successful and decorated team in F1 history...
      </p>
    </div>

    <div
      v-if="team.constructorId === 'mclaren'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        Since entering the sport in 1966 under the guidance and restless
        endeavour of eponymous founder Bruce, McLaren's success has been nothing
        short of breathtaking.
      </p>
      <p class="mt-2">
        Five glittering decades have yielded countless victories, pole positions
        and podiums, not to mention eight constructors' championships. What's
        more, some of the sport's greatest drivers made their names with the
        team, including Emerson Fittipaldi, Ayrton Senna, Mika Hakkinen and
        Lewis Hamilton...
      </p>
    </div>

    <div
      v-if="team.constructorId === 'alpine'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        Alpine may be a relatively new name to Formula 1, but Renault’s famous
        sportscar arm has plenty of motorsport heritage. The 2021 rebrand of the
        team marked the next step in Renault’s F1 revival, begun in 2016 with
        the takeover of the then-Lotus squad.
      </p>
      <p class="mt-2">
        Already race winners in their new guise, regular podiums and a tilt at
        the title must be their next target…
      </p>
    </div>

    <div
      v-if="team.constructorId === 'alphatauri'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        Established in 2006 as a squad in which young drivers from Red Bull’s
        prodigious talent pool could cut their F1 teeth, AlphaTauri – originally
        named Toro Rosso – were formed from the ashes of the plucky Minardi
        team. Sebastian Vettel gave validity to the approach almost immediately,
        delivering a fairy-tale win in 2008, before going on to enjoy world
        championship success with parent team Red Bull Racing.
      </p>
      <p class="mt-2">
        Today the ethos of nurturing talent still holds true, though the Italian
        squad are no longer simply a ‘B team’ but a constructor in their own
        right...
      </p>
    </div>

    <div
      v-if="team.constructorId === 'aston_martin'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        Aston Martin’s original Formula 1 foray – over half a century ago –
        lasted just five races. This time, though, it’s serious. This F1 squad
        are no strangers to success, having won in their original guise of
        Jordan and most recently as Racing Point in 2020.
      </p>
      <p class="mt-2">
        Renowned for their ability to punch above their weight, and now with a
        four-time champion leading their driver line-up, Aston Martin are very
        much a team to watch…
      </p>
    </div>

    <div
      v-if="team.constructorId === 'williams'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        Driven on by the brilliance and passion of the late Sir Frank Williams,
        Williams grew from humble beginnings to become a Formula 1 behemoth,
        unrivalled by all except Ferrari and McLaren in terms of enduring
        success.
      </p>
      <p class="mt-2">
        Over the past four decades the team has racked up Grand Prix wins and
        championship glory, and in the process nurtured some of the greatest
        talents in the sport, both in and out the cockpit. Now, following the
        Williams family's decision to step aside after the sale of the team to
        Dorilton Capital, a new era begins...
      </p>
    </div>

    <div
      v-if="team.constructorId === 'alfa'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        The name Alfa Romeo boasts Formula 1 connections dating back to the
        championship’s inception in 1950. Fast forward to the 21st century and
        Italian flare combines with Swiss sensibilities in a new era for the
        team formerly known as Sauber.
      </p>
      <p class="mt-2">
        Having enjoyed considerable success in world sportscars, where he helped
        nurture the emerging talents of future F1 stars Michael Schumacher and
        Heinz-Harald Frentzen, Peter Sauber guided his eponymous squad into F1
        in 1993.
      </p>
      <p class="mt-2">
        The team has since established itself as a mainstay of the grid,
        becoming race winners under BMW’s brief ownership, and developing a
        well-earned reputation not only for producing competitive cars, but also
        for developing young drivers.
      </p>
    </div>

    <div
      v-if="team.constructorId === 'haas'"
      class="w-full py-2 flex flex-col text-left text-xs lg:text-base font-headline text-white"
    >
      <p class="mt-2">
        The youngest team on the grid, Haas made their highly impressive debut
        in 2016, and in the process became the first all-American-led F1 squad
        in three decades.
      </p>
      <p class="mt-2">
        Founded by industrialist Gene Haas, they are based in the United States
        on the same Kannapolis, North Carolina facility as his
        championship-winning NASCAR Sprint Cup Series team, Stewart-Haas Racing.
        The Ferrari-powered team, led by the charismatic Guenther Steiner, also
        have a UK factory in Banbury…
      </p>
    </div>

    <div class="mt-4 py-2 w-full flex flex-col">
      <h2 class="font-boldHeadline text-base lg:text-lg">The Drivers</h2>
      <div class="w-full flex justify-around mt-4">
        <div class="w-1/2 p-1 flex flex-col items-center">
          <div
            class="bg-cover m-1 bg-center h-36 lg:h-72 w-full lg:w-64 flex rounded-md flex-col"
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
            class="w-32 lg:w-56 mt-2 bg-transparent p-2 font-headline font-bold text-xxs lg:text-lg"
          >
            {{
              team.constructorId === 'red_bull'
                ? 'Max Verstappen'
                : team.constructorId === 'mercedes'
                ? 'Lewis Hamilton'
                : team.constructorId === 'ferrari'
                ? 'Carlos Sainz'
                : team.constructorId === 'mclaren'
                ? 'Lando Norris'
                : team.constructorId === 'alpine'
                ? 'Esteban Ocon'
                : team.constructorId === 'alphatauri'
                ? 'Yuki Tsunoda'
                : team.constructorId === 'aston_martin'
                ? 'Sebestian Vettel'
                : team.constructorId === 'williams'
                ? 'George Russell'
                : team.constructorId === 'alfa'
                ? 'Kimi Raikkonen'
                : team.constructorId === 'haas'
                ? 'Nikita Mazepin'
                : ''
            }}
          </div>
        </div>
        <div class="flex p-1 w-1/2 flex-col items-center">
          <div
            class="bg-cover m-1 bg-center h-36 lg:h-72 w-full lg:w-64 flex rounded-md flex-col"
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
                ? 'bg-mickBattle bg-top'
                : 'bg-bottasBattle'
            "
          ></div>
          <div
            class="w-28 lg:w-56 mt-2 bg-transparent p-2 font-headline font-bold text-xxs lg:text-lg"
          >
            {{
              team.constructorId === 'red_bull'
                ? 'Sergio Perez'
                : team.constructorId === 'mercedes'
                ? 'Valterri Bottas'
                : team.constructorId === 'ferrari'
                ? 'Charles Leclerc'
                : team.constructorId === 'mclaren'
                ? 'Daniel Ricciardo'
                : team.constructorId === 'alpine'
                ? 'Fernando Alonso'
                : team.constructorId === 'alphatauri'
                ? 'Pierre Gasly'
                : team.constructorId === 'aston_martin'
                ? 'Lance Stroll'
                : team.constructorId === 'williams'
                ? 'Nicholas Latifi'
                : team.constructorId === 'alfa'
                ? 'Antonio Giovinazzi'
                : team.constructorId === 'haas'
                ? 'Mick Schumacher'
                : ''
            }}
          </div>
        </div>
      </div>
      <div class="w-full px-2 flex justify-center">
        <router-link
          :to="{
            name: 'DriverBattle',
            params: { ...team },
            query: { team: team.constructorId },
          }"
        >
          <!-- params: { ...teamInfo.Constructor },
                  query: { team: teamInfo.Constructor.constructorId }, -->
          <button
            @click="persist"
            class="mt-8 lg:mt-12 w-full lg:w-64 mb-4 bg-success p-2 font-boldHeadline rounded-md"
          >
            Head to Head
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['team'],
  data() {
    return {
      team: {},
    };
  },
  watch: {
    team(newVal, oldVal) {
      console.log(`Updating ${oldVal} to ${newVal}`);
      this.team = newVal;
    },
  },
  methods: {
    // getTeam() {
    //   this.team = this.$props.team;
    //   console.log(this.teamInfo, 'wthf');
    // },
    persist() {
      localStorage.team = JSON.stringify(this.team);
      console.log(localStorage.team, 'does this work?');
    },
    getLocalStorage() {
      // console.log('setting teaminfo');
      // if (this.teamInfo.constructorId === null && localStorage.team) {
      // console.log('getting local storage?');
      this.team = JSON.parse(localStorage.team);
      console.log(
        this.team,
        'this.teamInfo <--- after getLocalStorage has run'
      );
      // }
    },
  },
  mounted() {
    // this.getTeam();
    this.team = this.$route.params;
    // console.log(this.team, 'wtwtwtetwetwtwtet');
    if (Object.keys(this.team).length === 0) {
      this.getLocalStorage();
      console.log(this.team, 'who is team POOOOOP');
    }
  },
};
</script>

<style></style>
