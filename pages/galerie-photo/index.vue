<template>
    <HeaderMain :data="headerData" />

    <main class="galerieMain flex column">
        <p class="mainWidth intro-text">
            Retrouvez, en images, tous les événements de votre commune.
        </p>

        <nav class="defaultFilterBox horizontalGradient">
            <p class="mainWidth">Filtrer les résultats par thème</p>

            <div class="mainWidth flex justifyCenter alignCenter wrap gap10">
                <div class="defaultFilterButton pointer" @click="setActiveCategory" data-category="all"
                    :class="{ activeDefaultFilterButton: activeCategory == 'all' }">Tous les albums</div>
        
                <div class="defaultFilterButton pointer" v-for="cat in galeryData.categories" :key="cat.ref"
                        @click="setActiveCategory" :data-category="cat.ref" :data-hasSubCats="cat.hasSubCats" :class="{ activeDefaultFilterButton: activeCategory == cat.ref }">
                    {{ cat.name }}
                </div>
            </div>

            <div class="mainWidth flex justifyCenter alignCenter wrap marTop20" v-if="catWithSubCats">
                <p class="w100 marTop20">Sélectionnez une sous-catégorie :</p>
                <div class="flex justifyCenter wrap gap10">
                    <div  class="defaultFilterButton pointer flex justifyCenter alignCenter gap20" v-for="subCat in galeryData.subCategories[activeCategory].subCats" :subCat="subCat.ref"  
                          @click="setActiveSubCategory" :data-subCategory="subCat.ref" :class="{ activeDefaultFilterButton: activeSubCategory == subCat.ref }">
                        <span class="icon">group</span> <span>{{ subCat.name }}</span>
                    </div>
                </div>
            </div>
        </nav>

        <div class="galeryContent">
            <div  v-for="album in displayedAlbums" :key="album.id">

                <SectionMainSloted :data="{ title: album.albumName, image: album.images[0].directus_files_id, localImage: false }">

                    <div class="galerySectionContent h100 flex column justifyCenter gap10">
                    <div class="galeryTopBox">
                        <p class="albumDate">{{ toMonthYearFormat(album.date_created) }}</p>
                    </div>

                    <p class="page-text">{{ album.content }}</p>
                
                    <div class="galeryBottomBox flex justifyEnd">
                        <NuxtLink :to="`/galerie-photo/${album.slug}`" class="galeryAlbumButton shadow">Voir l'album</NuxtLink> 
                    </div>
                </div>
                </SectionMainSloted>
            </div>
        </div>
    </main>
</template>

<script setup>

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;

const activeCategory = ref(null)
const catWithSubCats = ref(false)
const activeSubCategory = ref(null)

const displayedAlbums = ref(null)

const setActiveCategory = (e) => {
    if(activeCategory.value == e.currentTarget.getAttribute('data-category')) {
        return
    }

    activeCategory.value = e.currentTarget.getAttribute('data-category')
    activeSubCategory.value = null

    if(e.currentTarget.getAttribute('data-hasSubCats') == 'true') {
        catWithSubCats.value = true
        activeCategory.value = e.currentTarget.getAttribute('data-category')
    } else {
        catWithSubCats.value = false
    }
    filterAlbums()
}

const setActiveSubCategory = (e) => {
    console.log(e.currentTarget.getAttribute('data-subCategory'))
    if(activeSubCategory.value == e.currentTarget.getAttribute('data-subCategory')) {
        return
    }

    activeSubCategory.value = e.currentTarget.getAttribute('data-subCategory')
    filterAlbums()
}

const filterAlbums = () => {
    if(activeCategory.value == 'all') {
        displayedAlbums.value = galeryData.value.albums
        return
    }
    if(!activeSubCategory.value) {
        displayedAlbums.value = galeryData.value.albums.filter(album => {
            const matchingCat = album.categoryName.ref == activeCategory.value
            if (matchingCat) return true
        })

    }else {
        displayedAlbums.value = galeryData.value.albums.filter(album => {
            const matchingCat = album.categoryName.ref == activeCategory.value
            const matchingSubCat = album.subCatRef == activeSubCategory.value
            if (matchingCat && matchingSubCat) return true
        })
    }
}

console.log()

const toMonthYearFormat = (_date) => {

    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    let date = new Date(_date)
    let day = ("0" + date.getDate()).slice(-2)
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    if (day == '01') { day = "1er" }
    return `${day} ${month} ${year}`;
}

 
const fetchOptions = {
    server: true,
    params: {
        fields: 'id, date_created, albumName, slug, ref, content, categoryName.displayName, categoryName.slug, categoryName.ref, categoryName.subCategoryRef, categoryName.hasSubCats , images, images.directus_files_id, subCatRef, subCatName, subCatSlug'
    } 
}

const { data: galeryData } = await useAsyncData(
    "galery",
    async () => {
        const items = await $fetch(`${directusItems}Albums_photo?[filter][gallery][_eq]=true`, fetchOptions)
        const albums = items.data

        const temp = {
            catRefs: [], //to avoid duplicate
            categories: [], // array of catData objects
            subCatRefs: [], //to avoid duplicate
            subCategories: {
                // associations: {
                //     subCatRefs: [],
                //     subCats: [] // array of subCatData objects
                // }
            }, 
            albums: albums
        } 

        albums.forEach(album => {
            
            const catData = { name: album.categoryName.displayName, slug: album.categoryName.slug, ref: album.categoryName.ref, hasSubCats: album.categoryName.hasSubCats }
            
            if(!temp.catRefs.includes(catData.ref)) { 
                temp.categories.push(catData)
                temp.catRefs.push(catData.ref)
            }
            if(album.subCatRef) { 
                const subCatData = { name: album.subCatName, slug: album.sunCatSlug, ref: album.subCatRef }

                if(!temp.subCategories[catData.ref]) {
                    temp.subCategories[catData.ref] = {
                        subCatRefs: [],
                        subCats: []
                    }
                }
                if(!temp.subCategories[catData.ref].subCatRefs.includes(subCatData.ref)) {
                    temp.subCategories[catData.ref].subCatRefs.push(subCatData.ref)
                    temp.subCategories[catData.ref].subCats.push(subCatData)
                }
            }
        })

        return temp
    }
    ,
    { server: true }
)






const headerData = { 
    images: [
        {
            src: `${directusAssets}7f6743b0-2d74-47af-a9ab-1a6f68a58fb8.jpg?key=header1500`,
            alt: 'mairie de Locmaria-Berrien',
        }
    ],
    title: 'Galerie-photo',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Galerie photo',
            target: '/galerie-photo'
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

onUpdated(() => {
    applyStyleClasses_utils()
    
}) 

onMounted(() => {
    applyStyleClasses_utils()
    activeCategory.value = 'all'
    filterAlbums()
})



</script>

<style>
.galeryContent{
    min-height: 100vh;
}
.galeryAlbumButton {
    padding: 8px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    box-shadow: var(--shadow);
}
.whiteSection .mainWidth .slotedContent .galerySectionContent .galeryBottomBox .galeryAlbumButton {
    background-color: var(--dark-blue);
    color: #fff;
}
.blueSection .mainWidth .slotedContent .galerySectionContent .galeryBottomBox .galeryAlbumButton,
.brownSection .mainWidth .slotedContent .galerySectionContent .galeryBottomBox .galeryAlbumButton {
    background-color: white;
    color: var(--dark-blue);
}


.albumDate{
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
}


</style>