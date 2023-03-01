<template>
    <a href="#footerInfo" class="contactWidgetBox flex column justifyCenter pointer">
        <div class="poullaouen flex justifyBetween alignCenter">
            <p class="city">Poullaouen</p>

            <p class="iconBox flex">
                
                <span class="icon">call</span>

                <span class="icon">mail</span>

                <span class="icon">schedule</span>

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="facebook">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                </span>
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

    <a href="#footerInfo" id="tinyWidget" class="tinyWidget flex gap10">
        <span class="icon">call</span>
        <span class="icon">email</span>
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
.facebook {
    height: 14px;
}
.facebook *{
    fill: var(--light-blue);
}

.tinyWidget {
    
    background-color: var(--dark-blue);
    padding: 5px 7px;
    border-radius: 10px;
}
.tinyWidget span {
    font-size: 20px;
    color: white;
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