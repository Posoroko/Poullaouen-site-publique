<template>
    <!-- <HeaderMain :data="headerData" /> -->
    <main class="galerieMain flex column">

        <h2 class="mainWidth"> {{ album.albumName }}</h2>
        <p class="mainWidth intro-text">{{ album.content }}</p>

        <div class="mainWidth boxOfPhotos flex justifyCenter gap20 wrap">
            <div class="frame" v-for="photo in album.images" :key="photo.id">
                <img class="objectFitCover" :src="`${directusAssets}${photo.directus_files_id}?key=card500`" alt="">
            </div>
        </div>
        
    </main>
</template>
<script setup>
const route = useRoute()
const activeAlbum = route.params.album

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, albumName, content, categoryName.displayName, images, images.id, images.directus_files_id, slug'
    }
}

const { data: album } = await useAsyncData(
    "galery",
    async () => {
        const album = await $fetch(`${directusItems}Albums_photo?[filter][slug][_eq]=${activeAlbum}`, fetchOptions)

        console.log(album.data) 

        return album.data[0]
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
.boxOfPhotos .frame {
    width: 200px;
    aspect-ratio: 1/1;
    box-shadow: var(--shadow);
}
</style>