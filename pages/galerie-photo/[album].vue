<template>
    <header>
        <HeaderPathBar :path="path" />
        <HeaderTItleBar :title="`Album : ${album.albumName}`" />
    </header>

    <main class="galerieMain flex column marTop50">
        <p class="mainWidth intro-text">{{ album.content }}</p>
        <div class="marTop50"></div>
        <GaleriePhotoDesktop :albumData="album.images" />
        
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

        return album.data[0]
    }
    ,
    { server: true }
)

const path = [
    {
        text: 'Accueil',
        target: '/'
    },
    {
        text: 'Galerie photo',
        target: '/galerie-photo'
    },
    {
        text: album.value.albumName,
        // target: `/galerie-photo`
        target: `/galerie-photo/${route.params.category}/${route.params.album}`
    }
]

</script>

<style>

.boxOfPhotos .frame {
    width: 200px;
    aspect-ratio: 1/1;
    box-shadow: var(--shadow);
}
</style>