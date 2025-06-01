// features/memories/queries.ts
import { browserClient } from "~/supa-client";
import type { Database } from "~/supa-client";

type Memory = Database["public"]["Tables"]["memories"]["Row"];
type MemoryTag = Database["public"]["Tables"]["memory_tags"]["Row"];
type MemoryMedia = Database["public"]["Tables"]["memory_media"]["Row"];

export const getPublicMemories = async () => {
  const { data: list, error: listError } = await browserClient
    .from("memories")
    .select("*")
    .eq("is_public", true);

  if (listError || !list) return [];

  const ids = list.map((m) => m.id);

  const [tagsResponse, mediaResponse] = await Promise.all([
    browserClient.from("memory_tags").select("*").in("memory_id", ids),
    browserClient.from("memory_media").select("*").in("memory_id", ids),
  ]);

  const tags = tagsResponse.data ?? [];
  const media = mediaResponse.data ?? [];

  return list.map((m) => ({
    ...m,
    tags: tags.filter((t) => t.memory_id === m.id).map((t) => t.tag),
    media: media.filter((f) => f.memory_id === m.id),
  }));
};
