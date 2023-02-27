<template>
    <HeaderMain :data="headerData" />

    <main class="docsMain w100 flex column" v-if="publications">
        <p class="intro-text mainWidth">
            Le bulletin municipal réalisé par la commission communication relate l’essentiel de l’actualité de l’année.
        </p>

        <div class="dashboard w100 flex justifyCenter">
            <NuxtLink :to="`#${type.id}`" class="button green_action pointer shadow" v-for="type in pubTypes" :key="type.id">
                {{ type.plur }}
            </NuxtLink>
        </div>
        
        <section class="docsSection docsLatestsSection relative" v-for="type in pubTypes" :key="type.id" :id="type.id">
            <SectionTitleBar class="titleComp" :title="type.plur" />
            
            <div class="stripe darkBlueBG w100">
                <div class="content mainWidth w100 flex justifyCenter wrap">
                    <article class="procesCard flex column justifyCenter alignCenter" v-for="doc in publications[type.id]" :key="doc.id">
                        <figure class="">
                            <img src="/images/logo.png" alt="">
                        </figure>
            
                        <div class="bottomBox">
                            <h5> {{ type.sing }} </h5>
            
                            <p>{{ new Date(doc.date).toLocaleString().slice(0, 11) }}</p>
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

const pubTypes = ref([{
    plur: 'Arrêtés municipaux',
    sing: 'Arrêté municipal',
    id: 'arretes'
}, {
    plur: 'Délibérations du conseil municipal',
    sing: 'Délibération du conseil municipal',
    id: 'deliberations'
}, {
    plur: 'Listes de délibérations',
    sing: 'Liste de délibérations',
    id: 'listes'
}])

const fetchOptions = {
    server: true,
    // params: {
    //     sort: '-date',
    //     fields: 'id, date, publicationType, date, file,'
    // }
}

const { data: publications } = await useAsyncData(
    "Publications",
    async () => {
        const items = await $fetch(`${directusItems}publications`, fetchOptions)
        console.log(items.data[0].publicationType)
        const sortedDocs = {
            arretes: [],
            deliberations: [],
            listes: []
        }

        items.data.forEach(item => {
            sortedDocs[`${item.publicationType}s`].push(item)
        })
        console.log(sortedDocs)
        return sortedDocs
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
            text: 'accueil',
            target: '/'
        },
        {
            text: 'ma mairie',
            target: '/ma-mairie'
        },
        {
            text: 'documents',
            target: '/ma-mairie/documents/publications-reglementaires'
        },
        {
            text: 'publications réglementaires',
            target: '/ma-mairie/documents/publications-reglementaires'
        }
    ]
}


</script>

<style scoped>
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
    /* height: 248px; */
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}

.procesCard figure {
    width: 100%;
    height: 40%;
}

.procesCard figure img {
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