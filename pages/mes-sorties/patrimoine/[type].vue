<template>
    <HeaderMain :data="headerData" />

    <main class="mainPatrimoine">
        <p class="mainWidth intro-text">
            La commune vous propose plusieurs salles adaptées à vos évènements, pour tout renseignement vous pouvez
            contacter la mairie de Poullaouen ou de Locmaria-Berrien.
        </p>

        <div v-for="item in itemsData" :key="item.id">
            <SectionMainSloted :data="{ title: item.title, image: item.image }">
                <div class="slotedSectionTextBox flex column justifyBetween pad20">
                    <div class="topTextBox">
                        <h2 class="sectionSubtitle">
                            <span v-if="item.subTitle">{{ item.subTitle }}</span>
                        </h2>

                        <p class="adress">
                            {{ item.adress }} 
                        </p>
                    </div>

                    <p class="mainContent page-text">
                        {{ item.content }}
                    </p>

                    <div class="bottomTextBox">
                        <p class="sectionMoreInfo" v-if="item.moreInfo">
                            {{ item.moreInfo }}
                        </p>
                    </div>

                </div>
            </SectionMainSloted>
        </div>
    </main>
</template>
<script setup>

const route = useRoute()
const activeType = ref(route.params.type)

const foo = () => {
    useEric()
}


const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

// fetch options for the type of item selected
const typeFetchOptions = {
    server: true,
    // params: {
    //     fields: 'id, displayName, slug, image,'
    // }
}

const { data: typeData } = await useAsyncData(
    "patrimoine_type",
    async () => {
        console.log(activeType.value)
        const type = await $fetch(`${directusItems}Patrimoine_type?[filter][slug]=${activeType.value}`, typeFetchOptions)
        
        return type.data[0]
    }
    ,
    { server: true }
)
// fetch options for the items (eglise, chapelle, etc)
const itemsFetchOptions = {
    server: true,
    params: {
        fields: "id, image, adress, imageAlt, content, title, type.slug, type.displayName"
    }
    
}
const { data: itemsData } = await useAsyncData( 
    "typeItems",
    async () => {
        const items = await $fetch(`${directusItems}Patrimoine?[filter][type][slug][_eq]=${activeType.value}`, itemsFetchOptions)
        
        return items.data
    }
    , 
    { server: true }
)

const headerData = {
    images: [
        {
            src: `${directusAssets}${typeData.value.image}?key=header1500`,
            alt: '',
        }
    ],
    title: typeData.value.displayName,
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'mes sorties',
            target: `/mes-sorties/`
        },
        {
            text: 'patrimoine',
            target: `/mes-sorties/patrimoine`
        },
        {
            text: `${typeData.value.displayName}`,
            target: `/mes-sorties/patrimoine/${typeData.value.slug}`
        }
    ]
}
const applyStyleClasses_utils = () => {
    
    const sections = document.querySelectorAll('.sectionBoxSloted')

    for (let i = 1; i < sections.length; i = i + 4) {
        sections[i].classList.replace('whiteSection', 'blueSection')
    }
    for (let i = 3; i < sections.length; i = i + 4) {
        sections[i].classList.replace('whiteSection', 'brownSection')
    }
}
onMounted(() => {
    applyStyleClasses_utils()
})
</script>

<style>
.slotedSectionTextBox {
    height: 100%;
}

.slotedSectionTextBox .topTextBox .sectionSubtitle {
    font-size: 18px;
    font-weight: 500;
}

.slotedSectionTextBox .topTextBox .sectionAddress,
.slotedSectionTextBox .topTextBox .sectionMoreInfo {
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
}
</style>