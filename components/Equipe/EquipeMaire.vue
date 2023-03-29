<template>
    <section class="w100">
        <section class="maire">
            <SectionTitleBar title="Le Maire" />

            <div class="stripe marTop150 relative">
                <!-- <SectionPieds /> -->
                <div class="content mainWidth flex alignCenter justifyCenter">
                    <div class="maireCard flex column shadow">
                        <div class="titleBox centered">
                            <h2>
                                {{ maire.firstName }} {{ maire.lastName }}
                            </h2>

                            <h3 class="italic">
                                {{ maire.role }}
                            </h3>
                        </div>

                        <figure class="maireFrame centered">
                            <img class="objectFitCover" src="/images/equipe/Didier-Goubil.jpg" alt="">
                        </figure>
                    </div>

                    <p class="text page-text motDuMaire">
                        {{ maire.motDuMaire }}
                    </p>
                </div>

                <div class="footBox absolutlyCentered">
                    <SectionPieds />
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>

const props = defineProps({
    maire: Object
})

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

<style>
.maire .stripe {
    background-color: var(--dark-blue);
    padding: 30px 0;
}

.maire .stripe .content {
    padding: 20px 0;
    gap: 30px;
}

.maireCard {
    

    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
}

.maireCard .maireFrame {
    width: min(95vw, 375px);
    aspect-ratio: 1/1;
    background-color: black;
}
.maireCard .titleBox {
    padding: 10px;
}
.maireCard .titleBox h2 {
    font-weight: 24px;
    font-weight: 600;
}
.maireCard .titleBox h3 {
    font-weight: 400;
}

.maire .stripe .content .text {
    color: #fff;
    text-align: justify;
}

@media (max-width: 719px) {
    .maire .stripe .content {
        flex-direction: column;
    }

    .maire .stripe .content .card,
    .maire .stripe .content .text {
        width: 95%;
    }
}

@media (min-width: 720px) {
    .maire .stripe .content {
        flex-direction: row;
    }

    .maire .stripe .content .card,
    .maire .stripe .content .text {
        width: 45%;
    }
}

.maire .stripe .footBox {
    height: 135%;
    width: 100%;
    z-index: -1;
}
.maire .stripe .footBox *{
    fill: var(--brown);
}

.sectionTitleBox {
    position: relative;
    z-index: -2;
}
.motDuMaire {
    white-space: pre-wrap;
}
</style>