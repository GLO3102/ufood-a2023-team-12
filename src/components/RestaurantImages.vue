<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { defineProps } from 'vue';

const props = defineProps({
  images: Array
});


function onSwiper(swiper) {
  console.log('Swiper instance:', swiper);
}

function onSlideChange() {
  console.log('Slide changed');

}
</script>

<template>
  <div class="swiper-container">
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
  </div>
</template>

<style scoped>
.swiper-container {
  height: 400px;
  margin-bottom: 20px;
  width: 70%;
}

.swiper-slide {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}

@media (max-width: 820px) {
  .swiper-container {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .swiper-container {
    height: 200px;
  }
}
</style>
