<template>
    <HeaderMain :data="headerData"/>
    <main class="">
        <UnClickMain />

        <SectionHomeDates limit="3" />

        <SectionHomeActu limit="2" :isHomePage="true" />
        
        <div class="centered agendaButtonBox">
            <NuxtLink class="agendaButton textAlignCenter brown_action" to="/actualites">Voir toutes les actualités</NuxtLink>
        </div>
    </main>
</template>
<script setup>



const headerData = {
    images: [
        {
            src: 'images/header/accueil/eglise-de-locmaria-berrien.jpg',
            alt: 'église de Locmaria-Berrien',
        }
    ],
    title: 'Bienvenue à Poullaouen',
    path: [
        {
            text: 'Accueil',
            target: '/'
        }
    ]
}

</script>

<style>

</style>