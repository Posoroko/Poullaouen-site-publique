<template>
    <section class="photoViewerMain centered relative marTop100">
        <div ref="viewerBox" class=" viewerBox relative h100" @click="handleImageClick" @touchmove="handleTouch" @touchend="handleTouchEnd">
            <div ref="leftArrow" class="viewerArrowBox viewerLeftArrowBox absolute icon headerIcon carouselChevron pointer" @click="swipeLeft"> chevron_left </div>

            <div ref="rightArrow" class="viewerArrowBox viewerRightArrowBox absolute icon headerIcon carouselChevron pointer" @click="swipeRignt"> chevron_right  </div>
        </div>
    </section>
</template>

<script setup>
import { showInModal } from '@/composables/utilities'
import { useSwipe } from '@vueuse/core'

const viewerBox = ref(null)
const { isSwiping, direction } = useSwipe(viewerBox)

const leftArrow = ref(null)
const rightArrow = ref(null)

const swipedOnce = ref(false)

const handleTouch = (e) => {
    
    if(direction.value == 'left' && !swipedOnce.value) {
        swipedOnce.value = true
        leftArrow.value.click()
    } else if (direction.value == 'right' && !swipedOnce.value) {
        swipedOnce.value = true
        rightArrow.value.click()
    }
}
const handleTouchEnd = (e) => {
    swipedOnce.value = false
}


const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const props = defineProps({
    albumData: Array
})

const swipeLeft = () => {

     if (imagesNodes.value[imagesNodes.value.length -1].classList[0] == 'pos1102') {
        return
    }

    let newOne = false

    imagesNodes.value.forEach((image) => {
        let nodePos =image.classList[0]
        switch(nodePos) {
            case'pos1100':
                image.classList.replace('pos1100', 'pos1000')
                break;
            case'pos1101':
                image.classList.replace('pos1101', 'pos1100')
                break;
            case'pos1102':
                image.classList.replace('pos1102', 'pos1101')
                break;
            case'pos1103':  
                image.classList.replace('pos1103', 'pos1102')
                break;
            case'pos1104':
                image.classList.replace('pos1104', 'pos1103')
                break;
            case'pos2000':
                if(!newOne) {
                    image.classList.replace('pos2000', 'pos1104')
                    newOne = true
                }
                break;
        }
    })

}
const swipeRignt = () => {
    
    if(imagesNodes.value[0].classList[0] == 'pos1102') {
        return
    }

    let newOne = false
    
    for(let i = imagesNodes.value.length -1; i >= 0; i--) {
        
        let nodePos = imagesNodes.value[i].classList[0]
        switch (nodePos) {
            case 'pos1104':
                imagesNodes.value[i].classList.replace('pos1104', 'pos2000')
                break;
            case 'pos1103':
                imagesNodes.value[i].classList.replace('pos1103', 'pos1104')
                break;
            case 'pos1102':
                imagesNodes.value[i].classList.replace('pos1102', 'pos1103')
                break;
            case 'pos1101':
                imagesNodes.value[i].classList.replace('pos1101', 'pos1102')
                break;
            case 'pos1100':
                imagesNodes.value[i].classList.replace('pos1100', 'pos1101')
                break;
            case 'pos1000':
                if (!newOne) {
                    imagesNodes.value[i].classList.replace('pos1000', 'pos1100')
                    newOne = true
                }
        }
    }
}

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
            img.classList.add('carouselImage')
            img.setAttribute('data-url', `${directusAssets}${image.directus_files_id}`)
            img.src = `${directusAssets}${image.directus_files_id}?key=viewer750`
            
        photoCard.appendChild(img)
        viewerBox.value.appendChild(photoCard)
    })
}

onMounted(() => {
    viewerInit(props.albumData)
    imagesNodes.value = document.querySelectorAll('.photoCard')
})

const handleImageClick = (e) => {
    const target = e.target
    if(!target.parentElement.classList.contains('pos1102')) {
        // openPhotoViewer(target)

        return
    }
    const url = target.getAttribute('data-url') + "?key=full1000"

    showInModal(url)
}




</script>



<style>
.photoViewerMain {
    min-height: 60vh;
    background-color: var(--dark-blue);
    border-radius: 10px;
}
.viewerBox {
    width: min(1200px, 100%);
    margin: auto;
    overflow-x: clip;
}
.photoCard {
    height: min(500px, 70vw); 
    aspect-ratio: 1/1;
    position: absolute;
    opacity: 1;
    transition: 300ms ease;
    top: 50%;
    user-select: none;
}
.photoCard img {
    
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 3px;
    box-shadow: 2px 2px 4px black;
    cursor: pointer;
    user-select: none;
}

.pos1000 { left: 1%; transform: translate(0%, -50%) scale(100%); z-index: 1000; opacity: 0; transition: 300ms ease;}
.pos2000 { left: 99%; transform: translate(-100%, -50%) scale(100%); z-index: 1000; opacity: 0; transition: 300ms ease;}

.pos1100 { left: 1%; transform: translate(0%, -50%) scale(100%); z-index: 1100; filter: brightness(25%);}
.pos1101 { left: 30%; transform: translate(-50%, -50%) scale(115%); z-index: 1200; filter: brightness(50%);}
.pos1102 { left: 50%; transform: translate(-50%, -50%) scale(130%); z-index: 1300;}
.pos1103 { left: 70%; transform: translate(-50%, -50%) scale(115%); z-index: 1200; filter: brightness(50%);}
.pos1104 { left: 99%; transform: translate(-100%, -50%) scale(100%); z-index: 1100; filter: brightness(25%);}

.viewerLeftArrowBox {
    
    left: 1%;
    top: 50%;
    transform: translate(0%, -50%);
}
.viewerRightArrowBox {
    right: 1%;
    top: 50%;
    transform: translate(0%, -50%);
}
.viewerArrowBox {
    border-radius: 8px;
    user-select: none;
    z-index: 2000;
}
.carouselChevron {
    font-size: 35px;
    line-height: 35px;
    color: white;
    background-color: rgba(0, 0, 0, 0.425);
}
</style>