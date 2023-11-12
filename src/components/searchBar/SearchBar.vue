<template>
  <div class="search-container">
    <input
      type="search"
      v-model="searchQuery"
      @input="onInput"
      placeholder="Search..."
      class="search-input"
    />
  </div>
</template>

<script setup>
let debounceTimeout;
let searchQuery = "";

function onInput() {
  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(() => {
    this.performSearch();
  }, 300);
}

function performSearch() {
  console.log("Searching for:", this.searchQuery);
}
</script>

<style scoped>
.search-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}
.search-input:focus {
  border-color: #007bff;
  outline: none;
}
</style>
