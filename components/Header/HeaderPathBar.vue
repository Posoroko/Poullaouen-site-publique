<template>
    <div class="pathBox brownBG centered">
        <div class="path mainWidth flex alignCenter wrap gap10">
            <span class="step flex alignCenter gap10" v-for="step in path" :key="step">
                <span class="icon">chevron_right</span>

                <nuxtLink :to="step.target" class="italic stepLink flex alignCenter">
                    {{ step.text }}
                </nuxtLink>
                
            </span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    path: Array
})

</script>

<style>
.pathBox {
    padding-top: 10px;
    padding-bottom: 10px; 
}

.step .icon,
.step .stepLink {
    font-size: 14px;
    /* margin-right: 20px; */
}
.stepLink:hover {
    color: rgb(149, 246, 253);
}

.path .step:nth-child(1) .icon {
    display: none;
}

</style>