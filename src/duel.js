/**
 * Simulateur de Duel Tactique (Combattant A vs Combattant B)
 * Calcul automatique de collision cinétique, détection de failles et avantage décisionnel
 */

import { DATASET } from './dataset.js';

export class TacticalDuelSimulator {
  constructor(selectAId, selectBId) {
    this.selectA = document.getElementById(selectAId);
    this.selectB = document.getElementById(selectBId);

    if (this.selectA && this.selectB) {
      this.initSelectors();
      this.selectA.addEventListener('change', () => this.simulate());
      this.selectB.addEventListener('change', () => this.simulate());
      this.simulate();
    }
  }

  initSelectors() {
    this.selectA.innerHTML = '';
    this.selectB.innerHTML = '';

    DATASET.techniques.forEach(t => {
      const optA = document.createElement('option');
      optA.value = t.id;
      optA.innerText = `${t.nom} (${t.discipline})`;
      this.selectA.appendChild(optA);

      const optB = document.createElement('option');
      optB.value = t.id;
      optB.innerText = `${t.nom} (${t.discipline})`;
      this.selectB.appendChild(optB);
    });

    this.selectA.value = 'boxe-cross';
    this.selectB.value = 'lutte-double-leg';
  }

  simulate() {
    const idA = this.selectA.value;
    const idB = this.selectB.value;
    const techA = DATASET.techniques.find(t => t.id === idA);
    const techB = DATASET.techniques.find(t => t.id === idB);

    if (!techA || !techB) return;

    const infoA = document.getElementById('duelInfoA');
    const infoB = document.getElementById('duelInfoB');

    if (infoA) {
      infoA.innerHTML = `
        <div><strong>Discipline :</strong> ${techA.discipline}</div>
        <div><strong>Distance :</strong> ${techA.distance}</div>
        <div><strong>Puissance :</strong> ${techA.puissance}/5 • <strong>Difficulté :</strong> ${techA.difficulte}/5</div>
        <div class="text-rose-400"><strong>Faille :</strong> ${techA.failles_biomecaniques[0] || 'N/A'}</div>
      `;
    }

    if (infoB) {
      infoB.innerHTML = `
        <div><strong>Discipline :</strong> ${techB.discipline}</div>
        <div><strong>Distance :</strong> ${techB.distance}</div>
        <div><strong>Puissance :</strong> ${techB.puissance}/5 • <strong>Difficulté :</strong> ${techB.difficulte}/5</div>
        <div class="text-rose-400"><strong>Faille :</strong> ${techB.failles_biomecaniques[0] || 'N/A'}</div>
      `;
    }

    let scoreA = 50, scoreB = 50;
    let flawExploited = false;
    let flawDetail = '';

    const countersA = (techA.contres_recommandes || []).join(' ').toLowerCase();

    if (countersA.includes('double leg') && idB === 'lutte-double-leg') {
      scoreB += 30; scoreA -= 30;
      flawExploited = true;
      flawDetail = "B plonge sous la frappe en Double Leg Takedown.";
    } else if (countersA.includes('armbar') && idB === 'jjb-armbar') {
      scoreB += 25; scoreA -= 25;
      flawExploited = true;
      flawDetail = "B saisit le bras étendu et enroule en Armbar.";
    } else if (techA.distance.includes('Longue') && techB.distance.includes('Sol')) {
      scoreA += 15; scoreB -= 15;
    }

    scoreA += (techA.puissance - techA.risque) * 3;
    scoreB += (techB.puissance - techB.risque) * 3;

    scoreA = Math.max(10, Math.min(90, scoreA));
    scoreB = 100 - scoreA;

    const pctA = document.getElementById('duelPctA');
    const pctB = document.getElementById('duelPctB');
    const barA = document.getElementById('duelBarA');
    const barB = document.getElementById('duelBarB');

    if (pctA) pctA.innerText = `A : ${scoreA}%`;
    if (pctB) pctB.innerText = `B : ${scoreB}%`;
    if (barA) barA.style.width = scoreA + '%';
    if (barB) barB.style.width = scoreB + '%';

    const pill = document.getElementById('duelVerdictPill');
    if (pill) {
      if (scoreA > scoreB) {
        pill.className = 'px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40';
        pill.innerText = "AVANTAGE COMBATTANT A";
      } else if (scoreB > scoreA) {
        pill.className = 'px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
        pill.innerText = "AVANTAGE COMBATTANT B";
      } else {
        pill.className = 'px-3 py-1 rounded-full text-xs font-mono font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/40';
        pill.innerText = "COLLISION SYMÉTRIQUE";
      }
    }

    const distEl = document.getElementById('duelDistAnalysis');
    const speedEl = document.getElementById('duelSpeedAnalysis');
    const flawEl = document.getElementById('duelFlawAnalysis');
    const verdictEl = document.getElementById('duelDetailedVerdict');

    if (distEl) distEl.innerText = `${techA.distance} vs ${techB.distance}`;
    if (speedEl) speedEl.innerText = `Vitesse : ${techA.donnees_insep ? techA.donnees_insep.vitesse_ms + ' m/s' : 'N/A'} vs ${techB.donnees_insep ? techB.donnees_insep.vitesse_ms + ' m/s' : 'N/A'}`;
    if (flawEl) flawEl.innerText = flawExploited ? flawDetail : "Interception géométrique standard.";
    if (verdictEl) {
      verdictEl.innerText = `Analyse tactique : ${techA.nom} (${techA.discipline}) contre ${techB.nom} (${techB.discipline}). ${flawExploited ? 'La faille cinématique est directement exploitée par le combattant B qui dispose du contre idéal.' : 'L issue repose sur la précision du premier appui GRF et la conservation du polygone de sustentation.'}`;
    }
  }
}
