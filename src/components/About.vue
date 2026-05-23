<template>

    <section id="About">
        <div class="left">
            <h1><UserRound size="40" color="#7f5af0"/> A propos</h1>
            <p class="bio">
                Actuellement en formation au Centre Européen de Formation pour devenir 
                développeur web, je me suis orienté vers ce métier par passion pour la 
                création et le numérique. J’aime l’idée de pouvoir construire quelque 
                chose à partir de rien, de transformer une simple idée en un site ou 
                une application fonctionnelle.

                <br>Le développement web représente pour moi bien plus qu’une compétence 
                technique : c’est un moyen d’exprimer ma créativité, de résoudre des problèmes 
                et de proposer des solutions concrètes. Chaque ligne de code est une étape 
                vers la réalisation d’un projet abouti.

                <br>Aujourd’hui, je continue d’apprendre et de me perfectionner avec sérieux 
                et motivation, dans le but de devenir un développeur compétent et capable de 
                concevoir des expériences web utiles, intuitives et modernes.
            </p>
        </div>

        <div class="right">
            <div class="detail">
                <Code2 size="50" color="#7f5af0"/>
                <h2>2+</h2>
                <p>Années d'expériences</p>
            </div>
            <span></span>
            <div class="detail">
                <BriefcaseBusiness size="50" color="#7f5af0"/>
                <h2>3+</h2>
                <p>Projets réalisés</p>
            </div>
            <span></span>
            <div class="detail">
                <Rocket size="50" color="#7f5af0"/>
                <h2>100%</h2>
                <p>Engagement & Passion</p>
            </div>
        </div>

    </section>

</template>

<script setup>
    import { UserRound, Code2, BriefcaseBusiness, Rocket } from 'lucide-vue-next';
</script>

<style scoped>
    section {
        min-height: calc(100vh - 100px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    .right {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .aboutPic {
        max-height: 500px;
        border-radius: 5px;
        box-shadow: 10px 10px 30px black;
        border: 1px solid #94a1b2;
    }

    .bio {
        max-width: 850px;
    }

    h1 {
        font-size: 45px;
        color: #fffffe;
    }

    h2 {
        margin: 0;
    }

    p {
        margin: 0;
    }

    .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    span {
        border: 1px solid #94a1b2;
    }

    @media (max-width: 768px) {
        section {
            min-height: auto;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 45px;
            padding: 60px 20px;
            text-align: center;
        }

        .left {
            align-items: center;
        }

        .bio {
            max-width: 100%;
        }

        h1 {
            font-size: 32px;
            display: flex;
            align-items: center;
            gap: 12px;
            justify-content: center;
        }

        .right {
            width: 100%;
            gap: 25px;
        }

        .detail {
            gap: 12px;
        }

        span {
            width: 100%;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        section {
            min-height: auto;
            flex-direction: column;
            align-items: center;
            gap: 50px;
            padding: 80px 40px;
            text-align: center;
        }

        .left {
            align-items: center;
        }

        .bio {
            max-width: 850px;
        }

        .right {
            width: 100%;
            max-width: 700px;
        }

        span {
            width: 100%;
        }
    }
</style>