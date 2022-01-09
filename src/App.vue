<template>
  <div class="h-screen w-screen bg-secondary background overflow-hidden">
    <TopNav class="h-10vh lg:h-6vh" />
    <!-- <router-view class="h-80vh lg:h-84vh" /> -->
    <router-view v-slot="{ Component }" class="h-80vh lg:h-84vh background">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <Navbar class="h-10vh" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import TopNav from './components/TopNav.vue';
export default {
  components: { Navbar, TopNav },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(rgba(1, 1, 1, 1), rgba(0, 0, 0, 0.1));
}

.background {
  background-image: linear-gradient(rgba(1, 1, 1, 1), rgba(0, 0, 0, 0.1));
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Route transitions */
.router-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.router-enter-active {
  transition: all 0.4s ease-in-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.4s ease-in-out;
}
</style>
