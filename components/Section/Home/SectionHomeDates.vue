<template>
    <section class="ActuSection">
        <SectionTitleBar title="Agenda" />

        <div class="agendaStripe">
            <div class="mainWidth flex justifyCenter wrap gap20">
                <div class="dateCard" v-for="date in dates" :key="date.id">
                    <div class="topBox">
                        <p class="title">{{ date.title }}</p>
                        <p class="date italic">{{ todayDDMMFormat(date.date) }} <span class="brownText" v-if="date.time">à {{ date.time.slice(0, -3).replace(":", "h") }}</span> </p>

                        <p class="location italic">{{ date.location }}</p>
                        <p class="organiser">{{ date.organiser }}</p>
                    </div>

                    <div class="middleBox centered w100" v-if="date.image">
                        <img class="pointer" :src="`${directusAssets}${date.image}?key=full500`" :alt="date.imageAlt"  @click="showInModal">
                    </div>

                    <div class="bottomBox">
                        <p class="content">
                            {{ date.content }}
                        </p>
                        <p class="moreInfo">{{ date.moreInfo }}</p>
                    </div>
                </div>
            </div>
            <div class="agendaButtonBox mainWidth flex justifyEvenly wrap gap20">
                <NuxtLink class="italic shadow agendaButton textAlignCenter" to="/agenda">Voir tout l'agenda</NuxtLink>
                <NuxtLink class="italic shadow agendaButton textAlignCenter" to="/proposer-un-evenement">Proposer un événement</NuxtLink>
            </div>
        </div>
        
    </section>
</template>
<script setup>
// dayDDMM
const todayDDMMFormat = (_date) => {
    const weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let date = new Date(_date)
    const weekDay = weekDays[date.getDay()]
    const day = ("0" + date.getDate()).slice(-2)
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    return `${weekDay} ${day}/${month}`;
}

const showInModal = (e) => {
    const modal = document.getElementById('masterModal')
    let children = modal.children

    for (const child of children) {
        if (!child.classList.contains('modalNode')) {
            modal.removeChild(child)
        }
    }

    const _img = document.createElement('img')
    _img.src = e.currentTarget.src
    _img.src = e.currentTarget.src.slice(0, e.currentTarget.src.indexOf("?"))
    _img.style.maxWidth = "80vw"
    _img.style.maxHeight = "80vh"

    modal.appendChild(_img)
    modal.showModal()
}

const props = defineProps({
    limit: String
})

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: false,
    params: {
        fields: 'id, title, date, time, location, content, image, imageAlt, price, file, filename',
        limit: props.limit,
    }
}

const { data: dates } = await useAsyncData(
    "homeAgenda",
    async () => {
        const items = await $fetch(`${directusItems}Agenda?sort[]=date`, fetchOptions) 

        return items.data
    }
    ,
    { server: false }
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
.agendaStripe {
     background: linear-gradient(90deg, rgba(0, 47, 74, 1) 0%, rgba(146, 76, 2, 1) 100%);
     padding: 30px;
     margin-top: 30px;
 }
.agendaButtonBox{
    padding: 30px 0;
}
.agendaButtonBox .agendaButton {
    width: min(100%, 600px);
    font-size: 18px;
    font-weight: 600;
    color: var(--dark-blue);
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #fff;
    transition: var(--fadeQuick);
}

.agendaButtonBox .agendaButton:hover {
    color: white;
    background-color: var(--dark-blue);
    box-shadow: var(--shadow);
    transition: var(--fadeQuick);
}

.dateCard {
    min-height: 500px;
}
.dateCardFrame {
    width: 100%;
    height: 250px;
}
img {
    max-width: 100%;
    max-height: 250px;
    /* object-fit: contain; */
    border-radius: 5px;
    box-shadow: var(--shadow);
}
</style>