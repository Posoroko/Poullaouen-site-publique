<template>
    <section class="scheduleSection">
        <SectionTitleBar title="Emploi du temps" />

        <div class="scheduleBox mainWidth relative">
            <div class="scheduleBoard flex justifyCenter">
                <div class="col colTime">
                    <b class="scheduleCell scheduleDay shallow"></b>

                    <p class="scheduleCell scheduleTime deep"> 8h45 - 11h45</p>
                    <p class="scheduleCell scheduleTime shallow">11h45 - 12h15</p>
                    <p class="scheduleCell scheduleTime shallow">11 h 45 - 13 h45</p>
                    <p class="scheduleCell scheduleTime shallow">13h45 - 14h45</p>
                    <p class="scheduleCell scheduleTime medium"> 14h45 - 16h45 </p>

                </div>

                <div class="col collDay">
                    <p class="scheduleCell scheduleDay shallow">Lundi</p>

                    <p class="scheduleCell deep"> Enseignement</p>
                    <p class="scheduleCell shallow">APC <br> (aide personnalisée)</p>
                    <p class="scheduleCell shallow">pause</p>
                    <p class="scheduleCell shallow">TAP</p>
                    <p class="scheduleCell medium"> Enseignement </p>
                </div>

                <div class="col collDay">
                    <p class="scheduleCell scheduleDay shallow">Mardi</p>

                    <p class="scheduleCell deep"> Enseignement</p>
                    <p class="scheduleCell medium">Pause</p>
                    <p class="scheduleCell shallow">Enseignement</p>
                    <p class="scheduleCell medium">Enseignement</p>
                </div>

                <div class="col collDay">
                    <p class="scheduleCell scheduleDay shallow">Mercredi</p>

                    <p class="scheduleCell deep">Enseignement</p>
                    <p class="scheduleCell supaDeep"></p>
                </div>

                <div class="col collDay">
                    <p class="scheduleCell scheduleDay shallow">Jeudi</p>

                    <p class="scheduleCell deep">Enseignement</p>
                    <p class="scheduleCell shallow">APC <br> (aide personnalisée)</p>
                    <p class="scheduleCell shallow">Pause</p>
                    <p class="scheduleCell shallow">TAP</p>
                    <p class="scheduleCell medium">Enseignement</p>
                </div>

                <div class="col collDay">
                    <p class="scheduleCell scheduleDay shallow">Vendredi</p>

                    <p class="scheduleCell deep">Enseignement</p>
                    <p class="scheduleCell medium">Pause</p>
                    <p class="scheduleCell shallow">TAP</p>
                    <p class="scheduleCell medium">Enseignement</p>
                </div>
            </div>

            <img class="scheduleBackdrop" src="/images/ecole/taches.png" alt="">
        </div>

        <div class="mainWidth flex justifyStart">
            <NuxtLink to="https://www.education.gouv.fr/calendrier-scolaire-100148" target="_blank" class=" albumButton whiteAlbumButton flex alignCenter gap10"> <span class="icon">visibility</span> <p class="externalLink">Calendrier scolaire</p> </NuxtLink>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.scheduleBox {
    /* background-color: var(--dark-blue); */
    padding: 100px 40px;
}
.scheduleDay,
.scheduleTime {
    font-weight: 700;
}
/* schedule */
.scheduleBoard *{
    border: 1px solid white;
    color: white;
}

.scheduleBoard .col {
    width: 15%;
    
}
.scheduleCell {
    display: grid;
    place-items: center;
    text-align: center;
    background-color: #002f4aa4;
}

.shallow {
    height: var(--shallow-height);
}
.medium {
    height: calc(var(--shallow-height) * 2);
}
.deep {
    height: calc(var(--shallow-height) * 3);
}
.supaDeep {
    height: calc(var(--shallow-height) * 5);
}

.scheduleBackdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>