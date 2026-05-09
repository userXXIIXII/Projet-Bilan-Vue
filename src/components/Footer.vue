<template>
    <footer class="footer">
        <p>© {{ buildDate }}- Mon Portfolio</p>
        <div class="social">
            <a href="https://www.linkedin.com/in/aarin-deb" target="_blank">
                <img src="@/assets/linkedin.png" alt="LinkedIn Icon" class="icon">
            </a>
            <a href="https://github.com/userXXIIXII" target="_blank">
                <img src="@/assets/github.png" alt="GitHub Icon" class="icon">
            </a>
            <a href="https://www.instagram.com/aarin_dev/" target="_blank">
                <img src="@/assets/insta.png" alt="Instagram Icon" class="icon">
            </a>
        </div>
    </footer>
</template>

<script setup>
    const buildDate = import.meta.env.VITE_BUILD_DATE
</script>

<style scoped>
    .footer {
        text-align: center;
        padding: 10px 20px;
        background-image: 
        linear-gradient(rgba(22, 22, 26, 0.65), rgba(22, 22, 26, 0.65)),
        url("@/assets/theme.png");
        background-position: center;
        background-size: cover;
        box-shadow: 0 -3px 60px #7f5af0;
        border-top: 2px solid #7f5af0;
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
</style>