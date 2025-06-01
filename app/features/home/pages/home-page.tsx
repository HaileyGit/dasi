import React from "react";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";
import HeroSection from "~/features/home/components/HeroSection";
import DateSaveSection from "~/features/home/components/DateSaveSection";
import PremiumSection from "~/features/home/components/PremiumSection";
import Navigation from "~/common/components/navigation";
import { browserClient } from "~/supa-client";
import type { Database } from "~/supa-client";
import type { Route } from "~/types";

type Memory = Database["public"]["Tables"]["memories"]["Row"] & {
  tags?: string[];
  media?: { url: string; type: string }[];
  memory_tags?: { tag: string }[];
  memory_media?: { url: string; type: string }[];
};

export async function loader({ request }: Route.LoaderArgs) {
  const { data: recentMemories, error } = await browserClient
    .from("memories")
    .select(
      `
      *,
      memory_tags(tag),
      memory_media(url, type)
    `
    )
    .eq("is_public", true)
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching memories:", error);
    return { recentMemories: [] };
  }

  const formattedMemories = recentMemories?.map((memory) => ({
    ...memory,
    tags: memory.memory_tags?.map((t: { tag: string }) => t.tag) || [],
    media: memory.memory_media || [],
  }));

  return {
    recentMemories: formattedMemories || [],
  };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { recentMemories } = loaderData;

  return (
    <CosmicBackgroundLayout>
      <div className="min-h-screen">
        <Navigation isLoggedIn={false} />

        {/* 메인 컨텐츠 */}
        <main className="pt-16">
          <HeroSection />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DateSaveSection />
              <PremiumSection />
            </div>

            {/* 최근 공개된 메모리 섹션 */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                최근 공개된 메모리
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentMemories.map((memory: Memory) => (
                  <div
                    key={memory.id}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all"
                  >
                    <div className="text-sm text-gray-400 mb-2">
                      {new Date(memory.date).toLocaleDateString()}
                    </div>
                    <p className="text-lg mb-4 line-clamp-3">
                      {memory.content}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      {memory.weather && (
                        <span className="bg-white/10 px-2 py-1 rounded">
                          {memory.weather}
                        </span>
                      )}
                      {memory.mood && (
                        <span className="bg-white/10 px-2 py-1 rounded">
                          {memory.mood}
                        </span>
                      )}
                      {memory.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    {memory.media && memory.media.length > 0 && (
                      <div className="mt-4">
                        {memory.media.map(
                          (media) =>
                            media.type === "image" && (
                              <img
                                key={media.url}
                                src={media.url}
                                alt="Memory"
                                className="w-full h-48 object-cover rounded"
                              />
                            )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </CosmicBackgroundLayout>
  );
}
