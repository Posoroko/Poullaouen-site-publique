<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            Située à 10mn de Carhaix, 1 heure de Brest ou Quimper, Poullaouen vous offre la possibilité de vivre au calme à la
            campagne. Vous y trouverez tous les services de première nécessité, une école publique maternelle et primaire, une
            bibliothèque-médiathèque, un médecin, une pharmacie, un cabinet infirmier, un bureau de poste, une supérette, des bars…
        </p>

        <div>
            <SectionMainSloted
                :data="{ title: 'Les notaires du Poher', image: '/images/se-loger/notaires.jpg', imageAlt: 'LEs notaires du Poher à Poullaouen', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <p>
                        L’office est installé en plein coeur du Centre Bretagne depuis plusieurs décénnies, anciennement étude de Maître Jean-Yves LE GAC puis
                        de Maîtres Catherine GARIGNON et Romuald LE GOHIC devenue récemment Les notaires du Poher.
                        Cet office composé de trois associés Maître Catherine MARTIN RAFFRAY (anciennement Catherine GARIGNON), Maître Romuald LE GOHIC et
                        Maître Marine LE JEUNE, ainsi que de 15 collaborateurs, est au service des particuliers et professionnels afin d’apporter un service 
                        de qualité couvrant les aspects juridiques, sociaux et fiscaux.
                    </p>

                    <div class="infoBox   ">
                        <p> <span class="icon">location_on</span> Avenue Général De Gaulle - Poullaouen</p>
                        <p> <span class="icon">call</span> 02 98 93 55 90</p>
                        <p> <span class="icon">language</span> <a class="externalLink" href="https://lesnotairesdupoher.notaires.fr" target="_blank">www.lesnotairesdupoher.notaires.fr</a></p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Office de Tourisme de Carhaix et du Poher', image: '/images/se-loger/office-de-tourisme.jpg', imageAlt: 'Offisme de tourisme de Carhaix', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <p>
                        L’office met à disposition une liste de logements (vides et meublés) situés sur le territoire de Poher communauté
                    </p>

                    <div class="infoBox  ">
                        <p> <span class="icon">location_on</span> Avenue Général De Gaulle - Poullaouen </p>
                        <p> <span class="icon">call</span> 02 98 93 04 42</p>
                        <p> <span class="icon">language</span> <a class="externalLink" href="https://www.carhaixpohertourisme.bzh/" target="_blank">www.carhaixpohertourisme.bzh</a></p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'ALECOB', image: '/images/se-loger/alécob.jpg', imageAlt: 'Alécob logo', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <p>
                        Afin d’accompagner les particuliers dans leur réflexion, l’Etat, la Région
                        Bretagne et l’ADEME ont mis en place des services d’accompagnement
                        neutres et gratuits sur l’ensemble du territoire af in de répondre aux
                        questions techniques et financières liées à l’énergie.
                        <br>
                        Le territoire du Centre Ouest Bretagne dispose ainsi d’un Espace Info-
                        Energie (EIE), basé à la maison des services publics, place de la Tour
                        d’Auvergne à Carhaix.
                        <br>
                        L’Espace Info-Energie de l’ALECOB se tient à la disposition du public
                        pour répondre aux demandes portant sur les différents équipements de
                        l’habitat, le chauffage, l’eau chaude, l’isolation thermique, les énergies
                        renouvelables, les matériaux de construction, l’habitat bioclimatique,
                        les aides financières... que ce soit pour un projet de construction,
                        d’acquisition d’un bien ou de rénovation énergétique dans le but de
                        réduire sa facture énergétique.
                    </p>

                    <div class="infoBox  ">
                        <p> <span class="icon">location_on</span> Maison des Services Publics - Place de la Tour d’Auvergne - Carhaix</p>
                        <p> <span class="icon">call</span> 0 805 203 205 (appel gratuit depuis un poste fixe)</p>
                        <p> <span class="icon">language</span> <a class="externalLink" href="https://alecob.jimdofree.com" target="_blank">www.alecob.jimdofree.com</a></p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                    :data="{ title: 'SOLIHA', image: '/images/se-loger/soliha.jpg', imageAlt: 'Alécob logo', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <p>
                            SOLIHA, anciennement réseau PACT et Réseau Habitat et
                            Développement, est une association privée au service de l’habitat.
                            Depuis 1942, elle intervient en faveur des personnes défavorisées,
                            fragiles ou vulnérables sur deux axes : le maintien et l’accès dans le
                            logement.
                        </p>
    
                        <div class="infoBox ">
                            <p> <span class="icon">location_on</span> Maison des Services Publics - Place de la Tour d’Auvergne - Carhaix</p>
                            <p> <span class="icon">call</span> 02 98 95 99 54</p>
                            <p> <span class="icon">language</span> <a class="externalLink" href="https://www.soliha.fr" target="_blank">www.soliha.fr</a></p>
                        </div>
                    </div>
                </SectionMainSloted>
        </div>
    </main>
</template>
<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;


const headerData = {
    images: [
        {
            src: `${directusAssets}c44aa5aa-ba22-4649-997b-26a228640a6e.JPG?key=header1500`,
            alt: "L'entrée du bourg de Poullaouen",
        }
    ],
    title: 'Se loger',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Mes infos',
            target: `/mes-infos/se-loger`,
            active: false
        },
        {
            text: 'Se loger',
            target: `/mes-infos/se-loger`,
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
.infoBox {
    padding: 10px;
}

.slotedSectionTextBox {
    height: 100%;
}

li {
    list-style: disc;
    margin-left: 40px;
}</style>