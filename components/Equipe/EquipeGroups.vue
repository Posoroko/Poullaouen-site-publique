<template>
    <section class="w100">
        <section class="groups">
            <SectionTitleBar :title="title" />

            <div class="stripe marTop20 relative">
                <!-- <SectionPieds /> -->
                <div class="content mainWidth flex alignCenter justifyCenter wrap gap20">
                    <div class="groupCard card flex column" v-for="group in data" :key="group.id">
                        <div class="topBox centered">
                            <h2 class="name">
                                {{ group.name }}
                            </h2>

                            <h3 class="role">
                                {{ group.boss }}
                            </h3>
                        </div>

                        <div class="frame">
                            <img class="objectFitCover" src="/images/equipe/Viviane-Moisan.jpg" alt="">
                        </div>

                        <div class="bottomBox">
                            <h4 class="centered">membres:</h4>
                            <ul class="membersList">
                                <li class="groupMember" v-for="(member, index) in group.members" :key="index">{{ member }}, </li>
                            </ul>
                        </div>
                        

                    </div>
                </div>
            </div>
        </section>


    </section>



</template>

<script setup>

const props = defineProps({
    title: String,
    data: Object
})




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