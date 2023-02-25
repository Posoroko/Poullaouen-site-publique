<template>
    <HeaderMain :data="headerData" />

    <main class="docsMain w100 flex column">
        <p class="intro intro-text mainWidth">
            Le bulletin municipal réalisé par la commission communication relate l’essentiel de l’actualité de l’année.
        </p>

        <section class="docsSection docsLatestsSection relative">
            <SectionTitleBar class="titleComp" title="Les plus récents" />
            
            <div class="stripe relative" v-if="documents">
                <div class="w100 flex darkBlueBG justifyCenter gap20  relative wrap">
                    <article class="bulletinCard pointer" v-for="doc in documents.splice(0, 4)" :key="doc.id">
                        <figure class="frame">
                            <img class="objectFitCover" :src="`${directusAssets}${doc.image}.jpg`" 
                            :alt="`Bulletin municipal de Poullaouën ${doc.datePublication}`" @click.prevent="openModal">
                        </figure>
                    
                        <figCaption class="centered">
                            {{ doc.datePublication }}
                        </figCaption>
                    </article>
                </div>

                <div class="footBox">
                    <SectionPieds />
                </div>
            </div>
        </section>

        <section class="docsSection docsOldestsSection relative">
            <SectionTitleBar title="Années précédentes" />
        
            <div class="stripe relative" v-if="documents">
                <div class="flex justifyCenter gap20  relative wrap">
                    <article class="bulletinCard pointer" v-for="doc in documents" :key="doc.id">
                        <figure class="frame">
                            <img class="objectFitCover" :src="`${directusAssets}${doc.image}.jpg`" 
                            :alt="`Bulletin municipal de Poullaouën ${doc.datePublication}`" @click.prevent="openModal">
                        </figure>
        
                        <figCaption class="centered">
                            {{ doc.datePublication }}
                        </figCaption>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>

const modalData = ref('')








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
    "bulletin",
    async () => {
        const items = await $fetch(`${directusItems}Bulletins`, fetchOptions)
        return items.data
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: '/images/header/bulletin.jpg',
            alt: 'Bulletin municipal de Poullaouën',
        }
    ],
    title: 'Bulletin municipal',
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
            text: 'bulletin municipal',
            target: '/ma-mairie/documents/bulletin-municipal'
        }
    ]
}


</script>

<style>
.intro {
    height: 10vh;
}

.docsMain .docsSection .stripe {
    margin-top: 20px;
    z-index: 1;
}
.docsMain .docsSection .stripe .flex{
    color: white;
    padding-top: 30px;
    padding-bottom: 20px;
}


.bulletinCard figure{
    width: min(210px, 100vw);
    max-height: 296px;
    border-radius: 5px;
    box-shadow: var(--shadow);
    overflow: hidden;
}

.bulletinCard figcaption {
    font-size: 24px;
    font-weight: 600;
    padding: 10px;
}
.docsMain .docsLatestsSection .stripe .flex .bulletinCard figcaption {
    background-color: var(--dark-blue);
    color: white;
}

.docsMain .docsOldestsSection .stripe .flex .bulletinCard figcaption {
    background-color: white;
    color: var(--dark-blue);
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