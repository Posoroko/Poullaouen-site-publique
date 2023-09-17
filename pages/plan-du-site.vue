<template>
    <header>
        <HeaderPathBar :path="path" />
        <HeaderTItleBar title="Plan du site" />
    </header>

    <main class="mainMentions">

        <div class="mainWidth marTop50">
            <h2 class=""><NuxtLink to="/plan-du-site">Plan du site</NuxtLink></h2>
            <ul class="levelZero flex column gap20 ">
                <li class="levelOne flex column gap10">
                    <NuxtLink class="levelOneTitle marTop20" to="/">Accueil</NuxtLink>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/mon-quotidien/menu-cantine">Menu de la cantine</NuxtLink></li>
                        <li><NuxtLink to="/galerie-Photo">Galerie Photo</NuxtLink></li>
                        <li><NuxtLink to="/agenda">Agenda</NuxtLink></li>
                        <li><NuxtLink to="/actualites">Actualités</NuxtLink></li>
                    </ul>
                </li>
                <li class="levelOne flex column gap10">
                    <h4 class="levelOneTitle">Ma Mairie</h4>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/ma-mairie/equipe-municipale">L’Équipe Municipale</NuxtLink></li>
                        <li><NuxtLink to="/ma-mairie/ccas">Le centre communal d’action sociale (CCAS)</NuxtLink></li>
                        <li><NuxtLink to="/ma-mairie/les-salles-municipales">Les salles municipales</NuxtLink></li>
                        <li><NuxtLink to="/ma-mairie/documents/bulletin-municipal">Le bulletin municipal</NuxtLink></li>
                        <li><NuxtLink to="/ma-mairie/documents/proces-verbaux-du-conseil-municipal">Les procès verbaux du conseil municipal</NuxtLink></li>
                        <li><NuxtLink to="/ma-mairie/documents/publications-reglementaires">Les publications règlementaires</NuxtLink>Les publications règlementaires</li>
                    </ul>
                </li>
                <li class="levelOne flex column gap10">
                    <h4 class="levelOneTitle">Mon Quotidien</h4>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/mon-quotidien/ecole-municipale">L’école municipale</NuxtLink></li>
                        <li><NuxtLink to="/mon-quotidien/associations">Les associations</NuxtLink></li>
                        <li><NuxtLink to="/mon-quotidien/mediatheque">La médiathèque</NuxtLink></li>
                        <li><NuxtLink to="/mon-quotidien/equipements-sportifs-et-de-loisir">Les équipements sportifs et de loisir</NuxtLink></li>
                        <li><NuxtLink to="/mon-quotidien/commerces-et-entreprises">Les commerces et entreprises</NuxtLink></li>
                    </ul>

                </li>
                <li class="levelOne flex column gap10">
                    <h4 class="levelOneTitle" >Mes Sorties</h4>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/mes-sorties/histoire">Histoire</NuxtLink></li>
                        <li><NuxtLink to="/mes-sorties/patrimoine">Patrimoine</NuxtLink></li>
                        <li><NuxtLink to="/mes-sorties/chemins-de-randonnee">Les chemins de randonnée</NuxtLink></li>
                        <li><NuxtLink to="/mes-sorties/se-loger-se-restaurer">Se loger, se restaurer</NuxtLink></li>
                        <li><NuxtLink to="/mes-sorties/loisirs">Loisirs</NuxtLink></li>
                    </ul>
                </li>
                <li class="levelOne flex column gap10">
                    <h4 class="levelOneTitle" >Mes Infos</h4>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/mes-infos/transports">Les transports</NuxtLink></li>
                        <li><NuxtLink to="/mes-infos/se-loger">Se loger</NuxtLink></li>
                        <li><NuxtLink to="/mes-infos/plan-local-d-hurbanisme">Le plan local d’urbanisme (PLU)</NuxtLink></li>
                        <li><NuxtLink to="/mes-infos/eau-et-assainissement">Eau et assainissement</NuxtLink></li>
                        <li><NuxtLink to="/mes-infos/gestion-des-dechets">Gestion et déchets</NuxtLink></li>
                    </ul>
                </li>
                <li class="levelOneTitle levelOne flex column gap10"><NuxtLink to="/mentions-legales">Mentions légales</NuxtLink></li>
                <li class="levelOneTitle levelOne flex column gap10"><NuxtLink to="/proposer-un-evenement">Proposer un événement</NuxtLink></li>
            </ul>
        </div>
    </main>

    <FooterMain />
</template>

<script setup>
const path = ref([
    {
        text: "Accueil",
        link: "/",
        active: true
    },
    {
        text: "Plan du site",
        link: "/plan-du-site",
        active: false
    }
])

</script>

<style scoped>
* {
    list-style: disc;
}
.levelZero {
    font-size: 24px;
    margin: auto;
    padding-left: 20px;
    list-style: disc;
}
.levelOne {
    font-size: 20px;
    padding-left: 40px;
    list-style: disc;
}
.levelOneTitle {
    font-weight: 600;
}
.levelTwo {
    font-size: 16px;
    padding-left: 60px;
    
}
h2,h3,
address,
p {
    padding-top: 30px;
}</style>


