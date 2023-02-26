<template>
    <a href="#footerInfo" class="contactWidgetBox flex column justifyCenter pointer">
        <div class="poullaouen flex justifyBetween alignCenter">
            <p class="city">Poullaouen</p>

            <p class="iconBox">
                <span class="icon">call</span>

                <span class="icon">mail</span>

                <span class="icon">schedule</span>
            </p>
        </div>

        <div class="locmaria flex justifyBetween alignCenter">
            <p class="city">Locmaria-Berrien</p>

            <p class="iconBox">
                <span class="icon">call</span>

                <span class="icon">mail</span>

                <span class="icon">schedule</span>
            </p>
        </div>
    </a>

    <a href="#footerInfo" id="tinyWidget" class="icon tinyWidget">
        question_mark
    </a>
 

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
#tinyWidget {
    color: white;
}
.tinyWidget {
    height: 40px;
    width: 40px;
    font-size: 20px;
    color: white;
    background-color: var(--dark-blue);
    border-radius: 50%;
    display: grid;
    place-items: center;
}

@media (max-width: 999px) {
    .contactWidgetBox {
        display: none;
    }
}

@media (min-width: 1000px) {
    .tinyWidget {
        display: none;
    }
}
</style>