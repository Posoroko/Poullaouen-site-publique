<template>
    <footer class="r">
        footer
    </footer>
</template>

<script setup>
const props = defineProps({
    title: "string"
})

console.log(useRoute().fullPath)
</script>

<style>

</style>