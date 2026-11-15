/**
 * Moteur Cinématique et Biomécanique 3D Haute Définition
 * Support complet PC (Souris & Raccourcis) et Téléphone Mobile (Multi-Touch & Retina)
 */

export class BiomechanicalEngine3D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.currentTech = 'cross';
    this.isPlaying = true;
    this.animProgress = 80;
    this.animSpeed = 1.0;
    this.lastTimestamp = 0;

    this.hudLayers = {
      skeleton: true,
      forces: true,
      polygon: true,
      com: true,
      angles: true
    };

    // Caméra sphérique 3D
    this.camTheta = 45 * Math.PI / 180;
    this.camPhi = 22 * Math.PI / 180;
    this.camDistance = 3.8;

    this.initEvents();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => this.resize());

    requestAnimationFrame((ts) => this.loop(ts));
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
    }
  }

  initEvents() {
    // Événements Souris (PC)
    let isMouseDragging = false;
    let mouseStartX = 0, mouseStartY = 0;

    this.canvas.addEventListener('mousedown', (e) => {
      isMouseDragging = true;
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
    });

    window.addEventListener('mouseup', () => { isMouseDragging = false; });

    window.addEventListener('mousemove', (e) => {
      if (!isMouseDragging) return;
      const dx = e.clientX - mouseStartX;
      const dy = e.clientY - mouseStartY;
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;

      this.camTheta -= dx * 0.008;
      this.camPhi += dy * 0.008;
      this.camPhi = Math.max(-0.2, Math.min(Math.PI / 2 - 0.05, this.camPhi));
      this.updateCameraBadge();
    });

    // Événements Tactiles Multi-Touch (Smartphone / Tablette)
    let touchStartX = 0, touchStartY = 0;
    let touchInitialDistance = 0;

    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchInitialDistance = Math.hypot(dx, dy);
      }
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault(); // Bloquer le scroll lors de l'interaction 3D
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - touchStartX;
        const dy = e.touches[0].clientY - touchStartY;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;

        this.camTheta -= dx * 0.01;
        this.camPhi += dy * 0.01;
        this.camPhi = Math.max(-0.2, Math.min(Math.PI / 2 - 0.05, this.camPhi));
        this.updateCameraBadge();
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const diff = dist - touchInitialDistance;
        touchInitialDistance = dist;

        this.camDistance = Math.max(2.0, Math.min(6.5, this.camDistance - diff * 0.01));
      }
    }, { passive: false });
  }

  setCameraView(view) {
    document.querySelectorAll('.cam-btn').forEach(b => b.classList.remove('cam-btn-active'));
    const btn = document.getElementById('cam-' + view);
    if (btn) btn.classList.add('cam-btn-active');

    switch(view) {
      case 'zenith': this.camTheta = 90 * Math.PI / 180; this.camPhi = 85 * Math.PI / 180; break;
      case 'back': this.camTheta = 270 * Math.PI / 180; this.camPhi = 15 * Math.PI / 180; break;
      case 'left': this.camTheta = 180 * Math.PI / 180; this.camPhi = 15 * Math.PI / 180; break;
      case 'right': this.camTheta = 0 * Math.PI / 180; this.camPhi = 15 * Math.PI / 180; break;
      case 'front': this.camTheta = 90 * Math.PI / 180; this.camPhi = 10 * Math.PI / 180; break;
      case 'iso': this.camTheta = 45 * Math.PI / 180; this.camPhi = 22 * Math.PI / 180; break;
    }
    this.updateCameraBadge();
  }

  updateCameraBadge() {
    const azDeg = Math.round((this.camTheta * 180 / Math.PI) % 360);
    const elDeg = Math.round(this.camPhi * 180 / Math.PI);
    const badge = document.getElementById('camBadge');
    if (badge) badge.innerText = `CAMÉRA : ORBITE 3D (Az ${azDeg}° | El ${elDeg}°)`;
  }

  toggleLayer(layer, value) {
    this.hudLayers[layer] = value;
  }

  setTechnique(techKey) {
    this.currentTech = techKey;
    this.animProgress = 0;
    this.isPlaying = true;
    const playBtn = document.getElementById('playBtn');
    if (playBtn) playBtn.innerText = '⏸ PAUSE';
    this.updatePhaseUI();
  }

  setProgress(val) {
    this.animProgress = Math.max(0, Math.min(100, parseFloat(val)));
    this.updatePhaseUI();
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    const playBtn = document.getElementById('playBtn');
    if (playBtn) playBtn.innerText = this.isPlaying ? '⏸ PAUSE' : '▶ LECTURE CONTINUE';
  }

  reset() {
    this.animProgress = 0;
    const scrubber = document.getElementById('timeScrubber');
    if (scrubber) scrubber.value = 0;
    this.updatePhaseUI();
  }

  setSpeed(s) {
    this.animSpeed = s;
    document.querySelectorAll('.speed-btn').forEach(b => {
      b.classList.remove('bg-cyan-600', 'font-bold');
      b.classList.add('bg-slate-800');
    });
    if (window.event && window.event.target) {
      window.event.target.classList.remove('bg-slate-800');
      window.event.target.classList.add('bg-cyan-600', 'font-bold');
    }
  }

  updatePhaseUI() {
    const pct = this.animProgress;
    const pctEl = document.getElementById('timePct');
    if (pctEl) pctEl.innerText = `${Math.round(pct)}%`;

    const phases = [
      { max: 15, name: '1. Position de Garde & Équilibre', exp: 'Posture de base, répartition 50/50, garde haute préservant le menton.' },
      { max: 35, name: '2. Poussée Plantaire au Sol (GRF)', exp: 'Impulsion explosive du pied arrière (Ground Reaction Force) amorçant la chaîne cinétique.' },
      { max: 55, name: '3. Torsion Pelvienne & Tronc', exp: 'Rotation du bassin relayée par les abdominaux obliques vers la ceinture scapulaire.' },
      { max: 75, name: '4. Déploiement Scapulaire & Bras', exp: 'Extension balistique du coude avec pronation de l avant-bras.' },
      { max: 90, name: '5. Impact & Raideur de Cocontraction', exp: 'Synchronisation agoniste-antagoniste (Δt ≈ 18 ms) solidarisant la masse corporelle (m_eff = 32 kg).' },
      { max: 100, name: '6. Recouvrement & Retour en Garde', exp: 'Traction élastique des antagonistes pour ramener le membre en protection sans contre-attaque.' }
    ];

    let currentP = phases[phases.length - 1];
    for (let p of phases) {
      if (pct <= p.max) { currentP = p; break; }
    }

    const textEl = document.getElementById('phaseText');
    const expEl = document.getElementById('phaseExplanationText');
    if (textEl) textEl.innerText = currentP.name;
    if (expEl) expEl.innerText = currentP.exp;
  }

  get3DSkeleton(tech, progress) {
    const t = progress / 100;
    let hipX = 0, hipY = 0.95, hipZ = 0;
    let shoulderX = 0, shoulderY = 1.45, shoulderZ = 0;

    let shoulderAngle = 0;
    let handRight = { x: 0.18, y: 1.45, z: 0.25 };
    let handLeft = { x: -0.18, y: 1.45, z: 0.25 };
    let footRight = { x: 0.22, y: 0, z: -0.28 };
    let footLeft = { x: -0.22, y: 0, z: 0.25 };

    if (tech === 'cross') {
      shoulderAngle = t * 1.15;
      const reach = t * 0.82;
      handRight = {
        x: 0.18 * Math.cos(shoulderAngle) + reach * Math.sin(shoulderAngle),
        y: 1.45 - t * 0.05,
        z: 0.25 + reach * Math.cos(shoulderAngle)
      };
      footRight.z = -0.28 + t * 0.06;
    } else if (tech === 'teep') {
      hipY = 0.95 + t * 0.05;
      shoulderZ = -t * 0.25;
      footRight = { x: 0.05, y: 0.1 + t * 0.95, z: t * 1.05 };
    } else if (tech === 'hook') {
      shoulderAngle = t * 1.4;
      handRight = {
        x: -0.35 + Math.sin(shoulderAngle) * 0.6,
        y: 1.45,
        z: 0.4 + Math.cos(shoulderAngle) * 0.3
      };
    } else if (tech === 'lowkick') {
      // Pivot à 180° pour préserver le LCA
      footRight = {
        x: Math.sin(t * 2.2) * 0.85,
        y: 0.45 - t * 0.1,
        z: Math.cos(t * 2.2) * 0.7
      };
    } else if (tech === 'armbar') {
      // Levier classe 1 avec fulcrum au pubis et pontage
      hipY = 0.2 + t * 0.35;
      shoulderY = 0.15;
      handRight = { x: 0.1, y: 0.25 + t * 0.4, z: 0.4 };
      handLeft = { x: -0.1, y: 0.25 + t * 0.4, z: 0.4 };
    } else if (tech === 'doubleleg') {
      // Changement de niveau explosif
      hipY = 0.95 - t * 0.55;
      shoulderY = 1.45 - t * 0.65;
      shoulderZ = t * 0.75;
      handRight = { x: 0.25, y: 0.3, z: shoulderZ + 0.35 };
      handLeft = { x: -0.25, y: 0.3, z: shoulderZ + 0.35 };
    }

    return {
      head: { x: shoulderX, y: shoulderY + 0.28, z: shoulderZ },
      neck: { x: shoulderX, y: shoulderY + 0.12, z: shoulderZ },
      shoulderR: { x: 0.22, y: shoulderY, z: shoulderZ - 0.05 },
      shoulderL: { x: -0.22, y: shoulderY, z: shoulderZ + 0.05 },
      elbowR: { x: (0.22 + handRight.x) / 2, y: shoulderY - 0.15, z: (shoulderZ + handRight.z) / 2 },
      elbowL: { x: -0.25, y: shoulderY - 0.2, z: 0.2 },
      handR: handRight,
      handL: handLeft,
      pelvis: { x: hipX, y: hipY, z: hipZ },
      kneeR: { x: (hipX + footRight.x) / 2, y: hipY * 0.5, z: footRight.z * 0.6 },
      kneeL: { x: (hipX + footLeft.x) / 2, y: hipY * 0.55, z: footLeft.z * 0.6 },
      footR: footRight,
      footL: footLeft,
      com: { x: hipX * 0.6, y: hipY * 1.05, z: (footLeft.z + footRight.z) * 0.35 }
    };
  }

  project3D(p) {
    const cx = Math.cos(this.camTheta), sx = Math.sin(this.camTheta);
    const cy = Math.cos(this.camPhi), sy = Math.sin(this.camPhi);

    const x1 = p.x * cx - p.z * sx;
    const z1 = p.x * sx + p.z * cx;

    const y2 = p.y * cy - z1 * sy;
    const z2 = p.y * sy + z1 * cy + this.camDistance;

    const fov = Math.min(this.canvas.width, this.canvas.height) * 0.85;
    const screenX = this.canvas.width / 2 + (x1 / z2) * fov;
    const screenY = this.canvas.height / 2 - (y2 / z2) * fov + this.canvas.height * 0.12;

    return { x: screenX, y: screenY, z: z2 };
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGrid();

    const skel = this.get3DSkeleton(this.currentTech, this.animProgress);
    const prj = {};
    for (let k in skel) {
      prj[k] = this.project3D(skel[k]);
    }

    // Polygone de sustentation (Vert #00E676)
    if (this.hudLayers.polygon) {
      this.ctx.beginPath();
      this.ctx.moveTo(prj.footL.x, prj.footL.y);
      this.ctx.lineTo(prj.footR.x, prj.footR.y);
      this.ctx.strokeStyle = 'rgba(0, 230, 118, 0.45)';
      this.ctx.lineWidth = Math.max(2, this.canvas.width / 300);
      this.ctx.stroke();

      this.ctx.fillStyle = 'rgba(0, 230, 118, 0.15)';
      this.ctx.beginPath();
      this.ctx.ellipse((prj.footL.x + prj.footR.x)/2, (prj.footL.y + prj.footR.y)/2, this.canvas.width * 0.08, this.canvas.height * 0.04, 0, 0, Math.PI*2);
      this.ctx.fill();
    }

    // Segments squelettiques (Cyan #00CED1)
    if (this.hudLayers.skeleton) {
      this.ctx.strokeStyle = '#00CED1';
      this.ctx.lineWidth = Math.max(3, this.canvas.width / 220);
      this.ctx.lineCap = 'round';

      const bones = [
        ['head', 'neck'], ['neck', 'shoulderR'], ['neck', 'shoulderL'],
        ['shoulderR', 'elbowR'], ['elbowR', 'handR'],
        ['shoulderL', 'elbowL'], ['elbowL', 'handL'],
        ['neck', 'pelvis'],
        ['pelvis', 'kneeR'], ['kneeR', 'footR'],
        ['pelvis', 'kneeL'], ['kneeL', 'footL']
      ];

      for (let b of bones) {
        this.ctx.beginPath();
        this.ctx.moveTo(prj[b[0]].x, prj[b[0]].y);
        this.ctx.lineTo(prj[b[1]].x, prj[b[1]].y);
        this.ctx.stroke();
      }

      // Nœuds Mocap luminescents
      const nodeRadius = Math.max(3, this.canvas.width / 240);
      for (let k in prj) {
        if (k === 'com') continue;
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.beginPath();
        this.ctx.arc(prj[k].x, prj[k].y, nodeRadius, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    // Vecteurs de Force GRF (Orange #FF6B35)
    if (this.hudLayers.forces) {
      this.ctx.strokeStyle = '#FF6B35';
      this.ctx.lineWidth = Math.max(2, this.canvas.width / 280);

      const arrowLen = (this.canvas.height * 0.1) * (this.animProgress / 100);
      this.ctx.beginPath();
      this.ctx.moveTo(prj.footR.x, prj.footR.y);
      this.ctx.lineTo(prj.footR.x - 20, prj.footR.y - arrowLen);
      this.ctx.stroke();

      if (this.animProgress > 60) {
        this.ctx.beginPath();
        this.ctx.moveTo(prj.handR.x, prj.handR.y);
        this.ctx.lineTo(prj.handR.x + this.canvas.width * 0.06, prj.handR.y);
        this.ctx.stroke();
      }
    }

    // Centre de Masse (CoM en 4 quadrants Votre EPS)
    if (this.hudLayers.com && prj.com) {
      const r = Math.max(6, this.canvas.width / 100);
      const x = prj.com.x, y = prj.com.y;
      
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, Math.PI * 2);
      this.ctx.fillStyle = '#FFD700';
      this.ctx.fill();

      this.ctx.fillStyle = '#030712';
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.arc(x, y, r, 0, Math.PI / 2);
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.arc(x, y, r, Math.PI, Math.PI * 1.5);
      this.ctx.fill();
      this.ctx.restore();
    }
  }

  drawGrid() {
    this.ctx.strokeStyle = 'rgba(51, 65, 85, 0.35)';
    this.ctx.lineWidth = 1;
    const size = 3;
    const step = 0.6;
    for (let x = -size; x <= size; x += step) {
      const p1 = this.project3D({ x: x, y: 0, z: -size });
      const p2 = this.project3D({ x: x, y: 0, z: size });
      this.ctx.beginPath();
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
      this.ctx.stroke();
    }
    for (let z = -size; z <= size; z += step) {
      const p1 = this.project3D({ x: -size, y: 0, z: z });
      const p2 = this.project3D({ x: size, y: 0, z: z });
      this.ctx.beginPath();
      this.ctx.moveTo(p1.x, p1.y);
      this.ctx.lineTo(p2.x, p2.y);
      this.ctx.stroke();
    }
  }

  loop(timestamp) {
    if (!this.lastTimestamp) this.lastTimestamp = timestamp;
    const delta = (timestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = timestamp;

    if (this.isPlaying) {
      this.animProgress += delta * 45 * this.animSpeed;
      if (this.animProgress > 100) this.animProgress = 0;
      const scrubber = document.getElementById('timeScrubber');
      if (scrubber) scrubber.value = this.animProgress;
      this.updatePhaseUI();
    }

    this.draw();
    requestAnimationFrame((ts) => this.loop(ts));
  }
}
