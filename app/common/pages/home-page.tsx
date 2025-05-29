import React, { useState } from "react";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";
import HeroSection from "~/features/home/components/HeroSection";
import DateSaveSection from "~/features/home/components/DateSaveSection";
import PremiumSection from "~/features/home/components/PremiumSection";
import Navigation from "~/common/components/navigation";

// 메뉴 아이템 타입 정의
type MenuItem = {
  title: string;
  href?: string;
  onClick?: () => void;
};

export default function HomePage() {
  return (
    <CosmicBackgroundLayout>
      <div className="min-h-screen">
        <Navigation />

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

{
  /* Footer */
}
<footer className="backdrop-blur-md bg-white/10 py-12 mt-16 text-center text-white border-t border-white/20 z-40">
  <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm">
    <a
      href="#"
      className="hover:text-fuchsia-400 text-white transition-all duration-300 hover:scale-105 font-extralight tracking-wide text-shadow-strong"
    >
      회사 소개
    </a>
    <a
      href="#"
      className="hover:text-fuchsia-400 text-white transition-all duration-300 hover:scale-105 font-extralight tracking-wide text-shadow-strong"
    >
      이용약관
    </a>
    <a
      href="#"
      className="hover:text-fuchsia-400 text-white transition-all duration-300 hover:scale-105 font-extralight tracking-wide text-shadow-strong"
    >
      개인정보 처리방침
    </a>
    <a
      href="#"
      className="hover:text-fuchsia-400 text-white transition-all duration-300 hover:scale-105 font-extralight tracking-wide text-shadow-strong"
    >
      문의하기
    </a>
  </div>
  <div className="mb-6 flex justify-center gap-6">
    <a
      href="#"
      aria-label="Instagram"
      className="hover:scale-110 transition-transform duration-300"
    >
      <img
        src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
        alt="Instagram"
      />
    </a>
    <a
      href="#"
      aria-label="YouTube"
      className="hover:scale-110 transition-transform duration-300"
    >
      <img
        src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png"
        alt="YouTube"
      />
    </a>
    <a
      href="#"
      aria-label="Kakao"
      className="hover:scale-110 transition-transform duration-300"
    >
      <img
        src="https://img.icons8.com/ios-filled/24/ffffff/speech-bubble.png"
        alt="Kakao"
      />
    </a>
  </div>
  <div className="text-sm font-extralight text-white text-shadow-strong tracking-wide">
    &gt; "기억은 사라지지 않아요. 다시 꺼낼 수 있을 뿐이죠."
  </div>
</footer>;
