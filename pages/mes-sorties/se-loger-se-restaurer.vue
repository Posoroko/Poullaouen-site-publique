<template>
    <HeaderMain :data="headerData" />

    <main>

        <p class="intro-text mainWidth">
            Envie de séjourner à la campagne, découvrez nos différentes possibilités d’hébergement.
        </p>

        <section>
            <SectionTitleBar  title="Les gîtes" />

            <div class="tallCardBox roomsContent mainWidth flex justifyCenter wrap gap50">
                <CardsTallMain v-for="item in items.filter(item => item.subType.slug == 'gite')" :key="item.id" :title="item.name" :subtitle="item.subType.displaySubtype" :cardImage="item.image" :cardImageAlt="item.imageAlt" :localImage="false">
                    <div class="cardContent flex column gap10">
                        <p class="flex alignCenter gap10" v-if="item.adress"> <span class="icon" aria-hidden="true">location_on</span> <span>{{ item.adress }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.phone"> <span class="icon" aria-hidden="true">call</span> <span>{{ item.phone }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.email"> <span class="icon" aria-hidden="true">email</span> <span>{{ item.email }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.website"> <span class="icon" aria-hidden="true">language</span> <a class="externalLink" :href="`${item.website}`" target="_blank">Voir le site web</a> </p>
                    </div>
                </CardsTallMain>
            </div>
        </section>

        <section>
            <SectionTitleBar  title="Les chambres d'hôtes" />

            <div class="tallCardBox roomsContent mainWidth flex justifyCenter wrap gap50">
                <CardsTallMain v-for="item in items.filter(item => item.subType.slug == 'chambre_d_hotes')" :key="item.id" :title="item.name" :subtitle="item.subType.displaySubtype" :cardImage="item.image" :cardImageAlt="item.imageAlt" :localImage="false">
                    <div class="cardContent flex column gap10">
                        <p class="flex alignCenter gap10" v-if="item.adress"> <span class="icon" aria-hidden="true">location_on</span> <span>{{ item.adress }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.phone"> <span class="icon" aria-hidden="true">call</span> <span>{{ item.phone }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.email"> <span class="icon" aria-hidden="true">email</span> <span>{{ item.email }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.website"> <span class="icon" aria-hidden="true">language</span> <a class="externalLink" :href="`${item.website}`" target="_blank">Voir le site web</a> </p>
                    </div>
                </CardsTallMain>
            </div>
        </section>

        <section>
            <SectionTitleBar  title="L'aire de camping-car" />

            <div class="tallCardBox roomsContent mainWidth flex justifyCenter wrap gap50">
                <CardsTallMain title="L'aire" cardImage="/images/se-loger/aire de camping car(1).jpg" cardImageAlt="L'aire de camping car de Poullaouen" :localImage="true">
                    <div class="cardContent flex column gap10">
                        <p class="flex alignCenter gap10" > <span class="icon" aria-hidden="true">location_on</span> <span>Rue du Ty Meur - Poullaouen</span> </p>
                        <p> L’aire de camping-car est dotée d’un kiosque qui se veut être un lieu de rassemblement, permettant rencontres et partages entre les voyageurs. </p>
                    </div>
                </CardsTallMain>
            </div>
        </section>

        <section>
            <SectionTitleBar  title="Bars et restaurants" />

            <div class="tallCardBox roomsContent mainWidth flex justifyCenter wrap gap50">
                <CardsTallMain v-for="item in items.filter(item => item.type.slug == 'bars_et_restaurants')" :key="item.id" :title="item.name" :subtitle="item.subType.displaySubtype" :cardImage="item.image" :cardImageAlt="item.imageAlt" :localImage="false">
                    <div class="cardContent flex column gap10">
                        <p class="flex alignCenter gap10" v-if="item.adress"> <span class="icon" aria-hidden="true">location_on</span> <span>{{ item.adress }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.phone"> <span class="icon" aria-hidden="true">call</span> <span>{{ item.phone }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.email"> <span class="icon" aria-hidden="true">email</span> <span>{{ item.email }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.website"> <span class="icon" aria-hidden="true">language</span> <a class="externalLink" :href="`${item.website}`" target="_blank">Voir le site web</a> </p>
                    </div>
                </CardsTallMain>
            </div>
        </section>

        <section>
            <SectionTitleBar  title="Alimentation" />

            <div class="tallCardBox roomsContent mainWidth flex justifyCenter wrap gap50">
                <CardsTallMain v-for="item in items.filter(item => item.type.slug == 'alimentation')" :key="item.id" :title="item.name" :cardImage="item.image" :subtitle="item.subType.displaySubtype" :cardImageAlt="item.imageAlt" :localImage="false">
                    <div class="cardContent flex column gap10">
                        <p class="flex alignCenter gap10" v-if="item.adress"> <span class="icon" aria-hidden="true">location_on</span> <span>{{ item.adress }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.phone"> <span class="icon" aria-hidden="true">call</span> <span>{{ item.phone }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.email"> <span class="icon" aria-hidden="true">email</span> <span>{{ item.email }}</span> </p>
                        <p class="flex alignCenter gap10" v-if="item.website"> <span class="icon" aria-hidden="true">language</span> <a class="externalLink" :href="`${item.website}`" target="_blank">Voir le site web</a> </p>
                    </div>
                </CardsTallMain>
            </div>
        </section>
    </main>

    <FooterMain />

</template>
 
<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, name, type, type.slug, type.displayType, image, imageAlt, hours, adress, phone, email, website, subType.slug, subType.displaySubtype' 
    }
}
// ?filter[image][_neq]=null
const { data: items } = await useAsyncData(
    "associations",
    async () => {
        const _items = await $fetch(`${directusItems}Commerces?[filter][type][slug][_in]=hebergement,bars_et_restaurants,alimentation`, fetchOptions) 

        return _items.data
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: `${directusAssets}0f3f2f74-8ae8-46ea-8092-0ea189088e81.JPG?key=header1500`,
            alt: 'Commerce de proximité à Poullaouen',
        }
    ],
    title: 'Se loger, se restaurer',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Mes sorties',
            target: '/mes-sorties/se-loger-se-restaurer',
            active: false
        },
        {
            text: 'Se loger, se restaurer',
            target: '/mes-sorties/se-loger-se-restaurer',
            active: false
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

        if (window.innerWidth < 1075) {
        return
    }

    const tallCardBoxes = document.querySelectorAll('.tallCardBox')

    tallCardBoxes.forEach(box => {
        if ((box.children.length) % 2 != 0) {
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
    // activeFilter.value = items.value.filters[0].ref
})


</script>

<style scoped>
.assoMain section {
    margin-top: 50px;
}
.roomsContent {
    margin-top: 50px;
}
.cardContent {
    padding: 20px;
}
</style>