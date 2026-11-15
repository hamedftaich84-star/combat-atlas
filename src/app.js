/**
 * Application Principale Atlas Biomécanique & Tactique (Point d'Entrée JavaScript)
 * Architecture modulaire ES Modules pour PC et Mobile
 */

import { BiomechanicalEngine3D } from './engine3d.js';
import { FightTimer } from './timer.js';
import { TacticalDuelSimulator } from './duel.js';
import { EncyclopediaManager } from './encyclopedia.js';
import { VirtualDojo } from './dojo.js';
import { FightersManager } from './fighters.js';

class CombatAtlasApp {
  constructor() {
    this.currentTab = 'lab3d';
    this.sections = ['lab3d', 'duel', 'avatars', 'kickboxing', 'encyclo', 'tactique', 'timer', 'dojo', 'fighters'];
    
    this.initAudioUnlock();
    this.initFullscreen();
    this.initKeyboardShortcuts();
    this.initNavigation();

    // Initialisation des modules JavaScript
    this.engine3d = new BiomechanicalEngine3D('canvas3d');
    this.timer = new FightTimer();
    this.duel = new TacticalDuelSimulator('duelSelectA', 'duelSelectB');
    this.encyclopedia = new EncyclopediaManager('encycloGrid');
    this.dojo = new VirtualDojo('dojoCard', 'dojoXpBadge');

    this.fighters = new FightersManager('fightersGrid', (fighter) => {
      this.timer.loadCombos(fighter.combos);
      this.switchTab('timer');
    });

    this.bindUI();
  }

  initNavigation() {
    // Boutons navigation desktop
    this.sections.forEach(s => {
      const btn = document.getElementById('nav-' + s);
      if (btn) {
        btn.addEventListener('click', () => this.switchTab(s));
      }
      const mobBtn = document.getElementById('mob-' + s);
      if (mobBtn) {
        mobBtn.addEventListener('click', () => this.switchTab(s));
      }
    });
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    this.sections.forEach(s => {
      const el = document.getElementById('section-' + s);
      const btnDesktop = document.getElementById('nav-' + s);
      const btnMobile = document.getElementById('mob-' + s);

      if (s === tabId) {
        if (el) el.classList.remove('hidden');
        if (btnDesktop) {
          btnDesktop.classList.add('tab-btn-active');
          btnDesktop.classList.remove('text-slate-400');
        }
        if (btnMobile) {
          btnMobile.classList.add('mob-tab-active');
          btnMobile.classList.remove('text-slate-400');
        }
      } else {
        if (el) el.classList.add('hidden');
        if (btnDesktop) {
          btnDesktop.classList.remove('tab-btn-active');
          btnDesktop.classList.add('text-slate-400');
        }
        if (btnMobile) {
          btnMobile.classList.remove('mob-tab-active');
          btnMobile.classList.add('text-slate-400');
        }
      }
    });

    if (tabId === 'lab3d' && this.engine3d) {
      setTimeout(() => this.engine3d.resize(), 50);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  initAudioUnlock() {
    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        unlocked = true;
      } catch (e) {}
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('click', unlock);
    };
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('click', unlock, { passive: true });
  }

  initFullscreen() {
    const fsBtn = document.getElementById('fullscreenBtn');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
          const icon = document.getElementById('fullscreenIcon');
          if (icon) icon.innerText = '⤓';
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
            const icon = document.getElementById('fullscreenIcon');
            if (icon) icon.innerText = '⛶';
          }
        }
      });
    }
  }

  initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.encyclopedia.closeModal();
        return;
      }
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        this.engine3d.togglePlay();
      } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6'].includes(e.code)) {
        const idx = parseInt(e.code.replace('Digit', ''), 10) - 1;
        const vals = [0, 20, 40, 60, 80, 100];
        this.engine3d.setProgress(vals[idx]);
        const scrubber = document.getElementById('timeScrubber');
        if (scrubber) scrubber.value = vals[idx];
      } else if (e.key.toLowerCase() === 'c') {
        const cams = ['iso', 'zenith', 'front', 'back', 'left', 'right'];
        const curBtn = document.querySelector('.cam-btn-active');
        const curIdx = cams.indexOf(curBtn ? curBtn.id.replace('cam-', '') : 'iso');
        const nextCam = cams[(curIdx + 1) % cams.length];
        this.engine3d.setCameraView(nextCam);
      } else if (e.key.toLowerCase() === 't') {
        this.timer.toggle();
      } else if (e.key.toLowerCase() === 'r') {
        this.engine3d.reset();
      }
    });
  }

  bindUI() {
    // Sélecteur de technique 3D
    const techSelect = document.getElementById('techSelect');
    if (techSelect) {
      techSelect.addEventListener('change', (e) => this.engine3d.setTechnique(e.target.value));
    }

    // Caméras prédéfinies
    ['zenith', 'back', 'left', 'right', 'front', 'iso'].forEach(view => {
      document.getElementById('cam-' + view)?.addEventListener('click', () => {
        this.engine3d.setCameraView(view);
      });
    });

    // Curseur temporel
    const scrubber = document.getElementById('timeScrubber');
    if (scrubber) {
      scrubber.addEventListener('input', (e) => this.engine3d.setProgress(e.target.value));
    }

    // Boutons phases 0% à 100%
    [0, 20, 40, 60, 80, 100].forEach(p => {
      document.getElementById('phase-btn-' + p)?.addEventListener('click', () => {
        this.engine3d.setProgress(p);
        if (scrubber) scrubber.value = p;
      });
    });

    // Lecture & reset 3D
    document.getElementById('playBtn')?.addEventListener('click', () => this.engine3d.togglePlay());
    document.getElementById('resetAnimBtn')?.addEventListener('click', () => this.engine3d.reset());

    // Vitesse 3D
    document.getElementById('speed-025')?.addEventListener('click', () => this.engine3d.setSpeed(0.25));
    document.getElementById('speed-05')?.addEventListener('click', () => this.engine3d.setSpeed(0.5));
    document.getElementById('speed-10')?.addEventListener('click', () => this.engine3d.setSpeed(1.0));

    // Calques HUD
    ['skeleton', 'forces', 'polygon', 'com'].forEach(l => {
      document.getElementById('layer-' + l)?.addEventListener('change', (e) => {
        this.engine3d.toggleLayer(l, e.target.checked);
      });
    });

    // Timer contrôles
    document.getElementById('timerToggleBtn')?.addEventListener('click', () => this.timer.toggle());
    document.getElementById('resetTimerBtn')?.addEventListener('click', () => this.timer.reset());

    document.getElementById('preset-boxe')?.addEventListener('click', () => this.timer.setPreset('boxe'));
    document.getElementById('preset-muay')?.addEventListener('click', () => this.timer.setPreset('muay'));
    document.getElementById('preset-tabata')?.addEventListener('click', () => this.timer.setPreset('tabata'));

    document.getElementById('voiceCoachToggle')?.addEventListener('change', (e) => {
      this.timer.voiceCoachEnabled = e.target.checked;
      if (!e.target.checked && 'speechSynthesis' in window) window.speechSynthesis.cancel();
      else if (this.timer.running) this.timer.startVoiceLoop();
    });

    document.getElementById('voiceModeCombos')?.addEventListener('click', () => this.timer.setVoiceMode('combos'));
    document.getElementById('voiceModeCallout')?.addEventListener('click', () => this.timer.setVoiceMode('callout'));

    // Modale fermeture
    document.getElementById('closeModalBtn')?.addEventListener('click', () => this.encyclopedia.closeModal());
  }
}

// Lancement automatique dès le chargement du DOM
window.addEventListener('DOMContentLoaded', () => {
  window.__combatAtlas = new CombatAtlasApp();
});
