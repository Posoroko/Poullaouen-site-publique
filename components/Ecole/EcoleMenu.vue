<template>
    <section class="menuSection">
        <div class="menuBigBox mainWidth relative">

            <div class="menuDashboard flex justifyCenter alignCenter gap20">
                <div class="button pointer flex column alignCenter" 
                    :class="{ active: activeButton == `id${menu.id}`}" 
                    v-for="menu in menus" :key="menu.id" 
                    :data-id="`id${menu.id}`"
                    @click="selectWeek">

                    <span class="Span1">semaine du :</span>
                    <span class="span2">{{ toDayMonthYearFormat(menu.date) }}</span>
                </div>
            </div>

            <div class="box flex justifyCenter" v-if="menu">
                <div class="menuCol col1">
                    <div class="cell"></div>
                    <div class="cell">Entrée</div>
                    <div class="cell">Plat</div>
                    <div class="cell">Dessert</div>
                </div>
               

                <div class="menuCol colDay">
                    <div class="cell">Lundi {{ menu.monday }}</div>
                    <div class="cell">{{menu.mondayStarter}}</div>
                    <div class="cell">{{ menu.mondayDish }}</div>
                    <div class="cell">{{ menu.mondayDessert }}</div>
                    
                </div>

                <div class="menuCol colDay">
                    <div class="cell">Mardi {{ menu.tuesday }}</div>
                    <div class="cell">{{ menu.tuesdayStarter }}</div>
                    <div class="cell">{{ menu.tuesdayDish }}</div>
                    <div class="cell">{{ menu.tuesdayDessert }}</div>
                </div>

                <div class="menuCol colDay">
                    <div class="cell">Jeudi {{ menu.thursday }}</div>
                    <div class="cell">{{ menu.thursdayStarter }}</div>
                    <div class="cell">{{ menu.thursdayDish }}</div>
                    <div class="cell">{{ menu.thursdayDessert }}</div>
                </div>

                <div class="menuCol colDay">
                    <div class="cell">Vendredi {{ menu.friday }}</div>
                    <div class="cell">{{ menu.fridayStarter }}</div>
                    <div class="cell">{{ menu.fridayDish }}</div>
                    <div class="cell">{{ menu.fridayDessert }}</div>
                </div>
            </div>


            <img class="menuBackdrop" src="/images/ecole/taches.png" alt="">
        </div>
        
    </section>
</template>

<script setup>

const activeButton = ref(null)
const menu = ref(null)

const selectWeek = (e) => {
    activeButton.value = e.currentTarget.getAttribute('data-id')
    menu.value = menus.value.find(menu => menu.id == e.currentTarget.getAttribute('data-id').slice(2))
}
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
    background-color: var(--light-blue);
    padding: 10px 20px;
    border-radius: 50px;
    margin: 20px 0;
}

.menuDashboard .button *{
    color: rgb(148, 186, 218);
    font-size: 14px;
    user-select: none;
}
.menuDashboard .active {
    background-color: var(--brown);
    box-shadow: var(--shadow);
}
.menuDashboard .active *{
    color: white;
}
.menuDashboard .button .span1{
    font-size: 18px;
}
.menuDashboard .button .span2{
    font-size: 20px;
    font-weight: 700;
}

.box {
    height: 50vh;
    margin-bottom: 50px;
}
.menuCol {
    width: 17%;
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
.col1 .cell {
    font-size: 18px;
    font-weight: 700;
}

@media (max-width: 949px) {

}

@media (min-width: 950px) {

}

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