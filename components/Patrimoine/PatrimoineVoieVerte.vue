<template>
    <section>
        <SectionTitleBar title="La voie verte" />

        <SectionMainSloted v-for="item in items"
            :data="{ title: null, image: `/images/patrimoine/${item.image}.JPG`, localImage: true }">

            <div class="patrimoineSectionContent h100 flex column justifyCenter gap20 pad20">
                <div class="patrimoineTopBox">
                    <h2 class="patrimoineSubtitle">{{ item.title }}</h2>
                    <p>{{ item.adress }}</p>
                </div>

                <div v-html="item.content" class="page-text flex column gap10">
                    
                </div>
            </div>
        </SectionMainSloted>
    </section>
</template>

<script setup>

const items = [
    {
        "adress": "Locmaria-Berrien - Poullaouen",
        "image": "bd50e9f1-ea69-4e76-acf0-8c87eb854fdb",
        "imageAlt": "Le pont ar Gorret",
        "slug": null,
        "content": "<p>L’origine de la voie verte n° 7 était une ligne de chemin de fer créée dans le but de désenclaver le département du Finistère.L’ouverture de la première ligne, longue de 49 km, a lieu le 28 septembre 1891: l’axe Morlaix- Carhaix est né.</p><p> Après des périodes très fastes entre les deux guerres et dans les années 50, ce réseau disparait progressivement dans les années 1960 au profit de l’automobile.Dorénavant, séparée de la circulation motorisée, la voie verte est dédiée à la pratique de loisirs et au tourisme(piétons, vélos, chevaux...).</p><p> Les matériaux et techniques utilisés pour l’aménagement, l’intégration paysagère et l’entretien, les publics visés(usagers des modes doux, personnes à mobilité réduite), la large concertation réalisée avec les partenaires locaux et la valorisation du territoire font de ce projet un modèle de «maillage» durable entre tous les usagers et acteurs locaux (tourisme vert, territoires ruraux, activités de loisirs).</p><p> La voie verte vous propose plusieurs aires d’accueil et de service qui vous permettront de vous reposer et pique - niquer durant votre périple. Ces aires sont équipées de bancs(en bois ou plastique), de mobilier spécifique : poubelles, tables de pique - nique.<p>",
        "title": "La véloroute voie verte n°7 - itinéraire Carhaix-Morlaix"
    }
]

</script>

<style scoped></style>