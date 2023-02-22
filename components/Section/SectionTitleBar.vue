<template>
    <div class="sectionTitleBox mainWidth">
        <h2 class="oleo">{{ title }}</h2>
        
        <div class="titleStripe"></div>

        <slot></slot>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String
})





</script>

<style scoped>

.sectionTitleBox {
    padding: 5px 30px;
}
.sectionTitleBox h2 {
    font-size: max(18px, 2vw);
    margin-top: max(30px, 3vw);
    
}

.sectionTitleBox .titleStripe {
    width: max(120px, 12vw);
    height: max(8px, 0.7vw);
    background: linear-gradient(270deg, rgba(0, 47, 74, 1) 0%, rgba(147, 96, 55, 1) 100%);
    border-radius: 8px;
    margin: 20px 0;
}

/* .whiteSection appears in parent component */
.whiteSection .sectionTitleBox h2 {
    color: var(--dark-blue);
}
</style>