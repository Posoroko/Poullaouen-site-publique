<template>
    <HeaderMain :data="headerData" />

    <main class="docsMain w100 flex column" v-if="publications">
        <p class="intro-text mainWidth">
            Depuis le 1er juillet 2022, en référence à l’article L 2131-1 du Code Général des Collectivités Territoriales, les actes administratifs font
            l’objet d’une publication électronique.
        </p>
    <div class="marTop50"></div>
    <section class="docsSection docsLatestsSection relative marTop150">        
        <div class="stripe darkBlueBG">
            <div class="content mainWidth">
                <article class="publicationDocCard relative" v-for="doc in publications.latests" :key="doc.id">
                    <figure class="publicationDocCardFigure">
                        <img class="publicationDocCardFigureImg" src="/images/logo.png" alt="">
                    </figure>

                    <b class="docType">{{ types[doc.publicationType] }}</b>

                    <p class="bottomBox">
                        <span class="bottomBoxRow">
                            <span>Date :</span>
                            <span class="date">{{ toDayMonthYearFormat(doc.date) }}</span>
                        </span>
            
                        <span class="bottomBoxRow">
                            <span>Mise en ligne : </span>
                            <span class="date">{{ toDayMonthYearFormat(doc.date_created) }}</span>
                        </span>
                    </p>

                    <div class="downloaderFrame absoluteFull">
                        <DocsDownloadWidget :link="`${directusAssets}${doc.file}`" />
                    </div>
                </article>
            </div>

        </div>
        <div class="piedBox absolute">
            <SectionPieds />
        </div>
    </section>
    <div class="marTop50"></div>
    <section class="marTop150">
        <div class="stripe w100">
            <div class="content mainWidth">
                <article class="publicationDocCard relative" v-for="doc in publications.rest" :key="doc.id">
                    <figure class="frame publicationDocCardFigure">
                        <img class="publicationDocCardFigureImg" src="/images/logo.png" alt="">
                    </figure>

                    <b class="docType">{{ types[doc.publicationType] }}</b>

                    <p class="bottomBox">
                        <span class="bottomBoxRow">
                            <span>Date :</span>
                            <span class="date">{{ toDayMonthYearFormat(doc.date) }}</span>
                        </span>
                
                        <span class="bottomBoxRow">
                            <span>Mise en ligne : </span>
                            <span class="date">{{ toDayMonthYearFormat(doc.date_created) }}</span>
                        </span>
                    </p>

                    <div class="downloaderFrame absoluteFull">
                        <DocsDownloadWidget :link="`${directusAssets}${doc.file}`" />
                    </div>
                </article>
            </div>
        </div>
    </section>        
</main>

    <FooterMain />
</template>
 
<script setup>
const toDayMonthYearFormat = (_date) => {
    let date = new Date(_date)
    let day = ("0" + date.getDate()).slice(-2)
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const year = date.getFullYear()
    return `${day}-${month}-${year}`;
}

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const types = {
    arrete: 'Arrêté municipal',
    deliberation: 'Délibération du conseil municipal',
    liste: 'Liste de délibérations'

}


const fetchOptions = {
    server: true,
}

const { data: publications } = await useAsyncData(
    "Publications",
    async () => {
        const _items = await $fetch(`${directusItems}publications?sort[]=-date_created`, fetchOptions)

        const items = _items.data

        const temp = {
            latests: items.splice(0, 5), 
            rest: items
        }
        
        return temp
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: '/images/header/documents/publications.jpg',
            alt: 'Mairie de Locmaria-Berrien',
        }
    ],
    title: 'Publications réglémentaires',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Ma mairie',
            target: '/ma-mairie/documents/publications-reglementaires',
            active: false
        },
        {
            text: 'Publications réglementaires',
            target: '/ma-mairie/documents/publications-reglementaires',
            active: false
        }
    ]
}


</script>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}



.piedBox {
    width: 100%;
    height: 150%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
}
.piedBox * {
    fill: var(--brown);
}
.dashboard {
    gap: 50px;
    margin-top: 50px;
}

.dashboard .button {
    font-size: 18px;
    font-weight: 600;
    padding: 0.6em 1.5em;
    color: white;
    border-radius: 50px;
}

.docsMain .docsSection .stripe {
    padding: 50px 0;
    z-index: 1;
}

.docsMain .docsSection .stripe .flex {
    color: white;
}



.docsMain .docsLatestsSection .stripe .footBox {
    width: 100%;
    height: 150%;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


@media (max-width: 920px) {
    .footBox {
        display: none;
    }
}

.footBox * {
    fill: var(--brown);
}
</style>