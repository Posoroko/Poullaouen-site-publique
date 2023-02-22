<template>
    <div class="sectionBox whiteSection w100">
        <SectionTitleBar v-if="showTitle" :title="data.title"/>

        <div class="sectionContent w100">
            <div class="flex alignCenter justifyCenter wrap">
                <SectionShoeBox :image="data.image" v-if="data.image"/>
                
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
    min-height: 60vh;
    margin-top: 20px;
    padding: 20px 0;
}
</style>