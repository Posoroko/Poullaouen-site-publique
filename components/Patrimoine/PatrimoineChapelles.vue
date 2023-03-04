<template>
    <section>
        <SectionTitleBar title="Les chapelles" />

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
        "id": 3,
        "adress": "Saint-Thudec - Poullaouen",
        "image": "b0f79c7e-7039-4be1-a0e6-6e287ca3756b",
        "imageAlt": "La chapelle Saint-Thudec",
        "slug": null,
        "content": "<p>Construite vers la fin du XVIIIe siècle, la chapelle, ancienne église tréviale *, présente le même parti que l’église Saint-Pierre de Motreff à peu près contemporaine : en croix latine à un seul vaisseau.</p><p>Thudec, sous le patronage duquel est placée la chapelle, pourrait être une forme affectueuse pour Saint-Tugdual, moine missionnaire ayant quitté l’île de Bretagne pour l’Armorique au VIe siècle et \n fondateur de l’évêché de Tréguier.</p><p>La chapelle est à l’abandon quand en 1970 une poignée de bénévoles, réunis en association, \n entreprennent de la restaurer. Grâce aux recettes du pardon qui se tient chaque année le dimanche de la trinité, et à une subvention de la commune, la toiture a pu être restaurée. Le petit clocher a été remonté pierre par pierre. Prochaine étape envisagée : la remise en état du mobilier dont trois maîtres-autels et retables datant de la fin du XVIIe siècle.</p><p> <i> *Le fait que l’église tréviale fasse partie intégrante de l’église matrice est attesté, notamment, par l’absence de service religieux pendant le temps pascal et l’obligation faite aux tréviens de participer aux dépenses de la paroisse, cependant que les clercs succursalistes et leurs ouailles sont tenus de faire 1 ou 2 fois l’an une procession dans l’église paroissiale, en reconnaissance de la supériorité de celle-ci. </i></p>",
        "title": "Chapelle Saint-Thudec"
    },
    {
        "id": 4,
        "adress": "Près de Liorzou - Poullaouen",
        "image": "019b0cbc-d5ff-43a2-b48a-cda76d2973b7",
        "imageAlt": "La chapelle Saint-Victor",
        "slug": null,
        "content": "<p>Édifice reconstruit en 1865 à l’emplacement d’une chapelle plus ancienne, restauré en 1936 puis en 1998.</p><p>Petit édifice de plan rectangulaire à vaisseau unique. Chevet plat.\nClocher-mur surmonté d ́un clocheton à chambre de cloche de plan carré et d ́une flèche en maçonnerie carrée. Gros œuvre en moellon de grès, de schiste et de granite, à l ́exception des encadrements des baies en plein cintre et des chaînages d ́angle, en pierre de taille de granite. Murs enduits de ciment à l ́intérieur. Lambris de couvrement peint en bleu. Sol couvert de dalles d ́ardoise.</p>",
        "title": "Chapelle Saint-Victor"
    },
    {
        "id": 5,
        "adress": "Lescom - Poullaouen",
        "image": "3dfc9f98-42c7-44b7-9d1d-e3d655bdb430",
        "imageAlt": "La chapelle Notre-Dame-du-Paradis",
        "slug": null,
        "content": "<p>La chapelle Notre-Dame-du-Paradis est mentionnée pour la première fois en 1572. De plan rectangulaire à un vaisseau, comme la plupart des chapelles du Poher, elle a été entièrement reconstruite en 1830.</p><p>Bien que dédiée à la Vierge, fêtée début octobre, la chapelle honorait également Saint-Eloi. Chaque année, le lundi de la Pentecôte, une centaine de chevaux y était rassemblée pour le pardon : après la\nprocession et la messe, des courses s’improvisaient, une quête parmi la foule récompensant les vainqueurs.<p>",
        "title": "Chapelle Notre-Dame-du-Paradis"
    },
    {
        "id": 6,
        "adress": "Près de Kervezennec - Poullaouen",
        "image": "dc3995ce-31bb-4919-a634-b674b802b68d",
        "imageAlt": "La chapelle Saint-Sébastien",
        "slug": null,
        "content": "<p>Construite dans le courant du XVIe siècle, cette chapelle présente la disposition générale des chapelles du Poher : un seul vaisseau (la nef) terminé par une abside à trois pans est couvert d’une charpente lambrissée en berceau. A l’exception du panneau central d’un retable probablement daté du XIXe siècle et figurant en calice, tout le mobilier a disparu et notamment les deux statues de Saint Sébastien, patron de la chapelle.</p><p>Soldat de l’empereur romain Dioclétien (284-305) et chargé de traquer les chrétiens, Sébastien adhère pourtant à leur foi. Condamné par Dioclétien, il est alors transpercé de flèches puis battu à mort. Pendant plusieurs siècles, le saint a été invoqué pour lutter contre la peste et il n’est pas impossible que la construction de cette chapelle soit liée à un épisode de peste. Le registre des baptêmes de Poullaouen évoque en effet une « grande contagion (qui en 1567) commansça au faubourg de la ville royalle de Kerahes et sequarta par tout le pays laquelle dura lespace d’uncze moys et en mourut grand nombre infini de peuple ».</p><p>Aujourd’hui, la chapelle est entretenue par un comité de bénévoles qui organise chaque année un pardon le deuxième dimanche d’août.\nMesse, jeux (pour petits et grands), repas et fest-noz attirent chaque année plus de 500 personnes !<p>",
        "title": "Chapelle Saint-Sébastien"
    },
    {
        "id": 7,
        "adress": "Saint-Ambroise - Locmaria Berrien",
        "image": "1af89c93-f3ec-4123-915e-9bdb40205a06",
        "imageAlt": "La chapelle Saint-Ambroise",
        "slug": null,
        "content": "<p>Elle date du 17ème siècle et abrite plusieurs statues : Saint Ambroise, Saint Sylvestre, Saint Michel, et la Vierge-Mère.</p><p>Chaque année, lors du pardon, le 2ème dimanche de septembre, se déroule une procession suivie d’une messe dans la chapelle.</p><p>Selon la tradition, un gâteau breton est béni et partagé entre les fidèles.</p>",
        "title": "Chapelle Saint-Ambroise"
    }
]

</script>

<style scoped></style>