<template>
    <header class="">
        <div class="imageBox relative">
            <img :src="data.images[0].src" :alt="data.images[0].alt">

            <div class="dotNavBox absolute">
                <div class="dot" v-for="(image, index) in data.images" :key="index">
                    
                    <div v-if="activeImageIndex == index" class="icon headerDot">radio_button_checked</div>
                    <div v-else class="icon headerDot">radio_button_unchecked</div>
                </div>
            </div>

            <div class="leftArrowBox absolute icon headerIcon headerChevron">
                chevron_left
            </div>

            <div class="rightArrowBox absolute icon headerIcon headerChevron">
                chevron_right
            </div>
        </div>

        <HeaderPathBar :path="data.path"/>

        <div class="titleBox darkBlueBG centered">
            <h1 class="pageTitle mainWidth">
                {{ data.title }}
            </h1>
        </div>

        

    </header>  
</template>

<script setup>
const activeImageIndex = ref(0)

const displayedImage = computed(() => {
    return data.images[activeImageIndex.value]
})

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


.leftArrowBox {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
.rightArrowBox {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

.dotNavBox {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.headerChevron {
    font-size: 60px;
    line-height: 60px;
    color: white;
    background-color: rgba(0, 0, 0, 0.425);
}
.headerDot {
    color: white;
    font-size: 30px;
}
</style>