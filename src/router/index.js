import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Drivers from '../views/Drivers.vue';
import Races from '../views/Races.vue';
import SingleRace from '../views/SingleRace.vue';
import Teams from '../views/Teams.vue';
import Standings from '../views/Standings.vue';
import SingleDriver from '../views/SingleDriver.vue';
import DriverBattle from '../views/DriverBattle.vue';
import TeamPage from '../views/TeamPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: Drivers,
  },
  {
    path: '/races',
    name: 'Races',
    component: Races,
  },
  {
    path: '/single-race',
    name: 'SingleRace',
    component: SingleRace,
    props: true,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
  },
  {
    path: '/standings',
    name: 'Standings',
    component: Standings,
  },
  {
    path: '/single-driver',
    name: 'SingleDriver',
    component: SingleDriver,
    props: true,
  },
  {
    path: '/driver-battles',
    name: 'DriverBattle',
    component: DriverBattle,
    props: true,
  },
  {
    path: '/team-page',
    name: 'TeamPage',
    component: TeamPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
