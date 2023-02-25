<template>
    <section class="">
        <SectionTitleBar title="En un clic" />

        <nav class="buttonBox flex alignCenter justifyEvenly mainWidth wrap">
            <div class="blueBtn roundBtn pointer flex column alignCenter justifyCenter">
                <p class="icon">restaurant</p>

                <p class="wayne">Menu de la cantine</p>
            </div>

            <NuxtLink class="brownBtn roundBtn pointer flex column alignCenter justifyCenter">
                <p class="icon">newspaper</p>
                
                <p class="wayne">Bulletin <br> municipal</p>
            </NuxtLink>

            <NuxtLink class="blueBtn roundBtn pointer flex column alignCenter justifyCenter">
                <p class="icon">shopping_cart</p>
                
                <p class="wayne">Horraire des commerces</p>
            </NuxtLink>

            <NuxtLink to="/mes-sorties/chemins-de-randonnee" class="brownBtn roundBtn pointer flex column alignCenter justifyCenter">
                <p class="icon">hiking</p>
                
                <p class="wayne">Chemins de randonnée</p>
            </NuxtLink>

            <NuxtLink to="/actualites" class="blueBtn roundBtn pointer flex column alignCenter justifyCenter">
                <p class="icon">feed</p>
                
                <p class="wayne">actualités</p>
            </NuxtLink>

        </nav>
    </section>
</template>

<script setup>


</script>

<style>
.buttonBox {
    margin-top: 50px;
    gap: 10px;
}
.blueBtn {
    background-color: var(--dark-blue);
}
.brownBtn {
    background-color: var(--brown);
}

.roundBtn {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: var(--shadow);
}

.roundBtn .icon {
    font-size: 50px;
}
.roundBtn .wayne {
    margin-top: 5px;
}

.roundBtn .icon,
.roundBtn .wayne {
    color: white;
    text-align: center;
}
</style>