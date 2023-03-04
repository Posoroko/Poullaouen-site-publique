<template>
    <section class="photoViewerMain relative">
        <div ref="viewerBox" class="mainWidth viewerBox relative h100">
            <div class="photoCard">

            </div>

            <div class="viewerArrowBox leftArrowBox absolute icon headerIcon headerChevron pointer" @click="swipeLeft"> chevron_left </div>

            <div class="viewerArrowBox rightArrowBox absolute icon headerIcon headerChevron pointer" @click="swipeRignt"> chevron_right  </div>
        </div>


        
    </section>
</template>

<script setup>
const viewerBox = ref(null)

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const swipeLeft = () => {
    let newOne = false

    imagesNodes.value.forEach((image) => {
        
        let nodePos =image.classList[0].slice(-4)

        if(nodePos == 1100) {
            image.classList.replace('pos1100', 'pos1000')
        } else if(nodePos > 1100 && nodePos < 1105) {
            image.classList.replace('pos' + nodePos, 'pos' + (nodePos - 1))
        } else if(newOne == false && nodePos == 2000) {
            image.classList.replace('pos2000', 'pos1104')
            newOne = true
        }
    })
    console.log(imagesNodes.value)
}
const swipeRignt = () => {
    let newOne = false

    imagesNodes.value.forEach((image) => {
        
        const nodePos = parseInt(image.classList[0].slice(-4))
        
        if (nodePos == 1104) {
            image.classList.replace('pos1104', 'pos2000')
        } else if (nodePos > 1099 && nodePos < 1104) {
            image.classList.replace('pos' + nodePos, 'pos' + (nodePos + 1))
        } else if (newOne == false && nodePos == 1000) {
            image.classList.replace('pos1000', 'pos1100')
            newOne = true
        }
    })
    console.log(imagesNodes.value)
}


const albumData = [ 
    'bar associatif 2.JPG',
'chasse.JPG',
'comité des fetes.JPG',
'dans tro.JPG', 
'DSCN8133.JPG',
'fnaca poullaouen.JPG', 
'grand prix mine.JPG', 
'IMG_0692.JPG' 
]
const imagesNodes = ref(null)

const viewerInit = (images) => {
    images.forEach((image, index) => {
        const photoCard = document.createElement('div')
        
        let num = 0

        if(index < 5) {
            num = 1100 + index
        } else {
            num = 2000
        }
        photoCard.classList.add('pos' + num)


        photoCard.classList.add('photoCard')
            const img = document.createElement('img')
            img.src = '/images/albums/' + image
            img.classList.add('objectFitContain')
            
        photoCard.appendChild(img)
        viewerBox.value.appendChild(photoCard)
    })
    

}
onMounted(() => {
    viewerInit(albumData)
    imagesNodes.value = document.querySelectorAll('.photoCard')
    console.log(imagesNodes.value)
})
</script>



<style>
.photoViewerMain {
    height: 60vh;
    background-color: gray;
}
.photoCard {
    height: 500px; 
    width: 500px;
    position: absolute;
    opacity: 1;
    transition: 300ms ease;
    top: 50%;
}

.pos1000 { left: 1%; transform: translate(0%, -50%) scale(100%); z-index: 1000; opacity: 0; transition: 300ms ease;}
.pos2000 { right: 1%; transform: translate(0%, -50%) scale(100%); z-index: 2000; opacity: 0; transition: 300ms ease;}

.pos1100 { left: 1%; transform: translate(0%, -50%) scale(100%); z-index: 1100;}
.pos1101 { left: 30%; transform: translate(-50%, -50%) scale(115%); z-index: 1102;}
.pos1102 { left: 50%; transform: translate(-50%, -50%) scale(130%); z-index: 1103;}
.pos1103 { right: 30%; transform: translate(50%, -50%) scale(115%); z-index: 1102;}
.pos1104 { right: 1%; transform: translate(0%, -50%) scale(100%); z-index: 1100;}

.viewerArrowBox {
    z-index: 10000;
}
</style>