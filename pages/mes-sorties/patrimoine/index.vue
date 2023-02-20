<template>
    <HeaderMain :data="headerData" />

    <main class="mainPatrimoine">
        <p class="mainWidth intro-text">
            La commune est riche en monuments historiques etpatrimoniaux. Vous pouvez les découvrir en parcourant les pages suivantes.
        </p>

        <nav class="patrimoineLinkBox flex wrap gap20 justifyEvenly mainWidth">
            <NuxtLink class="patrimoineLink flex column alignCenter" :to="`/mes-sorties/patrimoine/${type.slug}`" v-for="type in typesData" :key="type.id">
                <div class="frame">
                    <img class="objectFitCover" :src="`${directusAssets}${type.image}?key=square400`" alt="">
                </div>
                <h2>{{ type.displayName }}</h2>
            </NuxtLink>
        </nav>
    </main>
</template>
<script setup>

const foo = () => {
    useEric()
}


const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, displayName, slug, image'
    }
}

const { data: typesData } = await useAsyncData(
    "patrimoine",
    async () => {
        const types = await $fetch(`${directusItems}Patrimoine_type`, fetchOptions)

        return types.data
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: `${directusAssets}660cd7ac-833f-44d3-b7ed-77b25e241b0d?key=header1500`,
            alt: 'Patrimoine',
        }
    ],
    title: 'Patrimoine',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'mes sorties',
            target: '/mmes-sorties/patrimoine'
        },
        {
            text: 'les équipements srportifs et de loisir',
            target: '/mes-sorties/patrimoine'
        }
    ]
}
const applyStyleClasses_utils = () => {
    const sections = document.querySelectorAll('.sectionBoxSloted')
    console.log(sections)
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
.mainPatrimoine .intro-text {
    margin: 100px 0;
}

.patrimoineLink .frame{
    width: 15vw;
    aspect-ratio: 1/1;
    border-radius: 10px;
    overflow: hidden;
}
</style>