<template>
    <section class="">
        <SectionTitleBar title="En un clic" />

        <nav class="buttonBox flex alignCenter justifyEvenly mainWidth wrap">
            <NuxtLink to="/mon-quotidien/menu-cantine" class="dark_blue_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon" aria-hidden="true">restaurant</span>

                <span class="wayne">Menu de la cantine</span>
            </NuxtLink>

            <NuxtLink to="/ma-mairie/documents/bulletin-municipal" class="brown_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon" aria-hidden="true">newspaper</span>
                
                <span class="wayne">Bulletin <br> municipal</span>
            </NuxtLink>

            <NuxtLink to="/mon-quotidien/commerces-et-entreprises" class="dark_blue_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon" aria-hidden="true">shopping_cart</span>
                
                <span class="wayne">Horaires des commerces</span>
            </NuxtLink>

            <NuxtLink to="/mes-sorties/chemins-de-randonnee" class="brown_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon" aria-hidden="true">hiking</span>
                
                <span class="wayne">Chemins de randonnée</span>
            </NuxtLink>

            <NuxtLink to="/galerie-photo" class="dark_blue_action roundBtn pointer flex column alignCenter justifyCenter">
                <span class="icon" aria-hidden="true">photo_library</span>
                
                <span class="wayne">Galerie Photo</span>
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