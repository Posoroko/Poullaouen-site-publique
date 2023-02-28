<template>
    <section class="ActuSection">
        <SectionTitleBar title="Agenda" />

        <div class="agendaStripe">
            <div class="mainWidth flex justifyCenter wrap gap20">
                <div class="dateCard" v-for="date in dates" :key="date.id">
                    <div class="topBox">
                        <p class="title">{{ date.title }}</p>
                        <p class="date italic">{{new Date(date.date).toLocaleDateString()}} <span v-if="date.time">à {{ date.time }}</span> </p>
                        <p class="location italic">{{ date.location }}</p>
                        <p class="organiser">{{ date.organiser }}</p>
                    </div>

                    <div class="middleBox centered w100">
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
            <div class="agendaButtonBox centered ">
                <NuxtLink class="agendaButton textAlignCenter" to="/agenda">voir tout l'agenda</NuxtLink>
            </div>
        </div>
        
    </section>
</template>
<script setup>
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
    server: true,
    params: {
        fields: 'id, title, date, location, content, image, imageAlt, price, file, filename',
        limit: props.limit
    }
}

const { data: dates } = await useAsyncData(
    "agenda",
    async () => {
        const items = await $fetch(`${directusItems}Agenda`, fetchOptions)

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
.agendaStripe {
     background: linear-gradient(90deg, rgba(0, 47, 74, 1) 0%, rgba(146, 76, 2, 1) 100%);
     padding: 30px;
     margin-top: 30px;
 }

.agendaButtonBox .agendaButton {
    font-size: 20px;
    font-weight: 600;
    color: var(--dark-blue);
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 30px;
    background-color: #fff;
    transition: var(--fadeQuick);
}

.agendaButtonBox .agendaButton:hover {
    background-color: #a7bcca;
    box-shadow: var(--shadow);
    transition: var(--fadeQuick);
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