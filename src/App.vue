<template>
  <div id="app">

    <!--Naviguation Bar-->
    <navigation :is-logged-in="isLoggedIn" 
      @as-logged-out="isLoggedIn = false"
      />

    <!--Restaurant Rating Modale-->
    <rate-restaurant-modale v-if="rateModaleOpened" 
      @close-modale="rateModaleOpened = false"
      :restaurant-id="rateRestaurantId"
      />

    <!--I don't know what that is but it works...-->
    <router-view 
      @as-logged-in="isLoggedIn = true"
      @open-rate-modale="openRateModale" 
      @close-rate-modale="closeRateModale" 
      />
  </div>
</template>

<script>
  import "bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import RateRestaurantModale from "./components/Modales/RateRestaurantModale.vue";
  import Navigation from "./components/Navigation.vue";
  import "./stylesheets/home.css";

  export default {
    name: "app",
    components: {
      Navigation,
      RateRestaurantModale
    },
    data() {
      return {
        isLoggedIn: false,
        rateModaleOpened: false,
        rateRestaurantId: null
      };
    },
    methods: {
      openRateModale(restaurant_Id){
        this.rateModaleOpened = true;
        this.rateRestaurantId = restaurant_Id;
        console.log(restaurant_Id)
      },
      closeRateModale(){
        this.rateModaleOpened = false;
        this.rateRestaurantId = null;
      }
    }
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
