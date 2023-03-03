<template>        
    
    <ul class="tabBox flex alignCenter">
        <li class="tab tabBasic pointer" data-name="mairie" @click.prevent="openMenu">
            <p class="article">MA</p>
            
            <p class="name">MAIRIE</p>
        </li>

        <li class="line"></li>
    
        <li class="tab tabBasic pointer" data-name="quotidien" @click.prevent="openMenu">
            <p class="article">MON</p>
    
            <p class="name">QUOTIDIEN</p>
        </li>

        <li class="line"></li>
    
        <li class="tab tabBasic pointer" data-name="sorties" @click.prevent="openMenu">
            <p class="article">MES</p>
    
            <p class="name">SORTIES</p>
        </li>

        <li class="line"></li>
    
        <li class="tab tabBasic pointer" data-name="infos" @click.prevent="openMenu">
            <p class="article">MES</p>
    
            <p class="name">INFOS</p>
        </li>
    
        <li class="tab pointer tabDemarches relative" data-name="demarches">
            <NuxtLink to="https://www.service-public.fr/particuliers/vosdroits/comment-faire-si">
                <p class="article">MES</p>
    
                <p class="name">DEMARCHES</p>

                <div class="info">
                    <p>Cliquez ici pour accéder à toutes les démarches en ligne</p>
                    <img src="/images/Service-public-logo.png" alt="">
                </div>
            </NuxtLink>
        </li>
    </ul>

    <nav class="menuPanel absolute" v-if="menuIsOpen">
        <div class="imageBox">
            <img class="objectFitCover" :src="menuImageRef" alt="mairie de Poullaouën">
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

const props = defineProps({
    links: Object
})



const openMenu = (e) => {
    menuContent.value = props.links[e.currentTarget.getAttribute('data-name')]  
    menuImageRef.value = `/images/menu/${e.currentTarget.getAttribute('data-name')}.jpg`

    if(!menuIsOpen.value) {
        menuIsOpen.value = true
        setTimeout(() => {
            window.addEventListener('click', handleWindowEvents, true)
            window.addEventListener('scroll', handleWindowEvents, true)
        }, 10)   
    }
}

const handleWindowEvents = (e) => {
    //close menu on scroll
    if (e.type == "scroll") {
        closeMenu()
        return
    }
     
    //close menu on click outside of the menu
    if (e.target.closest(".menuPanel") == null) {
        closeMenu()
    }
}

const closeMenu = () => {
    menuIsOpen.value = false
    window.removeEventListener('click', handleWindowEvents, true)
}



</script>

<style scoped>
.tabBox .tab {
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 300ms ease;
}
    
.tabBox .tabBasic:hover {
    background-color: var(--dark-blue);
    transition: 300ms ease;
    box-shadow: var(--shadow);
}
.tabBox .tabBasic:hover * {
    color: white;
}
.tabBasic{
    margin: 10px 25px;
}
.tabBasic .article {
    font-size: max(16px, 1vw);
    color: var(--light-blue);
}
.tabBasic .name {
    font-size: max(18px, 1.2vw);
    font-weight: 700;
}


.tabDemarches {
    margin: 10px 25px 10px 100px;
    background-color: var(--light-blue);
 }
 .tabDemarches:hover {
    background-color: var(--dark-blue);
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    transition: 300ms ease;
    box-shadow: var(--shadow);
 }
.tabDemarches .article {
    font-size: max(16px, 1vw);
    color: white;
}
.tabDemarches .name {
    color: white;
    font-size: max(18px, 1.2vw);
    font-weight: 700;
}
.tabDemarches .info * {
    color: white;
    font-size: 18px;
    font-weight: 700;
}
.tabDemarches .info {
    position: absolute;
    top: 100%;
    right: 0%;
    /* transform: translateX(-50%); */
    background-color: var(--dark-blue);
    padding: 10px;
    border-radius: 5px;
    border-top-right-radius: 0px;
    box-shadow: var(--shadow);
    opacity: 0;
    visibility: hidden;
    transition: 300ms ease;
}
.tabDemarches:hover .info {
    opacity: 1;
    visibility: visible;
    transition: 300ms ease;
}
.tabDemarches .info img {
    width: 300px;
    margin-top: 5px;
    border-radius: 5px;
}

.tabBasic .article {
    font-size: max(16px, 1vw);
    color: var(--light-blue);
}
.tabBasic .name {
    color: var(--dark-blue);
    font-size: max(18px, 1.2vw);
    font-weight: 700;
}

.tabBox .line {
    height: 30px;
    border: 1px solid var(--brown);
}



.menuPanel {
    background-color: white;
    padding: 10px;
    padding-right: 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 0px;
    /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.589); */
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}

.menuPanel .linkList {
    padding: 0 10px;
}
.menuPanel .linkList .link {
    font-size: 20px;
    font-weight: 500;
    padding: 7px 5px;
    border-bottom: 1px solid var(--brown);
    transition: 300ms ease;
    
}
.menuPanel .linkList .link:hover {
    color: white;
    background-color: var(--dark-blue);
    transition: 300ms ease;
    border-radius: 5px;
}
.menuPanel .icon {
    font-size: 24px;
    margin: 10px;
}
@media (max-width: 719px) {
    .tabBox {
        display: none;
    }
}
</style>