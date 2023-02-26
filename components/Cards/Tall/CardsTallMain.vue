<template>
    <div class="tallCard whiteTallCard h100 flex column">
        <div class="topBox flex justifyCenter alignCenter column gap10">
            <h2 class="">{{ title }}</h2>
            <h3 class="">{{ subtitle }}</h3>
        </div>

        <div class="frame">
            <img v-if="localImage && cardImage" :src="cardImage" :alt="cardImageAlt" class="objectFitCover">
            <img v-if="!localImage && cardImage" :src="`${directusAssets}${cardImage}?key=card500`" :alt="cardImageAlt" class="objectFitCover">

            <div v-else class="icon placeholderIcon objectFitCover centered">storefront</div>
            <!-- <div v-else class="icon placeholderIcon objectFitCover centered">diversity_3</div> -->
            
        </div>

        <slot>
            
        </slot>
    </div>
</template>

<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;


const props = defineProps({
    title: String,
    subtitle: String,
    cardImage: String,
    localImage: Boolean,
    cardImageAlt: String,
    type: String
})


</script>

<style scoped>
.tallCard {
    width: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
}


.tallCard .frame {
    aspect-ratio: 4/3;
    overflow: hidden;
}


.tallCard .topBox h2 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}

.tallCard .topBox h3 {
    font-size: 18px;
    font-weight: 300;
    text-align: center;
}

.tallCard .topBox,
.tallCard .bottomBox {
    padding: 13px 30px;
}

.tallCard .bottomBox {
    padding-left: 50px;
}

.placeholderIcon {
    font-size: 200px;
    color: rgb(166, 175, 177);
    background-color: #eaf0f1;
}
/* for eements passed in the slot */
.tallCard .bottomBox .contentRow .textContent {
    font-size: 14px;
    white-space: pre-wrap;
}
.tallCard .bottomBox .contentRow {
    gap: 10px;
}

</style>