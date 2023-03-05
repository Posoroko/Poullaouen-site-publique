<template>
    <HeaderMain :data="headerData" />

    <main class="mainCCAS">
        <p class="mainWidth intro-text">
            La commune vous propose plusieurs salles adaptées à vos évènements, pour tout renseignement vous pouvez contacter la mairie de Poullaouen ou de Locmaria-Berrien.
        </p>

        <div v-for="(salle, index) in salles" :key="salle.id" >
            <SectionMainSloted :data="{ title: salle.name, image: salle.image}">
                <div class="textBox h100 flex column justifyCenter">
                    <h3 class="section-address-text">{{ salle.adress }}</h3>

                    <div class="page-text marTop20" v-html="salle.content"></div>

                    <div class="bottomContent">
                        <h4 class="level0 marTop20">Capacité</h4>

                        <ul class="flex marTop20">
                            <li v-if="salle.sittings" class="level2 page-text" vif="salle.sitings">Assis :  <b>{{ salle.sittings }}</b></li>
                            <li v-if="salle.standings" class="level2 page-text" vif="salle.standings">Debout : <b>{{ salle.standings }}</b></li>
                        </ul>


                        <h4 class="level0 marTop20">Tarifs</h4>
                        <div class="moreinfo italic">
                            <h5 class="level1">Poullaouennais</h5>
                            <ul>
                                <li class="breadcrumbs-text level2">
                                    <span>1 jour : &nbsp</span>
                                    <span v-if="salle.locals1">{{ salle.locals1 }}€ sans cuisine</span>
                                    <span v-if="salle.locals1 && salle.localsKitchen1">&nbsp / &nbsp</span>
                                    <span v-if="salle.localsKitchen1"> 
                                        {{ salle.localsKitchen1 }}€ avec cuisine
                                    </span>
                                </li>
                                <li class="breadcrumbs-text level2">
                                    <span>2 jours : &nbsp</span>
                                    <span v-if="salle.locals2">{{ salle.locals2 }}€ sans cuisine</span>
                                    <span v-if="salle.locals2 && salle.localsKitchen2">&nbsp / &nbsp</span>
                                    <span v-if="salle.localsKitchen2"> 
                                        {{ salle.localsKitchen2 }}€ avec cuisine
                                    </span>
                                </li>
                            </ul>
                            
                            
                        </div>

                        <div class="moreinfo italic">
                            <h5 class="level1">Non poullaouennais</h5>
                            <li>
                                <ul>
                                    <li class="breadcrumbs-text level2">
                                        <span>1 jour : &nbsp</span>
                                        <span v-if="salle.externs1">{{ salle.externs1 }}€ sans cuisine</span>
                                        <span v-if="salle.externs1 && salle.externsKitchen1">&nbsp / &nbsp</span>
                                        <span v-if="salle.externsKitchen1"> {{ salle.externsKitchen1 }}€ avec cuisine </span>
                                    </li>
                                    <li class="breadcrumbs-text level2">
                                        <span>2 jours : &nbsp</span>
                                        <span v-if="salle.externs2">{{ salle.externs2 }}€ sans cuisine</span>
                                        <span v-if="salle.externs2 && salle.externsKitchen2">&nbsp / &nbsp</span>
                                        <span v-if="salle.externsKitchen2">
                                            {{ salle.externsKitchen2 }}€ avec cuisine
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </div>

                        <p class="page-text marTop20" v-if="salle.name == 'La salle des fêtes'">Possibilité de location de sono.</p>

                        <div class="buttonBox flex justifyEnd">
                            <NuxtLink :to="`/galerie-photo/les-salles-municipales/${salle.slug}`" class="albumButton" 
                            :class="{ blueAlbumButton : index == 0 || index == 2, whiteAlbumButton : index == 1 || index == 3}">Voir l'album</NuxtLink>
                        </div>
                        
                    </div>
                </div>
            </SectionMainSloted>
        </div>
    </main>
</template>
<script setup>

const foo = () => {
    useEric()
}

const sectionData_1 = {
    image: "/images/ccas/ccas-gym.jpg",
    title: "Les activités"
}

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    // params: {
    //     fields: 'id, content, name, address, standings, sittings, kitchen, locals1, locals2, localsKitchen1, localsKitchen2, externs1, externs2, externsKitchen1, externsKitchen2, image, slug'
    // }
}

const { data: salles } = await useAsyncData(
    "salle",
    async () => {
        const items = await $fetch(`${directusItems}Salles`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: '/images/salles/la-salle-amzer-zo.jpg',
            alt: 'Salle Amzer Zo de Poullaouen',
        }
    ],
    title: 'Les salles municipales',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Ma mairie',
            target: '/ma-mairie/les-salles-municipales'
        },
        {
            text: 'Les salles municipales',
            target: '/ma-mairie/les-salles-municipales'
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

<style scoped>

.level1 {
    padding: 10px 0;
    margin-left: 10px;
}
.level2 {
    margin-left: 40px;
}

.albumButton{
    font-size: 20px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px black;
}
.whiteAlbumButton{
    background-color: white;
    color: var(--brown);
}
.blueAlbumButton {
    background-color: var(--dark-blue);
    color: white;
}
</style>