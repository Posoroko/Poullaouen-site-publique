<template>
    <HeaderMain :data="headerData" />

    <main class="w100 flex column equipeMain">

        <EquipeMaire :maire="poullaouennais.maire[0]" />

        <EquipeAdjoints :delegues="poullaouennais.adjoints"/>

        <EquipeConseillers :conseillers="poullaouennais.conseillers"/>

        <EquipeGroups />

    </main>

</template>

<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, firstName, lastName, role, roleDetail, image, motDuMaire'
    }
}

const { data: poullaouennais } = await useAsyncData(
    "equipe",
    async () => {
        const items = await $fetch(`${directusItems}Equipe`, fetchOptions)

        const temp = {
            maire: items.data.filter(el => el.role == 'Maire'),
            adjoints: items.data.filter(el => el.role.includes('Adj') || el.role.includes('gu')),
            conseillers: items.data.filter(el => el.role.includes('Conseil'))
        }
        console.log(temp)
        return temp
    }
    ,
    { server: true }
)


const headerData = {
    images: [
        {
            src: '/images/header/equipe/équipe-municipale-Poullaouën.jpg',
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Equipe municipale',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Ma mairie',
            target: '/ma-mairie/equipe-municipale'
        },
        {
            text: 'Equipe municipale',
            target: '/ma-mairie/equipe-municipale'
        }
    ]
}

</script>

<style>
.equipeMain  {
    padding-top: 50px;
    gap: 50px;
}
</style>