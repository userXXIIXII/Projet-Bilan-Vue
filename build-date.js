import { readFileSync, writeFileSync, existsSync } from "fs"

// Crée la date actuelle au format français : jj/mm/aaaa
const date = new Date().toLocaleDateString("fr-FR")

// Lit le contenu actuel du fichier .env s'il existe
let envContent = existsSync(".env") ? readFileSync(".env", "utf8") : ""

// Si VITE_BUILD_DATE existe déjà, on remplace seulement sa date
if (envContent.includes("VITE_BUILD_DATE=")) {
    envContent = envContent.replace(
        /VITE_BUILD_DATE=.*/,
        `VITE_BUILD_DATE=${date}`
    )
} else {
    // Sinon, on ajoute la ligne à la fin du fichier
    envContent += `\nVITE_BUILD_DATE=${date}`
}

// Réécrit le fichier .env sans supprimer les autres variables
writeFileSync(".env", envContent)