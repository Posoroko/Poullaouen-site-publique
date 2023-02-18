<template>
    <HeaderMain :data="headerData" />
    <button @click="testit">eric</button>

    <main class="assoMain w100 flex column" ref="assoMain">
        <p class="intro-text mainWidth">
            Grâce à ses commerces, ses artisans, ses entreprises Poullaouen vous offre tout ce dont vous avez besoin.
        </p>



        <FilterBarMain :filters="itemsData.filters" @updateFilter="moveSectionToFirstPosition" />

        <div class="content flext column" ref="content">
            <section class="w100" v-for="filter in itemsData.filters" :key="filter" :id="filter">
                <SectionTitleBar :title="filter" />

                <div class="mainWidth flex justifyEvenly alignCenter wrap">

                    <div v-for="item in itemsData.items[filter]" :key="item.id" >
                        <CardsTallMain :title="item.name" :subtitle="item.subType[0]" :cardImage="item.image" :imageAlt="item.imageAlt">
                            
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

const testit = () => {
    // const dude = itemsData.value.assos.culture[0].presidents[0]
    console.log(itemsData.value.items)
}

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, name, type, image, imageAlt, subType, subType, hours, adress, phone, email, website'
    }
}

const { data: itemsData } = await useAsyncData(
    "associations",
    async () => {
        const itemsData = await $fetch(`${directusItems}Commerces?filter[image][_neq]=null`, fetchOptions) 
        const items = itemsData.data

        const temp = {
            filters: [],
            items: {}
        }
        items.forEach(item => {

            if (!temp.filters.includes(item.type)) {
                temp.filters.push(item.type)
                temp.items[item.type] = []
            }
            temp.items[item.type].push(item)
        })
        console.log(temp)
        return temp
    }
    ,
    { server: true }
)



const headerData = {
    images: [
        {
            src: `${directusAssets}a397abb9-ba05-479f-80b5-9f0a0dd4062f?key=header1500`,
            alt: 'Vie associative à Poullaouen',
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

    for (let i = 1; i < cards.length; i = i + 4) {
        cards[i].classList.replace('whiteTallCard', 'blueTallCard')
    }
    for (let i = 3; i < cards.length; i = i + 4) {
        cards[i].classList.replace('whiteTallCard', 'brownTallCard')
    }
}

onMounted(() => {
    styleTallCards()
})


</script>

<style>
.assoMain section {
    margin-top: 50px;
}

.tallCard .bottomBox .contentRow .textContent {
    font-size: 14px;
    white-space: pre-wrap;
}
.tallCard .bottomBox .contentRow {
    gap: 10px;
}

</style>