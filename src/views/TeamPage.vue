<template>
  <div class="team-page w-full flex-1 bg-secondary overflow-hidden text-white">
    <div class="">
      <div class="h-84vh w-full flex flex-col px-6 py-2 md:p-6">
        <team-page-title :team="teamInfo" />
        <team-page-data :team="teamInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import TeamPageData from '../components/Teams/TeamPageData.vue';
import TeamPageTitle from '../components/Teams/TeamPageTitle.vue';
export default {
  data() {
    return {
      teamInfo: '',
      currentTeam: [],
    };
  },
  props: ['team'],
  components: {
    TeamPageTitle,
    TeamPageData,
  },
  watch: {
    // teamInfo(newVal, oldVal) {
    //   console.log(`Updating ${oldVal} to ${newVal}`);
    //   this.teamInfo = { ...newVal };
    // },
  },
  methods: {
    loadTeamData() {
      this.currentTeam = this.teamInfo;
      // console.log(this.currentTeam, 'who is team?');
    },
    // persist() {
    //   localStorage.team = JSON.stringify(this.teamInfo);
    //   console.log(localStorage.team, 'does this work?');
    // },
    // getLocalStorage() {
    //   // console.log('setting teaminfo');
    //   // if (this.teamInfo.constructorId === null && localStorage.team) {
    //   // console.log('getting local storage?');
    //   this.teamInfo = localStorage.team;
    //   console.log(
    //     this.teamInfo,
    //     'this.teamInfo <--- after getLocalStorage has run'
    //   );
    //   // }
    // },
  },
  mounted() {
    // this.loadTeamData();
    this.teamInfo = this.$route.params;

    // console.log(this.$props.team, ' this the props team');
    // if (Object.keys(this.teamInfo).length === 0) {
    //   this.getLocalStorage();
    //   console.log(this.teamInfo, 'who is team POOOOOP');
    // }
  },
};
</script>

<style>
.team-page {
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
