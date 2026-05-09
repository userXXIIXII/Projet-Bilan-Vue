<template>
    <transition name="modal">
        <div v-if="isOpen" class="modal" @click.self="$emit('close')">

            <div class="modal-inner">
                <button @click="$emit('close')">X</button>

                <h2>{{ titre }}</h2>
                <img :src="image" class="modal-image" alt="Image de la modal">
                <p>{{ description }}</p>

                <div class="buttons">
                    <a :href="demo" target="_blank" class="btn demo">Démo</a>
                    <a :href="github" target="_blank" class="btn github">GitHub</a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
    defineProps([
        "isOpen",
        "titre",
        "description",
        "image",
        "demo",
        "github"
    ])

    const emit = defineEmits(["close"])
</script>

<style scoped>
    /* Animation */
    .modal-enter-active,
    .modal-leave-active {
        transition: opacity 0.3s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
    }

    .modal-inner {
        transform: scale(1);
        transition: all 0.3s ease;
    }

    /*état de départ */
    .modal-enter-from .modal-inner {
        transform: scale(0.8);
        opacity: 0;
    }

    /*état de sortie */
    .modal-leave-to .modal-inner {
        transform: scale(0.8);
        opacity: 0;
    }

    .modal {
        position: fixed;
        inset: 0;

        background: rgba(0, 0, 0, 0.6);

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 20px;
        z-index: 2000;
    }

    .modal-inner {
        position: relative; 

        background: #1e1e1e;
        color: white;

        padding: 20px;
        border-radius: 10px;

        max-height: 85vh;
        overflow-y: auto;

        width: 300px;
        max-width: 90%;

        text-align: center;
    }

    .modal-image {
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
        margin: 10px 0;
        box-shadow: 10px 10px 20px black;
    }

    .modal-inner button {
        position: absolute;
        top: 10px;
        right: 10px;

        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
    } 

    p {
        font-size: medium;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;
    }

    .btn {
        padding: 10px 15px;
        border-radius: 8px;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
        transition: 0.3s;
    }

    /* bouton démo */
    .btn.demo {
        background: #7f5af0;
        color: white;
    }

    /* bouton github */
    .btn.github {
        border: 2px solid #7f5af0;
        color: #7f5af0;
        background: transparent;
    }

    /* hover */
        .btn:hover {
        transform: translateY(-2px);
    }

    .btn.demo:hover {
        background: #6c4de0;
    }

    .btn.github:hover {
        background: #7f5af0;
        color: white;
    }
</style>