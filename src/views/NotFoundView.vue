<template>
    <main class="not-found">
        <div class="background-glow"></div>

        <section class="error-card">
            <div class="logo-line">
                <span class="code-icon">&lt;/&gt;</span>
                <span class="brand">Aarin Deb</span>
            </div>

            <div class="error-content">
                <p class="small-text">Oups, cette page est introuvable</p>

                <h1>404</h1>

                <h2>Page non trouvée</h2>

                <p class="description">
                    La page que vous essayez d’ouvrir n’existe pas ou a été déplacée.
                    Vous pouvez retourner à l’accueil pour continuer la navigation.
                </p>

                <div class="buttons">
                    <RouterLink to="/" class="btn primary">
                        Retour à l’accueil
                        <ArrowRight />
                    </RouterLink>

                    <a href="https://github.com/userXXIIXII/Projet-Bilan-Vue" target="_blank" class="btn secondary">
                        Voir le projet
                        <Github />
                    </a>
                </div>
            </div>

            <div class="visual">
                <div class="circle">
                    <span>?</span>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ArrowRight, Github } from "lucide-vue-next"
</script>

<style scoped>
.not-found {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 40px;

    background:
        radial-gradient(circle at 75% 25%, rgba(127, 90, 240, 0.35), transparent 28%),
        radial-gradient(circle at 20% 80%, rgba(127, 90, 240, 0.18), transparent 30%),
        #04070f;

    color: #fffffe;
}

.background-glow {
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;

    background: rgba(127, 90, 240, 0.22);
    filter: blur(120px);

    top: 15%;
    right: 12%;
    z-index: 0;
}

.error-card {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 1100px;
    height: calc(100vh - 80px);
    max-height: 720px;

    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 50px;

    padding: 50px;

    background: rgba(10, 13, 22, 0.82);
    border: 1px solid rgba(127, 90, 240, 0.45);
    border-radius: 28px;

    box-shadow:
        0 0 40px rgba(127, 90, 240, 0.18),
        0 30px 80px rgba(0, 0, 0, 0.65);

    backdrop-filter: blur(10px);
}

.logo-line {
    position: absolute;
    top: 32px;
    left: 50px;

    display: flex;
    align-items: center;
    gap: 16px;
}

.code-icon {
    color: #9b8cff;
    font-size: 30px;
    font-weight: 700;
    text-shadow: 0 0 20px rgba(127, 90, 240, 0.8);
}

.brand {
    font-size: 22px;
    font-weight: 700;
}

.error-content {
    margin-top: 70px;
}

.small-text {
    margin: 0 0 10px;
    color: #9b8cff;
    font-size: 18px;
}

h1 {
    margin: 0;
    font-size: clamp(110px, 16vw, 210px);
    line-height: 0.9;

    color: transparent;
    -webkit-text-stroke: 2px rgba(155, 140, 255, 0.75);

    text-shadow: 0 0 35px rgba(127, 90, 240, 0.35);
}

h2 {
    margin: 20px 0;
    font-size: 46px;
    color: #fffffe;
}

.description {
    max-width: 620px;
    margin: 0;

    color: #94a1b2;
    font-size: 19px;
    line-height: 1.8;
}

.buttons {
    display: flex;
    gap: 18px;
    margin-top: 35px;
}

.btn {
    min-height: 54px;
    padding: 0 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;

    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.btn svg {
    width: 21px;
    height: 21px;
}

.primary {
    background: linear-gradient(135deg, #9b8cff, #7f5af0);
    color: #fffffe;
}

.secondary {
    border: 1px solid rgba(148, 161, 178, 0.35);
    color: #fffffe;
    background: rgba(255, 255, 255, 0.02);
}

.btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(127, 90, 240, 0.35);
}

.visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle {
    width: 330px;
    height: 330px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 1px solid rgba(155, 140, 255, 0.8);

    background:
        linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(127, 90, 240, 0.05)),
        rgba(10, 13, 22, 0.7);

    box-shadow:
        inset 0 0 40px rgba(127, 90, 240, 0.18),
        0 0 60px rgba(127, 90, 240, 0.25);
}

.circle span {
    font-size: 150px;
    color: #9b8cff;
    text-shadow: 0 0 30px rgba(127, 90, 240, 0.8);
}

/* Mobile */
@media (max-width: 768px) {
    .not-found {
        height: 100vh;
        padding: 14px;
        overflow: hidden;
    }

    .error-card {
        height: calc(100vh - 28px);
        max-height: none;
        grid-template-columns: 1fr;
        gap: 14px;
        padding: 20px 18px;
        text-align: center;
        overflow: hidden;
    }

    .logo-line {
        position: static;
        justify-content: center;
        margin-bottom: 0;
    }

    .code-icon {
        font-size: 24px;
    }

    .brand {
        font-size: 18px;
    }

    .error-content {
        margin-top: 0;
    }

    .small-text {
        font-size: 14px;
        margin-bottom: 6px;
    }

    h1 {
        font-size: 82px;
        line-height: 0.85;
    }

    h2 {
        font-size: 24px;
        margin: 12px 0;
    }

    .description {
        font-size: 14px;
        line-height: 1.5;
    }

    .buttons {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 10px;
        margin-top: 18px;
    }

    .btn {
        width: 100%;
        max-width: 320px;
        min-height: 46px;
        padding: 0 16px;
        font-size: 14px;
    }

    .circle {
        width: 130px;
        height: 130px;
    }

    .circle span {
        font-size: 62px;
    }
}

/* Tablette */
@media (min-width: 769px) and (max-width: 1024px) {
    .not-found {
        height: 100vh;
        padding: 30px;
        overflow: hidden;
    }

    .error-card {
        height: calc(100vh - 60px);
        max-height: none;
        grid-template-columns: 1fr;
        gap: 24px;
        text-align: center;
        padding: 35px;
        overflow: hidden;
    }

    .logo-line {
        position: static;
        justify-content: center;
        margin-bottom: 0;
    }

    .error-content {
        margin-top: 0;
    }

    h1 {
        font-size: 120px;
    }

    h2 {
        font-size: 34px;
    }

    .description {
        margin: 0 auto;
        font-size: 17px;
    }

    .buttons {
        justify-content: center;
        margin-top: 25px;
    }

    .circle {
        width: 210px;
        height: 210px;
    }

    .circle span {
        font-size: 95px;
    }
}
</style>