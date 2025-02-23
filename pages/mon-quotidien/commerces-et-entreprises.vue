<template>
    <HeaderMain :data="headerData" />

    <main class="assoMain w100 flex column" ref="assoMain">
        <p class="intro-text mainWidth">
            Grâce à ses commerces, ses artisans et ses entreprises, Poullaouen vous offre tout ce dont vous avez besoin.
        </p>

        <FilterBarMain :filters="itemsData.filters" @updateFilter="moveSectionToFirstPosition" :slugged="true" text="Filtrer les résultats par thème" />

        <div class="content flex justifyCenter wrap" ref="content">
            <section class="w100" v-for="filter in itemsData.filters" :key="filter.slug" :id="filter.slug">
                <SectionTitleBar :title="filter.name" />
                <div class="marTop50"></div>
                <div class="tallCardBox mainWidth flex justifyCenter alignStretch wrap gap50 marTop20">
                    <CardsTallMain 
                        v-for="item in itemsData.items[filter.slug]" :key="item.id"
                        :title="item.name" 
                        :subtitle="item.subType.displaySubtype" 
                        :cardImage="item.image" 
                        :cardImageAlt="item.imageAlt">
                        
                        <div class="bottomBox flex column gap10 justifyCenter alignStart">
                            <div class="contentRow flex gap10 gap10" v-if="item.hours">
                                <span class="icon" aria-hidden="true">schedule</span>

                                <p class="textContent horaires"> {{ item.hours }} </p>
                            </div>

                            <div class=" contentRow flex gap10" v-if="item.adress">
                                <span class="icon" aria-hidden="true">location_on</span>

                                <p class="textContent"> {{ item.adress }} </p>
                            </div>

                            <div class="contentRow flex gap10" v-if="item.phone">
                                <span class="icon" aria-hidden="true">call</span>

                                <p class="textContent"> {{ item.phone }} </p>
                            </div>

                            <div class="contentRow flex gap10" v-if="item.email">
                                <span class="icon" aria-hidden="true">mail</span>

                                <a :href="`mailto:${item.email}`" class="textContent"> {{ item.email }}  </a>
                            </div>

                            <div class="contesflex flex gap10" v-if="item.website">
                                <span class="icon" aria-hidden="true">language</span>

                                <a :href="`${item.website}`" target="_blank" class="textContent externalLink"> Visiter le site web </a>
                            </div>
                        </div>
                    
                    </CardsTallMain>
                </div>
            </section>
        </div>

    </main>

    <FooterMain />
</template>
 
<script setup>
const content = ref(null)

const moveSectionToFirstPosition = (filter) => {
    const movingSection = document.getElementById(filter)
    const firstChild = content.value.firstElementChild

    content.value.insertBefore(movingSection, firstChild)
}


const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, name, type, type.displayType, type.slug, image, imageAlt, subType, subType.displaySubtype, hours, adress, phone, email, website'
    }
}
// ?filter[image][_neq]=null
const { data: itemsData } = await useAsyncData(
    "associations",
    async () => {
        const itemsData = await $fetch(`${directusItems}Commerces?sort[]=type`, fetchOptions) 
        const items = itemsData.data

        const temp = {
            filterSlugs: [],
            filters: [],
            items: {}
        }
        items.forEach(item => {

            if (!temp.filterSlugs.includes(item.type.slug)) {
                temp.filterSlugs.push(item.type.slug)
                temp.filters.push({
                    name: item.type.displayType,
                    slug: item.type.slug
                })
                temp.items[item.type.slug] = []
            }
            temp.items[item.type.slug].push(item)
        })
        return temp
    }
    ,
    { server: true }
)



const headerData = {
    images: [
        {
            src: `${directusAssets}6069ded5-693f-4fd7-92fe-7d8e2db8294a.jpg?key=header1500`,
            alt: 'Commerce de proximité à Poullaouen',
        }
    ],
    title: 'Les commerces et entreprises',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Mon quotidien',
            target: '/mon-quotidien/commerces-et-entreprises',
            active: false
        },
        {
            text: 'Commerces et entreprises',
            target: '/mon-quotidien/commerces-et-entreprises',
            active: false
        }
    ]
}
const styleTallCards = () => {

    const cards = document.querySelectorAll('.tallCard');

    for (let i = 0; i < cards.length; i = i + 3) {
        cards[i].classList.replace('whiteTallCard', 'blueTallCard')
    }
    for (let i = 2; i < cards.length; i = i + 3) {
        cards[i].classList.replace('whiteTallCard', 'brownTallCard')
    }
    if (window.innerWidth < 1075) {
        return
    }

    const tallCardBoxes = document.querySelectorAll('.tallCardBox')

    tallCardBoxes.forEach(box => {
        if ((box.children.length) % 2 != 0) {
            const placeholder = document.createElement('div')
            placeholder.classList.add('fakeTallCard')
            placeholder.classList.add('iLikeToMoveIt')
            box.appendChild(placeholder)
        }
    })

    const tallCards = document.querySelectorAll('.iLikeToMoveIt')

    for (let i = 0; i < tallCards.length; i = i + 4) {
        tallCards[i].classList.add('leftPushedTallCard')
    }
    for (let i = 3; i < tallCards.length; i = i + 4) {
        tallCards[i].classList.add('rightPushedTallCard')
    }
}

onMounted(() => {
    styleTallCards()
})


</script>

<style scoped>

.content::v-deep(.tallCard) {
    min-height: 600px;
}


.assoMain section {
    margin-top: 50px;
}
.bottomBox {
    padding: 20px;
}
.horaires {
    white-space: pre-wrap;
}

</style>