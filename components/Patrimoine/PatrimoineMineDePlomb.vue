<template>
    <section>
        <SectionTitleBar title="La mine de plomb argentifère" />

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
        "content": "<p>L’importante <b>mine de plomb argentifère</b>, connue depuis l’antiquité, est surtout exploitée du XVIIéme siècle à la première guerre mondiale. Elle est financée et dirigée successivement par des protestants français, allemands, suisses, gallois et anglais<p>",
        "title": "Une importante mine de plomb argentifère exploitée du XVIIème siècle à la 1ère guerre mondiale"
    }
]

</script>

<style scoped></style>