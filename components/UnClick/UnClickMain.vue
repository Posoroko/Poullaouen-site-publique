<template>
    <section class="">
        <SectionTitleBar title="En un clic" />

        <nav class="buttonBox flex alignCenter justifyEvenly mainWidth wrap">
            <NuxtLink to="/mon-quotidien/menu-cantine" class="dark_blue_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon">restaurant</span>

                <span class="wayne">Menu de la cantine</span>
            </NuxtLink>

            <NuxtLink class="brown_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon">newspaper</span>
                
                <span class="wayne">Bulletin <br> municipal</span>
            </NuxtLink>

            <NuxtLink class="dark_blue_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon">shopping_cart</span>
                
                <span class="wayne">Horraire des commerces</span>
            </NuxtLink>

            <NuxtLink to="/mes-sorties/chemins-de-randonnee" class="brown_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon">hiking</span>
                
                <span class="wayne">Chemins de randonnée</span>
            </NuxtLink>

            <NuxtLink to="/actualites" class="dark_blue_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon">feed</span>
                
                <span class="wayne">actualités</span>
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