<template>
  <div class="w-full flex-1 bg-secondary battle overflow-hidden">
    <div class="">
      <div class="h-84vh w-full flex flex-col px-6 py-2 md:p-6 overflow-scroll">
        <driver-battle-title :team="teamInfo" />
        <div>
          <driver-battle-card :team="teamInfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DriverBattleCard from '../components/DriverBattles/DriverBattleCard.vue';
import DriverBattleTitle from '../components/DriverBattles/DriverBattleTitle.vue';
export default {
  components: { DriverBattleTitle, DriverBattleCard },
  data() {
    return {
      teamInfo: '',
      currentTeam: [],
    };
  },
  methods: {
    getDriver() {
      this.teamInfo = this.$props.team;
    },
    loadTeamData() {
      this.currentTeam = this.teamInfo;
      console.log(this.currentTeam, 'who is team?');
    },
  },
  mounted() {
    this.loadTeamData();
    this.teamInfo = this.$route.params;
    console.log(this.teamInfo, 'who is team');
  },
};
</script>

<style>
.battle {
  background-image: linear-gradient(rgba(1, 1, 1, 1), rgba(0, 0, 0, 0.1));
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
