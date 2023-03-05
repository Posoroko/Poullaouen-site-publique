<template>
    <div class="w100 marTop100">
        <section class="conseillers">
            <SectionTitleBar title="Les conseillers municipaux" />

            <div class="stripe marTop100 relative">
                <!-- <SectionPieds /> -->
                <div class="content mainWidth flex alignCenter justifyCenter wrap gap20">
                    <div class="conseillerCard flex column" v-for="person in conseillers" :key="person.id">
                        <div class="topBox centered">
                            <h2 class="name">
                                {{ person.firstName }} {{ person.lastName }}
                            </h2>
                        </div>

                        <div class="conseillerFrame">
                            <img class="conseillerImg" :src="`${directusAssets}${person.image}.jpg`" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const props = defineProps({
    conseillers: Array
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
.conseillerCard {
    background-color: var(--brown);
    width: 20%;
    margin: 15px 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    overflow: hidden;
    width: 200px;
}

.conseillerFrame {
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
}
.conseillerImg {
    width: 100%;
}
.conseillerCard .topBox {
    padding: 10px;
}

.conseillerCard .topBox .name {
    color: white;
    text-align: center;
}

.conseillerCard .topBox .name {
    font-size: 16px;
    font-weight: 500;
}

</style>