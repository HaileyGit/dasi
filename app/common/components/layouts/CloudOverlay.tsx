import React from "react";

export default function CloudOverlay() {
  return (
    <div className="w-full h-full absolute left-0 top-0">
      {/* 구름/빛 그라데이션 */}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-pink-400/10 via-purple-400/10 to-transparent rounded-full blur-3xl opacity-60" />
      {/* SVG ellipse(동그라미) 완전히 제거 */}
    </div>
  );
}
