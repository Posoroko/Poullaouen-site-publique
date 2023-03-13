<template>
    <section class="scheduleSection">
        <SectionTitleBar title="Emploi du temps" />

        <div class="scheduleBox mainWidth relative">
            <div class="scheduleBoard flex column">
                <div class="daySelector flex row gap10 justifyCenter">
                    <p class="dayBtn pointer" data-id="lundi" @click="selectDay" :class="{ activeDayBtn: activeDayBtn == 'lundi' }">lundi</p>
                    <p class="dayBtn pointer" data-id="mardi" @click="selectDay" :class="{ activeDayBtn: activeDayBtn == 'mardi' }">mardi</p>
                    <p class="dayBtn pointer" data-id="jeudi" @click="selectDay" :class="{ activeDayBtn: activeDayBtn == 'jeudi' }">jeudi</p>
                    <p class="dayBtn pointer" data-id="vendredi" @click="selectDay" :class="{ activeDayBtn: activeDayBtn == 'vendredi' }">vendredi</p>
                </div>
                
                <div class="columnBox flex justifyCenter w100">
                    <div class="col col1 colTime">
                        <b class="scheduleCell scheduleDay shallow"></b>

                        <p class="scheduleCell scheduleTime deep"> 8h45 - 11h45</p>
                        <p class="scheduleCell scheduleTime shallow">11h45 - 12h15</p>
                        <p class="scheduleCell scheduleTime shallow">11 h 45 - 13 h45</p>
                        <p class="scheduleCell scheduleTime shallow">13h45 - 14h45</p>
                        <p class="scheduleCell scheduleTime medium"> 14h45 - 16h45 </p>

                    </div>

                    <div class="col colDay" v-if="activeDayBtn == 'lundi'">
                        <p class="scheduleCell scheduleDay shallow">Lundi</p>

                        <p class="scheduleCell deep"> Enseignement</p>
                        <p class="scheduleCell shallow">APC <br> (aide personnalisée)</p>
                        <p class="scheduleCell shallow">pause</p>
                        <p class="scheduleCell shallow">TAP</p>
                        <p class="scheduleCell medium"> Enseignement </p>
                    </div>

                    <div class="col colDay" v-if="activeDayBtn == 'mardi'">
                        <p class="scheduleCell scheduleDay shallow">Mardi</p>

                        <p class="scheduleCell deep"> Enseignement</p>
                        <p class="scheduleCell medium">Pause</p>
                        <p class="scheduleCell shallow">Enseignement</p>
                        <p class="scheduleCell medium">Enseignement</p>
                    </div>

                    <div class="col colDay" v-if="activeDayBtn == 'mercredi'">
                        <p class="scheduleCell scheduleDay shallow">Mercredi</p>

                        <p class="scheduleCell deep">Enseignement</p>
                        <p class="scheduleCell supaDeep"></p>
                    </div>

                    <div class="col colDay" v-if="activeDayBtn == 'jeudi'">
                        <p class="scheduleCell scheduleDay shallow">Jeudi</p>

                        <p class="scheduleCell deep">Enseignement</p>
                        <p class="scheduleCell shallow">APC <br> (aide personnalisée)</p>
                        <p class="scheduleCell shallow">Pause</p>
                        <p class="scheduleCell shallow">TAP</p>
                        <p class="scheduleCell medium">Enseignement</p>
                    </div>

                    <div class="col colDay" v-if="activeDayBtn == 'vendredi'">
                        <p class="scheduleCell scheduleDay shallow">Vendredi</p>

                        <p class="scheduleCell deep">Enseignement</p>
                        <p class="scheduleCell medium">Pause</p>
                        <p class="scheduleCell shallow">TAP</p>
                        <p class="scheduleCell medium">Enseignement</p>
                    </div>
                </div>
            </div>

            <img class="scheduleBackdrop" src="/images/ecole/taches.png" alt="">
        </div>

        <div class="mainWidth flex justifyStart">
            <NuxtLink to="https://www.education.gouv.fr/calendrier-scolaire-100148"  target="_blank"
                class="albumButton whiteAlbumButton flex alignCenter gap10"> <span class="icon">visibility</span>
                <b>Calendrier scolaire</b> </NuxtLink>
        </div>
    </section>
</template>

<script setup>

const activeDayBtn = ref('lundi')
const selectDay = (e) => {
    activeDayBtn.value = e.currentTarget.getAttribute('data-id')
}



</script>

<style scoped>
.scheduleBoard * {
    border: 1px solid white;
    color: white;
}
.scheduleBox {
    /* background-color: var(--dark-blue); */
    padding: 100px 40px;
}

.daySelector {
    padding: 10px 0;
    border: none;
}
.daySelector .dayBtn{
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: var(--green);
    padding: 5px 8px;
    border: none;
    border-radius: 20px;
}

.daySelector .activeDayBtn {
    background-color: rgb(1, 90, 1);
}
.col1 {
    width: 30%;
}
.colDay {
    width: 70%
}


.scheduleDay,
.scheduleTime {
    font-weight: 500;
}

/* schedule */


.scheduleCell {
    display: grid;
    place-items: center;
    text-align: center;
    /* padding: 5px; */
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
}</style>