<template>
    <div class="shoeBox flex alignCenter relative">
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
    height: 100%;
    /* padding: 30px; */
}
@media (max-width: 719px) {
    .shoeBox {
        width: 80%;
    }
}

@media (min-width: 720px) {
    .shoeBox {
        width: 50%;
    }
}

.shoeBox img {
    width: 80%;
    box-shadow: var(--shadow);
}
</style>