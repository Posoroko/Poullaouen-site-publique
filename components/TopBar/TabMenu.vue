<template>        
    
    <ul class="tabBox flex alignCenter">
        <li class="tab pointer" name="mairie" @click.prevent="openMenu">
            <p class="article">MA</p>
            
            <p class="name">MAIRIE</p>
        </li>

        <div class="line"></div>
    
        <li class="tab pointer" name="quotidien" @click.prevent="openMenu">
            <p class="article">MON</p>
    
            <p class="name">QUOTIDIEN</p>
        </li>

        <div class="line"></div>
    
        <li class="tab pointer" name="sorties" @click.prevent="openMenu">
            <p class="article">MES</p>
    
            <p class="name">SORTIES</p>
        </li>

        <div class="line"></div>
    
        <li class="tab pointer" name="infos" @click.prevent="openMenu">
            <p class="article">MES</p>
    
            <p class="name">INFOS</p>
        </li>

        <div class="line"></div>
    
        <li class="tab pointer" name="demarches" @click.prevent="openMenu">
            <p class="article">MES</p>
    
            <p class="name">DEMARCHES</p>
        </li>
    </ul>

    <nav class="menuPanel absolute" v-if="menuIsOpen">
        <div class="imageBox">
            <img :src="menuImageRef" alt="mairie de Poullaouën">
        </div>

        <div class="linkBox">
            <ul class="linkList">
                <li class="link pointer" v-for="link in menuContent">
                    <nuxt-link class="block w100" :to="link.path" @click="closeMenu">
                        {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <span class="icon absolute top right pointer" @click="closeMenu">close</span>
    </nav>
</template>

<script setup>

const menuIsOpen = ref(false)
const menuContent = ref('')
const menuImageRef = ref('')

const links = {
    mairie: [
        {
            text: "L'équipe municipale",
            path: "/ma-mairie/equipe-municipale"
        },
        {
            text: "Le centre communal d'action sociale (CCAS)",
            path: "/ma-mairie/ccas"
        },
        {
            text: "Les salles municipales",
            path: "/ma-mairie/salles-municipales"
        },
        {
            text: "Les bulletins municipaux",
            path: "/ma-mairie/bulletins-municipeaux"
        },
        {
            text: "Les comptes rendus du conseil muninicipal",
            path: "/ma-mairie/comptes-rendus-du-conseil-municipal"
        },
        {
            text: "Les publications réglementaires",
            path: "/ma-mairie/publications-reglementaires"
        }
    ],
    quotidien: [
        {
            text: "L'école municipale",
            path: "/mon-quotidien/ecole-municipale"
        },
        {
            text: "Les associations",
            path: "/mon-quotidien/associations"
        },
        {
            text: "La médiathèque",
            path: "/mon-quotidien/mediatheque"
        },
        {
            text: "Les equipements sportifs et loisir",
            path: "/mon-quotidien/equipements-sportifs-et-de-loisir"
        },
        {
            text: "Les commerces et entreprises",
            path: "/mon-quotidien/commerces-et-entreprises"
        }
    ],
    sorties: [
        {
            text: "Histoire",
            path: "/mes-sorties/histoire"
        },
        {
            text: "Patrimoine",
            path: "/mes-sorties/patrimoine"
        },
        {
            text: "Les chemins de randonnée",
            path: "/mes-sorties/chemins-de-randonnee"
        },
        {
            text: "Se loger, se restaurer",
            path: "/mes-sorties/se-loger-se-restaurer"
        },
        {
            text: "Vilage fleuri",
            path: "/mes-sorties/village-fleuri"
        },
        {
            text: "Loisirs",
            path: "/mes-sorties/loisirs"
        }
    ],
    infos: [
        {
            text: "Les transport",
            path: "/mes-infos/transports"
        },
        {
            text: "Se loger",
            path: "/mes-infos/se-loger"
        },
        {
            text: "Le plan local d'urbanisme (PLU)",
            path: "/mes-infos/plan-local-d-hurbanisme"
        },
        {
            text: "Eau et assainissement",
            path: "/mes-infos/eau-et-assainissement"
        },
        {
            text: "Gestion des déchets",
            path: "/mes-infos/gestion-des-dechets"
        }
    ],
    demarches: [
        {
            text: "Vos démarches",
            path: "/mes-demarches/toutes-les-demarches"
        }
    ]
}

const openMenu = (e) => {
    menuContent.value = links[e.currentTarget.getAttribute('name')]  
    menuImageRef.value = `images/menu/${e.currentTarget.getAttribute('name')}.jpg`

    if(!menuIsOpen.value) {
        menuIsOpen.value = true
        setTimeout(() => {
            window.addEventListener('click', handleWindowClick, true)
        }, 10)   
    }
}

const handleWindowClick = (e) => {
    
    if (e.target.closest(".menuPanel") == null) {
        console.log('hello')
        closeMenu()
    }
}

const closeMenu = () => {
    menuIsOpen.value = false
    window.removeEventListener('click', handleWindowClick, true)
}



</script>

<style>
.tab {
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 300ms ease;
}
    
.tab:hover {
    background-color: #0184d525;
    transition: 300ms ease;
}

.tabBox .line {
    height: 30px;
    border: 1px solid var(--brown);
}

.article {
    font-size: max(12px, 1.5vw);
    color: var(--light-blue);
}
.name {
    color: var(--dark-blue);
    font-size: max(12px, 1.5vw);
    font-weight: 700;
}

.menuPanel {
    padding: 10px;
    padding-right: 30px;
    border-radius: 5px;
    margin-top: 30px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.589);
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}
.linkList {
    padding: 0 10px;
}
.link {
    font-size: 20px;
    padding: 4px 5px;
    border-bottom: 1px solid var(--brown);
    transition: 300ms ease;
}
.link:hover {
    background-color: #0184d525;
    transition: 300ms ease;
}
.menuPanel .icon {
    font-size: 24px;
    margin: 10px;
}
</style>