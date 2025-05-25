import React from "react";
import CloudOverlay from "./CloudOverlay";
import StarsOverlay from "./StarsOverlay";

export default function CosmicBackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen font-['Pretendard'] text-white relative overflow-hidden">
      {/* 우주 배경 그라데이션 */}
      <div className="fixed inset-0 z-[-1] cosmic-radial-bg" />
      {/* 구름/빛 효과 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CloudOverlay />
      </div>
      {/* 별 */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <StarsOverlay />
      </div>
      {/* 그레인 효과 */}
      <div className="fixed inset-0 z-20 pointer-events-none grain-bg" />
      {/* children */}
      <main className="relative z-30">{children}</main>
      {/* 스타일 */}
      <style>{`
        .cosmic-radial-bg {
          background: radial-gradient(
            ellipse at 60% 0%,
            #32295a 0%,
            #2d2346 60%,
            #1a1333 100%
          );
        }
        .grain-bg {
          background-image: url("/noise.svg");
          opacity: 0.22;
          mix-blend-mode: screen;
        }
      `}</style>
    </div>
  );
}
