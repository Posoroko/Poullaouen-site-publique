<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            On rencontre les appellations suivantes : Ploelouen (vers 1330 et en 1386), Ploelouan (en 1349), Ploe Louan (au XIVème siècle), Poulaven
            (en 1591) et Poullaouen (en 1677).
        </p>

        <nav class="indexTableBNav">
            <ul class="mainWidth indexTableUl flex column gap10">
                <li v-for="(chapter, index) in histoireData.chapters" class="indexTableLi flex gap 20">
                    <span class="indexTableLiSpan">{{ index + 1 }}.</span> <a class="inexTableLink" :href="`#chapter${index + 1}`"> {{ chapter }} </a>
                </li>
            </ul>
        </nav>

        <div v-for="item in histoireData.items" :key="item.id" class="histoireSection">
            <div v-if="item.title" :id="`chapter${item.order}`" class="signet"></div>

            <p class="mainWidth intro-text" v-if="item.order == 5">
                Locmaria vient du breton Lok qui signifie «lieu saint» et de Maria, « lieu dédié à Marie ». Le suffixe Berrien, du nom de l’ancienne paroisse- mère, a été ajouté en 1955 pour différencier la commune des nombreux autres Locmaria bretons.
            </p>
            
            <SectionMainSloted :data="{ title: item.title, image: item.image, imageAlt: item.imageAlt }"  v-if="item.id != 12">
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
            


            <div class="sectionBoxSloted whiteSection w100" v-if="item.id == 12">
                <div class="sectionContent sectionBox w100 h100">

                    <h2 class="sectionSubtitle customSubtitle mainWidth">
                            <span class="w100">L’utilisation de techniques minières perfectionnées.</span> 
                    </h2>


                    <div class="mainWidth customSectionContent flex gap20">
                        

                        <p class="paragraph w50 page-text">
                            
                            Malgré les réserves ainsi constituées, les machines devaient s’arrêter durant l’été et une partie de l’automne, faute d’eau en quantité suffisante pour les mouvoir.
                            Les fonds étaient alors envahis par les eaux d’infiltration et l’exploitation s’intérrompait ou se limitait aux galeries supérieures.
                            <br>
                            Pour pallier cet inconvénient, un canal de dérivation, d’une longueur supérieure à 20 kilomètres, avait été construit entre 1783 et 1789. Ce canal comprenaient plusieurs galeries souterraines (dont la principale, celle de Kerguinen, mesurait près d’un kilomètre) et plusieurs aqueducs en bois. Il détournait sur les travaux une bonne partie des eaux de l’Aulne et permettait aux mines de Poullaouen de fonctionner toute l’année.
                            <br>
                            D’importantes innovations techniques furent introduites ou projetées aux mines de Poullaouen et Huelgoat. La première machine à vapeur bretonne fonctionna à Poullaouën dès 1748, mais fut démontée quelques années plus tard car sa consommation en charbon était excessive.
                            <br>
                            Néanmoins, dans l’ensemble, les techniques, tant minières que métallurgiques, restaient assez traditionnelles et limitées à des méthodes mises au point en Angleterre ou en Allemagne. En revanche, elles étaient portées à un haut degré de perfectionnement, ce qui valut une notoriété flatteuse.
                            <br>
                            Poullaouen, Huelgoat et Locmaria-Berrien devinrent ainsi un centre de «tourisme scientifique» qui attirait les esprits éclairés et curieux parmi les plus hauts personnages du royaume tels le duc de la Rochefoucauld, le duc de Chartres, l’Intendant de Paris, Berthier de Sauvigny.
                        </p>

                        <p class="paragraph w50 page-text">
                            A la fin du siècle, certains puits dépassent 150 mètres de profondeur à Poullaouen. Au Huelgoat et à Locamaria-Berrien, ils atteignent 200 à 250 mètres.
                            Des dizaines de kilomètres de galeries d’extraction, d’aération, d’écoulement et de transport sont creusées.
                            <br>
                            L’extraction se faisait par une machine à molettes, manège à chevaux actionnant un tambour sur lequel s’enroulaient des câbles qui descendaient et remontaient les bennes dans les puits.
                            De nombreuses pompes sont installées pour lutter contre les eaux d’infiltration particulièrement abondantes, et en assurer l’exhaure (ou l’évacuation des eaux souterraines).
                            Elles sont actionnées par des machines hydrauliques, dont certaines sont exceptionnelles par leur taille et leur technicité, avec des roues de plus de 10 mètres de diamètre.
                            Ces machines hydrauliques seront remplacées, à partir de 1832, par la machine à colonne d’eau (dite machine de Junker car construite par M Junker, Inspecteur Général des Mines). 
                            <br>
                            La machine à colonne d’eau a un excellent rendement et un coût d’entretien très faible.
                            <br>
                            Elles étaient alimentées en eau par un réseau extrêmement complexe de canaux :
                            Les rivières et ruisseaux étaient détournés de leur cours, leurs eaux accumulées dans des étangs comme ceux de Huelgoat, de la Noiee, du Cosquer (ces deux derniers sont aujourd’hui asséchés mais leurs digues subsistent, pratiquement intactes).
                            <br>
                            Dès le milieu du XVIIIè siècle, les mines de Basse-Bretagne deviennent les principales mines métalliques du royaume.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>

        <section class=" whiteSection customSection">
            <div class="sectionContent">
                <div class="mainWidth flex alignCenter gap20">
                    <div class="leftSectionBox flex column aligncenter box h100 w50">
                        <SectionShoeBox image="/images/histoire/maison de la mine.jpg" :localImage="true" />

                        <div class="bottomBox flex column gap10 marTop50">
                            Pour plus de renseignements concernant ces mines, vous pouvez
                            contacter les organismes suivants :
                            <br><br>
                            ASAM (association de sauvegarde de l’ancienne mine) organise, à la
                            demande, des visites guidées pour des groupes
                            <br>
                            <p class="sectionMoreInfo flex alignCenter gap10"> <span class="icon">language</span> <a class="externalLink" href="http://minelocmariaberrien.com">minelocmariaberrien.com</a> </p>
                            <p class="sectionMoreInfo flex AlignCenter gap10"> <span class="icon">email</span> <a class="externalLink" href="emailto:asamlb@hotmail.fr">asamlb@hotmail.fr</a> </p>
                            <p>Mairie Locmaria-Berrien : 02.98.99.73.09</p>
                            <p>Mairie Poullaouen : 02.98.93.50.76</p>
                        </div>


                    </div>

                    <div class="w50 rightSectionBox brownSection box h100 flex column justifyCenter gap20">
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
            </div>
        </section>
    </main>
</template>

<script setup>

const filters = ref([
    'Gavotte', 'Les origines'
])



const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

// fetch options for the type of item selected
const fetchOptions = {
    server: true,
    params: {
        fields: 'id, order, title, subtitle, content, link, linkText, image, imageAlt'
    }
}

const { data: histoireData } = await useAsyncData(
    "histoire",
    async () => {
        const _items = await $fetch(`${directusItems}Histoire`, fetchOptions)

        const items = _items.data

        const  chapters = []

        items.forEach(item => {
            if(item.title) {
                chapters.push(item.title)
            }
        })

        return {
            items: items,
            chapters: chapters
        }
    }
    ,
    { server: true }
)


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
onMounted(() => {
    applyStyleClasses_utils()
})
</script>

<style scoped>
.signet{
    height: 50px;
}
.indexTableUl{
    font-size: 20px;
    font-weight: 500;
    padding: 50px 40px;
    list-style: disc;
}
.indexTableLiSpan {
    width: 40px;
    display: inline-block;
}
.inexTableLink {
    padding: 3px;
    border-radius: 5px;
}
.inexTableLink:hover {
    color: white;
    background-color: var(--dark-blue);
}
.customSection .box {
    width: 50%;
    height: 100%;
    padding: 30px;
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

.customSectionContent .paragraph {
    padding: 40px 0;
}
.customSubtitle {
    font-size: 18px;
    font-style: italic;
    padding-top: 50px;
}
</style>