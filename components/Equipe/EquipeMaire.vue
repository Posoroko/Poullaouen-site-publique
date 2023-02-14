<template>
    <section class="w100">
        <section class="maire">
            <SectionTitleBar title="Le Maire" />

            <div class="stripe marTop20 relative">
                <!-- <SectionPieds /> -->
                <div class="content mainWidth flex alignCenter justifyCenter">
                    <div class="card flex column">
                        <div class="titleBox centered">
                            <h2>
                                Didier GOUBIL
                            </h2>

                            <h3>
                                Maire de Poullaouën
                            </h3>
                        </div>

                        <div class="frame">
                            <img class="objectFitCover" src="/images/equipe/Didier-Goubil.jpg" alt="">
                        </div>
                    </div>

                    <p class="text page-text">
                        Mes chers amis, <br><br>
                        Au- delà de ses fonctionnalités, le site internet de notre mairie est aussi une vitrine publique
                        qui transmet une
                        image
                        et des valeurs. Un site institutionnel dynamique et interactif génère du lien entre la
                        collectivité et ses
                        administrés.
                        Les habitants sont bien sûr les premiers concernés par les informations de notre commune, mais
                        il s’adresse à un
                        public
                        bien plus large : futurs ou anciens habitants, parents d’élèves et leur famille, usagers des
                        services médicaux, des
                        commerces et des entreprises, touristes…
                        Le premier réflexe d’une personne qui veut se renseigner sur une commune est d’effectuer une
                        recherche sur internet…
                        le
                        potentiel de visibilité d’un site de mairie est énorme.
                        Le site internet de notre mairie a donc pour objectif :
                        Informer le public, dynamiser la vie de la commune, diffuser des actualités, démontrer le
                        dynamisme de l’équipe
                        municipale, annoncer les évènements, les projets, faciliter les démarches administratives,
                        partager les comptes
                        rendus
                        des conseils municipaux, promouvoir les opportunités économiques, les aspects touristiques, sans
                        oublier de raconter
                        «
                        l’histoire » de notre commune…
                        Je conclurais en remerciant et félicitant les membres de la commission communication, qui ont
                        œuvré à l’élaboration
                        du
                        site et principalement Nicole Tanguy, maire adjointe en charge de la communication, pour son
                        engagement sur ce
                        chantier
                        ô combien important. <br><br>
                        Bonne visite…
                    </p>
                </div>

                <div class="footBox absolute">
                    <SectionPieds />
                </div>

            </div>
        </section>

    </section>



</template>

<script setup>

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
.maire .stripe {
    background-color: var(--dark-blue);
}

.maire .stripe .content {
    padding: 20px 0;
    gap: 30px;
}

.maire .stripe .content .card {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
}

.maire .stripe .content .card .frame {
    height: 55vh;
}

.maire .stripe .content .card .titleBox {
    padding: 10px;
}

.maire .stripe .content .card .titleBox h3 {
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

.footBox {
    top: -10%;
    bottom: -10%;
    left: 25%;
    right: 25%;
    z-index: -1;
}

.footBox .foot svg .pied {
    fill: var(--brown);
}

.sectionTitleBox {
    position: relative;
    z-index: -2;
}
</style>