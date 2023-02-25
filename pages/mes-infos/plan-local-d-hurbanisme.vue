<template>
    <HeaderMain :data="headerData" />

    <main class="mainHistoire">
       

        <div>
            <SectionMainSloted
                :data="{ title: 'Description', image: '/images/plu/statuts.jpg', imageAlt: 'Statuts Poullaouen', localImage: true }">
                <div class="slotedSectionTextBox page-text flex column justifyCenter pad20 gap10">
                    <h4>Quel est le rôle du PLU?</h4>
                    <p>
                        Le Plan Local d’Urbanisme (PLU) est un document d’urbanisme qui, à l’échelle de la commune, traduit un projet global d’aménagement
                        et d’urbanisme et f ixe en conséquence les règles d’aménagement et d’utilisation des sols.
                    </p>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Consulter les plans', image: '/images/plu/entrée.jpg', imageAlt: 'Offisme de tourisme de Carhaix', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter alignStart pad20 gap10">
                    
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Plan de zonage</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Servitudes d’utilité publique</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Droit de préemption</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Loi paysage</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Consulter le cadastre</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Consulter le geoportail de l’urbanisme</a>
                    
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Consulter le rapport de présentation', image: '/images/plu/chemin.jpg', imageAlt: 'Campagne Poullaouënaise', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter alignStart pad20 gap10">

                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Rapport de présentation</a>

                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Consulter le règlement, le projet d’aménagement et les annexes', image: '/images/plu/tractopelle.jpg', imageAlt: 'Alécob logo', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter alignStart pad20 gap10">
                    
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Règlement</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Orientations d’aménagement</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Projet d’aménagement et de développement durable</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Annexe Carrière Le Goasq</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Annexe périmètres miniers</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Annexes sanitaires</a>

                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Consulter</a>
                    <a class="externalLink" href="https://www.tourismecarhaix.poher.com">Consulter le geoportail de l’urbanisme</a>
                    
                </div>
            </SectionMainSloted>
            <br>
            <h4 class="mainWidth">Retrouvez l’ensemble du Plan Local d’Urbanisme sur le site du Géoportail de l’urbanisme.</h4>
        </div>
    </main>
</template>
<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;


const headerData = {
    images: [
        {
            src: `${directusAssets}8671f5a3-3612-4213-8a54-52eaba057f82.JPG?key=header1500`,
            alt: "L'entrée du bourg de Poullaouen",
        }
    ],
    title: 'Le Plan Local d’Urbanisme (PLU)',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'mes infos',
            target: `/mes-infos/se-loger`
        },
        {
            text: 'Se loger',
            target: `/mes-infos/se-loger`
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

<style>.slotedSectionTextBox {
    height: 100%;
}

li {
    list-style: disc;
    margin-left: 40px;
}</style>