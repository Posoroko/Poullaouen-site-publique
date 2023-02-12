<template>
    <div class="sectionBox whiteSection w100">
        <SectionTitleBar v-if="showTitle" :title="data.title"/>

        <div class="sectionContent w100">
            <div class="mainWidth flex wrap h100">
                <SectionShoeBox :image="data.image" />
                
                <SectionTextBoxActu v-if="type === 'actualites'" :data="data" />
                
                <SectionTextBoxAgenda v-if="type === 'agenda'" />
            </div>
            
        </div>
        
        
    </div>
</template>

<script setup>

const props = defineProps({
    data: Object,
    //title, subtitle, moreInfo, file, image
    type: String,
    showTitle: Boolean
})

const types = props.type

</script>

<style scoped>
.sectionContent {
    height: 60vh;
}
.sectionContent {
    margin-top: 20px;
}

.whiteSection .sectionContent .shoeBox .foot svg g .pied {
    background-color: red;
}
</style>