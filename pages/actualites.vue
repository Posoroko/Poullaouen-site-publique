<template>
    <HeaderMain :data="headerData" />
    <main class="">

        <p class="intro-text mainWidth page-text">
            Vous souhaitez rester informé sur la vie de votre commune ? C’est ici.
        </p>

        <div v-for="actu in actualites" :key="actu.id">
            <SectionMainSloted :data="{ title: actu.title, image: actu.image, imageAlt: actu.imageAlt, localImage: false }" >
                <div class="slottedContent h100 flex column justifyCenter gap20">
                    <div class="flex column gap10">
                        <p class="brownText italic">Publié le {{ toDayMonthYearFormat(actu.date_created) }}</p>
                    </div>

                    <div class="actuContent" v-html="actu.content">
                    </div>
                
                    <div class="moreInfoBox flex column justifyCenter">
                        <p class="moreInfo" v-if="actu.moreInfo">{{ actu.moreInfo }}</p>

                        <div class="downloadBox" v-if="actu.file">
                            <p>
                                <span>{{ actu.fileName }}</span>
                                <!-- <a href=""><span class="icon">visibility_on</span>consulter</a>  -->
                                <a href=""><span class="icon">download</span>télécharger</a> 
                            </p>     
                        </div>
                    </div>
                </div>
            </SectionMainSloted>
        </div> 
        
    </main>
</template>
<script setup>

const toDayMonthYearFormat = (_date) => {
    const weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    let date = new Date(_date)
    const weekDay = weekDays[date.getDay()]
    let day = ("0" + date.getDate()).slice(-2)
    const month = months[date.getMonth()]
    if (day == '01') { day = "1er" }
    return `${weekDay} ${day} ${month}`;
}

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, subtitle, content, image, imageAlt, moreInfo, date_created, file, fileName',
    }
}

const { data: actualites } = await useAsyncData(
    "latestActu",
    async () => {
        const items = await $fetch(`${directusItems}Actualites?sort[]=-date_created`, fetchOptions)
        return items.data
    }
    ,
    { server: true }
)

const headerData = {
    images: [
        {
            src: `${directusAssets}1eb989c2-0aaa-43e1-bb2e-892a479110ca.JPG?key=header1500`,
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Actualités',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Actualités',
            target: '/actualites',
            active: false
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