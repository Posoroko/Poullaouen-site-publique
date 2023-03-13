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
            
                <div class="tallCardBox mainWidth flex justifyCenter alignStretch gap50 marTop100 wrap">
                    <CardsTallMain 
                        v-for="asso in assosData.assos[filter]" :key="asso.id"
                        :title="asso.name" 
                        :subtitle="asso.definition" 
                        :cardImage="asso.image" 
                        :cardImageAlt="asso.imageAlt">
                    
                        <div class="assoBottomBox flex column gap10 justifyStart alignStart">
                            <div class="flex assoPresBox column" v-if="asso.presidents.length">
                                <p class="flex alignCenter gap10"><span class="icon">person</span><b>Président-e<span v-if="asso.presidents.length > 1">-s</span>:</b></p>
                                
                                <ul class="assoPresUl flex column justifyCenter gap100">
                                    <li v-for="pres in asso.presidents" :key="pres.Contacts_id.id" class="assoPresLi flex column gap5">
                                        <b>{{ pres.Contacts_id.firstName}} {{ pres.Contacts_id.lastName.toUpperCase() }}</b>
                                        <span class="assoPresTelephone">{{ pres.Contacts_id.telephone }}</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="infoBox flex column gap10">
                                <p class="flex alignCenter gap10" v-if="asso.email"> <span class="icon">mail</span> <a :href="`emailto:${asso.email}`">{{ asso.email }}</a> </p>
                                <p class="flex elignCenter gap10" v-if="asso.website"> <span class="icon">language</span> <a class="externalLink" :href="asso.website" target="_blank">Visiter le site web</a> </p>
                            </div>
                        </div>
                    </CardsTallMain>
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
}

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, name, definition, type, email, website, image, imageAlt, presidents, presidents.Contacts_id.firstName, presidents.Contacts_id.lastName, presidents.Contacts_id.id, presidents.Contacts_id.telephone'
    }
}

const { data: assosData } = await useAsyncData(
    "associations",
    async () => {
        const items = await $fetch(`${directusItems}Associations?sort[]=type`, fetchOptions)
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

    if(window.innerWidth < 1075) {
        return
    }

    const tallCardBoxes = document.querySelectorAll('.tallCardBox') 
    
    tallCardBoxes.forEach(box => { 
        if((box.children.length) % 2 != 0) {
            const placeholder = document.createElement('div')
            placeholder.classList.add('fakeTallCard')
            placeholder.classList.add('iLikeToMoveIt')
            box.appendChild(placeholder)
        }
    })

    const tallCards = document.querySelectorAll('.iLikeToMoveIt')

    for (let i = 0; i < tallCards.length; i = i + 4) {
        tallCards[i].classList.add('leftPushedTallCard')
    }
    for (let i = 3; i < tallCards.length; i = i + 4) {
        tallCards[i].classList.add('rightPushedTallCard')
    }

}

onMounted(() => {
    styleTallCards()
})


</script>

<style scoped>

.assoBottomBox {
    min-height: 225px;
}

.assoMain section {
    margin-top: 50px;
}
.assoBottomBox {
    padding: 20px 20px;
}
.assoPresBox {
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