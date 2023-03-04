<template>
    <section>
        <SectionTitleBar title="Les chênes" />

        <SectionMainSloted v-for="item in items"
            :data="{ title: null, image: `/images/patrimoine/${item.image}.JPG`, localImage: true }">

            <div class="patrimoineSectionContent h100 flex column justifyCenter gap20 pad20">
                <div class="patrimoineTopBox">
                    <p>{{ item.adress }}</p>
                </div>

                <p class="page-text">
                    {{ item.content }}
                </p>
            </div>
        </SectionMainSloted>
    </section>
</template>

<script setup>

const items = [
    {
        "id": 15,
        "adress": "Le Bourg - Locmaria-Berrien",
        "image": "6160ca6a-e96f-40ae-bf71-2745ce3b32d7",
        "imageAlt": "Chêne près de l'église Notre-Dame-de-la-Bonne-Nouvelle",
        "slug": null,
        "content": "Ils auraient été plantés vers 1589 suite au décès de Catherine de Médicis (Duchesse de Bretagne 1536-1547). Une autre source indique que ce serait un seigneur de la Haie en 1624.\n\nCirconférence pour l’un de 4,62 mètres et pour l’autre 5,90 mètres.",
        "title": "Les chênes"
    }
]

</script>

<style scoped></style>