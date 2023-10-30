<template>
  <body>
    <router-view></router-view>
  </body>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  components: {
    MainPage,
  },
};
</script>

<style>
html {
  scrollbar-width: thin;
}
</style>
