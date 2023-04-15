<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            Grâce à votre Pass loisirs, bénéficiez de réductions pour vos diverses activités.
        </p>

        <div class="gradSection">
            <SectionMainSloted
                :data="{ title: 'Le pass loisir', image: '/images/loisirs/A-Prg1020644-maison de la mine.jpg', imageAlt: 'Reciclag à Poullaouen', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <h4 class="whiteText">Profitez de tarifs réduits avec le «pass’ loisirs» !</h4>
                    <p class="flex column gap20 whiteText">
                        Ce pass est accessible gratuitement à tous les habitants de Poher
                        communauté, sans limite d’âge. Il donne des réductions dans les
                        structures ci-dessous :
                        <br> <br>
                        Centre d’interprétation archéologique virtuel Vorgium  <br>
                        Park Aqualudique Plijadour <br>
                        Espace Culturel Glenmor <br>
                        Labyrinthe Végétal Karaez Adrénaline et le Parc Aventure <br>
                        Carhaix Golf <br>
                        Cinéma Le Grand Bleu <br>
                        Maison de la Mine à Poullaouen - Locmaria-Berrien <br> <br>
                        Bon à savoir : le pass peut être également délivré aux petits-enfants
                        (mineurs) accueillis pendant les vacances chez les grand-parents
                        habitant sur le territoire de Poher communauté.. <br>
                        Pour obtenir votre carte, présentez-vous à l’Office de tourisme de
                        Carhaix situé rue Brizeux munis d’un justificatif de domicile et d’une
                        photo.
                    </p>

                    <div class="infoBox">
                        <p class="w100 flex justifyStart gap20 alignCenter whiteText">
                            <span class="whiteText"> <b class="whiteText">Flyer :</b></span>
                            <span class="flex alignCenter gap20 whiteText">
                                <!-- <a class="flex alignCenter gap5" href="/loisirs/new pass loisirs.pdf" target="_blank"><span class="icon whiteText">visibility</span>Consulter</a> -->
                        
                                <a class="flex alignCenter gap5" href="/loisirs/new pass loisirs.pdf" download><span class="icon whiteText">download</span> Télécharger</a>       
                            </span>
                        </p>
                    </div>
                </div>
            </SectionMainSloted>
        </div>
            <SectionTitleBar title="A Locmaria-Berrien et Poullaouen" />

            <div class="tallCardBox loisirCardsBox mainWidth flex justifyCenter gap50 wrap">
                <CardsTallMain title="Aéro-Plass - ULM" cardImage="/images/loisirs/ULM.jpg" :localImage="true">
                    <div class="bottomBox flex column justifyStart alignStart gap10">
                        <p class="paragraph column">
                            Laurent PLASSART, pilote chevronné, instructeur
                            et professionnel depuis plus de 25 ans et titulaire
                            de nombreux titres dont une médaille de bronze
                            aux championnats du monde en 2005, propose : <br>
                            
                        </p>
                        <ul class="loisirUL">
                            <li>Baptêmes de l’air,</li>
                            <li>Survol des Monts d’Arrée</li>
                            <li>Photos Aériennes</li> 
                        </ul>
                        <p class="contentRow flex gap10">
                            <span class="icon">location_on</span>
                            <span class="textContent">Stancou - Poullaouen</span>
                        </p>
                        
                        <p class="contentRow flex gap10">
                            <span class="icon">call</span>
                            <span class="textContent">02 98 93 37 36</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:laurent@plassart.net" class="textContent">laurent@plassart.net</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <a href="http://www.aero-plass.com" target="_blank" class="externalLink">Voir le site web</a>
                        </p>
                    </div>
                </CardsTallMain>
  
                <CardsTallMain title="Maison de la Mine" cardImage="/images/loisirs/musée de la mine intérieur.jpg"
                    :localImage="true">
                    <div class="bottomBox flex column gap10 justifyStart alignStart">
                        <p class="paragraph">
                            L’Association pour la Sauvegarde de l’Ancienne
                            Mine de plomb et d’argent vous fait découvrir
                            dans son espace muséal le passé minier du site
                            de Huelgoat, Locmaria-Berrien et Poullaouen,
                            l’un des plus importants en France au 18ème et
                            19ème siècle.
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">location_on</span>
                            <span class="textContent">Le Bourg - Locmaria-Berrien</span>
                        </p>

                        <p class="contentRow flex gap10">
                            <span class="icon">call</span>
                            <span class="textContent">06.85.25.07.08</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:asamlb@hotmail.fr" class="textContent">asamlb@hotmail.fr</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <a href="https://www.minelocmariaberrien.com" target="_blank" class="externalLink">Voir le site web</a>
                        </p>
                    </div>
                </CardsTallMain>
                <CardsTallMain title="L'aire de loisirs" cardImage="/images/loisirs/aire de loisirs.jpg"
                    :localImage="true">
                    <div class="bottomBox flex column gap10 justifyStart alignStart">
                        <p class="paragraph">
                            L’aire de loisirs de Poullaouen permet à chacun
                            de trouver son bonheur : basket, foot, hand, volley,
                            tennis, deux couloirs d’athlétisme, balançoire,
                            toboggan, cheval à bascule ...
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">location_on</span>
                            <span class="textContent">Av. du Général de Gaulle - Poullaouen</span>
                        </p>

                        <p class="contentRow flex gap10">
                            <span class="icon">call</span>
                            <span class="textContent">02 98 93 50 76</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="textContent">mairie-de-poullaouen@wanadoo.fr</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <NuxtLink to="/mon-quotidien/equipements-sportifs-et-de-loisir" target="_blank" class="externalLink">Voir le site web</NuxtLink>
                        </p>
                    </div>
                </CardsTallMain>

            </div>

            <SectionTitleBar title="A Carhaix - 10km" />
            
            <div class="tallCardBox loisirCardsBox mainWidth flex justifyCenter gap50 wrap">
                

                <CardsTallMain title="Centre d’interprétation archéologique virtuel Vorgium" cardImage="/images/loisirs/vorgium.jpg"
                        :localImage="true">
                        <div class="bottomBox flex column gap10 justifyStart alignStart">
                            <p class="paragraph">
                                En plein coeur de Carhaix, un musée virtuel et
                                un jardin archéologique pour une expérience
                                immersive et interactive.
                            </p>
                            <p class="contentRow flex gap10">
                                <span class="icon">location_on</span>
                                <span class="textContent">5 rue du Docteur Menguy - Carhaix</span>
                            </p>

                            <p class="contentRow flex gap10">
                                <span class="icon">call</span>
                                <span class="textContent">02.98.17.53.07</span>
                            </p>
                            <p class="contentRow flex gap10">
                                <span class="icon">email</span>
                                <a href="mailto:accueil.vorgium@poher.bzh" class="textContent">accueil.vorgium@poher.bzh</a>
                            </p>
                            <p class="contentRow flex gap10">
                                <span class="icon">language</span>
                                <a href="https://www.vorgium.bzh/" target="_blank" class="externalLink">Voir le site web</a>
                            </p>
                        </div>
                    </CardsTallMain>
                <CardsTallMain title="Park Aqualudique Plijadour" cardImage="/images/loisirs/piscine.jpg" :localImage="true">
                    <div class="bottomBox flex column gap10 justifyStart alignStart">
                        <p class="paragraph">
                            La piscine municipale Plijadour dispose
                            d’espaces intérieurs et extérieurs avec bassins de
                            nage et d’apprentissage, équipements ludiques,
                            toboggans, saunas, hammam… C’est une des
                            piscines du Finistère les mieux équipées. Ouverte
                            tous les jours, elle propose des activités variées
                            : aquabike, aquagym, natation prénatale, bébés
                            nageurs, cours de natation.
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">location_on</span>
                            <span class="textContent">rue de la Piscine - Carhaix</span>
                        </p>

                        <p class="contentRow flex gap10">
                            <span class="icon">call</span>
                            <span class="textContent">02.98.99.39.50</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="textContent">mairie-de-poullaouen@wanadoo.fr</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <a href="https://plijadour.poher.bzh/accueil_plijadour" target="_blank" class="externalLink">Voir le site web</a>
                        </p>
                    </div>
                </CardsTallMain>
                <CardsTallMain title="Espace Culturel Glenmor" cardImage="/images/loisirs/espace_glenmor_1.jpg" :localImage="true">
                    <div class="bottomBox flex column gap10 justifyStart alignStart">
                        <p class="paragraph">
                            L’Espace Glenmor – centre de congrès est situé
                            dans un magnifique environnement paysagé : le
                            parc de Kerampuilh. Avec un espace de 2000 m²
                            modulable en plusieurs salles, cet équipement
                            esthétique, chaleureux et fonctionnel vous
                            propose une configuration unique, adaptée à
                            l’accueil de vos manifestations.
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">location_on</span>
                            <span class="textContent">rue Jean Monnet - Carhaix</span>
                        </p>

                        <p class="contentRow flex gap10">
                            <span class="icon">call</span>
                            <span class="textContent">02.98.99.37.50</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="textContent">mairie-de-poullaouen@wanadoo.fr</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <a href="http://glenmor.bzh/index.php/fr/" target="_blank" class="externalLink">Voir le site web</a>
                        </p>
                    </div>
                </CardsTallMain>
                <CardsTallMain title="Labyrinthe Végétal Karaez Adrénaline et le Parc Aventure" cardImage="/images/loisirs/DSC02140.jpg" :localImage="true">
                    <div class="bottomBox flex column gap10 justifyStart alignStart">
                        <p class="paragraph">
                            Karaez Adrenaline est un parc de loisirs et
                            d’aventures situé dans la Vallée de l’Hyères, qui
                            propose : un labyrinthe végétal (le plus grand
                            de Bretagne), un parcours d’accrobranche avec
                            la plus grande tyrolienne de Bretagne , un
                            espace loisirs avec entre autres, jeux gonflables,
                            manège, kart à pédales, luge sur bouée...
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">location_on</span>
                            <span class="textContent">Vallée de l’Hyères - Carhaix</span>
                        </p>

                        <p class="contentRow flex gap10">
                            <span class="icon">call</span>
                            <span class="textContent">06.50.19.15.98</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:parc-aventure@karaezadrenaline.com" class="textContent">parc-aventure@karaezadrenaline.com</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <a href="https://www.karaezadrenaline.com" target="_blank" class="externalLink">Voir le site web</a>
                        </p>
                    </div>
                </CardsTallMain>
                <CardsTallMain title="Carhaix Golf" cardImage="/images/loisirs/Carhaix golf.jpg" :localImage="true">
                    <div class="bottomBox flex column gap10 justifyStart alignStart">
                        <p class="paragraph">
                            Un golf convivial au coeur de la nature, un golf
                            pour tous. Les golfeurs expérimentés profiteront
                            du parcours 9 trous pour exprimer leur talent.
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">location_on</span>
                            <span class="textContent">route de Kerniguez - Carhaix</span>
                        </p>

                        <p class="contentRow flex gap10">
                            <span class="icon">call</span>
                            <span class="textContent">02.98.93.79.19</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:carhaix.golf@wanadoo.fr" class="textContent">carhaix.golf@wanadoo.fr</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <a href="https://www.carhaixgolf.com" target="_blank" class="externalLink">Voir le site web</a>
                        </p>
                    </div>
                </CardsTallMain>
                <CardsTallMain title="Cinéma Le Grand Bleu" cardImage="/images/loisirs/cinema.jpg" :localImage="true">
                    <div class="bottomBox flex column gap10 justifyStart alignStart">
                        <p class="paragraph">
                            Le Grand Bleu est situé dans le complexe de
                            l’Espace Glenmor depuis sa création en 2001.
                            La salle dispose d’un écran de 12 mètres et d’un
                            son système Ovation Trinnov en 7.1. La jauge est
                            de 209 sièges et 6 emplacements réservés aux
                            fauteuils roulants.
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">location_on</span>
                            <span class="textContent">rue Jean Monnet - Carhaix</span>
                        </p>

                        <p class="contentRow flex gap10">
                            <span class="icon">call</span>
                            <span class="textContent">02.98.93.32.64</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:carhaix.legrandbleu@orange.f r" class="textContent">carhaix.legrandbleu@orange.fr</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <a href="https://www.cinemalegrandbleu.fr " target="_blank" class="externalLink">Voir le site web</a>
                        </p>
                    </div>
                </CardsTallMain>
                <div class="mainWidth centered">
                    <a class="loisirLinkButton blueButton" href="https://www.carhaixpohertourisme.bzh/" target="_blank">Office de Tourisme de Carhaix et du Poher</a>
                </div>
            </div>
                <SectionMainSloted
                    :data="{ title: 'A Huelgoat - 10km', image: '/images/loisirs/Entrée du site légendaire Huelgoat.jpg', imageAlt: 'Entrée du site légendaire Huelgoat', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <h4 class="">Le Bois d’Huelgoat</h4>

                        <p class="flex column gap20 ">
                            Nichée au coeur du Parc Naturel Régional d’Armorique la forêt
                            légendaire d’Huelgoat réserve mille surprises au promeneur qui s’y
                            aventure…
                        </p>

                        <div class="flex justifyBetween marTop100">
                            <a href="https://www.montsdarreetourisme.bzh/" target="_blank" class="loisirLinkButton whiteButton">Office de Tourisme des Monts d’Arrée</a>
                        </div>
                    </div>
                </SectionMainSloted>
                <div class="marTop50"></div>
                <SectionMainSloted :data="{ title: 'A Carnoët - 10km', image: '/images/loisirs/WEB _ Vallée des Saints _ Saint Malo (par Patrice Le Guen) et la chapelle St Gildas.jpg', imageAlt: 'WEB _ Vallée des Saints _ Saint Malo (par Patrice Le Guen) et la chapelle St Gildas', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                        <h4 class="">La Vallée des Saints</h4>

                        <p class="flex column gap20 ">
                            La Vallée des Saints, un pari fou pour l’éternité.
                            Il y a de la magie dans ce site hors norme. Un peu comme sur l’île
                            de Pâques… mais à la manière bretonne ! Implantée au coeur de la
                            Bretagne, à Carnoët (22), la Vallée des Saints est un site artistique et
                            éducatif gratuit et unique au monde où se dressent 169 géants en
                            granit breton à l’eff igie des saints bretons.
                        </p>
                        <p class="flex column gap20 ">
                            A terme, 1000 saints, des géants de pierre, peupleront cette somptueuse
                            galerie d’art monumental à ciel ouvert, qui, depuis sa création, a
                            accueilli plus de deux millions et demi de visiteurs. L’idée originelle
                            un peu folle est devenue réalité, faisant d’un site exceptionnel l’un des
                            hauts lieux de Bretagne.
                        </p>
                        <p class="flex column gap20 ">
                            Face aux Montagnes Noires et aux Monts d’Arrée, les visiteurs sont
                            invités à un voyage intemporel et artistique au coeur d’un site qui
                            s’inscrit pour l’éternité.
                        </p>

                        <div class="flex justifyBetween marTop50">
                            <a class="loisirLinkButton blueButton" href="https://www.lavalleedessaints.com/" target="_blank">La vallée des Saints</a>
                        </div>
                    </div>
                </SectionMainSloted>
    </main>
</template>
<script setup>
const activeQuestion = ref(null);

const handleClick = (e) => {

    if (activeQuestion.value == e.currentTarget.getAttribute('data-questionId')) {
        activeQuestion.value = null
        return
    }

    activeQuestion.value = e.currentTarget.getAttribute('data-questionId')

}


const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, question, answer'
    }
}

const { data: questions } = await useAsyncData(
    "questions",
    async () => {
        const items = await $fetch(`${directusItems}FAQ_dechets`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)

const headerData = {
    images: [
        {
            src: `${directusAssets}f4246d57-f7e1-41cc-928a-eaad77d66a7d.JPG?key=header1500`,
            alt: "Le musé de la mine",
        }
    ],
    title: 'Loisirs',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Mes sorties',
            target: `/mes-sorties/loisirs`,
            active: false
        },
        {
            text: 'Loisirs',
            target: `/mes-sorties/loisirs`,
            active: false
        }
    ]
}
const applyStyleClasses_utils = () => {

    const sections = document.querySelectorAll('.sectionBoxSloted')
    sections[0].classList.remove('whiteSection')
    const stripe = sections[0].querySelector('.sectionBox')
    stripe.classList.add('horizontalGradient')

    sections[1].classList.replace('whiteSection', 'blueSection')

    const pieds = sections[0].querySelectorAll('.pied')

    for(let i = 0; i < pieds.length; i++) {
        pieds[i].style.fill = 'var(--brown)'
    }
 

}
onMounted(() => {
    applyStyleClasses_utils()
})

const styleTallCards = () => {

    const cards = document.querySelectorAll('.tallCard');

    for (let i = 0; i < cards.length; i = i + 3) {
        cards[i].classList.replace('whiteTallCard', 'blueTallCard')
    }
    for (let i = 2; i < cards.length; i = i + 3) {
        cards[i].classList.replace('whiteTallCard', 'brownTallCard')
    }

    if (window.innerWidth < 1075) {
        return
    }

    const tallCardBoxes = document.querySelectorAll('.tallCardBox')

    tallCardBoxes.forEach(box => {
        if ((box.children.length) % 2 != 0) {
            const placeholder = document.createElement('div')
            placeholder.classList.add('fakeTallCard')
            placeholder.classList.add('iLikeToMoveIt')
            box.appendChild(placeholder)
        }
    })

    const tallCards = document.querySelectorAll('.iLikeToMoveIt')

    for (let i = 0; i < tallCards.length; i = i + 4) {
        tallCards[i].classList.add('leftPushedTallCard')
    }
    for (let i = 3; i < tallCards.length; i = i + 4) {
        tallCards[i].classList.add('rightPushedTallCard')
    }
}

onMounted(() => {
    styleTallCards()
})
</script>

<style scoped>
.loisirLinkButton{
    font-size: 18px;
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: var(--shadow);
}
.blueButton {
    color: white;
    background-color: var(--dark-blue);
}
.whiteButton {
    background-color: white;
    color: var(--dark-blue);
}


.brownFoot {
    fill: var(--brown);
}


.tallCard {
    min-height: 700px;
}

.slotedSectionTextBox {
    height: 100%;
}

.bottomBox {
    min-height: 350px;
    padding: 20px;
}


.loisirCardsBox {
    margin-top: 50px;
}

.loisirUL li {
    list-style: disc;
    margin-left: 40px;
}

.questionBox {
    transition: 300ms ease;
}

.questionBox:hover {
    background-color: #0184d525;
    transition: 300ms ease;
}

.question {
    color: var(--brown);
    border-bottom: 1px solid var(--green);
    padding: 5px 10px;
    user-select: none;
}

.answer {
    padding: 20px 40px;
    border-bottom: 1px solid var(--green);
}</style>