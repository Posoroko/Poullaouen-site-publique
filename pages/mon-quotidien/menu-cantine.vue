<template>
    <HeaderMain :data="headerData" />

    <main class="mainCantine">

        <EcoleMenu class="desktopMenu" />

        <EcoleMenuTel class="telMenu" />

    </main>

    <FooterMain />
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
            text: "Accueil",
            target: "/",
            active: true
        },
        {
            text: "Mon quotidien",
            target: "/mon-quotidien/menu-cantine",
            active: false
        },
        {
            text: "Menu de la cantine",
            target: "/mon-quotidien/menu-cantine",
            active: false
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
.mainCantine {
    padding-top: 100px;
}

@media (max-width: 900px) {
    .telMenu {
        display: block;
    }
    .desktopMenu {
        display: none;
    }
}
@media (min-width: 900px) {
    .telMenu {
        display: none;
    }
    .desktopMenu {
        display: block;
    }
}

</style>