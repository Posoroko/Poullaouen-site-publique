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
            <SectionTitleBar class="titleComp" :title="year + ' '" />
            
            <div class="stripe w100 marTop100" :class="{ darkBlueBG : index == 0}">
                <div class="content mainWidth flex justifyCenter wrap">
                    <article class="publicationDocCard relative w100" v-for="doc in myData.docs[year]" :key="doc.id">
                        <figure class="publicationDocCardFigure">
                            <img class="publicationDocCardFigureImg" src="/images/logo.png" alt="">
                        </figure>

                        <b class="docType">Procès verbal</b>

                        <p class="bottomBox">
                            <span class="bottomBoxRow">
                                <span>Date du conseil municipal :</span>
                                <span class="date">{{ toDayMonthYearFormat(doc.datePublication) }}</span>
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

            <div class="piedBox absolute" v-if="index == 0">
                <SectionPieds />
            </div>
        </section>
    </main>
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
            target: '/',
            active: true
        },
        {
            text: 'Ma mairie',
            target: '/ma-mairie/documents/proces-verbaux-du-conseil-municipal',
            active: false
        },
        {
            text: 'Procès verbaux du conseil municipal',
            target: '/ma-mairie/documents/proces-verbaux-du-conseil-municipal',
            active: false
        }
    ]
}


</script>

<style scoped>
.publicationDocCard {
    width: 210px;
    height: 310px;
    background-color: #fff;
    padding: 20px 20px;
    border-radius: 5px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

/* .publicationDocCard .publicationDocCardFigure {
    width: 100px;
    margin: auto;
} */

.publicationDocCard .publicationDocCardFigure .publicationDocCardFigureImg {
    width: 100px;
    /* height: 100%; */
    object-fit: contain;
}

.publicationDocCard * {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: var(--dark-blue);
}

.publicationDocCard .bottomBox {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.publicationDocCard .docType {
    font-weight: 500;
}

.publicationDocCard .bottomBox .bottomBoxRow {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.publicationDocCard .bottomBox .bottomBoxRow * {
    font-size: 14px;
}

.publicationDocCard .bottomBox .bottomBoxRow .date {
    font-weight: 500;
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
    gap: 20px;
}
.dashboard .button {
    font-weight: 600;
    color: white;
    border-radius: 50px;
}

@media (max-width: 399px) {
    .dashboard .button {
        font-size: 16px;
        padding: 0.4em 1.1em;
    }
}
@media (min-width: 400px) {
    .dashboard .button {
        font-size: 18px;
        padding: 0.6em 1.5em;
    }
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