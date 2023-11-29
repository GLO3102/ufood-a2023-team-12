<template>
    <div></div>
</template>


<script setup>
import { onMounted, ref, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const props = defineProps({
  restaurants: Array, 
});

const mapContainer = ref(null);
const map = ref(null);

function initializeMap() {
  if (!props.restaurants || props.restaurants.length === 0) {
    return;
  }

  if (map.value != null) {
    map.value.off();
    map.value.remove();
    map.value = null;
  }

  map.value = L.map(mapContainer.value).setView([latitudeInitiale, longitudeInitiale], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value);

  props.restaurants.forEach(restaurant => {
    if (restaurant.location && restaurant.location.coordinates) {
      L.marker([restaurant.location.coordinates.latitude, restaurant.location.coordinates.longitude])
        .addTo(map.value)
        .bindPopup(`<b>${restaurant.name}</b><br/>${restaurant.address}`);
    }
  });
}

watch(() => props.restaurants, (newRestaurants) => {
  if (newRestaurants && newRestaurants.length > 0) {
    initializeMap();
  }
}, { immediate: true });

onMounted(() => {
  if (props.restaurants && props.restaurants.length > 0) {
    initializeMap();
  }
});
</script>