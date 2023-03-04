<template>
    <section>
        <SectionTitleBar title="Les églises"/>

        <SectionMainSloted v-for="item in items" :data="{ title: null, image: `/images/patrimoine/${item.image}.JPG`, localImage: true }">

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
            "id": 1,
            "adress": "Place de la mairie - Poullaouen",
            "image": "94008566-9f1c-4526-9100-a65614c19f7f",
            "imageAlt": "L'église Saint-Pierre et Saint-Paul",
            "slug": null,
            "content": "<p>L’église Saint-Pierre-et-Saint-Paul (XVIIème siècle), a été restaurée au XIXème et XXème siècle.</p> <p> La façade et le clocher de cette église sont classés Monument Historique depuis le 21 décembre 1914.</p> <p>Le clocher-porche a la particularité d’être orné à l’extérieur de colonnes superposées évoquant assez librement les styles toscan, ionique et corinthien.</p> <p>La charpente intérieure est lambrissée. Les autels sont au nombre de trois : Le maître-autel et son étable entouré de statues de saint Pierre et de saint Paul, l’autel de saint Joseph, autrefois de sainte Barbe, et celui du rosaire.</p> <p>Quatre statues de saints sont encore préservées : saint Apolline avec des tenailles dans la main droite et la palme du martyre dans la main gauche, sainte Barbe, offerte par les mineurs de Poullaouen, et deux grands saints bretons, saint Modet et saint Guinal ou Gwenaël. L’originalité de cette église tient dans son porche septentrional et dans le relatif développement en hauteur de ses façades latérales.</p>",
            "title": "Eglise Saint-Pierre et Saint-Paul"
        },
        {
            "id": 2,
            "adress": "Le Bourg - Locmaria Berrien",
            "image": "d7567ee1-01a5-4be3-8d00-9242650c66f4",
            "imageAlt": "L'église Notre-Dame-de-la-Bonne-Nouvelle",
            "slug": null,
            "content": "<p>Au 12ème siècle, fin de l’ère romane Le seigneur de la Haie Douar édifie la chapelle du pré (chapel par prat). A cette époque, Locmaria dépend de la paroisse de Berrien.</p><p> Au 15ème siècle, l’église est remaniée à l’époque gothique.</p><p>En 1630 obtention de la trêve de Locmaria. <p>En 1802 - Locmaria est élevée au rang de paroisse (évêché de Cornouaille). L’église est placée sous le patronage de Notre Dame de bonne nouvelle.<p>1725 - restauration de la tour de clocher.</p><p>1830 - choeur rebâti (décès du 1er maire de Locmaria, Joachim Guillart de Kersausic (pierre tombale près de la porte d’entrée du côté gauche).</p> <p>1884 - pose des cloches.</p> <p>1949 - nouvelle restauration.</p>",
            "title": "Eglise Notre-Dame-de-la-Bonne-Nouvelle"
        }
    ]
    
</script>

<style scoped></style>