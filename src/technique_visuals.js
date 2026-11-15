/**
 * Catalogue et moteur d'illustrations réelles issues d'Internet (Wikimedia Commons & Archives du Combat)
 * et de modélisations biomécaniques vectorielles HUD pour l'Encyclopédie.
 * 
 * Couvre exhaustivement :
 * 1. FRAPPES FONDAMENTALES (Striking)
 * 2. CLINCH ET PROJECTIONS (Grappling & Projections)
 * 3. DÉFENSES ET BLOCAGES (Défenses, Esquives & Blocages)
 */

export class TechniqueVisualEngine {
  /**
   * Détecte la grande famille à partir de la clé de catégorie ou du nom de la technique
   */
  static detectFamily(categoryKey, tech) {
    const k = (categoryKey || '').toLowerCase();
    const name = ((tech?.nom || '') + ' ' + (tech?.trad || '')).toLowerCase();

    // 1. Clinch & Projections & Grappling
    if (
      k.includes('clinch') || k.includes('projection') || k.includes('waza') ||
      k.includes('takedown') || k.includes('sol') || k.includes('soumission') ||
      k.includes('etranglement') || k.includes('cle') || k.includes('fauchage') ||
      k.includes('amenees') || k.includes('lutte') ||
      name.includes('nage') || name.includes('gari') || name.includes('takedown') ||
      name.includes('clinch') || name.includes('armbar') || name.includes('guillotine') ||
      name.includes('triangle') || name.includes('mata') || name.includes('suplex') ||
      name.includes('sprawl') || name.includes('kolena') || name.includes('fauchage') ||
      name.includes('balayage') || name.includes('kimura') || name.includes('gatame')
    ) {
      return 'clinch_projection';
    }

    // 2. Défenses & Blocages
    if (
      k.includes('defense') || k.includes('blocage') || k.includes('esquive') ||
      k.includes('deplacement') || k.includes('uke') || k.includes('garde') ||
      name.includes('slip') || name.includes('weave') || name.includes('block') ||
      name.includes('blocage') || name.includes('parade') || name.includes('parry') ||
      name.includes('shell') || name.includes('roll') || name.includes('esquive') ||
      name.includes('sprawl') || name.includes('pak sao') || name.includes('bong sao')
    ) {
      return 'defense_blocage';
    }

    // 3. Frappes Fondamentales (Défaut pour les coups de poing, pied, coude, genou)
    return 'frappe_fondamentale';
  }

  /**
   * Associe une image réelle issue du web (stockée localement dans images/web/)
   * pour CHAQUE technique selon son nom et sa famille
   */
  static getRealWebImage(categoryKey, tech) {
    const family = this.detectFamily(categoryKey, tech);
    const text = ((tech?.nom || '') + ' ' + (tech?.trad || '') + ' ' + (tech?.desc || '')).toLowerCase();

    // =========================================================================
    // 1. FRAPPES FONDAMENTALES (STRIKING)
    // =========================================================================
    if (family === 'frappe_fondamentale') {
      // Coups de coude
      if (text.includes('coude') || text.includes('sok') || text.includes('elbow') || text.includes('empi')) {
        return {
          path: './images/web/coude_circulaire.jpg',
          title: "Coup de Coude Circulaire & Percussion Tranchante (Sok / Elbow Strike)",
          source: "Archives photographiques des arts martiaux traditionnels / Wikimedia Commons",
          family: "Frappes Fondamentales"
        };
      }
      // Coups de genou
      if (text.includes('genou') || text.includes('khao') || text.includes('knee')) {
        return {
          path: './images/web/muay_thai_knee.jpg',
          title: "Percussion Genu-Pectorale en Clinch (Khao Dui / Knee Strike)",
          source: "Démonstration pédagogique Muay-Thaï / Wikimedia Commons (Alain Delmas)",
          family: "Frappes Fondamentales"
        };
      }
      // Direct avant / Jab
      if (text.includes('jab') || text.includes('direct avant') || text.includes('lead straight') || text.includes('oi-zuki') || text.includes('pak')) {
        return {
          path: './images/web/jab_delmas.jpg',
          title: "Direct du Bras Avant (Jab d'interception et de cadrage)",
          source: "Photographie technique d'Alain Delmas (1999) / Wikimedia Commons",
          family: "Frappes Fondamentales"
        };
      }
      // Direct arrière / Cross
      if (text.includes('cross') || text.includes('direct arriere') || text.includes('straight') || text.includes('gyaku-zuki') || text.includes('choku')) {
        return {
          path: './images/web/cross_delmas.jpg',
          title: "Direct du Bras Arrière (Cross de puissance axiale)",
          source: "Photographie technique d'Alain Delmas (1999) / Wikimedia Commons",
          insepPath: './images/insep_boxeur_cross.png',
          family: "Frappes Fondamentales"
        };
      }
      // Crochet / Hook
      if (text.includes('hook') || text.includes('crochet') || text.includes('kagi-zuki') || text.includes('overhand') || text.includes('fist')) {
        return {
          path: './images/web/crochet_delmas.jpg',
          title: "Crochet Scapulaire Court à 90° (Hook à la mâchoire)",
          source: "Photographie technique d'Alain Delmas (1999) / Wikimedia Commons",
          insepPath: './images/insep_boxeur_hook.png',
          family: "Frappes Fondamentales"
        };
      }
      // Uppercut
      if (text.includes('upper') || text.includes('remontant') || text.includes('ura-zuki')) {
        return {
          path: './images/web/uppercut_delmas.jpg',
          title: "Coup de Poing Remontant Ascendant (Uppercut)",
          source: "Photographie technique d'Alain Delmas (1999) / Wikimedia Commons",
          insepPath: './images/insep_boxeur_uppercut.png',
          family: "Frappes Fondamentales"
        };
      }
      // Coup de pied frontal / Teep / Mae-Geri / Chagi
      if (text.includes('teep') || text.includes('front') || text.includes('mae-geri') || text.includes('ap chagi') || text.includes('chasse')) {
        return {
          path: './images/web/front_kick_delmas.jpg',
          title: "Coup de Pied Direct Frontal d'Arrêt (Front Kick / Teep / Mae-Geri)",
          source: "Démonstration pédagogique d'Alain Delmas / Wikimedia Commons",
          family: "Frappes Fondamentales"
        };
      }
      // Coup de pied circulaire / Low Kick / Middle / High kick / Mawashi / Fouetté
      return {
        path: './images/web/circulaire_delmas.jpg',
        title: "Coup de Pied Circulaire Percutant (Low Kick / Mawashi-Geri / Fouetté)",
        source: "Photographie technique d'Alain Delmas / Wikimedia Commons",
        insepPath: './images/votreeps_planche_biomecanique.png',
        family: "Frappes Fondamentales"
      };
    }

    // =========================================================================
    // 2. CLINCH ET PROJECTIONS (GRAPPLING & PROJECTIONS)
    // =========================================================================
    if (family === 'clinch_projection') {
      // Clinch / Saisie de nuque
      if (text.includes('clinch') || text.includes('chap ko') || text.includes('saisie') || text.includes('nuque') || text.includes('collar')) {
        return {
          path: './images/web/muay_thai_clinch.jpg',
          title: "Saisie de Nuque & Clinch Muay-Thaï (Double Collar Tie / Chap Ko)",
          source: "Démonstration de combat rapproché / Wikimedia Commons",
          family: "Clinch Et Projections"
        };
      }
      // Clé de bras / Armbar / Juji-Gatame / Kimura
      if (text.includes('armbar') || text.includes('juji') || text.includes('cle') || text.includes('kimura') || text.includes('kolena') || text.includes('lever')) {
        return {
          path: './images/web/armbar_mcmap.jpg',
          title: "Clé de Bras Hyper-Axiale en Hyperextension (Armbar / Juji-Gatame)",
          source: "Programme MCMAP U.S. Marine Corps Martial Arts / Wikimedia Commons",
          family: "Clinch Et Projections"
        };
      }
      // Étranglement / Guillotine / RNC
      if (text.includes('guillotine') || text.includes('etranglement') || text.includes('choke') || text.includes('mata')) {
        return {
          path: './images/web/guillotine_choke.jpg',
          title: "Étranglement Avant en Guillotine (Front Headlock Guillotine Choke)",
          source: "Démonstration de Jiu-Jitsu Brésilien & Grappling / Wikimedia Commons",
          family: "Clinch Et Projections"
        };
      }
      // Fauchage extérieur / Balayage / Osoto-Gari
      if (text.includes('gari') || text.includes('fauchage') || text.includes('balayage') || text.includes('podkhvat') || text.includes('rasteira')) {
        return {
          path: './images/web/osoto_gari.jpg',
          title: "Grand Fauchage Extérieur (Ō-Soto-Gari / Podkhvat Sambo)",
          source: "Archives Kodokan Judo & Sambo / Wikimedia Commons",
          family: "Clinch Et Projections"
        };
      }
      // Takedown / Double Leg / Single Leg
      if (text.includes('takedown') || text.includes('leg') || text.includes('ramassement') || text.includes('lutte') || text.includes('amenee')) {
        return {
          path: './images/web/takedown_single_leg.jpg',
          title: "Amenée au Sol par Saisie de Jambe (Single & Double Leg Takedown)",
          source: "Championnat Universitaire de Lutte Libre / Wikimedia Commons",
          family: "Clinch Et Projections"
        };
      }
      // Projection par l'épaule / Hanche (Seoi Nage, O Goshi, Suplex)
      return {
        path: './images/web/seoi_nage.jpg',
        title: "Projection d'Épaule par Bascule (Morote Seoi-Nage / Hip Throw)",
        source: "Illustration Kodokan Judo par Michael Hultström / Wikimedia Commons",
        family: "Clinch Et Projections"
      };
    }

    // =========================================================================
    // 3. DÉFENSES ET BLOCAGES (DEFENSES, BLOCAGES & ESQUIVES)
    // =========================================================================
    // Sprawl
    if (text.includes('sprawl') || text.includes('anti-takedown')) {
      return {
        path: './images/web/sprawl_usmc.jpg',
        title: "Sprawl Défensif Explosif (Défense contre Takedown et Plongée aux jambes)",
        source: "Entraînement tactique de Grappling USMC / Wikimedia Commons",
        family: "Défenses Et Blocages"
      };
    }
    // Blocage de coup de pied / Tibial
    if (text.includes('tibia') || text.includes('shield') || text.includes('absorb') || text.includes('low') || text.includes('check')) {
      return {
        path: './images/web/blocage_low_kick.jpg',
        title: "Absorption & Blocage Tibial de Coup de Pied Bas (Shin Shield / Check)",
        source: "Démonstration pédagogique d'Alain Delmas (1999) / Wikimedia Commons",
        family: "Défenses Et Blocages"
      };
    }
    // Esquive latérale / Slip
    if (text.includes('slip') || text.includes('decale') || text.includes('retrait')) {
      return {
        path: './images/web/slip_esquive.jpg',
        title: "Esquive Latérale Hors d'Axe (Slipping sur Direct Adverse)",
        source: "Série technique boxes pieds-poings d'Alain Delmas / Wikimedia Commons",
        family: "Défenses Et Blocages"
      };
    }
    // Esquive rotative / Bob and Weave
    if (text.includes('bob') || text.includes('weave') || text.includes('abaiss') || text.includes('u') || text.includes('roulement')) {
      return {
        path: './images/web/esquive_buste.jpg',
        title: "Esquive Rotative de Buste sous le Coup (Bob & Weave / Abaissée)",
        source: "Série technique boxes pieds-poings d'Alain Delmas / Wikimedia Commons",
        family: "Défenses Et Blocages"
      };
    }
    // Blocage général / Garde haute en coquille
    return {
      path: './images/web/blocage_boxe.jpg',
      title: "Blocage des Deux Bras & Garde Haute en Coquille (High Guard Shell)",
      source: "Manuel d'enseignement de la Boxe et du Kickboxing / Wikimedia Commons",
      family: "Défenses Et Blocages"
    };
  }

  /**
   * Maintient la génération du SVG vectoriel HUD en mode complémentaire
   */
  static renderSVG(family, tech) {
    const text = ((tech?.nom || '') + ' ' + (tech?.trad || '')).toLowerCase();
    if (family === 'frappe_fondamentale') {
      return this.renderStrikingSVG(text, tech);
    } else if (family === 'clinch_projection') {
      return this.renderGrapplingSVG(text, tech);
    } else {
      return this.renderDefenseSVG(text, tech);
    }
  }

  // Code vectoriel SVG HUD conservé
  static renderStrikingSVG(name, tech) {
    const isKick = name.includes('kick') || name.includes('geri') || name.includes('chagi') || name.includes('fouette') || name.includes('chasse') || name.includes('teep');
    const isKnee = name.includes('genou') || name.includes('khao');
    const isElbow = name.includes('coude') || name.includes('sok') || name.includes('empi');
    const isHook = name.includes('hook') || name.includes('crochet') || name.includes('overhand');
    const isUpper = name.includes('upper') || name.includes('remontant');

    if (isKick) {
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="legGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00CED1"/>
              <stop offset="100%" stop-color="#FF6B35"/>
            </linearGradient>
            <radialGradient id="impactGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FF3366" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#FF3366" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
          <circle cx="390" cy="160" r="32" fill="url(#impactGlow)"/>
          <circle cx="390" cy="160" r="6" fill="#FFFFFF"/>
          <text x="395" y="145" fill="#FF3366" font-size="11" font-family="monospace" font-weight="bold">ZONE D'IMPACT TIBIAL</text>
          <line x1="180" y1="300" x2="180" y2="240" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
          <circle cx="180" cy="300" r="5" fill="#FFD700"/>
          <text x="110" y="325" fill="#FFD700" font-size="10" font-family="monospace">PIVOT D'APPUI 180°</text>
          <circle cx="160" cy="140" r="16" fill="#38BDF8"/>
          <line x1="180" y1="240" x2="160" y2="160" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <line x1="180" y1="240" x2="280" y2="190" stroke="url(#legGrad)" stroke-width="10" stroke-linecap="round"/>
          <line x1="280" y1="190" x2="385" y2="160" stroke="url(#legGrad)" stroke-width="8" stroke-linecap="round"/>
          <text x="300" y="270" fill="#FF6B35" font-size="12" font-family="monospace" font-weight="bold">F_impact = 5 400 N</text>
          <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
          <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">FRAPPE FONDAMENTALE</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Cinématique de Coup de Pied</text>
        </svg>
      `;
    }

    if (isKnee || isElbow) {
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
          <circle cx="310" cy="150" r="28" fill="#FF6B35" fill-opacity="0.4"/>
          <circle cx="310" cy="150" r="6" fill="#FFFFFF"/>
          <text x="325" y="145" fill="#FF6B35" font-size="11" font-family="monospace" font-weight="bold">${isElbow ? "POINTE DU COUDE (OLÉCRÂNE)" : "POINTE DE ROTULE PERFORANTE"}</text>
          <circle cx="180" cy="110" r="16" fill="#38BDF8"/>
          <line x1="200" y1="230" x2="180" y2="130" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <line x1="200" y1="230" x2="200" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
          <text x="230" y="270" fill="#FFD700" font-size="11" font-family="monospace">LEVIER COURT & ACCÉLÉRATION</text>
          <rect x="20" y="20" width="190" height="36" rx="8" fill="#0F172A" stroke="#FF6B35" stroke-width="1"/>
          <text x="30" y="37" fill="#FF6B35" font-size="11" font-family="monospace" font-weight="bold">FRAPPE COURT CORPS-À-CORPS</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">${isElbow ? "Percussion Coudée" : "Percussion Genou"}</text>
        </svg>
      `;
    }

    if (isHook || isUpper) {
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
          <circle cx="340" cy="${isUpper ? '120' : '140'}" r="26" fill="#F43F5E" fill-opacity="0.3"/>
          <circle cx="340" cy="${isUpper ? '120' : '140'}" r="6" fill="#FFFFFF"/>
          <text x="355" y="${isUpper ? '115' : '135'}" fill="#F43F5E" font-size="11" font-family="monospace" font-weight="bold">${isUpper ? "MENTON / PLEXUS (ASCENDANT)" : "MÂCHOIRE (CIRCULAIRE)"}</text>
          <circle cx="200" cy="135" r="16" fill="#38BDF8"/>
          <line x1="200" y1="240" x2="200" y2="160" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
          <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">FRAPPE FONDAMENTALE</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">${isUpper ? "Uppercut Vertical" : "Crochet Scapulaire"}</text>
        </svg>
      `;
    }

    // Direct linéaire
    return `
      <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="360" fill="#030712"/>
        <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
        <circle cx="390" cy="160" r="26" fill="#F43F5E" fill-opacity="0.3"/>
        <circle cx="390" cy="160" r="6" fill="#FFFFFF"/>
        <text x="390" y="135" fill="#F43F5E" font-size="11" font-family="monospace" font-weight="bold">IMPACT DIRECT AXIAL</text>
        <line x1="120" y1="300" x2="160" y2="240" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>
        <line x1="180" y1="240" x2="200" y2="160" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
        <circle cx="195" cy="135" r="16" fill="#38BDF8"/>
        <line x1="200" y1="160" x2="385" y2="160" stroke="#FF6B35" stroke-width="8" stroke-linecap="round"/>
        <text x="240" y="270" fill="#FF6B35" font-size="12" font-family="monospace" font-weight="bold">F_direct = 4 800 N</text>
        <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
        <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">FRAPPE FONDAMENTALE</text>
        <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Direct Linéaire (Jab / Cross)</text>
      </svg>
    `;
  }

  static renderGrapplingSVG(name, tech) {
    return `
      <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="360" fill="#030712"/>
        <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
        <circle cx="240" cy="220" r="8" fill="#FFD700"/>
        <text x="210" y="245" fill="#FFD700" font-size="10" font-family="monospace">CENTRE DE GRAVITÉ & PIVOT</text>
        <circle cx="220" cy="160" r="15" fill="#00CED1"/>
        <circle cx="280" cy="130" r="15" fill="#F43F5E"/>
        <path d="M 280 140 Q 230 80 130 220" fill="none" stroke="#FF6B35" stroke-width="3" stroke-dasharray="5,3"/>
        <rect x="20" y="20" width="190" height="36" rx="8" fill="#0F172A" stroke="#FFD700" stroke-width="1"/>
        <text x="30" y="37" fill="#FFD700" font-size="11" font-family="monospace" font-weight="bold">CLINCH ET PROJECTIONS</text>
        <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Cinématique de Projection & Prise</text>
      </svg>
    `;
  }

  static renderDefenseSVG(name, tech) {
    return `
      <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="360" fill="#030712"/>
        <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
        <circle cx="280" cy="135" r="16" fill="#00E676"/>
        <line x1="280" y1="150" x2="270" y2="230" stroke="#00E676" stroke-width="12" stroke-linecap="round"/>
        <line x1="255" y1="120" x2="255" y2="180" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
        <circle cx="250" cy="135" r="22" fill="#F43F5E" fill-opacity="0.3"/>
        <text x="210" y="275" fill="#00E676" font-size="11" font-family="monospace" font-weight="bold">BOUCLIER DÉFENSIF ÉTANCHE</text>
        <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00E676" stroke-width="1"/>
        <text x="30" y="37" fill="#00E676" font-size="11" font-family="monospace" font-weight="bold">DÉFENSES ET BLOCAGES</text>
        <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Structure de Blocage & Parade</text>
      </svg>
    `;
  }
}
