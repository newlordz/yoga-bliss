import { describe, it, expect, beforeEach } from "vitest";
import {
  signUpUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  getAllAccounts,
  hashPassword,
  saveActiveUserProgress,
  mergeGuestProgressIntoUser,
} from "@/lib/auth";
import { getLocalProgress, saveLocalProgress, DEFAULT_PLAYER_PROGRESS } from "@/lib/progression";

// Mock localStorage for test environment
class LocalStorageMock {
  private store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}

describe("Offline Player Account & Auth System", () => {
  beforeEach(() => {
    // Provide clean localStorage for each test
    // @ts-expect-error test mock
    globalThis.localStorage = new LocalStorageMock();
    logoutUser();
  });

  it("hashes passwords consistently", async () => {
    const hash1 = await hashPassword("secure123");
    const hash2 = await hashPassword("secure123");
    const hashOther = await hashPassword("different");

    expect(hash1).toBe(hash2);
    expect(hash1).not.toBe(hashOther);
    expect(hash1.length).toBeGreaterThan(10);
  });

  it("registers a new user and creates an active session", async () => {
    const res = await signUpUser({
      username: "yogini_maya",
      displayName: "Maya Flow",
      password: "pass1234",
      email: "maya@example.com",
    });

    expect(res.success).toBe(true);
    expect(res.user).toBeDefined();
    expect(res.user?.username).toBe("yogini_maya");
    expect(res.user?.displayName).toBe("Maya Flow");

    // Password hash should not be exposed on safe user
    // @ts-expect-error property should not exist on SafeUser
    expect(res.user?.passwordHash).toBeUndefined();

    // Verify session
    const current = getCurrentUser();
    expect(current).not.toBeNull();
    expect(current?.username).toBe("yogini_maya");
  });

  it("prevents duplicate usernames", async () => {
    await signUpUser({ username: "arjun", password: "password1" });
    const duplicate = await signUpUser({ username: "arjun", password: "password2" });

    expect(duplicate.success).toBe(false);
    expect(duplicate.error).toContain("already taken");
  });

  it("allows player names with spaces (e.g. Enoch Essel)", async () => {
    const res = await signUpUser({
      username: "Enoch Essel",
      password: "mypassword123",
    });

    expect(res.success).toBe(true);
    expect(res.user?.username).toBe("Enoch Essel");
    expect(res.user?.displayName).toBe("Enoch Essel");

    logoutUser();

    // Log in with exact name
    const loginExact = await loginUser("Enoch Essel", "mypassword123");
    expect(loginExact.success).toBe(true);

    logoutUser();

    // Log in case-insensitively or without spaces
    const loginLower = await loginUser("enoch essel", "mypassword123");
    expect(loginLower.success).toBe(true);

    const loginNoSpaces = await loginUser("enochessel", "mypassword123");
    expect(loginNoSpaces.success).toBe(true);
  });

  it("validates username and password lengths", async () => {
    const shortUser = await signUpUser({ username: "ab", password: "validpass" });
    expect(shortUser.success).toBe(false);
    expect(shortUser.error).toContain("at least 3 characters");

    const shortPass = await signUpUser({ username: "validuser", password: "12" });
    expect(shortPass.success).toBe(false);
    expect(shortPass.error).toContain("at least 4 characters");
  });

  it("logs in with valid credentials and rejects bad passwords", async () => {
    await signUpUser({
      username: "samir",
      password: "secretpassword",
      email: "samir@bliss.org",
    });

    logoutUser();
    expect(getCurrentUser()).toBeNull();

    // Invalid password
    const failLogin = await loginUser("samir", "wrongpassword");
    expect(failLogin.success).toBe(false);
    expect(failLogin.error).toContain("Incorrect password");
    expect(getCurrentUser()).toBeNull();

    // Valid login with username
    const userLogin = await loginUser("samir", "secretpassword");
    expect(userLogin.success).toBe(true);
    expect(getCurrentUser()?.username).toBe("samir");

    logoutUser();

    // Valid login with email
    const emailLogin = await loginUser("samir@bliss.org", "secretpassword");
    expect(emailLogin.success).toBe(true);
    expect(getCurrentUser()?.username).toBe("samir");
  });

  it("persists earned XP and stats to the active user profile", async () => {
    await signUpUser({ username: "elena", password: "pass1234" });

    const current = getCurrentUser();
    expect(current).not.toBeNull();

    const newProgress = {
      ...DEFAULT_PLAYER_PROGRESS,
      lifetimeXP: 650,
      roundsPlayed: 3,
      bestAccuracy: 90,
    };

    saveActiveUserProgress(newProgress);

    // Verify stored account contains updated progress
    const accounts = getAllAccounts();
    expect(accounts[current!.id].progress.lifetimeXP).toBe(650);

    // Verify progression loader returns user's progress
    const loaded = getLocalProgress();
    expect(loaded.lifetimeXP).toBe(650);
  });

  it("merges guest progress when creating an account", async () => {
    // 1. User starts as guest and plays a round earning 300 XP
    saveLocalProgress({
      ...DEFAULT_PLAYER_PROGRESS,
      lifetimeXP: 300,
      roundsPlayed: 1,
      bestAccuracy: 80,
    });

    // 2. User registers
    const signup = await signUpUser({ username: "new_convert", password: "password" });
    expect(signup.success).toBe(true);

    // 3. Merge guest progress into new user
    const guestProgress = {
      ...DEFAULT_PLAYER_PROGRESS,
      lifetimeXP: 300,
      roundsPlayed: 1,
      bestAccuracy: 80,
    };
    mergeGuestProgressIntoUser(signup.user!.id, guestProgress);

    const accounts = getAllAccounts();
    expect(accounts[signup.user!.id].progress.lifetimeXP).toBe(300);
  });
});
