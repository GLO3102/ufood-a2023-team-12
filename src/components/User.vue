<template>
  <div class="user-section container">
    <h1>John Doe</h1>
    <p>john.doe@gmail.com</p>
    <hr />
    <h4>Score</h4>
    <div>
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-solid fa-star" />
      <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
    </div>
    <hr />
    <div class="select-box">
      <h4>Recently Visited Restaurants</h4>
      <select
        v-model="selectedValue"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected value="1">List with results</option>
        <option value="0">List with no results</option>
      </select>
    </div>

    <div v-if="selectedValue == '0'">
      <p class="pt-2">No restaurant recently visited</p>
      <router-link class="nav-link" to="/">
        <button class="back-button">See all restaurants</button>
      </router-link>
    </div>
    <div v-else>
      <div class="restaurant_card text-center">
        <span class="badge rounded-pill text-bg-dark">7 visits in the last month</span>
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedValue: "1", // Set the default selected value
    };
  },
};
</script>

<style>
.user-section {
  margin-top: 100px;
}

.select-box {
  display: inline-block;
}
</style>
