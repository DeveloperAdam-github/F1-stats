<template>
  <div class="teams w-full flex-1 bg-secondary overflow-hidden">
    <div class="">
      <div class="h-84vh w-full flex flex-col p-6">
        <team-title />
        <div
          class="w-auto flex pt-10 lg:pt-24 overflow-x-scroll no-scrollbar carousel"
        >
          <team-card
            class=""
            v-for="(team, index) in teams"
            :key="index"
            :team="team"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TeamCard from '../components/Teams/TeamCard.vue';
import TeamTitle from '../components/Teams/TeamTitle.vue';
export default {
  components: { TeamTitle, TeamCard },
  data() {
    return {
      teams: [],
    };
  },
  methods: {
    getTeams() {
      axios
        .get('https://ergast.com/api/f1/current/constructorStandings.json')
        .then((response) => {
          this.teams =
            response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          console.log(this.teams);
        });
    },
  },
  mounted() {
    this.getTeams();
    console.log(this.teams);
  },
};
</script>

<style>
.teams {
  background-image: linear-gradient(rgba(1, 1, 1, 1), rgba(0, 0, 0, 0.1));
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
