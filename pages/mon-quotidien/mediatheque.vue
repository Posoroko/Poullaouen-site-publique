<template>
    <HeaderMain :data="headerData" />

    <main class="mainCCAS">
        <p class="mainWidth intro-text">
            Livres, magazines, dvd, expositions.... la culture est aussi implantée dans votre commune. L’adhésion à la bibliothèque est gratuite.
        </p>


        <SectionMainSloted :data="{ title: 'Un accès gratuit à la culture', image: '/images/mediatheque/interieur2.jpg', localImage: true}">
            <p class="textBox page-text">
                La médiathèque municipale de Poullaouen, ouverte depuis novembre
                2010, est située derrière l’épicerie, rue du justiçou.
                <br> <br>
                La médiathèque propose : la consultation de documents (libre et
                gratuite), le prêt de documents pour adultes et enfants (livres, CD et
                DVD).
                <br><br>
                Par ailleurs, des <span class="page-text-bold">animations</span> et <span class="page-text-bold">expositions</span> sont organisées
                régulièrement, notamment le mois du film documentaire qui a lieu en
                novembre.
                <br> <br>
                Un <b>point cyber</b> avec un accès internet est également mis à la disposition
                du public.
                <br> <br>
                Une journée par semaine est consacrée à l’accueil de classes de l’école
                Jules Ferry.
                <br> <br>
                La collection disponible au sein de la médiathèque comprend <b>4000
                    imprimés</b> (livres, magazines, presse), 150 DVD et 70 CD.
            </p>
        </SectionMainSloted>

        <SectionMainSloted :data="{ title: 'Informations', image: '/images/mediatheque/interieur1.jpg', localImage: true }">
            <div class="mediathequeBox h100 flex column justifyCenter gap10">
                <div class="contentRow w100 flex">
                    <span class="icon" aria-hidden="true">schedule</span>

                    <ul class="textContent mediathequeSchedule w100 schedule">
                        <li class="w100"> <span>Mercredi:</span> 10h30 - 12h30 (10h - 12h pendant les vacances) </li>
                        <li class="w100"><span>Vendredi:</span> 16h00 - 18h00 (sauf juillet/août)</li>
                        <li class="w100"><span>Samedi:</span> 10h00 - 12h00</li> 
                    </ul>
                </div>

                <div class=" contentRow flex">
                    <span class="icon" aria-hidden="true">accessible</span>
                    
                    <p class="textContent">
                        Accessible aux personnes à mobilité réduite
                    </p>
                </div>

                <div class="contentRow flex">
                    <span class="icon" aria-hidden="true">call</span>
                        02 98 93 50 58
                    <p class="textContent">
                    </p>
                </div>

                <div class="contentRow flex">
                    <span class="icon" aria-hidden="true">mail</span>
                        mediatheque.poullaouen@yahoo.fr
                    <p class="textContent">
                    </p>
                </div>

                <div class="contentRow flex">
                    <span class="icon" aria-hidden="true">language</span>

                    <a href="https://poullaouen-pom.c3rb.org/" target="_blank" class="externalLink">
                        Catalogue de la médiathèque
                    </a>
                </div>
            </div>
        </SectionMainSloted>

    </main>

    <FooterMain />
</template>
<script setup>

const foo = () => {
    useEric()
}


const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;


const headerData = {
    images: [
        {
            src: `${directusAssets}9f5d6008-2756-41b7-8783-9b6188a4887c?key=header1500`,
            alt: 'Médiathèque de Poullaouen',
        }
    ],
    title: 'La médiathèque',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Mon quotidien',
            target: '/mon-quotidien/mediatheque',
            active: false
        },
        {
            text: 'Médiathèque',
            target: '/mon-quotidien/mediatheque',
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

.level1 {
    margin-left: 10px;
}

.level2 {
    margin-left: 40px;
}
.contentRow {
    gap: 20px;
}
.mediathequeSchedule li span{
    width: 20%;
    display: inline-block;
}
</style>
