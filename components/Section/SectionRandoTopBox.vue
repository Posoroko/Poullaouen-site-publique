<template>
    <div class="randoTopBo">
        <div class="firstRow flex justifyBetween">
            <div class="flex gap5">
                <span class="icon">swap_horiz</span>
                <span class="randoInfo">{{ data.length }}</span>
            </div>

            <div class="flex gap5">
                <span class="icon">schedule</span>
                <span class="randoInfo">{{ data.time }}</span>
            </div>

            <div class="flex gap5 alignCenter">
                <span v-for="icon in data.types" :key="icon">
                    <img class="horseIcon icon" v-if="icon == 'horse' " src="/images/horse-icon.svg" alt="">
                    <span class="icon" v-else>{{ icon }}</span>
                </span>
            </div>
        </div>

        <p class="secondRow">
            <span class="icon">explore</span> <span class="randoInfo">{{ data.legend }}</span>
        </p>

        <p class="thirdRow">
                <span class="icon">flag</span> <span class="randoInfo">{{ data.start }}</span>
            </p>

    </div>
</template>

<script setup>
const props = defineProps({
    data: Object
})
// length: String,
// time: String,
// types: Array,
// legend: String,
// start: String

</script>

<style>
.randoTopBox * {
    font-size: 14px;
}

.horseIcon {
    height: 15px;
}
.icon {
    font-size: 20px;
    font-weight: 600;
}
.randoInfo {
    font-size: 14px;
    font-weight: 300;
}
</style>