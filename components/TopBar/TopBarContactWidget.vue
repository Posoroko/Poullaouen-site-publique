<template>
    <div class="contactWidgetBox flex column justifyCenter">
        <div class="poullaouen flex justifyBetween alignCenter">
            <p class="city">Poullaouen</p>

            <div class="iconBox">
                <a href="" class="icon">call</a>

                <a href="" class="icon">mail</a>

                <a href="" class="icon">schedule</a>
            </div>
        </div>

        <div class="locmaria flex justifyBetween alignCenter">
            <p class="city">Locmarie-Berrien</p>

            <div class="iconBox">
                <a href="" class="icon">call</a>

                <a href="" class="icon">mail</a>

                <a href="" class="icon">schedule</a>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style>
.contactWidgetBox {
    margin-right: 20px;
}

.city {
    font-size: 18px;
    color: var(--dark-blue);
    padding: 5px;
}

.poullaouen {
    border-bottom: 1px solid var(--brown);
}

.iconBox .icon {
    font-size: 16px;
    color: var(--light-blue);
    padding: 0 5px;
}
</style>