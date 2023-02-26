<template>
    <section class="filterStripe w100">
        <div class="mainWidth flex gap20 justifyEvenly alignCenter wrap">
            <div class="filter shadow pointer" 
                v-if="slugged == true"
                :name="filter.slug"
                @click="handleFilterClick"
                :class="{ active: activeFilter === filter.slug }"
                v-for="filter in filters" 
                :key="filter">
                {{ filter.name }}
            </div>

            <div class="filter shadow pointer" 
                v-if="slugged == false"
                :name="filter"
                @click="handleFilterClick"
                :class="{ active: activeFilter === filter }"
                v-for="filter in filters" 
                :key="filter">
                {{ filter }}
            </div>
        </div>
    </section>
</template>
 
<script setup>

const props = defineProps({
    filters: Array,
    activeFilter: String,
    slugged: Boolean
})

const emit = defineEmits(['updateFilter'])

const activeFilter = ref('toutes')

const handleFilterClick = (e) => {
    activeFilter.value = e.target.getAttribute('name')
    emit('updateFilter', e.target.getAttribute('name'))
}

</script>

<style>
.filterStripe {
    background: linear-gradient(90deg, rgba(0, 47, 74, 1) 0%, rgba(146, 76, 2, 1) 100%);
    padding: 30px;
    margin: 50px 0 0 0 ;
}   
.filter {
    padding: 5px 0;
    font-weight: 600;
    background-color: white;
    border-radius: 5px;
    text-align: center;
}

@media (max-width: 768px) {
    .filter {
        width: 150px;
        padding: 5px 10px;
    }
}
@media (min-width: 768px) {
    .filter {
        width: 200px;
        font-size: 18px;
    }
}

.active {
    color: white;
    background-color: var(--light-blue);
    
}
</style>