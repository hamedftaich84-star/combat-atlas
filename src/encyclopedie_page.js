/**
 * Contrôleur JavaScript de la Grande Encyclopédie des Sports de Combat & Arts Martiaux
 */

import { ENCYCLOPEDIE_DATA } from './encyclopedie_dataset.js';

export class GrandEncyclopediaApp {
  constructor() {
    this.container = document.getElementById('encycloListContainer');
    this.countBadge = document.getElementById('disciplinesCountBadge');
    this.searchInput = document.getElementById('globalSearchInput');
    this.categorySelect = document.getElementById('categoryFilterSelect');
    this.modal = document.getElementById('disciplineDetailModal');

    this.currentData = [...ENCYCLOPEDIE_DATA];

    this.init();
  }

  init() {
    this.updateCount();
    this.render(this.currentData);

    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => this.filterData());
    }

    if (this.categorySelect) {
      this.categorySelect.addEventListener('change', () => this.filterData());
    }

    // Gestion de la fermeture de la modale
    document.getElementById('closeDisciplineModalBtn')?.addEventListener('click', () => {
      this.closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }

  updateCount() {
    if (this.countBadge) {
      this.countBadge.innerText = `${this.currentData.length} Disciplines Répertoriées`;
    }
  }

  filterData() {
    const query = (this.searchInput?.value || '').toLowerCase().trim();
    const cat = this.categorySelect?.value || 'ALL';

    this.currentData = ENCYCLOPEDIE_DATA.filter(item => {
      const matchCat = (cat === 'ALL' || item.categorie.toLowerCase().includes(cat.toLowerCase()));
      
      const matchQuery = 
        item.nom.toLowerCase().includes(query) ||
        item.nom_original.toLowerCase().includes(query) ||
        item.origine_pays.toLowerCase().includes(query) ||
        item.fondateurs_maitres.some(m => m.toLowerCase().includes(query)) ||
        item.points_forts.some(p => p.toLowerCase().includes(query)) ||
        item.faiblesses.some(f => f.toLowerCase().includes(query)) ||
        this.searchInTechniques(item.noms_et_techniques, query);

      return matchCat && matchQuery;
    });

    this.updateCount();
    this.render(this.currentData);
  }

  searchInTechniques(techObj, query) {
    if (!techObj || !query) return false;
    for (const key in techObj) {
      const list = techObj[key];
      if (Array.isArray(list)) {
        if (list.some(t => 
          (t.nom && t.nom.toLowerCase().includes(query)) ||
          (t.trad && t.trad.toLowerCase().includes(query)) ||
          (t.desc && t.desc.toLowerCase().includes(query))
        )) return true;
      }
    }
    return false;
  }

  render(data) {
    if (!this.container) return;
    this.container.innerHTML = '';

    if (data.length === 0) {
      this.container.innerHTML = `
        <div class="col-span-full p-8 text-center bg-slate-900/60 rounded-3xl border border-slate-800 text-slate-400 space-y-2">
          <span class="text-4xl">🔍</span>
          <h4 class="text-lg font-bold font-hud text-white">Aucune discipline martiale trouvée</h4>
          <p class="text-xs">Essayez un autre mot-clé ou réinitialisez les filtres de catégorie.</p>
        </div>
      `;
      return;
    }

    data.forEach(item => {
      const card = document.createElement('article');
      card.className = 'p-5 sm:p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 hover:shadow-cyan-500/10 hover:-translate-y-1';

      // Calcul du nombre total de techniques cataloguées pour cette discipline
      let totalTechs = 0;
      if (item.noms_et_techniques) {
        for (const k in item.noms_et_techniques) {
          totalTechs += (item.noms_et_techniques[k] || []).length;
        }
      }

      card.innerHTML = `
        <div class="space-y-3">
          <!-- En-tête de carte -->
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-2xl">${item.drapeau}</span>
                <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">${item.categorie}</span>
              </div>
              <h3 class="text-xl font-bold font-hud text-white mt-1">${item.nom}</h3>
              <p class="text-xs text-slate-400 font-mono italic">${item.nom_original}</p>
            </div>
            <span class="text-xs font-mono px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400 text-right whitespace-nowrap">
              ${item.origine_pays}
            </span>
          </div>

          <!-- Résumé historique -->
          <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed">
            ${item.historique}
          </p>

          <!-- Badges points forts et nombre de techniques -->
          <div class="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-[11px] font-mono">
            <span class="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
              ✓ ${item.points_forts.length} Points Forts
            </span>
            <span class="px-2 py-0.5 rounded bg-rose-950/60 text-rose-400 border border-rose-500/30">
              ⚠ ${item.faiblesses.length} Faiblesses
            </span>
            <span class="px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
              ⚡ ${totalTechs} Techniques Listées
            </span>
          </div>
        </div>

        <!-- Bouton d'ouverture détaillée -->
        <button data-id="${item.id}" class="open-detail-btn w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-slate-950 font-bold font-hud text-xs transition flex items-center justify-center gap-2 shadow-lg active:scale-98">
          <span>📖</span> Consulter le Dossier Complet & Techniques →
        </button>
      `;

      this.container.appendChild(card);
    });

    this.container.querySelectorAll('.open-detail-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.openModal(id);
      });
    });
  }

  openModal(id) {
    const item = ENCYCLOPEDIE_DATA.find(d => d.id === id);
    if (!item || !this.modal) return;

    document.getElementById('modalFlag').innerText = item.drapeau;
    document.getElementById('modalCategory').innerText = item.categorie;
    document.getElementById('modalTitle').innerText = item.nom;
    document.getElementById('modalOriginalTitle').innerText = `${item.nom_original} • Origine : ${item.origine_pays} (${item.siecle_apparition})`;

    // Maîtres et fondateurs
    const mastersEl = document.getElementById('modalMasters');
    if (mastersEl) {
      mastersEl.innerText = item.fondateurs_maitres.join(' • ');
    }

    // Historique complet
    document.getElementById('modalHistoryText').innerText = item.historique;

    // Philosophie et biomécanique
    document.getElementById('modalPhilosophyText').innerText = item.philosophie_et_biomecanique;

    // Points forts
    const strengthsUl = document.getElementById('modalStrengthsUl');
    strengthsUl.innerHTML = '';
    item.points_forts.forEach(p => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-slate-300';
      li.innerHTML = `<span class="text-emerald-400 font-bold shrink-0">✓</span> <span>${p}</span>`;
      strengthsUl.appendChild(li);
    });

    // Faiblesses
    const weaknessesUl = document.getElementById('modalWeaknessesUl');
    weaknessesUl.innerHTML = '';
    item.faiblesses.forEach(f => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-slate-300';
      li.innerHTML = `<span class="text-rose-400 font-bold shrink-0">⚠</span> <span>${f}</span>`;
      weaknessesUl.appendChild(li);
    });

    // Nomenclature et techniques exhaustives
    const techsContainer = document.getElementById('modalTechniquesContainer');
    techsContainer.innerHTML = '';

    for (const categoryName in item.noms_et_techniques) {
      const techList = item.noms_et_techniques[categoryName];
      if (!Array.isArray(techList) || techList.length === 0) continue;

      const catBox = document.createElement('div');
      catBox.className = 'p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2';

      // Titre convivial de la sous-famille
      const friendlyTitle = categoryName
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      catBox.innerHTML = `
        <h5 class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
          <span>🥋</span> ${friendlyTitle} (${techList.length})
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          ${techList.map(t => `
            <div class="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-0.5">
              <div class="flex items-center justify-between gap-2">
                <span class="font-bold text-xs text-white font-hud">${t.nom}</span>
                ${t.trad ? `<span class="text-[10px] font-mono text-cyan-300/80 italic">${t.trad}</span>` : ''}
              </div>
              <p class="text-[11px] text-slate-400 leading-snug">${t.desc || ''}</p>
            </div>
          `).join('')}
        </div>
      `;

      techsContainer.appendChild(catBox);
    }

    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
}

// Initialisation dès chargement
window.addEventListener('DOMContentLoaded', () => {
  window.__grandEncyclopedia = new GrandEncyclopediaApp();
});
