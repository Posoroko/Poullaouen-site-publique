<template>
    <HeaderMain :data="headerData" />

    <main class="docsMain w100 flex column" v-if="myData">
        <p class="intro-text mainWidth">
            Le bulletin municipal réalisé par la commission communication relate l’essentiel de l’actualité de l’année.
        </p>

        <div class="dashboard w100 flex justifyCenter">
            <NuxtLink :to="`#section${year}`" class="button green_action pointer shadow" v-for="year in myData.years" :key="year">
                {{ year }}    
            </NuxtLink>
        </div>

        <section class="docsSection docsLatestsSection relative" v-for="year in myData.years" :key="year" :id="`section${year}`">
            <SectionTitleBar class="titleComp" :title="year" />
            
            <div class="stripe darkBlueBG w100">
                <div class="content mainWidth w100 flex justifyCenter wrap">
                    <article class="procesCard flex column justifyCenter alignCenter" v-for="doc in myData.docs[year]" :key="doc.id">
                        <figure class="">
                            <img src="/images/logo.png" alt="">
                        </figure>
                  
                        <div class="bottomBox">
                            <h5> Procès verbal du </h5>
                  
                            <p>{{ new Date(doc.datePublication).toLocaleString().slice(0, 11)  }}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>
 
<script setup>

const handleit = () => {
    console.log(myData.value.docs)
}

const appConfig = useAppConfig();
// const directusAssets = appConfig.directus.assets;
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
        const items = await $fetch(`${directusItems}Proces`, fetchOptions)
        const activeYears = []
        const sortedDocs = {}

        for (let i = 0; i < items.data.length; i++) {

            if (!activeYears.includes(items.data[i].year)) {
                activeYears.push(items.data[i].year)
            }
        }

        activeYears.forEach( year => {
            sortedDocs[year] = []
        })
        
        items.data.forEach( item => {
            sortedDocs[item.year].push(item)
        })
            
        return {
            years: activeYears,
            docs: sortedDocs
        }
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
            text: 'accueil',
            target: '/'
        },
        {
            text: 'ma-mairie',
            target: '/ma-mairie'
        },
        {
            text: 'documents',
            target: '/ma-mairie/documents/proces-verbaux-du-conseil-municipal'
        },
        {
            text: 'procès verbaux du conseil municipal',
            target: '/ma-mairie/documents/proces-verbaux-du-conseil-municipal'
        }
    ]
}


</script>

<style>

.dashboard {
    gap: 50px;
}
.dashboard .button {
    font-size: 18px;
    font-weight: 600;
    padding: 0.6em 1.5em;
    color: white;
    border-radius: 50px;
}
.docsSection:nth-child(1n+4) {
    padding-top: 100px;
}

.docsMain .docsSection .stripe {
    margin-top: 20px;
    z-index: 1;
}

.docsMain .docsSection .stripe .flex {
    color: white;
    padding-top: 30px;
    padding-bottom: 20px;
    gap: 20px;
}
.procesCard {
    width: 210px;
    height: 248px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}
.procesCard figure {
    width: 100%;
    height: 50%;
}
.procesCard figure img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.procesCard * { 
    text-align: center;
    font-size: 24px;
    font-weight: 400;
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