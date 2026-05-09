<template>
    <section id="Contact">
        <h1>Contactez moi</h1>

        <div class="contact">

            <!--@submit = "quand le formulaire est envoyé"
            .prevent = empeche le comportement par défaut (rechargement de la page)
            sendEmail = appelle la fonction sendEmail()-->
            <form @submit.prevent="sendEmail">

                <!--v-model = liaison automatique variable/input-->
                <input v-model="name" type="text" placeholder="Prénom" required>
                <input v-model="surname" type="text" placeholder="Nom" required>
                <input v-model="email" type="email" placeholder="Email" required>
                <input v-model="objet" type="text" placeholder="Objet" required>
                <textarea v-model="message" placeholder="Message" required></textarea>

                <button type="submit">Envoyer</button>
            </form>

            <!--Affichier p si succes = true-->
            <p v-if="success" class="success">Message envoyé !</p>

            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
    </section>
</template>

<script setup>
    import { ref} from "vue"
    import emailjs from "@emailjs/browser" //système pour l'envoi du message

    //Variable réactives
    const name = ref("")
    const surname = ref("")
    const email = ref("")
    const objet = ref("")
    const message = ref("")
    const success = ref(false)
    const errorMessage = ref("")

    //Fonction pour l'envoi
    function sendEmail() {
        success.value = false
        errorMessage.value = ""

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                //liaison des variables avec les données du template
                prenom: name.value,
                nom: surname.value,
                email: email.value,
                objet: objet.value,
                message: message.value
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        //then() = quand l'email est envoyé avec succès, exécute la suite
        .then(() => { 
            success.value = true

            //Reset du champs
            name.value = ""
            surname.value = ""
            email.value = ""
            objet.value = ""
            message.value = ""
        })
        .catch(() => {
            errorMessage.value = "Erreur lors de l'envoi du message. Veuillez réessayer."
            console.log("Error")
        })
    }

    

</script>

<style scoped>

    section {
        height: calc(100vh - 200px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .contact {
        width: 100%;
        max-width: 420px;
        margin: 80px auto;
        padding: 30px;

        background-image: linear-gradient(rgba(22, 22, 26, 0.65), rgba(22, 22, 26, 0.65)),
        url("@/assets/theme.png");
        background-position: center;
        backdrop-filter: blur(10px);

        border-radius: 16px;
        box-shadow: 10px 10px 20px black;
        border: 1px solid #94a1b2;

        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* inputs */
    input, textarea {
        width: 100%;
        max-width: 400px;
        margin: 10px 0;
        padding: 12px 14px;

        border-radius: 8px;
        border: 1px solid transparent;

        background-color: #242629;
        box-shadow: 5px 5px 10px black;
        color: white;

        outline: none;
        transition: 0.2s;
        }

        /* focus (quand l'utilisateur clique dessus)*/
    input:focus, textarea:focus {
        border: 1px solid #7f5af0;
        box-shadow: 0 0 0 2px rgba(127,90,240,0.3);
    }

    input:hover, textarea:hover {
        border: 1px solid #7f5af0;
        box-shadow: 0 0 0 2px rgba(127,90,240,0.3);
    }

    /* textarea */
    textarea {
        min-height: 100px;
        resize: none;
        }

        /* bouton */
    button {
        margin-top: 15px;
        width: 100%;

        padding: 12px;
        border: none;
        border-radius: 8px;

        background: linear-gradient(to bottom right, #9b8cff, #7f5af0, #16161a);
        border: 2px solid #7f5af0;
        color: white;
        font-weight: bold;

        cursor: pointer;
        transition: 0.3s;
    }

    /* hover bouton */
    button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(127,90,240,0.5);
    }

    /* bouton disabled */
    button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    /* message succès */
    .success {
        margin-top: 15px;
        color: #4ade80;
        font-weight: 500;
    }

    .error {
        margin-top: 15px;
        color: #f87171;
        font-weight: 500;
    }
</style>