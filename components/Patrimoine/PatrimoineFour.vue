<template>
    <section>
        <SectionTitleBar title="Four à pain" />

        <SectionMainSloted v-for="item in items"
            :data="{ title: null, image: `/images/patrimoine/${item.image}.JPG`, localImage: true }">

            <div class="patrimoineSectionContent h100 flex column justifyCenter gap20 pad20">
                <div class="patrimoineTopBox">
                    <i class="patrimoineSubtitle">{{ item.adress }}</i>
                </div>

                <div class="page-text flex column gap10">
                    <p>En 2015, le comité des fêtes prend en charge la construction de ce four à pain. Les employés municipaux et quelques bénévoles y travaillent chacun apportant ses connaissances. Le 24 juin 2016 , il est inauguré.</p>
                    
                    <p>Ce four est très fonctionnel. Construit en briques réfractaires alimentaires, on peut y cuire :</p>
                    <ul>
                        <li>&nbsp  - 37 boules de pain,</li>
                        <li>&nbsp - pizzas,</li>
                        <li>&nbsp - rôtis, ...</li>
                    </ul>

                    <p>Pour la cuisson du pain, le four est chauffé à 380°, les braises sont alors sorties.</p>

                    <p>La sole nettoyée à la «libouden» (chiffon mouillé fixé à un manche pour débarrasser les résidus du feu) avant d’y introduire la pâte.</p>

                    <p>Ce four est à la disposition de la population. Il suffit d’apporter son bois pour le chauffer.</p>
                </div>
            </div>
        </SectionMainSloted>
    </section>
</template>

<script setup>

const items = [
 	{
        "id": 25,
        "adress": "Le Bourg - Locmaria Berrien",
        "image": "6048d395-3017-4d67-b088-a679d5301727",
        "imageAlt": "Le four à pain",
        "slug": null,
        "content": "En 2015, le comité des fêtes prend en charge la construction de ce four à pain. Les employés municipaux et quelques bénévoles y travaillent chacun apportant ses connaissances. Le 24 juin 2016 , il est inauguré.\n\nCe four est très fonctionnel. Construit en briques réfractaires alimentaires, on peut y cuire :\n- 37 boules de pain,\n- pizzas,\n- rôtis, ...\n\nPour la cuisson du pain, le four est chauffé à 380°, les braises sont alors sorties.\n\nLa sole nettoyée à la «libouden» (chiffon mouillé fixé à un manche pour débarrasser les résidus du feu) avant d’y introduire la pâte.\n\nCe four est à la disposition de la population. Il suffit d’apporter son bois pour le chauffer.",
        "title": "Four à pain"
    }
]

</script>

<style scoped></style>