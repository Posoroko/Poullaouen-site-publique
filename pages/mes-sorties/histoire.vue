<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            On rencontre les appellations suivantes : Ploelouen (vers 1330 et en 1386), Ploelouan (en 1349), Ploe Louan (au XIVème siècle), Poulaven
            (en 1591) et Poullaouen (en 1677).
        </p>

        <nav class="defaultFilterBox">
            <p class="mainWidth page-text">Filtrer les résultats par thème</p>

            <div class="mainWidth flex justifyCenter wrap gap20">
                <div class="defaultFilterButton pointer" @click="activeFilter = 'all'" :class="{ activeDefaultFilterButton : activeFilter == 'all'}">Toute l'histoire</div>
                <div class="defaultFilterButton pointer" @click="activeFilter = 'poullaouen'" :class="{ activeDefaultFilterButton: activeFilter == 'poullaouen' }">Poullaouen</div>
                <div class="defaultFilterButton pointer" @click="activeFilter = 'locmaria'" :class="{ activeDefaultFilterButton: activeFilter == 'locmaria' }">Locmaria-Berrien</div>
                <div class="defaultFilterButton pointer" @click="activeFilter = 'mines'" :class="{ activeDefaultFilterButton: activeFilter == 'mines' }">Les mines</div>
            </div>
        </nav>

        <HistoireGavotte v-if="activeFilter == 'poullaouen' || activeFilter == 'all'" />
        <HistoireOrigines v-if="activeFilter == 'poullaouen' || activeFilter == 'all'" />
        <HistoireMoyenAge v-if="activeFilter == 'poullaouen' || activeFilter == 'all'" />
        <HistoireBonnetsRouges v-if="activeFilter == 'poullaouen' || activeFilter == 'all'" />

        <p class="mainWidth intro-text" v-if="activeFilter == 'locmaria' || activeFilter == 'all'">
            Locmaria vient du breton Lok qui signifie «lieu saint» et de Maria, « lieu dédié à Marie ». Le suffixe Berrien, du nom de l’ancienne paroisse-
            mère, a été ajouté en 1955 pour différencier la commune des nombreux autres Locmaria bretons.
        </p>

        <HistoireOriginesLocmaria v-if="activeFilter == 'locmaria' || activeFilter == 'all'" />
        <HistoireMinesDePlombs v-if="activeFilter == 'locmaria' || activeFilter == 'all'" />
        <HistoireArchitecture v-if="activeFilter == 'locmaria' || activeFilter == 'all'" />
        <HistoireForet v-if="activeFilter == 'locmaria' || activeFilter == 'all'" />

        <HistoireLaMine v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireLaMine2 v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireLaMine3 v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireLaMine4 v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireLaMine5 v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireLaMine6 v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireLaMine7 v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireLaMine8 v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireVieilleNouvelle v-if="activeFilter == 'mines' || activeFilter == 'all'" />
        <HistoireMineAujourdhui v-if="activeFilter == 'mines' || activeFilter == 'all'" />

        <section class="poullaouen" v-if="activeFilter == 'locmaria' || activeFilter == 'all'">
            
        </section>

        <section class="poullaouen" v-if="activeFilter == 'mines' || activeFilter == 'all'">
            
        </section>

    </main>
</template>

<script setup>

const activeFilter = ref('poullaouen')

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const headerData = {
    images: [
        {
            src: `${directusAssets}9a0a45b4-3932-479f-a5b3-8e48eb900b24.jpg?key=header1500`,
            alt: 'Révolte des bonnets rouges à Poullaouen',
        }
    ],
    title: 'Histoire',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Mes sorties',
            target: `/mes-sorties/histoire`
        },
        {
            text: 'Histoire',
            target: `/mes-sorties/histoire`
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
onUpdated(() => {
    applyStyleClasses_utils()
})

onMounted(() => {
    applyStyleClasses_utils()
})
</script>

<style>
.sectionSubtitle {
    font-size: 18px;
    font-weight: 600;
    color: var(--dark-blue);
    margin-bottom: 20px;
}
.histoireSubtitle {
    font-size: 16px;
    font-weight: 700;
}

</style>