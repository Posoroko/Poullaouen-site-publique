<template>
    <HeaderMain :data="headerData" />
    <main class="">

        <p class="intro-text mainWidth page-text">
            Pour être sûr de ne pas vous ennuyer, consultez la liste de nos manifestations et festivités.
        </p>

        <section v-if="dates" class="flex column">
            <div v-for="date in dates" :key="date.id">
                <SectionMainSloted :data="{ title: date.title, image: date.image, imageAlt: date.imageAlt, localImage: false, containedImage: true }" >
                    <div class="slottedContent h100 flex column justifyCenter gap20">
                        <div class="topBox">
                            <h3 class="italic brownText">{{ todayDDMMFormat(date.date) }}</h3>
                            
                            <p class="brownText">{{ date.location }}</p>
                        </div>

                        <p class="page-text dateContent">
                            {{ date.content }}
                        </p>

                        <div class="flex column gap10">
                            <p v-if="date.organiser"> <b class="">Organisé par </b> <span>{{ date.organiser }}</span> </p>
                        
                            <p v-if="date.price"> <b class="">Tarif : </b> <span>{{ date.price }}</span> </p>
                        
                            <p v-if="date.moreInfo"> <b class="">Plus d'info : </b> <span>{{ date.moreInfo }}</span> </p>
                        </div>
                    </div>
                </SectionMainSloted>
            </div>
        </section>
    </main>
</template>

<script setup>

const todayDDMMFormat = (_date) => {
    const weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let date = new Date(_date)
    const weekDay = weekDays[date.getDay()]
    const day = ("0" + date.getDate()).slice(-2)
    const month = date.getMonth()
    console.log(`${weekDay} ${day} ${month}`)
    return `${weekDay} ${day}/${month}`;
}

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, date, location, content, organiser, moreInfo, image, imageAlt, price, file, filename'
    }
}

const { data: dates } = await useAsyncData(
    "agenda",
    async () => {
        const _dates = await $fetch(`${directusItems}Agenda?sort[]=date`, fetchOptions)

        return _dates.data
    }
    ,
    { server: true } 
)

const headerData = {
    images: [
        {
            src: `${directusAssets}56e72194-4d38-4bab-a018-67a01abd8461.JPG?key=header1500`,
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Agenda',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Agenda',
            target: '/agenda'
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
.dateContent {
    white-space: pre-wrap;
}
</style>