<template>
    <section class="w100">
        <section class="conseillers">
            <SectionTitleBar title="Les conseillers municipaux" />

            <div class="stripe marTop20 relative">
                <!-- <SectionPieds /> -->
                <div class="content mainWidth flex alignCenter justifyCenter wrap gap20">
                    <div class="conseillerCard flex column" v-for="person in conseillers" :key="person.id">
                        <div class="topBox centered">
                            <h2 class="name">
                                {{ person.firstName }} {{ person.lastName }}
                            </h2>

                            <h3 class="role">
                                {{ person.role }}
                            </h3>
                        </div>

                        <div class="frame">
                            <img class="objectFitCover" :src="`${directusAssets}${person.image}.jpg`" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </section>



</template>

<script setup>

const props = defineProps({
    conseillers: Array
})
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

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
.conseillerCard {
    background-color: var(--brown);
    width: 20%;
    border-radius: 10px;
    box-shadow: var(--shadow);
    overflow: hidden;
    width: 200px;
}

.conseillerCard .frame {
    width: 100%;
    aspect-ratio: 1/1;
}

.conseillerCard .topBox,
.conseillerCard .roleDetail {
    padding: 10px;
}

.conseillerCard .topBox .name,
.conseillerCard .topBox .role,
.conseillerCard .roleDetail {
    color: white;
    text-align: center;
}

.conseillerCard .topBox .name {
    font-size: 16px;
    font-weight: 500;
}

.conseillerCard .topBox .role {
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
}

.conseillerCard .roleDetail {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
}
</style>