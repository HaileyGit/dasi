import { Button } from "~/common/components/ui/button";
import { Card, CardHeader, CardContent } from "~/common/components/ui/card";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  // 네비게이션 메뉴
  const navMenu = [
    { label: "서비스 소개", onClick: () => {} },
    { label: "날짜로 회상하기", onClick: () => {} },
    { label: "회상 예시 보기", onClick: () => {} },
    { label: "내 기록 보기", onClick: () => {} },
    { label: "로그인 / 회원가입", onClick: () => {} },
  ];

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      console.log(`/explore/${selectedDate.toISOString().split("T")[0]}`);
    }
  };

  return (
    <div className="min-h-screen font-['Pretendard'] text-white relative overflow-hidden">
      {/* Google Fonts Marcellus: _document.tsx 또는 Head에 아래 코드 추가 필요 */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" /> */}

      {/* 우주 그라데이션 + 그레인 배경 */}
      <div className="fixed inset-0 z-0" style={{
        background: "radial-gradient(ellipse at top, #ffb86b 0%, #a389f4 60%, #6c47c7 100%)"
      }} />
      <div className="fixed inset-0 z-10 pointer-events-none grain-bg" />

      {/* 행성/궤도 SVG 오브젝트 */}
      <svg className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" style={{pointerEvents:'none'}}>
        <ellipse cx="350" cy="500" rx="220" ry="120" fill="url(#planet)" filter="url(#blur)" fillOpacity="0.18"/>
        <circle cx="120" cy="600" r="32" fill="#e0aaff" fillOpacity="0.7"/>
        <circle cx="600" cy="200" r="24" fill="#ffd6e0" fillOpacity="0.7"/>
        <circle cx="200" cy="120" r="18" fill="#fff1c1" fillOpacity="0.6"/>
        <ellipse cx="350" cy="500" rx="180" ry="100" stroke="#fff" strokeOpacity="0.2" strokeWidth="1.5"/>
        <ellipse cx="350" cy="500" rx="140" ry="80" stroke="#fff" strokeOpacity="0.12" strokeWidth="1.5"/>
        <defs>
          <radialGradient id="planet" cx="0" cy="0" r="1" gradientTransform="translate(350 500) scale(220 120)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffb86b"/>
            <stop offset="1" stopColor="#ff6b6b" stopOpacity="0.7"/>
          </radialGradient>
          <filter id="blur" x="0" y="0" width="700" height="700" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="24"/>
          </filter>
        </defs>
      </svg>

      {/* 네비게이션 바 */}
      <nav className="sticky top-0 z-30 backdrop-blur-md bg-white/10 border-b border-white/20 flex items-center justify-between px-6 py-3 shadow-lg">
        <div className="text-lg font-extralight tracking-wider text-shadow-strong">
          그날의 기억
        </div>
        <ul className="flex gap-6 text-sm">
          {navMenu.map((item, i) => (
            <li key={i} className="hover:text-fuchsia-400 text-white transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 font-extralight tracking-wide text-shadow-strong" onClick={item.onClick}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 z-40">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          <h1 className="text-[3.5rem] md:text-[4.5rem] font-serif font-normal mb-2 text-white drop-shadow-lg tracking-tight hero-serif-title text-shadow-strong" style={{fontFamily: 'Marcellus, serif', letterSpacing: '-0.04em', lineHeight: 1.1}}>
            그날의 기억
          </h1>
          <div className="text-lg md:text-xl font-light text-white/80 mb-8 tracking-wide">기억과 감정, 그 사이의 우주</div>
        </div>
      </section>

      {/* 그날의 기록 예시 */}
      <section className="max-w-3xl mx-auto my-16 px-4 z-40">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <h2 className="text-2xl font-extralight mb-6 text-white text-shadow-strong tracking-wide">
            1995년 4월 15일의 기록
          </h2>
          <ul className="mb-8 space-y-3 text-sm leading-relaxed">
            <li className="hover:text-fuchsia-400 text-white transition-colors duration-300 font-extralight tracking-wide text-shadow-strong">&gt; 하늘은 흐렸고, 바람은 조용했어요</li>
            <li className="hover:text-fuchsia-400 text-white transition-colors duration-300 font-extralight tracking-wide text-shadow-strong">&gt; 신문엔 새로운 주민번호 이야기가 실렸죠</li>
            <li className="hover:text-fuchsia-400 text-white transition-colors duration-300 font-extralight tracking-wide text-shadow-strong">&gt; 거리마다 울려 퍼지던 노래: <span className="text-fuchsia-400 font-light text-shadow-strong">서태지와 아이들 - Come Back Home</span></li>
            <li className="hover:text-fuchsia-400 text-white transition-colors duration-300 font-extralight tracking-wide text-shadow-strong">&gt; TV 속에선 전원일기와 토토즐이 흘러나왔어요</li>
          </ul>
          <button className="bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide text-shadow-strong">
            이 날로 회상해볼래요
          </button>
        </div>
      </section>

      {/* 회상 저장 예시/공유 UI */}
      <section className="max-w-3xl mx-auto my-16 px-4 z-40">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-extralight mb-6 text-white text-shadow-strong tracking-wide">
            회상 저장하기
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex gap-3 mb-6">
                <span className="bg-fuchsia-400/20 text-white px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide text-shadow-strong">그리움</span>
                <span className="bg-fuchsia-400/20 text-white px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide text-shadow-strong">행복</span>
                <span className="bg-fuchsia-400/20 text-white px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide text-shadow-strong">먹먹함</span>
              </div>
              <div className="text-sm mb-6 leading-relaxed font-extralight tracking-wide">&gt; 이 날 할머니랑 시장 갔었지</div>
              <button className="bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide text-shadow-strong">
                친구에게 조심스레 건네기
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80" alt="회상 캡처 예시" className="w-40 h-40 object-cover rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* 사용자 후일담 */}
      <section className="max-w-4xl mx-auto my-16 px-4 z-40">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-extralight mb-6 text-white text-shadow-strong tracking-wide">
            누군가의 회상
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 text-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-3 leading-relaxed font-extralight tracking-wide">&gt; "사진 한 장이, 그날의 냄새와 소리까지 떠오르게 했어요."</div>
              <div className="text-xs text-white/60 font-extralight">1993년 6월 22일 - 향수</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 text-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-3 leading-relaxed font-extralight tracking-wide">&gt; "소풍 전날 밤, 설렘에 잠 못 이루던 감정이 다시 찾아왔어요."</div>
              <div className="text-xs text-white/60 font-extralight">1997년 5월 3일 - 행복</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 text-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-3 leading-relaxed font-extralight tracking-wide">&gt; "오랜만에 가족이 함께 웃던 저녁 식탁이 생각났어요."</div>
              <div className="text-xs text-white/60 font-extralight">1990년 10월 12일 - 그리움</div>
            </div>
          </div>
        </div>
      </section>

      {/* 프리미엄 회상 기능 */}
      <section className="max-w-3xl mx-auto my-16 px-4 z-40">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-extralight mb-6 text-white text-shadow-strong tracking-wide">
            프리미엄 회상
          </h3>
          <ul className="list-disc pl-4 mb-8 space-y-3 text-sm leading-relaxed">
            <li className="font-extralight tracking-wide">AI가 당신의 나이, 그 날의 위치, 시간까지 고려해 당시의 하루를 정성스럽게 되살려드려요.</li>
            <li className="font-extralight tracking-wide">예: "1998년 5월 4일, 당신은 10살. 운동장에서 친구들과 비 맞으며 놀다 집에 돌아왔죠."</li>
          </ul>
          <div className="flex gap-6">
            <div className="flex-1 backdrop-blur-md bg-white/10 rounded-xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="font-extralight text-white mb-3 text-sm tracking-wide text-shadow-strong">무료</div>
              <div className="text-xs mb-6 text-white/60 font-extralight">기본 회상, 저장</div>
              <button className="bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide text-shadow-strong">
                무료로 시작
              </button>
            </div>
            <div className="flex-1 backdrop-blur-md bg-fuchsia-400/20 rounded-xl p-6 text-center border border-fuchsia-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="font-extralight text-white mb-3 text-sm tracking-wide text-shadow-strong">유료</div>
              <div className="text-xs mb-6 text-white/60 font-extralight">AI 회상 + 정밀 뉴스/방송 기록 + 감정 분석 리포트</div>
              <button className="bg-fuchsia-400/30 hover:bg-fuchsia-400/40 text-white px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide text-shadow-strong">
                구독하고 더 깊이 회상
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-white/10 py-12 mt-16 text-center text-white border-t border-white/20 z-40">
        <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-fuchsia-400 text-white transition-all duration-300 hover:scale-105 font-extralight tracking-wide text-shadow-strong">회사 소개</a>
          <a href="#" className="hover:text-fuchsia-400 text-white transition-all duration-300 hover:scale-105 font-extralight tracking-wide text-shadow-strong">이용약관</a>
          <a href="#" className="hover:text-fuchsia-400 text-white transition-all duration-300 hover:scale-105 font-extralight tracking-wide text-shadow-strong">개인정보 처리방침</a>
          <a href="#" className="hover:text-fuchsia-400 text-white transition-all duration-300 hover:scale-105 font-extralight tracking-wide text-shadow-strong">문의하기</a>
        </div>
        <div className="mb-6 flex justify-center gap-6">
          <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform duration-300"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" /></a>
          <a href="#" aria-label="YouTube" className="hover:scale-110 transition-transform duration-300"><img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="YouTube" /></a>
          <a href="#" aria-label="Kakao" className="hover:scale-110 transition-transform duration-300"><img src="https://img.icons8.com/ios-filled/24/ffffff/speech-bubble.png" alt="Kakao" /></a>
        </div>
        <div className="text-sm font-extralight text-white text-shadow-strong tracking-wide">
          &gt; "기억은 사라지지 않아요. 다시 꺼낼 수 있을 뿐이죠."
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .text-shadow {
          text-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
        }
        .text-shadow-strong {
          text-shadow: 0 2px 12px #0008, 0 0 2px #fff, 0 0 8px #f3cfff99;
        }
        .backdrop-blur-md {
          transition: all 0.3s ease-in-out;
        }
        .grain-bg {
          background-image: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.25;
          mix-blend-mode: screen;
        }
        .hero-serif-title {
          text-shadow: 0 4px 32px #ffb86b99, 0 0 8px #fff8;
        }
      `}</style>
    </div>
  );
}
