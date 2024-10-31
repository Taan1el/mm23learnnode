<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
 
let map = null;
 
onMounted(() => {
  map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
 
  var marker = L.marker([51.5, -0.09]).addTo(map);
  var marker = L.marker([59.27755, 24.6582]).addTo(map);
  var polygon = L.polygon([
    [59.27764330019968, 24.658446047439874],
    [59.27755706477585, 24.658520015151577],
    [59.27747567383842, 24.658271559504573],
    [59.27758710185836, 24.658176729104955],
  ]).addTo(map);
});
 
function goTo(coords, zoom) {
  map.flyTo(coords, zoom);
}
</script>
<template>
  <button class="button is-primary" @click="goTo([59.4268, 24.7434], 18)">
    Go To School
  </button>
  <button class="button is-warning ml-5" @click="goTo([59.27755, 24.6582], 18)">
    <span class="icon-text">
      <span class="icon">
        <i class="fas fa-home pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#00000">
            <path
              d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
            />
          </svg>
        </i>
      </span>
      <span>Home </span>
    </span>
  </button>
  <div id="map"></div>
</template>
<style scoped>
#map {
  height: 90vh;
}
</style>