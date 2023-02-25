<template>
    <HeaderMain :data="headerData" />

    <main class="mainEcole">

        <div>
            <SectionMainSloted
                :data="{ title: 'L’école maternelle et primaire Jules Ferry', image: '/images/ecole/enseignants.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap10">
                    <p class="page-text">
                        L’école Jules Ferry accueille les enfants dès l’âge de 2 ans révolus. A la rentrée de septembre 2022, 83 élèves sont répartis dans les différentes
                        classes de la maternelle au CM2. Une classe bilingue français/breton multi-niveaux (de la maternelle au CM2) existe depuis 2010.
                        La classe bilingue de Marie Miguet : 13 élèves La classe maternelle de Julia Keller et Priscilla Charles : 28 élèves
                        La classe CP, CE1, CE2 de Marie Le Doaré : 23 élèves La classe CM1, CM2 d’Anthony Le Cam et Chloé Camus (le mardi) : 19 élèves
                    </p>

                    <div class="infoBox">
                        <p> <b>directueur :</b> Anthony LE CAM - 02.98.93.55.06</p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'La cantine', image: '/images/ecole/cantine.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap20">
                    <p class="page-text">
                        Une cantine municipale, avec une cuisinière aux petits soins pour les enfants.
                    </p>

                    <p class="flex column gap10">
                        <b>Les tarifs:</b>
                        <span>
                            Les tarifs varient en fonction du quotient familial des familles.
                        </span>
                    </p>

                    

                    <div class="infoBox">
                        <p> <b>renseignements :</b> Marie - 02.98.93.50.76</p>
                    </div>
                </div>
            </SectionMainSloted>

            <EcoleMenu />

            <SectionMainSloted
                :data="{ title: 'Le transport scolaire', image: '/images/ecole/transport.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap10">
                    <p class="page-text">
                        Le transport scolaire est assuré par Poher communauté.
                    </p>

                    <div class="infoBox marTop20">
                        <p> <span class="icon">call</span> 02.98.99.48.00</p>
                        <p> <span class="icon">email</span> <a href="emailto: transport@poher.com"></a> </p>
                        <p> <span class="icon">language</span> <a href="https://https://www.poher.bzh/accueil_poher/les_services/mobilites/le_transport_scolaire">poher communauté</a> </p>
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
            src: `${directusAssets}89b01382-baa3-411c-8cec-3874349dd86f.JPG?key=header1500`,
            alt: "Cour de l'école municipale de Poullaouen",
        }
    ],
    title: "L'école municipale",
    path: [
        {
            text: "accueil",
            target: "/"
        },
        {
            text: "mon quotidien",
            target: "/mon-quotidien/ecole-municipale"
        },
        {
            text: "eau et assainissement",
            target: "/mon-quotidien/ecole-municipale"
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

<style scoped>.slotedSectionTextBox {
    height: 100%;
}

li {
    list-style: disc;
    margin-left: 40px;
}</style>