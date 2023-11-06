<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div>
        <h2 class="accordion-header" id="headingOne">
          <button
            class="btn btn-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Create Favorite Restaurant List
          </button>
        </h2>
      </div>
    </div>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <strong>New List</strong>
        <div v-if="errorMessage" class="alert alert-danger">
          {{ errorMessage }}
        </div>
        <form @submit.prevent="submitFavoritesList">
          <input type="text" v-model="listName" placeholder="Enter list name" />
          <button type="submit">Create List</button>
        </form>
        <div v-if="createdList" class="mt-3">
          <h4>{{ createdList.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createFavoritesList } from "../../api/favorites.js";
import { validateTextInput } from "../Utils.js";

const listName = ref("");
const errorMessage = ref("");
const createdList = ref(null);

const submitFavoritesList = async () => {
  errorMessage.value = "";
  try {
    validateTextInput(listName.value);
    const userDataEmail = "test@gmail.com";
    const newList = await createFavoritesList(listName.value, userDataEmail);
    console.log("List created successfully:", newList);
    createdList.value = newList;
    listName.value = "";
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};
</script>
