<template>
    <nav class="flex justifyBetween alignCenter sticky top relative">
        <TopBarSiteIcon />

        <TopBarTabMenu />
        
        <TopBarBurgerMenu v-if="false" />

        <TopBarContactWidget />
    </nav>
</template>

<script setup>



</script>

<style>
nav {
    background-color: #fff;
    box-shadow: var(--shadow);
}


</style>