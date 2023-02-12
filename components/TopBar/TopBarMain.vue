<template>
    <nav class="topBar flex justifyBetween alignCenter sticky top relative">
        <TopBarSiteIcon />

        <TopBarTabMenu />
        
        <TopBarBurgerMenu v-if="false" />

        <TopBarContactWidget />
    </nav>
</template>

<script setup>



</script>

<style>
.topBar {
    background-color: #fff;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 10000;
}
</style>