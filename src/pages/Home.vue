<template>
  <div class="main-container">
    <div class="header-container">
      <div class="header-content">
        <h1 class="header-title alt-font">
          Taste the World. One Restaurant at a Time.
        </h1>
        <input
          type="search"
          class="form-control searchbar mt-3"
          placeholder="Search..."
        />
      </div>
    </div>

    <div class="d-flex restaurants-section">
      <div class="p-5">
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
                <div
                  v-for="price in filterPrices"
                  :key="price"
                  class="form-check"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="price"
                    :id="`filterPrices${price}`"
                    v-model="selectedPrices[price]"
                  />
                  <label :for="`filterPrices${price}`" class="form-check-label">
                    {{ getFilterPriceName(price) }}
                  </label>
                </div>

                <hr />
                <h6>Cuisine / Food Types</h6>

                <div
                  v-for="(type, index) in filterTypes"
                  :key="index"
                  class="form-check"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="type"
                    :id="`filterTypes${index + 1}`"
                    v-model="selectedTypes[type]"
                  />
                  <label
                    :for="`filterTypes${index + 1}`"
                    class="form-check-label"
                  >
                    {{ type }}
                  </label>
                </div>

                <hr />
                <h6>Ratings</h6>

                <div
                  v-for="rating in filterRatings"
                  :key="rating"
                  class="form-check"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="rating"
                    :id="`filterRatings${rating}`"
                    v-model="selectedRatings[rating]"
                  />
                  <label
                    :for="`filterRatings${rating}`"
                    class="form-check-label"
                  >
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

      <section class="w-100">
        <div class="text-center pt-5" v-if="isLoading">
          <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h2>Loading restaurants...</h2>
        </div>
        <div
          class="d-flex flex-wrap justify-content-center pt-5"
          v-else-if="filtered_restaurants && filtered_restaurants.length"
        >
          <restaurant-card
            v-for="restaurant in filtered_restaurants"
            :is-home-page="true"
            :key="restaurant.id"
            @open-rate-modale="
              (e) => {
                emit('openRateModale', e);
              }
            "
            :restaurant="restaurant"
          ></restaurant-card>
        </div>
        <div class="text-center pt-5" v-else>
          <h2>No result</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import { getRestaurants } from "../api/restaurants.js";
import { getAllFilterTypes } from "../api/filters.js";
import RestaurantCard from "../components/RestaurantCards/RestaurantCard.vue";

const restaurants = ref([]);
const filtered_restaurants = ref([]);
const isLoading = ref(true);

const emit = defineEmits(["openRateModale"]);

onMounted(async () => {
  try {
    const fetchedRestaurants = await getRestaurants();
    restaurants.value = fetchedRestaurants;
    filtered_restaurants.value = fetchedRestaurants;
  } catch (e) {
    console.error("Failed to fetch restaurants:", e);
  } finally {
    isLoading.value = false;
  }
});

const filterPrices = ref([1, 2, 3]);
const selectedPrices = reactive({});

filterPrices.value.forEach((range) => {
  selectedPrices[range] = false;
});

const getFilterPriceName = (price) => {
  switch (price) {
    case 1:
      return "Cheap";
    case 2:
      return "Moderate";
    case 3:
      return "Expensive";
  }
};

const filterTypes = ref([]);
const selectedTypes = reactive({});

onMounted(async () => {
  try {
    const genres = await getAllFilterTypes();
    filterTypes.value = genres;
    genres.forEach((genre) => {
      selectedTypes[genre] = false;
    });
  } catch (e) {
    console.log(e);
  }
});

const filterRatings = ref([5, 4, 3, 2, 1]);
const selectedRatings = reactive({});

filterRatings.value.forEach((rating) => {
  selectedRatings[rating] = false;
});

const clearFilters = () => {
  for (const price in selectedPrices) {
    selectedPrices[price] = false;
  }
  for (const type in selectedTypes) {
    selectedTypes[type] = false;
  }
  for (const rating in selectedRatings) {
    selectedRatings[rating] = false;
  }
};

watch(
  [selectedPrices, selectedTypes, selectedRatings],
  ([newValPrice, newValType, newValRating]) => {
    const getSelectedKeys = (obj, defaultValue) => {
      const selectedKeys = Object.keys(obj).filter((key) => obj[key]);
      return selectedKeys.length > 0 ? selectedKeys : defaultValue;
    };

    const priceFilterList = getSelectedKeys(newValPrice, ["1", "2", "3"]).map(
      Number
    );
    const typeFilterList = getSelectedKeys(newValType, filterTypes.value);
    const ratingFilterList = getSelectedKeys(
      newValRating,
      filterRatings.value
    ).map(Number);

    filtered_restaurants.value = restaurants.value.filter(
      (restaurant) =>
        priceFilterList.includes(restaurant.price_range) &&
        typeFilterList.some((el) => restaurant.genres.includes(el)) &&
        ratingFilterList.includes(Math.floor(restaurant.rating))
    );
  }
);
</script>

<style scoped>

.header-container {
  background-image: url("https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80;");
  height: 400px;
  width: 100%;

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header-container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.header-content {
  z-index: 2;
}
.searchbar {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 25px;
}
.header-title {
  color: #fff;
  margin-bottom: 20px;
}
.form-check-label {
  font-size: 14px;
  color: #0A0908;
}
.clear-filters {
  font-size: 14px;
}
.accordion {
  border-radius: 0.5rem;
  min-width: 250px;
}
.accordion-item{
  border: 1px solid black;
  background-color: #EAE0D5;
}
.accordion-button,
.accordion-button:not(.collapsed) {
  background-color: #5E503F;
  color: #EAE0D5;
}

@media screen and (max-width: 990px) {

  .restaurants-section {
    flex-direction: column;
  }
}
</style>
