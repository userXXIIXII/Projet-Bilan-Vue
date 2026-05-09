<template>
    <section id="Project">
        <h1>Mes réalisations</h1>

        <!--Carte projet-->
        <div class="projects">
            <!--Pourchaque éléments dans projects, je l'appelle 
            key = identifiant unique pour chaque projet
            v-for = parcourt chaque projet du tableau-->
            <div v-for="p in projects" :key="p.id" class="card">
                <h3>{{ p.titre }}</h3>
                <img :src="p.preview" class="card-image" alt="Image du Projet">

                <!--Au click, selected devient le projet cliqué-->
                <button @click="selected = p">Voir</button>
            </div>
        </div>

        <!--Si selected = true, alors le modal s'affiche
        
        Modal qui affiche les détails du projet sélectionné
        
        Selected = la variable qui contient le projet choisi-->

        <Modal 
            :isOpen="selected !== null"
            :titre="selected?.titre"
            :description="selected?.description"
            :image="selected?.image"
            :demo="selected?.demo"
            :github="selected?.github"
            @close="selected = null"

        />

        <p class="bio">
            Sur cette page, vous trouverez un aperçu détaillé de 
            mes réalisations en développement web, du front-end 
            au back-end. Chaque projet illustre non seulement ma 
            maîtrise des technologies modernes, mais aussi ma 
            capacité à concevoir des interfaces intuitives, à résoudre 
            des problèmes complexes et à créer des expériences 
            utilisateurs fluides et engageantes.
        </p>
    </section>
</template>

<script setup>
    import Modal from './Modal/Modal.vue'
    import { ref } from "vue"

    import meteoImg from '@/assets/weather-app-img.png'
    import meteoIcon from '@/assets/weather-app.png'
    import cvImg from '@/assets/cvImg.png'
    import cvIcon from '@/assets/cvIcon.png'

    //Modal fermée par défaut

    const selected = ref(null)

    const projects = [
        {
            id: 1,
            titre: "App météo - 2026",
            description: "Ce projet est une application météo développée en HTML, CSS et JavaScript, permettant d’afficher la météo grâce à JavaScript et à l’utilisation d’une API.",
            image: meteoImg,
            preview: meteoIcon,
            demo: "https://userxxiixii.github.io/weather_app/",
            github: "https://github.com/userXXIIXII/weather_app"
        },

        {
            id: 2,
            titre: "CV HTML - 2024",
            description: "CV développé en HTML, mettant en avant une structure claire et sémantique pour présenter mes informations personnelles, mes compétences et mon parcours.",
            image: cvImg,
            preview: cvIcon,
            demo: "https://userxxiixii.github.io/CV-CEF/",
            github: "https://github.com/userXXIIXII/CV-CEF"
        }
    ]
</script>

<style scoped>
    section {
        min-height: calc(100vh - 200px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    .bio {
        max-width: 850px;
        text-align: center;
    }

    .projects {
        display: flex;
        gap: 50px;
        justify-content: center;
    }

    /* carte */
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 300px;
        height: 300px;
        background-image: linear-gradient(rgba(22, 22, 26, 0.65), rgba(22, 22, 26, 0.65)),
        url("@/assets/theme.png");
        background-position: center;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 10px 10px 20px black;
        border: 1px solid #94a1b2;

        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    /* image */
    .card-image {
        height: 150px;
        width: 150px;
        filter: drop-shadow(10px 10px 10px black);
    }

    /* contenu */
    .card-content {
        padding: 15px;
        text-align: center;
    }

    .card>h3 {
        color: white;
        font-size: 16px;
        margin: 10px 0;
    }

    /* bouton */
    .card button {
        padding: 10px 14px;
        border: none;
        border-radius: 6px;
        background: linear-gradient(to bottom right, #9b8cff, #7f5af0, #16161a);
        border: 2px solid #7f5af0;
        box-shadow: 5px 5px 20px black;
        color: #fffffe;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .card button:hover {
        transform: scale(1.1);
        box-shadow: 5px 5px 20px rgba(127, 90, 240, 0.5);
    }

    /* hover effet */
    .card:hover {
        transform: scale(1.1);
        box-shadow: 20px 20px 50px black;
    }

    @media (max-width: 768px) {
        .projects {
            flex-direction: column;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {

    }
</style>

