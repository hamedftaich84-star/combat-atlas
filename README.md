# Atlas Biomécanique & Tactique des Arts Martiaux (JavaScript ES6)

Application web modulaire **100% JavaScript (ES Modules)** dédiée à la modélisation cinématique, biomécanique et tactique des arts martiaux et sports de combat.

---

## 🚀 Architecture Modulaire JavaScript

L'application a été entièrement conçue et découpée en modules JavaScript modernes (`ES Modules` / `type="module"`) sans dépendances lourdes, nativement exécutables dans tous les navigateurs et déployables en un clic sur **GitHub Pages** :

```text
combat-atlas/
├── index.html                   # Point d'entrée HTML5 léger (<script type="module" src="./src/app.js">)
├── package.json                 # Configuration du projet JavaScript
├── README.md                    # Documentation complète
├── src/
│   ├── app.js                   # Orchestrateur central, routage d'onglets, raccourcis PC & plein écran
│   ├── dataset.js               # Base de données relationnelle (10 disciplines / 18 techniques fondamentales)
│   ├── engine3d.js              # Moteur Canvas 3D volumétrique, caméras, HUD Votre EPS, Mocap 60 fps
│   ├── timer.js                 # Fight Timer, synthèse Web Audio API en laiton, SpeechSynthesis, WakeLock
│   ├── duel.js                  # Simulateur de duel tactique interactif (A vs B) et collision cinétique
│   ├── encyclopedia.js          # Grille réactive, recherche plein texte et modale anatomique détaillée
│   ├── dojo.js                  # Dojo de sparring virtuel (QI de combat) et jauge d'expérience XP
│   └── fighters.js              # Fiches des 5 légendes (Ali, Tyson, Buakaw, Gracie, GSP) et injection vocale
└── images/                      # Illustrations et captures scientifiques haute résolution
    ├── insep_boxeur_cross.png   # Avatar 3D Direct INSEP
    ├── insep_boxeur_hook.png    # Avatar 3D Crochet INSEP
    ├── insep_boxeur_uppercut.png# Avatar 3D Uppercut INSEP
    ├── insep_page13_hd.png      # Planche comparative INSEP
    ├── figure1_insep.jpeg       # Graphes de force et vitesse Élite vs Junior
    ├── figure2_insep.jpeg       # Corrélation force-vitesse
    ├── figure3_insep.jpeg       # Données cinématiques
    ├── insep_avatars_all.png    # Planche des postures d'impact
    └── votreeps_planche_biomecanique.png # Planche biomécanique Votre EPS
```

---

## 🌟 Fonctionnalités Implémentées en JavaScript

1. **Moteur 3D Haute Résolution (`engine3d.js`)** :
   * Rendu Canvas matriciel pur sans WebGL lourd, auto-adapté aux écrans Retina (`window.devicePixelRatio`).
   * 6 caméras sphériques et orbite libre à $360^\circ$.
   * Découpage séquentiel en 6 étapes ($0\%$ à $100\%$) pour observer la naissance (GRF sol), le déploiement (torsion de hanche/buste) et la diffusion des forces (cocontraction terminale $\Delta t \approx 18\text{ ms}$).
   * Calques HUD conformes à la charte *Votre EPS* : Squelette Mocap cyan (`#00CED1`), vecteurs de force orange (`#FF6B35`), polygone de sustentation vert (`#00E676`) et centre de masse $CoM$ en 4 quadrants.
2. **Fight Timer & Synthétiseur Audio (`timer.js`)** :
   * Synthèse harmonique de cloche de ring en laiton et cliquette en bois via la **Web Audio API** native.
   * Annonces vocales en temps réel (`window.speechSynthesis`) en mode Combinaisons et mode *Target Callout* (« FOIE ! », « MENTON ! », « LOW KICK ! »).
   * Maintien automatique de l'écran mobile allumé via la **Screen WakeLock API**.
3. **Simulateur de Duel Tactique (`duel.js`)** :
   * Calcul d'interaction géométrique et cinétique entre n'importe quelle paire de techniques.
   * Détection des failles exploitées et calcul de l'avantage décisionnel en direct.
4. **Encyclopédie Martiale (`encyclopedia.js` & `dataset.js`)** :
   * 18 techniques et 10 disciplines (Boxe, Muay-Thaï, Savate, Sambo, Wing Chun, Judo, Karaté, JJB, Lutte, MMA).
   * Recherche instantanée et fiches anatomiques modales avec données INSEP REVEA (*Dr Daniel Dinu*).
5. **Dojo Virtuel (`dojo.js`)** :
   * Entraînement au réflexe décisionnel sous agression avec calcul de points d'expérience (XP).
6. **Légendes du Combat (`fighters.js`)** :
   * Fiches biomécaniques de Muhammad Ali, Mike Tyson, Buakaw Banchamek, Royce Gracie et Georges St-Pierre, avec bouton d'injection directe de leurs combinaisons fétiches dans le coach vocal.

---

## 💻 Démarrage Local

```bash
# Avec n'importe quel serveur HTTP statique (ex. serve, http-server, Vite)
npx serve .

# Ou avec Vite
npx vite
```

---

## 🌐 Déploiement en Ligne (GitHub Pages)

Le projet est configuré pour être servi directement à la racine de la branche `main` sur GitHub Pages :  
🔗 **[https://hamedftaich84-star.github.io/combat-atlas/](https://hamedftaich84-star.github.io/combat-atlas/)**
