/**
 * Fight Timer & Coach Vocal Interactif
 * Web Audio API (cloche laiton & cliquette), SpeechSynthesis et Screen WakeLock
 */

export class FightTimer {
  constructor() {
    this.running = false;
    this.interval = null;
    this.totalSeconds = 180;
    this.secondsLeft = 180;
    this.currentRound = 1;
    this.totalRounds = 3;
    this.restSeconds = 60;
    this.isRest = false;

    this.voiceCoachEnabled = true;
    this.voiceCoachMode = 'combos';
    this.voiceInterval = null;

    this.wakeLock = null;

    this.activeCombosList = [
      'Direct avant, Cross arrière, Esquive, Cross',
      'Jab, Jab, Low kick intérieur',
      'Crochet au foie, Uppercut au menton',
      'Teep frontal, Feinte, Direct du droit'
    ];

    this.calloutTargets = [
      'FOIE !', 'MENTON !', 'LOW KICK !', 'TÊTE !', 'CORPS !', 'ESQUIVE ROTATIVE !'
    ];
  }

  async requestWakeLock() {
    if ('wakeLock' in navigator) {
      try {
        this.wakeLock = await navigator.wakeLock.request('screen');
      } catch (e) {
        console.warn('WakeLock refusé:', e);
      }
    }
  }

  releaseWakeLock() {
    if (this.wakeLock) {
      this.wakeLock.release().then(() => { this.wakeLock = null; });
    }
  }

  playRingBell() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;

      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now); // E5
      gain1.gain.setValueAtTime(0.7, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1244.5, now);
      gain2.gain.setValueAtTime(0.4, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.5);
      osc2.stop(now + 2.5);
    } catch (e) {}
  }

  playWoodClapper() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      for (let i = 0; i < 3; i++) {
        const now = audioCtx.currentTime + i * 0.15;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(400, now);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch (e) {}
  }

  speak(text) {
    if (!this.voiceCoachEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'fr-FR';
    u.rate = 1.1;
    u.pitch = 1.0;
    window.speechSynthesis.speak(u);

    const banner = document.getElementById('vocalOrderBanner');
    if (banner) banner.innerText = `🗣️ Coach : "${text}"`;
  }

  toggle() {
    if (this.running) {
      this.pause();
    } else {
      this.start();
    }
  }

  start() {
    this.running = true;
    this.requestWakeLock();
    const btn = document.getElementById('timerToggleBtn');
    if (btn) {
      btn.innerText = '⏸ PAUSE';
      btn.classList.remove('bg-emerald-600', 'hover:bg-emerald-500');
      btn.classList.add('bg-amber-600', 'hover:bg-amber-500');
    }

    this.playRingBell();
    this.speak(this.isRest ? 'Repos ! Récupérez.' : `Round ${this.currentRound} ! Combattez !`);

    this.interval = setInterval(() => {
      this.secondsLeft--;
      this.updateDisplay();

      if (this.secondsLeft === 10 && !this.isRest) {
        this.playWoodClapper();
        this.speak('Dix secondes ! Accélérez !');
      }

      if (this.secondsLeft <= 0) {
        this.playRingBell();
        if (!this.isRest) {
          if (this.currentRound >= this.totalRounds) {
            this.pause();
            this.speak('Combat terminé ! Bravo.');
            const status = document.getElementById('timerStatusText');
            if (status) status.innerText = 'Combat terminé !';
            return;
          } else {
            this.isRest = true;
            this.secondsLeft = this.restSeconds;
            this.speak('Fin du round. Repos.');
          }
        } else {
          this.isRest = false;
          this.currentRound++;
          this.secondsLeft = this.totalSeconds;
          this.speak(`Round ${this.currentRound} ! C est parti !`);
        }
      }
    }, 1000);

    this.startVoiceLoop();
  }

  pause() {
    this.running = false;
    this.releaseWakeLock();
    clearInterval(this.interval);
    clearInterval(this.voiceInterval);
    const btn = document.getElementById('timerToggleBtn');
    if (btn) {
      btn.innerText = '▶ REPRENDRE';
      btn.classList.remove('bg-amber-600', 'hover:bg-amber-500');
      btn.classList.add('bg-emerald-600', 'hover:bg-emerald-500');
    }
  }

  reset() {
    this.pause();
    this.currentRound = 1;
    this.isRest = false;
    this.secondsLeft = this.totalSeconds;
    this.updateDisplay();
    const btn = document.getElementById('timerToggleBtn');
    if (btn) btn.innerText = '▶ DÉMARRER';
    const status = document.getElementById('timerStatusText');
    if (status) status.innerText = 'Prêt pour le combat';
  }

  setPreset(preset) {
    this.pause();
    if (preset === 'boxe') {
      this.totalSeconds = 180; this.restSeconds = 60; this.totalRounds = 3;
    } else if (preset === 'muay') {
      this.totalSeconds = 180; this.restSeconds = 60; this.totalRounds = 5;
    } else if (preset === 'tabata') {
      this.totalSeconds = 20; this.restSeconds = 10; this.totalRounds = 8;
    }
    this.reset();
  }

  startVoiceLoop() {
    clearInterval(this.voiceInterval);
    if (!this.voiceCoachEnabled) return;

    this.voiceInterval = setInterval(() => {
      if (!this.running || this.isRest) return;
      if (this.voiceCoachMode === 'combos') {
        const combo = this.activeCombosList[Math.floor(Math.random() * this.activeCombosList.length)];
        this.speak(combo);
      } else {
        const target = this.calloutTargets[Math.floor(Math.random() * this.calloutTargets.length)];
        this.speak(target);
      }
    }, 5000);
  }

  setVoiceMode(mode) {
    this.voiceCoachMode = mode;
    const btnCombos = document.getElementById('voiceModeCombos');
    const btnCallout = document.getElementById('voiceModeCallout');
    if (btnCombos) btnCombos.className = mode === 'combos' ? 'flex-1 py-2 rounded-lg bg-cyan-600 text-white font-bold text-xs' : 'flex-1 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs';
    if (btnCallout) btnCallout.className = mode === 'callout' ? 'flex-1 py-2 rounded-lg bg-cyan-600 text-white font-bold text-xs' : 'flex-1 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs';
  }

  loadCombos(combosList) {
    this.activeCombosList = combosList;
    this.setVoiceMode('combos');
    this.speak('Combinaisons de légende chargées. Prêt pour le combat !');
  }

  updateDisplay() {
    const m = Math.floor(this.secondsLeft / 60);
    const s = this.secondsLeft % 60;
    const clock = document.getElementById('timerClock');
    const roundEl = document.getElementById('roundCounter');
    if (clock) clock.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    if (roundEl) roundEl.innerText = `Round : ${this.currentRound} / ${this.totalRounds}`;

    const box = document.getElementById('timerDisplayBox');
    const badge = document.getElementById('timerPhaseBadge');

    if (!box || !badge) return;

    if (this.isRest) {
      badge.innerText = 'REPOS EN COURS';
      badge.className = 'inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-rose-500/20 text-rose-400 font-mono text-xs sm:text-sm font-bold border border-rose-500/30';
      box.style.borderColor = 'rgba(244, 63, 94, 0.4)';
      box.classList.remove('timer-warning-pulse');
    } else {
      badge.innerText = `ROUND ${this.currentRound} EN COURS`;
      badge.className = 'inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs sm:text-sm font-bold border border-emerald-500/30';
      box.style.borderColor = 'rgba(16, 185, 129, 0.4)';

      if (this.secondsLeft <= 10) {
        box.classList.add('timer-warning-pulse');
        badge.innerText = '10 SECONDES RESTANTES !';
        badge.className = 'inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/30 text-amber-300 font-mono text-xs sm:text-sm font-bold border border-amber-500/50';
      } else {
        box.classList.remove('timer-warning-pulse');
      }
    }
  }
}
