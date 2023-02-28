<template>
    <header>
        <HeaderPathBar :path="path" />
        <HeaderTItleBar title="Mentions légales" />
    </header>

    <main class="mainMentions">
            
        <div class="mainWidth marTop50">
            <h2>Ce site internet est la propriété de la Mairie de Poullaouen : </h2>
            
            <address>
                Mairie de Poullaouen
                1 Place de la Mairie
                29246 Poullaouen
                Tel : 02 98 93 50 
                mairie-de-poullaouen@wanadoo.fr
            </address>
            
            <p>
                <b>Directeur de publication :</b> Didier Goubil – Maire de la commune.​ <br>
                <b>Chargés de la rédaction :</b> Nicole Tanguy,  élue déléguée à la communication, 
                Catherine Moreau, secrétaire de Mairie et Anthony Le Cam, directeur de l’école 
                publique.
            </p> 

            <h2>CRÉDITS-PHOTOS </h2>

            <p>Les photos et autres illustrations font l’objet de droits réservés. </p>
            <p><b>Crédits photos :</b> ©Mairie de Poullaouen / ©Eric Le Gret / ©Com Kreiz / ©Carhaix 
                Golf / ©Cinéma Le Grand Bleu / ©La Vallée des Saints / ©Office de tourisme de 
                Carhaix et du Poher / ©Mairie de Carhaix / ©Poher Communauté /©Monts d’Arrée 
                tourisme. 
            </p>
            <h2>CONCEPTION DU SITE </h2>
            <h3>Web Designer </h3>
            <address>
                Com Kreiz <br>
                74, allée des peupliers – 29270 Carhaix​<br>
                06 72 77 44 83 <br>
                https://www.comkreiz.com/<br>
            </address>

            <h2>Développeur web et hébergeur </h2>
            <address>
                Studio Posoroko<br>
                24, rue de Kerven – 29270 Carhaix​<br>
                06 95 07 12 64<br>
                eric@posoroko.com<br>
                https://www.posoroko.com<br>
            </address>

            <h2>DROITS DE REPRODUCTION </h2>
            <p>
                Ce site est protégé par la législation française et internationale par le droit d’auteur et 
                la propriété intellectuelle. Toute copie, représentation, adaptation, diffusion, intégrale 
                ou partielle, du contenu du site est illicite à l’exception d’une unique copie réservée à 
                l’usage privé de l’utilisateur. Les informations contenues dans ce site sont présentées 
                à titre purement informatif et sont non contractuelles. La Mairie de Poullaouen ne 
                saurait être tenue responsable pour toute erreur ou omission dans les textes et 
                illustrations du site. Toute représentation et/ou reproduction et/ou exploitation 
                partielle ou totale de ce site, par quelques procédés que ce soit, sans l’autorisation 
                expresse et préalable de la Mairie sont interdites et constitueraient une contrefaçon 
                au sens des articles L 335-2 et suivants du code de la propriété intellectuelle. 
            </p>
            
            <h2>CONFIDENTIALITÉS – LOI INFORMATIQUE ET LIBERTÉS </h2>
            <p>
                Soucieux de préserver votre intimité, nous nous engageons expressément à ne pas 
                divulguer à des tiers les informations que vous nous communiquez dans le cadre de 
                ce site internet. 
                Conformément à la loi française (article 27 de la loi n° 78.17 du 06/01/1978 relative à 
                l’informatique, aux fichiers et aux libertés) vous disposez d’un droit d’accès, de 
                modification, de rectification et de suppression des données personnelles 
                conservées. Pour l’exercer, contactez-nous par courrier à l’adresse ci-dessus. 
            </p>
            <h2>ABSENCE DE GARANTIE</h2> 
            <p>
                Nous mettons en place tous les moyens nécessaires pour vous apporter une 
                information fiable et actualisée. Cependant, malgré le soin que nous apportons à la 
                mise à jour de ce site, des erreurs ou omissions peuvent être présentes. En 
                conséquence, l’éditeur ne peut être tenu responsable. Nous ne garantissons pas le 
                contenu des sites Internet vers lesquels nous pointons. 
            </p>
            <h2>LIEN </h2>
            <p>
                Certaines pages peuvent contenir des liens vers des sites externes à ce site. La 
                Mairie de Poullaouen ne réalise pas de contrôle sur ces sites, par conséquent, elle 
                n’assume aucune responsabilité quant à la disponibilité de ces sites, leurs contenus, 
                publicités, produits ou services disponibles à partir de ces sites. L’accès à d’autres 
                sites externes au site <a href="https://www.mairie-de-poullaouen.fr">https://www.mairie-de-poullaouen.fr</a> se fait donc sous l’entière 
                responsabilité de l’utilisateur qui les consulte. 
            </p>
        </div>
    </main>
</template>

<script setup>
const path = ref([
    {
        text: "Accueil",
        link: "/"
    },
    {
        text: "Mentions légales",
        link: "/Mentions-légales"
    }
])

</script>

<style scoped>
h2, h3, address, p {
    padding-top: 30px;
}
</style>


