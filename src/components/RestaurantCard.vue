<template>
    <div class="restaurant_card d-flex flex-column justify-content-between align-items-center">

        <!--Clickable part of the card-->
        <div @click="this.$router.push('/restaurant/' + props.restaurant.id)">

            <!--Image-->
            <div class="restaurant_image">
                <img :src="props.restaurant.pictures[2]" :alt="props.restaurant.name + ' Image'" />
            </div>

            <!--Info-->
            <div class="restaurant_info">
                <h2>{{ props.restaurant.name }}</h2>
                <p>
                    <span class="highlight">Address:</span>
                    {{ props.restaurant.address }}
                </p>
                <h3>
                    <span class="highlight">Price Range:</span>
                    {{ getFilterPriceName(props.restaurant.price_range) }}
                </h3>
                <h3>
                    <span class="highlight">Genre:</span>
                    {{ props.restaurant.genres.join(", ") }}
                </h3>

                <!--Stars-->
                <div class="cardStars d-flex justify-content-center flex-row">
                    <font-awesome-icon icon="fa-solid fa-star" v-for="star in ratingFloored" :key="star" />
                    <font-awesome-icon icon="fa-solid fa-star-half-stroke" v-if="rating - ratingFloored > 0.5" />
                </div>
            </div>
        </div>

        <!--Visited button-->
        <button @click="setVisited" class="visitedBtn btn btn-success" v-if="!visited">Mark as visited</button>

        <!--TODO: Rate button-->
        <button @click="emit('openRateModale', props.restaurant.id)" class="rateBtn btn btn-success" v-if="visited">Rate</button>

    </div>
</template>

<script setup>

    import { ref } from "vue";
    import { getFilterPriceName } from "./Utils.js";

    //Rating
    const ratingFloored = Math.floor(props.restaurant.rating);
    const rating = props.restaurant.rating;

    //Visited
    const visited = ref(false);

    //Modale
    const isRatingModaleOpened = ref(false);

    const emit = defineEmits([
        'openRateModale'
    ])

    const props = defineProps({
        restaurant: Object,
    })

    function setVisited() {
        visited.value = true;
    }

</script>

<style scoped>
.cardStars {
    color: yellow;
}

#cardRouterLink {
    text-decoration: none;
    color: black;
}

.restaurant_card{
    background-color: #cec6be;
}

.restaurant_card:hover {
    cursor: pointer;
}

.visitedBtn{
    width: fit-content;
}

.rateBtn{
    width: fit-content;
}
</style>