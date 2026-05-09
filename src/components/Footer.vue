<template>
    <footer class="footer">
        <p>© - Mon Portfolio</p>
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

<style scoped>
    .footer {
        text-align: center;
        padding: 10px 20px;
        background-color: #16161a;
        box-shadow: 0 -3px 30px #7f5af0;
        box-sizing: border-box;
    }

    .social {
        display: flex;
        flex-direction: row;
        justify-content: center;  
        gap: 15px; 
    }

    .icon {
        height: 50px;
    }

    .icon:hover {
        filter: drop-shadow(10px 10px 10px #7f5af0);
    }
</style>