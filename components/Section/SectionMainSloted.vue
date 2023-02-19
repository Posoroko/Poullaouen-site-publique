<template>
    <div class="sectionBoxSloted whiteSection w100">
        <SectionTitleBar v-if="data.title" :title="data.title" />

        <div class="sectionContent sectionBox w100 h100">
            <div class="mainWidth h100 flex justifyCenter wrap">
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

.shoeBox, 
.slotedContent {
    width: min(100%, 700px);
    /* max-height: 100%; */
    /* min-height: 350px; */
    padding: 20px;
}


</style>