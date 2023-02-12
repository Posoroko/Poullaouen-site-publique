<template>
    <div class="shoeBox relative">
        <SectionPieds />

        <img class="absolutlyCentered" :src="image" alt="">
    </div>
</template>

<script setup>

const props = defineProps({
    image: String
})

</script>

<style scoped>
.shoeBox {
    width: 50%;
    height: 100%;
    /* padding: 30px; */
}

.shoeBox img {
    width: 80%;
    box-shadow: var(--shadow);
}
</style>