<template>
    <div class="randoTopBox">
        <div class="firstRow flex justifyBetween">
            <div class="flex alignCenter gap10 ">
                <span class="icon" aria-hidden="true">swap_horiz</span>
                <span class="randoInfo">{{ data.length }}</span>
            </div>

            <div class="flex alignCenter gap10">
                <span class="icon" aria-hidden="true">schedule</span>
                <span class="randoInfo">{{ data.time }}</span>
            </div>

            <div class="flex gap10 alignCenter">
                <span v-for="icon in data.types" :key="icon">
                    <svg class="horseIcon"  v-if="icon == 'horse'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M0 464V316.9C0 208.5 68.3 111.8 170.5 75.6L340.2 15.5C361.6 7.9 384 23.8 384 46.4c0 11-5.5 21.2-14.6 27.3L336 96c48.1 0 91.2 29.8 108.1 74.9l48.6 129.5c11.8 31.4 4.1 66.8-19.6 90.5c-16 16-37.8 25.1-60.5 25.1h-3.4c-26.1 0-50.9-11.6-67.6-31.7l-32.3-38.7c-11.7 4.1-24.2 6.4-37.3 6.4l-.1 0 0 0c-6.3 0-12.5-.5-18.6-1.5c-3.6-.6-7.2-1.4-10.7-2.3l0 0c-28.9-7.8-53.1-26.8-67.8-52.2c-4.4-7.6-14.2-10.3-21.9-5.8s-10.3 14.2-5.8 21.9c24 41.5 68.3 70 119.3 71.9l47.2 70.8c4 6.1 6.2 13.2 6.2 20.4c0 20.3-16.5 36.8-36.8 36.8H48c-26.5 0-48-21.5-48-48zM328 224a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                    </svg>
                    <span class="icon" v-else>{{ icon }}</span>
                </span>
            </div>
        </div>

        <p class="secondRow flex alignCenter gap10">
            <span class="icon" aria-hidden="true">explore</span> <span class="randoInfo">{{ data.legend }}</span>
        </p>

        <p class="thirdRow flex alignCenter gap10">
            <span class="icon" aria-hidden="true">flag</span> <span class="randoInfo">{{ data.start }}</span>
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

<style scoped>
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