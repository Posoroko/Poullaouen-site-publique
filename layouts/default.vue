<template>
    <TopBarMain />

    <slot />

    <FooterMain />

    <dialog id="masterModal">
        <span class="modalNode modalCloseBtn absolute icon pointer flex alignCenter justifyCenter" @click="closeModal">
            close
        </span>
    </dialog>

    <a href="#header" class="icon " id="homeButton">home</a>
</template>

<script setup>
const closeModal = () => {
    const modal = document.getElementById('masterModal')
    modal.close()
}

</script>

<style scoped>
#homeButton {
    font-size: 50px;
    position: fixed;
    padding: 5px;
    border-radius: 10px;
    color: white;
    background-color: var(--dark-blue);
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
    background-color: #ffffff79;
    border-radius: 10px;
    top: 10px;
    right: 10px;
    line-height: 40px;
}

#masterModal::backdrop {
    background-color: rgba(0, 0, 0, 0.76);
}
</style>