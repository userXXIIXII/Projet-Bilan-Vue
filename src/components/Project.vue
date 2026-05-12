<template>
    <section id="Project">
        <h2>
            <Folder size="40" color="#7f5af0" />
            Réalisations
        </h2>

        <div class="projects">
            <article v-for="p in projects" :key="p.id" class="card">
                <!-- Image du projet -->
                <div class="image-container">
                    <img :src="p.preview" class="card-image" alt="Aperçu du projet">
                </div>

                <!-- Contenu de la carte -->
                <div class="card-content">
                    <div class="titre">
                        <component :is="p.icon" class="project-icon" />
                        <h3>{{ p.titre }}</h3>
                    </div>

                    <p class="description">
                        {{ p.description }}
                    </p>

                    <div class="tags">
                        <span v-for="tech in p.technologies" :key="tech">
                            {{ tech }}
                        </span>
                    </div>

                    <button class="see-btn" @click="selected = p">
                        Voir
                        <ArrowUpRight />
                    </button>
                </div>
            </article>
        </div>

        <Modal 
            :isOpen="selected !== null"
            :titre="selected?.titre"
            :description="selected?.description"
            :image="selected?.image"
            :demo="selected?.demo"
            :github="selected?.github"
            :technologies="selected?.technologies"
            :icon="selected?.icon"
            @close="selected = null"
        />
    </section>
</template>

<script setup>
import Modal from './Modal/Modal.vue'
import { ref } from "vue"
import { Folder, ArrowUpRight } from 'lucide-vue-next'
import { useProjects } from '@/composables/useProjects'

const selected = ref(null)

const { projects } = useProjects()
</script>

<style scoped>
section {
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    padding: 80px 50px;
}

h2 {
    display: flex;
    align-items: center;
    gap: 15px;
}

/* Ensemble des cartes */
.projects {
    display: flex;
    justify-content: center;
    gap: 35px;
    flex-wrap: wrap;
}

/* Carte */
.card {
    width: 360px;
    min-height: 520px;

    display: flex;
    flex-direction: column;

    background: #0a0d16;
    border: 1px solid rgba(148, 161, 178, 0.35);
    border-radius: 20px;
    overflow: hidden;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
    transform: translateY(-8px);
    border-color: #7f5af0;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
}

/* Image du projet */
.image-container {
    height: 230px;
    padding: 18px;
    background: #070a12;
}

.image-container {
    height: 230px;
    padding: 18px;
    background: #070a12;

    display: flex;
    justify-content: center;
    align-items: center;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: contain;      /* au lieu de cover */
    object-position: center;
    border-radius: 14px;
    border: 1px solid rgba(148, 161, 178, 0.2);
}

/* Contenu */
.card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;
}

.titre {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 18px;
}

.project-icon {
    width: 34px;
    height: 34px;
    color: #7f5af0;
    padding: 7px;
    border: 1px solid rgba(127, 90, 240, 0.7);
    border-radius: 10px;
}

.card h3 {
    margin: 0;
    font-size: 24px;
    color: #fffffe;
}

.description {
    margin: 0 0 22px;
    font-size: 16px;
    line-height: 1.7;
}

/* Tags tech */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 25px;
}

.tags span {
    padding: 7px 13px;
    border: 1px solid #7f5af0;
    border-radius: 8px;
    color: #9b8cff;
    font-size: 14px;
    background: rgba(127, 90, 240, 0.08);
}

/* Bouton Voir */
.see-btn {
    margin-top: auto;
    align-self: flex-end;

    display: flex;
    align-items: center;
    gap: 10px;

    border: none;
    background: transparent;
    color: #9b8cff;
    font-size: 18px;
    cursor: pointer;

    transition: transform 0.3s ease, color 0.3s ease;
}

.see-btn:hover {
    transform: translateX(4px);
    color: #fffffe;
}

    @media (max-width: 768px) {
        section {
            min-height: auto;
            padding: 60px 20px;
            gap: 35px;
        }

        h2 {
            justify-content: center;
            text-align: center;
        }

        .projects {
            flex-direction: column;
            align-items: center;
            gap: 30px;
        }

        .card {
            width: 100%;
            max-width: 360px;
            min-height: auto;
        }

        .image-container {
            height: 200px;
        }

        .card-content {
            padding: 20px;
        }

        .titre {
            align-items: flex-start;
        }

        .card h3 {
            font-size: 22px;
        }

        .description {
            font-size: 15px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        section {
            min-height: auto;
            padding: 80px 30px;
            gap: 40px;
        }

        .projects {
            gap: 30px;
        }

        .card {
            width: 320px;
        }
    }
</style>