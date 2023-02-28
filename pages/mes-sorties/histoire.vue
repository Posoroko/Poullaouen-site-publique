<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            On rencontre les appellations suivantes : Ploelouen (vers 1330 et en 1386), Ploelouan (en 1349), Ploe Louan (au XIVème siècle), Poulaven
            (en 1591) et Poullaouen (en 1677).
        </p>

        <div v-for="item in histoireData" :key="item.id">
            <SectionMainSloted :data="{ title: item.title, image: item.image, imageAlt: item.imageAlt }">
                <div class="slotedSectionTextBox flex column justifyCenter gap20 pad20">
                    <div class="topTextBox">
                        <h2 class="sectionSubtitle">
                            <span v-if="item.subtitle">{{ item.subtitle }}</span> 
                        </h2>
                    </div>

                    <p class="mainContent page-text">
                        {{ item.content }}
                    </p>

                    <div class="bottomTextBox">
                        <p class="sectionMoreInfo" v-if="item.link">
                            {{ item.link }}
                        </p>
                    </div>

                </div>
            </SectionMainSloted>
        </div>

        <div class="blueSection mainWidth flex alignCenter customSection">
            <div class="leftSectionBox box h100">
                <SectionShoeBox image="/images/histoire/maison de la mine.jpg" :localImage="true" />

                <div class="bottomBox flex column gap10 marTop50">
                    Pour plus de renseignements concernant ces mines, vous pouvez
                    contacter les organismes suivants :
                    <br><br>
                    ASAM (association de sauvegarde de l’ancienne mine) organise, à la
                    demande, des visites guidées pour des groupes
                    <br>
                    <p class="sectionMoreInfo flex alignCenter"> <span class="icon">language</span> <a href="http://minelocmariaberrien.com">minelocmariaberrien.com</a> </p>
                    <p class="sectionMoreInfo"> <span class="icon">email</span> <a href="emailto: asamlb@hotmail.fr">asamlb@hotmail.fr</a> </p>
                    <p>Mairie Locmaria-Berrien : 02.98.99.73.09</p>
                    <p>Mairie Poullaouen : 02.98.93.50.76</p>
                </div>
            </div>

            <div class="rightSectionBox box h100 flex column justifyCenter gap20">
                <div class="toptBox">
                    <h2 class="sectionSubtitle"> Les mines aujourd’hui. </h2>
                </div>

                <p class="page-text">
                    En raison de l’essor du réseau ferré, les mines ferment les unes après
                    les autres : en 1866 à Poullaouen, en 1873 à Huelgoat.

                    Des tentatives de réexploitation furent réalisées par la Société des
                    Mines de Pontpéan en 1906, puis par la Société de Pontgibaud, et
                    par celle de Congolin. Cependant, l’exploitation ne reprendra jamais
                    significativement.

                    L’arrêt définitif survient en 1934.

                    Aujourd’hui, les communes de Poullaouen et Huelgoat ne disposent
                    plus d’aucune trace de minerais.

                    Les mines de plomb argentifère de Poullaouen, Locmaria-Berrien et
                    Huelgoat font désormais partie du patrimoine historique du centre
                    finistère. Ces communes ne disposent actuellement que de quelques
                    traces de ces mines, vestiges que l’Association de sauvergarde de
                    l’ancienne mine (l’ASAM) à Locmaria-Berrien et quelques passionnés,
                    cherchent à sauvegarder.

                    Des expositions, des maquettes et de nombreux documents d’archives
                    donnent vie aux vestiges, eux-mêmes bien conservés.

                    Bibliographie :

                    Les Mines de Poullaouen - Huelgoat - Locmaria Berrien : Jacques LE
                    BOULANGER - septembre 1994
                    Les Mines de Huelgoat - Poullaouen : Michel PENVEN (Association «sur
                    les traces de François JONCOUR») - Mars 1989
                    Revue MICHERIOUZ KOZ : magazine des vieux métiers de Bretagne
                    - «Les mineurs de Poullaouen & de Locmaria-Berrien» - 1er numéro :
                    octobre, novembre, décembre 2002
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

// fetch options for the type of item selected
const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, subtitle, content, link, linkText, image, imageAlt'
    }
}

const { data: histoireData } = await useAsyncData(
    "histoire",
    async () => {
        const items = await $fetch(`${directusItems}Histoire`, fetchOptions)
        return items.data
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: `${directusAssets}229b3925-b301-4177-9b34-bfa7214246e2?key=header1500`,
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
onMounted(() => {
    applyStyleClasses_utils()
})
</script>

<style scoped>

.customSection .box {
    width: 50%;
    height: 100%;
    padding: 30px;
}

.sectionSubtitle {
    border-bottom: 1px solid var(--green);
}

.slotedSectionTextBox {
    height: 100%;
}

.slotedSectionTextBox .topTextBox .sectionSubtitle {
    font-size: 18px;
    font-weight: 600;
    font-style: italic;
}

.mainContent {
    margin-top: 20px;
}

.slotedSectionTextBox .topTextBox .sectionAddress,
.slotedSectionTextBox .topTextBox .sectionMoreInfo {
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
}
</style>