<template>
    <section class="w100">
        <section class="adjoints">
            <SectionTitleBar title="Les adjoints et déléguée municipaux" />

            <div class="stripe marTop20 relative">
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

                        <div class="frame">
                            <img class="objectFitCover" :src="`${directusAssets}${person.image}.jpg`" alt="">
                        </div>

                        <p class="roleDetail">{{ person.roleDetail }}</p>

                    </div>
                </div>
            </div>
        </section>
    </section>
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
.adjointCard {
    background-color: var(--dark-blue);
    border-radius: 10px;
    box-shadow: var(--shadow);
    width: 300px;
}

.adjointCard .frame {
    width: 100%;
    aspect-ratio: 1/1;
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