<template>
    <div class="not-found">
        <div class="card">
            <p class="logo">&lt;/&gt; Aarin Deb</p>

            <h1>404</h1>
            <h2>Page non trouvée</h2>

            <p>
                La page demandée n'existe pas ou a été déplacée.
            </p>

            <RouterLink to="/" class="btn">
                Retour à l'accueil
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    height: 100dvh;
    width: 100%;
    padding: 20px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    background:
        radial-gradient(circle at top right, rgba(127, 90, 240, 0.35), transparent 35%),
        #04070f;

    color: #fffffe;
}

.card {
    width: 100%;
    max-width: 600px;
    padding: 50px 30px;

    text-align: center;

    background: rgba(10, 13, 22, 0.85);
    border: 1px solid rgba(127, 90, 240, 0.5);
    border-radius: 24px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
}

.logo {
    margin: 0 0 30px;
    color: #9b8cff;
    font-weight: 700;
}

h1 {
    margin: 0;
    font-size: clamp(90px, 20vw, 150px);
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 2px #7f5af0;
}

h2 {
    margin: 10px 0 15px;
    font-size: 32px;
}

p {
    color: #94a1b2;
    font-size: 18px;
    line-height: 1.6;
}

.btn {
    margin-top: 25px;
    padding: 14px 24px;

    display: inline-block;

    border-radius: 10px;
    background: linear-gradient(135deg, #9b8cff, #7f5af0);

    color: #fffffe;
    text-decoration: none;
    font-weight: 700;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(127, 90, 240, 0.35);
}

@media (max-width: 768px) {
    .card {
        padding: 35px 22px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 15px;
    }
}
</style>