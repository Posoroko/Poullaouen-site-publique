<template>
    <div class="sectionBoxSloted whiteSection w100">
        <SectionTitleBar v-if="data.title" :title="data.title" />

        <div class="sectionContent sectionBox w100 h100">
            <div class="mainWidth h100 flex justifyCenter gap20 wrap">
                <div class="shoeBox centered">
                    <SectionShoeBox :image="data.image" :localImage="data.localImage" :containedImage="data.containedImage" />
                </div>
                
                <div class="slotedContent">
                    <slot>

                    </slot>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;

const props = defineProps({
    data: Object
})



</script>


<style scoped>

.sectionContent {
    min-height: 60vh;
    margin-top: 20px;
    padding: 20px 0;
}

.shoeBox, 
.slotedContent {
    width: min(600px, 90vw);
}


</style>

<style>
.actuContent a {
    font-weight: 700;
    text-decoration: underline !important;
}
</style>