<template>
    <footer id="footer" class="relative">
        <div class="footerContainer mainWidth flex justifyEvenly alignStart wrap h100 ">
            

            <div class="leftBox footerBox flex column justifyEnd gap20" id="footerInfo">
                <address class="flex column gap10">
                    <p class="poullaouen">
                        Poullaouen
                    </p>

                    <div class="address flex"> 
                        <p class="icon adIcon">pin_drop</p> 

                        <p>1 Place de la Mairie - 29246 Poullaouen</p>
                    </div>

                    <p class="tel">
                        <span class="icon adIcon">call</span>

                        <span>02 98 93 50 76</span>
                    </p>

                    <p class="mail"> 
                        <span class="icon adIcon">alternate_email</span>

                        <span>mairie-de-poullaouen@wanadoo.fr</span>
                    </p>

                    <div class="horraire flex">
                        <p class="icon adIcon">schedule</p>

                        <div>
                            <p>Du lundi au vendredi : <br>
                                 de 8h30 à 12h et de 13h30 à 17h30</p>

                            <p>
                                Fermée au public le lundi matin
                                et le jeudi après-midi
                            </p>
                        </div>
                    </div>
                </address>

                <div class="phoneBox w100 footerBox flex justifyCenter alignCenter wrap gap5">
                    <div class="flex gap5">
                        <a href="tel:+33298935076" class="phoneBtn flex column justifyCenter alignCenter">
                            <span class="icon">call</span>
                            <span class="city">Poullaouen</span>
                        </a>

                        <a href="tel:+33298997309" class="phoneBtn flex column justifyCenter alignCenter">
                            <span class="icon">call</span>
    
                            <span class="city">Locmaria-Berrien</span>
                        </a>
                    </div>
                </div>
            </div>

            

            <div class="centerBox footerBox flex">
                <div class="w100 flex justifyCenter marTop100">
                    <img class="footerLogo" src="/images/logo-poullaouen-trimmed.svg" alt="logo de la Commune de Poullaouën">
                </div>
                <a href="https://www.facebook.com/profile.php?id=100064790073995" target="_blank" class="button flex alignCenter justifyCenter faceBookBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="iconBox">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>

                    <b class="centered">Suivez-nous !</b>
                </a>
            
                <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="button centered " id="envoyerUnMail">
                    Envoyer un mail
                </a>

                <a href="https://www.poher.bzh/accueil_poher" target="_blank" class="button centered">
                    Poher communauté
                </a>
            </div>

            <div class="rightBox footerBox  flex column justifyEnd gap20">
                <address class="flex column gap10">
                    <p class="poullaouen">
                        Locmaria-Berrien
                    </p>

                    <p class="address flex alignCenter">
                        <span class="icon adIcon">pin_drop</span>
                        <span>3 rue Ti Ker - 29690 Locmaria- Berrien</span>
                    </p>

                    <p class="tel">
                        <span class="icon adIcon">call</span>
                        <span>02 98 99 73 09</span>
                    </p>

                    <p class="mail"> 
                        <span class="icon adIcon">alternate_email</span>
                        <span>mairie.locmaria-berrien@orange.fr</span>
                    </p>

                    <div class="horraire flex"> 
                        <span class="icon adIcon">schedule</span>
                        <div>
                            <span>Lundi de 8h30 à 12h</span>
                            <br>
                            <span>Jeudi de 13h30 à 17h30</span>
                        </div>
                    </div>
                </address>

                <div class="phoneBox w100 footerBox flex justifyCenter alignCenter wrap gap5">
                    <div class="flex gap5">
                        <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="phoneBtn flex column justifyCenter alignCenter">
                            <span class="icon">mail</span>

                            <span class="city">Poullaouen</span>
                        </a>

                        <a href="mailto:mailto:mairie.locmaria-berrien@orange.fr" class="phoneBtn flex column justifyCenter alignCenter">
                            <span class="icon">mail</span>

                            <span class="city">Locmaria-Berrien</span>
                        </a>
                    </div>
                </div>
            </div>

            
        </div> 
        

        <div class="bottomBar w100 ">
            <div class="mainWidth flex justifyEvenly wrap">
                <NuxtLink class="bottomLink" to="/">ACCUEIL</NuxtLink>
                <!-- <div class="line"></div> -->
                <NuxtLink class="bottomLink" to="/plan-du-site">PLAN DU SITE</NuxtLink>
                <!-- <div class="line"></div> -->
                <NuxtLink class="bottomLink" to="/mentions-legales">MENTIONS LEGALES</NuxtLink>
                <!-- <div class="line"></div> -->
                <NuxtLink class="bottomLink" to="https://www.comkreiz.com/" target="_blank">WEB DESIGN : COM KREIZ</NuxtLink>
                <!-- <div class="line"></div> -->
                <NuxtLink class="bottomLink" to="https://www.posoroko.com/" target="_blank" >DEVELOPPEMENT :  STUDIO POSOROKO</NuxtLink>
            </div>
        </div>
        <img class="absolute vague" src="/images/vague.svg">
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footerLogo {
    margin: auto;
}

.bottomBar{
    color: white;
    background-color: var(--brown);
    padding: 10px;
    margin-top: 50px;
}
.bottomBar *{
    font-size: 13px;
    font-weight: 400;
    color: white;
}
.bottomLink{
    text-decoration: underline;
}

#footer {
    margin-top: 25vw;
}
.phoneBox {
    margin: 0 auto;
}
@media (max-width: 719px) {
    #envoyerUnMail {
        display: none;
    }
}
@media (min-width: 719px) {
    .phoneBox {
        display: none;
    }
}
.footerContainer {
    align-items: space-evenly;
}

.leftBox, .rightBox {
    margin-top: 10vw;
}
.phoneBox .phoneBtn {
    width: 125px;
    aspect-ratio: 1/1;
    color: white;
    background-color: var(--dark-blue);
    padding: 20px 0;
    border-radius: 15px;
}
.phoneBox .phoneBtn .icon {
    color: white;
    aspect-ratio: 1/1;
    font-size: 40px;
    text-align: center;
}
.phoneBox .phoneBtn .city {
    color: white;
    font-size: 16px;
    text-align: center;
}

.poullaouen {
    font-size: 20px;
    font-weight: 600;
    font-style: normal;

}

.address,
.tel,
.mail,
.horraire {
    font-size: 16px;
    font-style: normal;

    margin-top: 10px;
    position: relative;
}

.adIcon {
    font-style: normal;
    margin-right: 15px;
}

.centerBox .button {
    /* height: 50px; */
    color: white;
    background-color: var(--dark-blue);
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 20px;
}

.iconBox {
    width: 35px;
    height: 20px;
    fill: white;
}
.faceBookBtn *{
    color: white;
}
.vague {
    opacity: 0.7;
    z-index: -1;
}

@media (max-width: 700px) {
    .footerLogo {
        width: 200px;
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
    .footerLogo {
        width: 300px;
    }
    .vague {
        bottom: 0;
        display: none;
    }

    .leftBox {
        width: 40%;
        order: 2
    }

    .rightBox {
        width: 40%;
        order: 3;
        /* padding-left: 40px; */
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

    .footerLogo {
        width: 100%;
    }
    .vague {
        bottom: 30vh;
    }

    .leftBox,
    .rightBox {
        width: 30%;
    }

    .centerBox {
        width: 20%;
        flex-direction: column;
        justify-content: flex-end;
    }
}
</style>