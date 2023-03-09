<template>
    <HeaderMain :data="headerData" />

    <main class="docsMain w100 flex column" v-if="myData">
        <p class="intro-text mainWidth">
            Retrouvez les comptes-rendus du conseil municipal de janvier 2020 à juin 2022 dans cette rubrique. Depuis le 1er juillet 2022, en référence
            à l’article L 2131-1 du Code Général des Collectivités Territoriales, le terme compte-rendu disparaît. Désormais, les procès-verbaux du
            conseil municipal font l’objet d’une publication sous forme électronique.
        </p>

        <div class="dashboard w100 flex justifyCenter">
            <NuxtLink :to="`#section${year}`" class="button brown_action pointer shadow" v-for="year in myData.years" :key="year">
                {{ year }}    
            </NuxtLink>
        </div>
        <div class="marTop50"></div>
        <section class="docsSection docsLatestsSection relative" v-for="(year, index) in myData.years" :key="year" :id="`section${year}`">
            <SectionTitleBar class="titleComp" :title="year" />
            
            <div class="stripe w100 marTop100" :class="{ darkBlueBG : index == 0}">
                <div class="content mainWidth flex justifyCenter wrap">
                    <article class="mairieDocCard relative" v-for="doc in myData.docs[year]" :key="doc.id">
                        <figure class="">
                            <img src="/images/logo.png" alt="">
                        </figure>
                  
                        <div class="bottomBox">
                            <p> Procès verbal du </p>
                  
                            <p>{{ new Date(doc.datePublication).toLocaleString().slice(0, 11)  }}</p>
                        </div>

                        <div class="downloaderFrame absoluteFull">
                            <DocsDownloadWidget :link="`${directusAssets}${doc.file}`" />
                        </div>
                    </article>
                </div>
            </div>

            <div class="piedBox absolute" v-if="index == 0">
                <SectionPieds />
            </div>
        </section>
    </main>
</template>
 
<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const activeYears = []
const sortedDocs =  [

]

const filterAndSortData = (data) => {

    for(let i = 0; i < data.length; i++) {
        
        if (!activeYears.includes(data[i].year) ) {
            activeYears.push(data[i].year)
        }
    }

    for(let i = 0; i < activeYears.length; i++) {
        
        let temp = []

        data.forEach( el => {
            if (el.year === activeYears[i]) {
                temp.push(el)
            }
        })

        sortedDocs.push(temp)
    }
}



const fetchOptions = {
    server: true,
    params: {
        sort: '-datePublication',
        // fields: 'id, title, content, date_published, mainImage.image, mainImage.alt'
    }
}

const { data: myData } = await useAsyncData(
    "proces",
    async () => {
        const _items = await $fetch(`${directusItems}Proces`, fetchOptions)
        const items = _items.data

        const temp = {
            years: [],
            docs: {}
        }

        items.forEach(item => {
            const year = new Date(item.datePublication).getFullYear()

            if(!temp.years.includes(year)) {
                temp.years.push(year)
                temp.docs[year] = []
            }

            temp.docs[year].push(item)
        })

        return temp
        
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: '/images/header/mairie.jpg',
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Procès verbaux du conseil municipal',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Ma mairie',
            target: '/ma-mairie/documents/proces-verbaux-du-conseil-municipal'
        },
        {
            text: 'Procès verbaux du conseil municipal',
            target: '/ma-mairie/documents/proces-verbaux-du-conseil-municipal'
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
    height: 110%;
    width: 100%;
    position: absolute;
    left: 50%;
    top: calc(50% + 100px);
    transform: translate(-50%, -50%);
    z-index: -10;
}
.piedBox * {
    fill: var(--brown);
}

.dashboard {
    margin-top: 50px;
    gap: 50px;
}
.dashboard .button {
    font-size: 18px;
    font-weight: 600;
    padding: 0.6em 1.5em;
    color: white;
    border-radius: 50px;
}


.docsMain .docsSection .stripe .flex {
    color: white;
    padding-top: 30px;
    padding-bottom: 20px;
    gap: 20px;
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