import React, { useState } from "react";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";
import HeroSection from "~/features/home/components/HeroSection";
import DateSaveSection from "~/features/home/components/DateSaveSection";
import PremiumSection from "~/features/home/components/PremiumSection";
import Navigation from "~/common/components/navigation";

export default function HomePage() {
  return (
    <CosmicBackgroundLayout>
      <div className="min-h-screen">
        <Navigation isLoggedIn={true} />

        {/* 메인 컨텐츠 */}
        <main className="pt-16">
          <HeroSection />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DateSaveSection />
              <PremiumSection />
            </div>
          </div>
        </main>
      </div>
    </CosmicBackgroundLayout>
  );
}
