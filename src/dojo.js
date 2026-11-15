/**
 * Dojo de Sparring Virtuel (QI Décisionnel de Combat)
 */

export class VirtualDojo {
  constructor(cardContainerId, xpBadgeId) {
    this.container = document.getElementById(cardContainerId);
    this.xpBadge = document.getElementById(xpBadgeId);
    this.currentIdx = 0;
    this.xp = 0;

    this.scenarios = [
      {
        title: "Attaque en Overhand Plongeant Adverse",
        description: "L adversaire déclenche un grand overhand du droit plongeant vers votre tempe gauche en engageant toute sa masse.",
        options: [
          { text: "A. Bloquer passivement avec la garde haute", correct: false, exp: "Le choc direct de 3 500 N traverse la garde et crée un déséquilibre arrière." },
          { text: "B. Duck-under (esquive rotative sous le bras) et amenée au sol", correct: true, exp: "Parfait ! La trajectoire circulaire de l overhand offre un passage direct sous le centre de gravité adverse." },
          { text: "C. Tenter un coup de pied sauté", correct: false, exp: "L appui instable en l air entraîne une collision cinétique fatale." }
        ]
      },
      {
        title: "Tentative d Amenée au Sol en Double Leg",
        description: "L adversaire change subitement de niveau et plonge à pleine vitesse pour saisir vos deux genoux.",
        options: [
          { text: "A. Sprawl explosif hanches en arrière et pression sur la nuque", correct: true, exp: "Excellent ! Le recul des hanches dérobe les appuis et la masse de votre tronc écrase la pénétration adverse." },
          { text: "B. Tenter un coup de poing direct en reculant", correct: false, exp: "La poussée axiale adverse pénètre sous votre ligne de frappe et vous renverse au sol." },
          { text: "C. Attraper son dos avec les mains", correct: false, exp: "Sans défense des jambes, la projection au sol est inévitable." }
        ]
      },
      {
        title: "Défense sur Clé de Bras (Armbar) en Garde Fermée",
        description: "L adversaire pivote ses hanches au sol et commence à passer sa jambe au-dessus de votre visage pour verrouiller le coude.",
        options: [
          { text: "A. Tirer de toutes ses forces en arrière en ligne droite", correct: false, exp: "L extension en ligne droite facilite l application du levier de classe 1 sur le coude." },
          { text: "B. Empiler l adversaire (Stack pass) et tourner le pouce vers son corps", correct: true, exp: "Bravo ! L écrasement cervical empêche l extension de hanche et la rotation du bras libère l articulation." },
          { text: "C. Se laisser tomber sur le côté", correct: false, exp: "Offre un angle de cassure idéal pour le combattant au sol." }
        ]
      }
    ];

    this.render();
  }

  render() {
    if (!this.container) return;
    const sc = this.scenarios[this.currentIdx];

    this.container.innerHTML = `
      <div class="space-y-1.5">
        <div class="text-[10px] font-mono text-yellow-400 font-bold">SCÉNARIO #${this.currentIdx + 1}</div>
        <h3 class="text-lg sm:text-xl font-bold font-hud text-white">${sc.title}</h3>
        <p class="text-xs text-slate-300 leading-relaxed">${sc.description}</p>
      </div>

      <div class="space-y-2 pt-2">
        ${sc.options.map((opt, i) => `
          <button data-opt="${i}" class="dojo-opt-btn w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-200 transition active:scale-98">
            ${opt.text}
          </button>
        `).join('')}
      </div>

      <div id="dojoFeedback" class="hidden p-3.5 rounded-xl text-xs space-y-2"></div>
    `;

    this.container.querySelectorAll('.dojo-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const optIdx = parseInt(e.currentTarget.getAttribute('data-opt'), 10);
        this.answer(optIdx);
      });
    });
  }

  answer(optIdx) {
    const sc = this.scenarios[this.currentIdx];
    const opt = sc.options[optIdx];
    const fb = document.getElementById('dojoFeedback');
    if (!fb) return;

    fb.classList.remove('hidden');

    if (opt.correct) {
      this.xp += 100;
      if (this.xpBadge) this.xpBadge.innerText = `${this.xp} XP`;
      fb.className = 'p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 space-y-2';
      fb.innerHTML = `
        <div class="font-bold flex items-center gap-2">✅ DÉCISION BIOMÉCANIQUE OPTIMALE (+100 XP)</div>
        <p>${opt.exp}</p>
        <button id="nextDojoBtn" class="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs active:scale-95">Scénario Suivant →</button>
      `;
      document.getElementById('nextDojoBtn')?.addEventListener('click', () => {
        this.currentIdx = (this.currentIdx + 1) % this.scenarios.length;
        this.render();
      });
    } else {
      fb.className = 'p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 space-y-2';
      fb.innerHTML = `
        <div class="font-bold flex items-center gap-2">❌ ERREUR TACTIQUE CRITIQUE</div>
        <p>${opt.exp}</p>
        <button id="retryDojoBtn" class="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs active:scale-95">Réessayer</button>
      `;
      document.getElementById('retryDojoBtn')?.addEventListener('click', () => {
        this.render();
      });
    }
  }
}
