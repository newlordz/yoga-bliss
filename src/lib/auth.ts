import { useSyncExternalStore } from "react";
import { PlayerProgress, DEFAULT_PLAYER_PROGRESS } from "./progression";

export interface UserAccount {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  passwordHash: string;
  createdAt: string;
  progress: PlayerProgress;
}

export type SafeUser = Omit<UserAccount, "passwordHash">;

const ACCOUNTS_STORAGE_KEY = "yoga_bliss_accounts_v1";
const ACTIVE_SESSION_KEY = "yoga_bliss_active_session_v1";
const AUTH_EVENT_NAME = "yoga_bliss_auth_change";

/**
 * Hash password using standard SHA-256 (supports Web Crypto & Node environment for Vitest)
 */
export async function hashPassword(password: string): Promise<string> {
  const normalized = password.trim();
  
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(normalized);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  // Node fallback for tests
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const nodeCrypto = require("crypto");
    return nodeCrypto.createHash("sha256").update(normalized).digest("hex");
  } catch {
    // Basic fallback if neither exists
    let hash = 0;
    for (let i = 0; i < normalized.length; i++) {
      hash = (hash << 5) - hash + normalized.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString(16);
  }
}

function getStorage(): Storage | null {
  if (typeof window !== "undefined" && window.localStorage) {
    return window.localStorage;
  }
  if (typeof globalThis !== "undefined" && (globalThis as unknown as { localStorage?: Storage }).localStorage) {
    return (globalThis as unknown as { localStorage: Storage }).localStorage;
  }
  return null;
}

/**
 * Load all registered accounts from local storage
 */
export function getAllAccounts(): Record<string, UserAccount> {
  const storage = getStorage();
  if (!storage) return {};
  try {
    const raw = storage.getItem(ACCOUNTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.warn("Error reading accounts store:", err);
    return {};
  }
}

/**
 * Save accounts dictionary to local storage
 */
function saveAccounts(accounts: Record<string, UserAccount>): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
  } catch (err) {
    console.warn("Error saving accounts store:", err);
  }
}

/**
 * Get active user session or null if playing as Guest
 */
export function getCurrentUser(): SafeUser | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;
    const sessionData = JSON.parse(raw);
    const accounts = getAllAccounts();
    const account = accounts[sessionData.id];
    if (!account) {
      storage.removeItem(ACTIVE_SESSION_KEY);
      return null;
    }
    // Return fresh state from accounts store without passwordHash
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash: _, ...safe } = account;
    return safe;
  } catch {
    return null;
  }
}

/**
 * Trigger auth event so listening components update automatically
 */
function notifyAuthChange(user: SafeUser | null): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(AUTH_EVENT_NAME, { detail: user }));
  }
}

/**
 * Sign up a new player account with password hashing
 */
export async function signUpUser(params: {
  username: string;
  password: string;
  displayName?: string;
  email?: string;
}): Promise<{ success: boolean; user?: SafeUser; error?: string }> {
  const username = params.username.trim().replace(/\s+/g, " ");
  const password = params.password.trim();
  const displayName = (params.displayName || username).trim();
  const email = params.email?.trim().toLowerCase();

  if (!username || username.length < 3) {
    return { success: false, error: "Username must be at least 3 characters." };
  }
  // Allow letters, numbers, spaces, dots, hyphens, and underscores (e.g. "Enoch Essel")
  if (!/^[\p{L}\p{N}_\- .]+$/u.test(username)) {
    return {
      success: false,
      error: "Username may only contain letters, numbers, spaces, hyphens, and underscores.",
    };
  }
  if (!password || password.length < 4) {
    return { success: false, error: "Password must be at least 4 characters long." };
  }

  const accounts = getAllAccounts();

  // Check if username already exists (case-insensitive and whitespace-normalized)
  const normUser = username.toLowerCase();
  const stripUser = normUser.replace(/\s+/g, "");
  const existingByUsername = Object.values(accounts).find((acc) => {
    const accNorm = acc.username.toLowerCase();
    return accNorm === normUser || accNorm.replace(/\s+/g, "") === stripUser;
  });
  if (existingByUsername) {
    return { success: false, error: "Username is already taken. Please choose another." };
  }

  // Check if email already registered (if provided)
  if (email) {
    const existingByEmail = Object.values(accounts).find(
      (acc) => acc.email && acc.email.toLowerCase() === email
    );
    if (existingByEmail) {
      return { success: false, error: "An account with this email already exists." };
    }
  }

  const id = `user_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  const passwordHash = await hashPassword(password);

  const newAccount: UserAccount = {
    id,
    username,
    displayName: displayName || username,
    email: email || undefined,
    passwordHash,
    createdAt: new Date().toISOString(),
    progress: { ...DEFAULT_PLAYER_PROGRESS },
  };

  accounts[id] = newAccount;
  saveAccounts(accounts);

  // Auto-login newly registered user
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _, ...safeUser } = newAccount;
  const storage = getStorage();
  if (storage) {
    storage.setItem(ACTIVE_SESSION_KEY, JSON.stringify({ id: safeUser.id, username: safeUser.username }));
  }

  notifyAuthChange(safeUser);
  return { success: true, user: safeUser };
}

/**
 * Log in with username or email and password
 */
export async function loginUser(
  identifier: string,
  password: string
): Promise<{ success: boolean; user?: SafeUser; error?: string }> {
  const cleanId = identifier.trim().toLowerCase();
  const strippedId = cleanId.replace(/\s+/g, "");
  const cleanPassword = password.trim();

  if (!cleanId || !cleanPassword) {
    return { success: false, error: "Please enter your username/email and password." };
  }

  const accounts = getAllAccounts();
  const targetAccount = Object.values(accounts).find((acc) => {
    const accNorm = acc.username.toLowerCase();
    return (
      accNorm === cleanId ||
      accNorm.replace(/\s+/g, "") === strippedId ||
      (acc.email && acc.email.toLowerCase() === cleanId)
    );
  });

  if (!targetAccount) {
    return { success: false, error: "Account not found. Please check your username or register." };
  }

  const inputHash = await hashPassword(cleanPassword);
  if (inputHash !== targetAccount.passwordHash) {
    return { success: false, error: "Incorrect password. Please try again." };
  }

  // Set active session
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _, ...safeUser } = targetAccount;
  const storage = getStorage();
  if (storage) {
    storage.setItem(ACTIVE_SESSION_KEY, JSON.stringify({ id: safeUser.id, username: safeUser.username }));
  }

  notifyAuthChange(safeUser);
  return { success: true, user: safeUser };
}

/**
 * Log out active user and switch to Guest session
 */
export function logoutUser(): void {
  const storage = getStorage();
  if (storage) {
    storage.removeItem(ACTIVE_SESSION_KEY);
  }
  notifyAuthChange(null);
}

/**
 * Save updated progress directly to the active user's persistent profile
 */
export function saveActiveUserProgress(updatedProgress: PlayerProgress): boolean {
  const current = getCurrentUser();
  if (!current) return false;

  const accounts = getAllAccounts();
  if (!accounts[current.id]) return false;

  accounts[current.id].progress = updatedProgress;
  saveAccounts(accounts);
  notifyAuthChange({ ...current, progress: updatedProgress });
  return true;
}

/**
 * Merge temporary guest points into newly registered or signed-in account
 */
export function mergeGuestProgressIntoUser(userId: string, guestProgress: PlayerProgress): void {
  const accounts = getAllAccounts();
  const account = accounts[userId];
  if (!account) return;

  const userProgress = account.progress || { ...DEFAULT_PLAYER_PROGRESS };

  account.progress = {
    lifetimeXP: userProgress.lifetimeXP + (guestProgress.lifetimeXP || 0),
    roundsPlayed: userProgress.roundsPlayed + (guestProgress.roundsPlayed || 0),
    bestAccuracy: Math.max(userProgress.bestAccuracy, guestProgress.bestAccuracy || 0),
    currentStreak: 0,
    bestStreak: Math.max(userProgress.bestStreak, guestProgress.bestStreak || 0),
    poseStats: { ...userProgress.poseStats, ...guestProgress.poseStats },
    unlockedAchievements: Array.from(
      new Set([...(userProgress.unlockedAchievements || []), ...(guestProgress.unlockedAchievements || [])])
    ),
    lastPlayedAt: new Date().toISOString(),
  };

  saveAccounts(accounts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash: _, ...safeUser } = account;
  notifyAuthChange(safeUser);
}

/**
 * React hook or listener subscription for auth changes
 */
export function subscribeToAuth(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = () => {
    callback();
  };

  window.addEventListener(AUTH_EVENT_NAME, handler);
  return () => window.removeEventListener(AUTH_EVENT_NAME, handler);
}

let cachedUserJson = "";
let cachedUser: SafeUser | null = null;

function getCachedCurrentUser(): SafeUser | null {
  const current = getCurrentUser();
  const json = JSON.stringify(current);
  if (json !== cachedUserJson) {
    cachedUserJson = json;
    cachedUser = current;
  }
  return cachedUser;
}

/**
 * React 19 recommended SSR-safe hook to access current active user
 */
export function useCurrentUser(): SafeUser | null {
  return useSyncExternalStore(
    subscribeToAuth,
    getCachedCurrentUser,
    () => null
  );
}
