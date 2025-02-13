<template>
    <div class="pathBox brownBG centered">
        <div class="path mainWidth flex alignCenter wrap gap10">
            <span class="step flex alignCenter gap10" v-for="step in path" :key="step">
                <span class="icon" aria-hidden="true">chevron_right</span>

                <nuxtLink :to="step.target" class="italic stepLink flex alignCenter" :class="{ pathBarActive : step.active, pathBarInactive: !step.active}">
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
    
}

.step:last-child .stepLink {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

.path .step:nth-child(1) .icon {
    display: none;
}
.pathBarInactive {
    pointer-events: none;
    cursor: default;
}

.pathBarActive {
    cursor: pointer;
    border-color: white;
}
.pathBarActive:hover {
    color: rgb(149, 246, 253);
    border-color: rgb(149, 246, 253);
}
</style>