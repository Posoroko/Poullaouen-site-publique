<template>
    <div class="w100">
        <section class="adjoints marTop150">
            <SectionTitleBar title="Les adjoints et délégués municipaux" />

            <div class="stripe marTop100 relative">
                <!-- <SectionPieds /> -->
                <div class="content mainWidth flex justifyCenter wrap gap20">
                    <div class="adjointCard flex column" v-for="person in delegues" :key="person.id">
                        <div class="topBox centered">
                            <h2 class="name">
                                {{ person.firstName }} {{ person.lastName }}
                            </h2>

                            <h3 class="role">
                                {{ person.role }}
                            </h3>
                        </div>

                        <div class="adjointFrame centered">
                            <img class="adjointImg" :src="`${directusAssets}${person.image}.jpg`" alt="">
                        </div>

                        <p class="roleDetail">{{ person.roleDetail }}</p>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

const props = defineProps({
    delegues: Array
})

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const headerData = {
    images: [
        {
            src: '/images/header/equipe/équipe-municipale-Poullaouen.jpg',
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
            text: 'Equipe municipale',
            target: '/ma-mairie/equipe-municipale'
        }
    ]
}

</script>

<style scoped>
.adjointCard {
    background-color: var(--dark-blue);
    margin: 15px 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    width: 300px;
}

.adjointFrame {
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
}
.adjointImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 15%;
}
.adjointCard .topBox,
.adjointCard .roleDetail {
    padding: 10px;
}
.adjointCard .topBox .name,
.adjointCard .topBox .role, 
.adjointCard .roleDetail {
    color: white;
}
.adjointCard .topBox .name{
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}
.adjointCard .topBox .role {
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
}
.adjointCard .roleDetail {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
}
</style>