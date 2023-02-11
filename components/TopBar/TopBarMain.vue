<template>
    <nav class="flex justifyBetween sticky top b">
        <TopBarSiteIcon />

        <TopBarTabMenu :tabs="tabs" />
        
        <TopBarBurgerMenu :tabs="tabs" v-if="false" />

        <TopBarContactWidget />
    </nav>
</template>

<script setup>

const tabs = [
    {
        article: 'ma',
        name: 'MAIRIE'
    },
    {
        article: 'mon',
        name: 'QUOTIDIEN'
    },
    {
        article: 'mes',
        name: 'SORTIES'
    },
    {
        article: 'mes',
        name: 'INFOS'
    },
    {
        article: 'mes',
        name: 'AFFAIRES'
    }
    
]

</script>

<style>
nav {
    background-color: #fff;
}


</style>