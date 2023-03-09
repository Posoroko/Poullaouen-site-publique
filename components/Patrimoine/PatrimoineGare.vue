<template>
    <section>
        <SectionTitleBar title="Les gares" />

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
        "id": 22,
        "adress": "Poullaouen",
        "image": "210dc445-09f5-415a-b070-545e3922118f",
        "imageAlt": "La gare de Poullaouen",
        "slug": null,
        "content": "<p>Longtemps témoin de l’épopée du réseau breton, la gare de Poullaouen avait été ouverte en 1890. De nombreux voyageurs ont emprunté le train, puis la « Micheline » de la ligne Carhaix-Morlaix.</p>\n<p>Cette gare a également vu défiler de nombreuses marchandises, les plus courantes étaient les pommes, les engrais, des amendements, mais aussi des bestiaux pour les foires.</p>\n<p>La dernière « chef de gare » fut Mademoiselle Huitorel.</p>\n<p>La gare fut ensuite vendue à la coopérative Terres de l’Ouest de Lennon (St Yvi aujourd’hui) pour servir de bureaux. Difficile à entretenir, elle fut détruite en 1991.</p>",
        "title": "La gare de Poullaouen"
    },
    {
        "id": 23,
        "adress": "Locmaria Berrien",
        "image": "8d4ea8da-6496-40b0-8aa4-7bec3f3ed136",
        "imageAlt": "La gare de Locmaria Berrien",
        "slug": null,
        "content": "<p>La gare, dénommée Huelgoat-Locmaria fut ouverte le 28 septembre 1891 et inaugurée officiellement le 16 août 1896 par Félix Faure, Président de la République.</p>\n\n<p>Située sur la ligne Morlaix-Carhaix, cette gare dessert Huelgoat cité distante pourtant de 6 km. Le trafic se développe et prend de l’ampleur : outre le trafic voyageurs, le trafic marchandises est important (bois, granit, engrais, ...). De nombreux commerçants ont des dépôts/magasins en gare.</p>\n\nMais la concurrence de la route sera fatale au petit train, malgré la mise en place d’un service autorail après la guerre. La gare fermera définitivement en avril 1967.\n\nLes roulottes, (entreprise privée) occupent les lieux depuis 1972.\nL’ancienne voie de chemin de fer est maintenant devenue la vélodyssée (Roscoff-Carhaix, voie verte).",
        "title": "La gare de Locmaria Berrien"
    }
]

</script>

<style scoped></style>