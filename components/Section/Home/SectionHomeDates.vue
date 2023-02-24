<template>
    <section class="ActuSection">
        <SectionTitleBar title="Agenda" />

        <div class="agendaStripe">
            <div class="mainWidth flex justifyCenter wrap gap20">
                <div class="dateCard" v-for="date in dates" :key="date.id">
                    <div class="topBox">
                        <p class="title">{{ date.title }}</p>
                        <p class="date italic">{{ date.date }} <span v-if="date.time">à {{ date.time }}</span> </p>
                        <p class="location italic">{{ date.location }}</p>
                        <p class="organiser">{{ date.organiser }}</p>
                    </div>

                    <div class="middleBox centered w100">
                        <div class="frame">
                            <img class="objectFitContained" :src="`${directusAssets}${date.image}?key=card500`" :alt="date.imageAlt">
                        </div>
                    </div>

                    <div class="bottomBox">
                        <p class="content">
                            {{ date.content }}
                        </p>
                        <p class="moreInfo">{{ date.moreInfo }}</p>
                    </div>
                </div>
            </div>
            <NuxtLink to="/actualites">voir tout l'agenda</NuxtLink>
        </div>
        
    </section>
</template>
<script setup>

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

<style>
.agendaStripe {
    background: linear-gradient(90deg, rgba(0, 47, 74, 1) 0%, rgba(146, 76, 2, 1) 100%);
    padding: 30px;
}

.dateCard {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    box-shadow: var(--shadow);
    border-radius: 10px;
}
.dateCard .topBox {
    
}
.dateCard .topBox .title {
    font-size: 20px;
    font-weight: 600;
}
.dateCard .topBox .location,
.dateCard .topBox .date,
.dateCard .topBox .organiser {
    font-size: 15px;
    color: var(--brown);
    padding-left: 5px;
}
.dateCard .middleBox {
    margin: 10px 0;
    aspect-ratio: 5/4;
}

.dateCard .middleBox .frame {
    width: 100%;
    height: 100%;
}
.dateCard .middleBox .frame img {
    border-radius: 5px;
    /* box-shadow: var(--shadow); */
}
.dateCard .bottom .content{
    font-size: 14px;
}
</style>