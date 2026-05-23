import meteoImg from '@/assets/weather-app-img.png'
import cvImg from '@/assets/cvImg.png'
import portfolioImg from '@/assets/portfolioImg.png'
import taskflowImg from '@/assets/Taskflow.png'

import { CloudSunRain, FileUser, PanelsTopLeft, ClipboardCheck } from 'lucide-vue-next'

export function useProjects() {
    const projects = [
        //Liste de projets
        {
            //Chaque projet = un objet avec ses infos
            id: 1,
            titre: "CV HTML - 2024",
            description: "CV développé en HTML avec une structure claire et sémantique pour présenter mon parcours et mes compétences.",
            image: cvImg,
            preview: cvImg,
            icon: FileUser,
            technologies: ["HTML", "CSS", "Sémantique"],
            demo: "https://userxxiixii.github.io/CV-CEF/",
            github: "https://github.com/userXXIIXII/CV-CEF"
        },

        {
            id: 2,
            titre: "App météo - 2026",
            description: "Application météo développée en HTML, CSS et JavaScript, utilisant une API pour afficher la météo en temps réel.",
            image: meteoImg,
            preview: meteoImg,
            icon: CloudSunRain,
            technologies: ["HTML", "CSS", "JavaScript", "API"],
            demo: "https://userxxiixii.github.io/weather_app/",
            github: "https://github.com/userXXIIXII/weather_app"
        },

        {
            id: 3,
            titre: "Portfolio - 2026",
            description: "Portfolio personnel conçu avec Vue.js pour présenter mes projets et mon profil de développeur.",
            image: portfolioImg, 
            preview: portfolioImg, 
            icon: PanelsTopLeft,
            technologies: ["Vue.js", "CSS", "Vite"],
            demo: "https://portfolio-aarin-deb.vercel.app/",
            github: "https://github.com/userXXIIXII/Projet-Bilan-Vue"
        },

        {
            id: 4,
            titre: "Taskflow - 2026",
            description: "Application React de gestion de tâches avec ajout, suppression et changement de statut, intégrée dans une interface responsive.",
            image: taskflowImg, 
            preview: taskflowImg, 
            icon: ClipboardCheck,
            technologies: ["React.js", "CSS", "Vite"],
            demo: "https://userxxiixii.github.io/Taskflow-react/",
            github: "https://github.com/userXXIIXII/Taskflow-react"
        }
    ]

    return { projects }
}