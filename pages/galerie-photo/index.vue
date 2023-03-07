<template>
    <HeaderMain :data="headerData" />

    <main class="galerieMain flex column">
        <p class="mainWidth intro-text">
            Retrouvez, en images, tous les événements de votre commune.
        </p>

        <nav class="defaultFilterBox horizontalGradient">
            <p class="mainWidth page-text">filtrer les résultats par thème.</p>

            <div class="mainWidth flex justifyCenter alignCenter wrap gap20">
                <div class="defaultFilterButton pointer" @click="filterItems" data-category="all"
                    :class="{ activeDefaultFilterButton: activeCategory == 'all' }">Tous les albums</div>
        
                <div    class="defaultFilterButton pointer" v-for="cat in galeryData.categories" :key="cat.ref"  
                        @click="filterItems" :data-category="cat.ref" :class="{ activeDefaultFilterButton: activeCategory == cat.ref }">
                    {{ cat.name }}
                </div>
            </div>

            <div class="mainWidth flex justifyCenter alignCenter wrap gap20 marTop20" v-if="albumsOfActiveCategory">
                <div    class="defaultFilterButton pointer" v-for="album in albumsOfActiveCategory" :key="album.id"  
                        @click="filterAlbumName" :data-albumId="`album${album.id}`" :class="{ activeDefaultFilterButton: activeAlbumId == `album${album.id}` }">
                    {{ album.albumName }}
                </div>
            </div>
        </nav>

        <div class="galeryContent" v-if="albumListOn">
            <div  v-for="album in displayedAlbums" :key="album.id">

                <SectionMainSloted :data="{ title: album.albumName, image: album.images[0].directus_files_id, localImage: false }">

                    <div class="galerySectionContent h100 flex column justifyCenter gap10">
                    <div class="galeryTopBox">
                        <p class="albumDate">{{ new Date(album.date_created).toLocaleString().slice(0, 10) }}</p>
                    </div>

                    <p class="page-text">{{ album.content }}</p>
                
                    <div class="galeryBottomBox flex justifyEnd">
                        <NuxtLink :to="`/galerie-photo/${album.slug}`" class="galeryAlbumButton">Voir l'albums</NuxtLink> 
                    </div>
                </div>
                </SectionMainSloted>
            </div>
        </div>
    </main>
</template>
<script setup>
const activeCategory = ref(null)
const filterItems = (e) => {
    albumListOn.value = false
    activeCategory.value = null
    const cat = e.target.getAttribute('data-category')

    if(cat == 'all') {
        albumsOfActiveCategory.value = []
        displayedAlbums.value = galeryData.value.albums.all
        activeAlbumId.value = 'all'
    } else {
        //ex: ecole
        albumsOfActiveCategory.value = galeryData.value.albums[cat]
        displayedAlbums.value = albumsOfActiveCategory.value
        activeAlbumId.value = 'all'
    }
    activeCategory.value = cat
    setTimeout(() => {
        
        albumListOn.value = true
    }, 10)
}
const albumListOn = ref(false)
const albumsOfActiveCategory = ref(null)
const activeAlbumId = ref('all')

const displayedAlbums = ref(null)

const filterAlbumName = (e) => {

    albumListOn.value = false
    const albumId = e.currentTarget.getAttribute('data-albumId')

    displayedAlbums.value = albumsOfActiveCategory.value.filter(album => `album${album.id}` == albumId )

    activeAlbumId.value = albumId
    setTimeout(() => {
        albumListOn.value = true
    }, 10)
}







const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const directusAssets = appConfig.directus.assets;


 
const fetchOptions = {
    server: true,
    params: {
        fields: 'id, date_created, albumName, slug, content, categoryName.displayName, categoryName.slug, categoryName.ref, images, images.directus_files_id'
    } 
}

const { data: galeryData } = await useAsyncData(
    "galery",
    async () => {
        const items = await $fetch(`${directusItems}Albums_photo`, fetchOptions)
        const albums = items.data

        const temp = {
            catRef: [], //to avoid duplicate
            categories: [],
            albums: {
                all: []
            }
        }
        albums.forEach(album => {
            if (!temp.catRef.includes(album.categoryName.ref)) {
                temp.catRef.push(album.categoryName.ref)
                temp.categories.push({name: album.categoryName.displayName, slug: album.categoryName.slug, ref: album.categoryName.ref})
                temp.albums[album.categoryName.ref] = []
            }
            temp.albums[album.categoryName.ref].push(album)
            temp.albums.all.push(album)
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
    activeCategory.value = galeryData.value.categories[0].ref
    albumsOfActiveCategory.value = galeryData.value.albums[galeryData.value.categories[0].ref]
    displayedAlbums.value = albumsOfActiveCategory.value
    albumListOn.value = true
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