# Portfolio React

Un portfolio basique et responsive créé avec React et Vite.

## Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Section À propos avec compétences
- Section Projets avec grid responsive
- Section Contact avec liens
- Navigation smooth avec ancres
- Style moderne et épuré

## Structure du projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # En-tête avec navigation
│   │   ├── About.jsx        # Section à propos
│   │   ├── Projects.jsx     # Section projets
│   │   └── Contact.jsx      # Section contact
│   ├── App.jsx              # Composant principal
│   ├── App.css              # Styles globaux
│   └── main.jsx             # Point d'entrée
├── index.html
├── package.json
└── vite.config.js
```

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Construire pour la production :
```bash
npm run build
```

## Personnalisation

Pour personnaliser le portfolio :

1. **Contenu** : Modifiez les textes dans les composants (`src/components/`)
2. **Projets** : Ajoutez vos projets dans `src/components/Projects.jsx`
3. **Compétences** : Modifiez les skills dans `src/components/About.jsx`
4. **Liens** : Mettez à jour les liens dans `src/components/Contact.jsx`
5. **Couleurs** : Personnalisez les couleurs dans `src/App.css`

## Technologies utilisées

- React 18
- Vite
- CSS3 (Flexbox & Grid)
