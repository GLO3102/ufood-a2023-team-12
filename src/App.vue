<template>
  <div id="app">
    <navigation-bar
      :is-logged-in="isLoggedIn"
      @as-logged-out="isLoggedIn = false"
    />

    <router-view @as-logged-in="isLoggedIn = true" />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar.vue";
import "./stylesheets/home.css";

export default {
  name: "app",
  components: {
    NavigationBar,
  },
  data() {
    return {
      isLoggedIn: false,
      visit: {},
    };
  },
  methods: {
    handleDocumentClick(event) {
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar) {
        navbar.classList.remove("show");
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleDocumentClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
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
