<template>
    <div class="textBox  flex column justifyBetween">
        <div class="intro">
            <h3>{{ data.subtitle }}</h3>
            <p>{{ data.date }}</p>
        </div>

        <p class="content page-text">
            {{ data.content }}
        </p>

        <div class="bottomContent">
            <p class="moreinfo flex  italic" v-if="data.moreInfo">
                {{ data.moreInfo }}
            </p>

            <div class="DLWidget flex alignCenter " v-if="data.file">
                <p class="fileName">{{ fileName }}</p>

                <NuxtLink class="button blue_action flex pointer alignCenter" :to="data.file">
                    <span class="icon" aria-hidden="true">download</span>
                    <span class="italic page-text">télécharger</span>
                </NuxtLink>

                <span class="button blue_action flex pointer alignCenter">
                    <span class="icon" aria-hidden="true">visibility</span>
                    <span class="italic page-text">afficher</span>
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
    padding: 50px 30px;
    overflow-y: auto;
}
.textBox {
    text-align: justify;
}
@media (max-width: 719px) {
    .textBox {
        width: 100%;
    }
}
@media (min-width: 720px) {
    .textBox {
        width: 50%;
    }
}
.intro p, .content {
    margin-top: 5px;
}
.content {
    margin-top: 15px;
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