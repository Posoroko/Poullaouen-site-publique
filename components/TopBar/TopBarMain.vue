<template>
    <nav class="topBar flex justifyBetween alignCenter sticky top relative">
        <TopBarSiteIcon />

        <TopBarTabMenu :links="links"/>
        
        <TopBarBurgerMenu :links="links"/>

        <TopBarContactWidget />
    </nav>
</template>

<script setup>

const links = {
    mairie: [
        {
            text: "L'équipe municipale",
            path: "/ma-mairie/equipe-municipale"
        },
        {
            text: "Le centre communal d'action sociale (CCAS)",
            path: "/ma-mairie/ccas"
        },
        {
            text: "Les salles municipales",
            path: "/ma-mairie/les-salles-municipales"
        },
        {
            text: "Le bulletin municipal",
            path: "/ma-mairie/documents/bulletin-municipal"
        },
        {
            text: "Les procès verbaux du conseil municipal",
            path: "/ma-mairie/documents/proces-verbaux-du-conseil-municipal"
        },
        {
            text: "Les publications réglementaires",
            path: "/ma-mairie/documents/publications-reglementaires"
        }
    ],
    quotidien: [
        {
            text: "L'école municipale",
            path: "/mon-quotidien/ecole-municipale"
        },
        {
            text: "Les associations",
            path: "/mon-quotidien/associations"
        },
        {
            text: "La médiathèque",
            path: "/mon-quotidien/mediatheque"
        },
        {
            text: "Les équipements sportifs et de loisirs",
            path: "/mon-quotidien/equipements-sportifs-et-de-loisirs"
        },
        {
            text: "Les commerces et entreprises",
            path: "/mon-quotidien/commerces-et-entreprises"
        }
    ],
    sorties: [
        {
            text: "Histoire",
            path: "/mes-sorties/histoire"
        },
        {
            text: "Patrimoine",
            path: "/mes-sorties/patrimoine"
        },
        {
            text: "Les chemins de randonnée",
            path: "/mes-sorties/chemins-de-randonnee"
        },
        {
            text: "Se loger, se restaurer",
            path: "/mes-sorties/se-loger-se-restaurer"
        },
        // {
        //     text: "Village fleuri",
        //     path: "/mes-sorties/village-fleuri"
        // },
        {
            text: "Loisirs",
            path: "/mes-sorties/loisirs"
        }
    ],
    infos: [
        {
            text: "Les transports",
            path: "/mes-infos/transports"
        },
        {
            text: "Se loger",
            path: "/mes-infos/se-loger"
        },
        {
            text: "Urbanisme",
            path: "/mes-infos/urbanisme"
        },
        {
            text: "Eau et assainissement",
            path: "/mes-infos/eau-et-assainissement"
        },
        {
            text: "Gestion des déchets",
            path: "/mes-infos/gestion-des-dechets"
        }
    ],
    demarches: [
        {
            text: "Vos démarches",
            path: "https://www.service-public.fr/particuliers/vosdroits/comment-faire-si"
        }
    ]
}


</script>

<style>
.topBar {
    background-color: #fff;
    padding: 5px;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 10000;
}

@media (max-width: 1199px) {
    .tabBox {
        display: none;
    }
    .contactWidgetBox {
        display: none;
    }
}

@media (min-width: 1200px) {
    .burger {
        display: none;
    }
    .tinyWidget {
        display: none;
    }
}
</style>
