<script setup>
import { onMounted } from "vue";
import { getRestaurants, getRestaurantById, getVisitsByRestaurantId } from "../api/restaurants.js";
import {getAllGenres} from "../api/filters.js";


const restaurants = ref([]);
// console.log("rest1 ", restaurants);
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
                  <p>Address: {{ restaurant.address }}</p>
                  <h3>Price Range: {{ restaurant.price_range }}</h3>
                  <h3>Genre: {{ restaurant.genres }}</h3>
                  <div class="restaurant_star">
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <!-- <section class="restaurant" id="restaurant">
        <div class="restaurant_box">
          <div class="restaurant_card">
            <div class="restaurant_image">
              <router-link class="nav-link" to="/restaurant">
                <img
                  src="https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Restaurant A Image"
                />
              </router-link>
            </div>

            <div class="restaurant_info">
              <h2>Gourmet Corner</h2>
              <p>Address: 123 Republic Street</p>
              <h3>Price Range: Cheap</h3>
              <h3>Genre: Fast Food</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>
            <div class="restaurant_info">
              <h2>Savory Delights</h2>
              <p>Address: 456 Elm Avenue</p>
              <h3>Price Range: Expensive</h3>
              <h3>Genre: Healthy Food</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>

            <div class="restaurant_info">
              <h2>Taste Sensations</h2>
              <p>Address: 999 Savor Street</p>
              <h3>Price Range: Moderate</h3>
              <h3>Genre: Desert</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>
            <div class="restaurant_info">
              <h2>Street Cafe</h2>
              <p>Address: 101 Gourmet Road</p>
              <h3>Price Range: Moderate</h3>
              <h3>Genre: Breakfast</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1653542773816-3922a928b28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>
            <div class="restaurant_info">
              <h2>The Gourmet</h2>
              <p>Address: 555 Delight Drive</p>
              <h3>Price Range: Expensive</h3>
              <h3>Genre: Asian</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>
            <div class="restaurant_info">
              <h2>Palace of Tastes</h2>
              <p>Address: 369 Foodie Lane</p>
              <h3>Price Range: Cheap</h3>
              <h3>Genre: Desert</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>
            <div class="restaurant_info">
              <h2>Yummy Pizza</h2>
              <p>Address: 777 Star Street</p>
              <h3>Price Range: Cheap</h3>
              <h3>Genre: Fast Food</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>

            <div class="restaurant_info">
              <h2>Savory Delights</h2>
              <p>Address: 55 Republic Street</p>
              <h3>Price Range: Moderate</h3>
              <h3>Genre: Healthy Food</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1564327368633-151ef1d45021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>

            <div class="restaurant_info">
              <h2>Cafe Serendipity</h2>
              <p>Address: 123 Republic Street</p>
              <h3>Price Range: Cheap</h3>
              <h3>Genre: Breakfast</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1617196034596-33d3311524c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>
            <div class="restaurant_info">
              <h2>Suchi and Movie</h2>
              <p>Address: 587 Star Street</p>
              <h3>Price Range: Moderate</h3>
              <h3>Genre: Asian</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://plus.unsplash.com/premium_photo-1675806257134-2d3e30833d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>

            <div class="restaurant_info">
              <h2>Parisian Choice</h2>
              <p>Address: 789 Oak Lane</p>
              <h3>Price Range: Moderate</h3>
              <h3>Genre: Desert</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
              </div>
            </div>
          </div>

          <div class="restaurant_card">
            <div class="restaurant_image">
              <a href="#">
                <img
                  src="https://images.unsplash.com/photo-1625940951329-4e8d09f87692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
                  alt="Restaurant A Image"
                />
              </a>
            </div>

            <div class="restaurant_info">
              <h2>G_star</h2>
              <p>Address: 78 Gourmet Road</p>
              <h3>Price Range: Moderate</h3>
              <h3>Genre: Fast Food</h3>
              <div class="restaurant_star">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              </div>
            </div>
          </div>
        </div>
      </section> -->
    </div>
  </div>
</template>
