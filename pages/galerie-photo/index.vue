<template>
    <HeaderMain :data="headerData" />
    <main class="galerieMain flex column">

        <p class="mainWidth intro-text">
            Retrouvez, en images, tous les événements de votre commune.
        </p>

        <nav class="defaultFilterBox horizontalGradient">
            <p class="mainWidth page-text">filtrer les résultats par thème.</p>

            <div class="mainWidth flex justifyCenter alignCenter wrap gap20">
                <div class="filterButton pointer" @click="filterItems" data-filter="all"
                    :class="{ activeDefaultFilterButton: activeFilter == 'all' }">Tous les albums</div>
        
                <div class="defaultFilterButton pointer" v-for="cat in galeryData.categories" :key="cat.ref"  @click="filterItems" :data-filter="cat.ref" :class="{ activeDefaultFilterButton: activeFilter == cat.ref }">
                    {{ cat.name }}
                </div>
            </div>
        </nav>

        <div class="galeryContent">
            <SectionMainSloted v-for="album in galeryData.albums[activeFilter]" :key="album.id" :data="{ title: album.albumName, image: album.images[0].directus_files_id, localImage: false }">
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
        



    </main>
</template>
<script setup>

const filterItems = (e) => {
    activeFilter.value = null
    setTimeout(() => {
        activeFilter.value = e.target.getAttribute('data-filter')
    }, 10)
}

const activeFilter = ref(null)

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
    activeFilter.value = galeryData.value.categories[0].ref
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
}s

.catBar {
    padding: 20px 20px;
    border-bottom: 2px solid var(--green);
    transition: 300ms ease;
}
.catBar:hover {
    background-color: rgba(0, 195, 255, 0.166);
}
.catBar .infoBox {
    padding-left: 30px;*transition: 300ms ease;
}
.catBar .infoBox .catTitle {
    font-size: 70px;
    font-weight: 600;
    opacity: 0.8;
}
.catBar .frame {
    width: 200px;
    aspect-ratio: 1/1;
    border-radius: 5px;
    overflow: hidden;
}

.galerieMain {
    margin-top: 100px;
}

</style>