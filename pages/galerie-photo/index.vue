<template>
    <HeaderMain :data="headerData" />
    <main class="galerieMain flex column">

        <p class="mainWidth intro-text">
            Retrouvez, en images, tous les événements de votre commune.
        </p>

        <nav class="albumsFilterBox horizontalGradient">
            <p class="mainWidth page-text">filtrer les résultats par thème.</p>

            <div class="mainWidth flex justifyCenter wrap gap20">
                <div class="filterButton pointer" @click="filterItems" data-filter="all"
                    :class="{ activeBtn: activeBtn == 'all' }">Tout le patrimoine</div>
                
                <div class="filterButton pointer" @click="filterItems" :data-filter="filter" v-for="filter in filters" :class="{ activeBtn: activeBtn == filter }">
                    {{ filter }}
                </div>
            </div>
        </nav>
        
        <NuxtLink :to="`/galerie-photo/${cat.slug}`" class="catBar pointer mainWidth flex" v-for="cat in galeryData.categories" :key="cat">
            <div class="frame shadow">
                <img class="objectFitCover" :src="`${directusAssets}${galeryData.albums[cat.ref][0].images[0].directus_files_id}?key=card500`" alt="">
            </div>

            <div class="infoBox flex column justifyEnd gap10">
                <h4 class="catTitle"> {{ cat.name }}</h4>
                <p class="albumCount">{{ galeryData.albums[cat.ref].length }} album<span v-if="galeryData.albums[cat.ref].length > 1">s</span> </p>
            </div>
        </NuxtLink>


    </main>
</template>
<script setup>
const filterItems = (e) => {
    activeBtn.value = null
    setTimeout(() => {
        activeBtn.value = e.target.getAttribute('data-filter')
    }, 10)
}

const activeBtn = ref('all')
const filters = ref(['ecole', 'associations', 'mediatheque', 'ccas'])

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, albumName, content, categoryName.displayName, categoryName.slug, categoryName.ref, images, images.directus_files_id'
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
            albums: {}
        }
        albums.forEach(album => {
            console.log(album.categoryName.ref)
            if (!temp.catRef.includes(album.categoryName.ref)) {
                temp.catRef.push(album.categoryName.ref)
                temp.categories.push({name: album.categoryName.displayName, slug: album.categoryName.slug, ref: album.categoryName.ref})
                temp.albums[album.categoryName.ref] = []
            }
            temp.albums[album.categoryName.ref].push(album)
        })
        
        console.log(temp)
        return temp
    }
    ,
    { server: true }
)






const headerData = {
    images: [
        {
            src: 'images/header/accueil/eglise-de-locmaria-berrien.jpg',
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




</script>

<style>

.albumsFilterBox {
    background: linear-gradient(90deg, rgba(0, 47, 74, 1) 0%, rgba(146, 76, 2, 1) 100%);
    padding: 30px;
    margin-top: 50px;
}
.albumsFilterBox p{
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 20px;
}

.filterButton {
    font-size: 18px;
    font-weight: 600;
    color: var(--dark-blue);
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
}
.filterButton:hover,
.activeBtn {
    background-color: var(--light-blue);
    color: #fff;
}


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