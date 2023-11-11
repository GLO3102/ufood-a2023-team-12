<template>
  <div class="user-section container">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <hr />
    <h4>Score</h4>
    <div>
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
    </div>
    <hr />
    <div class="select-box">
      <h3>Recently Visited Restaurants</h3>
      <select
        v-model="selectedValue"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected value="1">List with results</option>
        <option value="0">List with no results</option>
      </select>
    </div>

    <div v-if="selectedValue === '0'">
      <p class="pt-2">No restaurant recently visited</p>
      <router-link class="nav-link" to="/">
        <button class="back-button">See all restaurants</button>
      </router-link>
    </div>
      <section v-else class="restaurant" id="restaurant">
        <div
          class="restaurant_box pt-5"
        >
        <restaurant-card-user-page v-for="(visit, index) in visits" :key="visit.id"
        :restaurant="restaurants[index]"
        @open-rate-modale-read-only="viewRating(visit)"
      >
      </restaurant-card-user-page>
        </div>
      </section>
      
    <hr />
    <section>
      <CreateFavoritesList />
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated } from "vue";
import * as api from "../api/restaurants";
import CreateFavoritesList from "../components/favorites/CreateFavoritesList.vue";
import RestaurantCardUserPage from "../components/RestaurantCardUserPage.vue";

const isModaleOpen = ref(false);
const selectedValue = ref("1");
let visits = [];
let restaurants = [];

const emit = defineEmits(["openRateModaleReadOnly"]);

//Juste un restaurant hardcodé
const restaurant = {
  opening_hours: {
    sunday: "11:00-21:00",
    monday: "11:30-22:00",
    tuesday: "11:30-22:00",
    wednesday: "11:30-22:00",
    thursday: "11:30-22:00",
    friday: "11:30-22:00",
    saturday: "11:00-22:00",
  },
  pictures: [
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/121ad2e3-dffb-4a7b-82ef-3eea9c337750.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/5635dd10-ac44-4042-8a10-a551f716aff3.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/d5ee5ec5-c82c-4e38-be50-129295f05499.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/c7a8fea4-8b3c-42bd-bd66-5a8009233758.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/8bf92b33-66ed-4b61-b1c8-cc7e30fee54b.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/69cef28c-31d9-4e02-8295-86855cea5611.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/485ed792-6358-4ffe-baf4-623772b4dcb0.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/66cf7bd7-3aa8-4a86-bc14-ae2782879104.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/36b736ba-b98b-4cd3-8c6e-8f47d3854d53.jpg",
    "https://ufood.s3-us-west-2.amazonaws.com/pictures/3c207c0d-db68-4e24-a5f3-ed1fa919ccdd.jpg",
  ],
  name: "Queues de Castor",
  tel: "(418) 694-1444",
  address: "28 Boulevard Champlain, Québec, QC G1K 4H7, Canada",
  price_range: 1,
  rating: 3.703021631226677,
  genres: ["desserts"],
  id: "5f31fc6155d7790550c08afe",
};
onMounted(() => {
  getVisits();
})

function getVisits() {
  api.getUserVisits().then((data)=> {
    visits = data;
    
    visits.forEach(visit => {
      api.getRestaurantById(visit.restaurant_id).then((data) => {
        restaurants.push(data);
      })
      
    });
  })
}

function getRestaurant(visit) {
  api.getRestaurantById(visit.restaurant_id).then((data) => {
    return data;
  })
}

function viewRating(visit) {
  emit("openRateModaleReadOnly", visit);
}

function closeModale() {
  isModaleOpen.value = false;
}

const user = computed(() => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return userData;
});
</script>

<style>
.user-section {
  margin-top: 100px;
  color: #fff;
}

.select-box {
  display: inline-block;
}
</style>
