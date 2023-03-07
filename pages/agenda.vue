<template>
    <HeaderMain :data="headerData" />
    <main class="">

        <p class="intro-text mainWidth page-text">
            Tous les événements à venirs sont listés ici. Dates importantes, manifestations, fêtes, etc.
        </p>

        <section v-for="month in dates.months" :key="month.index">
            <SectionTitleBar :title="month.name" />

            <div class="mainWidth flex justifyCenter wrap gap20 marTop50">
                    <div class="dateCard" v-for="date in dates.dates[month.name]" :key="date.id">
                        <div class="topBox">
                            
                            <p class="date italic">{{ date.displayDate }} <span v-if="date.time">à {{ date.time }}</span> </p>
                            <p class="title">{{ date.title }}</p>
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
        </section>

    </main>
</template>

<script setup>

const props = defineProps({
    limit: String
})

const toDayMonthYearFormat = (_date) => {
    const weekDays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    let date = new Date(_date)
    const weekDay = weekDays[date.getDay()]
    const day = ("0" + date.getDate()).slice(-2)
    const month = months[date.getMonth()]
    return `${weekDay} ${day} ${month}`;
}

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
        const _dates = await $fetch(`${directusItems}Agenda`, fetchOptions)
        const dates = _dates.data

        const monthNames = [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre" ];

        const temp = {
            monthsRef: [],  //array of months index (0-11)
            months: [], //array of objects with month display name
            dates: {}   //one array for every month present in dates
        }

        dates.forEach(date => {
            const month = new Date(date.date).getMonth()
            if(!temp.monthsRef.includes(month)){
                temp.monthsRef.push(month)
                temp.months.push({
                    name: monthNames[month],
                    index: month
                })
                temp.dates[monthNames[month]] = []
            }
            date.displayDate = toDayMonthYearFormat(date.date) 
            temp.dates[monthNames[month]].push(date) 
        })

        return temp
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



</script>

<style></style>