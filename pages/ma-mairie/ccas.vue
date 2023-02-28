<template>
    <HeaderMain :data="headerData" />
    
    <main class="mainCCAS">

        <p class="mainWidth intro-text">
            La commune de Poullaouen dispose d’un Centre Communal d’Action Sociale (CCAS), qui dépend de la Mairie.
        </p>

        <SectionTitleBar title="Le rôle CCAS"/>

        <p class="mainWidth intro-text marTop20">
            Le CCAS assure une mission d’aide à la population. 
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
                        <span> 02 98 97 96 95</span>
                    </p>
                </div>
            </div>
        </SectionMainSloted>

        <SectionTitleBar title="Les organismes partenaires" />
        
        <p class="mainWidth intro-text">
            Pour obtenir des informations concernant ces aides, vous pouvez contacter <a class="externalLink" href="https://www.poher.bzh/accueil_poher/les_services/maison_france_services">la Maison des Services au Public</a> à Poher
            Communauté.
        </p>
    </main>
</template>
<script setup>

const sectionData_1 = {
    image: "/images/ccas/ccas-gym.jpg",
    localImage: true,
    title: "Les activités"
}

const headerData = {
    images: [
        {
            src: '/images/header/ccas.jpg',
            alt: 'Centre Communal d’Action Sociale de Poullaouen',
        }
    ],
    title: 'Centre Communal d’Action Sociale',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Ma mairie',
            target: '/ccas'
        },
        {
            text: 'Ccas',
            target: '/ccas'
        }
    ]
}

</script>

<style>
/* blue feet */


</style>