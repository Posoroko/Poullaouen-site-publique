<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            Grâce à votre Pass loisirs, bénéficiez de réductions pour vos diverses activités.
        </p>

        <div>
            <SectionMainSloted
                :data="{ title: 'L’expérimentation de la tarification incitative', image: '/images/dechets/sacs.jpg', imageAlt: 'Reciclag à Poullaouën', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap10">
                    <p>
                        <h4>Profitez de tarifs réduits avec le «pass’ loisirs» !</h4>
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
                        <p class="w100 flex justifyBetween alignCenter">
                            <span> <b>flyer:</b></span>
                            <span class="flex alignCenter gap20">
                                <a class="flex alignCenter gap5" href=""><span class="icon">visibility</span>consulter</a>
                        
                                <a class="flex alignCenter gap5" href=""><span class="icon">download</span> télécharger</a>       
                            </span>
                        </p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionTitleBar title="A Locmaria-Berrien et Poullaouen" />

            <div class="flex justifyCenter gap20 wrap">
                <CardsTallMain title="Aéro-Plass - ULM" cardImage="/images/loisirs/ULM.jpg" :localImage="true">
                    <div class="bottomBox">
                        <p class="paragraph">
                            Laurent PLASSART, pilote chevronné, instructeur
                            et professionnel depuis plus de 25 ans et titulaire
                            de nombreux titres dont une médaille de bronze
                            aux championnats du monde en 2005, propose : <br>
                            <ul class="loisirUL">
                                <li>Baptêmes de l’air,</li>
                                <li>Survol des Monts d’Arrée</li>
                                <li>Photos Aériennes</li> 
                            </ul>
                        </p>
                        <p class="contentRow flex">
                            <span class="icon">location_on</span>
                            <span class="textContent">Stancou - Poullaouen</span>
                        </p>
                        <p class="contentRow flex">
                            <span class="icon">call</span>
                            <span class="textContent">02.98.93.37.36</span>
                        </p>
                    </div>
                </CardsTallMain>

                <CardsTallMain title="Maison de la Mine" cardImage="/images/dechets/Déchetterie Locmaria.jpg"
                    :localImage="true">
                    <div class="bottomBox flex column gap10 justifyCenter alignStart">
                        <p class="contentRow flex">
                            <span class="icon">location_on</span>
                            <span class="textContent">ZA du Vieux Tronc</span>
                        </p>
                        <p class="contentRow flex">
                            <span class="icon">schedule</span>
                            <span class="textContent">Du lundi au samedi de 9h15 à 12h et de 14h à 17h45. Fermée le lundi
                                après-midi et le mardi toute la journée</span>
                        </p>
                        <p class="contentRow flex">
                            <span class="icon">call</span>
                            <span class="textContent">02.98.99.82.49</span>
                        </p>
                    </div>
                </CardsTallMain>
            </div>

            <section class="mainWidth marTop20">
                <SectionTitleBar title="Foire aux questions sur la tarification incitative" />
                <div class="flex column">
                    <div class="questionBox flex column gap10 pointer" @click="handleClick" v-for="question in questions"
                        :key="question.id" :data-questionid="`question${question.id}`">
                        <p class="question flex alignCenter justifyBetween ">
                            <span class="">{{ question.question }}</span>
                            <span class="icon pointer"
                                v-if="activeQuestion != `question${question.id}`">arrow_drop_up</span>
                            <span class="icon pointer"
                                v-if="activeQuestion == `question${question.id}`">arrow_drop_down</span>
                        </p>
                        <p class="answer" v-if="activeQuestion == `question${question.id}`">
                            La quantité de déchets d’ordures ménagères sur le territoire du Poher est constante alors que
                            les tonnages du tri (sacs jaunes) ont tendance à
                            diminuer.
                            L’objectif principal de la tarification incitative est de nous responsabiliser, nous usagers,
                            par rapport à notre production d’ordures ménagères
                            (donc de nous inciter à produire moins) et d’encourager les bons gestes à savoir le tri sélectif
                            et également le compostage.
                            Le nouveau dispositif de collecte mis en place sur Poullaouen offre un meilleur service de
                            proximité. La dotation d’un bac individuel pour chaque
                            foyer permet au service de collecter les ordures ménagères et sacs jaunes, au plus près de
                            l’habitation et ainsi de supprimer les pollutions visuelles
                            liées aux bacs collectifs encombrés et également aux dépôts sauvages
                        </p>
                    </div>
                </div>
            </section>
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
            src: `${directusAssets}e5a79bfd-1d27-48bd-b294-5d66701bb0f8.JPG?key=header1500`,
            alt: "Le musé de la mine",
        }
    ],
    title: 'Loisirs',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'mes sorties',
            target: `/mes-sorties/loisirs`
        },
        {
            text: 'loisirs',
            target: `/mes-sorties/loisirs`
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

const styleTallCards = () => {

    const cards = document.querySelectorAll('.tallCard');
    console.log(cards)
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

<style>
.slotedSectionTextBox {
    height: 100%;
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