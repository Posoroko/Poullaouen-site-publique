<template>
    <HeaderMain :data="headerData" />

    <main class="mainEcole">

        <div>
            <SectionMainSloted
                :data="{ title: 'L’école maternelle et primaire Jules Ferry', image: '/images/ecole/enseignants.jpg', imageAlt: 'Eau et assainissement', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter pad20 gap10">
                    <p>
                        L’école Jules Ferry accueille les enfants dès l’âge de 2 ans révolus. A la rentrée de septembre 2022, 83 élèves sont répartis dans les différentes
                        classes de la maternelle au CM2. Une classe bilingue français/breton multi-niveaux (de la maternelle au CM2) existe depuis 2010.
                        La classe bilingue de Marie Miguet : 13 élèves La classe maternelle de Julia Keller et Priscilla Charles : 28 élèves
                        La classe CP, CE1, CE2 de Marie Le Doaré : 23 élèves La classe CM1, CM2 d’Anthony Le Cam et Chloé Camus (le mardi) : 19 élèves
                    </p>

                    <div class="infoBox">
                        <p> <span class="icon">location_on</span>Service client</p>
                        <p> <span class="icon">call</span> 0969 323 529</p>
                        <p> <span class="icon">schedule</span> 8h-18h du lundi au vendredi</p>
                        <p> <span class="icon">emergency</span> Service urgence 7j/7 -24h/24</p>
                        <p> <span class="icon">language</span> <a class="externalLink"
                                href="https://www.alecob.jimdofree.com">www.alecob.jimdofree.com</a></p>
                    </div>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Assainissement collectif', image: '/images/eau/la lagune.jpg', imageAlt: 'Offisme de tourisme de Carhaix', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter alignStart pad20 gap10">
                    <p>
                        L’assainissement est collectif lorsque les eaux usées sont collectées par le réseau public pour être
                        traitées dans une station d’épuration, avant
                        de retourner dans le milieu naturel. Le raccordement des installations privées à ce réseau est
                        contrôlé par le service de la Mairie.
                        <br>
                        À ce jour, seules les habitations proches du centre-bourg sont reliées au réseau collectif. Pour les
                        maisons reliées à l’assainissement
                        collectif, un contrôle est effectué de manière périodique pour vérif ier la conformité des
                        installations.
                        <br>
                        Pour toute information concernant l’assainissement collectif, vous pouvez contacter directement les
                        services de la Mairie.
                    </p>

                    <div class="infoBox">
                        <p> <span class="icon">location_on</span>Mairie de Poullaouen</p>
                        <p> <span class="icon">call</span>02.98.93.50.76</p>
                        <p> <span class="icon">location_on</span>Mairie de Locmaria-Berrien</p>
                        <p> <span class="icon">call</span>02.98.99.73.09</p>
                    </div>

                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Assainissement non-collectif', image: '/images/eau/manhole.jpg', imageAlt: 'Campagne Poullaouënaise', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter alignStart pad20 gap10">

                    <p>
                        Les eaux usées de nos habitations nécessitent d’être évacuées puis restituées dans le milieu
                        naturel, tout en préservant la santé publique
                        et l’environnement.
                        <br>
                        Les polluants véhiculés par nos eaux usées (essentiellement matière organique, azote et phosphore)
                        doivent être traités pour limiter leur
                        impact sur les milieux aquatiques.
                        <br>
                        L’assainissement non-collectif (ANC), aussi appelé assainissement autonome ou individuel, constitue
                        la solution technique et économique
                        la mieux adaptée en milieu rural. Ce type d’assainissement concerne les maisons d’habitations
                        individuelles non raccordées à un réseau
                        public de collecte des eaux usées, soit 10% de la population française. Des visites périodiques des
                        installations d’assainissement non collectif
                        sont réalisées par le Service public d’assainissement non collectif (SPANC) de Poher communauté.
                        <br>
                        Ces visites af in de vérif ier le bon fonctionnement des installations et réaliser leur entretien se
                        déroulent tous les sept ans. Pour permettre
                        ces visites, tous les éléments de la filière d’assainissement - la fosse septique ou toutes eaux, le
                        bac dégraisseur, le f iltre décolloïdeur, etc.
                        doivent être accessibles.
                    </p>

                    <div class="infoBox">
                        <p> <span class="icon">location_on</span>SPANC - Maison des services au public - Carhaix</p>
                        <p> <span class="icon">call</span>02.98.99.48.03</p>
                        <p> <span class="icon">location_on</span><a class="externalLink"
                                href="mailto:spanc@poher.bzh">spanc@poher.bzh</a></p>
                        <p> <span class="icon">call</span><a class="externalLink"
                                href="https://www.poher.bzh">www.poher.bzh</a></p>
                    </div>

                </div>
            </SectionMainSloted>
        </div>
    </main>
</template>
<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;


const headerData = {
    images: [
        {
            src: `${directusAssets}89b01382-baa3-411c-8cec-3874349dd86f.JPG?key=header1500`,
            alt: "Cour de l'école municipale de Poullaouen",
        }
    ],
    title: "L'école municipale",
    path: [
        {
            text: "accueil",
            target: "/"
        },
        {
            text: "mon quotidien",
            target: "/mon-quotidien/ecole-municipale"
        },
        {
            text: "eau et assainissement",
            target: "/mon-quotidien/ecole-municipale"
        }
    ]
}
const applyStyleClasses_utils = () => {

    const sections = document.querySelectorAll('.sectionBoxSloted')

    for (let i = 1; i < sections.length; i = i + 4) {
        sections[i].classList.replace('whiteSection', 'blueSection')
    }
    for (let i = 3; i < sections.length; i = i + 4) {
        sections[i].classList.replace('whiteSection', 'brownSection')
    }
}
onMounted(() => {
    applyStyleClasses_utils()
})
</script>

<style scoped>.slotedSectionTextBox {
    height: 100%;
}

li {
    list-style: disc;
    margin-left: 40px;
}</style>