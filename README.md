# Umusic FrontEnd

[Umusic](https://umusic-frontend.herokuapp.com/)

## Règles et worklfow

Le workflow git utilisé dans le cadre de ce projet est le GitFlow.
Nous préconisons vivement à tous les developpeurs de lire la documentation suivante: https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow

Dans un soucis de cohérence, la branche Master est donc protégées en accord avec le workflow.
Les développeurs developperont sur les branches features/ et demanderont une merge/pull request via l'interface github dès qu'ils souhaitent fusionner leur branche avec devel.
Le code sera review par les autres membres du groupe. Si tout est OK, la branche feature est merge avec devel ce qui incorpore la feature avec la pre-production.

## Les features
 - Authentification
 - Visualisation des profils
 - Gestion des langues
 - Système de followers
 - Système de recherche d'utilisateurs
 - Création et recherche de rooms
 - Système de messagerie
 - Sytème de vidéo youtube qui est partagé à l'ensemble des utilisateurs d'une room
 - Le créateur de la room peut mettre en pause la vidéo et passer à la vidéo suivante
 - On peut mute localement la vidéo
 - Pour ajouter une nouvelle vidéo, il faut utiliser la commande !video dans le chat `!video https://www.youtube.com/watch?v=pAgnJDJN4VA`

## Les prérequis
### Outil
 - Installer yarn : <https://yarnpkg.com/en/docs/install>
 - Installer Git

### IDE ou Editeur
 1. Installer votre éditeur favori (WebStorm, VSCode, Vim, ...)
 2. S'assurer que votre éditeur puisse utiliser un "linter" tel qu'eslint
 3. Paramétré le pour qu'il puisse aussi utiliser "prettier" ainsi que "flow"

## Installation
```
  git clone git@github.com:wawrzy/umusic.git
  yarn
```

## Pour les développeurs
 - Les technologies utilisées sont react, redux, flow, eslint, material-ui, i18n	
 - Lancer le projet sur le serveur local : `yarn dev`

## Comment contribuer
 - Créer une branche feature/nom_feature
 - Dévelloper la feature
 - Vérifier flow et eslint avec `yarn flow` et `yarn lint`
 - Faire une pull request :rocket:

## Version
 - 1.0

## Licence
- Umusic est un projet open source sous la licence MIT :
  opensource.org/licenses/MIT


## Auteurs
 - Bourgeay William - Epitech
 - Wawrzyniak Julien - Epitech
 - Hostetter Alexy - Epitech

---
