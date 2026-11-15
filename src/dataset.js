// Base de Données Relationnelle des Arts Martiaux (10 disciplines / 18 techniques)
export const DATASET = {
  "version": "2.0",
  "derniere_mise_a_jour": "2026-11-15",
  "description": "Base de données relationnelle biomécanique et tactique des arts martiaux et sports de combat - 10 disciplines et 18 techniques fondamentales.",
  "disciplines_supportees": [
    "Boxe Anglaise",
    "Muay-Thaï",
    "Savate Boxe Française",
    "Sambo",
    "Wing Chun",
    "Judo",
    "Karaté",
    "Jiu-Jitsu Brésilien",
    "Lutte Libre & Gréco-Romaine",
    "MMA"
  ],
  "techniques": [
    {
      "id": "boxe-cross",
      "nom": "Direct du bras arrière (Cross)",
      "nom_international": "Rear Straight Cross",
      "discipline": "Boxe Anglaise",
      "famille": "Percussion (Striking)",
      "sous_famille": "Poing linéaire",
      "distance": "Moyenne à longue",
      "difficulte": 2,
      "puissance": 5,
      "risque": 2,
      "mecanique_levier": "Chaîne cinétique ascendante fermée vers ouverte : poussée plantaire (GRF), rotation axiale pelvienne et scapulaire, projection linéaire avec verrouillage terminal.",
      "muscles_moteurs": [
        "Gastrocnémiens et Soléaire",
        "Quadriceps et Grand fessier",
        "Obliques interne/externe",
        "Grand pectoral",
        "Triceps brachial",
        "Deltoïde antérieur"
      ],
      "muscles_stabilisateurs": [
        "Transverse de l'abdomen",
        "Érecteurs du rachis",
        "Dentelé antérieur",
        "Coiffe des rotateurs"
      ],
      "cibles_anatomiques": [
        "Menton (sinus carotidien / axe de rotation crânien)",
        "Plexus solaire",
        "Mâchoire"
      ],
      "failles_biomecaniques": [
        "Découvrement temporaire de la tempe droite lors de l'extension maximale",
        "Vulnérabilité au contre en overhand au-dessus du bras avant"
      ],
      "contres_recommandes": [
        "Esquive rotative (bob and weave) sous le bras puis crochet au foie",
        "Slip intérieur et contre-cross simultané",
        "Duck-under vers amenée au sol (Double leg)"
      ],
      "donnees_insep": {
        "force_elite_n": 3158,
        "force_junior_n": 1021,
        "vitesse_ms": 8.4,
        "angle_coude_deg": 112.9,
        "ratio_grf": "60.6% arrière / 39.4% avant"
      }
    },
    {
      "id": "boxe-jab",
      "nom": "Direct du bras avant (Jab)",
      "nom_international": "Lead Jab",
      "discipline": "Boxe Anglaise",
      "famille": "Percussion (Striking)",
      "sous_famille": "Poing linéaire",
      "distance": "Longue",
      "difficulte": 1,
      "puissance": 3,
      "risque": 1,
      "mecanique_levier": "Levier de vitesse du 3e genre : extension rapide du coude avec rotation médiale de l'avant-bras (pronation), minimisant le déplacement du centre de masse.",
      "muscles_moteurs": [
        "Deltoïde antérieur",
        "Triceps brachial",
        "Dentelé antérieur",
        "Pectoral supérieur"
      ],
      "muscles_stabilisateurs": [
        "Grand droit de l'abdomen",
        "Mollet avant"
      ],
      "cibles_anatomiques": [
        "Nez",
        "Menton",
        "Arcades sourcilières",
        "Plexus"
      ],
      "failles_biomecaniques": [
        "Absence de recul immédiat du bras laissant une ligne de contre ouverte",
        "Sur-engagement du poids vers l'avant"
      ],
      "contres_recommandes": [
        "Parade chassée de la paume droite et direct du droit",
        "Slip extérieur et uppercut au corps",
        "Overhand plongeant"
      ],
      "donnees_insep": {
        "force_elite_n": 1420,
        "force_junior_n": 650,
        "vitesse_ms": 9.8,
        "angle_coude_deg": 165.0,
        "ratio_grf": "45% arrière / 55% avant"
      }
    },
    {
      "id": "muay-low-kick",
      "nom": "Coup de pied bas circulaire au tibia (Low Kick)",
      "nom_international": "Thai Low Kick",
      "discipline": "Muay-Thaï",
      "famille": "Percussion (Striking)",
      "sous_famille": "Jambe circulaire",
      "distance": "Moyenne",
      "difficulte": 2,
      "puissance": 5,
      "risque": 3,
      "mecanique_levier": "Couple de rotation centrifuge : pivot à 180° sur la tête métatarsienne d'appui, antéversion et rotation de hanche, percussion avec le tiers distal du tibia.",
      "muscles_moteurs": [
        "Iliopsoas et Droit fémoral",
        "Grand fessier",
        "Obliques abdominaux",
        "Quadriceps",
        "Gastrocnémiens jambe d'appui"
      ],
      "muscles_stabilisateurs": [
        "Moyen fessier d'appui",
        "Tenseur du fascia lata",
        "Ligament croisé antérieur (préservé par le pivot)"
      ],
      "cibles_anatomiques": [
        "Vaste latéral du quadriceps",
        "Nerf sciatique poplité externe",
        "Creux poplité"
      ],
      "failles_biomecaniques": [
        "Appui unipodal précaire pendant 300 ms",
        "Exposition au direct plongeant au visage si la garde faiblit"
      ],
      "contres_recommandes": [
        "Blocage tibiale à 45° (Check tibio-fémoral)",
        "Retrait de hanche (Step-back) et riposte en High Kick",
        "Cross au menton en ligne directe"
      ],
      "donnees_insep": {
        "force_elite_n": 3800,
        "force_junior_n": 1450,
        "vitesse_ms": 12.2,
        "angle_coude_deg": 0,
        "ratio_grf": "Pivot unipodal 100%"
      }
    },
    {
      "id": "muay-teep",
      "nom": "Coup de pied d'arrêt frontal (Teep)",
      "nom_international": "Front Push Kick (Teep)",
      "discipline": "Muay-Thaï",
      "famille": "Percussion (Striking)",
      "sous_famille": "Jambe linéaire (Piston)",
      "distance": "Longue",
      "difficulte": 2,
      "puissance": 3,
      "risque": 2,
      "mecanique_levier": "Action de vérin hydraulique sagittal : flexion de hanche genou groupé, projection pelvienne antéro-postérieure et balancier compensatoire du buste.",
      "muscles_moteurs": [
        "Psoas-iliaque",
        "Droit fémoral",
        "Quadriceps",
        "Grand fessier (jambe d'appui)"
      ],
      "muscles_stabilisateurs": [
        "Transverse",
        "Muscles lombaires",
        "Mollet d'appui"
      ],
      "cibles_anatomiques": [
        "Plexus solaire",
        "Crête iliaque",
        "Hanche adverse",
        "Sternum"
      ],
      "failles_biomecaniques": [
        "Risque de saisie de cheville par l'adversaire",
        "Déséquilibre arrière en cas d'esquive latérale"
      ],
      "contres_recommandes": [
        "Balayage latéral de la jambe saisie et fauchage de jambe d'appui",
        "Parade chassée vers l'extérieur et low kick intérieur"
      ],
      "donnees_insep": {
        "force_elite_n": 2200,
        "force_junior_n": 900,
        "vitesse_ms": 7.5,
        "angle_coude_deg": 0,
        "ratio_grf": "Piston sagittal"
      }
    },
    {
      "id": "muay-elbow",
      "nom": "Coup de coude circulaire horizontal (Sok Tad)",
      "nom_international": "Horizontal Slash Elbow",
      "discipline": "Muay-Thaï",
      "famille": "Percussion (Striking)",
      "sous_famille": "Coude circulaire",
      "distance": "Courte (Clinch / Corps-à-corps)",
      "difficulte": 3,
      "puissance": 5,
      "risque": 3,
      "mecanique_levier": "Bras de levier ultra-court minimisant l'inertie et maximisant la vitesse angulaire de rotation scapulo-thoracique.",
      "muscles_moteurs": [
        "Grand pectoral",
        "Deltoïde antérieur",
        "Grand dorsal",
        "Obliques"
      ],
      "muscles_stabilisateurs": [
        "Trapèze supérieur",
        "Rhomboïdes",
        "Muscles spinaux"
      ],
      "cibles_anatomiques": [
        "Arcade sourcilière (effet lacérant sur tissus mous)",
        "Menton",
        "Pommette",
        "Tempe"
      ],
      "failles_biomecaniques": [
        "Nécessite une entrée à très courte distance exposant aux saisies de nuque et genoux"
      ],
      "contres_recommandes": [
        "Blocage bimanuel en double sous-aisselle (Underhooks) et projection",
        "Esquive arrière du buste (Pull-back) et remise en uppercut"
      ],
      "donnees_insep": {
        "force_elite_n": 2950,
        "force_junior_n": 1100,
        "vitesse_ms": 11.5,
        "angle_coude_deg": 35.0,
        "ratio_grf": "Enracinement court"
      }
    },
    {
      "id": "savate-fouette",
      "nom": "Fouetté figure avec la chaussure",
      "nom_international": "Savate Whipping Kick (Fouetté)",
      "discipline": "Savate Boxe Française",
      "famille": "Percussion (Striking)",
      "sous_famille": "Jambe circulaire armée",
      "distance": "Moyenne à longue",
      "difficulte": 3,
      "puissance": 4,
      "risque": 2,
      "mecanique_levier": "Armé spécifique par flexion de cuisse genou haut, puis détente explosive en fléau distal avec impact de la pointe rigide ou du coup de pied de la chaussure.",
      "muscles_moteurs": [
        "Quadriceps (extension terminale)",
        "Iliopsoas",
        "Moyen fessier",
        "Oblique externe"
      ],
      "muscles_stabilisateurs": [
        "Spinaux lombaires",
        "Muscles de la jambe d'appui en extension verrouillée"
      ],
      "cibles_anatomiques": [
        "Flanc (foie/rate)",
        "Tempe",
        "Mâchoire",
        "Cuisse"
      ],
      "failles_biomecaniques": [
        "Phase d'armé visible offrant une fenêtre d'interception linéaire"
      ],
      "contres_recommandes": [
        "Chassé d'arrêt frontal au départ du genou",
        "Décalage intérieur et direct plongeant"
      ],
      "donnees_insep": {
        "force_elite_n": 2600,
        "force_junior_n": 1050,
        "vitesse_ms": 13.8,
        "angle_coude_deg": 0,
        "ratio_grf": "Impulsion chaussure"
      }
    },
    {
      "id": "savate-chasse",
      "nom": "Chassé latéral d'arrêt",
      "nom_international": "Savate Side Push Kick (Chassé)",
      "discipline": "Savate Boxe Française",
      "famille": "Percussion (Striking)",
      "sous_famille": "Jambe linéaire profilée",
      "distance": "Longue",
      "difficulte": 3,
      "puissance": 4,
      "risque": 2,
      "mecanique_levier": "Piston latéral rectiligne profilé frappant avec le talon de la chaussure, alignant hanche, genou et cheville sur la même ligne de force axiale.",
      "muscles_moteurs": [
        "Grand fessier",
        "Quadriceps",
        "Ischio-jambiers",
        "Moyen fessier"
      ],
      "muscles_stabilisateurs": [
        "Transverse abdominal",
        "Obliques",
        "Muscles du mollet d'appui"
      ],
      "cibles_anatomiques": [
        "Plexus",
        "Foie",
        "Hanche adverse",
        "Rotule"
      ],
      "failles_biomecaniques": [
        "Profilage du buste réduisant la vision binoculaire sur le flanc opposé"
      ],
      "contres_recommandes": [
        "Parade basse en balancier et low kick sur jambe d'appui",
        "Esquive en pas de côté et crochet large"
      ],
      "donnees_insep": {
        "force_elite_n": 2850,
        "force_junior_n": 1180,
        "vitesse_ms": 9.2,
        "angle_coude_deg": 0,
        "ratio_grf": "Piston latéral talonnier"
      }
    },
    {
      "id": "sambo-rytchag-kolena",
      "nom": "Clé de genou en hyper-extension (Rytchag Kolena)",
      "nom_international": "Sambo Kneebar",
      "discipline": "Sambo",
      "famille": "Préhension (Grappling)",
      "sous_famille": "Soumission articulaire inférieure",
      "distance": "Sol / Corps-à-corps",
      "difficulte": 4,
      "puissance": 5,
      "risque": 4,
      "mecanique_levier": "Levier inter-appui de classe 1 : articulation fémoro-tibiale verrouillée en hyperextension, fulcrum au pubis et traction axiale sur la cheville.",
      "muscles_moteurs": [
        "Grands fessiers (pontage pelvien)",
        "Ischio-jambiers (verrouillage)",
        "Biceps brachial et Grand dorsal (traction)"
      ],
      "muscles_stabilisateurs": [
        "Core abdominal",
        "Adducteurs (pincement du fémur)"
      ],
      "cibles_anatomiques": [
        "Ligament croisé antérieur (LCA)",
        "Capsule postérieure du genou",
        "Ménisques"
      ],
      "failles_biomecaniques": [
        "Perte de contrôle du bassin adverse permettant une rotation de jambe et prise de dos"
      ],
      "contres_recommandes": [
        "Crochet de la jambe libre derrière le genou de l'attaquant (Figure four defense)",
        "Pontage rotatif et frappes au visage en Sambo Combat"
      ],
      "donnees_insep": {
        "force_elite_n": 1900,
        "force_junior_n": 780,
        "vitesse_ms": 3.2,
        "angle_coude_deg": 0,
        "ratio_grf": "Levier sol"
      }
    },
    {
      "id": "sambo-podkhvat",
      "nom": "Fauchage extérieur avec saisie de kurtka (Podkhvat)",
      "nom_international": "Sambo Outer Reaping Throw",
      "discipline": "Sambo",
      "famille": "Préhension (Grappling)",
      "sous_famille": "Projection / Fauchage",
      "distance": "Courte / Clinch",
      "difficulte": 3,
      "puissance": 4,
      "risque": 3,
      "mecanique_levier": "Déséquilibre (Kuzushi) par traction sur la veste (kurtka) et fauchage puissant de la cuisse avec bascule du haut du corps en couple de torsion.",
      "muscles_moteurs": [
        "Grand dorsal",
        "Biceps brachial",
        "Grand fessier jambe fauchante",
        "Ischio-jambiers"
      ],
      "muscles_stabilisateurs": [
        "Quadriceps jambe d'appui",
        "Spinaux lombaires"
      ],
      "cibles_anatomiques": [
        "Centre de gravité adverse (déplacement hors de la base de sustentation)"
      ],
      "failles_biomecaniques": [
        "Exposition au contre-fauchage en sacrifice arrière (Ura-Nage)"
      ],
      "contres_recommandes": [
        "Arrachement arrière en Souplesse (Suplex)",
        "Blocage du genou adverse et déviation axiale"
      ],
      "donnees_insep": {
        "force_elite_n": 3100,
        "force_junior_n": 1250,
        "vitesse_ms": 5.4,
        "angle_coude_deg": 90.0,
        "ratio_grf": "Couple de torsion"
      }
    },
    {
      "id": "wing-chun-lien-wan-kuen",
      "nom": "Coups de poing en chaîne le long de la ligne centrale (Lien Wan Kuen)",
      "nom_international": "Wing Chun Chain Punches",
      "discipline": "Wing Chun",
      "famille": "Percussion (Striking)",
      "sous_famille": "Poing vertical continu",
      "distance": "Courte à moyenne",
      "difficulte": 2,
      "puissance": 3,
      "risque": 2,
      "mecanique_levier": "Coups de poing verticaux à trajectoire axiale stricte le long du méridien sagittal médian, rotation en moulinet avec coudes rentrés.",
      "muscles_moteurs": [
        "Triceps brachial",
        "Deltoïde antérieur",
        "Dentelé antérieur"
      ],
      "muscles_stabilisateurs": [
        "Trapèze moyen",
        "Transverse de l'abdomen (posture Yee Jee Kim Yeung Ma)"
      ],
      "cibles_anatomiques": [
        "Nez",
        "Plexus",
        "Gorge",
        "Sternum"
      ],
      "failles_biomecaniques": [
        "Manque de puissance unitaire comparativement à une chaîne cinétique rotative avec hanche",
        "Vulnérabilité aux crochets larges extérieurs"
      ],
      "contres_recommandes": [
        "Crochet large (Hook) contournant la ligne centrale",
        "Blocage en coquille et clinch avec genou",
        "Takedown aux jambes sous la pluie de coups"
      ],
      "donnees_insep": {
        "force_elite_n": 1100,
        "force_junior_n": 520,
        "vitesse_ms": 11.2,
        "angle_coude_deg": 140.0,
        "ratio_grf": "Haute fréquence 6 Hz"
      }
    },
    {
      "id": "wing-chun-pak-sao",
      "nom": "Déviation réflexe paume ouverte (Pak Sao)",
      "nom_international": "Wing Chun Slapping Block (Pak Sao)",
      "discipline": "Wing Chun",
      "famille": "Interception & Déviation",
      "sous_famille": "Parade dynamique",
      "distance": "Moyenne à courte",
      "difficulte": 2,
      "puissance": 2,
      "risque": 1,
      "mecanique_levier": "Interception vectorielle perpendiculaire au poing adverse pour dévier sa trajectoire avec un coût énergétique minimal tout en ouvrant l'angle de frappe simultanée.",
      "muscles_moteurs": [
        "Grand pectoral",
        "Rond pronateur",
        "Dentelé antérieur"
      ],
      "muscles_stabilisateurs": [
        "Deltoïde postérieur",
        "Rhomboïdes"
      ],
      "cibles_anatomiques": [
        "Poignet / avant-bras adverse (déviation d'axe)"
      ],
      "failles_biomecaniques": [
        "Inefficace face à des trajectoires courbes (crochets, overhands)"
      ],
      "contres_recommandes": [
        "Feinte de direct avant suivie d'un crochet descendant",
        "Frappe en marteau au flanc"
      ],
      "donnees_insep": {
        "force_elite_n": 650,
        "force_junior_n": 310,
        "vitesse_ms": 12.0,
        "angle_coude_deg": 115.0,
        "ratio_grf": "Déviation tangentielle"
      }
    },
    {
      "id": "judo-morote-seoi-nage",
      "nom": "Projection d'épaule à deux mains (Morote Seoi-Nage)",
      "nom_international": "Two-Hand Shoulder Throw",
      "discipline": "Judo",
      "famille": "Préhension (Grappling)",
      "sous_famille": "Projection par-dessus l'épaule",
      "distance": "Corps-à-corps (Kumi-kata)",
      "difficulte": 4,
      "puissance": 5,
      "risque": 3,
      "mecanique_levier": "Levier de bascule de classe 1 : Kuzushi (déséquilibre avant), Tsukuri (abaissement du centre de masse sous celui de l'adversaire) et Kake (extension explosive des jambes et enroulement dorsal).",
      "muscles_moteurs": [
        "Quadriceps et Fessiers (extension puissante)",
        "Grand dorsal et Biceps (traction du revers/manche)",
        "Spinaux (enroulement)"
      ],
      "muscles_stabilisateurs": [
        "Ceinture abdominale",
        "Deltoïdes"
      ],
      "cibles_anatomiques": [
        "Centre de gravité adverse projeté au sol"
      ],
      "failles_biomecaniques": [
        "Exposition du dos en cas de blocage de hanche par l'adversaire"
      ],
      "contres_recommandes": [
        "Esquive de hanche par l'arrière et contre en Te-Guruma",
        "Ceinture arrière et contre-projection (Ushiro-Goshi)"
      ],
      "donnees_insep": {
        "force_elite_n": 3600,
        "force_junior_n": 1300,
        "vitesse_ms": 6.2,
        "angle_coude_deg": 85.0,
        "ratio_grf": "Extension bipodale 100%"
      }
    },
    {
      "id": "judo-o-soto-gari",
      "nom": "Grand fauchage extérieur (O-Soto-Gari)",
      "nom_international": "Major Outer Reaping",
      "discipline": "Judo",
      "famille": "Préhension (Grappling)",
      "sous_famille": "Fauchage direct",
      "distance": "Courte / Kumi-kata",
      "difficulte": 3,
      "puissance": 5,
      "risque": 3,
      "mecanique_levier": "Création d'un déséquilibre diagonal arrière droit chez l'adversaire, fixation de tout son poids sur son talon, puis fauchage par balancier de jambe.",
      "muscles_moteurs": [
        "Ischio-jambiers et Grand fessier (jambe fauchante)",
        "Pectoraux et Grand dorsal (poussée/traction du col)",
        "Quadriceps jambe d'appui"
      ],
      "muscles_stabilisateurs": [
        "Transverse abdominal",
        "Moyen fessier d'appui"
      ],
      "cibles_anatomiques": [
        "Jambe d'appui adverse fauchée au creux poplité"
      ],
      "failles_biomecaniques": [
        "Si le déséquilibre est incomplet, vulnérabilité extrême au contre-fauchage (O-Soto-Gaeshi)"
      ],
      "contres_recommandes": [
        "Contre-fauchage O-Soto-Gaeshi par transfert d'appui immédiat",
        "Esquive en dérobant la jambe et fauchage de soutien"
      ],
      "donnees_insep": {
        "force_elite_n": 3400,
        "force_junior_n": 1200,
        "vitesse_ms": 5.8,
        "angle_coude_deg": 95.0,
        "ratio_grf": "Fauchage diagonal"
      }
    },
    {
      "id": "karate-mae-geri",
      "nom": "Coup de pied de face fouetté ou pénétrant (Mae-Geri Keage / Kekomi)",
      "nom_international": "Karate Front Snap/Thrust Kick",
      "discipline": "Karaté",
      "famille": "Percussion (Striking)",
      "sous_famille": "Jambe linéaire axiale",
      "distance": "Moyenne à longue",
      "difficulte": 2,
      "puissance": 4,
      "risque": 2,
      "mecanique_levier": "Armé rapide du genou au plexus, extension violente de la jambe avec percussion par le koshi (coussinet plantaire sous les orteils relevés).",
      "muscles_moteurs": [
        "Quadriceps",
        "Iliopsoas",
        "Fléchisseurs des orteils",
        "Grand fessier jambe d'appui"
      ],
      "muscles_stabilisateurs": [
        "Abdominaux (gainage)",
        "Mollet d'appui"
      ],
      "cibles_anatomiques": [
        "Plexus solaire",
        "Foie",
        "Menton",
        "Testicules / Vessie"
      ],
      "failles_biomecaniques": [
        "Trajectoire axiale prévisible facilement balayée latéralement"
      ],
      "contres_recommandes": [
        "Blocage Gedan Barai et contre en Gyaku-Zuki",
        "Saisie de cheville et fauchage de la jambe d'appui"
      ],
      "donnees_insep": {
        "force_elite_n": 2450,
        "force_junior_n": 980,
        "vitesse_ms": 12.5,
        "angle_coude_deg": 0,
        "ratio_grf": "Impulsion koshi"
      }
    },
    {
      "id": "jjb-armbar",
      "nom": "Clé de bras en croix (Juji-Gatame / Armbar)",
      "nom_international": "Cross-body Armlock",
      "discipline": "Jiu-Jitsu Brésilien",
      "famille": "Préhension (Grappling)",
      "sous_famille": "Soumission articulaire supérieure",
      "distance": "Sol (Garde, Montée ou Dos)",
      "difficulte": 3,
      "puissance": 5,
      "risque": 3,
      "mecanique_levier": "Levier inter-appui de classe 1 parfait : le pubis agit comme point d'appui (fulcrum), les mains tractent l'extrémité du levier (poignet adverse avec pouce vers le haut), et l'extension pelvienne (F_pontage) applique la force perpendiculaire au coude.",
      "muscles_moteurs": [
        "Grands fessiers et Ischio-jambiers (pontage)",
        "Adducteurs (serrage des cuisses)",
        "Biceps et Grands dorsaux (traction)"
      ],
      "muscles_stabilisateurs": [
        "Transverse et Obliques (maintien du bassin)",
        "Érecteurs du rachis"
      ],
      "cibles_anatomiques": [
        "Capsule articulaire du coude",
        "Tendon distal du biceps",
        "Ligament collatéral ulnaire"
      ],
      "failles_biomecaniques": [
        "Si les genoux ne sont pas resserrés, l'adversaire peut tourner le coude et passer la garde (Hitchhiker escape)"
      ],
      "contres_recommandes": [
        "Hitchhiker escape par rotation interne du bras et pontage circulaire",
        "Stack pass (écrasement du bassin de l'attaquant contre ses cervicales)"
      ],
      "donnees_insep": {
        "force_elite_n": 2100,
        "force_junior_n": 820,
        "vitesse_ms": 2.8,
        "angle_coude_deg": 180.0,
        "ratio_grf": "Levier classe 1 au pubis"
      }
    },
    {
      "id": "jjb-guillotine",
      "nom": "Étranglement avant en guillotine (Guillotine Choke)",
      "nom_international": "Front Headlock Guillotine Choke",
      "discipline": "Jiu-Jitsu Brésilien",
      "famille": "Préhension (Grappling)",
      "sous_famille": "Étranglement sanguin / respiratoire",
      "distance": "Clinch ou Sol (Garde fermée)",
      "difficulte": 2,
      "puissance": 5,
      "risque": 3,
      "mecanique_levier": "Étau cervical : le radius s'insère sous la trachée ou comprime la carotide, compression axiale par fermeture de la garde fermée avec extension du tronc.",
      "muscles_moteurs": [
        "Biceps brachial",
        "Grand dorsal",
        "Grands droits et fléchisseurs du cou",
        "Psoas-iliaque (garde fermée)"
      ],
      "muscles_stabilisateurs": [
        "Rhomboïdes",
        "Trapèzes"
      ],
      "cibles_anatomiques": [
        "Artère carotide primitive (hypoxie cérébrale en 6-8 s)",
        "Cartilage thyroïde"
      ],
      "failles_biomecaniques": [
        "En cas d'échec en garde ouverte, l'adversaire bascule en contrôle latéral (Von Flue choke)"
      ],
      "contres_recommandes": [
        "Von Flue choke en sautant en garde latérale opposée avec pression d'épaule sur la gorge",
        "Saisie du poignet attaquant pour soulager la pression et redressement de nuque"
      ],
      "donnees_insep": {
        "force_elite_n": 1850,
        "force_junior_n": 750,
        "vitesse_ms": 2.5,
        "angle_coude_deg": 45.0,
        "ratio_grf": "Compression carotide"
      }
    },
    {
      "id": "lutte-double-leg",
      "nom": "Amenée au sol sur deux jambes (Double Leg Takedown)",
      "nom_international": "Double Leg Takedown (Morote-Gari)",
      "discipline": "Lutte Libre & Gréco-Romaine",
      "famille": "Préhension (Grappling)",
      "sous_famille": "Changement de niveau et fauchage",
      "distance": "Moyenne vers corps-à-corps",
      "difficulte": 3,
      "puissance": 5,
      "risque": 3,
      "mecanique_levier": "Abaissement explosif du centre de gravité (Level change), pénétration axiale du genou au sol, impact d'épaule au plexus/bassin et traction simultanée des creux poplités pour faucher la base adverse.",
      "muscles_moteurs": [
        "Quadriceps et Grands fessiers (propulsion explosive)",
        "Ischio-jambiers",
        "Deltoïde antérieur et Pectoraux (poussée d'épaule)",
        "Biceps (verrouillage des genoux)"
      ],
      "muscles_stabilisateurs": [
        "Core abdominal complet",
        "Muscles du cou et érecteurs du rachis"
      ],
      "cibles_anatomiques": [
        "Creux poplités (fauchage de la base de sustentation)",
        "Bassin"
      ],
      "failles_biomecaniques": [
        "Tête exposée à une guillotine réflexe ou à un coup de genou sauté si la trajectoire est trop prévisible"
      ],
      "contres_recommandes": [
        "Sprawl explosif avec recul des hanches et pression de poitrine sur la nuque",
        "Coup de genou sauté d'interception",
        "Prise de guillotine"
      ],
      "donnees_insep": {
        "force_elite_n": 3900,
        "force_junior_n": 1600,
        "vitesse_ms": 6.8,
        "angle_coude_deg": 90.0,
        "ratio_grf": "Propulsion horizontale 100%"
      }
    },
    {
      "id": "mma-ground-and-pound",
      "nom": "Frappes au sol depuis la garde ou la montée (Ground and Pound)",
      "nom_international": "Ground and Pound (GnP)",
      "discipline": "MMA",
      "famille": "Hybride (Striking au sol)",
      "sous_famille": "Percussion pesante asistée par la gravité",
      "distance": "Sol (Position dominante)",
      "difficulte": 3,
      "puissance": 5,
      "risque": 2,
      "mecanique_levier": "Combinaison de la chaîne cinétique descendante et du poids corporel libre accéléré par la gravité ( = 9.81\\text{ m/s}^2$) contre une cible immobilisée sur la surface dure du tapis.",
      "muscles_moteurs": [
        "Grand pectoral",
        "Triceps",
        "Grand fessier et spinaux (posture redressée)",
        "Obliques"
      ],
      "muscles_stabilisateurs": [
        "Adducteurs et genoux maintenant le contrôle de hanche adverse"
      ],
      "cibles_anatomiques": [
        "Menton",
        "Pommettes",
        "Côtes flottantes"
      ],
      "failles_biomecaniques": [
        "Perte de posture vers l'avant permettant un renversement en pontage (Upa) ou clé de bras"
      ],
      "contres_recommandes": [
        "Contrôle des poignets (Biceps ride), pontage explosif (Upa) vers la garde ou tentative de clé de bras (Armbar)"
      ],
      "donnees_insep": {
        "force_elite_n": 3250,
        "force_junior_n": 1200,
        "vitesse_ms": 7.9,
        "angle_coude_deg": 105.0,
        "ratio_grf": "Poids gravité + impulsion"
      }
    }
  ]
};
