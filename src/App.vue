<template>
  <div id="app">
    <!--Naviguation Bar-->
    <navigation-bar
      :is-logged-in="isLoggedIn"
      @as-logged-out="isLoggedIn = false"
    />

    <!--Restaurant Rating Modales-->
    <modale
      @close-modale="closeRateModale"
      v-if="rateModaleOpened || rateModaleReadOnlyOpened"
    >
      <rate-restaurant-modale
        v-if="rateModaleOpened"
        :restaurant-id="rateRestaurantId"
      />
      <rate-restaurant-modale-read-only
        v-if="rateModaleReadOnlyOpened"
        @close-modale="closeRateModale"
        :review="review"
      />
    </modale>

    <!--Router View-->
    <router-view
      @as-logged-in="isLoggedIn = true"
      @open-rate-modale="(restaurant_id) => openRateModale(restaurant_id)"
      @open-rate-modale-read-only="(review) => openRateModaleReadOnly(review)"
    />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modale from "./components/Modales/Modale.vue";
import RateRestaurantModale from "./components/Modales/RateRestaurantModale.vue";
import RateRestaurantModaleReadOnly from "./components/Modales/RateRestaurantModaleReadOnly.vue";
import NavigationBar from "./components/NavigationBar.vue";
import "./stylesheets/home.css";

export default {
  name: "app",
  components: {
    NavigationBar,
    Modale,
    RateRestaurantModale,
    RateRestaurantModaleReadOnly,
  },
  data() {
    return {
      isLoggedIn: false,
      rateModaleOpened: false,
      rateModaleReadOnlyOpened: false,
      rateRestaurantId: null,
      review: {},
    };
  },
  methods: {
    openRateModale(restaurant_Id) {
      this.rateRestaurantId = restaurant_Id;
      this.rateModaleOpened = true;
    },
    openRateModaleReadOnly(review) {
      this.review = review;
      this.rateModaleReadOnlyOpened = true;
    },
    closeRateModale() {
      this.rateModaleOpened = false;
      this.rateModaleReadOnlyOpened = false;
      this.rateRestaurantId = null;
    },
    handleDocumentClick(event) {
      //Un-collapse the navbar if clicking out of it
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
