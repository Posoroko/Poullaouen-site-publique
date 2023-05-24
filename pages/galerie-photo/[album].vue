<template>
    <header>
        <HeaderPathBar :path="path" />
        <HeaderTItleBar :title="`Album : ${album.albumName}`" />
    </header>

    <main class="galerieMain flex column marTop50">
        <p class="mainWidth intro-text albumText">{{ album.content }}</p>
        <div class="marTop50"></div>
        <div class="albumNavBox">
            <div class="albumLinkBox mainWidth">
                <NuxtLink @click="goBack" class="flex alignCenter gap20 pointer">
                    <span class="icon">arrow_back</span>
                    <span>galerie photo</span>
                </NuxtLink>

            </div>
        </div>
        <GaleriePhotoDesktop :albumData="album.images" />
        
    </main>
</template>
<script setup>
const route = useRoute()
const activeAlbum = route.params.album

const router = useRouter()

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items; 

function goBack() {
    router.go(-1)
}
// address to go back to galey with same filters activated
const galeryQuery = ref(null)
onMounted(() => {
    galeryQuery.value = `/galerie-photo?categorie=${album.value.categoryName.slug}&sous-categorie=${album.value.subCatSlug}`

})

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, albumName, content, categoryName.displayName, categoryName.slug, images, images.id, images.directus_files_id, slug, subCatSlug'
    }
}

const { data: album } = await useAsyncData(

    "album",
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
        target: '/',
        active: true
    },
    {
        text: 'Galerie photo',
        target: '/galerie-photo',
        active: false
    },
    {
        text: album.value.albumName,
        // target: `/galerie-photo`
        target: `/galerie-photo/${route.params.category}/${route.params.album}`,
        active: false
    }
]

</script>

<style>
.albumText {
    white-space: pre-wrap;
}

.albumLinkBox * {
    color: wwhite;
    font-size: 30px;
}

.boxOfPhotos .frame {
    width: 200px;
    aspect-ratio: 1/1;
    box-shadow: var(--shadow);
}

</style>