<template>
    <div class="textBox w100 flex column justifyBetween r">
        <h3>{{ data.subtitle }}</h3>

        <p class="content page-text">{{ data.content }}</p>

        <div class="bottomContent">
            <p class="moreinfo flex  italic" v-if="data.moreInfo">
                {{ data.moreInfo }}
            </p>

            <div class="DLWidget flex alignCenter " v-if="data.file">
                <p class="fileName">{{ fileName }}</p>

                <NuxtLink class="button blue_action flex pointer alignCenter" :to="data.file">
                    <span class="icon" aria-hidden="true">download</span>
                    <span class="italic">télécharger</span>
                </NuxtLink>

                <span class="button blue_action flex pointer alignCenter">
                    <span class="icon" aria-hidden="true">visibility</span>
                    <span>afficher</span>
                </span>
            </div>
        </div>

    </div>
</template>

<script setup>

const props = defineProps({

    data: Object
})





</script>

<style scoped>
.textBox {
    width: 50%;

    padding: 50px 30px;
    overflow-y: auto;
}


.moreInfo {
    margin-top: 20px;
}

.DLWidget {
    margin-top: 20px;
}

.DLWidget .button {
    gap: 5px;
    color: white;
    padding: 10px 15px;
    border-radius: 50px;
    margin-right: 25px;
}
</style>