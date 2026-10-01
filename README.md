# Anroll Baby - Application Monorepo

Bienvenue sur le projet **Anroll Baby**. Ce projet est structuré en **Monorepo** avec des espaces de travail (_workspaces_ npm) séparant le Frontend (React + Vite) du Backend (Node.js + Express).

---

## Prérequis

Assurez-vous d'avoir installé sur votre machine :

- **Node.js** : `v18.x` ou supérieur (recommandé : `v20.x`)
- **npm** : `v9.x` ou supérieur (fourni avec Node.js)
- **Git**

---

## Structure du Monorepo

```text
anroll-baby/
├── backend/                 # API Node.js / Express
├── frontend/                # Client React / Vite.js
├── package.json             # Configuration racine & npm workspaces
├── package-lock.json        # Arbre global des dépendances verrouillées
└── README.md                # Documentation globale du projet
```

---

## Installation

1. **Cloner le projet :**

   ```bash
   git clone <URL_DU_REPO_GITHUB>
   cd anroll-baby
   ```

2. **Installer toutes les dépendances (Front + Back) en une seule commande :**
   À la racine du projet, lancez :

   ```bash
   npm install
   ```

   > _Grâce aux Workspaces npm, cette commande installe automatiquement les dépendances de la racine, de `frontend/` et de `backend/` dans le dossier `node_modules` principal._

3. **Configurer les variables d'environnement :**
   - Créez un fichier `.env` dans le dossier `backend/` (en vous basant sur `backend/.env.example`).
   - Créez un fichier `.env` dans le dossier `frontend/` si nécessaire.

---

## Démarrage en Développement

Pour travailler sereinement, vous avez plusieurs options :

### 1. Lancer le Front et le Back en simultané (Recommandé)

Depuis la racine du projet :

```bash
npm run dev
```

Cette commande lance à la fois l'API Backend et le serveur Frontend React dans le même terminal via `concurrently`.

### 2. Lancer uniquement le Backend

```bash
npm run dev:back
```

_(Le serveur tourne généralement sur `http://localhost:5000`)_

### 3. Lancer uniquement le Frontend

```bash
npm run dev:front
```

_(L'application client tourne généralement sur `http://localhost:5173`)_

---

## Gestion des Dépendances (npm Workspaces)

Pour ajouter un nouveau package, il faut spécifier le workspace ciblé depuis la racine du monorepo :

- **Ajouter un paquet au Backend :**

  ```bash
  npm install <nom-du-paquet> --workspace=backend
  ```

- **Ajouter un paquet au Frontend :**

  ```bash
  npm install <nom-du-paquet> --workspace=frontend
  ```

- **Ajouter un outil de développement global (à la racine) :**

  ```bash
  npm install <nom-du-paquet> -D
  ```

---

## Build / Production

Pour compiler les projets avant un déploiement :

```bash
# Compile le frontend (Vite)
npm run build:front

# Compile le backend (si applicable)
npm run build:back
```

---

## Bonnes Pratiques de Contribution

1. **Branches Git :** Créez une branche par fonctionnalité en respectant le nommage :
   - Ex: `feature/US-01-enregistrement-enfant`
   - Ex: `fix/US-04-compte-a-rebours`
2. **Commits :** Faites des commits clairs et explicites.
3. **Pull Requests :** Soumettez votre PR vers `develop` pour relecture avant fusion.
