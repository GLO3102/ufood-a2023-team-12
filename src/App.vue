<template>
  <div id="app">

    <!--Naviguation Bar-->
    <navigation-bar :is-logged-in="isLoggedIn" 
      @as-logged-out="isLoggedIn = false"
      />

    <!--Restaurant Rating Modale-->
    <rate-restaurant-modale v-if="rateModaleOpened" 
      @close-modale="rateModaleOpened = false"
      :restaurant-id="rateRestaurantId"
      />

    <!--Router View-->
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
  import NavigationBar from "./components/NavigationBar.vue";
  import "./stylesheets/home.css";

  export default {
    name: "app",
    components: {
      NavigationBar,
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
      },
      closeRateModale(){
        this.rateModaleOpened = false;
        this.rateRestaurantId = null;
      }
    },
    updated() {
        if(this.rateModaleOpened){
            document.getElementById("modaleContainer").showModal();
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
