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
    menuContent.value = props.links[e.currentTarget.getAttribute('name')]  
    menuImageRef.value = `/images/menu/${e.currentTarget.getAttribute('name')}.jpg`

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

<style>
.tabBox .tab {
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 300ms ease;
}
    
.tabBox .tab:hover {
    background-color: #0184d525;
    transition: 300ms ease;
}

.tabBox .line {
    height: 30px;
    border: 1px solid var(--brown);
}

.article {
    font-size: max(16px, 1.5vw);
    color: var(--light-blue);
}
.name {
    color: var(--dark-blue);
    font-size: max(18px, 1.5vw);
    font-weight: 700;
}

.menuPanel {
    background-color: white;
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

.menuPanel .linkList {
    padding: 0 10px;
}
.menuPanel .linkList .link {
    font-size: 20px;
    padding: 4px 5px;
    border-bottom: 1px solid var(--brown);
    transition: 300ms ease;
}
.menuPanel .linkList .link:hover {
    background-color: #0184d525;
    transition: 300ms ease;
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