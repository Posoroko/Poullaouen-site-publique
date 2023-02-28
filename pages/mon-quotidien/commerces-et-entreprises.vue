<template>
    <HeaderMain :data="headerData" />

    <main class="assoMain w100 flex column" ref="assoMain">
        <p class="intro-text mainWidth">
            Grâce à ses commerces, ses artisans et ses entreprises, Poullaouen vous offre tout ce dont vous avez besoin.
        </p>



        <FilterBarMain :filters="itemsData.filters" @updateFilter="moveSectionToFirstPosition" :slugged="true" />


        <div class="content flex justifyCenter wrap" ref="content">
            <section class="w100" v-for="filter in itemsData.filters" :key="filter.slug" :id="filter.slug">
                <SectionTitleBar :title="filter.name" />

                <div class="mainWidth flex justifyCenter alignStretch wrap gap20 marTop20">
                    <CardsTallMain 
                        v-for="item in itemsData.items[filter.slug]" :key="item.id"
                        :title="item.name" 
                        :subtitle="item.subType[0]" 
                        :cardImage="item.image" 
                        :cardImageAlt="item.imageAlt">
                        
                        <div class="bottomBox flex column gap10 justifyCenter alignStart">
                            <div class="contentRow flex" v-if="item.hours">
                                <span class="icon">schedule</span>

                                <p class="textContent">
                                    {{ item.hours }}
                                </p>
                            </div>

                            <div class=" contentRow flex" v-if="item.adress">
                                <span class="icon">location_on</span>

                                <p class="textContent">
                                    {{ item.adress }}
                                </p>
                            </div>

                            <div class="contentRow flex" v-if="item.phone">
                                <span class="icon">call</span>

                                <p class="textContent">
                                    {{ item.phone }}
                                </p>
                            </div>

                            <div class="contentRow flex" v-if="item.email">
                                <span class="icon">mail</span>

                                <p class="textContent">
                                    {{ item.email }}
                                </p>
                            </div>

                            <div class="contentRow flex" v-if="item.website">
                                <span class="icon">language</span>

                                <p class="textContent">
                                    {{ item.website }}
                                </p>
                            </div>
                        </div>
                    
                    </CardsTallMain>
                </div>
            </section>
        </div>

    </main>
</template>
 
<script setup>
const content = ref(null)

const moveSectionToFirstPosition = (filter) => {
    const movingSection = document.getElementById(filter)
    const firstChild = content.value.firstElementChild

    content.value.insertBefore(movingSection, firstChild)
    // console.log(assoMain.value)
}


const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, name, type, type.displayType, type.slug, image, imageAlt, subType, subType, hours, adress, phone, email, website'
    }
}
// ?filter[image][_neq]=null
const { data: itemsData } = await useAsyncData(
    "associations",
    async () => {
        const itemsData = await $fetch(`${directusItems}Commerces`, fetchOptions) 
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
            src: `${directusAssets}c2973c9d-0e19-473e-8224-01940b523bf1?key=header1500`,
            alt: 'Commerce de proximité à Poullaouen',
        }
    ],
    title: 'Les commerces et entreprises',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'mon quotidien',
            target: '/mon-quotidien/commerces-et-entreprises'
        },
        {
            text: 'commerces et entreprises',
            target: '/mon-quotidien/commerces-et-entreprises'
        }
    ]
}
const styleTallCards = () => {

    const cards = document.querySelectorAll('.tallCard');
    console.log(cards)
    for (let i = 0; i < cards.length; i = i + 3) {
        cards[i].classList.replace('whiteTallCard', 'blueTallCard')
    }
    for (let i = 2; i < cards.length; i = i + 3) {
        cards[i].classList.replace('whiteTallCard', 'brownTallCard')
    }
}

onMounted(() => {
    styleTallCards()
})


</script>

<style scoped>
.assoMain section {
    margin-top: 50px;
}
.bottomBox {
    padding: 20px;
}


</style>