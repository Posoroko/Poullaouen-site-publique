<template>
    <HeaderMain :data="headerData"/>
    <main class="">
        <UnClickMain />
    </main>
</template>
<script setup>

const headerData = {
    images: [
        {
            src: 'images/header/accueil/eglise-de-locmaria-berrien.jpg',
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Bienvenue à Poullaouen',
    path: [
        {
            text: 'accueil',
            target: '/'
        }
    ]
}

</script>

<style>

</style>