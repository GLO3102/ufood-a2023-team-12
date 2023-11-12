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
            @delete-list="deleteLastName"
            @update-list="saveListName"
          />
        </div>
        <div>
          <h4>Name</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import FavoriteListItem from "./FavoriteListItem.vue";
import {
  createFavoritesList,
  deleteFavoriteList,
  updateFavoriteListName,
} from "../../api/favorites.js";
import { getFavoriteLists } from "../../api/user.js";
import { validateTextInput } from "../Utils.js";

const listName = ref("");
const errorMessage = ref("");
const allLists = ref([]);

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
    console.log(allLists.value);
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

onMounted(getFavoritesList);
</script>

<style scoped></style>
