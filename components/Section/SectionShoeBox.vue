<template>
    <div class="footFrame flex alignCenter relative">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve">
            <path class="pied leftFoot" d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z" />
        
            <path class="pied rightFoot" d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z" />
        </svg>

        <div class="imgFrame absolutlyCentered centered shadow">
            <img class="objectFitCover pointer" :src="image" alt="" @click="showInModal">
        </div>
    </div>

    <!-- <dialog ref="modal" class="modal">
        
    </dialog> -->
</template>

<script setup>


const showInModal = (e) => {
    const modal = document.getElementById('masterModal')
    let children = modal.children
    console.table(children)

    for (const child of children) {
        if (!child.classList.contains('modalNode')) {
            modal.removeChild(child)
        }
    }

    const _img = document.createElement('img')
    _img.src = e.currentTarget.src.slice(0, e.currentTarget.src.indexOf("?"))
    _img.style.maxWidth = "80vw"
    _img.style.maxHeight = "80vh"

    modal.appendChild(_img)
    modal.showModal()
}

const props = defineProps({
    image: String
})

</script>

<style scoped>
.footFrame {
    height: 100%;
    width: 100%;

}
.footFrame svg {
    height: 100%;
    width: 100%;
    overflow: visible;
}
.footFrame svg .pied{
    width: 100%;
    object-fit: contain;
    filter: drop-shadow(2px 2px 4px black);
}

.footFrame .imgFrame {
    width: 80%;
    height: 70%;
    border-radius: 5px;
    overflow: hidden;
}


</style>