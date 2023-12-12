<template>
  <div class="user-container d-flex justify-content-center">
    <div class="user-section d-flex flex-column align-items-center">
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
      <hr />
      <h4><font-awesome-icon icon="fa-solid fa-star" /> {{ user.rating }}</h4>
      <hr />
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
      <div class="d-flex flex-column justify-content-center" v-else-if="!isLoading && restaurants.length == 0">
        <p class="pt-2">No restaurant recently visited</p>
        <router-link class="nav-link" to="/">
          <button class="btn btn-success back-button">See all restaurants</button>
        </router-link>
      </div>

      <hr />
      <section v-if="!isLoading" class="d-flex w-100 justify-content-start">
        <FavoriteContainer 
        :is-user-page-owner="isUserPageOwner"
        :user="user"/>
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
import { ref, computed, onMounted, onUpdated, watch } from "vue";
import { useRoute } from "vue-router";
import * as api from "../api/restaurants";
import * as apiUser from "../api/user";
import FavoriteContainer from "../components/favorites/FavoriteContainer.vue";
import RestaurantCard from "../components/RestaurantCards/RestaurantCard.vue";
import RateRestaurantModaleReadOnly from "../components/Modales/RateRestaurantModaleReadOnly.vue";

const route = useRoute();
const selectedValue = ref("1");
const visits = ref([]);
const restaurants = ref([]);
const rateModaleOpened = ref(false);
const review = ref({});
const isLoading = ref(true);
const user = ref({});
const isUserPageOwner = ref(false);

onMounted(async () => {
  try {
    isLoading.value = true;
    user.value = await apiUser.getUserInfo(route.params.id);
    const fetchedVisits = await api.getUserVisits(route.params.id);
    visits.value = fetchedVisits;
    const tempRestaurants = await getRestaurantsAsync(fetchedVisits);
    restaurants.value = tempRestaurants;
    isUserPageOwner.value = checkIfUserPageOwner();
  } catch {
    console.error("Failed to fetch visits:");
  } finally {
    selectedValue.value = "1";
    isLoading.value = false;
  }
});

watch(
  () => route.params.id,
  async (newVal, oldVal) => {
    try {
      isLoading.value=true;
      user.value = await apiUser.getUserInfo(newVal);
      const fetchedVisits = await api.getUserVisits(newVal);
      visits.value = fetchedVisits;
      const tempRestaurants = await getRestaurantsAsync(fetchedVisits);
      restaurants.value = tempRestaurants;
      isUserPageOwner.value = checkIfUserPageOwner();
    } catch (error) {
      console.error("Failed to fetch user");
    }finally{
      isLoading.value = false;
    }
  }
);

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

function checkIfUserPageOwner() {
  if(localStorage.getItem('user') != null){
    if(JSON.parse(localStorage.getItem('user')).id == user.value.id)
      return true
    else
      return false;
  }
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

.back-button{
  width: 100%;
}

@media (max-width: 990px) {
  .user-section {
    padding: 1rem !important;
  }
}
</style>
