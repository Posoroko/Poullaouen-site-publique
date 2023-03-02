<template>
    <HeaderMain :data="headerData" />
    <main class="galerieMain flex column">
        
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