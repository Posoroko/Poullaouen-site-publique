<template>        
    <ul class="tabBox flex r">
        <li class="tab" v-for="tab in tabs" :key="tab.name">
            <span class="article">{{ tab.article }}</span> <span class="name">{{ tab.name }}</span>
        </li>
    </ul>
</template>

<script setup>

const props = defineProps({
    "tabs": Array
})

</script>

<style>

</style>