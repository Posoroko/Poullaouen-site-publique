<template>
    <HeaderMain :data="headerData" />

    <main class="w100 flex column equipeMain">

        <EquipeMaire />

        <EquipeAdjoints />

        <EquipeConseillers />

        <EquipeGroups title="Les commissions communales" :data="commissions" />

        <EquipeGroups title="Les délégations aux structures intercommunales et autres collectivités" :data="delegations" />

    </main>

</template>

<script setup>

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