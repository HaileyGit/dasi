// features/recall/queries.ts
// emotion_days + snapshot

import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "~/supa-client";
import { browserClient } from "~/supa-client";

export const getPublicEmotionDayByDate = async (date: string) => {
  const { data: emotionDay, error: emotionDayError } = await browserClient
    .from("emotion_days")
    .select("*")
    .eq("target_date", date)
    .eq("is_public", true)
    .limit(1)
    .single();

  if (emotionDayError || !emotionDay) return null;

  const { data: snapshot, error: snapshotError } = await browserClient
    .from("content_snapshots")
    .select("*")
    .eq("emotion_day_id", emotionDay.id)
    .limit(1)
    .single();

  return {
    ...emotionDay,
    snapshot: snapshot ?? null,
  };
};
