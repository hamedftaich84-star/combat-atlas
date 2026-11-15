# Atlas Biomécanique & Tactique des Arts Martiaux 3.5 (PC & Mobile)

Plateforme web interactive et scientifique dédiée à la modélisation cinématique, biomécanique et tactique des arts martiaux et sports de combat.

---

## 🌟 Présentation Générale

L'**Atlas Biomécanique & Tactique** rassemble dans une interface unifiée :
1. **Un Moteur Cinématique 3D Séquentiel** : Modélisation volumétrique avec 6 caméras préconfigurées (Zénithale, Derrière, Gauche, Droite, Face, Isométrique) et décomposition pas-à-pas en 6 étapes ($0\%$ à $100\%$) pour visualiser la naissance, le déploiement et la diffusion des forces.
2. **Les Études Scientifiques INSEP REVEA (*Dr Daniel Dinu, HAL-05556088v1*)** : Captures cinématiques à 240 Hz par 17 UMI Xsens, données comparatives Élite vs Junior ($3\,158\text{ N}$ vs $1\,021\text{ N}$, vitesse $8,4\text{ m/s}$, angle optimal de coude $112,9^\circ$, ratio GRF $60,6\% / 39,4\%$, double pic sEMG de cocontraction $\Delta t \approx 18\text{ ms}$).
3. **L'Analyse Biomécanique du Kickboxing (*Votre EPS*)** : Théorie de la masse effective ($m_{\text{eff}} \approx 32\text{ kg}$), pivot avant-pied ($90^\circ-180^\circ$) et prévention des lésions du ligament croisé antérieur (LCA).
4. **Une Base de Données Relationnelle JSON v2.0** : 10 disciplines et 18 techniques fondamentales (Boxe, Muay-Thaï, Savate, Sambo, Wing Chun, Judo, Karaté, JJB, Lutte, MMA) avec fiches anatomiques complètes.
5. **Un Simulateur de Duel Tactique (A vs B)** : Calcul automatique de l'interaction cinétique, des failles exploitées et de l'avantage décisionnel entre deux techniques.
6. **Un Fight Timer & Coach Vocal Interactif** : Sons de cloche harmoniques en laiton (Web Audio API), synthèse vocale native (`window.speechSynthesis`) avec annonces de combinaisons et cibles impulsives (*Target Callout*), ergonomie haute visibilité (3 à 5 mètres) et maintien de l'écran allumé (*Screen WakeLock API*).
7. **Un Dojo de Sparring Virtuel** : Quiz décisionnel interactif sous stress avec score de réflexe et feedback biomécanique immédiat.
8. **L'Étude des Légendes (Fighter Studies)** : Fiches tactiques de Muhammad Ali, Mike Tyson, Buakaw Banchamek, Royce Gracie et Georges St-Pierre, avec chargement direct de leurs combinaisons dans le coach vocal.

---

## 📱 & 🖥️ Support Multi-Plateforme (PC & Téléphone)

* **Sur PC Desktop / Laptop** :
  * Contrôle orbital tridimensionnel à la souris.
  * Raccourcis clavier pro : <kbd>Espace</kbd> (Pause/Lecture 3D), <kbd>1</kbd> à <kbd>6</kbd> (Phases), <kbd>C</kbd> (Cycle caméras), <kbd>T</kbd> (Fight Timer), <kbd>R</kbd> (Réinitialiser), <kbd>Échap</kbd> (Fermer modale).
* **Sur Téléphone Mobile (Smartphone & Tablette)** :
  * Barre de navigation tactile inférieure (*Bottom Nav*) accessible d'un seul pouce.
  * Gestes multi-touch sur le modèle 3D : 1 doigt pour faire orbiter la vue, 2 doigts (*pinch-to-zoom*) pour zoomer.
  * Maintien automatique de l'écran allumé pendant les entraînements (*Screen WakeLock API*).
  * Déverrouillage automatique du son Web Audio sur premier toucher pour iOS (Safari) et Android (Chrome).
  * Rendu Retina haute définition adapté au ratio de pixels (`devicePixelRatio`).

---

## 📁 Architecture des Fichiers

```
public/combat-atlas/
├── index.html                           # Application unifiée autonome (HTML5, Tailwind CSS, Canvas 3D)
├── techniques_combat_dataset.json       # Jeu de données relationnel des 18 techniques
├── README.md                            # Documentation complète du module
└── images/                              # Ressources visuelles HD extraites de l'INSEP et Votre EPS
    ├── insep_boxeur_cross.png           # Avatar 3D Direct INSEP
    ├── insep_boxeur_hook.png            # Avatar 3D Crochet INSEP
    ├── insep_boxeur_uppercut.png        # Avatar 3D Uppercut INSEP
    ├── insep_page13_hd.png              # Planche comparative haute définition INSEP
    ├── figure1_insep.jpeg               # Graphe Force & Vitesse Élite vs Junior
    ├── figure2_insep.jpeg               # Graphe de Corrélation Force-Vitesse
    ├── figure3_insep.jpeg               # Données cinématiques
    ├── insep_avatars_all.png            # Ensemble des postures d'impact
    └── votreeps_planche_biomecanique.png# Planche biomécanique officielle Votre EPS
```

---

## 🚀 Utilisation & Déploiement

### En Local avec Vite
Lorsque le serveur de développement tourne :
```bash
npm run dev
```
Accédez à l'application via :
`http://localhost:5173/combat-atlas/`

### Double-clic direct (Hors-ligne)
L'application est 100% autonome et sans dépendances lourdes : double-cliquez simplement sur `index.html` pour l'ouvrir dans n'importe quel navigateur moderne.
