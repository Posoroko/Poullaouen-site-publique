<template>
    <div class="downloadWidget column justifyEvenly alignCenter" id="downloadWidget">
        <!-- <a :href="link" class="downloaderLine pointer classicOpenPdfLink" >
            <span class="downloaderIcon icon centered">visibility</span>
            <span class="downloaderText">Consulter</span> 
        </a> -->

        <!-- <span class="downloaderLine pointer openInObjectButton" @click="openInPdfModal">
            <span class="downloaderIcon icon centered">visibility</span>
            <span class="downloaderText">Consulter</span> 
        </span> -->

        <a :href="link" download class="downloaderLine pointer flex alignCenter">
            <span class="downloaderIcon icon">download</span>
            <span class="downloaderText">Télécharger</span>
        </a>
    </div>
</template>

<script setup>

// const openInPdfModal = (e) => {
//     const pdfModal = document.getElementById('pdfModal')
//     const pdfReader = document.getElementById('pdfReader')
//     pdfReader.setAttribute('data', props.link)
//     pdfModal.showModal()
// }

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const props = defineProps({
    link: String
})

</script>

<style>
#downloadWidget {
    width: 100%;
    height: 100%;
    
    display: none;
}
.downloaderFrame:hover #downloadWidget{
    display: flex;
 }

#downloadWidget .downloaderLine {
    
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
#downloadWidget .downloaderLine * {
    vertical-align: center;
    color: white;
}
#downloadWidget .downloaderLine:hover * {
    vertical-align: center;
    color: rgb(110, 162, 221);
}
#downloadWidget .downloaderLine .downloaderIcon{
    font-size: 30px;
}
#downloadWidget .downloaderLine .downloaderText{
    font-size: 18px;
    font-weight: 700;
}
@media (hover: hover) {
    .downloaderFrame:hover #downloadWidget{
    display: flex;
    background-color: #000000c5;
 }
}
@media (hover: none) {
    .downloaderFrame #downloadWidget{
    display: flex;
    background-color: #00000079;
 }
}

@media (max-width: 999px) {
    .classicOpenPdfLink {
        display: flex;
    }

    .openInObjectButton {
        display: none;
    }
}
@media (min-width: 1000px) {
    .classicOpenPdfLink {
        display: none;
    }

    .openInObjectButton {
        display: flex;
    }
}
</style>