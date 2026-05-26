<template>
    <transition name="modal">
        <!-- @click.self = ferme la modal si on clique sur le fond -->
        <div v-if="isOpen" class="modal" @click.self="$emit('close')">

            <div class="modal-inner">

                <!-- Bouton fermer -->
                <button class="close-btn" @click="$emit('close')">
                    <X />
                </button>

                <!-- En-tête -->
                <div class="modal-header">
                    <div class="icon-box">
                        <component :is="icon" v-if="icon" />
                    </div>

                    <h2>{{ titre }}</h2>
                </div>

                <!-- Image du projet -->
                <div class="image-container">
                    <img :src="image" class="modal-image" alt="Aperçu du projet">
                </div>

                <!-- Description -->
                <p class="description">
                    {{ description }}
                </p>

                <!-- Technologies -->
                <div class="tags">
                    <!--Pour chaque technologie dans technologies je l'appelle tech-->
                    <!--Ajout de span automatique pour chaque tech-->
                    <span v-for="tech in technologies" :key="tech">
                        {{ tech }}
                    </span>
                </div>

                <!-- Boutons -->
                <div class="buttons">
                    <a :href="demo" target="_blank" class="btn demo">
                        <ExternalLink />
                        Démo
                    </a>

                    <a :href="github" target="_blank" class="btn github">
                        <Github />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { X, ExternalLink, Github } from "lucide-vue-next"

defineProps([
    "isOpen",
    "titre",
    "description",
    "image",
    "demo",
    "github",
    "technologies",
    "icon"
])

defineEmits(["close"])
</script>

<style scoped>
/* Animation du fond */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

/* Animation de la boîte */
.modal-inner {
    transform: scale(1);
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .modal-inner,
.modal-leave-to .modal-inner {
    transform: scale(0.9);
    opacity: 0;
}

/* Fond de la modal */
.modal {
    position: fixed;
    inset: 0;

    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(6px);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    z-index: 2000;
}

/* Contenu de la modal */
.modal-inner {
    position: relative;

    width: 700px;
    max-width: 95%;
    max-height: 90vh;
    overflow-y: auto;

    padding: 35px;

    background: #0a0d16;
    border: 1px solid rgba(127, 90, 240, 0.7);
    border-radius: 22px;
    box-shadow:
        0 0 30px rgba(127, 90, 240, 0.2),
        0 20px 50px rgba(0, 0, 0, 0.7);

    color: #fffffe;
}

/* Bouton X */
.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
    color: #fffffe;

    cursor: pointer;
    transition: 0.3s;
}

.close-btn:hover {
    background: rgba(127, 90, 240, 0.15);
    color: #9b8cff;
    transform: rotate(90deg);
}

/* Header */
.modal-header {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 28px;
    padding-right: 50px;
}

.icon-box {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 58px;
    height: 58px;

    border: 1px solid rgba(127, 90, 240, 0.7);
    border-radius: 14px;
    color: #7f5af0;
    background: rgba(127, 90, 240, 0.08);
}

.icon-box svg {
    width: 30px;
    height: 30px;
}

h2 {
    margin: 0;
    font-size: 32px;
    color: #fffffe;
}

/* Image */
.image-container {
    width: 100%;
    aspect-ratio: 16 / 9;

    padding: 16px;
    margin-bottom: 24px;

    border: 1px solid rgba(148, 161, 178, 0.25);
    border-radius: 18px;
    background: #070a12;

    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;

    border-radius: 12px;
}

/* Description */
.description {
    margin: 0 0 22px;
    font-size: 18px;
    line-height: 1.8;
}

/* Tags */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 28px;
}

.tags span {
    padding: 8px 14px;
    border: 1px solid rgba(127, 90, 240, 0.55);
    border-radius: 8px;

    color: #9b8cff;
    background: rgba(127, 90, 240, 0.08);

    font-size: 14px;
}

/* Boutons */
.buttons {
    display: flex;
    gap: 18px;
    padding-top: 22px;
    border-top: 1px solid rgba(148, 161, 178, 0.18);
}

.btn {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    height: 54px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;

    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.btn svg {
    width: 20px;
    height: 20px;
}

/* Bouton démo */
.btn.demo {
    background: linear-gradient(to bottom right, #9b8cff, #7f5af0);
    color: #fffffe;
}

.btn.demo:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(127, 90, 240, 0.5);
}

/* Bouton GitHub */
.btn.github {
    border: 1px solid rgba(148, 161, 178, 0.35);
    color: #fffffe;
    background: transparent;
}

.btn.github:hover {
    transform: translateY(-4px);
    border-color: #7f5af0;
    background: rgba(127, 90, 240, 0.1);
}

/* Mobile */
@media (max-width: 768px) {
    .modal {
        padding: 10px;
    }

    .modal-inner {
        width: 100%;
        max-width: 100%;
        max-height: calc(100vh - 20px);
        overflow-y: hidden;
        padding: 20px;
        border-radius: 18px;
    }

    .modal-header {
        gap: 12px;
        margin-bottom: 18px;
        padding-right: 20px;
    }

    .icon-box {
        width: 44px;
        height: 44px;
    }

    h2 {
        font-size: 22px;
        margin-bottom: 0;
    }

    .image-container {
        padding: 12px;
        margin-bottom: 18px;
        aspect-ratio: 4 / 3;
    }

    .modal-image {
        border-radius: 10px;
    }

    .description {
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 18px;
    }

    .tags {
        gap: 8px;
        margin-bottom: 20px;
    }

    .tags span {
        padding: 6px 10px;
        font-size: 12px;
    }

    .buttons {
        flex-direction: column;
        gap: 12px;
        padding-top: 18px;
    }

    .btn {
        width: 100%;
        min-height: 46px;
        padding: 12px 16px;
        font-size: 15px;
        border-radius: 12px;
    }

    .btn svg {
        width: 18px;
        height: 18px;
    }
}
</style>