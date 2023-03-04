<template>
    <HeaderMain :data="headerData" />

    <main class="mainpatrimoine">
        <p class="mainWidth intro-text">
            On rencontre les appellations suivantes : Ploelouen (vers 1330 et en 1386), Ploelouan (en 1349), Ploe Louan (au
            XIVème siècle), Poulaven
            (en 1591) et Poullaouen (en 1677).
        </p>

        <nav class="patrimoineFilterBox">
            <p class="mainWidth page-text">filtrer les résultats par thème.</p>

            <div class="mainWidth flex justifyCenter wrap gap20">
                <div class="filterButton pointer" @click="filterItems" data-filter="all" :class="{ activeBtn: activeBtn == 'all' }">Tout le patrimoine</div>
                <div class="filterButton pointer" @click="filterItems" data-filter="naturel" :class="{ activeBtn: activeBtn == 'naturel' }">naturel</div>
                <div class="filterButton pointer" @click="filterItems" data-filter="religieux" :class="{ activeBtn: activeBtn == 'religieux' }">religieux</div>
                <div class="filterButton pointer" @click="filterItems" data-filter="bati" :class="{ activeBtn: activeBtn == 'bati' }">bâti</div>
                <div class="filterButton pointer" @click="filterItems" data-filter="industriel" :class="{ activeBtn: activeBtn == 'industriel' }">industriel</div>                
                
            </div>
        </nav>

        <PatrimoineEglises v-if="activeBtn == 'religieux' || activeBtn == 'all'" />
        <PatrimoineChapelles v-if="activeBtn == 'religieux' || activeBtn == 'all'" />
        <PatrimoineCalvaires v-if="activeBtn == 'religieux' || activeBtn == 'all'" />
        <PatrimoineStele v-if="activeBtn == 'religieux' || activeBtn == 'all'" />
        <PatrimoineVoieVerte v-if="activeBtn == 'naturel' || activeBtn == 'all'" />
        <PatrimoineChenes v-if="activeBtn == 'naturel' || activeBtn == 'all'" />
        <PatrimoineLavoirsFontaines v-if="activeBtn == 'bati' || activeBtn == 'all'" />
        <PatrimoineFour v-if="activeBtn == 'bati' || activeBtn == 'all'" />
        <PatrimoineChateau v-if="activeBtn == 'bati' || activeBtn == 'all'" />
        <PatrimoineManoirs v-if="activeBtn == 'bati' || activeBtn == 'all'" />
        <PatrimoinePonts v-if="activeBtn == 'bati' || activeBtn == 'all'" />
        <PatrimoineGare v-if="activeBtn == 'industriel' || activeBtn == 'all'" />
        <PatrimoineMineDePlomb v-if="activeBtn == 'industriel' || activeBtn == 'all'" />
        

    </main>
</template>

<script setup>
const filterItems = (e) => {
    activeBtn.value = null
    setTimeout(() => {
        activeBtn.value = e.target.getAttribute('data-filter')
    }, 10)
}

const activeBtn = ref('all')

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const headerData = {
    images: [
        {
            src: `${directusAssets}ed89c00d-5e0f-40bb-964a-23acac2c8b56.JPG?key=header1500`,
            alt: 'Révolte des bonnets rouges à Poullaouen',
        }
    ],
    title: 'Patrimoine',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Mes sorties',
            target: `/mes-sorties/patrimoine`
        },
        {
            text: 'Patrimoine',
            target: `/mes-sorties/patrimoine`
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
.activeBtn {
    background-color: var(--light-blue);
    color: #fff;
}

.patrimoineSubtitle {
    font-size: 16px;
    font-weight: 700;
}
</style>