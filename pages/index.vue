<template>
    <HeaderMain :data="headerData" :isHomePage="true"/>
    <main class="">
        <UnClickMain />

        <SectionHomeDates limit="3" />

        <SectionHomeActu limit="2" :isHomePage="true" />
        
        <div class="centered agendaButtonBox">
            <NuxtLink class="mainWidth shadow agendaButton textAlignCenter brown_action" to="/actualites">Voir toutes les actualités</NuxtLink>
        </div>
    </main>
</template>
<script setup>



const headerData = {
    images: [
        {
            src: 'images/header/accueil/eglise-de-locmaria-berrien.jpg',
            alt: 'église de Locmaria-Berrien',
        },
        {
            src: 'images/header/accueil/aire de loisirs.jpg',
            alt: 'église de Locmaria-Berrien',
        },
        {
            src: 'images/header/accueil/bandeau agenda.jpg',
            alt: 'église de Locmaria-Berrien',
        },
        {
            src: 'images/header/accueil/course de vélo.jpg',
            alt: 'église de Locmaria-Berrien',
        },
        {
            src: 'images/header/accueil/entrée de la mine.jpg',
            alt: 'église de Locmaria-Berrien',
        },
        {
            src: 'images/header/accueil/fête foraine.jpg',
            alt: 'église de Locmaria-Berrien',
        },
        {
            src: 'images/header/accueil/Gavotte_HD_8585© Eric Legret.jpg',
            alt: 'église de Locmaria-Berrien',
        },
        {
            src: 'images/header/accueil/Poullaouen.jpg',
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