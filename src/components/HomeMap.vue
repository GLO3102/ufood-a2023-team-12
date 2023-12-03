<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapContainer = ref(null);

const props = defineProps({
  coordinates: Array,
});

const map = ref(null);
const markers = ref([]);

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([0, 0], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      map.value.setView(L.latLng(position.coords.latitude, position.coords.longitude), 13);
      console.log('Map centered to geolocation.');
    },
    (error) => {
      console.error("Geolocation error:", error);
    },
    {enableHighAccuracy: true}
  );
  setMarkers(props.coordinates);
});

watch(() => props.coordinates, (newCoordinates) => {
  console.log('Coordinates updated:', newCoordinates);
  setMarkers(newCoordinates);
}, { deep: true });


function setMarkers(coordinates, names) {
  if (!map.value) return;

  console.log('Removing existing markers. Current count:', markers.value.length);
  markers.value.forEach(marker => marker.remove());
  markers.value = [];

  console.log('Setting new markers. Data length:', coordinates.length);
  coordinates.forEach((coord, index) => {
    if (coord && coord.length >= 2) {
      const marker = L.marker([coord[1], coord[0]]).addTo(map.value);
      markers.value.push(marker);
    }
  });
  console.log('New markers set. Total count:', markers.value.length);
}

</script>

<style scoped>
.map-container {
  height: 715px;
  width: 100%;
}
</style>