<template>
    <TopBarMain />

    <slot />

    <FooterMain />

    <dialog id="masterModal">
        <span class="modalCloseBtn icon">close</span>
    </dialog>
</template>

<script setup>


</script>

<style>
#masterModal {
    padding: 10vw;
    margin: auto;
    outline: none;
    /* position: relative; */
}
.modalCloseBtn {
    font-size: 30px;
    font-weight: 300;
    position: absolute;
    top: 0;
    right: 0;
}
#masterModal * {
    object-fit: contain;
}
#masterModal::backdrop {
    background-color: rgba(0, 0, 0, 0.314);
}
</style>