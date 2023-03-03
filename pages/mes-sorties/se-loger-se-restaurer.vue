<template>
    <HeaderMain :data="headerData" />

    <main>

        <p class="intro-text mainWidth">
            Envie de séjourner à la campagne, découvrez nos différentes possibilités d’hébergement.
        </p>

        <section v-for="filter in rooms.filters" :key="filter.id">
            <SectionTitleBar  :title="filter.name" />

            <div class="roomsContent mainWidth flex justifyCenter wrap gap20">
                <CardsTallMain v-for="room in rooms.items[filter.slug]" :key="room.id" :title="room.name" :cardImage="room.image" :cardImageAlt="room.imageAlt" :localImage="false">
                    <div class="cardContent flex column gap10">
                        <p class="flex alignCenter gap10" v-if="room.adress"> <span class="icon">location_on</span> <span>{{ room.adress }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="room.phone"> <span class="icon">call</span> <span>{{ room.phone }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="room.email"> <span class="icon">email</span> <span>{{ room.email }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="room.website"> <span class="icon">language</span> <a :href="`https://${room.website}`">{{ room.website }}</a> </p>
                    </div>
                </CardsTallMain>
            </div>
        </section>

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
        fields: 'id, name, type, type.slug, type.displayType, image, imageAlt, hours, adress, phone, email, website, subType.slug, subType.displaySubtype' 
    }
}
// ?filter[image][_neq]=null
const { data: rooms } = await useAsyncData(
    "associations",
    async () => {
        const _items = await $fetch(`${directusItems}Commerces?[filter][type][slug][_in]=hebergement,bars_et_restaurants`, fetchOptions) 
        const items = _items.data

        const temp = {
            slugs: [],
            filters: [],
            items: {}
        }
        
        items.forEach(item => {
            if (!temp.slugs.includes(item.subType.slug)) {
                temp.slugs.push(item.subType.slug)
                temp.filters.push({ name: item.subType.displaySubtype, slug: item.subType.slug })
                temp.items[item.subType.slug] = []
            }
            temp.items[item.subType.slug].push(item)  
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
.roomsContent {
    margin-top: 50px;
}
.cardContent {
    padding: 20px;
}
</style>