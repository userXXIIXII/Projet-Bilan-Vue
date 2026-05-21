# Portfolio Aarin Deb

Portfolio personnel développé dans le cadre de ma formation **Développeur Web et Web Mobile** au Centre Européen de Formation.

Ce projet présente mon profil, mes compétences et plusieurs réalisations web à travers une interface moderne, responsive et dynamique.

## Démo en ligne

Le projet est disponible en ligne ici :

[Voir le portfolio](https://portfolio-aarin-deb.vercel.app/)

## Repository GitHub

[Voir le repository](https://github.com/userXXIIXII/Projet-Bilan-Vue)

## Objectifs du projet

L’objectif de ce portfolio est de créer un site professionnel permettant de :

- présenter mon profil de développeur web en formation ;
- mettre en avant mes compétences techniques ;
- afficher mes projets réalisés ;
- proposer un moyen de contact simple ;
- construire une interface claire, responsive et agréable à utiliser.

## Fonctionnalités principales

- Interface responsive adaptée aux différents formats d’écran
- Navigation entre les sections du site
- Affichage dynamique des projets
- Fenêtre modale pour consulter les détails d’un projet
- Utilisation d’un composable pour centraliser les données des projets
- Formulaire de contact intégré avec EmailJS
- Icônes avec lucide-vue-next
- Date de build générée automatiquement lors de la compilation
- Design sombre avec une couleur principale violette `#7f5af0`

## Technologies utilisées

- Vue.js
- Vite
- JavaScript
- HTML5
- CSS3
- EmailJS
- lucide-vue-next
- Vercel

## Prérequis

Avant d’installer le projet, il faut avoir :

- Node.js installé
- npm installé
- un éditeur de code comme Visual Studio Code
- un navigateur web récent

Version Node recommandée :

```bash
node -v
```

Le projet utilise une configuration prévue pour Node `^20.19.0` ou `>=22.12.0`.

## Installation du projet

### 1. Cloner le repository

```bash
git clone https://github.com/userXXIIXII/Projet-Bilan-Vue.git
```

### 2. Entrer dans le dossier du projet

```bash
cd Projet-Bilan-Vue
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Le projet sera ensuite accessible dans le navigateur à l’adresse indiquée dans le terminal, généralement :

```bash
http://localhost:5173
```

## Build de production

Pour générer une version optimisée du projet :

```bash
npm run build
```

Cette commande génère les fichiers de production dans le dossier `dist`.

## Prévisualiser la version de production

Après le build, il est possible de prévisualiser le projet avec :

```bash
npm run preview
```

## Structure du projet

```txt
Projet-Bilan-Vue/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── composables/
│   ├── App.vue
│   └── main.js
├── build-date.js
├── index.html
├── package.json
└── README.md
```

## Organisation du code

Le projet est organisé autour de composants Vue afin de séparer les différentes parties de l’interface.

La section des réalisations utilise un composable `useProjects.js`. Ce fichier contient les informations des projets : titre, description, image, technologies, lien de démonstration et lien GitHub.

Le composant `Project.vue` affiche les projets sous forme de cartes avec une boucle `v-for`. Lorsqu’un utilisateur clique sur un projet, une variable réactive `selected` stocke le projet sélectionné et ouvre une modal.

Le composant `Modal.vue` reçoit les informations du projet avec des props et utilise un événement `emit` pour prévenir le parent lorsque l’utilisateur ferme la fenêtre.

## Validation W3C

Le projet a été testé avec les validateurs W3C pour vérifier la qualité du HTML et du CSS générés.

Les captures d’écran des résultats sont intégrées dans le dossier de projet remis pour la soutenance.

## Auteur

**Aarin Deb**

Projet réalisé dans le cadre de la formation Développeur Web et Web Mobile.