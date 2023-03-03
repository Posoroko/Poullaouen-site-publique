<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            Plusieurs types de transports sont organisés sur le territoire :
        </p>

        <div class="mapBox centered marTop50">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84863.83080909404!2d-3.715181197404181!3d48.34140694592831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48110d2aa85302b1%3A0x40ca5cd36e56380!2sPoullaouen!5e0!3m2!1sen!2sfr!4v1677604123754!5m2!1sen!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div>
            <SectionMainSloted :data="{ title: 'Le transport scolaire', image: '/images/transports/transport-scolaire.jpg', imageAlt: 'transport scolaire Poullaouen', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyBetween pad20 gap10">
                    <h4>Quand et comment s’inscrire ?</h4>
                    <p class="page-text">
                        L’ensemble des élèves étudiant et résidant sur l’une des communes de
                        Poher communauté est invité à s’inscrire auprès des services de Poher
                        communauté en passant par le nouveau portail numérique : <a class="externalLink" href="https://www.espace-citoyens.net/familles-poher">l’Espace Familles Carhaix-Poher</a>
                    </p>
                    <h4>Tarifs.</h4>
                    <p class="page-text"> Des tarifs en fonction du quotient familial des familles. Les abonnements
                        sont annuels. Il est aussi possible d’acheter des tickets à l’unité ou en
                        carnets pour une utilisation occasionnelle des transports.
                    </p>
                    <h4>Les lignes de transport scolaire.</h4>
                    <p class="page-text">
                        Ce sont les lignes qui permettent le ramassage scolaire des élèves du
                        secondaire sur les communes de Poullaouën, Plounévézel, Cléden-
                        Poher, Kergloff, Saint-Hernin, Motreff, Tréogan, Plévin, Treff rin, Le
                        Moustoir.
                        Pour les communes de Cléden-Poher, de Saint-Hernin et de Poullaouën,
                        il existe également un service de transport scolaire à destination des
                        écoles. Les trajets se font à bord de véhicules 09 places depuis le
                        domicile de l’élève jusqu’à l’école.
                    </p>

                    <div class="infoBox">
                        <p class="flex alignCenter gap10"> <span class="icon">location_on</span> Maison des Services Publics - Place de la Tour d’Auvergne - Carhaix</p>
                        <p class="flex alignCenter gap10"> <span class="icon">call</span> 02 98 99 48 00</p>
                        <p class="flex alignCenter gap10"> <span class="icon">language</span> <a class="externalLink" href="https://www.poher.bzh/accueil_poher">www.poher.bzh</a></p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted :data="{ title: 'Hep le Bus', image: '/images/transports/Hep-Le-Bus.jpg', imageAlt: 'hep le bus', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <p class="page-text">
                        Un service de transport urbain gratuit circule en ville de Carhaix. Il
                        fonctionne du lundi au samedi de 09h00 à 12h40 et de 14h00 à 18h40.
                        Une vingtaine d’arrêts sont desservis chaque heure. En complément, le
                        bus peut se dérouter sur les 20 dernières minutes de l’heure en cours,
                        sur demande de l’usager qui aura réservé au préalable son trajet en
                        appelant le 0 820 029 270 et dans la mesure du possible.
                    </p>

                    <div class="infoBox">
                        <p class="flex alignCenter gap10"> <span class="icon">location_on</span> Maison des Services Publics - Place de la Tour d’Auvergne - Carhaix</p>
                        <p class="flex alignCenter gap10"> <span class="icon">call</span> 02 98 99 48 00</p>
                        <p class="flex alignCenter gap10"> <span class="icon">language</span> <a class="externalLink" href="https://www.poher.bzh/accueil_poher">www.poher.bzh</a></p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted :data="{ title: 'Taxicom', image: '/images/transports/taxi-com.jpg', imageAlt: 'taxi com à Poullaouen', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyBetween pad20 gap10">
                    <p>Le service de transport à la demande « Taxicom » fonctionne les :</p>
                    <ul class="page-text">
                        <li>Mardi matin : 08h30 - 13h00</li>
                        <li>Mercredi après-midi : 13h30 - 18h30</li>
                        <li>Jeudi après-midi : 13h30 - 18h30</li>
                        <li>Vendredi matin : 08h30 – 13h00</li>
                        <li>Samedi matin : 08h30 - 13h00</li>
                    </ul>
                    <p>Un aller coûte 2 €.</p>
                    <p class="page-text">
                        L’usager est transporté de son domicile à la destination souhaitée sur le territoire de Poher communauté. 
                        <br>
                        Le service est ouvert à tous (limité aux + de 70 ans pour les résidents carhaisiens).
                        Le service est accessible aux personnes à mobilité réduite.
                        <br>
                        Les déplacements sont autorisés dans les limites du territoire communautaire avec une possibilité pour les usagers de se rendre au
                        pôle administratif et médical de Maël-Carhaix ainsi que vers les EHPAD de Trébrivan, Maël-Carhaix, Huelgoat, Gourin, Châteauneuf-du-Faou
                        et Plonévez-du-Faou. 
                        <br>
                        Pour utiliser Taxicom, il suff it de réserver au 02 98 99 38 61. Le standard téléphonique est ouvert du lundi au vendredi..
                    </p>

                    <div class="infoBox">
                        <p class="flex alignCenter gap10"> <span class="icon">call</span> 02 98 99 38 61</p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted :data="{ title: 'Poher Plage', image: '/images/transports/plage.jpg', imageAlt: 'Poher plage', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <p class="page-text">
                        Chaque été, Poher communauté prévoit des navettes gratuites à destination des belles plages de la région Bretagne. Les plages
                        proposées sont surveillées, à proximité des commodités (boutiques, restauration, etc.) et jamais loin d’un sentier côtier, ce qui permet à
                        tous de pouvoir bénéficier de la navette par tous les temps. En famille, seul ou entre amis, jeunes et moins jeunes, Poher communauté vous
                        donne rendez-vous chaque mercredi de l’été ( juillet/août). Les départs se font depuis la place de l’Eglise (Verdun) à Carhaix à 11h.
                        <br>
                        Les enfants de moins de 12 ans doivent être accompagnés d’un responsable et il sera demandé aux parents des 12-18 ans de remplir une décharge parentale.
                    </p>
                </div>
            </SectionMainSloted>

            <SectionMainSloted :data="{ title: 'Les navettes Vieilles Charrues', image: '/images/transports/vieilles-charrues.jpg', imageAlt: 'Vue aérienne des vieilles charrues', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <p class="page-text">
                        A chaque édition du festival des vieilles charrues, des navettes gratuites au départ des communes de Poher communauté sont mises en place
                        par Poher communauté. Elles permettent de rapprocher les festivaliers du site l’après-midi et de les ramener durant la nuit.
                    </p>

                    <ul>
                        <li>Les navettes du Poher : Cléden-Poher, Kergloff, Saint-Hernin, Motreff, Poullaouen, Plounévézel, Treff rin, Tréogan, Plévin et Le Moustoir</li>
                        <li>La navette Ville de Carhaix</li>
                        <li>La navette Camping de la Vallée de l’Hyères</li>
                    </ul>
                </div>
            </SectionMainSloted>

            <SectionMainSloted :data="{ title: 'Le vélo', image: '/images/transports/vélo-électrique.jpg', imageAlt: 'vélo électrique', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <p class="page-text">
                            Vous habitez le territoire de Poher communauté et vous envisagez d’acquérir un vélo électrique : la communauté de communes vous accompagne !
                            <br>
                            Cette subvention est fixée à 20% du prix d’achat du vélo plafonné à 200 €. Les aides distribuées par Poher communauté se font dans la
                            limite de l’enveloppe annuelle proposée. 
                            <br>
                            La demande devra être réceptionnée au plus tard 3 mois après l’achat
                            du vélo. Attention, si vous obtenez la subvention, le deux-roues acheté ne devra pas être revendu dans l’année suivant son acquisition. Chaque
                            demandeur ne pourra faire la demande qu’une seule fois, sera majeur et domicilié sur le territoire de Poher communauté.
                        </p>
    
                        <div class="infoBox">
                            <p class="flex alignCenter gap10"> <span class="icon">location_on</span> Maison des Services Publics - Place de la Tour d’Auvergne - Carhaix</p>
                            <p class="flex alignCenter gap10"> <span class="icon">call</span> 02 98 99 48 00</p>
                            <p class="flex alignCenter gap10"> <span class="icon">language</span> <a class="externalLink" href="https://www.poher.bzh/accueil_poher/les_services/mobilites/covoiturage?fbclid=IwAR0HDgrsKefyNGKnVy8Lf7OjuDKOE7T7GvW3r2aPUC-izuisYpfHm9PyABI">www.poher.bzh</a></p>
                        </div>
                    </div>
                </SectionMainSloted>

                <SectionMainSloted :data="{ title: 'Le réseau de transport régional Breizhgo', image: '/images/transports/breizh-go.jpg', imageAlt: 'Breizh Go', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyBetween pad20 gap10">
                        <h4>Se déplacer en train</h4>
                        <p>La ligne Carhaix-Guingamp</p>
                        <h4>Se déplacer en car</h4>
                        <ul>
                            <li>Ligne 15 Carhaix-Lorient</li>
                            <li>Ligne 20 Carhaix-Loudéac</li>
                            <li>Ligne 35 Carhaix-Châteaulin</li>
                            <li>Ligne 36 Carhaix-Morlaix</li>
                            <li>Ligne 61 Carhaix-Châteaulin-Brest</li>
                            <li>Ligne 62 Carhaix-Châteaulin-Quimper</li>
                        </ul>
                        <p>Un aller coûte 2 €.</p>
                        <p>
                            Les lignes de transport scolaire sont mixtes et peuvent être utilisées par tout usager dans la limite des places disponibles.
                            <br>
                            Pour calculer votre itinéraire, vous pouvez utiliser le calculateur d’itinéraires mobibreizh pour simplifier vos recherches 
                            d’itinéraires en transports collectifs.
                        </p>
    
                        <div class="infoBox">
                            <p class="flex alignCenter gap10"> <span class="icon">call</span> 02 98 99 48 00</p>
                            <p class="flex alignCenter gap10"> <span class="icon">language</span> <a class="externalLink" href="https://www.mobibreizh.bzh/">www.mobibreizh.bzh</a></p>
                        </div>
                    </div>
                </SectionMainSloted>

                <SectionTitleBar title="Le covoiturage" />
                <h4 class="mainWidth">Le covoiturage est une solution alternative de transport à la voiture individuelle.</h4>

                <SectionMainSloted :data="{ title: null, image: '/images/transports/ouestgo.png', imageAlt: 'Covoiturage à Poullaouen', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <h4>Ouestgo</h4>
                        <p class="page-text">
                            La nouvelle plateforme du covoiturage du quotidien en Bretagne et Pays de la Loire. Ouestgo vous permet d’effectuer une recherche sur le
                            trajet souhaité et de vous mettre en relation gratuitement avec d’autres covoitureurs. Le site dispose de 3 modules : covoiturage domicile –
                            travail, évènementiel ou solidaire, c’est vous qui choisissez comment vous souhaitez covoiturer !
                        </p>
                    </div>
                </SectionMainSloted>

                <SectionMainSloted :data="{ title: null, image: '/images/transports/e-hop.jpg', imageAlt: 'Covoiturage à Poullaouen', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <h4>Ehop</h4>
                        <p class="page-text">
                            Ehop est une association dont la mission est le développement du covoiturage du quotidien. Si aucun service de transport ne peut 
                            répondre à votre besoin de mobilité, l’association partenaire éhop vous accompagne dans la recherche d’un covoiturage.
                        </p>

                        <div class="infoBox  ">
                            <p class="flex alignCenter gap10"> <span class="icon">call</span> 02 99 35 10 77</p>
                            <p class="flex alignCenter gap10"> <span class="icon">language</span> <a class="externalLink" href="https://www.ehopcovoiturons-nous.fr/">www.covoiturons-nous.fr</a></p>
                        </div>
                    </div>

                    
                </SectionMainSloted>

                <SectionMainSloted :data="{ title: null, image: '/images/transports/covoiturage.jpg', imageAlt: 'Covoiturage à Poullaouen', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <h4>Aires de covoiturage</h4>
                        <p  class="page-text">
                            Poher communauté compte 3 aires de covoiturage recensées : La Villeneuve (Carhaix), Loch ar Lann (Kergloff) et Sainte Catherine 
                            (Plounévézel) dont une, équipée d’une borne de recharge électrique (Villeneuve).
                        </p>
                    </div>
                </SectionMainSloted>

                <SectionMainSloted :data="{ title: 'Plateforme de mobilité', image: '/images/transports/Wimoov.jpg', imageAlt: 'Plateforme Wimoov', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <p class="page-text">
                            L’équipe de l’association WIMOOV vous accueille pour un accompagnement personnalisé à la mobilité et permet d’activer des
                            services de mobilité matériels (voitures, scooters, vélos...), pédagogiques ou financiers.
                        </p>
                        <div class="infoBox">
                            <p class="flex alignCenter gap10"> <span class="icon">call</span> 02 98 73 53 17</p>
                        </div>
                    </div>
                </SectionMainSloted>

                <SectionMainSloted :data="{ title: 'Les bornes de recharge pour véhicules électriques', image: '/images/transports/Borne-de-recharge.jpg', imageAlt: 'Bornes de recharge pour voitures électriques', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <p class="page-text">
                            Il y a actuellement 4 bornes de recharge sur le territoire de Poher communauté.
                        </p>
                        <div class="infoBox">
                            <p class="flex alignCenter gap10"> voir ici : <a class="noLineLink" href="https://fr.chargemap.com/map">chargemap.com</a></p>
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
            src: `${directusAssets}da56d97f-75a1-4131-93cf-c53885600bbb.jpg?key=header1500`,
            alt: "L'entrée du bourg de Poullaouen",
        }
    ],
    title: 'Les transports',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Mes infos',
            target: `/mes-infos/transports`
        },
        {
            text: 'Transports',
            target: `/mes-infos/transports`
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
.map {
    margin: auto;
}
.slotedSectionTextBox {
    height: 100%;
}


li {
    list-style: disc;
    margin-left: 40px;
}
.icon {
    font-size: 20px;
}
</style>