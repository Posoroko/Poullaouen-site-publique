<template>
    <nuxt-link to="/" class="logoBox h100 centered">
        <!-- <img class="logo pointer" src="/images/logo.png" alt="logo de la commune de Poullaouën"> -->

        <img src="/images/logo-poullaouen.svg" class="objectFitContained" alt="">
    </nuxt-link>
</template>

<script setup>
const icon = 'icon'
</script>

<style scoped>
.logoBox{
    width: 100px;
    padding-left: 20px;
}
.logo {
    width: clamp(50px, 5vw, 75px);
}
</style>