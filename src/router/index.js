import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Drivers from '../views/Drivers.vue';
import Races from '../views/Races.vue';
import Teams from '../views/Teams.vue';
import Standings from '../views/Standings.vue';
import SingleDriver from '../views/SingleDriver.vue';

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
    name: 'Single Driver',
    component: SingleDriver,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
