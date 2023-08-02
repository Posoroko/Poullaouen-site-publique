<template>
    <section class="photoViewerMain centered relative marTop100" @touchmove="handleTouch" @touchend="handleTouchEnd">
        <div ref="viewerBox" class=" viewerBox relative h100" @click="handleImageClick">
            <div ref="leftArrow" class="viewerArrowBox viewerLeftArrowBox absolute icon headerIcon carouselChevron pointer" @click="swipeLeft"> chevron_left </div>

            <div ref="rightArrow" class="viewerArrowBox viewerRightArrowBox absolute icon headerIcon carouselChevron pointer" @click="swipeRignt"> chevron_right  </div>
        </div>

        <div class="modal" v-if="modalIsOpen">
            <div ref="modalContent" class="modalContent pad20">
                <span class="close" @click="closeModal">&times;</span>

                <img class="objectFitContain" :src="`${directusAssets}${albumData[selectedImageIndex].directus_files_id}?key=viewer750`"
                    alt="compagnie Singe Diesel">

                <div class="absolute w100 h100 top0 left0 noEvents_kidsEvents ">
                    <span class="icon modalChevronNew left" ref="modalLEftArrow" @click="modalNavigate('left')">chevron_left</span>

                    <span class="icon modalChevronNew right" ref="modalRightArrow" @click="modalNavigate('right')">chevron_right</span>
                </div>
            </div>
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
        if (modalIsOpen.value) {
            modalLEftArrow.value.click()
            return
        }
        
        leftArrow.value.click()
    } else if (direction.value == 'right' && !swipedOnce.value) {
        swipedOnce.value = true
        if (modalIsOpen.value) {
            modalRightArrow.value.click()
            return
        }
        
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
            img.setAttribute('data-index', index)
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

const modalIsOpen = ref(false)
const selectedImageIndex = ref(null)

const handleImageClick = (e) => {
    const target = e.target
    if(!target.parentElement.classList.contains('pos1102')) {
        // openPhotoViewer(target)

        return
    }

    selectedImageIndex.value = e.target.dataset.index

    modalIsOpen.value = true

    // const url = target.getAttribute('data-url') + "?key=full1000"

    // showInModal(url)
}
function closeModal() {
    modalIsOpen.value = false
}
const modalLEftArrow = ref(null)
const modalRightArrow = ref(null)

function modalNavigate(direction) {

    if (direction === 'left' && selectedImageIndex.value > 0) {
        selectedImageIndex.value--
    } else if (direction === 'right' && selectedImageIndex.value < props.albumData.length - 1) {
        selectedImageIndex.value++
    }
}



</script>



<style>
.modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #000000b6;
    backdrop-filter: blur(5px);
    z-index: 9999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.modalContent {
    height: 90%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 1px 1px 10px #00000097;
    position: relative;
}

.close {
    width: 48px;
    height: 48px;
    font-size: 40px;
    line-height: 1;
    color: white;
    background-color: black;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    display: grid;
    place-items: center;
    pointer-events: all;
}

.modalChevronNew {
    width: 48px;
    height: 48px;
    color: white;
    font-size: 40px;
    line-height: 1;
    background-color: rgba(0, 0, 0, 0.419);
    display: grid;
    place-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: all;
}
.modalChevronNew.left {
    left: 10px;
}
.modalChevronNew.right {
    right: 10px;
}
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