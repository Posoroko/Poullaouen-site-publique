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
                        <li><NuxtLink to="/menu-de-la-cantine">Menu de la cantine</NuxtLink></li>
                        <li><NuxtLink to="/galerie-Photo">Galerie Photo</NuxtLink></li>
                        <li><NuxtLink to="/agenda">Agenda</NuxtLink></li>
                        <li><NuxtLink to="/actualite">Actualité</NuxtLink></li>
                    </ul>
                </li>
                <li class="levelOne flex column gap10">
                    <NuxtLink class="levelOneTitle" to="/ma-mairie">Ma Mairie</NuxtLink>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/equipe-municipale">L’Équipe Municipale</NuxtLink></li>
                        <li><NuxtLink to="/ccas">Le centre communal d’action sociale (CCAS)</NuxtLink></li>
                        <li><NuxtLink to="/salles-municipales">Les salles municipales</NuxtLink></li>
                        <li><NuxtLink to="/bulletin-municipal">Le bulletin municipal</NuxtLink></li>
                        <li><NuxtLink to="/proces-verbaux-du-conseil-municipal">Les procès verbaux du conseil municipal</NuxtLink></li>
                        <li><NuxtLink to="/publications-reglementaires">Les publications règlementaires</NuxtLink>Les publications règlementaires</li>
                    </ul>
                </li>
                <li class="levelOne flex column gap10">
                    <NuxtLink class="levelOneTitle" to="/mon-quotidien">Mon Quotidien</NuxtLink>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/ecole-municipale">L’école municipale</NuxtLink></li>
                        <li><NuxtLink to="/associations">Les associations</NuxtLink></li>
                        <li><NuxtLink to="/mediatheque">La médiathèque</NuxtLink></li>
                        <li><NuxtLink to="/equipements-sportifs-et-de-loisir">Les équipements sportifs et de loisir</NuxtLink></li>
                        <li><NuxtLink to="/commerces-et-entreprises">Les commerces et entreprises</NuxtLink></li>
                    </ul>

                </li>
                <li class="levelOne flex column gap10">
                    <NuxtLink class="levelOneTitle"  to="/=mes-sorties">Mes Sorties</NuxtLink>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/histoire">Histoire</NuxtLink></li>
                        <li><NuxtLink to="/patrimoine">Patrimoine</NuxtLink></li>
                        <li><NuxtLink to="/chemins-de-randonnee">Les chemins de randonnée</NuxtLink></li>
                        <li><NuxtLink to="/se-loger-se-restaurer">Se loger, se restaurer</NuxtLink></li>
                        <li><NuxtLink to="/loisirs">Loisirs</NuxtLink></li>
                    </ul>
                </li>
                <li class="levelOne flex column gap10">
                    <NuxtLink class="levelOneTitle" to="/mes-infos">Mes Infos</NuxtLink>
                    <ul class="levelTwo flex column gap10">
                        <li><NuxtLink to="/transports">Les transports</NuxtLink></li>
                        <li><NuxtLink to="/se-loger">Se loger</NuxtLink></li>
                        <li><NuxtLink to="/plan-local-d-hurbanisme">Le plan local d’urbanisme (PLU)</NuxtLink></li>
                        <li><NuxtLink to="/eau-et-assainissement">Eau et assainissement</NuxtLink></li>
                        <li><NuxtLink to="/gestion-des-dechets">Gestion et déchets</NuxtLink></li>
                    </ul>
                </li>
                <li class="levelOneTitle levelOne flex column gap10"><NuxtLink to="/mentions-legales">Mentions légales</NuxtLink></li>
                <li class="levelOneTitle levelOne flex column gap10"><NuxtLink to="/proposer-un-evenement">Proposer un événement</NuxtLink></li>
            </ul>
        </div>
    </main>
</template>

<script setup>
const path = ref([
    {
        text: "Accueil",
        link: "/"
    },
    {
        text: "Plan du site",
        link: "/plan-du-site"
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


