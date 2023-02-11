<template>
    <div class="titleBox blueBG">
        <h1 class="pageTitle">
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

.pageTitle {
    font-size: 24px;
}

</style>