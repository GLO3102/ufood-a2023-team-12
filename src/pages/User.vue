<template>
  <div class="user-container d-flex justify-content-center">
    <div class="user-section d-flex flex-column align-items-center">
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
      <hr />
      <h4><font-awesome-icon icon="fa-solid fa-star" /> {{ user.rating }}</h4>
      <hr />
      <div class="select-box">
        <h3>Recently Visited Restaurants</h3>
        <select v-model="selectedValue" class="form-select">
          <option value="0">List with no results</option>
          <option selected value="1">List with results</option>
        </select>
      </div>

      <div v-if="selectedValue === '0'">
        <p class="pt-2">No restaurant recently visited</p>
        <router-link class="nav-link" to="/">
          <button class="back-button">See all restaurants</button>
        </router-link>
      </div>
      <div
        v-if="!isLoading && restaurants.length > 0"
        class="cardContainer d-flex flex-row flex-wrap pt-3 justify-content-center"
      >
        <restaurant-card
          v-for="(visit, index) in visits"
          :key="visit.id"
          :restaurant="restaurants[index]"
          :is-user-page="true"
          @open-rate-modale-read-only="viewReview(visit)"
        />
      </div>

      <hr />
      <section class="d-flex w-100 justify-content-start">
        <FavoriteContainer />
      </section>
    </div>

    <rate-restaurant-modale-read-only
      v-if="rateModaleOpened"
      :visit="review"
      @close-modale="rateModaleOpened = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated } from "vue";
import { useRoute } from 'vue-router';
import * as api from "../api/restaurants";
import * as apiUser from "../api/user";
import FavoriteContainer from "../components/favorites/FavoriteContainer.vue";
import RestaurantCard from "../components/RestaurantCards/RestaurantCard.vue";
import RateRestaurantModaleReadOnly from "../components/Modales/RateRestaurantModaleReadOnly.vue";

const selectedValue = ref("1");
const visits = ref([]);
const restaurants = ref([]);
const rateModaleOpened = ref(false);
const review = ref({});
const user = ref({})

const route = useRoute();

onMounted(async () => {
  try {

    user.value = await apiUser.getUserInfo(route.params.id);
    console.log(user.value)

    const fetchedVisits = await api.getUserVisits(route.params.id);
    visits.value = fetchedVisits;

    const tempRestaurants = await getRestaurantsAsync(fetchedVisits);
    restaurants.value = tempRestaurants;
  } catch {
    console.error("Failed to fetch visits:");
  } finally {
    selectedValue.value = "1";
  }
});

async function getRestaurantsAsync(visits) {
  let tempRestaurants = [];

  const apiPromises = visits.map((visit) => {
    return api.getRestaurantById(visit.restaurant_id).then((data) => {
      return data;
    });
  });

  try {
    tempRestaurants = await Promise.all(apiPromises);
  } catch (error) {
    console.error("Error fetching restaurants", error);
  }

  return tempRestaurants;
}

function viewReview(visit) {
  review.value = visit;
  rateModaleOpened.value = true;
}

</script>

<style>
.user-section {
  width: 80%;
  color: rgb(192, 68, 6);
}

.select-box {
  display: inline-block;
}

.cardContainer {
  width: auto;
}

.user-section {
  padding: 3rem !important;
}

@media (max-width: 990px) {
  .user-section {
    padding: 1rem !important;
  }
}
</style>
