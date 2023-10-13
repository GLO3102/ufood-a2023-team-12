<template>
    <modale @close-modale="closeModale">
        <div class="d-flex justify-content-center row align-items-center">
            <h1 class="mt-4 text-center alt-font">Rate this restaurant</h1>
            <div id="starsContainer" class="d-flex justify-content-center text-warning">

                <div>
                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(1)" @click="rate(1)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 1 || hover >= 1)"/>
                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(1)" @click="rate(1)" class="starGrey" icon="fa-solid fa-star" v-else/>

                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(2)" @click="rate(2)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 2 || hover >= 2)"/>
                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(2)" @click="rate(2)" class="starGrey" icon="fa-solid fa-star" v-else />

                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(3)" @click="rate(3)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 3 || hover >= 3)"/>
                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(3)" @click="rate(3)" class="starGrey" icon="fa-solid fa-star" v-else/>

                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(4)" @click="rate(4)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 4 || hover >= 4)"/>
                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(4)" @click="rate(4)" class="starGrey" icon="fa-solid fa-star" v-else />

                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(5)" @click="rate(5)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 5 || hover >= 5)"/>
                    <font-awesome-icon @mouseleave="color(0)" @mouseover="color(5)" @click="rate(5)" class="starGrey" icon="fa-solid fa-star" v-else/>
                </div>
            </div>

            <textarea class="textArea mt-3 w-50" name="ratingComment" id="ratingComment" cols="30" rows="13" placeholder="Comment..."></textarea>
            <p>{{ props.restaurantId }}</p>

            <div class="d-flex mt-4 mb-4 justify-content-center">
                <button class="w-25 btn btn-success">Rate</button>
            </div>
        </div>
    </modale>
</template>

<script setup>

    import Modale from './Modale.vue';
    import { ref } from "vue";

    const rating = ref(0);
    const hover = ref(0);

    //Emits
    const emit = defineEmits([
        'closeModale',
    ])

    //Props
    const props = defineProps({
        restaurantId: String,
    })

    const rate = (number) => {
        rating.value = number;
    }

    const color = (number) => {

        if(number == 0){
            hover.value == rating.value;
        }

        hover.value = number;
    }

    function closeModale(){
        rating.value = 0;
        emit('closeModale');
    }

</script>

<style>
.starYellow {
    color: yellow;
}

#starIcon {
    color: gray;
}

#starIcon:hover {
    color: yellows;
}

.starGrey {
    color: grey;
}

#restaurantRating {
    appearance: none;
}

.sendBtn{
    background-color: #5E503F;    
    color: #0A0908;
    width: 100px;
}

.w-25{
    width: 25%;
}

.textArea{
    resize: none;
    border: none;
    outline: none !important;
    border-radius: 10px;
}

h1{
    color: #0A0908;
}
</style>