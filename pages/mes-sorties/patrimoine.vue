<template>
    <HeaderMain :data="headerData" />

    <main class="mainpatrimoine">
        <p class="mainWidth intro-text">
            Une petite ville et son clocher mais des alentours "riches en pierres", à découvrir absolument.
        </p>

        <nav class="patrimoineFilterBox">
            <p class="mainWidth page-text">Filtrer les résultats par thème</p>

            <div class="mainWidth flex justifyCenter wrap gap20">
                <div class="defaultFilterButton pointer shadow" @click="filterItems" data-filter="all" :class="{ activeDefaultFilterButton: activeDefaultFilterButton == 'all' }">Tout le patrimoine</div>
                <div class="defaultFilterButton pointer shadow" @click="filterItems" data-filter="bati" :class="{ activeDefaultFilterButton: activeDefaultFilterButton == 'bati' }">Bâti</div>
                <div class="defaultFilterButton pointer shadow" @click="filterItems" data-filter="industriel" :class="{ activeDefaultFilterButton: activeDefaultFilterButton == 'industriel' }">Industriel</div>
                <div class="defaultFilterButton pointer shadow" @click="filterItems" data-filter="naturel" :class="{ activeDefaultFilterButton: activeDefaultFilterButton == 'naturel' }">Naturel</div>
                <div class="defaultFilterButton pointer shadow" @click="filterItems" data-filter="religieux" :class="{ activeDefaultFilterButton: activeDefaultFilterButton == 'religieux' }">Religieux</div>
            </div>
        </nav>

        <PatrimoineEglises v-if="activeDefaultFilterButton == 'religieux' || activeDefaultFilterButton == 'all'" />
        <PatrimoineChapelles v-if="activeDefaultFilterButton == 'religieux' || activeDefaultFilterButton == 'all'" />
        <PatrimoineCalvaires v-if="activeDefaultFilterButton == 'religieux' || activeDefaultFilterButton == 'all'" />
        <PatrimoineStele v-if="activeDefaultFilterButton == 'religieux' || activeDefaultFilterButton == 'all'" />
        <PatrimoineVoieVerte v-if="activeDefaultFilterButton == 'naturel' || activeDefaultFilterButton == 'all'" />
        <PatrimoineChenes v-if="activeDefaultFilterButton == 'naturel' || activeDefaultFilterButton == 'all'" />
        <PatrimoineLavoirsFontaines v-if="activeDefaultFilterButton == 'bati' || activeDefaultFilterButton == 'all'" />
        <PatrimoineFour v-if="activeDefaultFilterButton == 'bati' || activeDefaultFilterButton == 'all'" />
        <PatrimoineChateau v-if="activeDefaultFilterButton == 'bati' || activeDefaultFilterButton == 'all'" />
        <PatrimoineManoirs v-if="activeDefaultFilterButton == 'bati' || activeDefaultFilterButton == 'all'" />
        <PatrimoineLaTruite v-if="activeDefaultFilterButton == 'bati' || activeDefaultFilterButton == 'all'" />
        <PatrimoinePonts v-if="activeDefaultFilterButton == 'bati' || activeDefaultFilterButton == 'all'" />
        <PatrimoineGare v-if="activeDefaultFilterButton == 'industriel' || activeDefaultFilterButton == 'all'" />
        <PatrimoineMineDePlomb v-if="activeDefaultFilterButton == 'industriel' || activeDefaultFilterButton == 'all'" />
        

    </main>

    <FooterMain />
</template>

<script setup>
const filterItems = (e) => {
    activeDefaultFilterButton.value = null
    setTimeout(() => {
        activeDefaultFilterButton.value = e.target.getAttribute('data-filter')
    }, 10)
}

const activeDefaultFilterButton = ref('religieux')

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const headerData = {
    images: [
        {
            src: `${directusAssets}dc45c5fb-434f-4818-8ea3-240674e3fec9.JPG?key=header1500`,
            alt: 'Révolte des bonnets rouges à Poullaouen',
        }
    ],
    title: 'Patrimoine',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Mes sorties',
            target: `/mes-sorties/patrimoine`,
            active: false
        },
        {
            text: 'Patrimoine',
            target: `/mes-sorties/patrimoine`,
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
const waitForAllComponents = () => {
    const sections = document.querySelectorAll('.sectionBoxSloted')

    if (!sections.length) {
        setTimeout(() => {
            waitForAllComponents()
        }, 10)
    } else {
        applyStyleClasses_utils()
        setTimeout(() => {
            applyStyleClasses_utils()
        }, 1000)
    }
}
onUpdated(() => {

    applyStyleClasses_utils()
})

onMounted(() => {
    applyStyleClasses_utils()
})
</script>

<style>
.mainpatrimoine {
    min-height: 100vh;
}
.patrimoineFilterBox {
    background: linear-gradient(90deg, rgba(0, 47, 74, 1) 0%, rgba(146, 76, 2, 1) 100%);
    padding: 30px;
    margin-top: 50px;
}
.patrimoineFilterBox p{
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
}

.filterButton {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: var(--dark-blue);
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
}

.filterButton:hover,
.activeDefaultFilterButton {
    background-color: var(--light-blue);
    color: #fff;
}

.patrimoineSubtitle {
    font-size: 16px;
    font-weight: 700;
}
</style>