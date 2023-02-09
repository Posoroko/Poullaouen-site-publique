<template>
    <TopBarMain />

    <HeaderMain />

    <main>
        <slot />
    </main>
</template>

<script setup>


</script>

<style>
.topBarBox {
    height: 150px;
}
main {
    height: 200vh;
}
</style>