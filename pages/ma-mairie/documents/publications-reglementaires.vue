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
            <div class="content mainWidth w100 flex justifyCenter wrap gap20">
                <article class="mairieDocCard relative w100" v-for="doc in publications.latests" :key="doc.id">
                    <figure class="">
                        <img src="/images/logo.png" alt="">
                    </figure>

                    <div class="bottomBox">
                        <p>{{types[doc.publicationType]}}</p>
                        <p>{{ new Date(doc.date).toLocaleString().slice(0, 11) }}</p>
                    </div>

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
            <div class="content mainWidth w100 flex justifyCenter wrap">
                <article class="mairieDocCard relative" v-for="doc in publications.rest" :key="doc.id">
                    <figure class="frame">
                        <img src="/images/logo.png" alt="">
                    </figure>

                    <div class="bottomBox flex column gap10">
                        <p>{{ types[doc.publicationType] }}</p>
                        <p>{{ new Date(doc.date).toLocaleString().slice(0, 11) }}</p>
                    </div>

                    <div class="downloaderFrame absoluteFull">
                        <DocsDownloadWidget :link="`${directusAssets}${doc.file}`" />
                    </div>
                </article>
            </div>
        </div>
    </section>        
</main>
</template>
 
<script setup>

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
        const _items = await $fetch(`${directusItems}publications`, fetchOptions)

        const items = _items.data

        const temp = {
            latests: items.splice(0, 2), 
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
            target: '/'
        },
        {
            text: 'Ma mairie',
            target: '/ma-mairie/documents/publications-reglementaires'
        },
        {
            text: 'Publications réglementaires',
            target: '/ma-mairie/documents/publications-reglementaires'
        }
    ]
}


</script>

<style scoped>
.mairieDocCard {
    width: 210px;
    height: 248px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.mairieDocCard figure {
    width: 100px;
    margin: auto;
}

.mairieDocCard figure img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.mairieDocCard * {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: var(--dark-blue);
}
.mairieDocCard .bottomBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
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