<template>
    <HeaderMain :data="headerData" />

    <main class="w100 flex column">


        <button class="r">hello</button>
    </main>

</template>

<script setup>
const currentRoute = useRoute().fullPath

onMounted(() => {
    console.log(currentRoute)
})


const headerData = {
    images: [
        {
            src: '/images/header/equipe/équipe-municipale-Poullaouën.jpg',
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Document et publications',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'ma mairie',
            target: '/ma-mairie/equipe-municipale'
        },
        {
            text: 'documents',
            target: '/ma-mairie/equipe-municipale'
        }
    ]
}

</script>

<style>

</style>