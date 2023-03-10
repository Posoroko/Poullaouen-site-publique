<template>
    <section class="ActuSection">
        <SectionTitleBar title="Actualités" v-if="isHomePage" />
        <div v-for="actu in actualites" :key="actu.id">
            <SectionMainSloted :data="{ image: actu.image, imageAlt: actu.imageAlt, localImage: false}" >
                <div class="slottedContent h100 flex column justifyCenter gap20">
                    <div class="flex column gap10">
                        <h4 class="sectionContentTitle">{{ actu.title }}</h4>
                        <p>Le {{ toDayMonthYearFormat(actu.date_created) }}</p>
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
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchingParams = `?fields=id,title,subtitle,content,image,imageAlt,moreInfo,date_created,file,fileName&sort[]=-date_created&limit=${props.limit}`

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, subtitle, content, image, imageAlt, moreInfo, date_created, file, fileName',
        // limit: props.limit
    }
}

const { data: actualites } = await useAsyncData(
    "latestActu",
    async () => {
        const items = await $fetch(`${directusItems}Actualites${fetchingParams}`, fetchOptions)
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

<style scoped>
.sectionContentTitle {
    font-size: 20px;
    font-weight: 600;
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