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
                    <a class="externalLink" href="/plu/1. Plan zonage.pdf" target="_blank" >Plan de zonage</a>
                    <a class="externalLink" href="/plu/2. Plan servitudes d_utilité publique.pdf" target="_blank" >Servitudes d’utilité publique</a>
                    <a class="externalLink" href="/plu/3. Plan droit de préemption urbain.pdf" target="_blank" >Droit de préemption</a>
                    <a class="externalLink" href="/plu/4. Loi paysage.pdf" target="_blank" >Loi paysage</a>
                    <div class="gap"></div>
                    <a class="externalLink" href="https://www.cadastre.gouv.fr/scpc/accueil.do" target="_blank">Consulter le cadastre</a>
                    <a class="externalLink" href="https://www.geoportail-urbanisme.gouv.fr/" target="_blank">Consulter le geoportail de l’urbanisme</a>
                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Consulter le rapport de présentation', image: '/images/plu/chemin.jpg', imageAlt: 'Campagne Poullaouenaise', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter alignStart pad20 gap10">
                    
                    <p class="flex alignCenter gap20"> 
                        <b>Rapport de présentation</b>
                        <span class=" flex alignCenter gap10">
                            <!-- <span class="icon">visibility</span> <a class="externalLink" href="/plu/5. Rapport de présentation.pdf" target="_blank">consulter</a>  -->
                        </span>
                         <span class=" flex alignCenter gap10">
                            <span class="icon">download</span> <a class="externalLink" href="/plu/5. Rapport de présentation.pdf" download>télécharger</a> 
                        </span>
                    </p>

                </div>
            </SectionMainSloted>

            <SectionMainSloted
                :data="{ title: 'Consulter le règlement, le projet d’aménagement et les annexes', image: '/images/plu/tractopelle.jpg', imageAlt: 'Alécob logo', localImage: true }">
                <div class="slotedSectionTextBox flex column justifyCenter alignStart pad20 gap10">
                    
                    <a class="externalLink" href="/plu/6. Règlement.pdf"  target="_blank">Règlement</a>
                    <a class="externalLink" href="/plu/7. Orientation d_aménagement.pdf"  target="_blank">Orientations d’aménagement</a>
                    <a class="externalLink" href="/plu/8. Projet d_aménagement et de développement durable.pdf"  target="_blank">Projet d’aménagement et de développement durable</a>
                    <a class="externalLink" href="/plu/9. Annexe carriere le goasq.pdf"  target="_blank">Annexe Carrière Le Goasq</a>
                    <a class="externalLink" href="/plu/10. Annexe périmètres miniers.pdf"  target="_blank">Annexe périmètres miniers</a>
                    <a class="externalLink" href="/plu/11. Annexes sanitaires.pdf"  target="_blank">Annexes sanitaires</a>
                    <div class="gap"></div>
                    <a class="externalLink" href="https://www.cadastre.gouv.fr/scpc/accueil.do">Consulter le cadastre</a>
                    <a class="externalLink" href="https://www.geoportail-urbanisme.gouv.fr/">Consulter le geoportail de l’urbanisme</a>
                    
                </div>
            </SectionMainSloted>
            <br>
            <h4 class="mainWidth">Retrouvez l’ensemble du Plan Local d’Urbanisme sur le site du <a class="externalLink" href="https://www.geoportail-urbanisme.gouv.fr/" target="_blank">géoportail de l’urbanisme</a>.</h4>
        </div>
    </main>

    <FooterMain />
</template>
<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;


const headerData = {
    images: [
        {
            src: `${directusAssets}3f214142-02e6-4995-87a4-b374ead7feaa.jpg?key=header1500`,
            alt: "L'entrée du bourg de Poullaouen",
        }
    ],
    title: 'Le Plan Local d’Urbanisme (PLU)',
    path: [
        {
            text: 'Accueil',
            target: '/',
            active: true
        },
        {
            text: 'Mes infos',
            target: `/mes-infos/PLU`,
            active: false
        },
        {
            text: 'PLU',
            target: `/mes-infos/PLU`,
            active: false
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
}
.gap {
    height: 40px;
}
</style>