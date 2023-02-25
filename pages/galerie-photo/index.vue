<template>
    <HeaderMain :data="headerData" />
    <main class="galerieMain flex column">
        
        <NuxtLink :to="`/galerie-photo/${cat.toLowerCase()}`" class="catBar pointer mainWidth flex" v-for="cat in galeryData.categories" :key="cat">
            <div class="frame shadow">
                <img class="objectFitCover" :src="`${directusAssets}${galeryData.albums[cat][0].images[0].directus_files_id}?key=card500`" alt="">
            </div>

            <div class="infoBox flex column justifyEnd gap10">
                <h4> {{ cat }}</h4>
                <p class="albumCount">{{ galeryData.albums[cat].length }} albums<span v-if="galeryData.albums[cat].length > 1">s</span> </p>
            </div>


        </NuxtLink>

    </main>
</template>
<script setup>



const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;



const fetchOptions = {
    server: true,
    params: {
        fields: 'id, albumName, content, categoryName.displayName, images, images.directus_files_id'
    }
}

const { data: galeryData } = await useAsyncData(
    "galery",
    async () => {
        const items = await $fetch(`${directusItems}Albums_photo`, fetchOptions)
        const albums = items.data

        const temp = {
            categories: [],
            albums: {}
        }
        albums.forEach(album => {

            if (!temp.categories.includes(album.categoryName.displayName)) {
                temp.categories.push(album.categoryName.displayName)
                temp.albums[album.categoryName.displayName] = []
            }
            temp.albums[album.categoryName.displayName].push(album)
        })
        

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
            text: 'accueil',
            target: '/'
        },
        {
            text: 'galerie photo',
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
    padding-left: 30px;*transition: 300ms ease;
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
}



</style>