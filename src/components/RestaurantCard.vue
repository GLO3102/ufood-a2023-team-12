<template>
  <div
    class="restaurant_card d-flex flex-column justify-content-start align-items-center"
  >
    <div
      class="restaurant_card_clickable d-flex flex-column align-items-center"
      @click="this.$router.push('/restaurant/' + props.restaurant.id)"
    >
      <div class="restaurant_image">
        <img
          :src="props.restaurant.pictures[2]"
          :alt="props.restaurant.name + ' Image'"
        />
      </div>
      <div class="restaurant_info">
        <h2>{{ props.restaurant.name }}</h2>
        <div>
          <span class="highlight">Address:</span>
          {{ props.restaurant.address }}
        </div>
        <div>
          <span class="highlight">Price Range:</span>
          {{ getFilterPriceName(props.restaurant.price_range) }}
        </div>
        <div>
          <span class="highlight">Genre:</span>
          {{ props.restaurant.genres.join(", ") }}
        </div>
        <RatingStars :rating="props.restaurant.rating" />
      </div>
    </div>
    <div class="button_section">
      <button
        @click="emit('openRateModale', props.restaurant.id)"
        class="rateBtn btn btn-success"
      >
        Mark as visited
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import { getFilterPriceName } from "./Utils.js";
import RatingStars from "./RatingStars.vue";

const visited = ref(false);
const localStoragePopulated = ref(false);
const isRatingModaleOpened = ref(false);
const emit = defineEmits(["openRateModale"]);
const props = defineProps({
  restaurant: Object,
});

function setVisited() {
  visited.value = true;
}
</script>

<style scoped>
.cardStars {
  color: rgba(51, 92, 28, 0.514);
}
#cardRouterLink {
  text-decoration: none;
  color: black;
}
.restaurant_card_clickable:hover {
  background-color: #cfb8a6;
  cursor: pointer;
}
.restaurant_card_clickable {
  border: 1px solid #000;
  border-radius: 0.5rem;
  gap: 1rem;
  background-color: #cec6be;
  margin-bottom: 7px;
}
.visitedBtn {
  width: fit-content;
}
.rateBtn {
  width: fit-content;
}
.restaurant_info > h1 h2 h3 {
  overflow: hidden;
}
.restaurant_info > * {
  text-align: center;
  margin: 10px auto 10px auto;
}
.restaurant_info h2 {
  font-size: 22px;
  color: #5e503f;
}
.button_section {
  width: 100%;
  height: 100%;
}
.button_section > .btn {
  border: 1px solid #000;
  border-radius: 0.5rem;
}
</style>
