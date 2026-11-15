/**
 * Fiches des Légendes du Combat (Fighter Studies) & Combos Signature
 */

export const FIGHTERS = [
  {
    id: 'ali',
    name: 'Muhammad Ali',
    nickname: '"The Greatest"',
    discipline: 'Boxe Anglaise',
    icon: '🦋',
    theme: 'cyan',
    description: 'Pionnier du jeu de jambes flottant (Float like a butterfly, sting like a bee). Déplacement orbital, esquive arrière de buste sans rupture d équilibre et jab à 9.8 m/s.',
    combos: ['Jab', 'Double Jab', 'Cross arrière', 'Esquive en reculant', 'Cross rapide']
  },
  {
    id: 'tyson',
    name: 'Mike Tyson',
    nickname: '"Iron Mike"',
    discipline: 'Boxe Anglaise',
    icon: '💣',
    theme: 'rose',
    description: 'Maître du système Peek-a-boo. Oscillations pendulaires rapides (Bob & Weave) accumulant l énergie élastique dans les cuisses (>3 500 N) pour des crochets et uppercuts foudroyants.',
    combos: ['Esquive gauche', 'Crochet au foie', 'Uppercut droit', 'Crochet gauche']
  },
  {
    id: 'buakaw',
    name: 'Buakaw Banchamek',
    nickname: '"White Lotus"',
    discipline: 'Muay-Thaï',
    icon: '🥊',
    theme: 'yellow',
    description: 'Symbole du coup de tibia destructeur. Transfert complet du poids de hanche sur le tiers distal du tibia, teep repoussoir brisant l élan adverse et genoux en clinch.',
    combos: ['Teep d arrêt', 'Feinte de Teep', 'Low kick surpuissant', 'Coup de coude']
  },
  {
    id: 'gracie',
    name: 'Royce Gracie',
    nickname: 'Pionnier UFC',
    discipline: 'Jiu-Jitsu Brésilien',
    icon: '🥋',
    theme: 'emerald',
    description: 'Suprématie des leviers biomécaniques sur la force brute. Fermeture de distance, clinch sous-aisselle, amenée au sol et soumission en clé de bras ou guillotine.',
    combos: ['Front kick de distance', 'Clinch sous aisselle', 'Takedown', 'Clé de bras Armbar']
  },
  {
    id: 'gsp',
    name: 'Georges St-Pierre',
    nickname: '"GSP"',
    discipline: 'MMA / Karaté / Lutte',
    icon: '🇨🇦',
    theme: 'indigo',
    description: 'Perfection de la transition frappe-lutte. Jab clinique masquant un abaissement de niveau explosif vers Double Leg Takedown avec 100% de timing.',
    combos: ['Jab d aveuglement', 'Changement de niveau', 'Double Leg Takedown', 'Frappes au sol']
  }
];

export class FightersManager {
  constructor(containerId, onSelectFighter) {
    this.container = document.getElementById(containerId);
    this.onSelectFighter = onSelectFighter;
    this.render();
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';

    FIGHTERS.forEach(f => {
      const card = document.createElement('div');
      card.className = `p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-${f.theme}-500/50 transition space-y-3`;
      card.innerHTML = `
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-bold font-hud text-base sm:text-lg text-white">${f.name}</h3>
            <span class="text-xs text-${f.theme}-400 font-mono">${f.nickname} • ${f.discipline}</span>
          </div>
          <span class="text-2xl">${f.icon}</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${f.description}</p>
        <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono space-y-1">
          <div class="text-${f.theme}-400 font-bold">Combinaison Signature :</div>
          <div class="text-slate-300">${f.combos.join(' • ')}</div>
        </div>
        <button data-id="${f.id}" class="load-fighter-btn w-full py-2.5 rounded-xl bg-${f.theme}-600 hover:bg-${f.theme}-500 text-white font-bold font-hud text-xs transition flex items-center justify-center gap-2 active:scale-95">
          <span>🎙️</span> Charger ses Combos dans le Coach
        </button>
      `;
      this.container.appendChild(card);
    });

    this.container.querySelectorAll('.load-fighter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const fighter = FIGHTERS.find(item => item.id === id);
        if (fighter && this.onSelectFighter) {
          this.onSelectFighter(fighter);
        }
      });
    });
  }
}
