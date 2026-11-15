/**
 * Générateur et catalogue d'illustrations biomécaniques vectorielles HD
 * pour l'Encyclopédie des Sports de Combat et Arts Martiaux.
 * Couvre :
 * 1. Frappes Fondamentales (Striking)
 * 2. Clinch Et Projections (Grappling & Projections)
 * 3. Défenses Et Blocages (Defenses, Blocages & Esquives)
 */

export class TechniqueVisualEngine {
  /**
   * Détecte la grande famille à partir de la clé de catégorie ou du nom de la technique
   */
  static detectFamily(categoryKey, tech) {
    const k = (categoryKey || '').toLowerCase();
    const name = (tech?.nom || '').toLowerCase();
    const trad = (tech?.trad || '').toLowerCase();

    // 1. Clinch & Projections & Grappling
    if (
      k.includes('clinch') || k.includes('projection') || k.includes('waza') ||
      k.includes('takedown') || k.includes('sol') || k.includes('soumission') ||
      k.includes('etranglement') || k.includes('cle') || k.includes('fauchage') ||
      name.includes('nage') || name.includes('gari') || name.includes('takedown') ||
      name.includes('clinch') || name.includes('armbar') || name.includes('guillotine') ||
      name.includes('triangle') || name.includes('mata') || name.includes('suplex') ||
      name.includes('sprawl')
    ) {
      return 'clinch_projection';
    }

    // 2. Défenses & Blocages
    if (
      k.includes('defense') || k.includes('blocage') || k.includes('esquive') ||
      k.includes('deplacement') || k.includes('uke') || k.includes('garde') ||
      name.includes('slip') || name.includes('weave') || name.includes('block') ||
      name.includes('parade') || name.includes('parry') || name.includes('shell') ||
      name.includes('roll') || name.includes('esquive') || name.includes('sprawl')
    ) {
      return 'defense_blocage';
    }

    // 3. Frappes Fondamentales (Défaut pour les coups de poing, pied, coude, genou)
    return 'frappe_fondamentale';
  }

  /**
   * Associe une image scientifique réelle INSEP / Votre EPS si disponible
   */
  static getRealImagePath(tech) {
    const name = ((tech?.nom || '') + ' ' + (tech?.trad || '')).toLowerCase();
    if (name.includes('cross') || name.includes('direct arriere') || name.includes('straight')) {
      return { path: './images/insep_boxeur_cross.png', title: 'Capture INSEP REVEA 3D - Cross / Direct Arrière' };
    }
    if (name.includes('hook') || name.includes('crochet')) {
      return { path: './images/insep_boxeur_hook.png', title: 'Capture INSEP REVEA 3D - Crochet Scapulaire' };
    }
    if (name.includes('uppercut') || name.includes('remontant')) {
      return { path: './images/insep_boxeur_uppercut.png', title: 'Capture INSEP REVEA 3D - Uppercut Ascendant' };
    }
    if (name.includes('low kick') || name.includes('fouett') || name.includes('kickboxing') || name.includes('mawashi')) {
      return { path: './images/votreeps_planche_biomecanique.png', title: 'Planche Biomécanique Votre EPS - Cinématique de Frappe' };
    }
    return null;
  }

  /**
   * Génère le SVG vectoriel détaillé et enrichi selon la technique et sa famille
   */
  static renderSVG(family, tech) {
    const name = ((tech?.nom || '') + ' ' + (tech?.trad || '')).toLowerCase();

    if (family === 'frappe_fondamentale') {
      return this.renderStrikingSVG(name, tech);
    } else if (family === 'clinch_projection') {
      return this.renderGrapplingSVG(name, tech);
    } else {
      return this.renderDefenseSVG(name, tech);
    }
  }

  // =========================================================================
  // 1. ILLUSTRATIONS : FRAPPES FONDAMENTALES (STRIKING)
  // =========================================================================
  static renderStrikingSVG(name, tech) {
    const isKick = name.includes('kick') || name.includes('geri') || name.includes('chagi') || name.includes('fouette') || name.includes('chasse') || name.includes('teep');
    const isKnee = name.includes('genou') || name.includes('khao');
    const isElbow = name.includes('coude') || name.includes('sok') || name.includes('empi');
    const isHook = name.includes('hook') || name.includes('crochet') || name.includes('overhand');
    const isUpper = name.includes('upper') || name.includes('remontant');

    if (isKick) {
      // Modélisation d'un Coup de pied / Low-Middle-High Kick
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
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <!-- Grille HUD arrière-plan -->
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
          <path d="M 250 0 L 250 360" stroke="#1E293B" stroke-dasharray="4,4"/>
          <circle cx="250" cy="220" r="120" stroke="#1E293B" stroke-dasharray="2,4" fill="none"/>

          <!-- Cible d'impact -->
          <circle cx="390" cy="160" r="32" fill="url(#impactGlow)" filter="url(#glow)"/>
          <circle cx="390" cy="160" r="6" fill="#FFFFFF"/>
          <text x="395" y="145" fill="#FF3366" font-size="11" font-family="monospace" font-weight="bold">ZONE D'IMPACT (TIBIA / PIED)</text>

          <!-- Combattant : Jambe d'appui & Pivot -->
          <line x1="180" y1="300" x2="180" y2="240" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
          <circle cx="180" cy="300" r="5" fill="#FFD700"/>
          <text x="110" y="325" fill="#FFD700" font-size="10" font-family="monospace">PIVOT D'APPUI 180°</text>
          <path d="M 160 300 A 20 20 0 0 1 200 300" stroke="#FFD700" stroke-width="2" fill="none" marker-end="url(#arrow)"/>

          <!-- Tronc en torsion & Tête -->
          <circle cx="160" cy="140" r="16" fill="#38BDF8"/>
          <line x1="180" y1="240" x2="160" y2="160" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>

          <!-- Balancier des bras (Garde & Contrepoids scapulaire) -->
          <line x1="160" y1="170" x2="120" y2="185" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
          <line x1="160" y1="170" x2="200" y2="175" stroke="#38BDF8" stroke-width="6" stroke-linecap="round"/>

          <!-- Jambe de frappe en fouetté / extension cinétique -->
          <line x1="180" y1="240" x2="280" y2="190" stroke="url(#legGrad)" stroke-width="10" stroke-linecap="round"/>
          <line x1="280" y1="190" x2="385" y2="160" stroke="url(#legGrad)" stroke-width="8" stroke-linecap="round" filter="url(#glow)"/>
          <circle cx="280" cy="190" r="6" fill="#FFD700"/>

          <!-- Vecteur cinétique de force F -->
          <path d="M 260 250 Q 340 230 380 170" fill="none" stroke="#FF6B35" stroke-width="3" stroke-dasharray="5,3"/>
          <polygon points="380,165 390,175 375,178" fill="#FF6B35"/>
          <text x="300" y="270" fill="#FF6B35" font-size="12" font-family="monospace" font-weight="bold">F_impact = 5 400 N</text>

          <!-- Badge HUD -->
          <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
          <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">FRAPPE FONDAMENTALE</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Cinématique de Coup de Pied</text>
        </svg>
      `;
    }

    if (isKnee || isElbow) {
      // Modélisation Coup de Genou ou Coup de Coude (Courte distance percutante)
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="kneeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#FF6B35" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
          
          <!-- Impact concentré -->
          <circle cx="310" cy="150" r="28" fill="url(#kneeGlow)"/>
          <circle cx="310" cy="150" r="6" fill="#FFFFFF"/>
          <text x="325" y="145" fill="#FF6B35" font-size="11" font-family="monospace" font-weight="bold">${isElbow ? "POINTE DU COUDE (OLÉCRÂNE)" : "POINTE DE ROTULE PERFORANTE"}</text>

          <!-- Posture avec bascule axiale -->
          <circle cx="180" cy="110" r="16" fill="#38BDF8"/>
          <line x1="200" y1="230" x2="180" y2="130" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <line x1="200" y1="230" x2="200" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>

          <!-- Membre percutant fléchi en pointe acérée -->
          ${isElbow ? `
            <line x1="180" y1="140" x2="240" y2="135" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>
            <line x1="240" y1="135" x2="305" y2="150" stroke="#FF6B35" stroke-width="9" stroke-linecap="round"/>
            <line x1="305" y1="150" x2="250" y2="175" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
          ` : `
            <line x1="200" y1="230" x2="270" y2="190" stroke="#00CED1" stroke-width="10" stroke-linecap="round"/>
            <line x1="270" y1="190" x2="305" y2="150" stroke="#FF6B35" stroke-width="10" stroke-linecap="round"/>
            <line x1="305" y1="150" x2="300" y2="230" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
          `}

          <!-- Vecteur force perforant -->
          <line x1="240" y1="190" x2="310" y2="150" stroke="#FF3366" stroke-width="3" stroke-dasharray="4,3"/>
          <polygon points="310,145 320,152 308,158" fill="#FF3366"/>
          <text x="230" y="270" fill="#FFD700" font-size="11" font-family="monospace">LEVIER COURT & ACCÉLÉRATION MASSIVE</text>

          <rect x="20" y="20" width="190" height="36" rx="8" fill="#0F172A" stroke="#FF6B35" stroke-width="1"/>
          <text x="30" y="37" fill="#FF6B35" font-size="11" font-family="monospace" font-weight="bold">FRAPPE COURT CORPS-À-CORPS</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">${isElbow ? "Percussion Coudée Tranchante" : "Percussion Genu-Pectorale"}</text>
        </svg>
      `;
    }

    if (isHook || isUpper) {
      // Modélisation Crochet Circulaire ou Uppercut Ascendant
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

          <!-- Cible d'impact -->
          <circle cx="340" cy="${isUpper ? '120' : '140'}" r="26" fill="#F43F5E" fill-opacity="0.3"/>
          <circle cx="340" cy="${isUpper ? '120' : '140'}" r="6" fill="#FFFFFF"/>
          <text x="355" y="${isUpper ? '115' : '135'}" fill="#F43F5E" font-size="11" font-family="monospace" font-weight="bold">${isUpper ? "MENTON / PLEXUS (ASCENDANT)" : "MÂCHOIRE / TEMPE (CIRCULAIRE)"}</text>

          <!-- Combattant posture -->
          <line x1="170" y1="300" x2="190" y2="240" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
          <line x1="230" y1="300" x2="210" y2="240" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
          <line x1="200" y1="240" x2="200" y2="160" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <circle cx="200" cy="135" r="16" fill="#38BDF8"/>

          ${isUpper ? `
            <!-- Trajectoire ascendante de l'Uppercut -->
            <path d="M 210 200 Q 250 220 280 180 T 338 125" fill="none" stroke="#FF6B35" stroke-width="4"/>
            <polygon points="334,120 344,124 337,132" fill="#FF6B35"/>
            <line x1="200" y1="165" x2="260" y2="200" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>
            <line x1="260" y1="200" x2="335" y2="128" stroke="#FF6B35" stroke-width="8" stroke-linecap="round"/>
          ` : `
            <!-- Trajectoire circulaire du Crochet -->
            <path d="M 220 160 A 70 70 0 0 1 335 140" fill="none" stroke="#FF6B35" stroke-width="4" stroke-dasharray="4,2"/>
            <polygon points="335,135 345,142 336,148" fill="#FF6B35"/>
            <line x1="200" y1="160" x2="270" y2="135" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>
            <line x1="270" y1="135" x2="335" y2="140" stroke="#FF6B35" stroke-width="8" stroke-linecap="round"/>
          `}

          <text x="140" y="275" fill="#FFD700" font-size="11" font-family="monospace">ROTATION DU BASSIN & FLÉCHISSEURS</text>
          <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
          <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">FRAPPE FONDAMENTALE</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">${isUpper ? "Uppercut Vertical" : "Crochet Scapulaire 90°"}</text>
        </svg>
      `;
    }

    // Direct linéaire fondamental (Jab / Cross / Tsuki / Stop Hit)
    return `
      <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="360" fill="#030712"/>
        <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>
        
        <!-- Axe linéaire de propagation -->
        <line x1="80" y1="160" x2="420" y2="160" stroke="#00CED1" stroke-width="1" stroke-dasharray="4,4"/>

        <!-- Cible d'impact -->
        <circle cx="390" cy="160" r="26" fill="#F43F5E" fill-opacity="0.3"/>
        <circle cx="390" cy="160" r="6" fill="#FFFFFF"/>
        <text x="390" y="135" fill="#F43F5E" font-size="11" font-family="monospace" font-weight="bold">IMPACT DIRECT AXIAL</text>

        <!-- Poussée plantaire arrière (Ground Reaction Force) -->
        <line x1="120" y1="300" x2="160" y2="240" stroke="#FFD700" stroke-width="9" stroke-linecap="round"/>
        <line x1="160" y1="240" x2="220" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
        <text x="80" y="325" fill="#FFD700" font-size="10" font-family="monospace">POUSSÉE PLANTAIRE (GRF)</text>

        <!-- Tronc & Buste -->
        <line x1="180" y1="240" x2="200" y2="160" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
        <circle cx="195" cy="135" r="16" fill="#38BDF8"/>

        <!-- Bras déployé en ligne droite -->
        <line x1="200" y1="160" x2="290" y2="160" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>
        <line x1="290" y1="160" x2="385" y2="160" stroke="#FF6B35" stroke-width="8" stroke-linecap="round"/>
        <polygon points="385,155 395,160 385,165" fill="#FF6B35"/>

        <!-- Données dynamiques -->
        <text x="260" y="190" fill="#00CED1" font-size="11" font-family="monospace">ALIGNEMENT POIGNET-COUDE-ÉPAULE</text>
        <text x="240" y="270" fill="#FF6B35" font-size="12" font-family="monospace" font-weight="bold">F_direct = 4 800 N • v = 11.2 m/s</text>

        <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
        <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">FRAPPE FONDAMENTALE</text>
        <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Direct Linéaire (Jab / Cross)</text>
      </svg>
    `;
  }

  // =========================================================================
  // 2. ILLUSTRATIONS : CLINCH ET PROJECTIONS (GRAPPLING & LUTTE)
  // =========================================================================
  static renderGrapplingSVG(name, tech) {
    const isThrow = name.includes('nage') || name.includes('projection') || name.includes('suplex') || name.includes('seoi') || name.includes('goshi');
    const isTakedown = name.includes('takedown') || name.includes('double leg') || name.includes('single leg') || name.includes('ramassement');
    const isSweep = name.includes('gari') || name.includes('balayage') || name.includes('fauchage') || name.includes('podkhvat') || name.includes('rasteira');
    const isSubmission = name.includes('armbar') || name.includes('juji') || name.includes('kimura') || name.includes('cle') || name.includes('kolena') || name.includes('ankle') || name.includes('heel');
    const isChoke = name.includes('mata') || name.includes('guillotine') || name.includes('triangle') || name.includes('etranglement') || name.includes('choke');

    if (isThrow) {
      // Projection de Hanche ou d'Épaule (Seoi-Nage / O-Goshi)
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

          <!-- Centre de gravité & Point de pivot -->
          <circle cx="240" cy="220" r="8" fill="#FFD700"/>
          <text x="210" y="245" fill="#FFD700" font-size="10" font-family="monospace">POINT DE BASCULE (FULCRUM)</text>

          <!-- Combattant A (Attaquant fléchi sous le centre de gravité) -->
          <circle cx="220" cy="160" r="15" fill="#00CED1"/>
          <line x1="220" y1="175" x2="235" y2="225" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <line x1="235" y1="225" x2="200" y2="300" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>
          <line x1="235" y1="225" x2="250" y2="300" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>

          <!-- Combattant B (Projeté en l'air au-dessus du dos) -->
          <circle cx="280" cy="110" r="15" fill="#F43F5E"/>
          <path d="M 270 120 Q 250 170 200 170" fill="none" stroke="#F43F5E" stroke-width="10" stroke-linecap="round"/>
          <line x1="200" y1="170" x2="160" y2="150" stroke="#F43F5E" stroke-width="7" stroke-linecap="round"/>

          <!-- Trajectoire parabolique de chute -->
          <path d="M 300 120 Q 230 60 120 220" fill="none" stroke="#FF6B35" stroke-width="3" stroke-dasharray="5,3"/>
          <polygon points="120,220 125,208 135,215" fill="#FF6B35"/>
          <text x="130" y="100" fill="#FF6B35" font-size="11" font-family="monospace" font-weight="bold">COUPLE DE RENVERSEMENT</text>

          <rect x="20" y="20" width="190" height="36" rx="8" fill="#0F172A" stroke="#FFD700" stroke-width="1"/>
          <text x="30" y="37" fill="#FFD700" font-size="11" font-family="monospace" font-weight="bold">CLINCH ET PROJECTIONS</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Projection Hanche / Épaule</text>
        </svg>
      `;
    }

    if (isTakedown) {
      // Double Leg ou Single Leg Takedown (Changement de niveau et percée)
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

          <!-- Défenseur debout -->
          <circle cx="340" cy="140" r="15" fill="#64748B"/>
          <line x1="340" y1="155" x2="340" y2="225" stroke="#64748B" stroke-width="10" stroke-linecap="round"/>
          <line x1="340" y1="225" x2="330" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
          <line x1="340" y1="225" x2="360" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>

          <!-- Attaquant en plongée sous le centre de gravité (Double Leg) -->
          <circle cx="260" cy="200" r="15" fill="#00CED1"/>
          <line x1="260" y1="210" x2="200" y2="240" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <line x1="200" y1="240" x2="160" y2="290" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>
          <!-- Bras enserrant les genoux adverses -->
          <path d="M 260 215 L 330 250 L 350 250" fill="none" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>

          <!-- Flèches d'impact : Poussée d'épaule axiale + traction des jarrets -->
          <line x1="260" y1="200" x2="335" y2="205" stroke="#FF3366" stroke-width="4"/>
          <polygon points="335,200 345,205 335,210" fill="#FF3366"/>
          <text x="180" y="180" fill="#FF3366" font-size="11" font-family="monospace" font-weight="bold">POUSSÉE D'ÉPAULE STERNUM</text>
          <text x="260" y="275" fill="#FFD700" font-size="10" font-family="monospace">TRACTION DES CREUX POPLITÉS</text>

          <rect x="20" y="20" width="190" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
          <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">CLINCH ET PROJECTIONS</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Double Leg Takedown (Lutte)</text>
        </svg>
      `;
    }

    if (isSubmission || isChoke) {
      // Clé articulaire ou Étranglement (Armbar, Kimura, RNC)
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

          <!-- Fulcrum au pubis & Bras en hyperextension -->
          <circle cx="250" cy="230" r="10" fill="#FFD700"/>
          <text x="210" y="210" fill="#FFD700" font-size="11" font-family="monospace" font-weight="bold">FULCRUM DU LEVIER (CLASSE 1)</text>

          <!-- Corps de l'attaquant au sol pontant vers le haut -->
          <line x1="150" y1="280" x2="250" y2="230" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <circle cx="140" cy="280" r="15" fill="#00CED1"/>

          <!-- Vecteur de pontage ascendant -->
          <line x1="250" y1="240" x2="250" y2="170" stroke="#FF6B35" stroke-width="4"/>
          <polygon points="245,170 250,160 255,170" fill="#FF6B35"/>
          <text x="260" y="180" fill="#FF6B35" font-size="11" font-family="monospace" font-weight="bold">F_pontage (BASSIN)</text>

          <!-- Bras de la victime verrouillé -->
          <line x1="250" y1="230" x2="340" y2="260" stroke="#F43F5E" stroke-width="8" stroke-linecap="round"/>
          <!-- Traction vers le bas des mains de l'attaquant -->
          <line x1="330" y1="255" x2="330" y2="295" stroke="#38BDF8" stroke-width="4"/>
          <polygon points="325,295 330,305 335,295" fill="#38BDF8"/>
          <text x="310" y="325" fill="#38BDF8" font-size="10" font-family="monospace">TRACTION AU POIGNET</text>

          <rect x="20" y="20" width="200" height="36" rx="8" fill="#0F172A" stroke="#FF3366" stroke-width="1"/>
          <text x="30" y="37" fill="#FF3366" font-size="11" font-family="monospace" font-weight="bold">SOUMISSION & CONTRÔLE</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Levier Hyper-Axial (Armbar / Juji)</text>
        </svg>
      `;
    }

    // Clinch cervical thaï ou saisie de corps (Thai Plum / Double Underhooks)
    return `
      <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="360" fill="#030712"/>
        <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

        <!-- Deux combattants au corps-à-corps en verrouillage -->
        <circle cx="210" cy="140" r="16" fill="#00CED1"/>
        <circle cx="290" cy="155" r="16" fill="#64748B"/>

        <!-- Buste attaquant dominant -->
        <line x1="210" y1="155" x2="200" y2="230" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
        <line x1="200" y1="230" x2="190" y2="300" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>
        <line x1="200" y1="230" x2="225" y2="300" stroke="#00CED1" stroke-width="8" stroke-linecap="round"/>

        <!-- Mains enserrant la nuque adverse (Collar Tie) -->
        <path d="M 210 160 L 285 145" stroke="#FFD700" stroke-width="7" stroke-linecap="round"/>
        <text x="240" y="130" fill="#FFD700" font-size="10" font-family="monospace" font-weight="bold">VERROUILLAGE OCCIPITAL</text>

        <!-- Buste défenseur cassé vers l'avant -->
        <line x1="290" y1="165" x2="310" y2="235" stroke="#64748B" stroke-width="10" stroke-linecap="round"/>
        <line x1="310" y1="235" x2="330" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>

        <!-- Flèche de cassure posturale descendante -->
        <line x1="290" y1="160" x2="290" y2="220" stroke="#FF6B35" stroke-width="4"/>
        <polygon points="285,220 290,230 295,220" fill="#FF6B35"/>
        <text x="300" y="210" fill="#FF6B35" font-size="10" font-family="monospace">FLEXION CERVICALE FORCÉE</text>

        <rect x="20" y="20" width="190" height="36" rx="8" fill="#0F172A" stroke="#FFD700" stroke-width="1"/>
        <text x="30" y="37" fill="#FFD700" font-size="11" font-family="monospace" font-weight="bold">CLINCH ET PROJECTIONS</text>
        <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Saisie de Nuque & Clinch Thaï</text>
      </svg>
    `;
  }

  // =========================================================================
  // 3. ILLUSTRATIONS : DÉFENSES ET BLOCAGES (DEFENSES & BLOCAGES)
  // =========================================================================
  static renderDefenseSVG(name, tech) {
    const isShinBlock = name.includes('tibia') || name.includes('shield') || name.includes('blocage bas') || name.includes('check');
    const isBobWeave = name.includes('bob') || name.includes('weave') || name.includes('slip') || name.includes('retrait') || name.includes('fade');
    const isParry = name.includes('parry') || name.includes('parade') || name.includes('pak') || name.includes('bong') || name.includes('deviation');
    const isSprawl = name.includes('sprawl') || name.includes('takedown defense');

    if (isShinBlock) {
      // Blocage Tibial (Shield Muay-Thai / Kickboxing)
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

          <!-- Défenseur : Tibia levé à 45° en bouclier étanche -->
          <circle cx="280" cy="120" r="16" fill="#00E676"/>
          <line x1="280" y1="135" x2="280" y2="210" stroke="#00E676" stroke-width="12" stroke-linecap="round"/>
          <line x1="280" y1="210" x2="295" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>

          <!-- Tibia de blocage levé en bouclier étanche -->
          <line x1="280" y1="210" x2="245" y2="180" stroke="#00E676" stroke-width="11" stroke-linecap="round"/>
          <line x1="245" y1="180" x2="225" y2="240" stroke="#00E676" stroke-width="11" stroke-linecap="round"/>

          <!-- Frappe adverse bloquée et arrêtée net -->
          <line x1="120" y1="230" x2="225" y2="220" stroke="#FF6B35" stroke-width="9" stroke-linecap="round"/>
          <circle cx="225" cy="220" r="14" fill="#F43F5E" fill-opacity="0.4"/>
          <text x="130" y="205" fill="#FF6B35" font-size="10" font-family="monospace">LOW KICK IMPACT BLOQUÉ</text>

          <!-- Angle de 45° et verrouillage rotule -->
          <text x="260" y="170" fill="#00E676" font-size="11" font-family="monospace" font-weight="bold">BOUCLIER TIBIAL 45°</text>
          <text x="210" y="280" fill="#FFD700" font-size="10" font-family="monospace">VERROUILLAGE DU QUADRICEPS</text>

          <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00E676" stroke-width="1"/>
          <text x="30" y="37" fill="#00E676" font-size="11" font-family="monospace" font-weight="bold">DÉFENSES ET BLOCAGES</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Blocage Tibial (Shin Shield)</text>
        </svg>
      `;
    }

    if (isBobWeave) {
      // Esquive rotative (Bob and Weave / Slip)
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

          <!-- Trajectoire du coup de poing adverse dans le vide -->
          <line x1="120" y1="130" x2="380" y2="130" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
          <polygon points="380,125 390,130 380,135" fill="#FF6B35"/>
          <text x="130" y="115" fill="#FF6B35" font-size="11" font-family="monospace" font-weight="bold">TRAJECTOIRE DU CROCHET ADVERSE</text>

          <!-- Trajectoire en U de l'esquive de buste -->
          <path d="M 260 120 Q 260 190 320 170" fill="none" stroke="#00CED1" stroke-width="3" stroke-dasharray="4,3"/>
          <polygon points="320,165 328,172 318,177" fill="#00CED1"/>

          <!-- Boxeur fléchi sous le coup (position d'esquive) -->
          <circle cx="310" cy="180" r="16" fill="#00CED1"/>
          <line x1="310" y1="195" x2="290" y2="245" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
          <line x1="290" y1="245" x2="260" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
          <line x1="290" y1="245" x2="320" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>

          <text x="210" y="235" fill="#00CED1" font-size="11" font-family="monospace">ESQUIVE ROTATIVE EN 'U'</text>
          <text x="210" y="275" fill="#FFD700" font-size="10" font-family="monospace">CHARGE DU CONTRE EN SORTIE</text>

          <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
          <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">DÉFENSES ET BLOCAGES</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Esquive Rotative (Bob & Weave)</text>
        </svg>
      `;
    }

    if (isParry) {
      // Déviation réflexe / Parade chassée (Parry / Pak Sao)
      return `
        <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="360" fill="#030712"/>
          <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

          <!-- Direct adverse dévié hors axe -->
          <line x1="120" y1="160" x2="250" y2="160" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
          <line x1="250" y1="160" x2="350" y2="120" stroke="#FF6B35" stroke-width="5" stroke-dasharray="4,2" stroke-linecap="round"/>
          <text x="130" y="145" fill="#FF6B35" font-size="11" font-family="monospace">DIRECT ADVERSE DÉVIÉ HORS AXE</text>

          <!-- Contact de la main en parade (Paume / Pak Sao) -->
          <circle cx="250" cy="160" r="14" fill="#00E676" fill-opacity="0.4"/>
          <text x="260" y="180" fill="#00E676" font-size="11" font-family="monospace" font-weight="bold">POINT D'INTERCEPTION (PAUME)</text>

          <!-- Défenseur droit -->
          <circle cx="330" cy="155" r="16" fill="#00E676"/>
          <line x1="330" y1="170" x2="320" y2="235" stroke="#00E676" stroke-width="12" stroke-linecap="round"/>
          <line x1="330" y1="175" x2="255" y2="162" stroke="#00E676" stroke-width="7" stroke-linecap="round"/>

          <text x="220" y="270" fill="#FFD700" font-size="10" font-family="monospace">ÉNERGIE MINIMALE POUR DÉVIER LA FORCE</text>

          <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00E676" stroke-width="1"/>
          <text x="30" y="37" fill="#00E676" font-size="11" font-family="monospace" font-weight="bold">DÉFENSES ET BLOCAGES</text>
          <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Parade Chassée & Déviation</text>
        </svg>
      `;
    }

    // Garde haute en coquille (High Guard / Shell / Uke)
    return `
      <svg viewBox="0 0 500 360" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="360" fill="#030712"/>
        <path d="M 0 300 L 500 300" stroke="#1E293B" stroke-width="2"/>

        <!-- Tête et Buste protégé -->
        <circle cx="280" cy="135" r="16" fill="#64748B"/>
        <line x1="280" y1="150" x2="270" y2="230" stroke="#64748B" stroke-width="12" stroke-linecap="round"/>
        <line x1="270" y1="230" x2="250" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>
        <line x1="270" y1="230" x2="295" y2="300" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>

        <!-- Avant-bras verticaux collés en bouclier facial -->
        <line x1="255" y1="120" x2="255" y2="180" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>
        <line x1="268" y1="115" x2="268" y2="175" stroke="#00CED1" stroke-width="12" stroke-linecap="round"/>

        <!-- Onde d'impact sur la garde -->
        <circle cx="250" cy="135" r="22" fill="#F43F5E" fill-opacity="0.3"/>
        <text x="285" y="115" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">COQUILLE ÉTANCHE (AVANT-BRAS)</text>

        <!-- Frappe adverse stoppée -->
        <line x1="120" y1="135" x2="245" y2="135" stroke="#FF6B35" stroke-width="8" stroke-linecap="round"/>
        <text x="110" y="115" fill="#FF6B35" font-size="10" font-family="monospace">IMPACT ABSORBÉ SUR LES MUSCLES RADIAUX</text>

        <rect x="20" y="20" width="180" height="36" rx="8" fill="#0F172A" stroke="#00CED1" stroke-width="1"/>
        <text x="30" y="37" fill="#00CED1" font-size="11" font-family="monospace" font-weight="bold">DÉFENSES ET BLOCAGES</text>
        <text x="30" y="49" fill="#94A3B8" font-size="9" font-family="monospace">Garde Haute en Coquille (Shell)</text>
      </svg>
    `;
  }
}
