<template>
    <footer class=" mainWidth relative flex justifyCenter alignStart gap20">
            <div class="leftBox" id="footerInfo">
                <address>
                    <p class="poullaouen">Poullaouen</p>

                    <p class="address flex alignCenter"> <span class="icon adIcon">pin_drop</span> 1 Place de la Mairie - 29246
                        Poullaouen</p>

                    <a href="tel:+33298935076" class="tel"><span class="icon adIcon">call</span>02.98.93.50.76</a>

                    <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="mail"> <span
                            class="icon adIcon">alternate_email</span> mairie-de-poullaouen@wanadoo.fr</a>

                    <p class="horraire"> <span class="icon adIcon">schedule</span> Du lundi au vendredi <br>
                        de 8h30 à 12h et de 13h30 à 17h30 <br>
                        Fermée au public le mercredi après-midi</p>
                </address>
            </div>

            <div class="centerBox">
                <!-- <img class="logo" src="/images/logo-poullaouen.svg" alt="logo de la Commune de Poullaouën"> -->

                <div class="phoneBox flex wrap">
                    <NuxtLink href="mailto:mairie-de-poullaouen@wanadoo.fr" class="phoneBtn">
                        <span class="icon">call</span>
                        <span class="city">Poullaouen</span>
                    </NuxtLink>

                    <NuxtLink href="mailto:mairie-de-poullaouen@wanadoo.fr" class="phoneBtn">
                        <span class="icon">call</span>
                        
                        <span class="city">Locmaria-Berrien</span>
                    </NuxtLink>

                    <NuxtLink href="mailto:mairie-de-poullaouen@wanadoo.fr" class="phoneBtn">
                        <span class="icon">mail</span>
                    
                        <span class="city">Poullaouen</span>
                    </NuxtLink>
                    
                    <NuxtLink href="mailto:mairie-de-poullaouen@wanadoo.fr" class="phoneBtn">
                        <span class="icon">mail</span>
                    
                        <span class="city">Locmaria-Berrien</span>
                    </NuxtLink>
                </div>

                <a href="www.facebook.com/mairiedepoullaouen" class="button flex alignCenter justifyCenter faceBookBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="width100 iconBox">
                        <path
                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                    <span class="centered">Suivez-nous!</span>
                </a>
                
                <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="button centered">Envoyer un mail</a>
                <a href="www.poher-communauté.com" class="button centered">Poher communauté</a>

            </div>

            <div class="rightBox">
                <address>
                    <p class="poullaouen">Locmaria-Berrien</p>

                    <p class="address flex alignCenter"> <span class="icon adIcon">pin_drop</span>3 rue Ti Ker - 29690 Locmaria
                        - Berrien</p>

                    <a href="tel:+33298997309" class="tel"><span class="icon adIcon">call</span>02.98.99.73.09</a>

                    <a href="mailto:mairie.locmaria-berrien@orange.f r" class="mail"> <span
                            class="icon adIcon">alternate_email</span>mairie.locmaria-berrien@orange.fr</a>

                    <p class="horraire"> <span class="icon adIcon">schedule</span> Lundi de 8h30 à 12h <br>
                        Jeudi de 13h30 à 17h30</p>
                </address>

            </div>
        <!-- <img class="r absolute vague" src="/images/vague.svg"> -->
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
    /* height: 60vh; */
    /* margin-top: 50px; */
    padding: 10vw 5vw;
}
footer section {
    gap: 40px;
}

.phoneBox {
    display: flex;
    justify-content: center;
    gap: 5px;
    flex-wrap: wrap;
}
@media (min-width: 719px) {
    .phoneBox {
        display: none;
    }
}
.phoneBox {
    width: 60%;
    margin: 0 auto;
}
.phoneBox .phoneBtn {
    width: 150px;
    aspect-ratio: 1/1;
    color: white;
    background-color: var(--green);
    padding: 20px 0;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 5px; */
}
.phoneBox .phoneBtn .icon {
    color: white;
    aspect-ratio: 1/1;
    font-size: 50px;
    text-align: center;
}
.phoneBox .phoneBtn .city {
    color: white;
    font-size: 16px;
    text-align: center;
}
.leftBox,
.rightBox {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.leftBox *,
.rightBox * {
    color: var(--dark-blue);
}
.centerBox {
    display: flex;
}

.poullaouen {
    font-size: 30px;
    font-style: normal;
    padding-left: 50px;
}

.address,
.tel,
.mail,
.horraire {
    font-size: 18px;
    font-style: normal;
    padding-left: 50px;
    margin-top: 10px;
    display: block;
    position: relative;
}

.adIcon {
    font-style: normal;
    position: absolute;
    top: 0;
    left: 0;
}

.centerBox .button {
    height: 50px;
    color: white;
    background-color: var(--dark-blue);
    border-radius: 25px;
    margin-top: 20px;
}

.iconBox {
    width: 50px;
    height: 30px;
    fill: white;
}
.faceBookBtn *{
    color: white;
}
.vague {
    z-index: -1;
}

@media (max-width: 700px) {
    .logo {
        width: 60%;
        margin: auto;
    }

    footer {
        margin-top: 200px;
        margin-bottom: 100px;
    }

    .vague {
        display: none;
    }

    footer {
        flex-direction: column;
    }

    .leftBox,
    .centerBox,
    .rightBox {
        width: 100%;
    }

    .leftBox {
        order: 2;
        padding-top: 50px;
    }

    .centerBox {
        order: 1;
        flex-direction: column;
    }

    .rightBox {
        order: 3;
        padding-top: 50px;
    }
}

@media (min-width: 701px) and (max-width: 1199px) {
    footer {
        margin-top: 100px;
    }

    footer>section {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .vague {
        bottom: 20%;
        display: none;
    }

    .leftBox {
        width: 40%;
        order: 2
    }

    .rightBox {
        width: 40%;
        order: 3;
        padding-left: 40px;
    }

    .logo {
        width: 100%;
        padding: 0 30vw;
    }

    .centerBox {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        order: 1;
        margin-bottom: 50px;
    }
}

@media (min-width: 1200px) {
    footer {
        margin-top: 100px;
    }

    .vague {
        bottom: 20%;
    }

    .leftBox,
    .rightBox {
        width: 40%;
    }

    .rightBox {
        padding-left: 40px;
    }

    .centerBox {
        width: 20%;
        flex-direction: column;
        justify-content: flex-end;
    }
}
</style>