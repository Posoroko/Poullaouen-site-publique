<template>
    <HeaderMain :data="headerData" />

    <main>

        <p class="intro-text mainWidth">
            Envie de séjourner à la campagne, découvrez nos différentes possibilités d’hébergement.
        </p>

        <!-- <nav class="defaultFilterBox horizontalGradient">
            <p class="mainWidth page-text">filtrer les résultats par thème.</p>

            <div class="mainWidth flex justifyCenter alignCenter wrap gap20">
                <div class="filterButton pointer" @click="filterItems" data-filter="all"
                    :class="{ activeDefaultFilterButton: activeFilter == 'all' }">Tous les albums</div>
            
                <div class="defaultFilterButton pointer" v-for="filter in itemsData.filters" :key="filter.ref"  
                        @click="filterItems" :data-filter="filter.ref" :class="{ activeDefaultFilterButton: activeFilter == filter.ref }">
                    {{ filter.name }}
                </div>
            </div>
        </nav> -->

        <section v-for="filter in itemsData.filters" :key="filter.id">
            <SectionTitleBar  :title="filter.name" />

            <div class="roomsContent mainWidth flex justifyCenter wrap gap50">
                <CardsTallMain v-for="item in itemsData.items[filter.slug]" :key="item.id" :title="item.name" :cardImage="item.image" :cardImageAlt="item.imageAlt" :localImage="false">
                    <div class="cardContent flex column gap10">
                        <p class="flex alignCenter gap10" v-if="item.adress"> <span class="icon">location_on</span> <span>{{ item.adress }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.phone"> <span class="icon">call</span> <span>{{ item.phone }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.email"> <span class="icon">email</span> <span>{{ item.email }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.website"> <span class="icon">language</span> <a :href="`https://${item.website}`">{{ item.website }}</a> </p>
                    </div>
                </CardsTallMain>
            </div>
        </section>

    </main>

</template>
 
<script setup>

// const activeFilter = ref(null)
// const filterItems = (e) => {
//     activeFilter.value = null
//     setTimeout(() => {
//         activeFilter.value = e.target.getAttribute('data-filter')
//     }, 10)
// }

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, name, type, type.slug, type.displayType, image, imageAlt, hours, adress, phone, email, website, subType.slug, subType.displaySubtype' 
    }
}
// ?filter[image][_neq]=null
const { data: itemsData } = await useAsyncData(
    "associations",
    async () => {
        const _items = await $fetch(`${directusItems}Commerces?[filter][type][slug][_in]=hebergement,bars_et_restaurants`, fetchOptions) 
        const items = _items.data

        const temp = {
            slugs: [],
            filters: [],
            items: {
                all: []
            }
        }
        
        items.forEach(item => {
            if (!temp.slugs.includes(item.subType.slug)) {
                temp.slugs.push(item.subType.slug)
                temp.filters.push({ name: item.subType.displaySubtype, slug: item.subType.slug })
                temp.items[item.subType.slug] = []
            }
            temp.items[item.subType.slug].push(item)
            temp.items.all.push(item)
        })

        return temp
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: `${directusAssets}0f3f2f74-8ae8-46ea-8092-0ea189088e81.JPG?key=header1500`,
            alt: 'Commerce de proximité à Poullaouen',
        }
    ],
    title: 'Se loger, se restaurer',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Mes sorties',
            target: '/mes-sorties/se-loger-se-restaurer'
        },
        {
            text: 'Se loger, se restaurer',
            target: '/mes-sorties/se-loger-se-restaurer'
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
}

onMounted(() => {
    styleTallCards()
    // activeFilter.value = itemsData.value.filters[0].ref
})


</script>

<style scoped>
.assoMain section {
    margin-top: 50px;
}
.roomsContent {
    margin-top: 50px;
}
.cardContent {
    padding: 20px;
}
</style>