<template>
    <section>
        <SectionTitleBar title="Les lavoir et fontaine" />

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
        "id": 16,
        "adress": "Le bourg - Locmaria Berrien",
        "image": "d95ca6ad-dd7c-42ce-82a1-47ad63d5c881",
        "imageAlt": "Lavoir de Locmaria Berrien",
        "slug": null,
        "content": "<p>Le 28 septembre 1947, le conseil municipal, alloue une somme de 160 000 anciens francs pour la construction du lavoir. Les travaux débutent en 1948.</p><p>Guillaume LOZACH, menuisier à Locmaria-Berrien réalise l’ouvrage avec l’aide de M. COLLOBERT, cantonnier municipal et de Yves BIZOUARN, journalier communal.</p><p>L’histoire dit qu’il y aurait une pierre tombale sous l’abreuvoir.<p>",
        "title": "Le lavoir"
    },
    {
        "id": 17,
        "adress": "Le bourg - Locmaria Berrien",
        "image": "2b509eff-b0b4-4072-b73e-0f7db2891808",
        "imageAlt": "Fontaine de Locmaria Berrien",
        "slug": null,
        "content": "<p>COMPAGNIE DES MINES DE BASSE BRETAGNE : 1732 - 1866\nParement de l’entrée de la galerie de l’aqueduc (1830), déplacé pour sa sauvegarde en 1988.</p><p>Les eaux du canal supérieur passaient par la galerie de l’aqueduc (370 mètres) pour actionner les puissantes machines à colonne d’eau de JUNKER (250.CV) installées dans un puits 75 mètres plus bas.</p><p>Les eaux d’exhaure et les eaux motrices rejoignaient la rivière d’Argent par la galerie d’écoulement dotée d’un parement identique en partie ennoyé.</p><p>Différentes maquettes dont celle de la machine de JUNKER (la plus importante au monde à l’époque) sont visibles à la Maison de la Mine.<p>",
        "title": "La fontaine"
    }
]

</script>

<style scoped></style>