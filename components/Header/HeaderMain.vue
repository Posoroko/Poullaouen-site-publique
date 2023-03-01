<template>
    <header class="">
        <div class="imageBox relative">
            <img :src="data.images[activeImageIndex].src" :alt="data.images[activeImageIndex].alt">

            <div v-if="isHomePage" class="dotNavBox absolute flex w100 justifyCenter">
                <div class="dot" v-for="(image, index) in data.images" :key="index">
                    
                    <div v-if="activeImageIndex == index" class="icon headerDot">radio_button_checked</div>
                    <div v-else class="icon headerDot">radio_button_unchecked</div>
                </div>
            </div>

            <div v-if="isHomePage" class="leftArrowBox absolute icon headerIcon headerChevron pointer" @click="swipeLeft">
                chevron_left
            </div>

            <div v-if="isHomePage" class="rightArrowBox absolute icon headerIcon headerChevron pointer" @click="swipeRignt">
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

const swipeLeft = () => {
    console.log('swipeLeft')
    if (activeImageIndex.value > 0) {
        activeImageIndex.value--
    } else {
        activeImageIndex.value = props.data.images.length - 1
    }
}
const swipeRignt = () => {
    if (activeImageIndex.value < props.data.images.length - 1) {
        activeImageIndex.value++
    } else {
        activeImageIndex.value = 0
    }
}

onMounted(() => {
    if (props.isHomePage) {
        setInterval(() => {
            swipeRignt()
        }, 10000)
    }
})




const props = defineProps({
    data: Object,
    isHomePage: Boolean
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
    color: rgba(255, 255, 255, 0.521);
    font-size: 25px;
}
</style>