<template>

    <section class="w100" v-if="groups">
        <div class="groups marTop100" v-for="type in groupTypes" :key="type.id" :id="type.id">
            <SectionTitleBar :title="type.name" />

            <p class="mainWidth intro-text" v-if="type.id == 'commission'">
                Elles sont désignées par le conseil municipal suite à l’élection du Maire et des Adjoints. Ce sont des groupes de travail qui se réunissent pour
                étudier les dossiers avant leur présentation au conseil.
            </p>

            <p class="mainWidth intro-text" v-if="type.id == 'delegation'">
                Le conseil municipal, après l’élection du Maire et des adjoints, désigne les élus et/ou les membres associatifs qui représenteront la commune au
                sein des syndicats et autres structures.
            </p>

 
            <div class="tallCardBox content mainWidth flex justifyCenter alignStretch wrap gap50 marTop100">
                <CardsTallMain  v-for="group in groups[type.id]" :key="group.id" :title="group.name" :subtitle="group.boss" :cardImage="group.image" :localImage="false">
                    <div class="tallCardBottomBox">    
                        <div class="w100" v-if="group.membresElus.length">
                            <h4>Membres élus :</h4>
                            <ul class="membersList flex wrap">
                                <li v-for="member in group.membresElus" :key="member.id" class="groupMember">
                                    {{ member.Equipe_id.firstName.slice(0, 1) }}. {{ member.Equipe_id.lastName.toUpperCase() }}
                                </li>
                            </ul>
                        </div>

                        <div class="w100" v-if="group.membresNonElus.length">
                            <h4>Membres non élus :</h4>
                            <ul class="membersList flex wrap">
                                <li v-for="member in group.membresNonElus" :key="member.id" class="groupMember">
                                    {{ member.Non_elu_id.firstName.slice(0, 1) }}. {{ member.Non_elu_id.lastName.toUpperCase() }}
                                </li>
                            </ul>
                        </div>

                        <div class="flex">
                            <div class="w50" v-if="group.titulairesElus.length">
                                <h4>Titulaire<span v-if="group.titulairesElus.length > 1">s</span> élu<span v-if="group.titulairesElus.length > 1">s</span> :</h4>
                                <ul class="membersList flex wrap">
                                    <li v-for="member in group.titulairesElus" :key="member.id" class="groupMember">
                                        {{ member.Equipe_id.firstName.slice(0, 1) }}. {{ member.Equipe_id.lastName.toUpperCase() }}
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="w50" v-if="group.suppleantsElus.length">
                                <h4>Suppléant<span v-if="group.suppleantsElus.length > 1">s</span> élu<span v-if="group.suppleantsElus.length > 1">s</span> :</h4>
                                <ul class="membersList flex wrap">
                                    <li v-for="member in group.suppleantsElus" :key="member.id" class="groupMember">
                                        {{ member.Equipe_id.firstName.slice(0, 1) }}. {{ member.Equipe_id.lastName.toUpperCase() }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="w50" v-if="group.titulairesNonElus.length">
                                <h4>Titulaire<span v-if="group.titulairesNonElus.length > 1">s</span> non élu<span v-if="group.titulairesNonElus.length > 1">s</span> :</h4>
                                <ul class="membersList flex wrap">
                                    <li v-for="member in group.titulairesNonElus" :key="member.id" class="groupMember">
                                        {{ member.Non_elu_id.firstName.slice(0, 1) }}. {{ member.Non_elu_id.lastName.toUpperCase() }}
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="w50" v-if="group.suppleantsNonElus.length">
                                <h4>Suppléant<span v-if="group.suppleantsNonElus.length > 1">s</span> non élu<span v-if="group.suppleantsNonElus.length > 1">s</span> :</h4>
                                <ul class="membersList flex wrap">
                                    <li v-for="member in group.suppleantsNonElus" :key="member.id" class="groupMember">
                                        {{ member.Non_elu_id.firstName.slice(0, 1) }}. {{ member.Non_elu_id.lastName.toUpperCase() }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </CardsTallMain>

            </div>
        </div>
    </section>
</template>

<script setup>

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const groupTypes = ref([
    {
        name: 'Les commissions communales',
        id: 'commission'
    }, 
    {
        name: 'Les délégations aux structures intercommunales et autres collectivités',
        id: 'delegation'
    }
])

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, name, type, image, membresElus, boss, membresElus.Equipe_id.*, membresNonElus.Non_elu_id.*, titulairesElus.Equipe_id.*, suppleantsElus.Equipe_id.*, titulairesNonElus.Non_elu_id.*, suppleantsNonElus.Non_elu_id.* ',
    }
}

const { data: groups } = await useAsyncData(
    "groups",
    async () => {
        const items = await $fetch(`${directusItems}Delegations`, fetchOptions)
        const sortedGroups = {
            delegation: [],
            commission: [] 
        }

        items.data.forEach(item => {
            sortedGroups[item.type].push(item)
        })

        return sortedGroups 
    }
    ,
    { server: true }
)

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
})


</script>

<style scoped>
.content:v-deep(.tallCard) {
    min-height: 800px;
}
.tallCardBottomBox {
    min-height: 180px;
}

.membersList {
    padding: 5px;
    text-align: center;
}
.groupMember{
    font-size: 13px;
    font-weight: 300;
    margin-right: 5px;
    display: inline;
}

</style>