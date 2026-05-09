<template>
    <header>
        <a href="#Home">
            <img src="@/assets/logo.png" class="logo" alt="Logo">
        </a>
        <h1>
            Potfolio de Aarin Deb
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="#About">A propos</a>
                </li>
                <li>
                    <a href="#Project">Réalisations</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

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

        box-shadow: 0 4px 20px #7f5af0;
        box-sizing: border-box;
        padding: 0 40px;
        z-index: 1000;
    }

    ul {
        display: flex;
        gap: 20px;
    }

    .logo {
        height: 150px;
        filter: drop-shadow(10px 10px 10px black);
    }

    .logo:hover {
        filter: drop-shadow(15px 15px 15px black);
    }

</style>