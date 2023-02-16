<template>
    <div class="sectionBoxSloted whiteSection w100">
        <SectionTitleBar v-if="data.showTitle" :title="data.title" />

        <div class="sectionContent sectionBox w100">
            <div class="mainWidth flex alignCenter justifyCenter wrap">
                <div class="shoeBox centered">
                    <SectionShoeBox :image="data.image" />
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

.shoeBox, .slotedContent {
    width: min(100%, 700px);
    height: 100%;
    padding: 20px;
}


</style>