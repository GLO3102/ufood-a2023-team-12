<template>
  <div class="d-flex justify-content-center">

    <div class="user-section d-flex flex-column align-items-center p-5">
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
      >
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
  <div class="d-flex pt-3" v-else-if="restaurants.length > 0">
    <div v-if="!isLoading" class="cardContainer d-flex flex-row flex-wrap">
      <restaurant-card-user-page 
      v-for="(visit, index) in visits"
      :key="visit.id"
      :restaurant="restaurants[index]"
      @open-rate-modale-read-only="viewRating(visit)"
      >
    </restaurant-card-user-page>
  </div>
</div>

<hr />
<section>
  <FavoriteContainer />
</section>
</div>
</div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated } from "vue";
import * as api from "../api/restaurants";
import FavoriteContainer from "../components/favorites/FavoriteContainer.vue";
import RestaurantCardUserPage from "../components/RestaurantCardUserPage.vue";

const selectedValue = ref('1');
const visits = ref([]);
const restaurants = ref([]);
let tempRestaurants = [];

const emit = defineEmits(["openRateModaleReadOnly"]);

onMounted(async () => {
  try	{
    const fetchedVisits = await api.getUserVisits();
    visits.value = fetchedVisits;

    const tempRestaurants = await getRestaurantsAsync(fetchedVisits);
    restaurants.value = tempRestaurants;
    
  }
  catch{
    console.error("Failed to fetch visits:");
  }
  finally{
    selectedValue.value = '1';
  }
});

async function getRestaurantsAsync(visits) {
  let tempRestaurants = [];

  const apiPromises = visits.map(visit => {
    return api.getRestaurantById(visit.restaurant_id).then(data => {
      return data;
    });
  });

  try {
    tempRestaurants = await Promise.all(apiPromises);
  } catch (error) {
    console.error('Error fetching restaurants', error);
  }

  return tempRestaurants;
}

function viewRating(visit) {
  emit("openRateModaleReadOnly", visit);
}

const user = computed(() => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return userData;
});
</script>

<style>
.user-section {
  width: 80%;
  color: rgb(192, 68, 6);
}

.select-box {
  display: inline-block;
}

.cardContainer{
  width: auto;
}
</style>
