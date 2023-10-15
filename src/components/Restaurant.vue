<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getRestaurantById} from "../api/restaurants.js";

const route = useRoute();
const restaurantId = ref(route.params.id);
const restaurant = ref({});
const isLoading = ref(true);
console.log(route.params.id);

onMounted(async () => {
  try {
    const fetchedRestaurant = await getRestaurantById(restaurantId.value);
    console.log(fetchedRestaurant);
    restaurant.value = fetchedRestaurant;
    console.log(restaurant.value);
  } catch (e) {
    console.error("Failed to fetch restaurants:", e);
  } finally {
    isLoading.value = false;
  }
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
</script>

<template>
  <div class="restaurant" v-if="restaurant.value && Object.keys(restaurant.value).length">
    {{ console.log('Rendering restaurant') }}
    <div class="restaurant_info">
        <div class="restaurant_name">
          <h2>{{ restaurant.value.name }}</h2>
        </div>
        <div class="mosaic" id="mosaic">
          <div class="big_img">
            <img :src="restaurant.value.pictures[0]" alt="" />
          </div>
          <div class="small_img">
            <img
              v-for="(image, index) in restaurant.value.pictures.slice(1)"
              :key="index"
              :src="image"
              alt=""
            />
          </div>
        </div>
        <div class="restaurant_flex_container">
          <div class="restaurant_details">
            <h3>Genre: {{ restaurant.value.genres.join(', ') }}</h3>
            <h3>Price Range: {{ getFilterPriceName(restaurant.value.price_range) }}</h3>
            <div class="restaurant_reviews">
              <h3>Reviews:</h3>
            </div>
            <h3>Address: {{ restaurant.value.address }}</h3>
            <h3>Phone: {{ restaurant.value.tel }}</h3>
            <h3>Hours: {{ restaurant.value.opening_hours.monday }}</h3> 
            <iframe 
              :src="`https://www.google.com/maps?q=${restaurant.value.location.coordinates[1]},${restaurant.value.location.coordinates[0]}&hl=es;z=14&amp;output=embed`"
              style="border:0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.restaurant {
  margin-top: 50px;
  background-image: url("https://images.unsplash.com/photo-1678924587662-d8c63e57eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
}

.restaurant_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 200px;
}

.restaurant_name  {
  white-space: nowrap; 
  width: 100%;
}

.restaurant_name h2{
  font-size: 4vw;
}

.mosaic {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  overflow: hidden;
  margin-bottom: 20px;
}

.big_img {
  flex: 1 1 50%; 
  height: 400px;
  margin-top: 2px;
}

.small_img {
  flex: 1 1 50%; 
  height: 400px;
  display: flex;
  flex-wrap: wrap;
}

.small_img img {
  height: 50%; 
  object-fit: cover;
  flex-grow: 1;
  margin: 2px;
}

.big_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.restaurant_flex_container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
}

.restaurant_details {
  flex: 1;
  padding: 20px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 10px solid transparent;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: rgba(255,255,255,0.5);
}

.restaurant_reviews {
  display: flex;
  align-items: center;
}

.restaurant_reviews span{
  color: #fac031;
}

iframe {
    width: 70%;       
    height: 600px;     
    margin-top:30px;
}

@media (max-width: 820px) {
    .restaurant_info {
        margin: 0 20px; 
    }

    iframe {
        height: 400px;  
    }
  }

@media (max-width: 480px) {
  .restaurant_name h2{
    font-size: 5vw;
    }

  .mosaic{
    height:200px;
  }

  .big_img{
    height:200px;
  }
    
  .restaurant_info {
        margin: 0 20px; 
    }
  
    iframe{
      height:300px;
      width: 90%;
    }
}

</style>

