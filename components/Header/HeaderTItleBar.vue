<template>
    <div class="titleBox darkBlueBG centered">
        <h1 class="pageTitle mainWidth">
            {{ title }}
        </h1>
    </div>
</template>

<script setup>

const props = defineProps({
    title: "string"
})


</script>

<style>
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