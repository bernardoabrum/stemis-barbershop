<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import "./App.scss";
import Header from "./components/header/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
