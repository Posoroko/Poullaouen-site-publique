<template>
    <HeaderMain :data="headerData" />
    <main class="">

        <p class="introText mainWidth page-text">
            Vous souhaitez rester informé sur la vie de votre commune ? C’est ici.
        </p>

        <div class="actu">
            <SectionMain type="actualites" :data="sectionData" showTitle="true"/>

            <SectionMain type="actualites" :data="sectionData"  showTitle="true"/>
            <SectionMain type="actualites" :data="sectionData"  showTitle="true"/>
            <SectionMain type="actualites" :data="sectionData"  showTitle="true"/>
            <SectionMain type="actualites" :data="sectionData"  showTitle="true"/>
            <SectionMain type="actualites" :data="sectionData"  showTitle="true"/>
            <SectionMain type="actualites" :data="sectionData"  showTitle="true"/>
            <SectionMain type="actualites" :data="sectionData"  showTitle="true"/>
        </div>
        
    </main>
</template>
<script setup>

const headerData = {
    images: [
        {
            src: 'images/header/accueil/eglise-de-locmaria-berrien.jpg',
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Actualités',
    path: [
        {
            text: 'accueil',
            target: '/'
        },
        {
            text: 'acctualités',
            target: '/actualités'
        }
    ]
}

const sectionData = {
    status: 'published',
    title: "Vente de Sapins",
    date: "2023-12-31",
    subtitle: "Date de création mise automatiquement.",
    moreInfo: "info: 06 95 07 12 64",
    image: 'images/header/accueil/eglise-de-locmaria-berrien.JPG',
    content: "A titre exceptionnel la Mairie de Locmaria-Berrien sera fermée du lundi 14 février au vendredi 18 février. A compter du 21 février, la Mairie de Locmaria- Berrien sera ouvertes les lundis de 8h30 à 12h et les jeudis de 13h30 à17h30. A compter de la semaine prochaine la mairie de Poullaouen sera fermée au public le mercredi après - midi en remplacement du jeudi.",
    fileName: 'Bon de commande',
    file: "hello"
}



onMounted(() => {
    applyStyleClasses_utils()
})

</script>

<style>

</style>