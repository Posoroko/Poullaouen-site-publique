<template>

    <section class="w100" v-if="groups">
        <div class="groups" v-for="type in groupTypes" :key="type.id" :id="type.id">
            <SectionTitleBar :title="type.name" />
 
            <div class="content mainWidth flex justifyEvenly alignStretch wrap gap20">
                <CardsTallMain  v-for="group in groups[type.id]" :key="group.id"  :title="group.name" :subtitle="group.boss" :cardImage="group.image" :localImage="false">
                    <div class="tallCardBottomBox">    
                        <div v-if="group.membresElus.length">
                            <h4>élus :</h4>
                            <ul class="membersList flex wrap">
                                <li v-for="member in group.membresElus" :key="member.id" class="groupMember">
                                    {{ member.Equipe_id.firstName.slice(0, 1) }}. {{ member.Equipe_id.lastName.toUpperCase() }}
                                </li>
                            </ul>
                        </div>

                        <div v-if="group.membresNonElus.length">
                            <h4>non élus :</h4>
                            <ul class="membersList flex wrap">
                                <li v-for="member in group.membresNonElus" :key="member.id" class="groupMember">
                                    {{ member.Non_elu_id.firstName.slice(0, 1) }}. {{ member.Non_elu_id.lastName.toUpperCase() }}
                                </li>
                            </ul>
                        </div>

                        <div class="flex justifyBetween">
                            <div v-if="group.titulairesElus.length">
                                <h4>titulaire<span v-if="group.titulairesElus.length > 1">s</span> élu<span v-if="group.titulairesElus.length > 1">s</span> :</h4>
                                <ul class="membersList flex wrap">
                                    <li v-for="member in group.titulairesElus" :key="member.id" class="groupMember">
                                        {{ member.Equipe_id.firstName.slice(0, 1) }}. {{ member.Equipe_id.lastName.toUpperCase() }}
                                    </li>
                                </ul>
                            </div>
                            
                            <div v-if="group.suppleantsElus.length">
                                <h4>suppléant<span v-if="group.suppleantsElus.length > 1">s</span> élu<span v-if="group.suppleantsElus.length > 1">s</span> :</h4>
                                <ul class="membersList flex wrap">
                                    <li v-for="member in group.suppleantsElus" :key="member.id" class="groupMember">
                                        {{ member.Equipe_id.firstName.slice(0, 1) }}. {{ member.Equipe_id.lastName.toUpperCase() }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex justifyBetween">
                            <div v-if="group.titulairesNonElus.length">
                                <h4>titulaire<span v-if="group.titulairesNonElus.length > 1">s</span> non élu<span v-if="group.titulairesNonElus.length > 1">s</span> :</h4>
                                <ul class="membersList flex wrap">
                                    <li v-for="member in group.titulairesNonElus" :key="member.id" class="groupMember">
                                        {{ member.Non_elu_id.firstName.slice(0, 1) }}. {{ member.Non_elu_id.lastName.toUpperCase() }}
                                    </li>
                                </ul>
                            </div>
                            
                            <div v-if="group.suppleantsNonElus.length">
                                <h4>suppléant<span v-if="group.suppleantsNonElus.length > 1">s</span> non élu<span v-if="group.suppleantsNonElus.length > 1">s</span> :</h4>
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
    console.log(cards)
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

<style scoped>
.content {
    margin-top: 50px;
}
.bottomBox * h4 {
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
}
.membersList {
    padding: 5px;
    text-align: center;
}
.groupMember{
    font-size: 12px;
    font-weight: 300;
    margin-right: 5px;
    display: inline;
}

</style>