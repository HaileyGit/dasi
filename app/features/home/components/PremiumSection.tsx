import React from "react";

export default function PremiumSection() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <i className="fas fa-crown text-yellow-400 mr-2"></i>
          <span className="text-lg font-medium">특별한 하루 불러오기</span>
        </div>

        <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm space-y-3">
          <p className="text-sm font-medium">AI가 복원한 당신만의 추억</p>
          <ul className="text-sm text-white/80 list-disc list-inside space-y-1">
            <li>그날의 뉴스, 음악, TV 프로그램</li>
            <li>당신의 나이와 위치에 따른 개인화</li>
            <li>감정 분석과 키워드 추출</li>
          </ul>
        </div>

        <button
          className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          onClick={() => (window.location.href = "/login")}
        >
          로그인 후 특별 회상 시작
        </button>
      </div>
    </div>
  );
}
