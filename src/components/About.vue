<template>
    <section>
        <h1>Qui suis-je ?</h1>

        <div class="container">
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

            <img src="@/assets/aboutPic.jpg" class="aboutPic" alt="About Photo">
        </div>
    </section>
</template>

<style scoped>
    section {
        height: calc(100vh - 200px);
        background-color: #16161a;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding: 50px 0;
    }

    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 50px;
    }

    .aboutPic {
        max-height: 500px;
        border-radius: 5px;
        box-shadow: 10px 10px 20px black;
    }

    .bio {
        max-width: 850px;
        text-align: center;
    }
</style>