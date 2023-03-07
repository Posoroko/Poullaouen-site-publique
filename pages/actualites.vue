<template>
    <HeaderMain :data="headerData" />
    <main class="">

        <p class="intro-text mainWidth page-text">
            Vous souhaitez rester informé sur la vie de votre commune ? C’est ici.
        </p>

        <div class="actu">
            <SectionHomeActu limit="-1" :isHomePage="false" />
        </div>
        
    </main>
</template>
<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const headerData = {
    images: [
        {
            src: `${directusAssets}1eb989c2-0aaa-43e1-bb2e-892a479110ca.JPG?key=header1500`,
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Actualités',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Actualités',
            target: '/actualités'
        }
    ]
}

const applyStyleClasses_utils = () => {

    const sections = document.querySelectorAll('.sectionBoxSloted')

    for (let i = 1; i < sections.length; i = i + 4) {
        sections[i].classList.replace('whiteSection', 'blueSection')
    }
    for (let i = 3; i < sections.length; i = i + 4) {
        sections[i].classList.replace('whiteSection', 'brownSection')
    }
}
onMounted(() => {
    applyStyleClasses_utils()
})

</script>

<style>

</style>