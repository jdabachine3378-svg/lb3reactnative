# Lab 3 - Construire un écran d'accueil défilant avec ScrollView

##  Description du projet

Ce projet démontre l'utilisation de `ScrollView` dans React Native pour créer un écran d'accueil avec du contenu défilant. Le texte d'accueil est volontairement long pour illustrer comment permettre à l'utilisateur de faire défiler et lire tout le contenu.

##  Objectifs du lab

-  Remplacer `View` par `ScrollView` pour permettre le défilement vertical
-  Configurer `indicatorStyle` pour une barre de défilement blanche visible sur fond sombre
-  Tester le comportement de défilement dans l'application

##  Prérequis

- Node.js installé (version 14 ou supérieure)
- npm ou yarn
- Expo CLI installé globalement (`npm install -g expo-cli`)

##  Installation et lancement

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer l'application

Pour lancer l'application dans le navigateur web :

```bash
npm start
# Puis appuyez sur 'w' pour ouvrir dans le navigateur web
# Ou utilisez directement :
npm run web
```

Pour lancer sur émulateur/appareil :

```bash
# Android
npm run android

# iOS
npm run ios
```

##  Structure du projet

```
.
├── App.js                 # Composant principal de l'application
├── WelcomeScreen.js       # Écran d'accueil avec ScrollView
├── components/
│   ├── AppHeader.js      # En-tête de l'application
│   └── AppFooter.js      # Pied de page de l'application
├── package.json          # Dépendances du projet
└── README.md             # Ce fichier
```

## 🔧 Modifications apportées

### Étape 1 : Transformation en ScrollView
- Remplacement de `View` par `ScrollView` dans `WelcomeScreen.js`
- Ajout de `style={{ flex: 1 }}` pour occuper toute la hauteur disponible

### Étape 2 : Indicateur de défilement blanc
- Ajout de `indicatorStyle="white"` au `ScrollView` pour une meilleure visibilité sur fond sombre

### Étape 3 : Test
- Test du défilement vertical avec le doigt ou la souris
- Vérification de la visibilité de la barre de défilement blanche

## ✨ Fonctionnalités

- 📜 Défilement vertical fluide du contenu
- 🎨 Barre de défilement blanche adaptée au thème sombre
- 📱 Responsive et compatible avec différents écrans

## Test de l'application

1. Lancez l'application avec `npm start` ou `npm run web`
2. Ouvrez l'émulateur ou le navigateur web
3. Affichez l'écran d'accueil (WelcomeScreen)
4. Faites défiler le texte du bas vers le haut avec le doigt ou la souris
5. Vérifiez que :
   - Tout le texte est accessible
   - La barre blanche de défilement apparaît sur le côté
   - Le défilement est fluide

##  Notes

- `ScrollView` remplace `View` comme conteneur principal pour permettre le défilement
- `indicatorStyle="white"` peut être changé en `indicatorStyle="black"` si le fond devient clair
- Cette approche peut être réutilisée pour n'importe quel écran avec beaucoup de contenu

##  Compétences validées

Ce lab valide la capacité à :
-  Choisir le bon composant conteneur (`ScrollView` vs `View`)
-  Configurer les props essentielles (`style`, `indicatorStyle`)
- Tester un comportement de défilement dans une application React Native

##  Ressources

- [Documentation React Native - ScrollView](https://reactnative.dev/docs/scrollview)
- [Documentation Expo](https://docs.expo.dev/)

