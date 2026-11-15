/**
 * Composant Encyclopédie des Arts Martiaux & Fiche Anatomique Modale
 */

import { DATASET } from './dataset.js';

export class EncyclopediaManager {
  constructor(gridContainerId) {
    this.container = document.getElementById(gridContainerId);
    this.init();
  }

  init() {
    this.render(DATASET.techniques);

    const searchInput = document.getElementById('encycloSearch');
    const filterSelect = document.getElementById('disciplineFilter');

    if (searchInput) {
      searchInput.addEventListener('input', () => this.filter());
    }
    if (filterSelect) {
      filterSelect.addEventListener('change', () => this.filter());
    }
  }

  filter() {
    const query = (document.getElementById('encycloSearch')?.value || '').toLowerCase();
    const disc = document.getElementById('disciplineFilter')?.value || 'ALL';

    const filtered = DATASET.techniques.filter(t => {
      const matchDisc = (disc === 'ALL' || t.discipline === disc);
      const matchQuery = t.nom.toLowerCase().includes(query) ||
                         t.discipline.toLowerCase().includes(query) ||
                         (t.muscles_moteurs || []).some(m => m.toLowerCase().includes(query)) ||
                         (t.cibles_anatomiques || []).some(c => c.toLowerCase().includes(query));
      return matchDisc && matchQuery;
    });

    this.render(filtered);
  }

  render(techniques) {
    if (!this.container) return;
    this.container.innerHTML = '';

    techniques.forEach(t => {
      const card = document.createElement('div');
      card.className = 'p-3.5 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition flex flex-col justify-between space-y-2.5';
      card.innerHTML = `
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">${t.discipline}</span>
            <span class="text-[11px] text-yellow-400 font-mono">⚡ ${t.puissance}/5</span>
          </div>
          <h4 class="font-bold font-hud text-sm sm:text-base text-white">${t.nom}</h4>
          <p class="text-xs text-slate-400 line-clamp-2">${t.mecanique_levier}</p>
        </div>
        <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between">
          <span class="text-[10px] font-mono text-slate-500 truncate max-w-[120px]">${t.distance}</span>
          <button data-id="${t.id}" class="open-modal-btn text-xs px-3 py-1.5 rounded-lg bg-cyan-600/30 text-cyan-300 hover:bg-cyan-600 hover:text-white transition font-mono active:scale-95">
            Fiche →
          </button>
        </div>
      `;
      this.container.appendChild(card);
    });

    // Attacher les écouteurs pour la modale
    this.container.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.openModal(id);
      });
    });
  }

  openModal(techId) {
    const t = DATASET.techniques.find(item => item.id === techId);
    if (!t) return;

    const modal = document.getElementById('techModal');
    if (!modal) return;

    document.getElementById('modalDisciplineBadge').innerText = t.discipline;
    document.getElementById('modalTitle').innerText = t.nom;
    document.getElementById('modalSubTitle').innerText = `${t.nom_international || ''} • ${t.famille} • ${t.distance}`;
    document.getElementById('modalLever').innerText = t.mecanique_levier;

    const motorUl = document.getElementById('modalMotors');
    motorUl.innerHTML = '';
    (t.muscles_moteurs || []).forEach(m => {
      const li = document.createElement('li'); li.innerText = m; motorUl.appendChild(li);
    });

    const targetUl = document.getElementById('modalTargets');
    targetUl.innerHTML = '';
    (t.cibles_anatomiques || []).forEach(c => {
      const li = document.createElement('li'); li.innerText = c; targetUl.appendChild(li);
    });

    const flawUl = document.getElementById('modalFlaws');
    flawUl.innerHTML = '';
    (t.failles_biomecaniques || []).forEach(f => {
      const li = document.createElement('li'); li.innerText = f; flawUl.appendChild(li);
    });

    const counterUl = document.getElementById('modalCounters');
    counterUl.innerHTML = '';
    (t.contres_recommandes || []).forEach(c => {
      const li = document.createElement('li'); li.innerText = c; counterUl.appendChild(li);
    });

    const insepBox = document.getElementById('modalInsepBox');
    const insepCont = document.getElementById('modalInsepContent');
    if (t.donnees_insep) {
      insepBox.classList.remove('hidden');
      insepCont.innerHTML = `
        Force Élite : <strong>${t.donnees_insep.force_elite_n} N</strong> • Vitesse : <strong>${t.donnees_insep.vitesse_ms} m/s</strong><br>
        Angle coude : <strong>${t.donnees_insep.angle_coude_deg}°</strong> • Appui GRF : <strong>${t.donnees_insep.ratio_grf}</strong>
      `;
    } else {
      insepBox.classList.add('hidden');
    }

    modal.classList.remove('hidden');
  }

  closeModal() {
    const modal = document.getElementById('techModal');
    if (modal) modal.classList.add('hidden');
  }
}
