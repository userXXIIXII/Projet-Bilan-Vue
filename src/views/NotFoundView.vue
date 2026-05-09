<template>
    <section>
        <img src="@/assets/404-error.png" alt="Icon Erreur 404">
        <p>Oups! <br> La page demandée n'existe pas.</p>
        <a href="/" type="button">Retour à l'accueil</a>
    </section>
</template>

<style scoped>
    section {
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        background: linear-gradient(#7f5af0, #16161a);
        text-align: center;
    }

    img {
        height: 250px;
        filter: drop-shadow(10px 10px 20px black);
    }

    p {
        font-size: 30px;
        color: #fffffe;
        font-weight: 500;
    }

    a {
        margin-top: 10px;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 8px;

        background: #7f5af0;
        color: white;

        transition: 0.3s;
    }

    a:hover {
        transform: translateY(-3px);
        background: #3a2870;
        box-shadow: 10px 10px 20px black;
    }
</style>