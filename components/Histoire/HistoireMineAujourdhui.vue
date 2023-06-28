<template>
    <div class="sectionBoxSloted whiteSection w100">
        <SectionTitleBar title="La mine aujourd'hui." />

         <div class="sectionContent sectionBox w100 marTop50">
            <div class="mainWidth flex justifyCenter wrap gap20">
                
                <div class="sectionBlock flex column gap20">
                    <div class="marTop20"></div>
                    <SectionShoeBox image="/images/histoire/musée 1.jpg" :localImage="true" />

                    <div class="page-text gap5">
                        <p> 
                            Pour plus de renseignements concernant ces mines, vous pouvez contacter les organismes suivants :
                            <br><br>
                            ASAM (association de sauvegarde de l’ancienne mine) organise, à la
                            demande, des visites guidées pour des groupes
                        </p>

                        <div class="flex column gap5">
                            <p class="flex alignCenter gap10"> <span class="icon">language</span><a class="externalLink" target="_blank" href="https://minelocmariaberrien.com">minelocmariaberrien.com</a> </p>

                            
                            <p class="flex alignCenter gap10"> <span class="icon">mail</span><a class="" href="mailto:asamlb@hotmail.fr">asamlb@hotmail.fr</a> </p>
                            <p class="flex alignCenter gap10"> 
                                <span class="icon">call</span>
                                <span>Mairie Locmaria-Berrien : 02.98.99.73.09</span>
                            </p>

                            <p class="flex alignCenter gap10"> 
                                <span class="icon">call</span>
                                <span>Mairie Poullaouen : 02.98.93.50.76</span>
                            </p>
                        </div>
                    </div>
                    <div class="marTop20"></div>
                </div>

                <div class="sectionBlock">
                    <div class="marTop20"></div>
                    <p class="longText page-text h100">
                        En raison de l’essor du réseau ferré, les mines ferment les unes après
                        les autres : en 1866 à Poullaouen, en 1873 à Huelgoat.
                        <br><br>
                        Des tentatives de réexploitation furent réalisées par la Société des
                        Mines de Pontpéan en 1906, puis par la Société de Pontgibaud, et
                        par celle de Congolin. Cependant, l’exploitation ne reprendra jamais
                        significativement.
                        <br><br>
                        L’arrêt définitif survient en 1934.
                        <br><br>
                        Aujourd’hui, les communes de Poullaouen et Huelgoat ne disposent
                        plus d’aucune trace de minerais.
                        <br><br>
                        Les mines de plomb argentifère de Poullaouen, Locmaria-Berrien et
                        Huelgoat font désormais partie du patrimoine historique du centre
                        finistère. Ces communes ne disposent actuellement que de quelques
                        traces de ces mines, vestiges que l’Association de sauvergarde de
                        l’ancienne mine (l’ASAM) à Locmaria-Berrien et quelques passionnés,
                        cherchent à sauvegarder.
                        <br><br>
                        Des expositions, des maquettes et de nombreux documents d’archives
                        donnent vie aux vestiges, eux-mêmes bien conservés.
                        <br><br>
                        Bibliographie :
                        <br><br>
                        Monographie Jean MONOT de l’ASAM <br>

                        1 -Les Mines de Poullaouen - Huelgoat - Locmaria Berrien : Jacques LE BOULANGER - septembre 1994. <br>

                        2 - Thèse de 3ème cycle réalisée à Brest en 1972 par M Edmond MONANGE sur le thème « entreprise industrielle au 18ème siècle ».<br>

                        3 - Les Mines de Huelgoat - Poullaouen : Michel PENVEN (Association «sur les traces de François JONCOUR») - Mars 1989 <br>

                        4 - Revue MICHERIOUZ KOZ : magazine des vieux métiers de Bretagne - «Les mineurs de Poullaouen & de Locmaria-Berrien» - 1er numéro : octobre, novembre, décembre 2002
                    </p>

                    <div class="marTop20"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.longText {
    padding: 20px;
}
.sectionBlock {
    width: min(550px, 100%);
}
</style>