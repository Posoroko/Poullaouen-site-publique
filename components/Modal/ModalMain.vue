<template>
    <p class="r">
        {{ data }}
    </p>
    <div class="modal">
        
    </div>
</template>

<script setup>
const modal = ref(null)

const props = defineProps({
    // type: String,
    // type = "img" => img tag, "imgLink",
    data: String
})

const openModal = () => {
    modal.showModal()
}

</script>

<style>
.modal {
    background-color: red;
}
</style>