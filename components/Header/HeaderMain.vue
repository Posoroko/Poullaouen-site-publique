<template>
    <header class="">
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
    title: String,
    images: Array
})


const image = ref(null)
const images = ref(props.images)

setTimeout(() => {
    changeImage()
}, 5000)

const changeImage = () => {
    
}

</script>

<style>


header .imageBox {
    width: 100%;
    height: 69vh;
}

</style>