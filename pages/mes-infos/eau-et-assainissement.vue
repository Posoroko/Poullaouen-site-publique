<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            Les modèles d’exploitation de l’eau et l’assainissement diffèrent d’une commune à l’autre, vous trouverez ci-dessous toutes les explications
            concernant votre commune.
        </p>

        <div>
            <SectionMainSloted
                :data="{ title: 'Eau', image: '/images/eau/fontaine.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap20">
                    
                    <p>
                        <b>Véolia</b> est le délégataire choisi par Poullaouen pour le service eau.
                    </p>

                    <div class="infoBox">
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">location_on</span> Service client</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">call</span> 0969 323 529</p>
                        <p class="flex alignCenter"> <span class="whiteIcon">schedule</span> 8h-18h du lundi au vendredi</p>
                        <p class="flex alignCenter"> <span class="whiteIcon">emergency</span> Service urgence 7j/7 - 24h/24</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">language</span> <a class="externalLink" href="https://www.eau.veolia.fr" target="_blank">www.eau.veolia.fr</a></p>
                        <br>
                        <p>Le service de distribution d’eau sur <b>Locmaria-Berrien</b> est géré par la <b>commune</b>.</p>
                        <br>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">location_on</span>Mairie de Poullaouen</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">call</span>02 98 93 50 76</p>
                        <br>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">location_on</span>Mairie de Locmaria-Berrien</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">call</span>02 98 99 73 09</p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionTitleBar :title="`Assainissement`" />

            <p class="intro-text mainWidth">
                Chaque maison doit obligatoirement être raccordée au réseau d’assainissement collectif ou équipée d’un système d’assainissement in-
                dividuel. L’assainissement collectif est assuré par la commune de Poullaouen et l’assainissement non collectif est assuré par le SPANC de Poher Communauté.
            </p>

            <SectionMainSloted
                :data="{ title: null, image: '/images/eau/la lagune.jpg', imageAlt: 'Offisme de tourisme de Carhaix', localImage: true }">
                <div class="slotedSectionTextBox page-text h100 flex column justifyCenter alignStart pad20 gap10">
                    <p class="flex column gap10">
                        <h4>Assainissement collectif</h4>
                        L’assainissement est collectif lorsque les eaux usées sont collectées par le réseau public pour être traitées dans une station d’épuration, avant
                        de retourner dans le milieu naturel. Le raccordement des installations privées à ce réseau est contrôlé par le service de la Mairie.
                        <br>
                        À ce jour, seules les habitations proches du centre-bourg sont reliées au réseau collectif. Pour les maisons reliées à l’assainissement
                        collectif, un contrôle est effectué de manière périodique pour vérif ier la conformité des installations.
                        <br>
                        Pour toute information concernant l’assainissement collectif, vous pouvez contacter directement les services de la Mairie.
                    </p>

                    <div class="infoBox">
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">location_on</span>Mairie de Poullaouen</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">call</span>02 98 93 50 76</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">location_on</span>Mairie de Locmaria-Berrien</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">call</span>02 98 99 73 09</p>
                    </div>

                </div>
            </SectionMainSloted>
  
            <SectionMainSloted
                :data="{ title: null, image: '/images/eau/manhole.jpg', imageAlt: 'Campagne Poullaouenaise', localImage: true }">
                <div class="slotedSectionTextBox page-text lex column justifyCenter alignStart pad20 gap20">

                    <p class="flex column gap10">
                        <h4>Assainissement non-collectif</h4>
                        Les eaux usées de nos habitations nécessitent d’être évacuées puis restituées dans le milieu naturel, tout en préservant la santé publique
                        et l’environnement.
                        <br>
                        Les polluants véhiculés par nos eaux usées (essentiellement matière organique, azote et phosphore) doivent être traités pour limiter leur
                        impact sur les milieux aquatiques.
                        <br>
                        L’assainissement non-collectif (ANC), aussi appelé assainissement autonome ou individuel, constitue la solution technique et économique
                        la mieux adaptée en milieu rural. Ce type d’assainissement concerne les maisons d’habitations individuelles non raccordées à un réseau
                        public de collecte des eaux usées, soit 10% de la population française. Des visites périodiques des installations d’assainissement non collectif
                        sont réalisées par le Service public d’assainissement non collectif (SPANC) de Poher communauté.
                        <br>
                        Ces visites af in de vérif ier le bon fonctionnement des installations et réaliser leur entretien se déroulent tous les sept ans. Pour permettre
                        ces visites, tous les éléments de la filière d’assainissement - la fosse septique ou toutes eaux, le bac dégraisseur, le f iltre décolloïdeur, etc.
                        doivent être accessibles.
                    </p>

                    <div class="infoBox">
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">location_on</span>SPANC - Maison des services au public - Carhaix</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">call</span>02 98 99 48 03</p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">email</span><a class="" href="mailto:spanc@poher.bzh">spanc@poher.bzh</a></p>
                        <p class="flex alignCenter"> <span class="icon" aria-hidden="true">language</span><a class="externalLink" href="https://www.poher.bzh/accueil_poher/les_services/lassainissement_non_collectif" target="_blank">www.poher.bzh</a></p>
                    </div>

                </div>
            </SectionMainSloted>
        </div>
    </main>

    <FooterMain />
</template>
<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;


const headerData = {
    images: [
        {
            src: `${directusAssets}8671f5a3-3612-4213-8a54-52eaba057f82.JPG?key=header1500`,
            alt: "L'entrée du bourg de Poullaouen",
        }
    ],
    title: 'Eau et assainissement',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Mes infos',
            target: `/mes-infos/eau-et-assainissement`,
            active: false
        },
        {
            text: 'Eau et assainissement',
            target: `/mes-infos/eau-et-assainissement`,
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
.slotedSectionTextBox {
    height: 100%;
}

li {
    list-style: disc;
    margin-left: 40px;
}
.infoBox {
    margin-top: 10px;
}
.infoBox p .icon {
    margin-right: 10px;
}
.whiteIcon {
    color: white;
    /* user-select: none; */
    font-family: 'Material Icons';
    margin-right: 10px;
}
</style>