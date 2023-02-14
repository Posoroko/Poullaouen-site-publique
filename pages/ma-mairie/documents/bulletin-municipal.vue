<template>
    <HeaderMain :data="headerData" />

    <main class="w100 flex column">
        <p class="intro page-text mainWidth">
            Le bulletin municipal réalisé par la commission communication relate l’essentiel de l’actualité de l’année.
        </p>

        <SectionTitleBar title="Les plus récents" />

        <section class="latests relative">
            
            <div class="latestsStripe flex justifyCenter gap20 darkBlueBG relative wrap" v-if="documents">
                 <article class="docCard pointer" v-for="doc in documents.splice(0, 4)" :key="doc.id">
                    <figure class="frame">
                        <img class="objectFitCover" :src="`${directusAssets}${doc.image}.jpg`" alt="">
                    </figure>

                    <figCaption class="centered">
                        {{ doc.datePublication }}
                    </figCaption>
                 </article>

                 
            </div>

            <div class="footBox absolutlyCentered">
                <SectionPieds />
            </div>
        </section>

        <SectionTitleBar title="années suivantes" />
        
        <section class="latests relative">
        
            <div class="olderStripe flex justifyCenter gap20 relative wrap" v-if="documents">
                <article class="docCard pointer" v-for="doc in documents" :key="doc.id">
                    <figure class="frame">
                        <img class="objectFitCover" :src="`${directusAssets}${doc.image}.jpg`" alt="">
                    </figure>
        
                    <figCaption class="centered">
                        {{ doc.datePublication }}
                    </figCaption>
                </article>
            </div>
        </section>

    </main>

</template>

<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        sort: '-datePublication',
        // fields: 'id, title, content, date_published, mainImage.image, mainImage.alt'
    }
}

const { data: documents } = await useAsyncData(
    "bulletins",
    async () => {
        const items = await $fetch(`${directusItems}Bulletins`, fetchOptions)
        console.log(items.data[0])
        return items.data
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: '/images/header/equipe/équipe-municipale-Poullaouën.jpg',
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Bulletin municipale',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'documents',
            target: '/ma-mairie/documents/bulletin-municipal'
        },
        {
            text: 'bulletin municipale',
            target: '/ma-mairie/documents/bulletin-municipal'
        }
    ]
}

</script>

<style>
.intro {
    height: 10vh;
}

.latests {
    padding: 30px 0;
    z-index: 10;
}
.latestsStripe {
    color: white;
    padding-top: 20px;
    padding-bottom: 10px;
    /* padding adds up with figcaption's padding */
}

.docCard {
    background-color: #fff;
    box-shadow: var(--shadow);
}
.docCard figure{
    width: 210px;
    height: 297px;
}

.docCard figcaption {
    background-color: var(--dark-blue);
    color: white;
    font-size: 24px;
    font-weight: 600;
    padding: 10px;
}

.footBox {
width: min(100%, 600px);
z-index:-1;
}
.footBox * {
    fill: var(--brown);
}
.olderStripe {
    padding-top: 20px;
    padding-bottom: 10px;
}
.olderStripe .docCard figcaption {
    color: var(--ddark-blue);
    background-color: #fff;
}
</style>