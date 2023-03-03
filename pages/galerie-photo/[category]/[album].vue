<template>
    <header>
        <HeaderPathBar :path="path" />
        <HeaderTItleBar :title="`Album : ${album.albumName}`" />
    </header>

    <main class="galerieMain flex column marTop100">
        <!-- <h2 class="mainWidth">{{ album.albumName }}</h2> -->
        <p class="mainWidth intro-text">{{ album.content }}</p>

        <div class="mainWidth boxOfPhotos flex justifyCenter gap20 wrap marTop50">
            <div class="frame" v-for="photo in album.images" :key="photo.id">
                <img class="objectFitCover pointer" :src="`${directusAssets}${photo.directus_files_id}?key=card500`" alt=""  @click="showInModal(`${directusAssets}${photo.directus_files_id}`)">
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

const showInModal = (link) => {

    const modal = document.getElementById('masterModal')
    let children = modal.children


    for (const child of children) {
        if (!child.classList.contains('modalNode')) {
            modal.removeChild(child)
        }
    }

    const _img = document.createElement('img')


    _img.src = `${link}?key=header1500`
    

    _img.style.maxWidth = "80vw"
    _img.style.maxHeight = "80vh"

    modal.appendChild(_img)
    modal.showModal()
}




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