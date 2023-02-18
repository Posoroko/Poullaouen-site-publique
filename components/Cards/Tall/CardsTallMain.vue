<template>
    <div class="tallCard whiteTallCard flex column">
        <div class="topBox flex justifyCenter alignCenter column gap10">
            <h2 class="">{{ title }}</h2>
            <h3 class="">{{ subtitle }}</h3>
        </div>

        <div class="frame">
            <img :src="`${directusAssets}${cardImage}?key=card500`" :alt="imageAlt" class="objectFitCover">
            
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
    cardImageAlt: String
})


</script>

<style>
.tallCard {
    width: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
}


.tallCard .frame {
    aspect-ratio: 4/3;
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
    padding: 20px 30px;
}

.tallCard .bottomBox {
    padding-left: 50px;
}

.presBox {
    width: 100%;
    justify-content: flexStart;
    gap: 30px
}
</style>