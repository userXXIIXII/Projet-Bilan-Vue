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
            </ul>
        </nav>

        <div class="burger" 
        :class="{ open:isOpen }"
        @click="isOpen = !isOpen">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <a href="/src/public/CV.pdf" download class="btn btn-cv">
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
        gap: 15px;

        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .btn-cv {
        border: 2px solid #7f5af0;
        background: transparent;
        color: #94a1b2;
        height: 40px;
        width: 200px;
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

            background-image: linear-gradient(rgba(22, 22, 26, 0.65), rgba(22, 22, 26, 0.65)),
            url("@/assets/theme.png");
            background-position: center;
            background-size: cover;

            box-shadow: 0 15px 30px black;
            border-top: 1px solid #9b8cff;

            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;

            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);

            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        }

        /* menu ouvert */
        nav.open {
            display: flex;
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
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
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;

            background-image: linear-gradient(rgba(22, 22, 26, 0.65), rgba(22, 22, 26, 0.65)),
            url("@/assets/theme.png");
            background-position: center;
            background-size: cover;

            box-shadow: 0 15px 30px black;
            border-top: 1px solid #9b8cff;

            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;

            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);

            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        }

        nav.open {
            display: flex;
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        nav a {
            margin: 10px 0;
            font-size: 20px;
        }
    }
</style>