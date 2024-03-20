<template>
    <section class="mainWidth">
        <div class="contentBox">
            <h1>
                Demandes d'autorisation d'urbanisme
            </h1>

            <p class="first">
                Toutes les demandes d’autorisation d’urbanisme pour Poullaouen et le Poher peuvent être déposées en ligne via guichet unique sur le site de Poher communauté.
            </p>
            
            <h2 class="">
                Démarches concernées: 
            </h2>

            <ul>
                <li>Certificat d’urbanisme (CU)</li>
                <li>Déclaration de cession (DC)</li>
                <li>Déclaration préalables (DP)</li>
                <li>Déclaration d’intention d’aliéner (DIA)</li>
                <li>Permis d’aménager (PA)</li>
                <li>Permis de construire (PC)</li>
                <li>Permis de démolir (PD)</li>
            </ul>

            <div class="buttonBox centered">
                <a class="flex column" href="https://pohercommunaute.geosphere.fr/guichet-unique/" target="_blank">
                    <span>ACCEDER AU</span>
                    <span>GUICHER UNIQUE</span>
                </a>
            </div>

            <p class="second">
                Le dépôt des demandes en version papier directement auprès de nos services reste toujours possible.
            </p>
        </div>
    </section>
</template>

<style scoped>
h1 {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
}
.contentBox {
    background-color: var(--dark-blue);
}
.contentBox * {
    color: white;
}
.contentBox {
    width: min(100%, 900px);
    padding: clamp(25px, 5vw, 40px);
    border-radius: clamp(10px, 3vw, 30px);
    margin: 100px auto;
}

h2 {
    font-size: 20px;
    margin-top: 30px;
}
p, ul {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 500;
    line-height: 1.5;
}
p.first {
    margin-top: 10px;
}
p.second {
    margin-top: 40px;
}
ul {
    padding-left: 50px;
    margin-top: 20px;
}

a {
    
    background-color: var(--light-blue);
    padding: 15px 20px;
    border-radius: 10px;
}
a:hover {
    opacity: 0.8;
}
a span:nth-child(1) {
    font-size: 18px;
    font-weight: 400;
}
a span:nth-child(2) {
    font-size: 20px;
    font-weight: 700;
}
</style>