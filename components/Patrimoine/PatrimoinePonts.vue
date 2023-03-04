<template>
    <section>
        <SectionTitleBar title="Les ponts" />

        <SectionMainSloted v-for="item in items"
            :data="{ title: null, image: `/images/patrimoine/${item.image}.JPG`, localImage: true }">

            <div class="patrimoineSectionContent h100 flex column justifyCenter gap20 pad20">
                <div class="patrimoineTopBox">
                    <h2 class="patrimoineSubtitle">{{ item.title }}</h2>
                    <i>{{ item.adress }}</i>
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
        "id": 19,
        "adress": "Pont ar Gorret - Poullaouen",
        "image": "bd50e9f1-ea69-4e76-acf0-8c87eb854fdb",
        "imageAlt": "Le pont ar Gorret",
        "slug": null,
        "content": "<p>Ce pont sur l’Aulne, dont le nom rappelle une pêcherie, se trouve sur le trajet de l’ancienne voie romaine reliant Carhaix à Morlaix.</p><p>Il comprend trois arches séparées par deux forts éperons triangulaires appelés « avant-becs » face à l’amont, et « arrière-becs » face à l’aval de la rivière, destinés à briser la force du courant.</p><p>Il est du même type que le pont de Petit-Carhaix et de Moulin-Meur à Carhaix. Deux autres ponts, considérés à tort comme gallo-romains, sont répertoriés dans le canton : celui de Sainte Catherine à Plounévézel et celui de Pont-Pierre à Poullaouen.</p><p>Au XIX e siècle, quatre cents charrettes l’empruntaient chaque jour, transportant vers Morlaix les « saumons » de plomb produits aux forges de Poullaouen.</p>",
        "title": "Le pont ar Gorret"
    },
    {
        "id": 20,
        "adress": "Pont Pierre - Poullaouen",
        "image": "c26d6c7d-7785-4c53-acbc-5cec87906b4a",
        "imageAlt": "Pont Pierre",
        "slug": null,
        "content": "<p>Pont Pierre Ce pont est situé sur le trajet de l’ancienne voie romaine de Carhaix à l’Aber-Wrac’h.</p><p>Il ne comporte qu’une seule arche, en anse de panier, et des chasse-roues protègent la face intérieure de ses parapets.</p>",
        "title": "Pont Pierre"
    },
    {
        "id": 21,
        "adress": "Lémézec - Poullaouen",
        "image": "2fa9c19b-752e-47f6-8a13-e1abfd77560c",
        "imageAlt": "Pont de Lémézec",
        "slug": null,
        "content": "<p>Le pont de Lémézec sépare Poullaouen de Scrignac et enjambe l’Aulne.</p><p>Il se distingue par sa hauteur, conséquences des crues de la rivière. Remplaçant des ouvrages anciens il reflète aussi la typologie des ponts construits vers 1850 par les ingénieurs.</p><p>Un pont avec 2 arches en arc surbaissé, une pile à bec arrondie en pierre de taille de granite, un tablier droit en moellon de schiste et de granite couronné d’une assise en pierre de taille de granite.</p>",
        "title": "Pont de Lémézec"
    }
]

</script>

<style scoped></style>