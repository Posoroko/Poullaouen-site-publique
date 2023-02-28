<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
        <p class="mainWidth intro-text">
            On rencontre les appellations suivantes : Ploelouen (vers 1330 et en 1386), Ploelouan (en 1349), Ploe Louan (au XIVème siècle), Poulaven
            (en 1591) et Poullaouen (en 1677).
        </p>

        <div v-for="item in histoireData" :key="item.id">
            <SectionMainSloted :data="{ title: item.title, image: item.image, imageAlt: item.imageAlt }">
                <div class="slotedSectionTextBox flex column justifyCenter gap20 pad20">
                    <div class="topTextBox">
                        <h2 class="sectionSubtitle">
                            <span v-if="item.subtitle">{{ item.subtitle }}</span> 
                        </h2>
                    </div>

                    <p class="mainContent page-text">
                        {{ item.content }}
                    </p>

                    <div class="bottomTextBox">
                        <p class="sectionMoreInfo" v-if="item.link">
                            {{ item.link }}
                        </p>
                    </div>

                </div>
            </SectionMainSloted>
        </div>
    </main>
</template>

<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

// fetch options for the type of item selected
const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, subtitle, content, link, linkText, image, imageAlt'
    }
}

const { data: histoireData } = await useAsyncData(
    "histoire",
    async () => {
        const items = await $fetch(`${directusItems}Histoire`, fetchOptions)
        return items.data
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: `${directusAssets}229b3925-b301-4177-9b34-bfa7214246e2?key=header1500`,
            alt: 'Révolte des bonnets rouges à Poullaouen',
        }
    ],
    title: 'Histoire',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Mes sorties',
            target: `/mes-sorties/histoire`
        },
        {
            text: 'Histoire',
            target: `/mes-sorties/histoire`
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

<style scoped>
.sectionSubtitle {
    border-bottom: 1px solid var(--green);
}

.slotedSectionTextBox {
    height: 100%;
}

.slotedSectionTextBox .topTextBox .sectionSubtitle {
    font-size: 18px;
    font-weight: 600;
    font-style: italic;
}

.mainContent {
    margin-top: 20px;
}

.slotedSectionTextBox .topTextBox .sectionAddress,
.slotedSectionTextBox .topTextBox .sectionMoreInfo {
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
}
</style>