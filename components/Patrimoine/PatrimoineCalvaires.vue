<template>
    <section class="calvairesSection horizontalGradient">
        <SectionTitleBar title="Les calvaires" />

        <div class="calvairesContent mainWidth flex justifyCenter wrap">
            <div class="calvaireCard flex column gap10" v-for="item in items" :key="item.id">
                <div class="calvaireCardTopBox flex column">
                    <b>{{ item.title }}</b>
                    <p>{{ item.adress }}</p>
                </div>
                <div class="calvaireCardFrame shadow w100">
                    <img class="objectFitCover" :src="`/images/patrimoine/${item.image}.JPG`" :alt="item.imageAlt" />
                </div>

                <div class="calvaireCardBottomBox">
                    <p v-html="item.content"></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const items = [
    {
        "id": 8,
        "adress": "Kerbizien - Poullaouen",
        "image": "df1a61fe-6c8b-438c-80d3-1b4e7224215a",
        "imageAlt": "Le calvaire de Kerbizien",
        "slug": null,
        "content": "Les personnages représentés sur les calvaires, ici saint Pierre clefs à la main et sainte Madeleine, sont autant de scènes compréhensibles de tous et sur lesquelles s’appuient les prédicateurs pour enseigner le\ncatholicisme à un peuple ne sachant en général ni lire ni écrire.",
        "title": "Calvaire de Kerbizien (XVIè s.)"
    },
    {
        "id": 9,
        "adress": "La Croix Neuve - Poullaouen",
        "image": "8631638f-2d7f-4443-9c1f-969f4822828b",
        "imageAlt": "La croix Neuve",
        "slug": null,
        "content": "Bien éloigné des calvaires monumentaux pouvant compter jusqu’à 200 personnages, cette simple croix en granit a beaucoup souffert des outrages du temps : le personnage au revers a complètement disparu.",
        "title": "La Croix Neuve (1705)"
    },
    {
        "id": 10,
        "adress": "Kerroland - Poullaouen",
        "image": "f4b01403-d4f8-4fac-9b20-f6f65b287743",
        "imageAlt": "La croix de Kerroland",
        "slug": null,
        "content": "L’inscription 1825, lisible sur le socle de cette croix en granit, indique l’année durant laquelle elle a été remontée.",
        "title": "Croix de Kerroland"
    },
    {
        "id": 11,
        "adress": "Le Bourg - Locmaria Berrien",
        "image": "51880a8f-53f0-4780-9f82-86921a95428b",
        "imageAlt": "Le calvaire de l'église Note-Dame-de-la-Bonne-Nouvelle",
        "slug": null,
        "content": "Calvaire en pierre de Kersanton du 16ème siècle.",
        "title": "Calvaire de l’église"
    },
    {
        "id": 12,
        "adress": "Saint-Ambroise - Locmaria Berrien",
        "image": "9e41720f-d818-4dde-942e-cbbcf5576117",
        "imageAlt": "Le calvaire de Saint-Ambroise",
        "slug": null,
        "content": "La croix de Saint Ambroise date du 16ème siècle et porte sur la face ouest un christ en croix et sur la face opposé une sainte femme. Une importante restauration a été effectuée en 1997 par les soins de Mr  Olivier DANICAN, sculpteur et peintre de Landeleau.",
        "title": "Calvaire de Saint Ambroise"
    }
]

</script>


<style scoped>
.calvairesSection {
    padding-bottom: 80px;
}
.calvairesContent {
    gap: 50px;
}
.calvaireCard {
    width: 300px;
    height: 450px;
    background-color: #fff;
    padding: 18px;
    border-radius: 10px;
}
.calvaireCardFrame{
    border-radius: 5px;
    overflow: hidden;
}
.calvaireCardTopBox p{
    color: var(--brown);
    font-style: italic;
}
.calvaireCardBottomBox {

}
</style>