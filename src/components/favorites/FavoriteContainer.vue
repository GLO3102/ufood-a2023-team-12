<template>
  <div>
    <h3 class="mt-3">Favorite Restaurants</h3>
    <div class="accordion-body">
      <strong>New List</strong>
      <div v-if="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      <form @submit.prevent="submitFavoritesList">
        <input type="text" v-model="listName" placeholder="Enter list name" />
        <button type="submit">Create List</button>
      </form>
    </div>

    <div v-if="allLists.length > 0" class="favorite-lists mt-3">
      <div class="d-flex justify-content-space-between">
        <div>
          <favorite-list-item
            v-for="list in allLists"
            :key="list.id"
            :list="list"
            :isSelected="selectedList && list.id === selectedList.id"
            @delete-list="deleteLastName"
            @update-list="saveListName"
            @select-list="selectList"
          />
        </div>
        <div
          v-if="selectedList"
          :class="{ 'selected-list': selectedList }"
          style="flex-grow: 1; margin: 0 3rem"
        >
          <h4 class="text-center">
            {{ selectedList.name }}
          </h4>
          <div
            v-if="detailedRestaurantList.length > 0"
            class="d-flex restaurant-container"
          >
            <div
              v-for="restaurant in detailedRestaurantList"
              :key="restaurant.id"
            >
              <RestaurantCard
                @open-rate-modale="
                  (e) => {
                    emit('openRateModale', e);
                  }
                "
                :restaurant="restaurant"
              />
              <button @click="removeRestaurant(restaurant.id)">remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import FavoriteListItem from "./FavoriteListItem.vue";
import RestaurantCard from "../RestaurantCard.vue";
import {
  createFavoritesList,
  deleteFavoriteList,
  updateFavoriteListName,
  removeRestaurantfromList,
} from "../../api/favorites.js";
import { getRestaurantById } from "../../api/restaurants";
import { getFavoriteLists } from "../../api/user";
import { validateTextInput } from "../Utils.js";

const listName = ref("");
const selectedList = ref(null);
const errorMessage = ref("");
const allLists = ref([]);
const detailedRestaurantList = ref([]);
const emit = defineEmits(["openRateModale"]);

const userData = computed(() => {
  return JSON.parse(localStorage.getItem("user"));
});

const submitFavoritesList = async () => {
  errorMessage.value = "";
  try {
    validateTextInput(listName.value);
    const newList = await createFavoritesList(
      listName.value,
      userData.value.email,
    );
    allLists.value.push(newList);
    listName.value = "";
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};

const getFavoritesList = async () => {
  try {
    const response = await getFavoriteLists(userData.value.id);
    allLists.value = response.items;
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};

const saveListName = async ({ id, name }) => {
  try {
    await updateFavoriteListName(id, name);
    const listIndex = allLists.value.findIndex((list) => list.id === id);
    if (listIndex !== -1) {
      allLists.value[listIndex].name = name;
    }
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};

const deleteLastName = async (listId) => {
  try {
    await deleteFavoriteList(listId);
    allLists.value = allLists.value.filter((list) => list.id !== listId);
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};

const selectList = async (list) => {
  selectedList.value = list;
  detailedRestaurantList.value = [];
  if (list.restaurants && list.restaurants.length > 0) {
    detailedRestaurantList.value = await Promise.all(
      list.restaurants.map((restaurant) => getRestaurantById(restaurant.id)),
    );
  }
};

const removeRestaurant = async (restaurantId) => {
  try {
    await removeRestaurantfromList(selectedList.value.id, restaurantId);
    detailedRestaurantList.value = detailedRestaurantList.value.filter(
      (list) => list.id !== restaurantId,
    );
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};

onMounted(getFavoritesList);
</script>

<style scoped>
@media (max-width: 820px) { 
  .favorite-lists .d-flex {
    flex-direction: column;
  }

  .selected-list {
    margin-top: 1rem;
  }

  .restaurant-container {
    order: 3;
}
}
</style>
