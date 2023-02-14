<template>
    <section class="w100">
        <section class="conseillers">
            <SectionTitleBar title="Les conseillers municipaux" />

            <div class="stripe marTop20 relative">
                <!-- <SectionPieds /> -->
                <div class="content mainWidth flex alignCenter justifyCenter wrap gap20">
                    <div class="card flex column" v-for="person in delegues" :key="person.id">
                        <div class="topBox centered">
                            <h2 class="name">
                                {{ person.firstName }} {{ person.lastName }}
                            </h2>

                            <h3 class="role">
                                {{ person.role }}
                            </h3>
                        </div>

                        <div class="frame">
                            <img class="objectFitCover" src="/images/equipe/Viviane-Moisan.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </section>



</template>

<script setup>


const delegues = [


    {
        "id": 2,
        "status": "published",
        "user_created": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_created": "2023-02-13T11:09:22.677Z",
        "user_updated": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_updated": "2023-02-13T11:42:12.517Z",
        "firstName": "Viviane",
        "lastName": "MOISAN",
        "role": "déléguée",
        "roleDetail": "Adjointe à l’urbanisme, au personnel et à l’école.",
        "email": null,
        "image": "c3e2d764-a1b7-4bd3-973a-c03775586c7a",
        "slug": "{\"name\":\"DSQDS\"}"
    },
    {
        "id": 2,
        "status": "published",
        "user_created": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_created": "2023-02-13T11:09:22.677Z",
        "user_updated": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_updated": "2023-02-13T11:42:12.517Z",
        "firstName": "Viviane",
        "lastName": "MOISAN",
        "role": "déléguée",
        "roleDetail": "Adjointe à l’urbanisme, au personnel et à l’école.",
        "email": null,
        "image": "c3e2d764-a1b7-4bd3-973a-c03775586c7a",
        "slug": "{\"name\":\"DSQDS\"}"
    },
    {
        "id": 2,
        "status": "published",
        "user_created": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_created": "2023-02-13T11:09:22.677Z",
        "user_updated": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_updated": "2023-02-13T11:42:12.517Z",
        "firstName": "Viviane",
        "lastName": "MOISAN",
        "role": "déléguée",
        "roleDetail": "Adjointe à l’urbanisme, au personnel et à l’école.",
        "email": null,
        "image": "c3e2d764-a1b7-4bd3-973a-c03775586c7a",
        "slug": "{\"name\":\"DSQDS\"}"
    },
    {
        "id": 2,
        "status": "published",
        "user_created": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_created": "2023-02-13T11:09:22.677Z",
        "user_updated": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_updated": "2023-02-13T11:42:12.517Z",
        "firstName": "Viviane",
        "lastName": "MOISAN",
        "role": "déléguée",
        "roleDetail": "Adjointe à l’urbanisme, au personnel et à l’école.",
        "email": null,
        "image": "c3e2d764-a1b7-4bd3-973a-c03775586c7a",
        "slug": "{\"name\":\"DSQDS\"}"
    },
    {
        "id": 2,
        "status": "published",
        "user_created": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_created": "2023-02-13T11:09:22.677Z",
        "user_updated": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_updated": "2023-02-13T11:42:12.517Z",
        "firstName": "Viviane",
        "lastName": "MOISAN",
        "role": "déléguée",
        "roleDetail": "Adjointe à l’urbanisme, au personnel et à l’école.",
        "email": null,
        "image": "c3e2d764-a1b7-4bd3-973a-c03775586c7a",
        "slug": "{\"name\":\"DSQDS\"}"
    },
    {
        "id": 2,
        "status": "published",
        "user_created": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_created": "2023-02-13T11:09:22.677Z",
        "user_updated": "b372dfe1-f551-47c3-a8b9-57ffe4292cdb",
        "date_updated": "2023-02-13T11:42:12.517Z",
        "firstName": "Viviane",
        "lastName": "MOISAN",
        "role": "déléguée",
        "roleDetail": "Adjointe à l’urbanisme, au personnel et à l’école.",
        "email": null,
        "image": "c3e2d764-a1b7-4bd3-973a-c03775586c7a",
        "slug": "{\"name\":\"DSQDS\"}"
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
.conseillers .stripe .content .card {
    background-color: var(--brown);
    width: 20%;
    border-radius: 10px;
    box-shadow: var(--shadow);
    overflow: hidden;
}

.conseillers .stripe .content .card .frame {
    width: 100%;
    aspect-ratio: 1/1;
}

.conseillers .stripe .content .card .topBox,
.conseillers .stripe .content .card .roleDetail {
    padding: 10px;
}

.conseillers .stripe .content .card .topBox .name,
.conseillers .stripe .content .card .topBox .role,
.conseillers .stripe .content .card .roleDetail {
    color: white;
}

.conseillers .stripe .content .card .topBox .name {
    font-size: 18px;
    font-weight: 600;
}

.conseillers .stripe .content .card .topBox .role {
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
}

.conseillers .stripe .content .card .roleDetail {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
}
</style>