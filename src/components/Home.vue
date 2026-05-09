<template>
    <section id="Home">
        <img src="@/assets/introPic.jpg" class="pp" alt="Photo de Aarin Deb">
        <p>Salut!👋 Je suis</p>
        <h1>Aarin DEB</h1>
        <p>
            Je suis en cours d'apprentissage
            pour devenir Développeur Web et
            Web Mobile
        </p>
    </section>
</template>

<style scoped>
    section {
        min-height: calc(100vh - 200px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        text-align: center;
    }

    .pp {
        max-height: 350px;
        border-radius: 50%;
        box-shadow: 10px 10px 20px black;
    }

    @media (max-width: 768px) {
        .pp {
            height: 300px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .container {
            padding-top: 150px;
        }
    }
</style>