<template>
    <header>
        <a href="#Home">
            <img src="@/assets/logo.png" class="logo" alt="Logo">
        </a>
        <h1>
            Potfolio de Aarin Deb
        </h1>
        <nav :class="{ open: isOpen }">
            <ul>
                <li>
                    <a href="#About" 
                    @click="activeLink = 'About'; isOpen = false"
                    :class="{ active: activeLink === 'About'}">
                        A propos
                    </a>
                </li>
                <li>
                    <a href="#Project"
                    @click="activeLink = 'Project'; isOpen = false"
                    :class="{ active: activeLink === 'Project'}">
                        Réalisations
                    </a>
                </li>
                <li>
                    <a href="#Contact" 
                    @click="activeLink = 'Contact'; isOpen = false"
                    :class="{ active: activeLink === 'Contact'}">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>

        <div class="burger" 
        :class="{ open:isOpen }"
        @click="isOpen = !isOpen">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<script setup>
    import { ref } from "vue"

    const activeLink = ref("")

    const isOpen = ref(false)
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        
        width: 100%;
        height: 200px;
        max-height: none;

        background-color: #16161a;
        color: #fffffe;

        box-shadow: 0 3px 30px #7f5af0;
        box-sizing: border-box;
        padding: 0 40px;
        z-index: 1000;
    }

    ul {
        display: flex;
        gap: 20px;
    }

    .active {
        text-decoration: underline;
        text-underline-offset: 6px;
    }

    .logo {
        height: 150px;
        filter: drop-shadow(10px 10px 10px black);
    }

    .logo:hover {
        filter: drop-shadow(15px 15px 15px black);
    }


    .burger {
        display: none;
        width: 30px;
        height: 25px;
        position: relative;
        cursor: pointer;
    }

    .burger span {
        position: absolute;
        width: 100%;
        height: 3px;
        background: #fffffe;
        left: 0;
        transition: all 0.3s ease;
    }

    /* position */
    .burger span:nth-child(1) {
        top: 0;
    }

    .burger span:nth-child(2) {
        top: 10px;
    }

    .burger span:nth-child(3) {
        top: 20px;
    }

    /* animation croix */
    .burger.open span:nth-child(1) {
        transform: rotate(45deg);
        top: 10px;
    }

    .burger.open span:nth-child(2) {
        opacity: 0;
    }

    .burger.open span:nth-child(3) {
        transform: rotate(-45deg);
        top: 10px;
    }

    @media (max-width: 768px) {

        header {
            flex-direction: row;
            height: auto;
            padding: 20px;
        }

        .logo {
            height: 120px;
        }

        /* burger visible */
        .burger {
            display: block;
        }

        /* menu caché */
        nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #16161a;

            display: none;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
        }

        /* menu ouvert */
        nav.open {
            display: flex;
        }

        nav a {
            margin: 10px 0;
            font-size: 18px;
        }
    }

    /* TABLETTE */

    @media (min-width: 769px) and (max-width: 1024px) {
        header {
            height: 160px;
            padding: 0 20px;
            justify-content: space-between;
        }

        .logo {
            height: 150px;
        }

        /* burger visible */
        .burger {
            display: block;
        }

        nav {
            display: none; 
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #16161a;

            flex-direction: column;
            align-items: center;
            padding: 20px 0;
        }

        nav.open {
            display: flex;
        }

        nav a {
            margin: 10px 0;
            font-size: 20px;
        }
    }
</style>