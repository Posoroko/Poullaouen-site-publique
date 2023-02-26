<template>
    <HeaderMain :data="headerData" />

    <main class="mainCCAS">
        <p class="mainWidth intro-text">
            La commune vous propose plusieurs salles adaptées à vos évènements, pour tout renseignement vous pouvez
            contacter la mairie de Poullaouen ou de Locmaria-Berrien.
        </p>

        <div v-for="item in equipementsData" :key="item.id">
            <SectionMainSloted :data="{ title: item.title, image: item.image }">
                <div class="slotedSectionTextBox flex column justifyBetween pad20">
                    <div class="topTextBox">
                        <h2 class="sectionSubtitle">
                            <span v-if="item.subTitle">{{ item.subTitle }}</span>
                        </h2>

                        <p class="address">
                            {{ item.address }}
                        </p>
                    </div>

                    <p class="mainContent page-text">
                        {{ item.content }}
                    </p>

                    <div class="bottomTextBox">
                        <p class="sectionMoreInfo" v-if="item.moreInfo">
                            {{ item.moreInfo }}
                        </p>

                        <div class="salleTouristiqueLinkBox" v-if="item.title == 'La salle touristique'">
                            <p>Informations et réservation :

                                <NuxtLink to="" class="externalLink">
                                    contacter la mairie de Poullaouen
                                </NuxtLink>
                            </p>
                        </div>
                    </div>

                </div>
            </SectionMainSloted>
        </div>
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
    // params: {
    //     fields: 'id, content, name, address, standings, sittings, kitchen, locals1, locals2, localsKitchen1, localsKitchen2, externs1, externs2, externsKitchen1, externsKitchen2, image, slug'
    // }
}

const { data: equipementsData } = await useAsyncData(
    "equipements",
    async () => {
        const items = await $fetch(`${directusItems}Equipements_sportifs`, fetchOptions)
        console.log(items.data)
        return items.data
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: `${directusAssets}660cd7ac-833f-44d3-b7ed-77b25e241b0d?key=header1500`,
            alt: 'Aire de loisir de Poullaouen',
        }
    ],
    title: 'Les équipements sportifs et de loisir',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'mon quotidien',
            target: '/mo-quotidien/les-equipements-sportifs-et-de-loisir'
        },
        {
            text: 'les équipements sportifs et de loisir',
            target: '/ma-mairie/les-equipements-sportifs-et-de-loisir'
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