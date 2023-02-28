<template>
    <div class="downloadWidget column justifyEvenly alignCenter" id="downloadWidget">
        <a :href="link" target="_blank" class="downloaderLine pointer" >
            <span class="downloaderIcon icon centered">visibility</span>
            <span class="downloaderText">consulter</span> 
        </a>

        <a :href="link" :download="link" class="downloaderLine pointer">
            <span class="downloaderIcon icon">download</span>
            <span class="downloaderText">télécharger</span>
        </a>
    </div>
</template>

<script setup>

const propos = defineProps({
    link: String
})

</script>

<style>
#downloadWidget {
    width: 100%;
    height: 100%;
    background-color: #000000be;
    display: none;
}
.downloaderFrame:hover #downloadWidget{
    display: flex;
 }

#downloadWidget .downloaderLine {
    display: flex;
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
    font-size: 40px;
}
#downloadWidget .downloaderLine .downloaderText{
    font-size: 24px;
    font-weight: 700;
}
</style>