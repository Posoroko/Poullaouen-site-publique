<template>
    <header class="">
        <div class="imageBox">
            <img :src="data.images[0].src" :alt="data.images[0].alt">
        </div>

        <div class="titleBox darkBlueBG centered">
            <h1 class="pageTitle mainWidth">
                {{ data.title }}
            </h1>
        </div>

        <HeaderPathBar :path="data.path"/>
    </header>  
</template>

<script setup>

const props = defineProps({
    data: Object
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
.titleBox {
    height: 11vh;
}
.pageTitle {
    font-weight: 900;
    font-size: max(20px, 2vw);
    letter-spacing: 2px;
    padding: 0 25px;
}

</style>