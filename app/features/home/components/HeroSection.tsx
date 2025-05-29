import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[340px] md:min-h-[400px] px-4 z-40 mt-8">
      <div className="relative mb-12 rounded-2xl overflow-hidden w-full max-w-4xl">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=A%20nostalgic%20cosmic%20dreamscape%20with%20floating%20memory%20bubbles%2C%20showing%20fragments%20of%2090s%20life%20with%20vintage%20TVs%2C%20cassette%20tapes%2C%20and%20old%20photographs.%20Deep%20purple%20and%20blue%20nebula%20background%20with%20soft%20pink%20accents%20and%20glowing%20particles.%20Ethereal%2C%20emotional%2C%20dreamy%20atmosphere%20with%20a%20sense%20of%20time%20passing.&width=1200&height=400&seq=hero-bg-1&orientation=landscape"
            alt="Nostalgic memories"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A0944]/90 via-[#2A0944]/70 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center py-12 md:py-16 px-6 md:px-8">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
              시간 속에 잠든{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                감정을 깨워보세요
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
              한 날의 기억, 그 날의 음악, TV, 날씨, 그리고 당신의 마음까지.
              이제, 다시 꺼내볼 시간입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                onClick={() => (window.location.href = "/login")}
              >
                회상 시작하기
              </button>
              <button
                className="bg-white/10 backdrop-blur-sm text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-white/20 transition-all duration-300"
                onClick={() => (window.location.href = "/examples")}
              >
                다른 사람의 회상 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
