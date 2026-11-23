/**
 * Yoga Bliss Procedural Audio Engine
 * Uses the Web Audio API to synthesize calm, organic meditation bell tones,
 * soft wooden percussion, and resonant gong chords completely offline without external audio files.
 */

let audioCtx: AudioContext | null = null;
const SOUND_STORAGE_KEY = "yoga_bliss_sound_enabled";

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined" || !window.localStorage) return true;
  const saved = window.localStorage.getItem(SOUND_STORAGE_KEY);
  return saved === null ? true : saved === "true";
}

export function setSoundEnabled(enabled: boolean): void {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(SOUND_STORAGE_KEY, String(enabled));
  }
}

/**
 * Resonant Tibetan Singing Bowl chime for correct answers (~528 Hz Love/Solfeggio frequency)
 */
export function playCorrectChime(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const fundamental = 528; // Harmonic meditation tone
  const harmonics = [1, 2.01, 3.02, 4.2];
  const gains = [0.4, 0.15, 0.08, 0.03];

  harmonics.forEach((ratio, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(fundamental * ratio, now);

    // Exponential decay bell envelope
    gain.gain.setValueAtTime(gains[idx], now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 1.6);
  });
}

/**
 * Gentle wooden block / bamboo tone for missed answers (non-punishing, educational)
 */
export function playIncorrectDampen(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(220, now);
  osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.25);
}

/**
 * Ascending crystal chime chord for streak bonuses (3x, 6x, 9x)
 */
export function playStreakBonusFanfare(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const notes = [528, 660, 792, 1056]; // Major harmonic chord

  notes.forEach((freq, idx) => {
    const noteTime = now + idx * 0.08;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, noteTime);

    gain.gain.setValueAtTime(0.25, noteTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(noteTime);
    osc.stop(noteTime + 1.2);
  });
}

/**
 * Tactile wooden tap on button click or keyboard navigation
 */
export function playClick(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(440, now);
  osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.04);
}

/**
 * Deep, resonant temple bell chord on round completion
 */
export function playRoundComplete(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const chord = [264, 330, 396, 528]; // C major pentatonic resonance

  chord.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.05);

    gain.gain.setValueAtTime(0.3, now + idx * 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.05);
    osc.stop(now + 2.5);
  });
}
