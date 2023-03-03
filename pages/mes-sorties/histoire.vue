<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            On rencontre les appellations suivantes : Ploelouen (vers 1330 et en 1386), Ploelouan (en 1349), Ploe Louan (au XIVème siècle), Poulaven
            (en 1591) et Poullaouen (en 1677).
        </p>

        <nav class="histoireFilterBox">
            <div class="mainWidth flex justifyCenter wrap gap20">
                <div class="filterButton pointer" @click="activeBtn = 'all'" :class="{ activeBtn : activeBtn == 'all'}">Toute l'histoire</div>
                <div class="filterButton pointer" @click="activeBtn = 'poullaouen'" :class="{ activeBtn: activeBtn == 'poullaouen' }">Poullaouen</div>
                <div class="filterButton pointer" @click="activeBtn = 'locmaria'" :class="{ activeBtn: activeBtn == 'locmaria' }">locmaria-Berrien</div>
                <div class="filterButton pointer" @click="activeBtn = 'mines'" :class="{ activeBtn: activeBtn == 'mines' }">Les mines</div>
            </div>
        </nav>

        <HistoireGavotte v-if="activeBtn == 'poullaouen' || activeBtn == 'all'" />
        <HistoireOrigines v-if="activeBtn == 'poullaouen' || activeBtn == 'all'" />
        <HistoireMoyenAge v-if="activeBtn == 'poullaouen' || activeBtn == 'all'" />
        <HistoireBonnetsRouges v-if="activeBtn == 'poullaouen' || activeBtn == 'all'" />

        <p class="mainWidth intro-text" v-if="activeBtn == 'locmaria' || activeBtn == 'all'">
            Locmaria vient du breton Lok qui signifie «lieu saint» et de Maria, « lieu dédié à Marie ». Le suffixe Berrien, du nom de l’ancienne paroisse-
            mère, a été ajouté en 1955 pour différencier la commune des nombreux autres Locmaria bretons.
        </p>

        <HistoireOriginesLocmaria v-if="activeBtn == 'locmaria' || activeBtn == 'all'" />
        <HistoireMinesDePlombs v-if="activeBtn == 'locmaria' || activeBtn == 'all'" />
        <HistoireArchitecture v-if="activeBtn == 'locmaria' || activeBtn == 'all'" />
        <HistoireForet v-if="activeBtn == 'locmaria' || activeBtn == 'all'" />

        <HistoireLaMine v-if="activeBtn == 'mines' || activeBtn == 'all'" />
        <HistoireLaMine2 v-if="activeBtn == 'mines' || activeBtn == 'all'" />
        <HistoireLaMine3 v-if="activeBtn == 'mines' || activeBtn == 'all'" />
        <HistoireLaMine4 v-if="activeBtn == 'mines' || activeBtn == 'all'" />
        <HistoireLaMine5 v-if="activeBtn == 'mines' || activeBtn == 'all'" />
        <HistoireLaMine6 v-if="activeBtn == 'mines' || activeBtn == 'all'" />
        <HistoireLaMine7 v-if="activeBtn == 'mines' || activeBtn == 'all'" />
        <HistoireLaMine8 v-if="activeBtn == 'mines' || activeBtn == 'all'" />

        <section class="poullaouen" v-if="activeBtn == 'locmaria' || activeBtn == 'all'">
            
        </section>

        <section class="poullaouen" v-if="activeBtn == 'mines' || activeBtn == 'all'">
            
        </section>

    </main>
</template>

<script setup>

const activeBtn = ref('all')

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
.histoireFilterBox {
    background: linear-gradient(90deg, rgba(0, 47, 74, 1) 0%, rgba(146, 76, 2, 1) 100%);
    padding: 30px;
    margin-top: 50px;
}
.filterButton {
    font-size: 18px;
    font-weight: 600;
    color: var(--dark-blue);
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
}
.filterButton:hover,
.activeBtn {
    background-color: var(--light-blue);
    color: #fff;
}

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