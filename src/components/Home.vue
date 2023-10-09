<script setup>
import { onMounted } from "vue";
import { getRestaurants, getRestaurantById, getVisitsByRestaurantId } from "../api/restaurants.js";
import {getAllGenres} from "../api/filters.js";


const restaurants = ref([]);
console.log("rest1 ", restaurants);
onMounted(async () => {
  try {
    const fetchedRestaurants = await getRestaurants();
    restaurants.value = fetchedRestaurants;

    
  } catch (e) {
    console.log(e);
  }
});
import { ref } from "vue";
const filterPrices = ref(["Cheap", "Moderate", "Expensive"]);

const filterGenres = ref([]);
onMounted(async () => {
  try {
    const genres = await getAllGenres();
    filterGenres.value = genres; // Update the reactive reference with the fetched data
  } catch (e) {
    console.log(e);
  }
});

const filterRatings = ref([1, 2, 3, 4, 5]);

const selectedPrices = ref({
  cheap: false,
  average: false,
  expensive: false,
});

const selectedTypes = ref({
  American: false,
  Asian: false,
  French: false,
  Italian: false,
  "Fast Food": false,
  Healthy: false,
  Breakfast: false,
  Desert: false,
});

const selectedRatings = ref({
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
});

const clearFilters = () => {
  for (const price in selectedPrices.value) {
    selectedPrices.value[price] = false;
  }
  for (const type in selectedTypes.value) {
    selectedTypes.value[type] = false;
  }
  for (const rating in selectedRatings.value) {
    selectedRatings.value[rating] = false;
  }
};

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array(fullStars).fill('<font-awesome-icon icon="fa-solid fa-star" />');

  if (hasHalfStar) {
    stars.push('<font-awesome-icon icon="fa-solid fa-star-half-stroke" />');
  }
  console.log('Stars generated:', stars);
  return stars.join('');
}
</script>

<template>
  <div class="main-container">
    <div class="header-container">
      <div class="header-content">
        <h1 class="header-title alt-font">Taste the World. One Restaurant at a Time.</h1>
        <input
          type="search"
          class="form-control searchbar mt-3"
          placeholder="Search..."
        />
      </div>
    </div>

    <div class="home">
      <div class="filters p-5">
        <div class="accordion" id="accordionFilters">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h6 class="mb-0">Filters</h6>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionFilters"
            >
              <div class="accordion-body">
                <div class="pb-3">
                  <button class="clear-filters" @click="clearFilters">
                    <font-awesome-icon icon="fa-solid fa-xmark" /> Clear Filters
                  </button>
                </div>
                <h6>Price</h6>
                <!-- Price Filters -->
                <div
                  v-for="(price, index) in filterPrices"
                  :key="index"
                  class="form-check"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="price"
                    :id="`filterPrices${index + 1}`"
                    v-model="selectedPrices[price]"
                  />
                  <label :for="`filterPrices${index + 1}`" class="form-check-label">
                    {{ price }}
                  </label>
                </div>
                <hr />
                <h6>Cuisine / Food Types</h6>
                <!-- Cuisine / Type Filters -->
                <div v-for="(type, index) in filterGenres" :key="index" class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="type"
                    :id="`filterGenres${index + 1}`"
                    v-model="selectedTypes[type]"
                  />
                  <label :for="`filterGenres${index + 1}`" class="form-check-label">
                    {{ type }}
                  </label>
                </div>

                <hr />
                <h6>Ratings</h6>
                <!-- Ratings Filters -->
                <div v-for="rating in filterRatings" :key="rating" class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="rating"
                    :id="`filterRatings${rating}`"
                    v-model="selectedRatings[rating]"
                  />
                  <label :for="`filterRatings${rating}`" class="form-check-label">
                    <font-awesome-icon
                      v-for="n in rating"
                      :key="n"
                      icon="fa-solid fa-star"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Restaurant -->

      <section class="restaurant" id="restaurant">
        <div class="restaurant_box">
            <div classe="Boucle_for" v-for="restaurant in restaurants" :key="restaurant.id">
              <div class="restaurant_card">
                <div class="restaurant_image">
                  <router-link :to="'/restaurant/' + restaurant.id">
                    <img
                      :src="restaurant.pictures[2]"
                      :alt="restaurant.name + ' Image'"
                    />
                  </router-link>
                </div>

                <div class="restaurant_info">
                  <h2>{{ restaurant.name }}</h2>
                  <p><span class="highlight">Address:</span> {{ restaurant.address }}</p>
                  <h3><span class="highlight">Price Range:</span> {{ restaurant.price_range }}</h3>
                  <h3><span class="highlight">Genre:</span> {{ restaurant.genres }}</h3>
                  <div class="restaurant_star" v-html="generateStarRating(restaurant.rating)"></div>
                    <!-- {{ generateStarRating(restaurant.rating) }} -->
                  
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  </div>
</template>
