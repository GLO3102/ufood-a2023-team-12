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

    <rate-restaurant-modale-read-only v-if="rateModaleReadOnlyOpened"
    @close-modale="rateModaleReadOnlyOpened = false"
    :review="review"
    />

    <!--Router View-->
    <router-view 
      @as-logged-in="isLoggedIn = true"
      @open-rate-modale="openRateModale" 
      @open-rate-modale-read-only="(review) => openRateModaleReadOnly(review)"
      @close-rate-modale="closeRateModale" 
      />
  </div>
</template>

<script>
  import "bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import RateRestaurantModale from "./components/Modales/RateRestaurantModale.vue";
  import RateRestaurantModaleReadOnly from "./components/Modales/RateRestaurantModaleReadOnly.vue";
  import NavigationBar from "./components/NavigationBar.vue";
  import "./stylesheets/home.css";

  export default {
    name: "app",
    components: {
      NavigationBar,
      RateRestaurantModale,
      RateRestaurantModaleReadOnly
    },
    data() {
      return {
        isLoggedIn: false,
        rateModaleOpened: false,
        rateModaleReadOnlyOpened: false,
        rateRestaurantId: null,
        review: {
          id: "12345",
          restaurant_id: "5f31fc6155d7790550c08afe",
          comment: "very good restaurant",
          rating: 5,
          date: "2020-08-11T00:17:58Z"}
        };
    },
    methods: {
      openRateModale(restaurant_Id){
        this.rateModaleOpened = true;
        this.rateRestaurantId = restaurant_Id;
      },
      openRateModaleReadOnly(review){
        this.review = review;
        this.rateModaleReadOnlyOpened = true;
      },
      closeRateModale(){
        this.rateModaleOpened = false;
        this.rateModaleReadOnlyOpened = false;
        this.rateRestaurantId = null;
      }
    },
    updated() {

      if(this.rateModaleOpened || this.rateModaleReadOnlyOpened)
        document.getElementById("modaleContainer").showModal();
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
