<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';


import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getRestaurantById} from "../api/restaurants.js";

const route = useRoute();
const restaurantId = ref(route.params.id);
const restaurant = ref({});
const isLoading = ref(true);
const map = ref(null);


onMounted(async () => {
  try {
    const fetchedRestaurant = await getRestaurantById(restaurantId.value);
    console.log(fetchedRestaurant);
    restaurant.value = fetchedRestaurant;
    console.log(restaurant.value);
    initMap(restaurant.value.location.coordinates);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = `${position.coords.latitude},${position.coords.longitude}`;
        const destination = `${restaurant.value.location.coordinates[1]},${restaurant.value.location.coordinates[0]}`;

      },
      (error) => {
        console.error("Geolocation error:", error);
      },
      { enableHighAccuracy: true }
    );

  } catch (e) {
    console.error("Failed to fetch restaurants:", e);
  } finally {
    isLoading.value = false;
  }
});


function initMap(coordinates) {
  map.value = L.map('map').setView([coordinates[1], coordinates[0]], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      L.Routing.control({
        waypoints: [
          L.latLng(position.coords.latitude, position.coords.longitude),
          L.latLng(coordinates[1], coordinates[0])
        ],
        routeWhileDragging: true
      }).addTo(map.value);
    },
    (error) => {
      console.error("Geolocation error:", error);
    },
    { enableHighAccuracy: true }
  );
}
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

const ratingFloored = computed(() => {
  const floored = Math.floor(restaurant.value.rating);
  return Number.isInteger(floored) ? floored : 0; 
});

const hasHalfStar = computed(() => {
  return restaurant.value.rating % 1 > 0.5;
});

const images = computed(() => {
  return restaurant.value.pictures && restaurant.value.pictures.length ? restaurant.value.pictures : [];
});

const genres = computed(() => {
  return restaurant.value.genres ? restaurant.value.genres.join(", ") : "";
});

const hours = computed(() => {
  if (!restaurant.value || typeof restaurant.value.opening_hours !== 'object') {
    return "Closed";
  }

  const hoursArray = Object.entries(restaurant.value.opening_hours)
    .map(([day, time]) => `${day}: ${time ? time : 'Closed'}`);

  return hoursArray.join("<br>");
});


</script>

<template>
  <div class="restaurant">
    <div class="restaurant_info">
        <div class="restaurant_name">
          <h2>{{ restaurant.name }}</h2>
        </div>
          <Swiper
          :modules="modules"
          :slides-per-view="2"
          :space-between="10"
          :centered-slides="true"
          :navigation="true"
          :loop="true"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="'image ' + (index + 1)" />
        </SwiperSlide>
      </Swiper>
        <div class="restaurant_flex_container">
          <div class="restaurant_details">
            <div>Genre: {{ genres}}</div>
            <div>Price Range: {{ getFilterPriceName(restaurant.price_range) }}</div>
            <div class="restaurant_reviews">

              <span>Reviews:&nbsp; </span>
              <div class="cardStars d-flex justify-content-center flex-row">
                <font-awesome-icon
                  icon="fa-solid fa-star"
                  v-for="star in ratingFloored"
                  :key="star"
                />
                <font-awesome-icon
                  icon="fa-solid fa-star-half-stroke"
                  v-if="hasHalfStar"
                />

              </div>
            </div>
            <div>Address: {{ restaurant.address }}</div>
            <div>Phone: {{ restaurant.tel }}</div>
            <div v-html="hours"></div>

          </div>
      </div>
    </div>
    <div id="map" class="map"></div>
  </div>
</template>

<style scoped>
.map {
  height: 600px;
  width: 70%;
  margin: 0 auto;
}


::v-deep .leaflet-routing-container {
  font-size: 10px;
  max-height: 250px;
  overflow-y: auto;
 }

.restaurant {
  background-image: url("https://images.unsplash.com/photo-1678924587662-d8c63e57eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
}

.restaurant_info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.restaurant_name  {
  white-space: nowrap;
  width: 70%;
}

.restaurant_name h2{
  font-size: 4vw;
}

.swiper {
  height: 400px;
  margin-bottom: 20px;
  width: 70%
}
.swiper-slide {
  width:100%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  
}

.restaurant_flex_container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;
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
  gap: 10px;
}

.restaurant_reviews {
  display: flex;
  align-items: center;
}

@media (max-width: 820px) {
   
    
    .restaurant_name{
        width:90%
    }
    .restaurant_flex_container{
        width:90%;
    }

    .swiper {
        width: 90%;
    }
    .map {
        width: 90%;
    }
  }

@media (max-width: 480px) {
  .restaurant_name h2{
        font-size: 5vw;
    }

    .swiper {
        height: 200px;
    }

    .map {
        height:400px;
    }
    ::v-deep .leaflet-routing-container {
        max-height: 150px;
    }

}

</style>

