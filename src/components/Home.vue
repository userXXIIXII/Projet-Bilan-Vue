<template>
    <section id="Home">

        <div class="left">

            <p>Salut!👋 Je suis</p>

            <h1>Aarin DEB</h1>

            <h2>Etudiant Développeur Web et Web Mobile</h2>

            <p>
                Je suis en cours d'apprentissage
                pour devenir Développeur <br> Web et
                Web Mobile. Passionné par le code, le design et les détails.
            </p>

            <div class="btn-home">
                <a href="#Project" 
                class="btn btn-project">
                    Voir mes réalisations 
                    <ArrowRight />
                </a>
                <a href="#Contact" class="btn btn-contact">
                    Me contacter
                    <Mail />
                </a>
            </div>

            <div class="social">
                <a href="https://github.com/userXXIIXII" target="blank" >
                    <Github class="icon"/>
                </a>
                <a href="https://www.linkedin.com/in/aarin-deb" target="blank">
                    <Linkedin class="icon"/>
                </a>
                <a href="https://www.instagram.com/aarin_dev/" target="blank">
                    <Instagram class="icon"/>
                </a>
            </div>   
            
        </div>

        <div class="right">
            <img src="@/assets/photoHome.png" class="pp" alt="Photo de Aarin Deb">
        </div>
        

    </section>
</template>

<script setup> 
    import { ArrowRight, Mail, Github, Linkedin, Instagram } from "lucide-vue-next";
</script>

<style scoped>
    section {
        min-height: calc(100vh - 100px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        line-height: .5;
    }

    .left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .right {
        padding-right: 200px;
    }

    .pp {
        max-height: 550px;
        border-radius: 50%;
        box-shadow: 0 0 30px #7f5af0;
        border: 2px solid #7f5af0;  
    }

    .btn-home {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .btn-project {
        background: #7f5af0;
        color: #fffffe;
        height: 50px;
        width: 250px;
    }

    .btn-contact {
        border: 2px solid #7f5af0;
        color: #fffffe;
        background: transparent;
        height: 50px;
        width: 250px;
    }

    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(127, 90, 240, 0.4);
    }

    .social {
        display: flex;
        flex-direction: row;
        gap: 30px;
        padding-top: 55px;
    }

    .icon {
        height: 40px;
        width: 40px;
        color: #7f5af0;
    }

    @media (max-width: 768px) {
        .pp {
            height: 300px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .container {
            padding-top: 150px;
        }
    }
</style>