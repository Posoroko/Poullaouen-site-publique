<template>
    <HeaderMain :data="headerData" />

    <main class="mainRandonnee">
        <div class="mainWidth intro-text">
            <p>« L’unique moyen de savoir jusqu’où l’on peut aller, c’est de se mettre à marcher. » </p>
            <br>
            <p class="centered">Henri BERGSON.</p>
        </div>

        <div class="centered mapFrame">
            <img class="mainWidth map" src="/images/randonnee/les-chemins-de-randonnée-de-Poullaouen.jpg" alt="les chemins de randonnée de Poullaouen">
        </div>

        <SectionMainSloted :data="section1Data">
            <p class="subtitle">Circuit 1 : Le bois de Lemezec - Poullaouen</p>

            <SectionRandoTopBox :data="section1TopBoxData" />

            <ul class="randoList flex column gap5">
                <li>Départ de Lemezec (avant le pont), prendre le chemin forestier
                    qui longue l’Aulne, quitter le chemin qui monte vers Lemezec
                    Huella.</li>
                <li>Continuer jusqu’à l’orée du bois.</li>
                <li>Prendre en face, la montée dans le bois.</li>
                <li>Arrivée au point culminant à 162 mètres,</li>
                <li>Tourner à gauche à la sortie de la clairère, vous déboucherez
                    sur un chemin plus important; pour le petit parcours de 5 km
                    prendre ce chemin à droite; variante pour les circuits de 12 et 14
                    km, monter le chemin à gauche.</li>
                <li>Arrivée à l’orée du bois, descendre vers le village de Restmilzou.</li>
                <li>Laisser le village à gauche et emprunter la petite route
                    d’exploitation qui mêne au sud du bois. Pour le circuit de 12
                    kms prendre à droite la petite route forestière qui longe l’Aulne
                    en bas du bois en passant à proximité de la carrière du Goasq.</li>
                <li>Rejoindre le point C. Pour celui de 14 kms.</li>
                <li>Prendre à gauche, marcher 1 km et amorcer un virage pour
                    emprunter un ancien chemin d’exploitation qui grimpe vers
                    le village de Kerloaguen. traverser le village, tourner à gauche,
                    prendre le chemin qui passe entre deux bâtiments, redescendre
                    vers le point de jonction G.</li>
            </ul>

            <div class="moreInfo topGreen">
                <p class="flex alignCenter gap10">carte: <span class="icon"> visibility</span>  consulter <span class="icon"> download</span> télécharger</p>
            </div>
        </SectionMainSloted>

        <SectionMainSloted :data="section2Data">
                <p class="subtitle">Circuit 2 : Le petit train - Poullaouen</p>
                <SectionRandoTopBox :data="section2TopBoxData" />
    
                <ul class="randoList flex column gap5">
                    <li>Quitter la place de l’église par la rue du Pont Pierre.
                        Au stop, prendre à droite sur quelques mètres et emprunter à droite
                        l’ancienne voie ferrée désaffectée depuis 1967. Continuer jusqu’au
                        pont sur l’Aulne. Sa construction remonte à 1860.</li>
                    <li>Passé le pont, tourner immédiatement à gauche pour emprunter
                        le GR47. Parcourez environ 3km en longeant d’un côté la rivière,
                        de l’autre, le bois de Botvarec. Noter que la forêt est en cours de
                        reboisement suite à l’ouragan e 1987.</li>
                    <li>Prendre à gauche pour repasser sur la rive poullaouennaise.</li>
                    <li>Pont Pierre. Point d’information, aire de repos.</li>
                    <li>Emprunter le chemin rural qui mène aux ruines d’un moulin.
                        Continuer à traverser la campagne longée à gauche par la vallée
                        de l’Aulne.</li>
                    <li>Rejoindre la voie de chemin de fer.</li>
                </ul>
    
                <div class="moreInfo topGreen">
                    <p class="flex alignCenter gap10">carte: <span class="icon"> visibility</span>  consulter <span class="icon"> download</span> télécharger</p>
                </div>
            </SectionMainSloted>

        <SectionMainSloted :data="section3Data">
            <p class="subtitle">Circuit 3 : Botvarec - Locmaria-Berrien</p>

            <SectionRandoTopBox :data="section3TopBoxData" />

            <ul class="randoList flex column gap5">
                <li>Prendre la rue des lavandières en passant devant le lavoir.</li>
                <li>Monter en haut du bourg, puis prendre le chemin d’exploitation à droite.</li>
                <li>Descendre jusqu’à la Départementale, la traverser, passer devant l’ancienne «Auberge de la Truite « pour accéder à la Gare.</li>
                <li>Emprunter la voie verte à droite, traverser la départementale, continuer sur la voie verte.</li>
                <li>Après environ 500m, quitter la voie et descendre à droite avant le
                    pont en fer (point de vue sur l’Aulne) pour longer l’Aulne sur la rive
                    droite pendant environ 1.5 km .</li>
                <li>Il faut donc environ 400m avant d’arriver à la route emprunter un
                    petit chemin à droite qui remonte vers la maison forestière.</li>
                <li>Monter jusqu’à l’intersection prendre à droite suivre le balisage jaune.</li>
                <li>A noter : Manque un balisage à l’intersection de 3 chemins au bord du petit bois : rester sur la gauche.</li>
                <li>Prendre sur la droite le chemin qui mène aux stèles gauloises</li>
                <li>Suivre le balisage jusqu’au village de Kerliou. Passer les poulaillers, prendre à droite pour rejoindre la route.</li>
                <li>Rester sur la route jusqu’au bourg, mis à part le petit chemin très ombragé, à droite, à hauteur du lac qui évite le virage en épingle.</li>
            </ul>

            <div class="moreInfo topGreen">
                <p class="flex alignCenter gap10">carte: <span class="icon"> visibility</span>  consulter <span class="icon"> download</span> télécharger</p>
            </div>
        </SectionMainSloted>
    
        <SectionMainSloted :data="section4Data">
            <p class="subtitle">Circuit 4 : Les 2 vallées - Locmaria-Berrien</p>

            <SectionRandoTopBox :data="section4TopBoxData" />

            <ul class="randoList flex column gap5">
                <li>Prendre la rue des lavandières en passant devant le lavoir.</li>
                <li>Monter en haut du bourg, puis prendre le chemin d’exploitation à droite.</li>
                <li>Descendre jusqu’à la Départementale, la traverser, passer devant l’ancienne «Auberge de la Truite» pour accéder à la Gare.</li>
                <li>Emprunter la voie verte à gauche sur environ 1.7km (possibilité
                    d’emprunter un petit chemin en parallèle au -dessus de la voie verte
                    à partir du pont où la Rivière d’Argent se jette dans l’Aulne).</li>
                <li>Quitter la voie verte à gauche direction Kersaliou Laurent en
                    empruntant un chemin très encastré (passage par le champ en cas
                    de boue).</li>
                <li>Traverser le village, rester sur la route jusqu’à la 2ème intersection,
                    puis prendre le 1er chemin à gauche.</li>
                <li>Descendre jusqu’à la départementale, l’emprunter à gauche sur
                    environ 300m.</li>
                <li>Après le pont, entrer dans la forêt, à droite. Monter jusqu’à l’intersection
                    avec l’indication «circuit des 2 vallées».(Possibilité de descendre sur
                    le site de la Mine qui se trouve à 200m. Prévoir une côte assez raide
                    pour reprendre le balisage). C’est à partir d’ici qu’il faut suivre le
                    balisage GR rouge et blanc.</li>
                <li>Monter vers la gauche pratiquement jusqu’en haut du bois. (Possibilité
                    de quitter le circuit pour visiter la galerie, la roue et découvrir les
                    explications du site de l’Association de Sauvegarde de l’Ancienne
                    Mine, Musée à visiter au Bourg.)</li>
                <li>Juste avant d’arriver au plateau, prendre le chemin à gauche, jusqu’au
                    village du Bruguet (village en 2 parties).</li>
                <li>Passer devant la maison en pierre et prendre le chemin d’exploitation
                    jusqu’au village de Kerliou Vraz.</li>
                <li>Prendre à droite pour rejoindre la route, l’emprunter à gauche pour
                    rejoindre le bourg en suivant toujours le balisage GR rouge et blanc.</li>
            </ul>

            <div class="moreInfo topGreen">
                <p class="flex alignCenter gap10">carte: <span class="icon"> visibility</span>  consulter <span class="icon"> download</span> télécharger</p>
            </div>
        </SectionMainSloted>
    </main>
</template>
<script setup>

const section1Data = {
    title: "Les circuits de Poullaouen",
    image: "/images/randonnee/bois de lemezec.jpg",
    imageAlt: "Cartes des chemins de randonnée de Poullaouen",
    localImage: true
}
const section1TopBoxData = {
    length: "5, 12 ou 14 km",
    time: "1h30, 3h ou 3h30",
    types: ["hiking", "horse"],
    legend: "5 kms = bleu, 12 kms = jaune, 14 kms = jaune et orange",
    start: "Avant le pont de Lemezec"

}
const section2Data = {
    title: null,
    image: "/images/randonnee/circuit le petit train.jpg",
    imageAlt: "Cartes circuit le petit train",
    localImage: true
}
const section2TopBoxData = {
    length: "12 km",
    time: "3h",
    types: ["hiking", "horse", "pedal_bike"],
    legend: "balises Jaunes",
    start: "Place de l’église"

}
const section3Data = {
    title: "Les circuits de Locmaria-Berrien",
    image: "/images/randonnee/circuit Botvarec.jpg",
    imageAlt: "circuit de randonnée de Locmaria-Berrien",
    localImage: true
}
const section3TopBoxData = {
    length: "9 km",
    time: "2h15",
    types: ["hiking", "horse", "pedal_bike"],
    legend: "Jaune, rouge et blanc",
    start: "Parking du bourg près de l'église"

}
const section4Data = {
    title: null,
    image: "/images/randonnee/bois de lemezec.jpg",
    imageAlt: "Cartes des chemins de randonnée de Poullaouen",
    localImage: true
}
const section4TopBoxData = {
    length: "5, 12 ou 14 kms",
    time: "1h30, 3h ou 3h30",
    types: ["hiking", "horse"],
    legend: "5 kms = bleu, 12 kms = jaune, 14 kms = jaune et orange",
    start: "Avant le pont de Lemezec"

}
const headerData = {
    images: [
        {
            src: "/images/header/randonnee/randonnee1.jpg",
            alt: 'Aire de loisir de Poullaouen',
        }
    ],
    title: 'Les chemins de randonnée',
    path: [
        {
            text: 'Accueil',
            target: '/'
        },
        {
            text: 'Mes sorties',
            target: `/mes-sorties/`
        },
        {
            text: "Les chemins de randonnée",
            target: `/mes-sorties/chemins-de-randonnee`
        }
    ]
}
const applyStyleClasses_utils = () => {

    const sections = document.querySelectorAll('.sectionBoxSloted')

    for (let i = 1; i < sections.length; i = i + 4) {
        sections[i].classList.replace('whiteSection', 'blueSection')
    }
    for (let i = 3; i < sections.length; i = i + 4) {
        sections[i].classList.replace('whiteSection', 'brownSection')
    }
}
onMounted(() => {
    applyStyleClasses_utils()
})
</script>

<style>

.mapFrame .map {
    /* width: min(900px, 95vw); */
    height: 80vh;
}


.subtitle {
    font-weight: 700;
    color: var(--brown);
    margin: 20px 0;
}
.randoList,
.moreInfo {
    margin-top: 20px;
}
.randoList li {
    font-size: 13px;
    list-style: disc;
}
</style>