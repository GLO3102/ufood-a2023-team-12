<template>
    <div v-if="isOpened" id="modaleContainer">
        <div id="modaleHeader">
            <button type="button" class="btn btn-danger m-2" @click="closeModale">
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
        </div>
        <div id="modaleContent" class="d-flex justify-content-center">
            <slot />
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits([
    'closeModale',
])

const props = defineProps({
    isOpened: Boolean,
});

function closeModale() {
    emit('closeModale');
}

</script>

<style>

    #modaleContainer{

        /*Variables*/
        --modale-width: 1000px;
        --modale-height: 500px;
        --modale-left-margin-offset: calc(var(--modale-width) / -2);
        --modale-top-margin-offset: calc(var(--modale-height) / -2);

        /*--------*/

        /*--------*/
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 100;
        margin-left: var(--modale-left-margin-offset);
        margin-top: var(--modale-top-margin-offset);

        /*--------*/
        width: var(--modale-width);
        height: var(--modale-height);

        /*--------*/
        background-color: bisque;
        border-radius: 10px;
    }

    #modaleHeader{

        display: flex;
        justify-content: flex-end;
        background-color: gray;
        height: auto;
    }

</style>