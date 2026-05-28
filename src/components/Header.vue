<template>
    <header>
        <a href="#Home">
            <img src="@/assets/logo.png" class="logo" alt="Logo">
        </a>

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
                <li class="cv-nav-item">
                    <a href="/CV-dev.pdf" download class="btn btn-cv"
                    @click="isOpen = false">
                        Télécharger CV
                        <Download class="icon"/>
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

        <a href="/CV_dev.pdf" download class="btn btn-cv">
            Télécharger CV 
            <Download class="icon"/>
        </a>
    </header>
</template>

<script setup>
    import { ref } from "vue"
    import { Download } from "lucide-vue-next";

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
        height: 100px;
        max-height: none;

        background: #04070f;
        border-bottom: 1px solid #949494;
        color: #fffffe;

        box-sizing: border-box;
        padding: 0 40px;
        z-index: 100;
    }

    ul {
        display: flex;
        gap: 50px;
    }

    .active {
        text-decoration: underline;
        color: #7f5af0;
        text-underline-offset: 6px;
    }

    .logo {
        height: 100px;
        filter: drop-shadow(10px 10px 10px black);
    }

    .logo:hover {
        filter: drop-shadow(15px 15px 15px black);
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .btn-cv {
        border: 2px solid #7f5af0;
        background: transparent;
        color: #94a1b2;
        height: 40px;
        width: 200px;
        padding: 0 16px;
    }

    nav .cv-nav-item {
        display: none;
    }

    .icon {
        height: 20px;
        width: 20px;
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
        height: 90px;
        padding: 0 20px;
        justify-content: space-between;
    }

    .logo {
        height: 75px;
    }

    .btn-cv {
        display: none;
    }

    nav .cv-nav-item {
        display: block;
    }

    nav .cv-nav-item .btn-cv {
        display: flex;
        width: auto;
    }

    .burger {
        display: block;
        z-index: 200;
    }

    nav {
        position: absolute;
        top: 90px;
        left: 0;
        width: 100%;

        background: #04070f;
        border-top: 1px solid #7f5af0;
        box-shadow: 0 15px 30px black;

        opacity: 0;
        visibility: hidden;
        transform: translateY(-15px);

        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    }

    nav.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    nav ul {
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 30px 0;
    }

    nav a {
        font-size: 16px;
    }

    nav .cv-nav-item .btn-cv {
        width: auto;
        padding: 10px 18px;
    }
}

    /* TABLETTE */

    @media (min-width: 769px) and (max-width: 1024px) {
    header {
        height: 100px;
        padding: 0 30px;
        justify-content: space-between;
    }

    .logo {
        height: 85px;
    }

    ul {
        gap: 25px;
    }

    .btn-cv {
        display: none;
        width: 170px;
        height: 42px;
        font-size: 14px;
        gap: 10px;
        padding: 0 14px;
    }

    nav .cv-nav-item {
        display: block;
    }

    nav .cv-nav-item .btn-cv {
        display: flex;
        width: auto;
        padding: 11px 18px;
    }

    .icon {
        height: 18px;
        width: 18px;
    }
}
</style>