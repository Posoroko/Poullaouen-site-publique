<template>
    <section class="ActuSection">
        <SectionTitleBar title="Actualités" />
        <div v-for="actu in actualites" :key="actu.id">
            <SectionMainSloted :data="{ image: actu.image, imageAlt: actu.imageAlt, localImage: false}" >
                <div class="slottedContent h100 flex column justifyCenter gap20">
                    <div>
                        <h4 class="sectionContentTitle">{{ actu.title }}</h4>
                        <p>{{ actu.date_published }}</p>
                    </div>

                    <p class="actuContent" v-html="actu.content">
                    </p>
                    
                    <div class="moreInfoBox">
                        <p class="moreInfo">{{ actu.moreInfo }}</p>

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
    </section>
</template>
<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, subtitle, content, image, imageAlt, moreInfo, date_published, file, fileName',
        limit: 2
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
</style>