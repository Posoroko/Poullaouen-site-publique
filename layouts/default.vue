<template>
    <TopBarMain />

    <slot />

    <FooterMain />

    <dialog id="masterModal relative">
        <span class="modal modalNode masterModalCloseBtn modalCloseBtn absolute icon pointer flex alignCenter justifyCenter" @click="closeModal">
            close
        </span>
    </dialog>

    <!-- <dialog id="pdfModal" class="pdfModal">
        <object class="pdfReader " id="pdfReader"
            data="https://findstable.net/assets/71c2e97e-0345-4fa8-8ed3-6f056ac55fc8.pdf">
        </object>
        <span class="modal modalNode pdfModalCloseBtn modalCloseBtn absolute icon pointer flex alignCenter justifyCenter" @click="closePdfModal">
            close
        </span>
    </dialog> -->

    <a href="#header" class="icon " id="homeButton">arrow_upward</a>
</template>

<script setup>
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
    /* max-width: 95vw;
    max-height: 90vh; */
    margin: auto;
    background-color: transparent;
    border: none;
}


.modalCloseBtn {
    width: 45px;
    height: 45px;
    font-size: 40px;
    color: white;
    background-color: #000000;
    border-radius: 10px;
    z-index: 100000000000;
    right: 10px;
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