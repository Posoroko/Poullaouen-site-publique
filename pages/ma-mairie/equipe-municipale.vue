<template>
    <HeaderMain :data="headerData" />

    <main class="w100 flex column equipeMain">

        <EquipeMaire :maire="poullaouennais.maire[0]" />

        <EquipeAdjoints :delegues="poullaouennais.adjoints"/>

        <EquipeConseillers :conseillers="poullaouennais.conseillers"/>

        <EquipeGroups title="Les commissions communales" :data="commissions" />

        <EquipeGroups title="Les délégations aux structures intercommunales et autres collectivités" :data="delegations" />

    </main>

</template>

<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, firstName, lastName, role, roleDetail, image'
    }
}

const { data: poullaouennais } = await useAsyncData(
    "equipe",
    async () => {
        const items = await $fetch(`${directusItems}Equipe`, fetchOptions)
        console.log(items.data)

        const temp = {
            maire: items.data.filter(el => el.role == 'maire'),
            adjoints: items.data.filter(el => el.role.includes('adj')),
            conseillers: items.data.filter(el => el.role.includes('conseil'))
        }

        return temp
    }
    ,
    { server: true }
)

const commissions = [
    {
        "name": "Urbanisme - Ecole",
        "boss": "Vice-Présidente : Viviane MOISAN",
        "members": ["D.GOUBIL", "O.CORVEST", "P.GODE", "P.GUELLAFF", "A.LE CAM", "K.LE CAM", "G.LE GAL", "V.LE GALL", "N.LE MOAL", "Y.LOSSOUARN", "J.PIROU", "S.ROUX", "P.TALLEC."],
        "image": "/images/equipe/commissions/urbanisme.jpg"
    },
    {
        "name": "Urbanisme - Ecole",
        "boss": "Vice-Présidente : Viviane MOISAN",
        "members": ["D.GOUBIL", "O.CORVEST", "P.GODE", "P.GUELLAFF", "A.LE CAM", "K.LE CAM", "G.LE GAL", "V.LE GALL", "N.LE MOAL", "Y.LOSSOUARN", "J.PIROU", "S.ROUX", "P.TALLEC."],
        "image": "/images/equipe/commissions/urbanisme.jpg"
    },
    {
        "name": "Urbanisme - Ecole",
        "boss": "Vice-Présidente : Viviane MOISAN",
        "members": ["D.GOUBIL", "O.CORVEST", "P.GODE", "P.GUELLAFF", "A.LE CAM", "K.LE CAM", "G.LE GAL", "V.LE GALL", "N.LE MOAL", "Y.LOSSOUARN", "J.PIROU", "S.ROUX", "P.TALLEC."],
        "image": "/images/equipe/commissions/urbanisme.jpg"
    },
    {
        "name": "Urbanisme - Ecole",
        "boss": "Vice-Présidente : Viviane MOISAN",
        "members": ["D.GOUBIL", "O.CORVEST", "P.GODE", "P.GUELLAFF", "A.LE CAM", "K.LE CAM", "G.LE GAL", "V.LE GALL", "N.LE MOAL", "Y.LOSSOUARN", "J.PIROU", "S.ROUX", "P.TALLEC."],
        "image": "/images/equipe/commissions/urbanisme.jpg"
    }
]

const delegations = [
    {
        "name": "Urbanisme - Ecole",
        "boss": "Vice-Présidente : Viviane MOISAN",
        "members": ["D.GOUBIL", "O.CORVEST", "P.GODE", "P.GUELLAFF", "A.LE CAM", "K.LE CAM", "G.LE GAL", "V.LE GALL", "N.LE MOAL", "Y.LOSSOUARN", "J.PIROU", "S.ROUX", "P.TALLEC."],
        "image": "/images/equipe/commissions/urbanisme.jpg"
    },
    {
        "name": "Urbanisme - Ecole",
        "boss": "Vice-Présidente : Viviane MOISAN",
        "members": ["D.GOUBIL", "O.CORVEST", "P.GODE", "P.GUELLAFF", "A.LE CAM", "K.LE CAM", "G.LE GAL", "V.LE GALL", "N.LE MOAL", "Y.LOSSOUARN", "J.PIROU", "S.ROUX", "P.TALLEC."],
        "image": "/images/equipe/commissions/urbanisme.jpg"
    }
]

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
            text: 'accueil',
            target: '/'
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
    gap: 200px;
}
</style>