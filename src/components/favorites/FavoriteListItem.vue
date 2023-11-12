<template>
  <div class="card mt-1">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <h4 v-if="!isEditing" class="card-title mb-0">
          {{ list.name }}
        </h4>
        <input
          v-else
          type="text"
          v-model="editedName"
          @keyup.enter="saveListName"
          @blur="saveListName"
          class="form-control"
        />
        <div>
          <font-awesome-icon
            icon="fa-solid fa-pen"
            @click="startEdit"
            class="icon-edit me-2"
            v-if="!isEditing"
          />
          <font-awesome-icon
            icon="fa-solid fa-trash-can"
            @click="deleteList"
            class="icon-delete"
            v-if="!isEditing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  list: Object,
});

const emits = defineEmits(["delete-list", "update-list"]);

const isEditing = ref(false);
const editedName = ref("");

const startEdit = () => {
  isEditing.value = true;
  editedName.value = props.list.name;
};

const saveListName = () => {
  if (editedName.value.trim()) {
    emits("update-list", { id: props.list.id, name: editedName.value });
    isEditing.value = false;
  }
};

const deleteList = () => {
  emits("delete-list", props.list.id);
};
</script>

<style scoped>
.card {
  width: 18rem;
}

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
