<template>
    <div id="modaleContainer">
        <div id="modaleHeader">
            <button type="button" class="btn btn-danger m-2" @click="closeModale">
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
        </div>
        <div id="modaleContent" class="d-flex justify-content-center">
            <slot/>
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
        --modale-width: 60%;
        --modale-height: auto;
        --modale-left-margin-offset: calc(var(--modale-width) / -2);
        --modale-top-margin-offset: calc(var(--modale-height) / -2);

        /*--------*/

        /*--------*/
        position: absolute;
        top: 15%;
        left: 50%;
        z-index: 100;
        margin-left: var(--modale-left-margin-offset);

        /*--------*/
        width: var(--modale-width);
        height: var(--modale-height);

        /*--------*/
        background-color: #C6AC8F;
        border-radius: 10px;

        animation: fadeIn 0.5s;
    }

    #modaleHeader{

        display: flex;
        justify-content: flex-end;
        background-color: #22333B;
        height: auto;
        border-radius: 10px 10px 0px 0px;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

</style>