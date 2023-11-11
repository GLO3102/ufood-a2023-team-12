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
      <div v-for="list in allLists" :key="list.id">
        <div class="card mt-1" style="width: 18rem">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h4 v-if="editedListId !== list.id" class="card-title mb-0">
                {{ list.name }}
              </h4>
              <input
                v-else
                type="text"
                v-model="editedName"
                @keyup.enter="saveListName(list.id)"
                @blur="saveListName(list.id)"
                class="form-control"
              />

              <div v-if="editedListId !== list.id">
                <font-awesome-icon
                  icon="fa-solid fa-pen"
                  @click="startEdit(list)"
                  class="icon-edit me-2"
                />
                <font-awesome-icon
                  icon="fa-solid fa-trash-can"
                  @click="deleteLastName(list.id)"
                  class="icon-delete"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  createFavoritesList,
  deleteFavoriteList,
  updateFavoriteListName,
} from "../../api/favorites.js";
import { getFavoriteLists } from "../../api/user.js";
import { validateTextInput } from "../Utils.js";

const listName = ref("");
const errorMessage = ref("");
const createdList = ref(null);
const allLists = ref([]);
const editedListId = ref(null);
const editedName = ref("");
const userData = JSON.parse(localStorage.getItem("user"));

const submitFavoritesList = async () => {
  errorMessage.value = "";
  try {
    validateTextInput(listName.value);
    const newList = await createFavoritesList(listName.value, userData.email);
    createdList.value = newList;
    listName.value = "";
    getFavoritesList();
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};

const getFavoritesList = async () => {
  try {
    const response = await getFavoriteLists(userData.id);
    allLists.value = response.items;
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};

const startEdit = (list) => {
  editedListId.value = list.id;
  editedName.value = list.name;
};

const saveListName = async (id) => {
  await updateFavoriteListName(id, editedName.value);
  const listIndex = allLists.value.findIndex((list) => list.id === id);
  if (listIndex !== -1) {
    allLists.value[listIndex].name = editedName.value;
  }
  editedListId.value = null;
};

const deleteLastName = async (listId) => {
  try {
    await deleteFavoriteList(listId);
    getFavoritesList();
  } catch (error) {
    errorMessage.value = error.message || "An unexpected error occurred.";
  }
};

onMounted(getFavoritesList);
</script>

<style scoped>
.icon-edit,
.icon-delete {
  cursor: pointer;
}
.icon-edit {
  color: #22333b;
}

.icon-delete {
  color: red;
}
</style>
