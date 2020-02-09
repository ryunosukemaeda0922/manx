<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style>
#app {
  background-color: #fff;
  font-weight: 300;
  font-size: 16px;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
}
</style>
