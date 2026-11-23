-- ==============================================================================
-- Yoga Bliss: Production Database Schema & Row Level Security (RLS)
-- Phase 6: Supabase Authentication, Cloud Sync, and Privacy-Safe Leaderboard
-- ==============================================================================

-- 1. Profiles Table (linked to Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL CHECK (char_length(display_name) >= 2 AND char_length(display_name) <= 30),
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Player Progress Summary Table
CREATE TABLE IF NOT EXISTS public.player_progress (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  lifetime_xp INTEGER NOT NULL DEFAULT 0 CHECK (lifetime_xp >= 0),
  rounds_played INTEGER NOT NULL DEFAULT 0 CHECK (rounds_played >= 0),
  best_accuracy INTEGER NOT NULL DEFAULT 0 CHECK (best_accuracy >= 0 AND best_accuracy <= 100),
  best_streak INTEGER NOT NULL DEFAULT 0 CHECK (best_streak >= 0),
  last_synced_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. Pose Mastery Table (tracks per-pose attempts)
CREATE TABLE IF NOT EXISTS public.pose_mastery (
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  pose_id TEXT NOT NULL,
  correct_count INTEGER NOT NULL DEFAULT 0 CHECK (correct_count >= 0),
  incorrect_count INTEGER NOT NULL DEFAULT 0 CHECK (incorrect_count >= 0),
  last_practiced_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  PRIMARY KEY (user_id, pose_id)
);

-- 4. Game Sessions Table (round history)
CREATE TABLE IF NOT EXISTS public.game_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  score INTEGER NOT NULL DEFAULT 0,
  accuracy INTEGER NOT NULL CHECK (accuracy >= 0 AND accuracy <= 100),
  is_adaptive BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. Achievements Catalog Table
CREATE TABLE IF NOT EXISTS public.achievements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  xp_reward INTEGER NOT NULL DEFAULT 0
);

-- 6. Player Unlocked Achievements
CREATE TABLE IF NOT EXISTS public.player_achievements (
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  achievement_id TEXT REFERENCES public.achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  PRIMARY KEY (user_id, achievement_id)
);

-- Seed Starter Achievements
INSERT INTO public.achievements (id, title, description, xp_reward)
VALUES 
  ('first-flow', 'First Flow', 'Correctly identify 5 distinct yoga poses.', 100),
  ('tree-master', 'Tree Master', 'Correctly identify Tree Pose (Vrksasana) 10 times.', 250),
  ('on-fire', 'On Fire', 'Achieve a 5-answer correct streak during gameplay.', 150)
ON CONFLICT (id) DO NOTHING;

-- ==============================================================================
-- PRIVACY-SAFE LEADERBOARD VIEW
-- Exposes ONLY public display_name, lifetime_xp, and best_accuracy (never emails/auth IDs)
-- ==============================================================================
CREATE OR REPLACE VIEW public.public_leaderboard AS
SELECT 
  p.display_name,
  COALESCE(pr.lifetime_xp, 0) AS lifetime_xp,
  COALESCE(pr.best_accuracy, 0) AS best_accuracy,
  COALESCE(pr.rounds_played, 0) AS rounds_played
FROM public.profiles p
JOIN public.player_progress pr ON p.id = pr.user_id
ORDER BY pr.lifetime_xp DESC, pr.best_accuracy DESC
LIMIT 50;

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.player_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pose_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.player_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

-- Profiles: Public can view basic profile info, user can edit own profile
CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Player Progress: Only the authenticated owner can select, insert, or update
CREATE POLICY "Users can read own progress" 
  ON public.player_progress FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" 
  ON public.player_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" 
  ON public.player_progress FOR UPDATE USING (auth.uid() = user_id);

-- Pose Mastery: Owner only
CREATE POLICY "Users can read own pose mastery" 
  ON public.pose_mastery FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert/update own pose mastery" 
  ON public.pose_mastery FOR ALL USING (auth.uid() = user_id);

-- Game Sessions: Owner only
CREATE POLICY "Users can view own game sessions" 
  ON public.game_sessions FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own game sessions" 
  ON public.game_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Player Achievements: Owner can view/unlock
CREATE POLICY "Users can read own achievements" 
  ON public.player_achievements FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own achievements" 
  ON public.player_achievements FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Catalog Achievements: Anyone can read catalog
CREATE POLICY "Anyone can view achievements catalog" 
  ON public.achievements FOR SELECT USING (true);
