<template>

    <section class="w100" v-if="groups">
        <div class="groups" v-for="type in groupTypes" :key="type.id" :id="type.id">
            <SectionTitleBar :title="type.name" />

            <div class="content mainWidth flex alignCenter justifyCenter wrap gap20">
                <div class="groupCard tallCard card flex column" v-for="group in groups[type.id]" :key="group.id">
                    
                    <div class="topBox centered">
                        <h2 class="name">
                            {{ group.name }}
                        </h2>

                        <h3 class="role">
                            {{ group.boss }}
                        </h3>
                    </div>

                    <div class="frame">
                        <img class="objectFitCover" :src="`${directusAssets}${group.image}.jpg`" alt="">
                    </div>

                    <div class="bottomBox">
                        <h4 class="centered">membres:</h4>

                        <ul class="membersList">
                            <li class="groupMember" v-for="(member, index) in group.members" :key="index">
                                {{ member.Equipe_id.firstName }}  {{ member.Equipe_id.lastName }}, 
                            </li>
                        </ul>
                    </div>
                </div>
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
        fields: 'id, name, type, members.*.firstName, members.*.lastName, image',
    }
}

const { data: groups } = await useAsyncData(
    "groups",
    async () => {
        const items = await $fetch(`${directusItems}Delegations`, fetchOptions)
        console.log(items.data)
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

 


</script>

<style>
.stripe {
    margin-top: 50px;
}
.groups .stripe .content .card {
    width: min(480px, 95%);
    border-radius: 10px;
    box-shadow: var(--shadow);
}


.groups .stripe .content .card .frame {
    width: 100%;
    aspect-ratio: 1/1;
}

.groups .stripe .content .card .topBox,
.groups .stripe .content .card .roleDetail {
    padding: 10px;
}



.groups .stripe .content .card .topBox .name {
    font-size: 18px;
    font-weight: 600;
}

.groups .stripe .content .card .topBox .role {
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
}
.bottomBox h4 {
    color: white;
    font-weight: 500;
    margin-top: 10px;
}
.membersList {
    padding: 15px;
    text-align: center;
}
.groupMember{
    color: white;
    font-size: 14px;
    font-weight: 300;
    margin-right: 5px;
    display: inline;
}
.groupCard:nth-child(1),
.groupCard:nth-child(4) {
    background-color: var(--dark-blue);
}
.groupCard:nth-child(1) *,
.groupCard:nth-child(4) *{
    color:#fff;
}
.groupCard:nth-child(2) {
    background-color: #fff;
}
.groupCard:nth-child(2) * {
    color: var(--dark-blue);
}
.groupCard:nth-child(3) {
    background-color: var(--brown);
}
.groupCard:nth-child(3) * {
    color: #fff;
}
</style>