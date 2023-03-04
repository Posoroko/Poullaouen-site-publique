<template>
    <section>
        <SectionTitleBar title="Le château" />

        <SectionMainSloted v-for="item in items"
            :data="{ title: null, image: null, localImage: true }">

            <div class="patrimoineSectionContent h100 flex column justifyCenter gap20 pad20">
                    <div class="patrimoineTopBox">
                        <h2 class="patrimoineSubtitle">{{ item.title }}</h2>
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
        "id": 25,
        "adress": "Le Bourg - Locmaria Berrien",
        "image": "6048d395-3017-4d67-b088-a679d5301727",
        "imageAlt": "Le château",
        "slug": null,
        "content": "<p>Construit sur la commune de Poullaouen vers 1750 sous le règne de Louis XV, proche du lieu- dit Pors Ar Maner, il comprenait 44 pièces où étaient logés les cadres supérieurs dans les appartements d’une superficie proportionnelle à leur grade.Le caissier le Coursonnais, seul off icier d’origine bretonne y disposait de six pièces au rez de chaussée, tandis qu’un sous inspecteur devait se contenter de deux chambres mansardées au 1er étage.Les élèves ingénieur de l’école des Mines en stage à Poullaouen étaient relégués dans des mansardes au 2ème étage.Un plan de la Mine daté de 1776 nous montre que chaque maître mineur, fondeur, charpentier, serrurier et machiniste disposait d’une maison individuelle près de son lieu de travail..</p><p>Une école existait à cette époque, l’enseignement était dispensé par le chapelain de la Mine.</p><p>La liquidation de la Société Civile des Mines de Poullaouen et Huelgoat est décidée à l’assemblée générale du 25 Juillet 1863. 30 Juillet 1874, Le GUILLOU François époux de GEFFROY Marie Renée, cultivateur et aubergiste à Locamaria- Berrien se porte acquéreur des matériaux à provenir de la démolition du château et de l’écurie, il s’engage à démolir les édifices et à enlever les matériaux sous les deux ans.Sous toute réserve ces matériaux auraient servi à édifier un hôtel à Mur de Bretagne.<p>",
        "title": "Le château"
    }
]

</script>

<style scoped></style>