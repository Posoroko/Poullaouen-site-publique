<template>
    <div class="sectionTitleBox mainWidth">
        <h2 class="oleo">{{ title }}</h2>

        <div class="stripe"></div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String
})





</script>

<style scoped>
.sectionTitleBox h2 {
    font-size: max(18px, 2vw);
    margin-top: max(30px, 3vw);
}

.stripe {
    width: max(120px, 12vw);
    height: max(8px, 0.7vw);
    background: linear-gradient(270deg, rgba(0, 47, 74, 1) 0%, rgba(147, 96, 55, 1) 100%);
    border-radius: 8px;
    margin-top: 20px;
}

.whiteSection .sectionTitleBox h2 {
    color: var(--dark-blue);
}
</style>