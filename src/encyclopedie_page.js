/**
 * Contrôleur JavaScript de la Grande Encyclopédie des Sports de Combat & Arts Martiaux
 * Inclut l'affichage des images réelles issues d'Internet et des schémas biomécaniques pour :
 * - Frappes Fondamentales
 * - Clinch Et Projections
 * - Défenses Et Blocages
 */

import { ENCYCLOPEDIE_DATA } from './encyclopedie_dataset.js';
import { TechniqueVisualEngine } from './technique_visuals.js';

export class GrandEncyclopediaApp {
  constructor() {
    this.container = document.getElementById('encycloListContainer');
    this.countBadge = document.getElementById('disciplinesCountBadge');
    this.searchInput = document.getElementById('globalSearchInput');
    this.categorySelect = document.getElementById('categoryFilterSelect');
    this.modal = document.getElementById('disciplineDetailModal');

    // Éléments de la modale d'illustration visuelle
    this.techModal = document.getElementById('techniqueVisualModal');
    this.techFamilyBadge = document.getElementById('techFamilyBadge');
    this.techDisciplineBadge = document.getElementById('techDisciplineBadge');
    this.techVisualTitle = document.getElementById('techVisualTitle');
    this.techVisualTrad = document.getElementById('techVisualTrad');
    this.techVisualDesc = document.getElementById('techVisualDesc');
    this.techSvgContainer = document.getElementById('techSvgContainer');
    this.techRealImgContainer = document.getElementById('techRealImgContainer');
    this.techRealImgEl = document.getElementById('techRealImgEl');
    this.techRealImgCaption = document.getElementById('techRealImgCaption');
    this.tabVectorSvgBtn = document.getElementById('tabVectorSvgBtn');
    this.tabRealImgBtn = document.getElementById('tabRealImgBtn');

    this.currentData = [...ENCYCLOPEDIE_DATA];
    this.currentDiscipline = null;
    this.currentTechVisualData = null;

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

    // Fermeture de la modale principale
    document.getElementById('closeDisciplineModalBtn')?.addEventListener('click', () => {
      this.closeModal();
    });

    // Fermeture de la modale d'illustration
    document.getElementById('closeTechVisualBtn')?.addEventListener('click', () => {
      this.closeTechModal();
    });
    document.getElementById('closeTechVisualBottomBtn')?.addEventListener('click', () => {
      this.closeTechModal();
    });

    // Onglets Schéma Vectoriel / Image Réelle
    this.tabRealImgBtn?.addEventListener('click', () => {
      this.switchVisualTab('real');
    });
    this.tabVectorSvgBtn?.addEventListener('click', () => {
      this.switchVisualTab('svg');
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.techModal && !this.techModal.classList.contains('hidden')) {
          this.closeTechModal();
        } else {
          this.closeModal();
        }
      }
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

      let totalTechs = 0;
      if (item.noms_et_techniques) {
        for (const k in item.noms_et_techniques) {
          totalTechs += (item.noms_et_techniques[k] || []).length;
        }
      }

      card.innerHTML = `
        <div class="space-y-3">
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

          <p class="text-xs text-slate-300 line-clamp-3 leading-relaxed">
            ${item.historique}
          </p>

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

        <button data-id="${item.id}" class="open-detail-btn w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-slate-950 font-bold font-hud text-xs transition flex items-center justify-center gap-2 shadow-lg active:scale-98">
          <span>📖</span> Consulter le Dossier & Techniques Illustrées →
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

    this.currentDiscipline = item;

    document.getElementById('modalFlag').innerText = item.drapeau;
    document.getElementById('modalCategory').innerText = item.categorie;
    document.getElementById('modalTitle').innerText = item.nom;
    document.getElementById('modalOriginalTitle').innerText = `${item.nom_original} • Origine : ${item.origine_pays} (${item.siecle_apparition})`;

    const mastersEl = document.getElementById('modalMasters');
    if (mastersEl) {
      mastersEl.innerText = item.fondateurs_maitres.join(' • ');
    }

    document.getElementById('modalHistoryText').innerText = item.historique;
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

    // Nomenclature et techniques exhaustives avec vignettes & cliquables
    const techsContainer = document.getElementById('modalTechniquesContainer');
    techsContainer.innerHTML = '';

    for (const categoryName in item.noms_et_techniques) {
      const techList = item.noms_et_techniques[categoryName];
      if (!Array.isArray(techList) || techList.length === 0) continue;

      const catBox = document.createElement('div');
      catBox.className = 'p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5';

      const friendlyTitle = categoryName
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      catBox.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <h5 class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
            <span>🥋</span> ${friendlyTitle} (${techList.length})
          </h5>
          <span class="text-[10px] font-mono text-cyan-300/80 font-semibold flex items-center gap-1">
            <span>📷</span> Cliquez pour afficher l'image réelle
          </span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          ${techList.map((t, idx) => {
            const family = TechniqueVisualEngine.detectFamily(categoryName, t);
            const webImg = TechniqueVisualEngine.getRealWebImage(categoryName, t);

            let badgeColor = 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
            let badgeLabel = 'Frappes Fondamentales';
            let badgeIcon = '🥊';

            if (family === 'clinch_projection') {
              badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
              badgeLabel = 'Clinch & Projections';
              badgeIcon = '🤼';
            } else if (family === 'defense_blocage') {
              badgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
              badgeLabel = 'Défenses & Blocages';
              badgeIcon = '🛡️';
            }

            return `
              <button type="button" data-cat="${categoryName}" data-idx="${idx}" class="tech-card-btn text-left p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 hover:bg-slate-850 transition-all duration-200 space-y-2 shadow group cursor-pointer active:scale-[0.98]">
                <div class="flex items-start justify-between gap-2">
                  <div class="space-y-0.5">
                    <span class="font-bold text-xs text-white font-hud group-hover:text-cyan-300 transition block">${t.nom}</span>
                    ${t.trad ? `<span class="text-[10px] font-mono text-cyan-300/80 italic block">${t.trad}</span>` : ''}
                  </div>
                  <span class="text-[9px] font-mono px-2 py-0.5 rounded border ${badgeColor} font-bold flex items-center gap-1 shrink-0">
                    <span>${badgeIcon}</span> <span>${badgeLabel}</span>
                  </span>
                </div>

                <!-- Aperçu visuel miniature -->
                <div class="flex items-center gap-2.5 p-1.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <img src="${webImg.path}" alt="${t.nom}" class="w-14 h-12 object-cover rounded-lg border border-slate-700/80 shrink-0 group-hover:scale-105 transition" loading="lazy">
                  <div class="flex-1 min-w-0">
                    <p class="text-[11px] text-slate-300 leading-snug line-clamp-2">${t.desc || ''}</p>
                    <span class="text-[9px] font-mono text-slate-500 truncate block mt-0.5">Source : ${webImg.source.split('/')[0]}</span>
                  </div>
                </div>

                <div class="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-cyan-400 group-hover:text-cyan-300">
                  <span class="flex items-center gap-1 font-bold"><span>📷</span> Voir l'image grand écran & biomécanique</span>
                  <span class="transform group-hover:translate-x-1 transition font-bold">→</span>
                </div>
              </button>
            `;
          }).join('')}
        </div>
      `;

      techsContainer.appendChild(catBox);
    }

    // Écouteurs de clic sur chaque élément de technique pour ouvrir l'image
    techsContainer.querySelectorAll('.tech-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const techList = item.noms_et_techniques[cat];
        if (techList && techList[idx]) {
          this.openTechniqueVisual(cat, techList[idx], item);
        }
      });
    });

    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  openTechniqueVisual(categoryName, tech, discipline) {
    if (!this.techModal || !tech) return;

    const family = TechniqueVisualEngine.detectFamily(categoryName, tech);
    const webImg = TechniqueVisualEngine.getRealWebImage(categoryName, tech);
    this.currentTechVisualData = { categoryName, tech, discipline, family, webImg };

    // Badges de famille
    if (family === 'clinch_projection') {
      this.techFamilyBadge.className = 'text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40';
      this.techFamilyBadge.innerText = '🤼 CLINCH ET PROJECTIONS';
    } else if (family === 'defense_blocage') {
      this.techFamilyBadge.className = 'text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
      this.techFamilyBadge.innerText = '🛡️ DÉFENSES ET BLOCAGES';
    } else {
      this.techFamilyBadge.className = 'text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40';
      this.techFamilyBadge.innerText = '🥊 FRAPPES FONDAMENTALES';
    }

    this.techDisciplineBadge.innerText = `${discipline.nom} (${discipline.origine_pays})`;
    this.techVisualTitle.innerText = tech.nom;
    this.techVisualTrad.innerText = tech.trad ? `Traduction : « ${tech.trad} »` : '';
    this.techVisualDesc.innerText = tech.desc || 'Mouvement martial fondamental répertorié pour cette discipline.';

    // Décomposition en 3 phases selon la famille
    const phase1 = document.getElementById('techPhase1Text');
    const phase2 = document.getElementById('techPhase2Text');
    const phase3 = document.getElementById('techPhase3Text');
    const targets = document.getElementById('techTargetsText');
    const vigilance = document.getElementById('techVigilanceText');

    if (family === 'clinch_projection') {
      if (phase1) phase1.innerText = "Cadrage, fermeture de la distance et prise de grip (saisie de nuque, kimono ou contrôle sous les aisselles).";
      if (phase2) phase2.innerText = "Abaissement du centre de gravité sous celui de l'adversaire ou cassure posturale axiale.";
      if (phase3) phase3.innerText = "Poussée explosive d'épaule ou traction en bascule avec levier au sol terminal.";
      if (targets) targets.innerText = "Centre de gravité, nuque, creux poplités, hanches ou articulations des bras/jambes.";
      if (vigilance) vigilance.innerText = "Garder la tête collée au torse pour interdire les contre-guillotines et les coups de genou.";
    } else if (family === 'defense_blocage') {
      if (phase1) phase1.innerText = "Lecture anticipatoire de la trajectoire adverse et ancrage équilibré sur les appuis.";
      if (phase2) phase2.innerText = "Décalage d'axe en U, montée de bouclier osseux (tibia/avant-bras) ou parade déviatrice courte.";
      if (phase3) phase3.innerText = "Absorption de l'onde de force ou redirection complète laissant l'adversaire dans le vide.";
      if (targets) targets.innerText = "Lignes d'attaque directes, circulaires ou plongeantes visant la tête et le foie.";
      if (vigilance) vigilance.innerText = "Ne jamais fermer les yeux à l'impact et enchaîner immédiatement la riposte en sortie d'esquive.";
    } else {
      if (phase1) phase1.innerText = "Impulsion plantaire au sol (Ground Reaction Force) et armement élastique de la hanche.";
      if (phase2) phase2.innerText = "Transmission séquentielle de la torsion pelvienne vers la ceinture scapulaire.";
      if (phase3) phase3.innerText = "Extension terminale du membre percutant avec verrouillage articulaire à l'impact.";
      if (targets) targets.innerText = "Menton, mâchoire, plexus solaire, foie, tempe ou cuisse (nerf sciatique).";
      if (vigilance) vigilance.innerText = "Maintenir le poing opposé collé à la mâchoire et ramener le membre immédiatement après impact.";
    }

    // Chargement de l'image réelle issue du web
    if (this.techRealImgEl) {
      this.techRealImgEl.src = webImg.path;
      this.techRealImgCaption.innerHTML = `
        <span class="text-cyan-300 font-bold">${webImg.title}</span><br>
        <span class="text-slate-500">Source : ${webImg.source}</span>
      `;
    }

    // Rendu du SVG Vectoriel HUD
    if (this.techSvgContainer) {
      this.techSvgContainer.innerHTML = TechniqueVisualEngine.renderSVG(family, tech);
    }

    // Configuration des boutons d'onglets (Image Réelle par défaut)
    if (this.tabRealImgBtn) {
      this.tabRealImgBtn.classList.remove('hidden');
    }

    // Basculer sur l'image réelle par défaut
    this.switchVisualTab('real');

    this.techModal.classList.remove('hidden');
  }

  switchVisualTab(type) {
    if (type === 'svg') {
      this.techRealImgContainer.classList.add('hidden');
      this.techSvgContainer.classList.remove('hidden');
      if (this.tabVectorSvgBtn) {
        this.tabVectorSvgBtn.className = 'px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold flex items-center gap-1.5';
      }
      if (this.tabRealImgBtn) {
        this.tabRealImgBtn.className = 'px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5';
      }
    } else {
      // 'real' par défaut
      this.techSvgContainer.classList.add('hidden');
      this.techRealImgContainer.classList.remove('hidden');
      if (this.tabRealImgBtn) {
        this.tabRealImgBtn.className = 'px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm shadow-cyan-500/20';
      }
      if (this.tabVectorSvgBtn) {
        this.tabVectorSvgBtn.className = 'px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5';
      }
    }
  }

  closeTechModal() {
    if (this.techModal) {
      this.techModal.classList.add('hidden');
    }
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
