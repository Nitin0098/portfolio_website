/**
 * HERO PAGE MINI-GAME: "ORBIT PULSE"
 * Minimalist engagement game in dark navy blue aesthetic
 * Player navigates an energy core, collects light pulses, and dodges anomalies.
 */

(function () {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const overlay = document.getElementById('game-overlay');
  const startBtn = document.getElementById('game-start-btn');
  const pauseBtn = document.getElementById('game-pause-btn');
  const resetBtn = document.getElementById('game-reset-btn');
  const soundBtn = document.getElementById('game-sound-btn');
  const scoreDisplay = document.getElementById('game-score');
  const bestScoreDisplay = document.getElementById('game-best-score');
  const overlayTitle = document.getElementById('game-overlay-title');
  const overlaySubtitle = document.getElementById('game-overlay-subtitle');

  // Game State
  let isRunning = false;
  let isPaused = false;
  let score = 0;
  let bestScore = parseInt(localStorage.getItem('portfolio_minigame_best') || '0', 10);
  let soundEnabled = true;
  let animationFrameId = null;

  bestScoreDisplay.textContent = bestScore;

  // Audio Context (Synthesized sound effects, zero external assets)
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'collect') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'hit') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {
      // Audio fallback silent
    }
  }

  // Dimensions & DPI Scaling
  let width = 0;
  let height = 0;
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    width = rect.width || (canvas.parentElement ? canvas.parentElement.clientWidth : 800) || 800;
    height = rect.height || (canvas.parentElement ? canvas.parentElement.clientHeight : 380) || 380;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }
  window.addEventListener('resize', resizeCanvas);
  if (window.ResizeObserver && canvas.parentElement) {
    const ro = new ResizeObserver(() => {
      resizeCanvas();
    });
    ro.observe(canvas.parentElement);
  }
  resizeCanvas();

  // Player Entity
  const player = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    radius: 10,
    speed: 0.16,
    color: '#38bdf8'
  };

  // Game Objects
  let pulses = [];       // Orbs to collect
  let hazards = [];      // Red anomalies to dodge
  let particles = [];    // Visual fireworks/bursts
  let ambientDots = [];  // Background constellation
  let floatingTexts = [];// Popups like +10

  // Ambient Starfield dots
  function initAmbient() {
    ambientDots = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      ambientDots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.8
      });
    }
  }
  initAmbient();

  // Input Handling: Mouse, Touch & Keys
  let mouseActive = false;

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    player.targetX = e.clientX - rect.left;
    player.targetY = e.clientY - rect.top;
    mouseActive = true;
  });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      player.targetX = e.touches[0].clientX - rect.left;
      player.targetY = e.touches[0].clientY - rect.top;
      mouseActive = true;
    }
  }, { passive: false });

  const keys = {};
  window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
      keys[e.code] = true;
      mouseActive = false;
    }
  });

  window.addEventListener('keyup', (e) => {
    if (keys[e.code]) {
      keys[e.code] = false;
    }
  });

  function spawnPulse() {
    pulses.push({
      x: 30 + Math.random() * (width - 60),
      y: 30 + Math.random() * (height - 60),
      radius: 7,
      baseRadius: 7,
      pulsePhase: Math.random() * Math.PI * 2,
      points: 10
    });
  }

  function spawnHazard() {
    // Spawns from edges moving across
    const edge = Math.floor(Math.random() * 4);
    let x, y, vx, vy;
    const speed = 1.0 + Math.min(score * 0.02, 2.5);

    if (edge === 0) { // Top
      x = Math.random() * width;
      y = -15;
      vx = (Math.random() - 0.5) * speed;
      vy = speed * (0.6 + Math.random() * 0.6);
    } else if (edge === 1) { // Bottom
      x = Math.random() * width;
      y = height + 15;
      vx = (Math.random() - 0.5) * speed;
      vy = -speed * (0.6 + Math.random() * 0.6);
    } else if (edge === 2) { // Left
      x = -15;
      y = Math.random() * height;
      vx = speed * (0.6 + Math.random() * 0.6);
      vy = (Math.random() - 0.5) * speed;
    } else { // Right
      x = width + 15;
      y = Math.random() * height;
      vx = -speed * (0.6 + Math.random() * 0.6);
      vy = (Math.random() - 0.5) * speed;
    }

    hazards.push({
      x, y, vx, vy,
      radius: 8 + Math.random() * 4,
      rotation: 0
    });
  }

  function addBurst(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 2.5 + 1,
        color,
        life: 1,
        decay: Math.random() * 0.03 + 0.02
      });
    }
  }

  function addFloatingText(text, x, y) {
    floatingTexts.push({
      text, x, y,
      alpha: 1,
      vy: -1.2
    });
  }

  function startGame() {
    getAudioContext();
    isRunning = true;
    isPaused = false;
    score = 0;
    scoreDisplay.textContent = score;

    player.x = width / 2;
    player.y = height / 2;
    player.targetX = width / 2;
    player.targetY = height / 2;

    pulses = [];
    hazards = [];
    particles = [];
    floatingTexts = [];

    // Initial pulses
    for (let i = 0; i < 3; i++) {
      spawnPulse();
    }

    overlay.classList.add('hidden');
    pauseBtn.textContent = 'Pause';
  }

  function pauseGame() {
    if (!isRunning) return;
    isPaused = !isPaused;
    if (isPaused) {
      pauseBtn.textContent = 'Resume';
      overlayTitle.textContent = 'Game Paused';
      overlaySubtitle.textContent = 'Catch your breath! Hit Resume whenever you\'re ready to keep dodging and scoring.';
      startBtn.textContent = 'Resume Game';
      overlay.classList.remove('hidden');
    } else {
      pauseBtn.textContent = 'Pause';
      overlay.classList.add('hidden');
    }
  }

  function gameOver() {
    isRunning = false;
    playSound('hit');
    addBurst(player.x, player.y, '#f43f5e', 24);

    const beatCreator = score > 1610;
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem('portfolio_minigame_best', bestScore);
      bestScoreDisplay.textContent = bestScore;
      if (beatCreator) {
        overlayTitle.textContent = 'Incredible! You beat my score: ' + score + '!';
      } else {
        overlayTitle.textContent = 'You set a new personal best: ' + score + '!';
      }
    } else {
      if (beatCreator) {
        overlayTitle.textContent = 'You beat my score! Final: ' + score;
      } else {
        overlayTitle.textContent = 'You scored ' + score + '!';
      }
    }

    if (beatCreator) {
      overlaySubtitle.textContent = 'Insane reflexes! You actually beat my record of 1610 — hats off to you!';
    } else {
      overlaySubtitle.textContent = 'My high score stands at 1610. Jump back in and see if you can take me down!';
    }
    startBtn.textContent = 'Try Again';
    overlay.classList.remove('hidden');
  }

  let hazardSpawnTimer = 0;

  // Main Game Loop
  function updateAndDraw() {
    animationFrameId = requestAnimationFrame(updateAndDraw);

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Ambient Starfield Background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ambientDots.forEach(dot => {
      dot.x += dot.vx;
      dot.y += dot.vy;
      if (dot.x < 0) dot.x = width;
      if (dot.x > width) dot.x = 0;
      if (dot.y < 0) dot.y = height;
      if (dot.y > height) dot.y = 0;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();

      // Subtle interaction with mouse/player
      const dist = Math.hypot(dot.x - player.x, dot.y - player.y);
      if (dist < 80) {
        ctx.beginPath();
        ctx.moveTo(player.x, player.y);
        ctx.lineTo(dot.x, dot.y);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - dist / 80)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });

    if (!isRunning || isPaused) {
      // Just render ambient idle state
      return;
    }

    // 2. Keyboard Control movement
    const keySpeed = 4.5;
    if (keys['ArrowUp'] || keys['KeyW']) player.targetY = Math.max(player.radius, player.y - keySpeed);
    if (keys['ArrowDown'] || keys['KeyS']) player.targetY = Math.min(height - player.radius, player.y + keySpeed);
    if (keys['ArrowLeft'] || keys['KeyA']) player.targetX = Math.max(player.radius, player.x - keySpeed);
    if (keys['ArrowRight'] || keys['KeyD']) player.targetX = Math.min(width - player.radius, player.x + keySpeed);

    // Smooth lerp to target
    player.x += (player.targetX - player.x) * player.speed;
    player.y += (player.targetY - player.y) * player.speed;

    // 3. Draw Player Orb
    ctx.save();
    // Glowing ring
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius + 6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.fill();

    // Solid core
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = player.color;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.restore();

    // 4. Update & Draw Collectible Pulses
    pulses.forEach((pulse, index) => {
      pulse.pulsePhase += 0.06;
      const currentRadius = pulse.baseRadius + Math.sin(pulse.pulsePhase) * 2;

      // Pulse Glow
      ctx.beginPath();
      ctx.arc(pulse.x, pulse.y, currentRadius + 5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fill();

      // Pulse Core
      ctx.beginPath();
      ctx.arc(pulse.x, pulse.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Collision with player
      const dist = Math.hypot(pulse.x - player.x, pulse.y - player.y);
      if (dist < player.radius + currentRadius) {
        playSound('collect');
        score += pulse.points;
        scoreDisplay.textContent = score;

        addBurst(pulse.x, pulse.y, '#38bdf8', 12);
        addFloatingText(`+${pulse.points}`, pulse.x, pulse.y - 10);

        pulses.splice(index, 1);
        spawnPulse();
      }
    });

    // Keep minimum pulses
    if (pulses.length < 3) {
      spawnPulse();
    }

    // 5. Spawn Hazards over time
    hazardSpawnTimer++;
    const spawnThreshold = Math.max(35, 90 - Math.floor(score * 0.4));
    if (hazardSpawnTimer > spawnThreshold) {
      hazardSpawnTimer = 0;
      spawnHazard();
    }

    // 6. Update & Draw Hazards
    for (let i = hazards.length - 1; i >= 0; i--) {
      const h = hazards[i];
      h.x += h.vx;
      h.y += h.vy;
      h.rotation += 0.05;

      // Draw hazard anomaly
      ctx.save();
      ctx.translate(h.x, h.y);
      ctx.rotate(h.rotation);
      ctx.fillStyle = '#f43f5e';
      ctx.shadowColor = '#f43f5e';
      ctx.shadowBlur = 8;

      ctx.beginPath();
      // Minimal diamond
      ctx.moveTo(0, -h.radius);
      ctx.lineTo(h.radius, 0);
      ctx.lineTo(0, h.radius);
      ctx.lineTo(-h.radius, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Check collision with player
      const dist = Math.hypot(h.x - player.x, h.y - player.y);
      if (dist < player.radius + h.radius * 0.8) {
        gameOver();
        return;
      }

      // Remove off-screen hazards
      if (h.x < -40 || h.x > width + 40 || h.y < -40 || h.y > height + 40) {
        hazards.splice(i, 1);
      }
    }

    // 7. Update & Draw Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // 8. Update & Draw Floating Texts
    for (let i = floatingTexts.length - 1; i >= 0; i--) {
      const ft = floatingTexts[i];
      ft.y += ft.vy;
      ft.alpha -= 0.03;

      if (ft.alpha <= 0) {
        floatingTexts.splice(i, 1);
        continue;
      }

      ctx.font = '600 13px -apple-system, sans-serif';
      ctx.fillStyle = `rgba(56, 189, 248, ${ft.alpha})`;
      ctx.fillText(ft.text, ft.x, ft.y);
    }
  }

  // Button Listeners
  startBtn.addEventListener('click', () => {
    if (isPaused) {
      pauseGame();
    } else {
      startGame();
    }
  });

  pauseBtn.addEventListener('click', pauseGame);

  resetBtn.addEventListener('click', () => {
    startGame();
  });

  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundBtn.textContent = soundEnabled ? 'Sound: On' : 'Sound: Off';
  });

  // Start animation loop
  updateAndDraw();
})();
