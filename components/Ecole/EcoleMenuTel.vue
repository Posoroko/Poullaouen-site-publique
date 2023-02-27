<template>
    <section class="menuSection">
        <div class="menuBigBox mainWidth relative">

            <div class="menuDashboard flex justifyCenter alignCenter gap20">
                <div class="button pointer flex column alignCenter" :class="{ active: activeButton == `id${menu.id}` }"
                    v-for="menu in menus" :key="menu.id" :data-id="`id${menu.id}`" @click="selectWeek">

                    <span class="Span1">semaine du :</span>
                    <span class="span2">{{ toDayMonthYearFormat(menu.date) }}</span>
                </div>
            </div>

            <div class="box flex column" v-if="menu">
                <div class="daySelector flex row gap10 justifyCenter">
                    <p class="dayBtn pointer" data-id="lundi" @click="selectDay" :class="{ activeDayBtn : activeDayBtn == 'lundi'}">lundi</p>
                    <p class="dayBtn pointer" data-id="mardi" @click="selectDay" :class="{ activeDayBtn: activeDayBtn == 'mardi' }">mardi</p>
                    <p class="dayBtn pointer" data-id="jeudi" @click="selectDay" :class="{ activeDayBtn: activeDayBtn == 'jeudi' }">jeudi</p>
                    <p class="dayBtn pointer" data-id="vendredi" @click="selectDay" :class="{ activeDayBtn: activeDayBtn == 'vendredi' }">vendredi</p>
                </div>

                <div class="columnBox flex justifyCenter">
                    <div class="menuCol col1">
                        <div class="cell"></div>
                        <div class="cell">Entrée</div>
                        <div class="cell">Plat</div>
                        <div class="cell">Dessert</div>
                    </div>

                     <div class="menuCol colDay" v-if="activeDayBtn == 'lundi'">
                        <div class="cell">Lundi {{ menu.monday }}</div>
                        <div class="cell">{{ menu.mondayStarter }}</div>
                        <div class="cell">{{ menu.mondayDish }}</div>
                        <div class="cell">{{ menu.mondayDessert }}</div>

                    </div>

                    <div class="menuCol colDay" v-if="activeDayBtn == 'mardi'">
                        <div class="cell">Mardi {{ menu.tuesday }}</div>
                        <div class="cell">{{ menu.tuesdayStarter }}</div>
                        <div class="cell">{{ menu.tuesdayDish }}</div>
                        <div class="cell">{{ menu.tuesdayDessert }}</div>
                    </div>

                    <div class="menuCol colDay" v-if="activeDayBtn == 'jeudi'">
                        <div class="cell">Jeudi {{ menu.thursday }}</div>
                        <div class="cell">{{ menu.thursdayStarter }}</div>
                        <div class="cell">{{ menu.thursdayDish }}</div>
                        <div class="cell">{{ menu.thursdayDessert }}</div>
                    </div>

                    <div class="menuCol colDay" v-if="activeDayBtn == 'vendredi'">
                        <div class="cell">Vendredi {{ menu.friday }}</div>
                        <div class="cell">{{ menu.fridayStarter }}</div>
                        <div class="cell">{{ menu.fridayDish }}</div>
                        <div class="cell">{{ menu.fridayDessert }}</div>
                    </div>
                </div>


                
            </div>


            <img class="menuBackdrop" src="/images/ecole/taches.png" alt="">
        </div>

    </section>
</template>

<script setup>

const activeButton = ref(null)

const selectWeek = (e) => {
    activeButton.value = e.currentTarget.getAttribute('data-id')
    menu.value = menus.value.find(menu => menu.id == e.currentTarget.getAttribute('data-id').slice(2))
}

const activeDayBtn = ref('lundi')

const selectDay = (e) => {
    activeDayBtn.value = e.currentTarget.getAttribute('data-id')
}


const menu = ref(null)

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
}

const { data: menus } = await useAsyncData(
    "menu",
    async () => {
        const menus = await $fetch(`${directusItems}Cantine`, fetchOptions)

        menus.data.forEach(menu => {
            const date = new Date(menu.date)
            menu.monday = ("0" + date.getDate()).slice(-2)
            menu.tuesday = ("0" + (date.getDate() + 1)).slice(-2)
            menu.thursday = ("0" + (date.getDate() + 3)).slice(-2)
            menu.friday = ("0" + (date.getDate() + 4)).slice(-2)
        })
        return menus.data
    }
    ,
    { server: true }
)
onMounted(() => {
    activeButton.value = `id${menus.value[0].id}`
    console.log(activeButton.value)
    menu.value = menus.value[0]


})

</script>

<style scoped>
.menuSection {
    padding: 50px 0;
}

.menuBigBox {
    padding: 30px;
}

.menuDashboard .button {
    background-color: var(--green);
    padding: 10px 20px;
    border-radius: 50px;
    margin: 20px 0;
}
.menuDashboard .active {
    background-color: rgb(1, 90, 1);
    box-shadow: var(--shadow);
}
.menuDashboard .button * {
    color: white;
    user-select: none;
    font-size: 12px;
    text-align: center;
}
.menuDashboard .button .span2 {
    font-size: 12px;
    font-weight: 700;
}

.daySelector {
    padding: 10px 0;
}
.daySelector .dayBtn{
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: var(--green);
    padding: 5px 8px;
    border-radius: 20px;
}

.daySelector .activeDayBtn {
    background-color: rgb(1, 90, 1);
}
.columnBox {
    height: 50vh;
}





.box {
    margin-bottom: 50px;
}

.menuCol {
    height: 100%;
}

.menuCol .cell {
    height: 25%;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: #002f4aa4;
    padding: 3px 5px;
    border: 1px solid white;
    display: grid;
    place-items: center;
    text-align: center;
}
.col1 {
    width: 30%;
}
.colDay {
    width: 70%
}
.col1 .cell {
    font-size: 18px;
    font-weight: 700;
}

@media (max-width: 949px) {}

@media (min-width: 950px) {}

.menuBackdrop {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.9;
}
</style>