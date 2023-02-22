<template>
    <header class="">
        <div class="imageBox">
            <img :src="currentImage.src" :alt="currentImage.alt">
        </div>

        <HeaderPathBar :path="data.path"/>
        
        <HeaderTitleBar :title="data.title"/>
    </header>  
</template>

<script setup>

const pageTitle = 'Accueil'
const props = defineProps({
    data: Object
})

const currentImage = ref({})
let counter = 0

onMounted(() => {
    currentImage.value = props.data.images[counter]
})

</script>

<style>


header .imageBox {
    width: 100%;
    
    height: 75vh;
}

header .imageBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>