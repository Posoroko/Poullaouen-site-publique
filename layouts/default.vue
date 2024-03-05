<template>
    <TopBarMain />

    <div id="slotBox" :style="{ 'min-height': slotBoxMinHeight }">
        <slot />
    </div>

    <!-- <FooterMain /> -->

    <dialog id="masterModal">
        <div class="flex justifyEnd modalNode">
            <span class="modalNode masterModalCloseBtn modalCloseBtn icon pointer flex alignCenter justifyCenter" @click="closeModal">
                close
            </span>
        </div>
    </dialog>
    
    <a href="#header" class="icon" id="homeButton">arrow_upward</a>
</template>

<script setup>
const route = useRoute()


const homePageMinHeight = '550vh'


// Handles the min-height of the slotBox to prevent the footer from going up
//  pages like album pages are too short for the basic 300vh min-height
const slotBoxMinHeight = ref('300vh')

watch(() => route.path, () => {
    console.log(route.fullPath)
    if(route.params.album) {
        slotBoxMinHeight.value = '150vh'
        return
    }

    if(slotBoxMinHeight.value != '300vh') {
        slotBoxMinHeight.value = '300vh'
    }
})

const closeModal = () => {
    const modal = document.getElementById('masterModal')
    modal.close()
}
const closePdfModal = () => {
    const modal = document.getElementById('pdfModal')
    modal.close()
}


</script>

<style scoped>

.pdfModal {
    width: min(100%, 1200px);
    height: 90vh;
    margin: auto;
}
.pdfModal::backdrop {
    background-color: rgba(0, 0, 0, 0.829);
}
.pdfReader{
    width: 100%;
    height: 100%;
}

#homeButton {
    font-size: 50px;
    position: fixed;
    padding: 5px;
    border-radius: 10px;
    color: white;
    background-color: var(--dark-blue);
    border: 1px solid rgba(255, 255, 255, 0.281);
    box-shadow: var(--shadow);
    bottom: 2vw;
    right: 2vw;
}

#masterModal {
    margin: auto;
    background-color: transparent;
    border: none;
    outline: none;
    isolation: isolate;
}
.modalCloseBtn {
    width: 45px;
    height: 45px;
    font-size: 40px;
    color: white;
    background-color: #000000;
    border-radius: 10px;
    margin-bottom: 5px;
    z-index: 100000000000;
    line-height: 40px;
}

.pdfModalCloseBtn {
    top: 40px;
}
.masterModalCloseBtn {
    top: 10px;
}
#masterModal::backdrop {
    background-color: rgba(0, 0, 0, 0.76);
}
</style>