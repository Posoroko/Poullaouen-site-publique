<template>
    <section class="menuSection">
        <div class="menuBigBox mainWidth relative">

            <div class="menuDashboard flex justifyCenter alignCenter gap20">
                <div class="button pointer flex column alignCenter" 
                    :class="{ active: activeButton == `id${menu.id}`}" 
                    v-for="menu in menus" :key="menu.id" 
                    :data-id="`id${menu.id}`"
                    @click="selectWeek">

                    <span class="Span1">Semaine du :</span>
                    <span class="span2">{{ toDayMonthYearFormat(menu.date) }}</span>
                </div>
            </div>

            <div class="box flex justifyCenter" v-if="menu">
                <div class="menuCol col1">
                    <div class="cell cellTable"></div>
                    <div class="cell cellTable">Entrée</div>
                    <div class="cell cellTable">Plat</div>
                    <div class="cell cellTable">Dessert</div>
                </div>
               

                <div class="menuCol colDay">
                    <div class="cell cellTable">Lundi {{ menu.monday }}</div>
                    <div class="cell cellFood">{{menu.mondayStarter}}</div>
                    <div class="cell cellFood">{{ menu.mondayDish }}</div>
                    <div class="cell cellFood">{{ menu.mondayDessert }}</div>
                    
                </div>

                <div class="menuCol colDay">
                    <div class="cell cellTable">Mardi {{ menu.tuesday }}</div>
                    <div class="cell cellFood">{{ menu.tuesdayStarter }}</div>
                    <div class="cell cellFood">{{ menu.tuesdayDish }}</div>
                    <div class="cell cellFood">{{ menu.tuesdayDessert }}</div>
                </div>

                <div class="menuCol colDay">
                    <div class="cell cellTable">Jeudi {{ menu.thursday }}</div>
                    <div class="cell cellFood">{{ menu.thursdayStarter }}</div>
                    <div class="cell cellFood">{{ menu.thursdayDish }}</div>
                    <div class="cell cellFood">{{ menu.thursdayDessert }}</div>
                </div>

                <div class="menuCol colDay">
                    <div class="cell cellTable">Vendredi {{ menu.friday }}</div>
                    <div class="cell cellFood">{{ menu.fridayStarter }}</div>
                    <div class="cell cellFood">{{ menu.fridayDish }}</div>
                    <div class="cell cellFood">{{ menu.fridayDessert }}</div>
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
    background-color: var(--brown);
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
    background-color: rgb(114, 61, 0);
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
    height: 500px;
    margin-bottom: 50px;
}
.menuCol {
    width: 17%;
    height: 100%;
}
.menuCol .cell {
    height: 25%;

    color: white;
    background-color: #002f4aa4;
    padding: 3px 5px;
    border: 1px solid white;
    display: grid;
    place-items: center;
    text-align: center;
}
.cellTable {
    font-size: 18px;
    font-weight: 600;
}
.cellFood {
    font-size: 16px;
    font-weight: 400;
}
.col1 .cell {
    font-size: 16px;
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