<template>
  <div id="app">
    <navigation :is-logged-in="isLoggedIn" @as-logged-out="isLoggedIn = false"/>

    <router-view @as-logged-in="isLoggedIn = true"></router-view>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.vue";
import "./stylesheets/home.css";

export default {
  name: "app",
  components: {
    Navigation,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<style>
body {
  font-family: "Ubuntu", sans-serif;
}
.alt-font {
  font-family: "Croissant One", cursive;
}
</style>
