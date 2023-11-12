<template>
  <div class="user-section container">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <hr />
    <h4><font-awesome-icon icon="fa-solid fa-star" /> {{ user.rating }}</h4>
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
      <div class="restaurant_box pt-5">
        <restaurant-card-user-page
          v-for="(visit, index) in visits"
          :key="visit.id"
          :restaurant="restaurants[index]"
          @open-rate-modale-read-only="viewRating(visit)"
        >
        </restaurant-card-user-page>
      </div>
    </section>

    <hr />
    <section>
      <FavoriteContainer />
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated } from "vue";
import * as api from "../api/restaurants";
import FavoriteContainer from "../components/favorites/FavoriteContainer.vue";
import RestaurantCardUserPage from "../components/RestaurantCardUserPage.vue";

const isModaleOpen = ref(false);
const selectedValue = ref("1");
let visits = [];
let restaurants = [];

const emit = defineEmits(["openRateModaleReadOnly"]);

onMounted(() => {
  getVisits();
});

function getVisits() {
  api.getUserVisits().then((data) => {
    visits = data;

    visits.forEach((visit) => {
      api.getRestaurantById(visit.restaurant_id).then((data) => {
        restaurants.push(data);
      });
    });
  });
}

function getRestaurant(visit) {
  api.getRestaurantById(visit.restaurant_id).then((data) => {
    return data;
  });
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
