<div align="center">

# 📝 Backend Notes

**API REST Express pour une application de prise de notes**

*Projet backend du parcours MERN Stack*

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![License](https://img.shields.io/badge/license-ISC-blue?style=for-the-badge)

</div>

---

## 📖 À propos

Ce dépôt contient le backend (API REST) d'une application de notes, développé avec **Express.js**. Il expose les routes permettant de créer et consulter des notes. Les données sont pour l'instant stockées **en mémoire** (pas de base de données), ce qui en fait une base pédagogique simple avant l'ajout d'une persistance (MongoDB, dans l'esprit MERN).

## ✨ Fonctionnalités

- 📋 Lister toutes les notes
- 🔎 Récupérer une note par son identifiant
- ➕ Envoyer une nouvelle note à l'API
- 🌐 CORS activé pour les appels depuis un frontend séparé
- 🔄 Rechargement automatique du serveur en développement (`nodemon`)

## 🛠️ Stack technique

| Technologie | Rôle |
|---|---|
| [Node.js](https://nodejs.org/) | Environnement d'exécution JavaScript |
| [Express](https://expressjs.com/) | Framework serveur HTTP |
| [cors](https://www.npmjs.com/package/cors) | Gestion des requêtes cross-origin |
| [nodemon](https://www.npmjs.com/package/nodemon) | Redémarrage automatique en développement |

## 📁 Structure du projet

```
backend-notes/
└── Express/
    ├── index.js              # Point d'entrée : configuration Express et routes
    ├── package.json          # Dépendances et scripts npm
    ├── package-lock.json
    └── Requests/
        └── crud.rest         # Exemples de requêtes HTTP (extension REST Client)
```

## 🚀 Installation

### Prérequis

- [Node.js](https://nodejs.org/) (npm inclus)

### Étapes

```bash
# Se placer dans le dossier du serveur
cd Express

# Installer les dépendances
npm install
```

> 💡 Si `npm install` semble bloqué anormalement longtemps, vérifie qu'aucun processus `node.exe` résiduel ne tourne déjà en arrière-plan (Gestionnaire des tâches) et ferme-le avant de relancer la commande.

## ▶️ Utilisation

```bash
# Démarrage en mode développement (redémarrage auto avec nodemon)
npm run dev

# Démarrage en mode production
npm start
```

Le serveur démarre par défaut sur le port **3001** (configurable via la variable d'environnement `PORT`).

```
Server running on port 3001
```

## 📡 Endpoints de l'API

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/` | Page d'accueil (message de test) |
| `GET` | `/api/notes` | Retourne la liste de toutes les notes |
| `GET` | `/api/notes/:id` | Retourne une note par son `id` |
| `POST` | `/api/notes` | Envoie une nouvelle note |

### Exemples de requêtes

```http
GET http://localhost:3001/api/notes
```

```http
POST http://localhost:3001/api/notes
Content-Type: application/json

{
  "content": "Ma nouvelle note",
  "important": false
}
```

Des exemples prêts à l'emploi sont disponibles dans [Express/Requests/crud.rest](Express/Requests/crud.rest) (utilisables avec l'extension VS Code [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)).

## ⚠️ Limitations connues

Ce projet est à un stade précoce de développement :

- Les notes sont stockées **en mémoire** : toutes les données sont perdues à chaque redémarrage du serveur.
- La route `POST /api/notes` renvoie actuellement la note reçue en écho, sans l'ajouter à la liste ni la persister.
- La recherche par `id` dans `GET /api/notes/:id` compare un identifiant numérique (`Number`) à un paramètre d'URL (`String`), ce qui peut empêcher la correspondance.

## 📄 Licence

Distribué sous licence **ISC**.
