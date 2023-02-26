<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
       

        <div>
            <SectionMainSloted
                :data="{ title: 'L’expérimentation de la tarification incitative', image: '/images/dechets/sacs.jpg', imageAlt: 'Reciclag à Poullaouën', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <p>
                        Pour faire face aux augmentations du coût de traitement de nos ordures
                        ménagères, les élus de Poher communauté ont décidé d’expérimenter
                        la mise en place de la redevance incitative sur une commune test,
                        Poullaouen. La redevance incitative (RI) se veut plus équitable car
                        chaque usager paye proportionnellement à sa production de déchets.
                        <br><br>
                        <b>Ce qui a changé</b> : plus besoin d’aller déposer vos sacs jaunes dans
                        les points d’apport volontaire (aires grillagées), la collecte s’organise
                        maintenant au plus près des habitations. Les ordures ménagères,
                        quant à elles, se collectent grâce à des bacs gris individuels équipés
                        d’une puce électronique.
                        Sur la commune de Poullaouen, 2 camions bennes passent ainsi une
                        semaine sur deux pour les bacs et également pour les sacs jaunes.
                        Les résultats sont plutôt encourageants.
                        Le tri est de bonne qualité. Les usagers respectent les consignes de
                        collecte (bac fermé…) et semblent apprécier être collectés au plus
                        près de leur habitation. L’expérimentation va se poursuivre encore
                        quelques temps.
                    </p>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Le ramassage des ordures ménagères', image: '/images/dechets/camion.jpg', imageAlt: 'Offisme de tourisme de Carhaix', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter alignStart pad20 gap10">
                    <p>
                        Le ramassage des ordures ménagères s’effectue les mercredis sur
                        Poullaouen et les lundis sur Locmaria-Berrien, une semaine sur deux.
                        La collecte est divisée en deux secteurs géographiques sur Poullaouen
                        (semaines paires et impaires).
                        <br> <br>
                        Chaque foyer est doté d’un bac individuel. Le bac doit être sorti
                        impérativement avant 8 heures (ou la veille au soir) devant la maison
                        ou à l’emplacement du point de rapprochement situé au bord de la
                        route, la poignée tournée vers la route (pour faciliter la prise en main
                        par les agents).
                        <br> <br>
                        Les sacs jaunes seront posés à côté du conteneur. Ils sont disponibles
                        gratuitement en mairie de votre commune ou à la Maison des Services
                        aux Publics située Place de la Tour d’Auvergne à Carhaix.
                    </p>

                    <div class="infoBox">
                        <p class="w100 flex justifyBetween alignCenter">
                            <span> <b>Poullaouen :</b> Liste des villages - semaines paires</span>
                            <span class="flex alignCenter gap5">
                                <span class="icon">visibility</span>
                                <a href="">consulter</a>
                            </span>
                        </p>
                        <p class="w100 flex justifyBetween">
                            <span> <b>Poullaouen :</b> Liste des villages - semaines impaires</span>
                            <span class="flex alignCenter gap5">
                                <span class="icon">visibility</span>
                                <a href="">consulter</a>
                            </span>
                        </p>
                        <p class="w100 flex justifyBetween">
                            <span> <b>Locmaria-Berrien :</b> Liste des villages</span>
                            <span class="flex alignCenter gap5">
                                <span class="icon">visibility</span>
                                <a href="">consulter</a>
                            </span>
                        </p>
                    </div>

                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Le tri sélectif', image: '/images/dechets/consignes.jpg', imageAlt: 'Campagne Poullaouënaise', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter alignStart pad20 gap10">

                    <p class="dechetParagraph">
                        Au sein de Poher communauté la collecte sélective s’effectue en sacs jaunes. Les déchets recyclables sont collectés le même mercredi que
                        la collecte des ordures ménagères (deux camions circulent, ils peuvent ne pas se suivre …).
                        <br>
                        <br>
                        Merci de présenter vos sacs jaunes à coté de vos conteneurs le jour de la collecte.
                        <br> <br>
                        Les sacs jaunes sont disponibles gratuitement en mairie de votre commune ou à la Maison des Services aux Publics située Place de la Tour d’Auvergne à Carhaix.
                        <br> <br>
                        Des colonnes à verres sont à votre disposition pour évacuer vos bouteilles, pots et bocaux :
                        <br> <br>
                        <ul>
                            <li>Au Bourg de Poullaouen, devant le stade.</li>
                            <li>Au Guilly</li>
                            <li>Au croissant</li>
                        </ul>
                    </p>

                    <div class="infoBox w100">
                        <p class="flex justifyBetween alignCenter"> 
                            <b>Consigne du tri sélectif</b> 
                            
                            <span class="flex alignCenter gap10">
                                <span class="icon">visibility</span>
                                <a class="externalLink" href="https://www.poher.bzh">consulter</a>
                            </span>
                            <span class="flex alignCenter gap10">
                                <span class="icon">download</span>
                                <a class="externalLink" href="https://www.poher.bzh">télécharger</a>
                            </span>
                        </p>
                    </div>

                </div>
            </SectionMainSloted>

            <SectionMainSloted :data="{ title: 'Que deviennent les emballages ?', image: '/images/dechets/alu.jpg', imageAlt: 'Recyclage', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter alignStart pad20 gap10">
                    <h4>Le verre :</h4>
                    <p>Il s’agit d’un matériau qui ne perd ni matière, ni qualité dans son processus
                        de valorisation. Il est donc recyclable à l’inf ini. C’est pourquoi il
                        est important de jeter ses pots, bocaux et bouteilles en verre au bon
                        endroit, dans les colonnes à verre situées sur le territoire.
                    </p>

                    <h4>L’aluminium :</h4>
                    <p>Il se recycle presque aussi bien que le verre et permet la fabrication
                        des nouvelles boites de conserve et canettes, portes et fenêtres ainsi
                        que des pièces pour l’industrie (automobile, vélos …). Avec 2 kg de canettes,
                        on peut faire une trottinette
                    </p>

                    <h4>Le papier :</h4>
                    <p>se recycle. 1 Tonne de papier recyclé permet de sauver 17 arbres de forêt.</p>

                    <h4>Le plastique :</h4>
                    <p>Il sera trié suivant sa qualité puis valoriser en f ibre synthétique pour les industries textiles ou en matériaux de construction.</p>

                    <h4>L’acier :</h4>
                    <p>Il est très utilisé dans le bâtiment, les industries automobiles, aéronautique… ainsi que pour la fabrication de boites de conserve et l’électroménager.</p>
                </div>
            </SectionMainSloted>

            <SectionMainSloted :data="{ title: 'Le compostage', image: '/images/dechets/compost.jpg', imageAlt: 'Recyclage', localImage: true }">
                    <div class="slotedSectionTextBox page-text flex column justifyCenter alignStart pad20 gap10">
                        <p>Simple, écologique et utile, voilà un écogeste qui convient à tous. Les déchets de nos foyers sont constitués pour un tiers environ de déchets
                            organiques : déchets de cuisine et de jardin. Cela peut représenter entre 75 et 100 kg par an et par habitant.
                            <br> <br>
                            Ces déchets organiques sont aujourd’hui collectés et incinérés au même titre que les ordures ménagères alors qu’ils sont facilement biodégradables.
                            <br><br>
                            Le <b>compost</b> issu de la décomposition des déchets organiques est un  produit fertile comparable au <b>terreau</b>. La gestion domestique des
                            déchets organiques contribue pleinement à la réduction à la source des déchets, tout en permettant un retour à la terre de la matière organique via le compost produit.
                            <br><br>
                            C’est la raison pour laquelle Poher communauté souhaite favoriser et développer cette pratique en menant une opération de promotion pour
                            l’acquisition d’un composteur. Les composteurs proposés sont en bois conçus dans une logique de développement durable, environnementale et sociale.
                            <br><br>
                            Deux équipements sont proposés à la vente :
                            Un <b>composteur</b> d’une contenance de 300 litres au prix de <b>15€</b>.
                            Un <b>bio-seau</b> à <b>3€</b>, idéal pour récupérer les déchets de cuisine destinés
                            au composteur.
                        </p>

                        <div class="infoBox w100">
                            <p>Pour se procurer un composteur ou un bio-seau :</p>
                            <p><span class="icon">call</span>02 98 99 84 43 / 06 45 47 39 62</p>
                            <p><span class="icon">mail</span><a class="externalLink" href="mailto: tri@poher.bzh">tri@poher.bzh</a></p>
                            <p class="flex justifyBetween alignCenter"> 
                                <span>Guide de compostage</span>
                                <span class="flex alignCenter gap10">
                                    <span class="icon">visibility</span>
                                    <a class="externalLink" href="https://www.poher.bzh">consulter</a>
                                </span>
                                
                            </p>
                        </div>
                    </div>
                </SectionMainSloted>

                <div class="flex justifyCenter gap20 wrap">
                    <CardsTallMain  title="Déchetterie de Carhaix" cardImage="/images/dechets/Déchetterie Carhaix.jpg" :localImage="true">
                        <div class="bottomBox">
                            <p class="contentRow flex">
                                <span class="icon">location_on</span>
                                <span class="textContent">Kervoazon</span>
                            </p>
                            <p class="contentRow flex">
                                <span class="icon">schedule</span>
                                <span class="textContent">Du lundi au samedi de 9h à 12h et de 13h30 à 18h, sauf le mardi après-midi, ouverture à 15h.</span>
                            </p>
                            <p class="contentRow flex">
                                <span class="icon">call</span>
                                <span class="textContent">02 98 93 37 36</span>
                            </p>
                        </div>
                    </CardsTallMain>

                    <CardsTallMain  title="Déchetterie de Locmaria-Berrien" cardImage="/images/dechets/Déchetterie Locmaria.jpg" :localImage="true">
                        <div class="bottomBox flex column gap10 justifyCenter alignStart">
                            <p class="contentRow flex">
                                <span class="icon">location_on</span>
                                <span class="textContent">ZA du Vieux Tronc</span>
                            </p>
                            <p class="contentRow flex">
                                <span class="icon">schedule</span>
                                <span class="textContent">Du lundi au samedi de 9h15 à 12h et de 14h à 17h45. Fermée le lundi après-midi et le mardi toute la journée</span>
                            </p>
                            <p class="contentRow flex">
                                <span class="icon">call</span>
                                <span class="textContent">02 98 99 82 49</span>
                            </p>
                        </div>
                    </CardsTallMain>
                </div>

                <section class="mainWidth marTop20">
                    <SectionTitleBar title="Foire aux questions sur la tarification incitative" />
                    <div class="flex column">
                        <div class="questionBox flex column gap10 pointer" @click="handleClick" v-for="question in questions" :key="question.id" :data-questionid="`question${question.id}`">
                            <p class="question flex alignCenter justifyBetween ">
                                <span class="">{{ question.question }}</span>
                                <span class="icon pointer" v-if="activeQuestion != `question${question.id}`">arrow_drop_up</span>
                                <span class="icon pointer" v-if="activeQuestion == `question${question.id}`">arrow_drop_down</span>
                            </p>
                            <p class="answer" v-if="activeQuestion == `question${question.id}`">
                                La quantité de déchets d’ordures ménagères sur le territoire du Poher est constante alors que les tonnages du tri (sacs jaunes) ont tendance à
                                diminuer.
                                L’objectif principal de la tarification incitative est de nous responsabiliser, nous usagers, par rapport à notre production d’ordures ménagères
                                (donc de nous inciter à produire moins) et d’encourager les bons gestes à savoir le tri sélectif et également le compostage.
                                Le nouveau dispositif de collecte mis en place sur Poullaouen offre un meilleur service de proximité. La dotation d’un bac individuel pour chaque
                                foyer permet au service de collecter les ordures ménagères et sacs jaunes, au plus près de l’habitation et ainsi de supprimer les pollutions visuelles
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
    
    if(activeQuestion.value == e.currentTarget.getAttribute('data-questionId')){
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
            src: `${directusAssets}8229ef13-b4bd-4e11-968d-2fae4ac359a2.jpg?key=header1500`,
            alt: "L'entrée du bourg de Poullaouen",
        }
    ],
    title: 'Gestion des déchets',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'mes infos',
            target: `/mes-infos/gestion-des-dechets`
        },
        {
            text: 'gestion des déchets',
            target: `/mes-infos/gestion-des-dechets`
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

<style scoped>
.slotedSectionTextBox {
    height: 100%;
}

.dechetParagraph ul li {
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
}

</style>