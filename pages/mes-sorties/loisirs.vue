<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            Grâce à votre Pass loisirs, bénéficiez de réductions pour vos diverses activités.
        </p>

        <div class="gradSection">
            <SectionMainSloted
                :data="{ title: 'Le pass loisir', image: '/images/loisirs/cinema.jpg', imageAlt: 'Reciclag à Poullaouën', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <p class="flex column gap20 whiteText">
                        <h4 class="whiteText">Profitez de tarifs réduits avec le «pass’ loisirs» !</h4>
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
                        <p class="w100 flex justifyBetween alignCenter whiteText">
                            <span class="whiteText"> <b class="whiteText">Flyer :</b></span>
                            <span class="flex alignCenter gap20 whiteText">
                                <a class="flex alignCenter gap5" target="_blank" href="/loisirs/new pass loisirs.pdf"><span class="icon whiteText">visibility</span>Consulter</a>
                        
                                <a class="flex alignCenter gap5" href="/loisirs/new pass loisirs.pdf" download><span class="icon whiteText">download</span> Télécharger</a>       
                            </span>
                        </p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionTitleBar title="A Locmaria-Berrien et Poullaouen" />

            <div class="loisirCardsBox flex justifyCenter gap50 wrap">
                <CardsTallMain title="Aéro-Plass - ULM" cardImage="/images/loisirs/ULM.jpg" :localImage="true">
                    <div class="bottomBox flex column gap10">
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
                            <a href="https://www.aero-plass.com" class="textContent">www.aero-plass.com</a>
                        </p>
                    </div>
                </CardsTallMain>
  
                <CardsTallMain title="Maison de la Mine" cardImage="/images/dechets/Déchetterie Locmaria.jpg"
                    :localImage="true">
                    <div class="bottomBox flex column gap10 justifyCenter alignStart">
                        <p class="paragraph">
                            L’Association pour la Sauvegarde de l’Ancienne
                            Mine de plomb et d’argent vous fait découvrir
                            dans son espace muséal le passé minier du site
                            de Huelgoat, Locmaria-Berrien et Poullaouën,
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
                            <span class="textContent">www.minelocmariaberrien.com/</span>
                        </p>
                    </div>
                </CardsTallMain>
                <CardsTallMain title="L'aire de loisirs" cardImage="/images/dechets/Déchetterie Locmaria.jpg"
                    :localImage="true">
                    <div class="bottomBox flex column gap10 justifyCenter alignStart">
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
                            <span class="textContent">02.98.93.50.73</span>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">email</span>
                            <a href="mailto:mairie-de-poullaouen@wanadoo.f r" class="textContent">mairie-de-poullaouen@wanadoo.f r</a>
                        </p>
                        <p class="contentRow flex gap10">
                            <span class="icon">language</span>
                            <a href="www.mairie-poullaouen.fr" class="textContent">www.mairie-poullaouen.fr</a>
                        </p>
                    </div>
                </CardsTallMain>
            </div>
        </div>
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
            src: `${directusAssets}f4246d57-f7e1-41cc-928a-eaad77d66a7d.JPG`,
            alt: "Le musé de la mine",
        }
    ],
    title: 'Loisirs',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Mes sorties',
            target: `/mes-sorties/loisirs`
        },
        {
            text: 'Loisirs',
            target: `/mes-sorties/loisirs`
        }
    ]
}
const applyStyleClasses_utils = () => {

    const sections = document.querySelectorAll('.sectionBoxSloted')

    const stripe = sections[0].querySelector('.sectionBox')
    stripe.classList.add('horizontalGradient')

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
}

onMounted(() => {
    styleTallCards()
})
</script>

<style scoped>

.gradSection::deep * {
    color: white;
}


.tallCard {
    min-height: 650px;
}

.slotedSectionTextBox {
    height: 100%;
}

.bottomBox {
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