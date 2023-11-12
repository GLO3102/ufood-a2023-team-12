<template>
  <div id="app">
    <navigation-bar
      :is-logged-in="isLoggedIn"
      @as-logged-out="isLoggedIn = false"
    />

    <modale
      @close-modale="closeModale"
      v-if="rateModaleOpened || rateModaleReadOnlyOpened"
    >
      <rate-restaurant-modale
        v-if="rateModaleOpened"
        @open-pop-up-modale="(message) => openPopUp(message)"
        @close-modale="closeModale"
        @close-rating-modale="closeRatingModale"
        :restaurant-id="rateRestaurantId"
      />
      <rate-restaurant-modale-read-only
        v-if="rateModaleReadOnlyOpened"
        :visit="visit"
      />
    </modale>
    <pop-up-modale
      v-if="popUpOpened"
      @close-pop-up="closePopUp"
      :message="popUpMessage"
    />

    <router-view
      @as-logged-in="isLoggedIn = true"
      @open-rate-modale="(restaurant_id) => openRateModale(restaurant_id)"
      @open-rate-modale-read-only="(visit) => openRateModaleReadOnly(visit)"
    />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modale from "./components/Modales/Modale.vue";
import PopUpModale from "./components/Modales/PopUpModale.vue";
import RateRestaurantModale from "./components/Modales/RateRestaurantModale.vue";
import RateRestaurantModaleReadOnly from "./components/Modales/RateRestaurantModaleReadOnly.vue";
import NavigationBar from "./components/NavigationBar.vue";
import "./stylesheets/home.css";

export default {
  name: "app",
  components: {
    NavigationBar,
    Modale,
    PopUpModale,
    RateRestaurantModale,
    RateRestaurantModaleReadOnly,
  },
  data() {
    return {
      isLoggedIn: false,
      rateModaleOpened: false,
      rateModaleReadOnlyOpened: false,
      rateRestaurantId: null,
      visit: {},
      popUpMessage: "",
      popUpOpened: false,
    };
  },
  methods: {
    openRateModale(restaurant_Id) {
      this.rateRestaurantId = restaurant_Id;
      this.rateModaleOpened = true;
    },
    openRateModaleReadOnly(visit) {
      this.visit = visit;
      this.rateModaleReadOnlyOpened = true;
    },
    openPopUp(message) {
      this.popUpMessage = message;
      this.popUpOpened = true;
    },
    closePopUp() {
      this.popUpOpened = false;
    },
    closeRatingModale() {
      this.rateModaleOpened = false;
    },
    closeModale() {
      this.rateModaleOpened = false;
      this.rateModaleReadOnlyOpened = false;
      this.rateRestaurantId = null;
    },
    handleDocumentClick(event) {
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar) {
        navbar.classList.remove("show");
      }
    },
  },
  mounted() {
    if(!this.isLoggedIn){
      localStorage.removeItem('user');
    }
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
