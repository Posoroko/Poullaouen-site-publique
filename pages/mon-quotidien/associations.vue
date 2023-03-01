<template>
    <HeaderMain :data="headerData" />

    <main class="assoMain w100 flex column"  ref="assoMain">
        <p class="intro-text mainWidth">
            Petite commune, mais très dynamique : les associations sportives, de loisirs, culturelles ne manquent pas.
        </p>

        

        <FilterBarMain :filters="assosData.filters" @updateFilter="moveSectionToFirstPosition" :slugged="false" />

        <div class="content flext column" ref="content">
            <section class="w100" v-for="filter in assosData.filters" :key="filter" :id="filter">
                <SectionTitleBar :title="filter" />
            
                <div class="mainWidth flex justifyCenter alignStretch gap50 marTop100 wrap">
                    <div class="assoCard tallCard whiteTallCard flex column" v-for="asso in assosData.assos[filter]" :key="asso.id">
                        <div class="topBox flex justifyCenter alignCenter column gap10">
                            <h2 class="">{{ asso.name }}</h2>
                            <h3 class="">{{ asso.definition }}</h3>
            
                        </div>
            
                        <div class="frame">
                            <img v-if="asso.image" :src="`${directusAssets}${asso.image}?key=card500`" :alt="asso.imageAlt" class="objectFitCover">

                            <div v-else class="icon placeholderIcon objectFitCover centered">diversity_3</div>
                        </div>
            
                        <div class="bottomBox flex column gap20 alignCenter justifyCenter">
                            <div class="flex presBox" v-if="asso.presidents.length > 0">
                                <span class="icon">person</span>
                                <ul class="flex column justifyCenter gap5">
                                    <li> <b>Président-e<span v-if="asso.presidents.length > 1">-s</span>:</b>  </li>
                                    <li v-for="pres in asso.presidents" :key="pres.Non_elu_id.id">

                                        {{pres.Non_elu_id.firstName}} &nbsp {{pres.Non_elu_id.lastName}}
                                    </li>
                                </ul>
                            </div>

                            <div class="flex presBox"  v-if="asso.contacts.length > 0">
                                <span class="icon">call</span>

                                <ul>
                                    <li v-for="dude in asso.contacts" :key="dude.Contacts_id.id">
                                        <span v-if="dude.Contacts_id.firstName">{{ dude.Contacts_id.firstName[0]}}.</span>
                                        <span v-if="dude.Contacts_id.lastName">{{ dude.Contacts_id.lastName }}&nbsp : </span>
                                        <span v-if="dude.Contacts_id.telephone">{{ dude.Contacts_id.telephone }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </main>
</template>
 
<script setup>
const content = ref(null)

const moveSectionToFirstPosition = (filter) => {
    const movingSection = document.getElementById(filter)
    const firstChild = content.value.firstElementChild

    content.value.insertBefore(movingSection, firstChild)
    // console.log(assoMain.value)
}

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, name, definition, type, image, imageAlt, presidents.Non_elu_id.firstName, presidents.Non_elu_id.lastName, presidents.Non_elu_id.id, contacts.Contacts_id.id, contacts.Contacts_id.firstName, contacts.Contacts_id.lastName, contacts.Contacts_id.telephone'
    }
}

const { data: assosData } = await useAsyncData(
    "associations",
    async () => {
        const items = await $fetch(`${directusItems}Associations`, fetchOptions)
        const assos = items.data
        
        const temp = {
            filterSlugs: [],
            filters: [],
            assos: {}
        }
        assos.forEach(asso => {

            if(!temp.filters.includes(asso.type)) {
                temp.filters.push(asso.type)
                temp.assos[asso.type] = []
            }
            temp.assos[asso.type].push(asso)
        })

        return temp
    }
    ,
    { server: true } 
)



const headerData = {
    images: [
        {
            src: `${directusAssets}a397abb9-ba05-479f-80b5-9f0a0dd4062f?key=header1500`,
            alt: 'Vie associative à Poullaouen',
        }
    ],
    title: 'Les associations',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Mon quotidien',
            target: '/mon-quotidien/associations'
        },
        {
            text: 'Associations',
            target: '/mon-quotidien/associations'
        }
    ]
}
const styleTallCards = () => {

    const cards = document.querySelectorAll('.tallCard');

    for (let i = 0; i < cards.length; i = i + 3) {
        cards[i].classList.replace('whiteTallCard', 'blueTallCard')
    }
    for (let i = 2; i < cards.length; i = i + 3) {
        cards[i].classList.replace('whiteTallCard', 'brownTallCard')
    }
}

onMounted(() => {
    styleTallCards()
})


</script>

<style>

.assoCard {
    min-height: 550px;
}

.assoMain section {
    margin-top: 50px;
}

.assoCard {
    width: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
}


.assoCard .frame {
    aspect-ratio: 4/3;
}


.assoCard .topBox h2 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}
.assoCard .topBox h3 {
    font-size: 18px;
    font-weight: 300;
    text-align: center;
}

.assoCard .topBox,
.assoCard .bottomBox {
    padding: 20px 30px;
}
.assoCard .bottomBox {
    padding-left: 50px;
}
.presBox {
    width: 100%;
    justify-content: flexStart;
    gap: 10px
}
.placeholderIcon {
    font-size: 200px;
    color: rgb(166, 175, 177);
    background-color: #eaf0f1;
}
</style>