<template>
    <modale @close-modale="closeModale">
        <div class="d-flex w-100 justify-content-center flex-column align-items-center">

            <!--Title-->
            <h1 class="mt-3 text-center alt-font">Rate this restaurant</h1>

            <!--Stars-->
            <div id="starsContainer" class="d-flex justify-content-center text-warning">
                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(1)" @click="rate(1)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 1 || currentHoveredStar >= 1)"/>
                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(1)" @click="rate(1)" class="starGrey" icon="fa-solid fa-star" v-else/>

                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(2)" @click="rate(2)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 2 || currentHoveredStar >= 2)"/>
                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(2)" @click="rate(2)" class="starGrey" icon="fa-solid fa-star" v-else />

                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(3)" @click="rate(3)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 3 || currentHoveredStar >= 3)"/>
                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(3)" @click="rate(3)" class="starGrey" icon="fa-solid fa-star" v-else/>

                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(4)" @click="rate(4)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 4 || currentHoveredStar >= 4)"/>
                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(4)" @click="rate(4)" class="starGrey" icon="fa-solid fa-star" v-else />

                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(5)" @click="rate(5)" class="starYellow" icon="fa-solid fa-star" v-if="(rating >= 5 || currentHoveredStar >= 5)"/>
                <font-awesome-icon @mouseleave="color(0)" @mouseover="color(5)" @click="rate(5)" class="starGrey" icon="fa-solid fa-star" v-else/>
            </div>

            <!--Date-->
            <div class="d-flex w-50 mt-3 flex-column justify-content-start">
                <label class="alt-font" for="visitDate">Date de visite</label>
                <input v-model="date" id="visitDate" class="w-100 rounded date" type="date">
            </div>

            <!--Comment-->
            <textarea v-model="comment" class="rounded textArea mt-3 w-50" name="ratingComment" id="ratingComment" cols="30" rows="10" placeholder="Comment..."></textarea>

            <!--Rate button-->
            <button @click="submitRating()" class="mt-3 mb-3 btn btn-success">Rate</button>

        </div>
    </modale>
</template>

<script setup>

    import Modale from './Modale.vue';
    import { ref } from "vue";
    import { postRestaurantVisit } from '../../api/restaurants';

    const currentHoveredStar = ref(0);

    const rating = ref(0);
    const date = ref("");
    const comment = ref("");

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
            currentHoveredStar.value == rating.value;
        }

        currentHoveredStar.value = number;
    }

    function closeModale(){
        rating.value = 0;
        emit('closeModale');
    }

    function submitRating(){

        console.log("Only in livrable 3 but here's the data:")
        console.log('Rating: ' + rating.value)
        console.log('Date: ' + date.value)
        console.log('Comment: ' + comment.value)

        //postRestaurantVisit(0, props.restaurantId, rating.value, date.value, comment.value);
    }

</script>

<style>
.starYellow {
    font-size: 2em;
    color: yellow;
}

.starGrey {
    font-size: 2em;
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

.textArea{
    padding: 10px;
    resize: none;
    border: none;
    outline: none !important;
}

.date{
    border: none;
    outline: none !important;
}

h1{
    color: #0A0908;
}
</style>