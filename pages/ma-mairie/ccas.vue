<template>
    <HeaderMain :data="headerData" />
    
    <main class="mainCCAS">

        <p class="mainWidth intro-text">
            La commune de Poullaouen dispose d’un Centre Communal d’Action Sociale (CCAS), qui dépend de la Mairie.
        </p>

        <SectionTitleBar title="Le rôle CCAS"/>

        <p class="mainWidth page-text marTop50">
            Le <b>CCAS</b> assure une mission d’ <b>aide à la population</b>. 
            Il apporte une aide pour les demandes d’APA, d’aide sociale (service d’aide ménagère 
            et prise en charge des frais d’hébergement en maison de retraite ou foyer logement), 
            et les demandes d’aides attribuées par la Maison Départementale des 
            Personnes Handicapées.
        </p>

        <SectionMainSloted  :data="sectionData_1">
            <div class="textBox h100 flex column justifyCenter gap20">            
                <p class="content page-text">
                    Chaque année lors du dernier samedi de septembre, le CCAS invite
                    à un <b>repas</b> les <b>personnes âgées d’au moins 70 ans</b> et domiciliées
                    sur la commune. Ces personnes peuvent être accompagnées d’une
                    personne de leur choix qui paiera le repas si elle est âgée de moins de
                    70 ans.
                    <br>
                    Le CCAS assure également chaque année au mois de décembre une
                    distribution de <b>colis de Noël</b> aux personnes âgées d’au moins 80 ans
                    et n’ayant pas pu assister au repas.
                    <br>
                    Par ailleurs, la municipalité organise deux activités à l’attention des
                    personnes âgées : des <b>cours de gym douce et de chant</b>.
                </p>
            
                <div class="bottomContent">
                    <p class="moreinfo flex gap10 italic">
                        <span class="icon">call</span>
                        <span>02 98 93 50 76</span>
                    </p>
                </div>
            </div>
        </SectionMainSloted>

        <SectionMainSloted  :data="sectionData_2">
                <div class="textBox h100 flex column justifyCenter gap20">            
                    <p class="content page-text">
                        Tout au long de l'année, 1 lundi sur 2, une vingtaine "d'anciens", se retrouve pour chanter, pour le 
                        plaisir et la convivialité. Jacqueline Cras et ses musiciens animent l'ensemble dans la bonne humeur. 
                        L'activité est libre à tous, gratuite et joyeuse! Se renseigner en mairie pour se joindre au groupe. 
                        L'après-midi se termine toujours par un café/gâteau...
                    </p>
            
                    <div class="bottomContent">
                        <p class="moreinfo flex gap10 italic">
                            <span class="icon">call</span>
                            <span>02 98 93 50 76</span>
                        </p>
                    </div>
                </div>
            </SectionMainSloted>

        <SectionTitleBar title="Les organismes partenaires" />
        
        <p class="mainWidth page-text marTop50">
            Pour obtenir des informations concernant ces aides, vous pouvez contacter <a class="externalLink" href="https://www.poher.bzh/accueil_poher/les_services/maison_france_services" target="-blank">la Maison des Services au Public</a> à Poher
            Communauté.
        </p>
    </main>
</template>
<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const sectionData_1 = {
    image: "/images/ccas/ccas-gym.jpg",
    localImage: true,
    title: "Les activités"
}

const sectionData_2 = {
    image: "/images/ccas/chantons_ensemble.JPG",
    localImage: true,
    title: "Chantons ensemble"
}
const headerData = {
    images: [
        {
            src: `${directusAssets}9f56bf4f-f538-48bc-821f-d68eabf979e9.JPG?key=header1500`,
            alt: 'Centre Communal d’Action Sociale de Poullaouen',
        }
    ],
    title: 'Centre Communal d’Action Sociale',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Ma mairie',
            target: '/ma-mairie/ccas',
            active: false
        },
        {
            text: 'Ccas',
            target: '/ma-mairie/ccas',
            active: false
        }
    ]
}
const applyStyleClasses_utils = () => {

    const section = document.querySelector('.sectionBoxSloted')

    section.classList.replace('whiteSection', 'blueSection')

}
onMounted(() => {
    applyStyleClasses_utils()
})

</script>

<style>
/* blue feet */


</style>