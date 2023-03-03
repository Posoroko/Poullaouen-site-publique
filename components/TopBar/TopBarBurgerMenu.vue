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

            <ul class="tabList flex column alignEnd gap10" v-if="!tabIsSelected">
                <li class="tab tabBasic pointer" name="mairie" @click.prevent="openTab">
                    <p class="article">MA</p>
                    
                    <p class="name">MAIRIE</p>
                </li>

                <li class="line"></li>
            
                <li class="tab tabBasic pointer" name="quotidien" @click.prevent="openTab">
                    <p class="article">MON</p>
            
                    <p class="name">QUOTIDIEN</p>
                </li>

                <li class="line"></li>
            
                <li class="tab tabBasic pointer" name="sorties" @click.prevent="openTab">
                    <p class="article">MES</p>
            
                    <p class="name">SORTIES</p>
                </li>

                <li class="line"></li>
            
                <li class="tab tabBasic pointer" name="infos" @click.prevent="openTab">
                    <p class="article">MES</p>
            
                    <p class="name">INFOS</p>
                </li>

                <li class="line"></li>
            
                <li class="tab tabDemarches pointer" name="demarches" @click.prevent="openTab">
                    <p class="article">MES</p>
            
                    <p class="name">DEMARCHES</p>

                    <img class="w100 marTop20" src="/images/Service-public-logo.png" alt="">
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

<style scoped>
.menuButton {
    font-size: 20px;
    font-weight: 800;
    color: var(--dark-blue);
    border-top: 3px solid var(--dark-blue);
    border-bottom: 3px solid var(--dark-blue);
    position: relative;
}
.burgerMenuPanel {
    width: min(95vw, 275px);
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
.line {
    width: 100%;
    border: 1px solid var(--dark-blue);

}

.tabList .tab {
    width: 100%;
    text-align: right;
    padding: 8px;
    border-radius: 10px;
}
.tabList .tab:hover {
    background-color: var(--dark-blue);
    transition: 300ms ease;
}
.tabList .tab:hover * {
    color: white;
    transition: 300ms ease;
}
.article {
    font-size: 20px;
}

.name {
    font-size: 24;
    font-weight: 700;
}


.tabBasic .article {
    color: var(--light-blue);
}
.tabBasic .name {
    color: var(--dark-blue);
}
.tabDemarches * {
    color: white;
}
.tabDemarches {
    background-color: var(--light-blue);
    border-radius: 10px;
    /* margin-top: 20px; */
    transition: 300ms ease;
}
.tabDemarches:hover {
    background-color: var(--dark-blue);
    border-radius: 10px;
    transition: 300ms ease;
}

.tabDemarches img {
    border-radius: 5px;
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