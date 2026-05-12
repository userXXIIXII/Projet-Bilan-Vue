<template>
    <footer class="footer">

        <div>
            <h2><Code2 /> Aarin Deb</h2>
            <p>Etudiant Développeur Web</p>
        </div>

        <p>© {{ buildDate }} Aarin Deb. Tous droits réservés.</p>

        <div class="social">
            <a href="https://www.linkedin.com/in/aarin-deb" target="_blank">
                <Github size="40"/>
            </a>
            <a href="https://github.com/userXXIIXII" target="_blank">
                <Linkedin size="40"/>
            </a>
            <a href="https://www.instagram.com/aarin_dev/" target="_blank">
                <Instagram size="40" />
            </a>
        </div>

    </footer>
</template>

<script setup>
    const buildDate = import.meta.env.VITE_BUILD_DATE

    import { Instagram, Github, Linkedin, Code2 } from 'lucide-vue-next';
</script>

<style scoped>
    .footer {
        background: #04070f;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;
        box-sizing: border-box;
    }

    .social {
        display: flex;
        flex-direction: row;
        justify-content: center;  
        gap: 30px; 
    }

    .icon {
        height: 50px;
        filter: drop-shadow(10px 10px 10px black);
    }

    .icon:hover {
        filter: drop-shadow(10px 10px 10px #7f5af0);
    }

    p {
        font-size: 15px;
    }

    h2 {
        font-size: 22px;
    }

    @media (max-width: 768px) {
    .footer {
        flex-direction: column;
        gap: 20px;
        padding: 30px 20px;
        text-align: center;
    }

    .social {
        gap: 20px;
    }

    p {
        font-size: 14px;
    }

    h2 {
        font-size: 20px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .footer {
        flex-direction: column;
        gap: 20px;
        padding: 35px 30px;
        text-align: center;
    }
}
</style>