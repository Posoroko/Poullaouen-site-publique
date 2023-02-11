<template>
    <header class="r">
        <div class="imageBox">
            <!-- <img src="" alt=""> -->
        </div>

        <HeaderTItleBar :title="pageTitle"/>

        <HeaderPathBar />
    </header>  
</template>

<script setup>

const pageTitle = 'Accueil'

const props = defineProps({
    title: "string"
})


</script>

<style>
header {
    width: 100%;
    height: 50vh;
}

</style>