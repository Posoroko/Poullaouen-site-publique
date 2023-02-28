<template>
    <section class="ActuSection">
        <SectionTitleBar title="Actualités" v-if="isHomePage" />
        <div v-for="actu in actualites" :key="actu.id">
            <SectionMainSloted :data="{ image: actu.image, imageAlt: actu.imageAlt, localImage: false}" >
                <div class="slottedContent h100 flex column justifyCenter gap20">
                    <div class="flex column gap10">
                        <h4 class="sectionContentTitle">{{ actu.title }}</h4>
                        <p>publié le: {{ new Date(actu.date_created).toLocaleDateString() }}</p>
                    </div>

                    <div class="actuContent" v-html="actu.content">
                    </div>
                    
                    <div class="moreInfoBox flex column justifyCenter">
                        <p class="moreInfo" v-if="actu.moreInfo">{{ actu.moreInfo }}</p>

                        <div class="downloadBox" v-if="actu.file">
                            <p>
                                <span>{{ actu.fileName }}</span>
                                <a href=""><span class="icon">visibility_on</span>consulter</a> 
                                <a href=""><span class="icon">download</span>télécharger</a> 
                            </p>     
                        </div>
                    </div>
                </div>
            </SectionMainSloted>
        </div>

        <div class="centered agendaButtonBox">
            <NuxtLink class="agendaButton textAlignCenter brown_action" to="/actualites">Voir toutes les actualités</NuxtLink>
        </div>
        
    </section>
</template>
<script setup>

const props = defineProps({
    limit: String,
    isHomePage: Boolean
})

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, subtitle, content, image, imageAlt, moreInfo, date_created, file, fileName',
        limit: props.limit
    }
}

const { data: actualites } = await useAsyncData(
    "latestActu",
    async () => {
        const items = await $fetch(`${directusItems}Actualites`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)
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
.sectionContentTitle {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid var(--green);
}
.slottedContent .actuContent {
    padding: 20px 0;
}
.slottedContent .actuContent ul li {
    margin-left: 20px;
    list-style: disc;
}
.moreInfoBox {
    padding: 5px;
    border-top: 1px solid var(--green);
    border-bottom: 1px solid var(--green);
}

.agendaButtonBox .agendaButton {
    font-size: 20px;
    font-weight: 600;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 30px;
    transition: var(--fadeQuick);
}

</style>