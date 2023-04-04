<template>
    <HeaderMain :data="headerData" />

    <main class="mainEcole">
        <div>
            <SectionMainSloted
                :data="{ title: 'L’école maternelle et primaire Jules Ferry', image: '/images/ecole/enseignants.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap20">
                    <p class="page-text">
                        L’école Jules Ferry accueille les enfants dès l’âge de 2 ans révolus. A la rentrée de septembre 2022, 83 élèves sont répartis dans les différentes
                        classes de la maternelle au CM2. Une classe bilingue français/breton multi-niveaux (de la maternelle au CM2) existe depuis 2010.

                    </p>
                    <p class="page-text">
                        La classe bilingue de Marie Miguet : 13 élèves
                    </p>
                    <p class="page-text">
                        La classe maternelle de Julia Keller et Priscilla Charles : 28 élèves
                    </p>
                    <p class="page-text">
                        La classe CP, CE1, CE2 de Marie Le Doaré : 23 élèves
                    </p>
                    <p class="page-text">
                        La classe CM1, CM2 d’Anthony Le Cam et Chloé Camus (le mardi) : 19 élèves
                    </p>

                    <div class="infoBox">
                        <p> <b>Directeur :</b> Anthony LE CAM - 02 98 93 55 06</p>
                    </div>

                    <div class="flex justifyEnd">
                        <div data-album="jules-ferry-page-ecole" class="albumButton blueAlbumButton pointer" @click="openModal" >Voir l'album</div>
                    </div>
                </div>
            </SectionMainSloted>

            <EcoleSchedule class="desktopSchedule" />

            <EcoleScheduleTel class="telSchedule" />

            <SectionMainSloted
                :data="{ title: 'Les Temps d’Activité Périscolaire (TAP)', image: '/images/ecole/tap.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap20">
                    <p class="page-text">
                        Depuis le 2 septembre 2014, la commune a mis en place la réforme des rythmes scolaires. Cette réforme instaure une nouvelle orgasisation de la journée scolaire des enfants.
                        Celle-ci est désormais répartie sur 9 demi-journées avec le mercredi matin travaillé.
                    </p>

                    <p class="flex column gap10">
                        <b>Sur Poullaouen, les horaires des TAP sont les suivants :</b>
                        <ul>
                            <li>Lundi : 13h45 - 14h45</li>
                            <li>Jeudi : 13h45 - 14h45</li>
                            <li>Vendredi : 13h45 - 14h45</li>
                        </ul>
                    </p>

                    <p class="page-text">
                        Le lundi, mardi, jeudi et vendredi, une garderie payante peut accueillir
                        les enfants à partir de 7h30 le matin et jusqu’à 18h30 le soir. Le mercredi,
                        un service de garderie est proposé gratuitement aux familles à partir
                        de 7h30 le matin, et de 12h à 12h30.
                    </p>

                    <p class="page-text">
                        Les enfants qui ne sont pas inscrits aux TAP doivent être pris en charge
                        par leur famille. Le retour à l’école est possible à partir de 14h35 (accueil
                        de classe).
                    </p>

                    <div class="flex justifyBetween">
                        <!-- <p class="flex alignCenter gap10"> <span class="icon">visibility</span> <b>Programme de l'année</b> </p> -->
                        <div></div>
                        <NuxtLink to="/galerie-photo?categorie=ecole&sous-categorie=tap" class="albumButton blueAlbumButton pointer" >Voir les albums</NuxtLink >
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted class="brownSection" :data="{ title: 'La maternelle dehors', image: '/images/ecole/activite.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap20">
                    <p class="page-text">
                        Depuis le mois de septembre, une matinée par semaine, les élèves de
                        maternelle sortent de l’école pour faire classe en plein air : chaque lundi,
                        ils chaussent leurs bottes pour se rendre sur un terrain communal à
                        proximité immédiate.
                    </p>
                    <p class="page-text">
                        Au programme, plantations, jeux sportifs, chasse aux escargots,
                        constitution d’un herbier, fabrication de mangeoire pour oiseaux, land
                        art...qui permettront d’étudier le vivant, d’observer la succession des
                        saisons et son impact sur le milieu, de développer la créativité, le sens
                        de l’observation...
                    </p>
                    <p class="page-text">
                        Cette pratique, qui encourage l’attirance des enfants pour la nature,
                        leur permet d’expérimenter, de manipuler, d’utiliser leur sens pour
                        vivre les apprentissages. Dans cette «salle de classe» à ciel ouvert, les
                        enfants peuvent courir, creuser la terre, marcher dans les flaques...
                        Tenue adaptée indispensable !
                    </p>
                    <p class="page-text">
                       Ce concept est très développé dans les pays du nord de l’Europe
                        notamment. Des études montrent les bienfaits du temps passé dans
                        la nature pour le bien-être de l’enfant, sa santé, mais aussi la qualité
                        de ses apprentissages.
                    </p>

                    <div class="flex justifyEnd">
                        <NuxtLink to="/galerie-photo?categorie=ecole&sous-categorie=la-maternelle-dehors" class="albumButton blueAlbumButton pointer" >Voir l'album</NuxtLink >
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'La garderie', image: '/images/ecole/maternelle.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap20">
                    <p class="page-text">
                        Une garderie périscolaire est mise en place au sein de l’école.
                    </p>

                    <div class="flex column gap10">
                        <b>Les horaires :</b>

                        <p class="level1 flex alignCenter gap10"> <span class="dot inlineBlock"></span> lundi, mardi, jeudi et vendredi :</p>
                            <p class="level2">Le matin de 7h30 à 8h45</p>
                            <p class="level2">Le soir de 16h45 à 18h30</p>

                        <p class="level1 flex alignCenter gap10"> <span class="dot inlineBlock"></span> Le mercredi :</p>
                            <p class="level2">Le matin de 7h30 à 9h00</p>
                            <p class="level2">Le midi de 12h00 à 12h30</p>
                        
                        <b>Les horaires :</b>
                        
                        <p class="level1 flex alignCenter gap10"><span class="dot inlineBlock"></span>Garderie occasionnelle (jusqu’au 6ème jour) : 2.30 € par jour</p>
                        <p class="level1 flex alignCenter gap10" > <span class="dot inlineBlock"></span> Garderie régulière (à partir du 7ème jour) :</p>
                        <p class="level2"><span class="eric">1er enfant :</span> <span>23 € par mois</span></p>
                        <p class="level2"><span class="eric">2ème enfant :</span> <span>15 € par mois</span></p>
                        <p class="level2"><span class="eric">3ème enfant :</span> <span>12 € par mois</span></p>
                        
                    </div>

                    <div class="flex justifyBetween">
                        <p><b>Renseignements :</b> Mairie - 02 98 93 50 76</p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted class="blueSection"
                :data="{ title: 'La cantine', image: '/images/ecole/cantine.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap20">
                    <p class="page-text">
                        Une cantine municipale, avec une cuisinière aux petits soins pour les enfants.
                    </p>

                    <p class="flex column gap10">
                        <b>Les tarifs :</b>
                        <span>
                            Les tarifs varient en fonction du quotient familial des familles.
                        </span>
                    </p>

                    <div class="infoBox">
                        <p><b>Renseignements :</b> Mairie - 02 98 93 50 76</p>
                    </div>
                </div>
            </SectionMainSloted>

            <EcoleMenu class="desktopMenu" />

            <EcoleMenuTel class="telMenu" />

            <SectionMainSloted
                :data="{ title: 'Le transport scolaire', image: '/images/ecole/transport.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap10">
                    <p class="page-text">
                        Le transport scolaire est assuré par Poher communauté.
                    </p>

                    <div class="infoBox marTop20 flex column gap5">
                        <p class="flex alignCenter gap10"> <span class="icon">call</span> 02 98 99 48 00</p>
                        <p class="flex alignCenter gap5"><span class="icon">email</span><a href="emailto: transport@poher.com"></a>transport@poher.com</p>
                        <p class="flex alignCenter gap10"> <span class="icon">language</span> <a class="externalLink" target="_blank" href="https://www.poher.bzh/accueil_poher/les_services/mobilites/le_transport_scolaire/annee_scolaire_2022_2023">Poher communauté</a> </p>
                    </div>
                </div>
            </SectionMainSloted>
        </div>
    </main>

    <dialog id="ecoleCarouselModal">
        <GaleriePhotoDesktop v-if="selectedAlbum" :albumData="selectedAlbum" />
        <span class="modalNode modalCloseBtn absolute icon pointer flex alignCenter justifyCenter" @click="closeModal">
            close
        </span>
    </dialog>
</template>

<script setup>
const selectedAlbum = ref(null)
let modal = null

const openModal = async (e) => {
    const slug = e.currentTarget.getAttribute('data-album')
    const album = await $fetch(`${directusItems}Albums_photo?filter[slug][_eq]=${slug}&fields=images.directus_files_id`)
    modal = document.getElementById('ecoleCarouselModal')
    selectedAlbum.value = album.data[0].images

    modal.showModal()
}

const closeModal = () => {
    modal.close()
    selectedAlbum.value = null
}


const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

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
            text: "Accueil",
            target: "/",
            active: true
        },
        {
            text: "Mon quotidien",
            target: "/mon-quotidien/ecole-municipale",
            active: false
        },
        {
            text: "Ecole municipale",
            target: "/mon-quotidien/ecole-municipale",
            active: false
        }
    ]
}

</script>

<style scoped>
#ecoleCarouselModal {
    width: 100%;
    margin: auto;
    background-color: transparent;
    border: none;
    /* padding: 50px; */
}


.modalCloseBtn {
    width: 45px;
    height: 45px;
    font-size: 40px;
    color: white;
    background-color: #0000007a;
    border-radius: 10px;
    top: 10px;
    right: 10px;
    line-height: 40px;
    z-index: 100000000;
}

#ecoleCarouselModal::backdrop {
    background-color: rgba(0, 0, 0, 0.76);
}

.dot {
    min-width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: var(--light-blue);
}
.eric {
    display: inline-block;
    width: 30%;
}

.albumButton{
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px black;
}
.whiteAlbumButton{
    background-color: white;
    color: var(--brown);
}
.blueAlbumButton {
    background-color: var(--dark-blue);
    color: white;
}
.slotedSectionTextBox {
    height: 100%;
}

li {
    list-style: disc;
    margin-left: 40px;
}


@media (max-width: 900px) {
    .telMenu,
    .telSchedule {
        display: block;
    }
    .desktopMenu,
    .desktopSchedule {
        display: none;
    }
}
@media (min-width: 900px) {
    .telMenu,
    .telSchedule{
        display: none;
    }
    .desktopMenu,
    .desktopSchedule {
        display: block;
    }
}

</style>