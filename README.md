<div align="center">
  <img src="public/Asset 13.png" alt="Prosperify" width="120" />
  <h1>Prosperify – Frontend</h1>
  <p>Interface moderne en React pour la gestion d'assistants IA, organisations, utilisateurs et ressources.</p>
  <p>
    <strong>Stack :</strong> React 18 · TypeScript · Vite 5 · TailwindCSS · Preline · ApexCharts · React Router
  </p>
</div>

---

## 🚀 Objectif

Prosperify est une application front-end conçue pour offrir une expérience utilisateur fluide autour de la création et de la gestion :

* d'assistants (configuration, sources, exports, playground)
* d'organisations (membres, rôles, logs, API keys)
* d'utilisateurs (tableau de bord, paramètres)

Cette interface consomme une API (non incluse ici) et propose une base robuste pour étendre des fonctionnalités IA / SaaS.

## ✨ Fonctionnalités principales

* Authentification (interfaces login, inscription, vérification email, mot de passe oublié)
* Gestion multi-assistants (settings, sources, export, playground dédié)
* Espace Organisation : rôles, invitations, logs, API Keys, assistants partagés
* Dashboard Utilisateur & Organisation (navigation imbriquée via React Router)
* Composants UI réutilisables (alertes, modales, uploads, navigation, sidebar)
* Thématisation & animations (Tailwind + extensions)
* Charts interactifs (ApexCharts)
* Drag & Drop provider préparé (`DndProvider`)

## 🧱 Structure du projet

```
prosperify/
  public/                # Assets statiques
  src/
    assets/              # Images & icônes
    components/          # Composants réutilisables (base, dashboard, etc.)
    Pages/               # Pages (routing)
    types/               # Types TypeScript partagés
    App.tsx              # Définition des routes principales
    main.tsx             # Point d'entrée React
  vite.config.ts         # Config Vite + alias @
  tailwind.config.js     # Thème Tailwind étendu
  postcss.config.js      # PostCSS
  tsconfig*.json         # Config TypeScript
  eslint.config.js       # Règles ESLint / Prettier
```

## 🛠️ Stack & dépendances clés

| Domaine | Outils |
|--------|--------|
| UI | React 18, TailwindCSS, Preline, Lucide Icons |
| Form / Upload | @preline/file-upload, Dropzone |
| Charts | ApexCharts |
| Animations | framer-motion, tailwindcss-animate |
| Routing | react-router-dom |
| Utils | lodash, clsx, class-variance-authority, tailwind-merge |
| Qualité | ESLint, Prettier, TypeScript |

## 🔧 Installation & Démarrage

Prérequis : Node.js >= 18.

```bash
git clone <repo-url>
cd prosperify
pnpm install   # ou npm install / yarn
pnpm dev       # démarre le serveur de dev
```

Scripts disponibles :

```bash
npm dev       # Dev avec HMR
npm build     # Build production (tsc + vite)
npm preview   # Prévisualisation du build
npm lint      # Analyse ESLint
```

## 🧩 Routage principal (`App.tsx`)

* `/` : Accueil (Hero, démonstrations)
* `/assistant/:id` : Espace assistant (index, settings, sources, export)
* `/assistant/:id/playground` : Playground indépendant
* `/dashboard-user` : Espace utilisateur
* `/dashboard-orga` : Espace organisation (assistants, rôles, logs, API keys...)

## 🎨 Styles & Thème

* Tailwind configuré avec un set étendu de couleurs via variables CSS (`--primary`, `--accent`, etc.)
* Animations personnalisées (`fade-in`)
* `@tailwindcss/forms` pour les formulaires
* Preline pour composants interactifs (auto init via `HSStaticMethods.autoInit()` après navigation)

## 🧪 Qualité du code

* ESLint + TypeScript ESLint + plugins React / Import
* Prettier intégré (formatting)
* Organisation des composants par domaine (`components/common/...`)

## 🔌 Alias

Alias défini dans `vite.config.ts` :

```ts
alias: { '@': path.resolve(__dirname, './src') }
```

Permet des imports propres :

```ts
import { DndProvider } from '@/components/common/dashboardComponent/assistant/providers/dnd-provider'
```

## 📦 Assets & Charts

* ApexCharts importé globalement dans certaines pages
* Assets dans `public/` et `src/assets/`

## 🔐 (Prévu / À intégrer côté backend)

* Gestion authentification sécurisée (JWT / sessions)
* Permissions basées sur rôles (RBAC) pour l'organisation
* Webhooks / API Keys management

## 🗂 Types

Ajouter vos types dans `src/types/` (ex : `forms.ts`, `errors.ts`, `user.ts`). Centraliser les exports dans `types/index.ts`.


## 📝 Conventions suggérées

* Nommage fichiers composants : `NomComposant.variant.tsx` ou `context.feature.ts`
* Commits : Conventional Commits (`feat:`, `fix:`, `chore:`, etc.)
* Imports triés (auto ESLint/Prettier)

## 🧪 Vérifications locales

```bash
npm lint
npm build
npm preview
```

Bon code ✨

