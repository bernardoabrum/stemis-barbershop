<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script>
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: sans-serif;
}
</style>
