<template>
    <TopBarMain />

    <slot />

    <FooterMain />

    <dialog id="masterModal">
        <span class="modalNode modalCloseBtn absolute icon pointer" @click="closeModal">
            close
        </span>
    </dialog>
</template>

<script setup>
const closeModal = () => {
    const modal = document.getElementById('masterModal')
    modal.close()
}

</script>

<style>
#masterModal {
    max-width: 95vw;
    max-height: 90vh;
    /* padding: 3vw; */
    margin: auto;
    outline: none;
    /* position: relative; */
}
.modalCloseBtn {
    font-size: 40px;
    background-color: #fff;
    top: 10px;
    right: 10px;
}
/* #masterModal * {
    object-fit: contain;
} */
#masterModal::backdrop {
    background-color: rgba(0, 0, 0, 0.314);
}
</style>