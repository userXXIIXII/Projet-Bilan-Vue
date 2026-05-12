<template>
    <section id="Contact">
        <div class="contactBio">
            <h2><Mail size="40" color="#7f5af0"/> Contact</h2>
            <p>
                Une idée de projet ou une collaboration? <br>
                N'hésitez pas à me contacter, je serai ravi d'échanger avec vous !
            </p>
        </div>

        <div class="info">
            <p><Mail /> aarindeb2003@gmail.com</p>
            <p><Phone /> 06 50 24 13 97</p>
            <p><MapPin /> Paris, France</p>
        </div>

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

                <button type="submit">Envoyer <Send size="20"/></button>
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
    import { Mail, Phone, MapPin, Send } from "lucide-vue-next"

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
    min-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    padding: 0 60px;
}

/* Bloc de gauche */
.contactBio {
    flex: 1;
}

.contactBio h2 {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 35px;
    color: #fffffe;
}

.contactBio p {
    line-height: 1.8;
}

/* Bloc du milieu */
.info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-left: 60px;
    border-left: 1px solid rgba(148, 161, 178, 0.2);
}

.info p {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0;
}

.info svg {
    color: #94a1b2;
}

/* Formulaire à droite */
.contact {
    flex: 1.4;
    max-width: 700px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-row {
    display: flex;
    gap: 15px;
}

input,
textarea {
    width: 100%;
    padding: 15px 18px;

    border-radius: 8px;
    border: 1px solid rgba(148, 161, 178, 0.25);

    background-color: rgba(22, 22, 26, 0.45);
    color: #fffffe;

    outline: none;
    transition: 0.3s;
}

input:focus,
textarea:focus,
input:hover,
textarea:hover {
    border-color: #7f5af0;
    box-shadow: 0 0 0 2px rgba(127, 90, 240, 0.25);
}

textarea {
    min-height: 120px;
    resize: none;
}

button {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 14px 28px;
    border: none;
    border-radius: 8px;

    background: #7f5af0;
    color: #fffffe;
    font-weight: 600;

    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(127, 90, 240, 0.5);
}

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

    @media (max-width: 768px) {
        section {
            min-height: auto;
            flex-direction: column;
            align-items: stretch;
            gap: 35px;
            padding: 60px 20px;
            text-align: center;
        }

        .contactBio h2 {
            justify-content: center;
        }

        .info {
            padding-left: 0;
            border-left: none;
            align-items: center;
            gap: 18px;
        }

        .info p {
            justify-content: center;
            flex-wrap: wrap;
            text-align: center;
        }

        .contact {
            max-width: 100%;
        }

        .form-row {
            flex-direction: column;
        }

        input,
        textarea {
            font-size: 16px;
        }

        textarea {
            min-height: 150px;
        }

        button {
            width: 100%;
            justify-content: center;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        section {
            min-height: auto;
            flex-direction: column;
            align-items: stretch;
            gap: 40px;
            padding: 80px 40px;
            text-align: center;
        }

        .contactBio h2 {
            justify-content: center;
        }

        .info {
            padding-left: 0;
            border-left: none;
            align-items: center;
        }

        .contact {
            max-width: 100%;
        }

        button {
            align-self: center;
        }
    }
</style>