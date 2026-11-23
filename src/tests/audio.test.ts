import { describe, it, expect, beforeEach } from "vitest";
import {
  isSoundEnabled,
  setSoundEnabled,
  playCorrectChime,
  playIncorrectDampen,
  playStreakBonusFanfare,
  playClick,
  playRoundComplete,
} from "@/lib/audio";

const mockStorage: Record<string, string> = {};
const storageMock = {
  getItem: (k: string) => mockStorage[k] || null,
  setItem: (k: string, v: string) => {
    mockStorage[k] = v;
  },
  removeItem: (k: string) => {
    delete mockStorage[k];
  },
  clear: () => {
    Object.keys(mockStorage).forEach((k) => delete mockStorage[k]);
  },
};

(globalThis as unknown as { window: unknown }).window = {
  localStorage: storageMock,
};

describe("Yoga Bliss Procedural Audio Engine", () => {
  beforeEach(() => {
    storageMock.clear();
  });

  it("defaults sound to enabled", () => {
    expect(isSoundEnabled()).toBe(true);
  });

  it("persists mute state in localStorage", () => {
    setSoundEnabled(false);
    expect(isSoundEnabled()).toBe(false);

    setSoundEnabled(true);
    expect(isSoundEnabled()).toBe(true);
  });

  it("safely handles audio triggers when AudioContext is mocked or absent", () => {
    expect(() => playCorrectChime()).not.toThrow();
    expect(() => playIncorrectDampen()).not.toThrow();
    expect(() => playStreakBonusFanfare()).not.toThrow();
    expect(() => playClick()).not.toThrow();
    expect(() => playRoundComplete()).not.toThrow();
  });
});
