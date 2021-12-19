<template>
  <div class="h-screen w-screen bg-secondary overflow-hidden">
    <TopNav class="h-6vh" />
    <router-view class="h-84vh" />
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
  color: #2c3e50;
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
</style>
