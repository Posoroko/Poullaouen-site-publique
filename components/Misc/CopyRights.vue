<template>
    <div class="copirightLegretBox centered">
        hello guys
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String
})

</script>

<style>
.copirightLegretBox {
    background-color: #00000080;
}

.copirightLegretBox p {
    color: white;
    font-size: 14px;
    text-align: center;
}
</style>