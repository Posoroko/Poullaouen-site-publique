<template>
    <div class="burger">
        <span class="menuButton pointer" @click.prevent="openMenu">menu</span>

        <div class="burgerMenuPanel" v-if="menuIsOpen">
            <div class="navBox flex justifyBetween">
                <span class="icon pointer" 
                :class="{ invisible : !tabIsSelected}"
                @click="closeTab">arrow_back</span>

                <span class="closeBurger icon pointer" @click="closeMenu">close</span>
            </div>

            <ul class="tabList flex column alignEnd w100 alignCenter" v-if="!tabIsSelected">
                <li class="tab flex pointer" name="mairie" @click.prevent="openTab">
                    <p class="article">MA</p>
                    
                    <p class="name">MAIRIE</p>
                </li>

                <div class="line"></div>
            
                <li class="tab pointer" name="quotidien" @click.prevent="openTab">
                    <p class="article">MON</p>
            
                    <p class="name">QUOTIDIEN</p>
                </li>

                <div class="line"></div>
            
                <li class="tab pointer" name="sorties" @click.prevent="openTab">
                    <p class="article">MES</p>
            
                    <p class="name">SORTIES</p>
                </li>

                <div class="line"></div>
            
                <li class="tab pointer" name="infos" @click.prevent="openTab">
                    <p class="article">MES</p>
            
                    <p class="name">INFOS</p>
                </li>

                <div class="line"></div>
            
                <li class="tab pointer" name="demarches" @click.prevent="openTab">
                    <p class="article">MES</p>
            
                    <p class="name">DEMARCHES</p>
                </li>
            </ul>

            <ul class="linkList flex column alignEnd" v-if="tabIsSelected">
                <li class="link pointer" v-for="link in menuContent">
                    <nuxt-link class="block w100" :to="link.path" @click="closeMenu">
                        {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    links: Object
})

const menuIsOpen = ref(false)
const menuContent = ref('')
const tabIsSelected = ref(false)

const openMenu = () => {
    menuIsOpen.value = true
}
const closeMenu = () => {
    menuIsOpen.value = false
    tabIsSelected.value = false
}

const openTab = (e) => {
    tabIsSelected.value = true
    console.log(e.currentTarget.getAttribute('name'))
    menuContent.value = props.links[e.currentTarget.getAttribute('name')]
}
const closeTab = () => {
    tabIsSelected.value = false
}
</script>

<style>
.menuButton {
    font-size: 20px;
    font-weight: 800;
    color: var(--dark-blue);
    border-top: 3px solid var(--dark-blue);
    border-bottom: 3px solid var(--dark-blue);
    position: relative;
}
.burgerMenuPanel {
    background-color: #fff;
    padding: 15px;
    border-radius: 10px;
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
}
.burgerMenuPanel .navBox .icon {
    color: var(--dark-blue);
    font-size: 34px;
}

.invisible {
    opacity: 0;
}

.tabList .tab {
    font-size: 20px;
    width: 50vw;
    text-align: right;
    padding: 5px;
    border-bottom: 2px solid var(--dark-blue);
}
.tabList .tab:hover {
    background-color: #0184d525;
    transition: 300ms ease;
}

.burgerMenuPanel .linkList {
    width: min(80vw, 300px);
    font-size: 24px;
}
.burgerMenuPanel .linkList .link {
    width: 100%;
    text-align: right;
    padding: 10px;
    border-bottom: 2px solid var(--dark-blue);
}

@media (min-width: 720px) {
    .burger {
            display: none;
        }
}
</style>