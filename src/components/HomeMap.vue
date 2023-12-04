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
  names: Array,
});

const map = ref(null);
const markers = ref([]);

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([props.coordinates[0][1], props.coordinates[0][0]], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      map.value.setView(L.latLng(position.coords.latitude, position.coords.longitude), 13);
      L.marker([position.coords.latitude, position.coords.longitude]).addTo(map.value)
    },
    (error) => {
      console.error("Geolocation error:", error);
    },
    {enableHighAccuracy: true}
  );
  setMarkers(props.coordinates, props.names);
});

watch(() => [props.coordinates, props.names], ([newCoordinates, newNames]) => {
  setMarkers(newCoordinates, newNames);
}, { deep: true });
watch(() => props.coordinates, (newCoordinates) => {
  console.log('Coordinates updated:', newCoordinates);
  setMarkers(newCoordinates);
}, { deep: true });


function setMarkers(coordinates, names) {
  if (!map.value) return;

  markers.value.forEach(marker => marker.remove());
  markers.value = [];

  if (coordinates && names && coordinates.length === names.length) {
    coordinates.forEach((coord, index) => {
      if (coord && coord.length >= 2) {
        const marker = L.marker([coord[1], coord[0]])
          .addTo(map.value)
          .bindTooltip(names[index], { permanent: true }).openTooltip();
        markers.value.push(marker);
      }
    });
  }
}

</script>

<style scoped>
.map-container {
  height: 715px;
  width: 100%;
}
</style>