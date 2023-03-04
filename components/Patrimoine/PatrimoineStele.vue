<template>
    <section>
        <SectionTitleBar title="La stèle armoricaine" />

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
        "id": 13,
        "adress": "Place de l'église - Poullaouen",
        "image": "0cc649e0-c3b2-4123-abc9-3c5b5398510f",
        "imageAlt": "La stèle funéraire armoricaine",
        "slug": null,
        "content": "<p>La découverte du fer, vers-800, marque une révolution dans le monde celte. Son usage se généralise en Armorique dans le courant du 5ème siècle avant JC. Dès lors le fer remplace le bois ou la pierre pour la fabrication des outils et permet ainsi la taille de ces stèles. Les menhirs sont des pierres brutes non taillées. Elles sont très nombreuses dans l’ouest de la péninsule.</p><p>Les stèles basses, ou hémisphériques sont majoritaires chez les Vénètes (Morbihan). Les stèles hautes, pouvant atteindre jusqu’à 3m5, ont surtout été découvertes chez les Osismes (Finistère et ouest des Côtes d’Armor). Associées à des lieux de sépulture, ces stèles matérialisaient l’emplacement réservé aux morts. La découverte de certaines d’entre elles dans des sites dédiés à l’habitat laisse supposer d’autres usages possibles. Certaines ont été transformées en bornes militaires à l’époque gallo-romaine, d’autres ont été christianisées au Moyen Age.</p><p>Cette stèle don de la famille Fer à la commune de Poullaouen en 2009, est surtout originale par son matériau. Elle est en effet le seul exemple connu à ce jour de stèle en schiste ardoisier. Les autres sont toutes en granite ou en matériau apparenté. Sa forme reste pour sa part assez classique. Le trou percé dedans a pu servir à passer un fil à linge dans une utilisation récente.</p>",
        "title": "La stèle funéraire armoricaine"
    }
]

</script>

<style scoped></style>