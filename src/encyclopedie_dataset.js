/**
 * Grande Encyclopédie des Sports de Combat et Arts Martiaux
 * Base de données exhaustive : Historique, Points Forts, Faiblesses et Nomenclatures Techniques
 */

export const ENCYCLOPEDIE_DATA = [
  // =========================================================================
  // 1. ARTS DE PERCUSSION (STRIKING)
  // =========================================================================
  {
    id: "boxe-anglaise",
    nom: "Boxe Anglaise (Noble Art)",
    nom_original: "English Boxing / Pugilism",
    categorie: "Striking (Percussion)",
    origine_pays: "Royaume-Uni / Monde Occidental",
    drapeau: "🇬🇧",
    siecle_apparition: "XVIIIe siècle (Règles de Broughton en 1743, Queensberry en 1867)",
    fondateurs_maitres: ["James Figg", "Jack Broughton", "Marquis de Queensberry", "Jack Dempsey", "Sugar Ray Robinson", "Muhammad Ali"],
    historique: "Héritière du pugilat antique gréco-romain et des combats clandestins à poings nus (bare-knuckle) de l Angleterre des XVIIe et XVIIIe siècles, la boxe anglaise s est institutionnalisée avec les règles du Marquis de Queensberry introduisant le port obligatoire des gants rembourrés, le ring de 24 pieds et les rounds chronométrés de 3 minutes. Devenue discipline olympique majeure en 1904, elle représente le standard planétaire absolu de la biomécanique des percussions au poing et des esquives de buste.",
    philosophie_et_biomecanique: "L art de toucher sans être touché. La biomécanique repose sur une chaîne cinétique ascendante fermée : impulsion plantaire au sol (GRF) -> rotation axiale pelvienne et scapulaire -> verrouillage terminal du poing à l impact. Utilisation maximale de l énergie élastique musculaire et du jeu de jambes (footwork) pour contrôler la distance et créer des angles de frappe décentrés.",
    points_forts: [
      "Précision, vitesse et timing des coups de poing inégalés dans le monde martial",
      "Science des esquives de buste (slipping, bob and weave, pull-back) et déplacements millimétrés",
      "Gestion clinique de la distance et maîtrise du jab comme arme d interception et de cadrage",
      "Conditionnement cardiovasculaire et endurance de puissance à très haute intensité"
    ],
    faiblesses: [
      "Absence totale de défenses contre les coups de pied, balayages et coups de genou/coude",
      "Vulnérabilité critique aux amenées au sol (takedowns) et à la préhension (clinch/lutte)",
      "Posture souvent trop penchée en avant ou profilée exposant la jambe avant aux low kicks",
      "Usage de gros gants modernes créant une fausse sensation de protection de la boîte crânienne"
    ],
    noms_et_techniques: {
      frappes_fondamentales: [
        { nom: "Jab", trad: "Direct du bras avant", desc: "Frappe linéaire rapide d évaluation, de cadrage et d interception" },
        { nom: "Cross (Straight)", trad: "Direct du bras arrière", desc: "Frappe de puissance majeure le long de la ligne centrale avec rotation du bassin" },
        { nom: "Lead Hook", trad: "Crochet avant", desc: "Trajectoire circulaire courte horizontale ciblant la mâchoire ou la tempe" },
        { nom: "Rear Hook", trad: "Crochet arrière", desc: "Percussion circulaire lourde en rotation complète du tronc" },
        { nom: "Uppercut", trad: "Coup remontant", desc: "Trajectoire verticale ascendante fendant la garde vers le menton ou le plexus" },
        { nom: "Overhand", trad: "Coup plongeant descendant", desc: "Frappe semi-circulaire plongeant par-dessus la garde adverse" },
        { nom: "Body Shot (Liver Shot)", trad: "Crochet au foie", desc: "Frappe oblique courte au niveau de l hypochondre droit provoquant un arrêt vagal" },
        { nom: "Shovel Hook", trad: "Crochet-uppercut hybride", desc: "Angle à 45° perforant les côtes flottantes" }
      ],
      esquives_et_defenses: [
        { nom: "Slip (Inside / Outside)", trad: "Esquive latérale de tête", desc: "Décalage d axe de quelques centimètres laissant passer le direct" },
        { nom: "Bob and Weave", trad: "Esquive rotative sous le bras", desc: "Flexion des jambes et trajectoire en U sous les crochets adverses" },
        { nom: "Pull-back (Fade)", trad: "Retrait de buste", desc: "Transfert du poids sur la jambe arrière pour faire frapper l adversaire dans le vide" },
        { nom: "Parry", trad: "Parade chassée", desc: "Déviation de la frappe adverse avec la paume ouverte du gant" },
        { nom: "High Guard (Shell)", trad: "Garde haute en coquille", desc: "Blocage des gants sur le front et les tempes pour absorber les impacts" },
        { nom: "Shoulder Roll (Philly Shell)", trad: "Enroulement d épaule", desc: "Déviation des coups avec l épaule gauche haute, popularisée par Mayweather" }
      ],
      deplacements_et_tactiques: [
        { nom: "Pivot Step", trad: "Pas de pivot", desc: "Rotation sur le pied avant pour contourner l adversaire et sortir de l axe" },
        { nom: "Check Hook", trad: "Crochet d arrêt en pivotant", desc: "Crochet décoché tout en pivotant à 90° face à un adversaire qui charge" },
        { nom: "Peek-a-boo", trad: "Style pendulaire garde fermée", desc: "Système de Cus D Amato basé sur des oscillations constantes et des contres explosifs" }
      ]
    }
  },

  {
    id: "muay-thai",
    nom: "Muay-Thaï (Boxe Thaïlandaise)",
    nom_original: "มวยไทย (Art des 8 membres)",
    categorie: "Striking (Percussion & Clinch)",
    origine_pays: "Thaïlande",
    drapeau: "🇹🇭",
    siecle_apparition: "XVIe siècle (Origines militaires Muay Boran, modernisation au XXe siècle)",
    fondateurs_maitres: ["Roi Naresuan", "Nai Khanom Tom", "Samart Payakaroon", "Dieselnoi Chor Thanasukarn", "Buakaw Banchamek", "Saenchai P.K. Saenchai"],
    historique: "Art martial militaire issu des champs de bataille du Royaume de Siam (Muay Boran), codifié au début du XXe siècle avec l adoption du ring et des gants occidentaux. Il est baptisé l Art des 8 membres en raison de l utilisation combinée des 2 poings, 2 coudes, 2 genoux et 2 tibias. C est le système de percussion debout le plus éprouvé et redouté au monde, pilier incontournable du striking en MMA moderne.",
    philosophie_et_biomecanique: "Conditionnement maximal à l impact et destruction systématique des appuis et de la structure adverse. La biomécanique des coups de pied circulaires (Tei) repose sur une rotation intégrale du bassin avec pivotement sur la tête métatarsienne du pied d appui ($90^\\circ$ à $180^\\circ$) pour éliminer le cisaillement du ligament croisé antérieur (LCA) et transformer le tibia en un fléau rigide.",
    points_forts: [
      "Puissance de frappe dévastatrice des tibias, coudes et genoux",
      "Maîtrise absolue du corps-à-corps debout (Clinch / Chap Ko) avec projections et genoux de destruction",
      "Efficacité redoutable des coups de coude lacérants à courte distance",
      "Capacité d absorption et durcissement mental et physique exceptionnel"
    ],
    faiblesses: [
      "Anglaise (jeu de poings) traditionnellement moins variée que la boxe occidentale pure",
      "Rythme initialement lent sur les premiers rounds selon les traditions de paris du stadium thaï",
      "Absence totale de travail au sol (grappling/soumissions)",
      "Vulnérabilité aux amenées au sol en lutte libre (Double/Single leg takedown)"
    ],
    noms_et_techniques: {
      frappes_fondamentales: [
        { nom: "Teep (Teep Trong)", trad: "Coup de pied frontal de piston", desc: "Vérin hydraulique sagittal pour repousser, stopper l avancée ou briser la garde" },
        { nom: "Tei Chiang", trad: "Coup de pied circulaire diagonal", desc: "Percussion montante au flanc et aux côtes délivrée avec le tiers distal du tibia" },
        { nom: "Tei Khaa (Low Kick)", trad: "Coup de pied bas au fémur/tibia", desc: "Frappe circulaire descendante détruisant le vaste externe ou le nerf sciatique" },
        { nom: "Tei Karn Kor (High Kick)", trad: "Coup de pied circulaire à la tête", desc: "Percussion haute visant les carotides ou la tempe" },
        { nom: "Sok Tad", trad: "Coup de coude horizontal", desc: "Trajectoire circulaire tranchante à hauteur des pommettes ou des arcades" },
        { nom: "Sok Ti", trad: "Coup de coude descendant tranchant", desc: "Trajectoire oblique de haut en bas pour ouvrir les tissus mous" },
        { nom: "Sok Ngad", trad: "Coup de coude remontant", desc: "Uppercut du coude passant au centre de la garde vers la pointe du menton" },
        { nom: "Sok Klab", trad: "Coup de coude retourné", desc: "Rotation à 360° délivrant la pointe olécranienne avec un couple centrifuge maximal" },
        { nom: "Khao Trong", trad: "Coup de genou frontal direct", desc: "Propulsion pelvienne pénétrante au sternum ou au plexus" },
        { nom: "Khao Dui", trad: "Coup de genou circulaire au flanc", desc: "Percussion de genou en crochet au foie ou aux côtes flottantes dans le clinch" },
        { nom: "Khao Loy", trad: "Coup de genou sauté volant", desc: "Extension explosive unipodale avec propulsion du genou vers la tête" }
      ],
      clinch_et_projections: [
        { nom: "Chap Ko (Plum)", trad: "Double collier thaï", desc: "Contrôle bimanuel de la nuque adverse pour abaisser la tête vers les genoux montants" },
        { nom: "Bik", trad: "Torsion et bascule de nuque", desc: "Déséquilibre rotatif du haut du corps pour projeter l adversaire au tapis" },
        { nom: "Pak Look Khow", trad: "Balayage intérieur de jambe", desc: "Fauchage de la jambe d appui au moment d un transfert de poids" }
      ],
      defenses_et_blocages: [
        { nom: "Bang (Check)", trad: "Blocage tibio-fémoral à 45°", desc: "Élévation du tibia vers l extérieur pour percuter et briser le coup de pied adverse" },
        { nom: "Dodge / Step-back", trad: "Retrait de hanche", desc: "Recul d un pas de la cuisse visée pour faire passer le coup dans le vide avant de riposter" }
      ]
    }
  },

  {
    id: "savate-boxe-francaise",
    nom: "Savate Boxe Française",
    nom_original: "Savate / Boxe Française (SBF)",
    categorie: "Striking (Percussion chaussée)",
    origine_pays: "France",
    drapeau: "🇫🇷",
    siecle_apparition: "Début XIXe siècle (Fusion du Chausson marseillais et de la Savate parisienne par Michel Casseux et Charles Lecour)",
    fondateurs_maitres: ["Michel Casseux", "Charles Lecour", "Joseph Charlemont", "Richard Sylla", "Farid Khider"],
    historique: "Née dans les rues de Paris et sur les quais de Marseille au XIXe siècle, la Savate a été codifiée et raffinée en fusionnant l escrime des pieds (chausson) avec la boxe anglaise introduite par Charles Lecour après son voyage à Londres en 1838. Particularité absolue : c est le seul sport de combat de percussion où les frappes de pieds sont portées obligatoirement avec des **chaussures rigides homologuées** (pointes, talons, carres), conférant une précision géométrique et un tranchant uniques.",
    philosophie_et_biomecanique: "Élégance, précision balistique et non-continuité des trajectoires. Contrairement au Muay-Thaï où la jambe est lancée comme un fléau rigide, le coup de pied de Savate est obligatoirement **armé** (flexion de la cuisse et du genou) avant d être détendu en piston ou en fouet. Les chaussures créent des concentrations de contraintes mécaniques extrêmement élevées sur des surfaces d impact de quelques centimètres carrés.",
    points_forts: [
      "Précision chirurgicale des frappes de pieds grâce au port de la chaussure rigide",
      "Variété balistique exceptionnelle et mobilité permanente sur appuis légers",
      "Combinaisons poings-pieds fluides et transitions d axes imprévisibles",
      "Excellente gestion de la longue distance et des arrêts nets"
    ],
    faiblesses: [
      "Interdiction des frappes avec les tibias, coudes et genoux dans le règlement sportif",
      "Interdiction totale du clinch, des saisies de jambes et de la lutte au sol",
      "La phase d armé obligatoire peut être interceptée par un striker direct ou un grappler",
      "Moins efficace pieds nus sans la rigidité structurelle de la chaussure"
    ],
    noms_et_techniques: {
      frappes_fondamentales: [
        { nom: "Fouetté (Bas, Médian, Figure)", trad: "Coup de pied circulaire armé", desc: "Armé genou haut puis détente explosive en fléau frappant avec le coup de pied ou la pointe" },
        { nom: "Chassé Frontal", trad: "Coup de pied direct de piston", desc: "Poussée rectiligne frappant avec le talon ou la semelle pour stopper net l adversaire" },
        { nom: "Chassé Latéral", trad: "Coup de pied d arrêt profilé", desc: "Piston latéral alignant hanche, genou et cheville frappant avec le talon" },
        { nom: "Chassé Tournant", trad: "Chassé retourné en rotation", desc: "Rotation à 360° délivrant le talon au foie ou au plexus avec un bras de levier maximal" },
        { nom: "Revers Fouetté", trad: "Coup de pied en revers circulaire", desc: "Trajectoire circulaire de l intérieur vers l extérieur frappant avec la semelle ou la carre" },
        { nom: "Revers Groupé", trad: "Revers armé et détendu", desc: "Armé genou plié et fouetté extérieur vers la tempe ou le foie" },
        { nom: "Coup de pied bas de déséquilibre", trad: "Balayage ou frappe basse", desc: "Percussion basse sur la chaussure ou le bas du mollet adverse pour créer la chute" }
      ],
      poings_anglaise_integres: [
        { nom: "Direct avant", desc: "Préparation et maintien à distance" },
        { nom: "Direct arrière", desc: "Frappe lourde en chaîne cinétique" },
        { nom: "Crochet", desc: "Percussion circulaire courte au visage ou au foie" },
        { nom: "Uppercut", desc: "Frappe ascendante au menton ou à l abdomen" }
      ],
      esquives_et_deplacements: [
        { nom: "Décalage", trad: "Sortie d axe latérale d un pied", desc: "Pose d un pied hors de la ligne d attaque adverse tout en maintenant l orientation" },
        { nom: "Débordement", trad: "Contournement complet", desc: "Déplacement des deux appuis pour se positionner dans le dos ou sur le flanc de l adversaire" }
      ]
    }
  },

  {
    id: "karate",
    nom: "Karaté (Shotokan, Kyokushin, Wado-Ryu)",
    nom_original: "空手道 (La Voie de la Main Vide)",
    categorie: "Striking (Percussion traditionnelle & sportive)",
    origine_pays: "Japon (Île d Okinawa)",
    drapeau: "🇯🇵",
    siecle_apparition: "Début XXe siècle à Tokyo (Racines du Ryukyu XVIIe siècle, Tode)",
    fondateurs_maitres: ["Gichin Funakoshi (Shotokan)", "Masutatsu Oyama (Kyokushin)", "Kenwa Mabuni (Shito-Ryu)", "Hironori Otsuka (Wado-Ryu)", "Chojun Miyagi (Goju-Ryu)"],
    historique: "Développé sur l île d Okinawa sous influence des boxes chinoises du Fujian (Kung Fu de la Grue Blanche), le Karaté a été introduit sur l île principale du Japon dans les années 1920 par Maître Gichin Funakoshi. Initialement écrit 'Main de Chine', ses idéogrammes ont été modifiés en 'Main Vide' (Kara-Te) pour refléter la philosophie zen et le désarmement. Il s est diversifié entre le Shotokan (longues postures rigides, Kime puissant), le Kyokushin (combat réel au KO sans protections, low kicks et coups au corps destructeurs) et le Karaté WKF olympique.",
    philosophie_et_biomecanique: "Principe du **Ikken Hissatsu** ('Un coup, une mort') : concentrer l intégralité de la masse et de l intention en une fraction de seconde à l impact. La biomécanique repose sur le **Kime** (verrouillage musculaire isométrique terminal instantané), l ancrage au sol dans des postures basses (Zenkutsu-Dachi, Kiba-Dachi) et l utilisation du **Hikite** (bras opposé qui tire violemment en arrière pour créer un couple de torsion démultiplicateur).",
    points_forts: [
      "Vitesse de jaillissement linéaire (Tsuki) et gestion de la distance de pénétration (Maai)",
      "Puissance de pénétration ponctuelle extrême (Kime) capable de fracturer des os",
      "Endurance aux impacts et robustesse légendaire des pratiquants de Kyokushin",
      "Variété des trajectoires de jambes surprenantes (Mae Geri, Mawashi, Ushiro Geri, Kakato Geri)"
    ],
    faiblesses: [
      "Dans le style Shotokan sportif : arrêt au point (Touch and reset) créant de mauvaises habitudes de replacement",
      "Dans le Kyokushin : interdiction des frappes de poings au visage créant un angle mort défensif",
      "Absence de lutte au sol, de soumissions articulaires et de travail de clinch avancé",
      "Gardes souvent trop basses ou ouvertes face aux combinaisons circulaires de boxe anglaise moderne"
    ],
    noms_et_techniques: {
      coups_de_poing_tsuki: [
        { nom: "Oi-Zuki", trad: "Coup de poing direct en avançant", desc: "Pénétration explosive avec le poing du côté de la jambe qui avance" },
        { nom: "Gyaku-Zuki", trad: "Coup de poing inverse arrière", desc: "Frappe de contre majeure avec rotation complète de la hanche arrière (équivalent du Cross)" },
        { nom: "Kizami-Zuki", trad: "Coup de poing direct avant jaillissant", desc: "Détente rapide de l avant-bras avec bascule des hanches (équivalent du Jab)" },
        { nom: "Uraken-Uchi", trad: "Frappe du revers de poing", desc: "Mouvement de fléau du coude visant la tempe ou le nez" },
        { nom: "Shuto-Uchi", trad: "Frappe du tranchant de la main", desc: "Impact sabre de la main ciblant la carotide ou les côtes flottantes" },
        { nom: "Empi-Uchi (Hiji)", trad: "Coup de coude", desc: "Percussion circulaire, ascendante ou descendante à bout portant" }
      ],
      coups_de_pied_geri: [
        { nom: "Mae-Geri (Keage / Kekomi)", trad: "Coup de pied de face fouetté / pénétrant", desc: "Armé au plexus et percussion par le koshi (coussinet plantaire)" },
        { nom: "Mawashi-Geri", trad: "Coup de pied circulaire", desc: "Rotation de hanche frappant avec le coup de pied ou le koshi" },
        { nom: "Yoko-Geri (Keage / Kekomi)", trad: "Coup de pied latéral", desc: "Frappe rectiligne avec le tranchant externe du pied (Sokuto)" },
        { nom: "Ushiro-Geri", trad: "Coup de pied direct vers l arrière", desc: "Piston arrière puissant décoché avec le talon, redoutable en contre" },
        { nom: "Ura-Mawashi-Geri", trad: "Coup de pied circulaire inversé", desc: "Balayage circulaire fouetté frappant la tempe avec la plante du talon" },
        { nom: "Kakato-Geri (Axe Kick)", trad: "Coup de pied marteau descendant", desc: "Élévation de jambe verticale et retombée violente du talon sur la tête ou la clavicule" }
      ],
      blocages_uke: [
        { nom: "Age-Uke", trad: "Blocage ascendant", desc: "Protection haute de l avant-bras contre les frappes descendantes" },
        { nom: "Gedan-Barai", trad: "Balayage descendant vers le bas", desc: "Déviation basse contre les coups de pied de face" },
        { nom: "Uchi-Uke", trad: "Blocage de l intérieur vers l extérieur", desc: "Déviation latérale au niveau moyen" },
        { nom: "Soto-Uke", trad: "Blocage de l extérieur vers l intérieur", desc: "Interception circulaire externe protégeant le buste" }
      ]
    }
  },

  {
    id: "taekwondo",
    nom: "Taekwondo",
    nom_original: "태권도 (La Voie du Coup de Pied et du Poing)",
    categorie: "Striking (Percussion dynamique axée sur les jambes)",
    origine_pays: "Corée du Sud",
    drapeau: "🇰🇷",
    siecle_apparition: "1955 (Unification des Kwans par le Général Choi Hong Hi)",
    fondateurs_maitres: ["Général Choi Hong Hi", "Grand Maître Lee Won Kuk", "Hwang Kee"],
    historique: "Enraciné dans les arts ancestraux coréens (Taekkyon, Subak) et influencé par le karaté japonais pendant l occupation de la Corée, le Taekwondo a été formalisé dans les années 1950 par le Général Choi Hong Hi pour l armée sud-coréenne. Divisé en deux branches majeures (l ITF traditionnelle et la WT olympique depuis l an 2000), il est célèbre pour être le système martial le plus acrobatique, rapide et spectaculaire au monde pour les frappes de jambes.",
    philosophie_et_biomecanique: "Exploitation maximale de l effet de levier et de l énergie cinétique de rotation centrifuge. Les combattants combattent en garde très légère sur la pointe des pieds, utilisant le balancier scapulaire et des rotations axiales à $360^\\circ$ et $540^\\circ$ pour délivrer des vitesses de percussion de pied dépassant les 15 mètres par seconde.",
    points_forts: [
      "Vitesse d exécution et agilité des coups de pied les plus rapides du monde martial",
      "Capacité à frapper à la tête sous des angles imprévisibles et acrobatiques",
      "Gestion exceptionnelle des feintes et des changements de garde en sautillant",
      "Dextérité et souplesse pelvienne permettant des frappes directes sans phase d armé visible"
    ],
    faiblesses: [
      "Faiblesse notoire du travail de poings (quasi-inexistant au visage en compétition WT)",
      "Garde très basse tenue au niveau des hanches laissant la tête totalement vulnérable aux coups de poing",
      "Absence complète de lutte, de préhension et de combat au sol",
      "Prise de risque extrême avec des coups sautés/retournés laissant le dos exposé"
    ],
    noms_et_techniques: {
      coups_de_pied_chagi: [
        { nom: "Ap Chagi", trad: "Coup de pied de face fouetté", desc: "Détente ultra-rapide au ventre ou au menton avec le bol du pied (Apchook)" },
        { nom: "Dollyo Chagi", trad: "Coup de pied circulaire", desc: "Rotation de hanche très vive frappant avec le dessus du pied (Baldeung)" },
        { nom: "Yeop Chagi", trad: "Coup de pied latéral pénétrant", desc: "Piston latéral percutant avec le tranchant du talon" },
        { nom: "Dwi Chagi", trad: "Coup de pied retourné direct arrière", desc: "Pivot express à 180° et détente du talon dans le plexus de l adversaire qui avance" },
        { nom: "Bandae Dollyo Chagi (Huryeo Chagi)", trad: "Coup de pied circulaire retourné (Wheel Kick)", desc: "Rotation à 360° fauchant le visage avec le talon" },
        { nom: "Naeryeo Chagi", trad: "Coup de pied descendant (Axe Kick)", desc: "Élévation de jambe tendue retombant sur le visage ou la clavicule" },
        { nom: "Twimyo Chagi", trad: "Coups de pied sautés acrobatiques", desc: "Famille de coups de pied décochés en suspension aérienne (360°, 540°, 720°)" }
      ]
    }
  },

  {
    id: "wing-chun",
    nom: "Wing Chun Kung Fu",
    nom_original: "詠春拳 (Chant du Printemps)",
    categorie: "Striking & Interception (Courte distance)",
    origine_pays: "Chine (Foshan / Canton)",
    drapeau: "🇨🇳",
    siecle_apparition: "Fin du XVIIIe siècle / Début XIXe siècle",
    fondateurs_maitres: ["Ng Mui (None bouddhiste)", "Yim Wing-Chun", "Leung Jan", "Ip Man (Yip Man)", "Bruce Lee (premier élève célèbre d Ip Man)"],
    historique: "Selon la légende, cet art martial du Sud de la Chine a été créé par la nonne bouddhiste Ng Mui et transmis à la jeune Yim Wing-Chun pour permettre à une personne de petit gabarit de vaincre un agresseur plus fort et plus lourd. Préservé secrètement à Foshan puis diffusé à Hong Kong par le légendaire Grand Maître Ip Man dans les années 1950, le Wing Chun est l art de l économie de mouvement, de la ligne centrale et du combat au corps-à-corps ultra-rapide.",
    philosophie_et_biomecanique: "Théorie de la **Ligne Centrale** (Zhong Xian) : le chemin le plus court entre deux points étant la ligne droite, toutes les attaques et défenses occupent le méridien vertical central. Utilisation du principe de déviation vectorielle plutôt que d opposition de force, avec adhérence tactile continue par les bras sensibles (**Chi Sao**).",
    points_forts: [
      "Vitesse de percussion phénoménale le long de la ligne centrale (jusqu à 6 à 8 coups par seconde)",
      "Réflexes tactiles et déviations automatiques grâce à l entraînement au Chi Sao",
      "Économie d énergie totale : pas de mouvements amples ni de fioritures",
      "Simultanéité parfaite de l attaque et de la défense (Lin Sil Die Dar)"
    ],
    faiblesses: [
      "Manque de puissance unitaire brute par rapport à une rotation complète de hanche moderne",
      "Vulnérabilité tactique face aux crochets larges et overhands qui contournent la ligne centrale",
      "Travail de jambes limité à des coups d arrêt bas (Genoux/Tibias), inefficace à très longue distance",
      "Absence de lutte au sol moderne et de défense contre les takedowns explosifs"
    ],
    noms_et_techniques: {
      techniques_de_mains: [
        { nom: "Lien Wan Kuen", trad: "Coups de poing verticaux en chaîne", desc: "Moulinet ininterrompu de directs verticaux le long de la ligne centrale" },
        { nom: "Pak Sao", trad: "Main qui gifle / déviation", desc: "Interception perpendiculaire au poignet adverse pour dévier sa trajectoire" },
        { nom: "Tan Sao", trad: "Main qui disperse paume vers le haut", desc: "Structure géométrique triangulaire du bras déviant une attaque haute" },
        { nom: "Bong Sao", trad: "Bras en aile levée", desc: "Déviation passive par pivotement du coude sur une poussée latérale" },
        { nom: "Fook Sao", trad: "Main qui contrôle", desc: "Pression du poignet descendant pour immobiliser l avant-bras adverse" },
        { nom: "Jum Sao", trad: "Main qui tranche vers le bas", desc: "Coupure axiale bloquant une tentative de frappe au corps" },
        { nom: "Biue Jee", trad: "Doigts qui piquent", desc: "Attaque d urgence perforante aux yeux ou à la gorge" }
      ],
      principes_et_outils: [
        { nom: "Chi Sao", trad: "Mains collantes", desc: "Exercice de sensibilité tactile permettant d anticiper les mouvements adverses par le toucher" },
        { nom: "Muk Yan Jong", trad: "Mannequin de bois", desc: "Outil traditionnel de 116 mouvements pour affiner les angles, la structure et la dureté" },
        { nom: "Yee Jee Kim Yeung Ma", trad: "Posture du caractère deux", desc: "Position fondamentale avec genoux serrés vers l intérieur pour protéger les parties et stabiliser le bassin" }
      ]
    }
  },

  {
    id: "lethwei",
    nom: "Lethwei (Boxe Birmane)",
    nom_original: "မြန်မာ့လက်ဝှေ့ (Art des 9 membres)",
    categorie: "Striking Extrême (Pieds, poings nus, coudes, genoux, tête)",
    origine_pays: "Myanmar (Birmanie)",
    drapeau: "🇲🇲",
    siecle_apparition: "XIe siècle (Royaume de Bagan)",
    fondateurs_maitres: ["Dave Leduc", "Tun Tun Min", "Too Too"],
    historique: "Art martial millénaire birman considéré comme le sport de combat de frappes debout le plus violent et brutal de la planète. Traditionnellement pratiqué sans gants (mains bandées de simple gaze ou cordelettes de chanvre), il autorise toutes les frappes du Muay-Thaï en y ajoutant une arme signature dévastatrice : **les coups de tête directs**. De plus, les règles traditionnelles n accordent la victoire que par KO (pas de décision aux points) et autorisent un temps mort de réanimation de 2 minutes pour un boxeur mis KO.",
    philosophie_et_biomecanique: "Conditionnement maximal des os crâniens et des articulations. Utilisation du crâne comme arme offensive (percussion frontale contre la tempe ou la mâchoire adverse dans le clinch) et chaîne cinétique sans amorti textile.",
    points_forts: [
      "Résistance à la douleur et dureté psychologique et physique incomparables",
      "Menace constante des coups de tête en corps-à-corps, impossible à parer avec une garde standard",
      "Impacts sans gants causant des lacérations et traumatismes osseux immédiats",
      "Agressivité continue imposée par la règle du KO obligatoire"
    ],
    faiblesses: [
      "Taux de traumatismes crâniens et de fractures faciales extrêmement élevé",
      "Absence de lutte au sol (grappling et soumissions interdits)",
      "Rejet olympique et sportif dans la plupart des pays occidentaux en raison de sa dangerosité",
      "Carrière des athlètes souvent écourtée par l accumulation des chocs"
    ],
    noms_et_techniques: {
      techniques_signatures: [
        { nom: "Goung Tite", trad: "Coup de tête direct", desc: "Percussion avec la partie la plus dure du front contre le nez ou le menton dans le clinch" },
        { nom: "Goung Tite circulaire", trad: "Coup de tête en rotation", desc: "Impact latéral de la boîte crânienne lors d une bascule de nuque" },
        { nom: "Frappes poings nus", trad: "Bare-knuckle strikes", desc: "Directs et marteaux non amortis ciblant les zones cartilagineuses" },
        { nom: "Sauts de genou et projections", trad: "Burmese clinch takedowns", desc: "Amenées brutales par torsion cervicale accompagnées de frappes de genou" }
      ]
    }
  },

  // =========================================================================
  // 2. ARTS DE PRÉHENSION & PROJECTIONS (GRAPPLING)
  // =========================================================================
  {
    id: "jiu-jitsu-bresilien",
    nom: "Jiu-Jitsu Brésilien (JJB)",
    nom_original: "Brazilian Jiu-Jitsu (Arte Suave / BJJ)",
    categorie: "Grappling (Combat au sol & Soumissions)",
    origine_pays: "Brésil",
    drapeau: "🇧🇷",
    siecle_apparition: "Années 1920 (Transmission du Judo/Ju-Jitsu par Mitsuyo Maeda à Carlos et Hélio Gracie)",
    fondateurs_maitres: ["Mitsuyo Maeda (Conde Koma)", "Carlos Gracie", "Hélio Gracie", "Carlson Gracie", "Rickson Gracie", "Marcelo Garcia", "Gordon Ryan"],
    historique: "Lorsque le maître japonais de judo Mitsuyo Maeda s installe au Brésil au début du XXe siècle, il enseigne le Ne-Waza (combat au sol) à Carlos Gracie. Son frère cadet, Hélio Gracie, de constitution frêle et maladive, adapte les techniques pour maximiser l utilisation des leviers plutôt que de la force musculaire. Le JJB prouve son écrasante supériorité martiale lors des premiers UFC en 1993 avec Royce Gracie, qui soumet tous ses adversaires pourtant deux fois plus massifs, révolutionnant à jamais le combat libre.",
    philosophie_et_biomecanique: "L art suave : amener l adversaire au sol pour annuler ses frappes, progresser hiérarchiquement vers une position dominante (Garde -> Passage -> Contrôle latéral -> Montée -> Prise de dos), et finaliser par un levier articulaire ou un étranglement sanguin. La biomécanique repose sur la loi des leviers d Archimède (classe 1, 2 et 3) où tout le corps de l attaquant est mobilisé contre une seule articulation isolée de l adversaire.",
    points_forts: [
      "Domination absolue et inégalée du combat au sol et des soumissions",
      "Capacité prouvée scientifiquement pour un individu léger de soumettre un colosse",
      "Étranglements sanguins (chokes) neutralisant un adversaire en 6 à 10 secondes sans séquelles osseuses",
      "Possibilité de s entraîner à 100% d intensité réelle à chaque séance sans traumatismes cérébraux"
    ],
    faiblesses: [
      "Absence totale de percussions debout et au sol dans sa pratique sportive pure",
      "Transitions debout-sol (takedowns) souvent moins explosives que chez les judokas et lutteurs",
      "Tendance sportive moderne à 'tirer la garde' (Pull guard / Butt-scooting), suicidaire en combat de rue réel",
      "Dépendance au kimono (Gi) qui ne reflète pas toujours la réalité des vêtements d été"
    ],
    noms_et_techniques: {
      positions_fondamentales: [
        { nom: "Garde Fermée (Closed Guard)", desc: "Adversaire enserré entre les deux jambes croisées au niveau des lombaires" },
        { nom: "Garde Ouverte (De La Riva, Spider, Butterfly)", desc: "Contrôle des hanches et bras adverses avec les pieds et crochets" },
        { nom: "Contrôle Latéral (Side Control / 100 kg)", desc: "Pression transversale de poitrine immobilisant le buste adverse" },
        { nom: "Montée (Mount)", desc: "Position dominante à califourchon sur le torse adverse" },
        { nom: "Prise de Dos (Back Mount / Hooks in)", desc: "Position reine suprême avec contrôle par les crochets et ceinturage Seatbelt" }
      ],
      soumissions_articulaires: [
        { nom: "Armbar (Juji-Gatame)", trad: "Clé de bras en croix", desc: "Levier de classe 1 au pubis brisant le coude en hyperextension" },
        { nom: "Kimura (Ude-Garami)", trad: "Clé d épaule en double poignet", desc: "Rotation interne forcée déchirant la coiffe des rotateurs et l épaule" },
        { nom: "Americana (Keylock)", trad: "Clé d épaule en rotation externe", desc: "Torsion externe de l articulation gléno-humérale" },
        { nom: "Omoplata", trad: "Clé d épaule avec les jambes", desc: "Enroulement de jambe appliquant un couple de torsion avec le poids du bassin" },
        { nom: "Kneebar", trad: "Clé de genou", desc: "Hyperextension fémoro-tibiale déchirant les ligaments croisés (LCA)" },
        { nom: "Heel Hook", trad: "Clé de talon en torsion", desc: "Torsion dévastatrice du pied broyant les ligaments collatéraux et croisés du genou" }
      ],
      etranglements_chokes: [
        { nom: "Rear Naked Choke (Mata Leao)", trad: "Étranglement arrière", desc: "Compression bimanuelle des deux artères carotides primitives depuis le dos" },
        { nom: "Guillotine Choke", trad: "Étranglement en guillotine", desc: "Radius sous la trachée/carotide refermé en garde ou debout" },
        { nom: "Triangle Choke (Sankaku-Jime)", trad: "Étranglement en triangle", desc: "Les jambes forment un 4 enserrant le cou et un bras adverse" },
        { nom: "Ezekiel Choke", trad: "Étranglement avec la manche", desc: "Pression directe du tranchant de la main enfilée dans la manche" },
        { nom: "D Arce Choke / Anaconda", trad: "Étranglement bras-tête inversé", desc: "Verrouillage sous-aisselle et compression carotide fulgurante" }
      ]
    }
  },

  {
    id: "judo",
    nom: "Judo Kodokan",
    nom_original: "柔道 (La Voie de la Souplesse)",
    categorie: "Grappling (Projections, Fauchages & Contrôles)",
    origine_pays: "Japon",
    drapeau: "🇯🇵",
    siecle_apparition: "1882 (Création du Kodokan par Jigoro Kano)",
    fondateurs_maitres: ["Jigoro Kano", "Kyuzo Mifune", "Yasuhiro Yamashita", "Teddy Riner", "Tadahiro Nomura"],
    historique: "Créé en 1882 par Maître Jigoro Kano à partir des anciennes écoles de Ju-Jitsu féodal (Tenshin Shinyo-Ryu et Kito-Ryu), le Judo est conçu comme un système éducatif, physique et moral universel. En expurgeant les techniques mortelles et en privilégiant la confrontation réelle en randori (combat libre), Kano crée la première discipline martiale asiatique à devenir sport olympique officiel (Tokyo 1964). C est l autorité mondiale suprême sur les projections et le déséquilibre de masse.",
    philosophie_et_biomecanique: "Deux principes fondamentaux : **Seiryoku Zenyo** (Utilisation optimale de l énergie) et **Jita Kyoei** (Entraide et prospérité mutuelle). La biomécanique d une projection se décompose en 3 phases indissociables : **Kuzushi** (création du déséquilibre en déplaçant le centre de masse hors du polygone de sustentation), **Tsukuri** (placement du corps du judoka sous le centre de gravité adverse) et **Kake** (exécution explosive de la projection par effet de levier).",
    points_forts: [
      "Maîtrise des projections et fauchages debout la plus puissante et technique au monde",
      "Science du Kumi-Kata (bataille des saisies de revers et manche) dictant l issue du combat",
      "Apprentissage des brise-chutes (Ukemi) permettant de chuter sur sol dur sans traumatisme majeur",
      "Transitions debout-sol (Ne-Waza) ultra-rapides vers l immobilisation ou la soumission"
    ],
    faiblesses: [
      "Modifications récentes des règles olympiques interdisant les saisies aux jambes (Morote Gari, Kata Guruma)",
      "Dépendance extrême à la saisie de vêtements épais (Judogi), réduisant l efficacité sans veste (No-Gi)",
      "Absence complète de percussions (atemi-waza réservés aux katas anciens non pratiqués en combat)",
      "Temps alloué au combat au sol souvent trop court en compétition sportive"
    ],
    noms_et_techniques: {
      techniques_depaule_et_bras_te_waza: [
        { nom: "Morote Seoi-Nage", trad: "Projection d épaule à deux mains", desc: "Bascule complète de l adversaire par-dessus l épaule avec saisie du revers et manche" },
        { nom: "Ippon Seoi-Nage", trad: "Projection par une épaule", desc: "Blocage du bras sous l aisselle et projection en rouleau d épaule" },
        { nom: "Tai-Otoshi", trad: "Renversement du corps par barrage", desc: "Barrage de jambe tendue et rotation puissante des bras" },
        { nom: "Kata-Guruma", trad: "Roue autour des épaules (bannière)", desc: "Arrachement sous le centre de gravité et bascule par-dessus les épaules" }
      ],
      techniques_de_hanche_goshi_waza: [
        { nom: "O-Goshi", trad: "Grande projection de hanche", desc: "Ceinturage du dos et bascule sur le bassin comme point d appui (fulcrum)" },
        { nom: "Harai-Goshi", trad: "Balayage de hanche", desc: "Fauchage de la cuisse externe combiné à la rotation de hanche" },
        { nom: "Uchi-Mata", trad: "Fauchage par l intérieur de la cuisse", desc: "Pénétration centrale et balancier fémoral vertical, technique la plus victorieuse au niveau mondial" }
      ],
      techniques_de_jambes_ashi_waza: [
        { nom: "O-Soto-Gari", trad: "Grand fauchage extérieur", desc: "Fixation du poids sur le talon adverse et fauchage arrière de cuisse" },
        { nom: "De-Ashi-Barai", trad: "Balayage du pied qui avance", desc: "Balayage précis de cheville au moment exact où le pied adverse va toucher le sol" },
        { nom: "Ko-Uchi-Gari", trad: "Petit fauchage intérieur", desc: "Crochetage du talon adverse de l intérieur" }
      ],
      combat_au_sol_ne_waza: [
        { nom: "Kesa-Gatame", trad: "Contrôle en écharpe", desc: "Verrouillage de tête et de bras immobilisant l adversaire sur le dos" },
        { nom: "Juji-Gatame", trad: "Clé de bras en croix", desc: "Hyperextension du coude" },
        { nom: "Sankaku-Jime", trad: "Étranglement en triangle", desc: "Fermeture des jambes autour de la nuque" }
      ]
    }
  },

  {
    id: "lutte",
    nom: "Lutte Olympique (Libre & Gréco-Romaine)",
    nom_original: "Freestyle & Greco-Roman Wrestling",
    categorie: "Grappling (Amenées au sol, Projections & Contrôles)",
    origine_pays: "Grèce Antique / Mésopotamie / International",
    drapeau: "🏛️",
    siecle_apparition: "Antiquité (708 av. J.-C. aux Jeux Olympiques antiques)",
    fondateurs_maitres: ["Milon de Crotone", "Dan Gable", "Alexandre Kareline (Légende Gréco-Romaine)", "Buvaisar Saitiev", "Jordan Burroughs", "Abdulrashid Sadulaev"],
    historique: "L un des plus vieux sports de combat de l humanité, représenté sur les fresques égyptiennes de Beni Hassan datant de 4 000 ans et épreuve reine des Jeux Olympiques antiques. La **Lutte Libre** autorise les attaques sur tout le corps (notamment les plongeons aux jambes), tandis que la **Lutte Gréco-Romaine** interdit formellement toute saisie ou action en dessous de la ceinture, obligeant à des prises de torse et des souplesses aériennes (suplex) de très haute amplitude.",
    philosophie_et_biomecanique: "Pression athlétique absolue, domination de la gravité et contrôle du centre de masse adverse. La biomécanique repose sur le changement de niveau explosif (level change), la force de poussée isocinétique des quadriceps et la fixation des hanches au sol.",
    points_forts: [
      "Capacité insurpassée à dicter où se déroule le combat (debout ou au sol)",
      "Conditionnement physique, puissance musculaire fonctionnelle et explosivité phénoménales",
      "Excellence des défenses contre les amenées au sol (Sprawl) rendant le lutteur quasi-impossible à renverser",
      "Contrôle positionnel lourd et écrasant au sol (Ride) fatiguant rapidement l adversaire"
    ],
    faiblesses: [
      "Absence totale de soumissions articulaires et d étranglements dans le règlement sportif",
      "Absence de percussions debout et au sol",
      "Tendance sportive à exposer son cou en plongeant (vulnérabilité à la guillotine en MMA)",
      "Habitude de donner son dos au sol pour éviter de se faire coller les épaules au tapis"
    ],
    noms_et_techniques: {
      amenees_au_sol_takedowns: [
        { nom: "Double Leg Takedown (Morote Gari)", trad: "Plongeon sur deux jambes", desc: "Changement de niveau sous le centre adverse, poussée d épaule et fauchage des jarrets" },
        { nom: "Single Leg Takedown", trad: "Saisie d une jambe", desc: "Enroulement d une jambe adverse avec bascule par balayage ou élévation de cheville" },
        { nom: "High Crotch (Hi-C)", trad: "Saisie haute de cuisse", desc: "Pénétration diagonale sous l aisselle et levée de cuisse" },
        { nom: "Ankle Pick", trad: "Crochetage de cheville", desc: "Traction descendante de nuque et ramassage simultané de la cheville" }
      ],
      projections_et_souplesses: [
        { nom: "Suplex (Souplesse arrière)", desc: "Ceinturage du buste et cambrure dorsale explosive projetant l adversaire sur la nuque" },
        { nom: "Duck-under", trad: "Passage sous le bras", desc: "Glissement fluide de la tête sous le bras adverse pour prendre son dos debout" },
        { nom: "Arm Drag", trad: "Traction de bras", desc: "Tirage croisé du bras adverse pour dégager l axe et prendre le flanc" },
        { nom: "Karelin Lift", trad: "Arrachement Kareline", desc: "Arrachement au sol d un adversaire à plat ventre et projection en souplesse inversée" }
      ],
      defenses_et_controles: [
        { nom: "Sprawl", trad: "Étalement des hanches", desc: "Recul instantané des jambes et écrasement de la poitrine sur la nuque de l attaquant" },
        { nom: "Underhook", trad: "Sous-aisselle", desc: "Passage du bras sous l aisselle adverse pour contrôler sa posture et son élévation" }
      ]
    }
  },

  {
    id: "sambo",
    nom: "Sambo (Sportif & Combat)",
    nom_original: "САМБО (САМооборона Без Оружия - Autodéfense Sans Armes)",
    categorie: "Grappling & Hybride (Projections, Clés de jambes & Striking)",
    origine_pays: "URSS / Russie",
    drapeau: "🇷🇺",
    siecle_apparition: "Années 1920-1930 (Synthèse pour l Armée Rouge par Spiridonov et Oshchepkov)",
    fondateurs_maitres: ["Viktor Spiridonov", "Vasili Oshchepkov", "Anatoli Kharlampiyev", "Fedor Emelianenko", "Khabib Nurmagomedov", "Islam Makhachev"],
    historique: "Né dans les années 1920 en Union Soviétique sur ordre de l armée rouge pour créer un système de combat militaire ultime, le Sambo est une synthèse géniale du Judo Kodokan (dont Oshchepkov était ceinture noire au Japon) et des luttes traditionnelles des républiques soviétiques (Chidaoba géorgienne, Kures kazakh, Trinta moldave). Il se divise en **Sambo Sportif** (projections et clés articulaires avec une spécialité mondiale sur les clés de jambes) et **Sambo Combat** (autorisant frappes pieds-poings-coudes-genoux, coups de tête et soumissions avec veste Kurtka).",
    philosophie_et_biomecanique: "Pragmatisme, continuité d action et destruction des articulations inférieures. Utilisation de la veste (Kurtka) et du short court pour des projections de hanche et d épaule à haute vitesse suivies d enroulements directs en clés de genou ou de cheville.",
    points_forts: [
      "Expertise mondiale absolue sur les clés de jambes (clés de genou, chevilles, compression du mollet)",
      "Projections dynamiques enchaînées sans temps d arrêt directement vers la soumission au sol",
      "Le Sambo Combat est l une des préparations les plus redoutables pour le MMA moderne (école daghestanaise)",
      "Dureté physique extrême et polyvalence totale striking/grappling"
    ],
    faiblesses: [
      "Dans le Sambo Sportif : interdiction totale des étranglements (chokes), créant un manque par rapport au JJB",
      "Dépendance à la veste Kurtka pour les saisies de dos et de ceinture",
      "Moins de raffinement que le JJB dans le jeu de garde fermée sur le dos",
      "Règles d arbitrage favorisant l agressivité continue au détriment de la patience stratégique"
    ],
    noms_et_techniques: {
      cles_de_jambes_signatures: [
        { nom: "Rytchag Kolena (Kneebar)", trad: "Clé de genou en hyperextension", desc: "Verrouillage fémoro-tibial avec point d appui au pubis et traction axiale" },
        { nom: "Uschemleniye Akhilla (Achilles Lock)", trad: "Clé de cheville / tendon d Achille", desc: "Pression du tranchant du radius sur le tendon d Achille avec hyperextension" },
        { nom: "Uschemleniye Ikronozhnoy Myshtsy", trad: "Écrasement du mollet (Calf Slicer)", desc: "Insertion du tibia derrière le creux poplité et flexion forcée du genou broyant le muscle" },
        { nom: "Uzel Nogi", trad: "Torsion de cheville et genou", desc: "Clé rotative sur les ligaments articulaires de la jambe" }
      ],
      projections_et_fauchages: [
        { nom: "Podkhvat", trad: "Fauchage extérieur avec saisie de kurtka", desc: "Déséquilibre puissant et fauchage de cuisse" },
        { nom: "Brosok Cherez Spinu", trad: "Projection par-dessus le dos", desc: "Variante sambo du Seoi-Nage avec saisie de revers et manche" },
        { nom: "Melnitsa (Fireman s Carry)", trad: "Le Moulin à vent", desc: "Plongeon d épaule sous les jambes et bascule transversale" }
      ]
    }
  },

  // =========================================================================
  // 3. ARTS MARTIAUX MIXTES & SYSTÈMES HYBRIDES
  // =========================================================================
  {
    id: "mma",
    nom: "MMA (Mixed Martial Arts)",
    nom_original: "Arts Martiaux Mixtes (Anciennement Combat Libre / Free Fight)",
    categorie: "Hybride Intégral (Toutes distances)",
    origine_pays: "Brésil (Vale Tudo) / USA (UFC) / Japon (Shooto & Pride)",
    drapeau: "🌐",
    siecle_apparition: "1993 (Premier UFC à Denver, racines au Pankration antique et Vale Tudo des années 1930)",
    fondateurs_maitres: ["Rorion Gracie", "Bruce Lee (penseur du mélange martial)", "Georges St-Pierre", "Jon Jones", "Demetrious Johnson", "Anderson Silva"],
    historique: "Inspiré par le Vale Tudo brésilien et les défis de styles, le MMA moderne est né le 12 novembre 1993 lors de l UFC 1 avec une question simple : quel art martial est le plus efficace dans un affrontement sans règles ? Après la domination initiale du JJB de Royce Gracie, le sport a évolué vers une discipline à part entière unifiant la boxe anglaise, le muay-thaï, la lutte et le JJB. Régi par les Règles Unifiées du MMA, il se déroule dans une cage octogonale avec des gants légers de 4 onces (mains ouvertes).",
    philosophie_et_biomecanique: "Polyvalence absolue et maîtrise des transitions entre les 4 distances de combat (Hors d atteinte, Frappe debout, Clinch contre la cage, et Combat au sol). La biomécanique repose sur la fluidité des changements de niveau (feindre un jab pour plonger en takedown) et l intégration du **Ground and Pound** (frappes au sol utilisant la gravité).",
    points_forts: [
      "Système de combat réel mains nues le plus complet et éprouvé empiriquement au monde",
      "Capacité à alterner instantanément percussions, lutte debout, clinch contre la cage et soumissions",
      "Gants fins de 4 onces permettant des saisies réelles et rendant les frappes au visage dévastatrices",
      "Élimination de tous les mythes martiaux non testés sous pleine résistance physique"
    ],
    faiblesses: [
      "Nécessite des années d entraînement intensif dans 4 disciplines différentes pour atteindre l élite",
      "Règles sportives interdisant les frappes à l arrière de la tête, à la gorge, aux parties génitales et les coups de coude verticaux (12-6)",
      "Combat en cage grillagée qui ne reproduit pas les obstacles d un environnement urbain",
      "Risque d usure corporelle et articulaire extrême"
    ],
    noms_et_techniques: {
      transitions_et_frappes_speciales: [
        { nom: "Level Change", trad: "Changement de niveau", desc: "Abaissement du centre de gravité masqué par une feinte de poing pour plonger aux jambes" },
        { nom: "Superman Punch", trad: "Coup de poing sauté superman", desc: "Feinte de coup de pied arrière suivie d une propulsion aérienne avec direct du droit" },
        { nom: "Calf Kick", trad: "Coup de pied au mollet", desc: "Percussion sur le nerf fibulaire commun paralysant immédiatement la jambe d appui" },
        { nom: "Spinning Back Fist", trad: "Revers de poing retourné", desc: "Rotation complète à 360° percutant avec le dos du gant léger" }
      ],
      combat_contre_la_cage: [
        { nom: "Cage Wall Walking", trad: "Escalade et redressement sur la cage", desc: "Utilisation du grillage pour s appuyer et se remettre debout depuis le sol" },
        { nom: "Pummeling on the Fence", trad: "Bataille d underhooks contre la cage", desc: "Contrôle de posture et d aisselles pour écraser et épuiser l adversaire contre le grillage" }
      ],
      combat_au_sol_specifique: [
        { nom: "Ground and Pound (GnP)", trad: "Frappes au sol depuis position dominante", desc: "Martelage au poing ou au coude d un adversaire immobilisé sur le dos" },
        { nom: "Submission Chaining", trad: "Enchaînement de soumissions", desc: "Basculer instantanément d une guillotine vers une clé de bras ou un triangle" }
      ]
    }
  },

  {
    id: "krav-maga",
    nom: "Krav Maga",
    nom_original: "קרב מגע (Combat Rapproché)",
    categorie: "Système d Autodéfense Opérationnelle & Militaire",
    origine_pays: "Israël / Europe Centrale (Bratislava)",
    drapeau: "🇮🇱",
    siecle_apparition: "Années 1940 (Créé par Imi Lichtenfeld pour l armée israélienne)",
    fondateurs_maitres: ["Imi Lichtenfeld (Imi Sde-Or)", "Eyal Yanilov", "Richard Douieb", "Haim Gidon"],
    historique: "Conçu dans les années 1930 par Imi Lichtenfeld, boxeur et gymnaste juif slovaque pour défendre la communauté juive de Bratislava contre les milices fascistes, le Krav Maga a été développé et adopté officiellement dès 1948 par les Forces de Défense d Israël (Tsahal) et le Mossad. Ce n est pas un sport mais une méthode pragmatique de survie visant l élimination la plus rapide possible d une menace létale dans le monde réel, avec ou sans armes.",
    philosophie_et_biomecanique: "Simplicité, réflexes naturels et agressivité immédiate. Pas de règles, pas d arbitre, pas de catégories de poids. La biomécanique exploite les réactions physiologiques innées de sursaut (flinch response) transformées instantanément en contre-attaque violente sur les points vitaux les plus vulnérables du corps humain.",
    points_forts: [
      "Efficacité immédiate axée sur la survie réelle et la gestion du stress aigu",
      "Ciblage systématique des faiblesses anatomiques non entraînables (yeux, gorge, testicules, genoux)",
      "Défenses éprouvées contre menaces armées (couteaux, bâtons, armes à feu) et agresseurs multiples",
      "Apprentissage rapide basé sur des mouvements naturels ne nécessitant pas une souplesse d athlète"
    ],
    faiblesses: [
      "Absence de sparring compétitif à pleine intensité sur les techniques létales (yeux, gorge)",
      "Niveau très variable dans les clubs civils commerciaux (manque de pression physique réelle)",
      "Moins efficace sur la durée si le combat s enlise face à un striker ou grappler d élite",
      "Ne développe pas la même finesse de timing et de gestion de distance qu un sport de combat de ring"
    ],
    noms_et_techniques: {
      frappes_points_vitaux: [
        { nom: "Frappe génitale (Groin Kick)", desc: "Percussion violente de pointe ou tibia dans les testicules pour briser la posture" },
        { nom: "Eye Gouge / Palm Strike", desc: "Attaque de paume au menton avec griffure ou enfoncement des yeux" },
        { nom: "Throat Strike", desc: "Frappe de la fourche de la main ou coup de coude direct dans la trachée" },
        { nom: "Stomp Kick", desc: "Écrasement du genou ou de la cheville avec la semelle rigide" }
      ],
      defenses_armes_et_saisies: [
        { nom: "360 Defense", desc: "Blocage en coin extérieur des avant-bras contre toutes les attaques circulaires au couteau" },
        { nom: "Désarmement pistolet", desc: "Dévier la ligne de mire hors du corps, contrôler le canon et désarmer par levier sur les doigts" },
        { nom: "Défense sur étranglement", desc: "Arrachement bimanuel de la prise et frappe simultanée au visage et à l entrejambe" }
      ]
    }
  },

  {
    id: "jeet-kune-do",
    nom: "Jeet Kune Do (JKD)",
    nom_original: "截拳道 (La Voie du Poing qui Intercepte)",
    categorie: "Système Hybride & Philosophie Martiale",
    origine_pays: "États-Unis / Hong Kong",
    drapeau: "🇺🇸",
    siecle_apparition: "1967 (Créé par Bruce Lee à Los Angeles)",
    fondateurs_maitres: ["Bruce Lee", "Dan Inosanto", "Ted Wong", "Takky Kimura"],
    historique: "Fondé en 1967 par le légendaire Bruce Lee après son combat contre Wong Jack Man, le Jeet Kune Do est né d un rejet radical des formes traditionnelles figées et des katas 'inutiles'. Synthétisant le Wing Chun (sa base initiale), l escrime occidentale (pour le jeu de jambes et la distance) et la boxe anglaise, Bruce Lee a formulé les prémices conceptuelles du MMA moderne : 'Absorbe ce qui est utile, rejette ce qui est inutile, et ajoute ce qui t est propre'.",
    philosophie_et_biomecanique: "L interception comme principe suprême : attaquer au moment exact où l adversaire prépare son attaque pour briser son intention. Utilisation de l arme la plus longue contre la cible la plus proche (ex. Side Kick au genou d un adversaire qui avance).",
    points_forts: [
      "Élimination totale de la télégraphie (aucun mouvement préparatoire visible avant la frappe)",
      "Timing d interception exceptionnel brisant le rythme adverse",
      "Jeu de jambes vif et décalages d angles inspirés de l escrime olympique",
      "Philosophie ouverte et adaptative s ajustant à chaque morphologie"
    ],
    faiblesses: [
      "Disparition prématurée de Bruce Lee en 1973 laissant le système sans son principal moteur d évolution",
      "Dispersion doctrinale entre partisans du 'JKD Concept' (Dan Inosanto) et du 'JKD Original' (Ted Wong)",
      "Manque de confrontation compétitive moderne sous des règles unifiées",
      "Lutte au sol moins développée à l époque par rapport aux standards actuels du JJB"
    ],
    noms_et_techniques: {
      techniques_cles: [
        { nom: "Stop Hit (Jeet Tek / Jeet Kuen)", trad: "Frappe d interception", desc: "Interception simultanée avec direct du bras avant ou coup de pied d arrêt" },
        { nom: "Lead Side Kick (Oblique Kick)", trad: "Coup de pied latéral bas", desc: "Frappe de talon dans la rotule adverse, reprise plus tard par Jon Jones en MMA" },
        { nom: "Straight Lead", trad: "Direct avant relâché", desc: "Frappe du poing avant sans recul préalable, jaillissant comme une flèche" },
        { nom: "Pak Sao / Lop Sao Da", trad: "Saisie et frappe simultanée", desc: "Piégeage de la main adverse combiné à un direct au visage" }
      ]
    }
  },

  {
    id: "capoeira",
    nom: "Capoeira (Regional & Angola)",
    nom_original: "Capoeira",
    categorie: "Art Martial Afro-Brésilien (Percussion, acrobatie & rythme)",
    origine_pays: "Brésil (Bahia / Rio de Janeiro)",
    drapeau: "🇧🇷",
    siecle_apparition: "XVIIe siècle (Créé par les esclaves africains déportés au Brésil)",
    fondateurs_maitres: ["Mestre Bimba (Capoeira Regional)", "Mestre Pastinha (Capoeira Angola)", "Besouro Mangangá"],
    historique: "Créée au Brésil par les esclaves africains déportés (principalement d Angola et du bassin du Congo), la Capoeira a masqué son caractère martial meurtrier sous les apparences d une danse rythmée par la musique du Berimbau et des chants rituels pour contourner l interdiction des maîtres colons. Longtemps criminalisée et pratiquée par les gangs de rue, elle a été légalisée et élevée au rang de trésor culturel par Mestre Bimba dans les années 1930. Elle est inscrite au patrimoine culturel immatériel de l UNESCO depuis 2014.",
    philosophie_et_biomecanique: "Malandragem (ruse), fluidité et tromperie. Les capoeiristes ne s arrêtent jamais : le mouvement de balancier permanent (**Ginga**) accumule de l énergie cinétique et rend impossible l anticipation des trajectoires. Utilisation des appuis au sol (mains et tête) pour délivrer des coups de pied circulaires à très grand bras de levier et forte accélération centripète.",
    points_forts: [
      "Imprévisibilité totale des angles d attaque et des changements de niveau sol/debout",
      "Puissance de percussion phénoménale des coups de pied circulaires démultipliés par le couple de rotation",
      "Équilibre dynamique et mobilité corporelle exceptionnelle sur les mains et les pieds",
      "Feintes constantes et esquives acrobatiques évitant le choc frontal"
    ],
    faiblesses: [
      "Pratique en ronde (Roda) avec des règles rituelles souvent éloignées du combat réel moderne",
      "Absence de garde haute pour protéger la mâchoire contre des combinaisons de boxe anglaise",
      "Mouvements acrobatiques amples qui peuvent être punis par un takedown ou un direct en ligne droite",
      "Absence de lutte au sol de soumission (clés et étranglements)"
    ],
    noms_et_techniques: {
      mouvements_et_frappes: [
        { nom: "Ginga", trad: "Le pas de balancier fondamental", desc: "Mouvement triangulaire continu d esquive, de rythme et d accumulation d énergie" },
        { nom: "Meia-Lua de Compasso", trad: "Demi-lune de compas", desc: "Frappe de talon dévastatrice avec pose des deux mains au sol et rotation complète du buste" },
        { nom: "Armada", trad: "Coup de pied circulaire retourné aérien", desc: "Rotation debout délivrant le tranchant extérieur du pied" },
        { nom: "Queixada", trad: "Coup de pied de menton", desc: "Balayage circulaire de l intérieur vers l extérieur avec la carre du pied" },
        { nom: "Martelo", trad: "Coup de marteau circulaire", desc: "Percussion directe de coup de pied au visage" },
        { nom: "Rasteira", trad: "Balayage rasoir au ras du sol", desc: "Crochetage de la cheville d appui adverse au moment d une frappe" },
        { nom: "Aú", trad: "La roue capoeiriste", desc: "Déplacement acrobatique sur les mains pouvant se transformer en coup de pied en ciseau" }
      ],
      esquives_fondamentales: [
        { nom: "Cocorinha", trad: "Accroupissement défensif", desc: "Abaissement immédiat au sol sous les coups de pied hauts" },
        { nom: "Esquiva Baixa", trad: "Esquive basse latérale", desc: "Bascule latérale du buste avec appui d une main" }
      ]
    }
  },

  {
    id: "aikido",
    nom: "Aïkido",
    nom_original: "合気道 (La Voie de l Harmonisation des Énergies)",
    categorie: "Art Martial Traditionnel (Clés articulaires & Déviations)",
    origine_pays: "Japon",
    drapeau: "🇯🇵",
    siecle_apparition: "Années 1930-1940 (Fondé par Morihei Ueshiba)",
    fondateurs_maitres: ["Morihei Ueshiba (O-Sensei)", "Kisshomaru Ueshiba", "Christian Tissier", "Gozo Shioda (Yoshinkan)"],
    historique: "Fondé par Morihei Ueshiba à partir du Daito-Ryu Aiki-Jujutsu de Sokaku Takeda et de l escrime traditionnelle du sabre japonais (Kenjutsu), l Aïkido est né de la quête spirituelle et martiale d Ueshiba après la Seconde Guerre mondiale. Rejetant la compétition sportive et l idée même de vaincre un ennemi, l Aïkido vise à neutraliser l agression en protégeant à la fois le défenseur et l attaquant par une harmonisation dynamique des forces.",
    philosophie_et_biomecanique: "Principe du **Irimi-Tenkan** (Entrer et Pivoter) : ne jamais s opposer directement à la force de l adversaire mais se fondre dans sa trajectoire pour la rediriger. La biomécanique repose sur des spirales circulaires continues et des clés de poignet et de coude (Kote-Gaeshi, Ikkyo, Shihonage) utilisant le bras adverse comme un levier articulé.",
    points_forts: [
      "Science des pivots circulaires (Tenkan) et de la redirection d énergie sans force musculaire brute",
      "Maîtrise des clés de poignet et de torsion carpienne extrêmement douloureuses",
      "Capacité à chuter et se relever instantanément sans blessure (Ukemi)",
      "Philosophie de résolution pacifique des conflits et maîtrise de soi"
    ],
    faiblesses: [
      "Absence totale de compétition et de combat avec résistance réelle non coopérative",
      "Grande inefficacité prouvée face à des frappes modernes rapides de boxe ou des takedowns de lutte",
      "Attaques simulées dans les dojos souvent irréalistes (grandes frappes descendantes au sabre de bois)",
      "Apprentissage extrêmement long avant d espérer une quelconque efficacité opérationnelle"
    ],
    noms_et_techniques: {
      cles_et_projections: [
        { nom: "Ikkyo (Ippon-Osae)", trad: "Premier principe", desc: "Contrôle du coude et du poignet amenant l adversaire à plat ventre" },
        { nom: "Nikyo", trad: "Deuxième principe", desc: "Torsion interne aiguë du poignet provoquant une douleur intense" },
        { nom: "Sankyo", trad: "Troisième principe", desc: "Torsion spirale ascendante du bras et du poignet" },
        { nom: "Shiho-Nage", trad: "Projection des 4 directions", desc: "Pliage du bras de l adversaire derrière son épaule comme un sabre et projection arrière" },
        { nom: "Kote-Gaeshi", trad: "Torsion de poignet retourné", desc: "Torsion externe de l articulation radio-carpienne entraînant une chute spectaculaire" },
        { nom: "Irimi-Nage", trad: "Projection en entrant", desc: "Dépassement du centre adverse et projection par balayage de la nuque" }
      ]
    }
  }
];
