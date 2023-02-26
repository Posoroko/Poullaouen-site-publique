<template>
    <HeaderMain :data="headerData" />

    <main class="mainEcole">

        <EcoleMenu />

    </main>
</template>

<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;


const headerData = {
    images: [
        {
            src: `${directusAssets}88ef45e2-034a-4ea0-9897-4e3b26f0fda5.JPG?key=header1500`,
            alt: "Cour de l'école municipale de Poullaouen",
        }
    ],
    title: "Le menu de la cantine",
    path: [
        {
            text: "accueil",
            target: "/"
        },
        {
            text: "mon quotidien",
            target: "/mon-quotidien/menu-cantine"
        },
        {
            text: "menu de la cantine",
            target: "/mon-quotidien/menu-cantine"
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

<style scoped>
.slotedSectionTextBox {
    height: 100%;
}

li {
    list-style: disc;
    margin-left: 40px;
}</style>