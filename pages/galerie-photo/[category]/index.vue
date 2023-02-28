<template>
    <!-- <HeaderMain :data="headerData" /> -->
    <main class="galerieMain flex column">
        
        <h2 class="mainWidth">Albums de la catégorie {{ albums[0].categoryName.displayName }}</h2>

        <NuxtLink :to="`/galerie-photo/${activeCategory}/${album.slug}`" class="catBar pointer mainWidth flex marTop50"
            v-for="album in albums" :key="album.id">
            <div class="frame shadow">
                <img class="objectFitCover"
                    :src="`${directusAssets}${album.images[0].directus_files_id}?key=card500`" alt="">
            </div>

            <div class="infoBox flex column justifyEnd gap10">
                <h4> {{ album.albumName }}</h4>
                <p class="photoCount">{{ album.images.length }} photo<span v-if="album.images.length > 1">s</span> 
                </p>
            </div>


        </NuxtLink>

    </main>
</template>
<script setup>
const route = useRoute()
const activeCategory = route.params.category

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, albumName, content, categoryName.displayName, images, images.directus_files_id, slug'
    }
}

const { data: albums } = await useAsyncData(
    "galery",
    async () => {
        const albums = await $fetch(`${directusItems}Albums_photo?[filter][categoryName][slug][_eq]=${activeCategory}`, fetchOptions)
        
        return albums.data
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
.catBar {
    padding: 20px 20px;
    border-bottom: 2px solid var(--green);
    transition: 300ms ease;
}

.catBar:hover {
    background-color: rgba(0, 195, 255, 0.166);
}

.catBar .infoBox {
    padding-left: 30px;
    *transition: 300ms ease;
}

.catBar .infoBox h4 {
    font-size: 30px;
    font-weight: 600;
}

.catBar .frame {
    width: 200px;
    aspect-ratio: 1/1;
    border-radius: 5px;
    overflow: hidden;
}</style>