<template>
    <section class="ActuSection" v-if="actualites">
        <SectionTitleBar title="Actualités" v-if="isHomePage" />
        <div v-for="actu in actualites" :key="actu.id">
            <SectionMainSloted :data="{ image: actu.image, imageAlt: actu.imageAlt, localImage: false}" >
                <div class="slottedContent h100 flex column justifyCenter gap20">
                    <div class="flex column gap10">
                        <h4 class="sectionContentTitle">{{ actu.title }}</h4>
                        <p>Publié le {{ toDayMonthYearFormat(actu.date_created) }}</p>
                    </div>

                    <div class="actuContent" id="actuContent" v-html="actu.content">
                    </div>
                    
                    <div class="moreInfoBox flex column justifyCenter">
                        <p class="moreInfo" v-if="actu.moreInfo">{{ actu.moreInfo }}</p>

                        <div class="downloadBox" v-if="actu.file">
                            <p class="flex alignCenter gap20">
                                <b>{{ actu.fileName }}</b>
                                <a :href="`${directusAssets}${actu.file}`" class="flex alignCenter gap5"><span class="icon" aria-hidden="true">download</span> <span>télécharger</span> </a>
                            </p>     
                        </div>
                    </div>
                </div>
            </SectionMainSloted>
        </div>        
    </section>
</template>
<script setup>

const toDayMonthYearFormat = (_date) => {
    const weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    let date = new Date(_date)
    const weekDay = weekDays[date.getDay()]
    let day = ("0" + date.getDate()).slice(-2)
    const month = months[date.getMonth()]
    if(day == '01') {day = "1er"}
    return `${weekDay} ${day} ${month}`;
}

const props = defineProps({
    limit: String,
    isHomePage: Boolean
})

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const fetchOptions = {
    server: false,
    params: {
        fields: 'id, title, subtitle, content, image, imageAlt, moreInfo, date_created, file, fileName',
    }
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


const { data: actualites } = await useAsyncData(
    "homeLatestActus",
    async () => {
        const items = await $fetch(`${directusItems}Actualites?sort[]=-date_created`, fetchOptions)

        return items.data.splice(0, 3)
    },

    { server: false }
)





onUpdated(() => {
    console.log('mounted')
    applyStyleClasses_utils()
})

</script>

<style scoped>
.sectionContentTitle {
    font-size: 20px;
    font-weight: 600;
}
.slottedContent .actuContent {
    padding: 20px 0;
}
.slottedContent #actuContent ul li {
    margin-left: 20px;
    list-style: disc;
}

.moreInfoBox {
    padding: 5px;
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