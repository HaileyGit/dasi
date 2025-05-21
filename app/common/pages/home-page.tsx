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
    <div className="min-h-screen font-['Pretendard'] text-white">
      {/* 배경 그라데이션 */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800" />
      <div className="fixed inset-0 backdrop-blur-3xl opacity-30" />
      
      {/* 네비게이션 바 */}
      <nav className="sticky top-0 z-20 backdrop-blur-md bg-white/10 border-b border-white/20 flex items-center justify-between px-6 py-3 shadow-lg">
        <div className="text-lg font-extralight tracking-wider text-shadow">
          <span className="text-cyan-300 font-light">★</span> 그날의 기억 <span className="text-cyan-300 font-light">★</span>
        </div>
        <ul className="flex gap-6 text-sm">
          {navMenu.map((item, i) => (
            <li key={i} className="hover:text-cyan-300 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 font-extralight tracking-wide" onClick={item.onClick}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-3xl mx-auto backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extralight mb-4 text-cyan-300 tracking-wider text-shadow leading-relaxed">
              &gt; 어느 하루, 마음에 남아 있는 그때로
            </h1>
            <div className="text-sm text-white/60 font-extralight tracking-wide">Welcome to the Memory Lane!</div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Calendar 
              mode="single" 
              selected={date} 
              onSelect={setDate} 
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300" 
            />
            <button className="bg-cyan-300/20 hover:bg-cyan-300/30 text-cyan-300 px-8 py-3 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-cyan-300/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide">
              그날로 떠나볼까요?
            </button>
          </div>
        </div>
      </section>

      {/* 그날의 기록 예시 */}
      <section className="max-w-3xl mx-auto my-16 px-4">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <h2 className="text-2xl font-extralight mb-6 text-cyan-300 text-shadow tracking-wide">
            <span className="animate-float inline-block">📝</span> 1995년 4월 15일의 기록
          </h2>
          <ul className="mb-8 space-y-3 text-sm leading-relaxed">
            <li className="hover:text-cyan-300 transition-colors duration-300 font-extralight tracking-wide">&gt; 하늘은 흐렸고, 바람은 조용했어요</li>
            <li className="hover:text-cyan-300 transition-colors duration-300 font-extralight tracking-wide">&gt; 신문엔 새로운 주민번호 이야기가 실렸죠</li>
            <li className="hover:text-cyan-300 transition-colors duration-300 font-extralight tracking-wide">&gt; 거리마다 울려 퍼지던 노래: <span className="text-cyan-300 font-light">서태지와 아이들 - Come Back Home</span></li>
            <li className="hover:text-cyan-300 transition-colors duration-300 font-extralight tracking-wide">&gt; TV 속에선 전원일기와 토토즐이 흘러나왔어요</li>
          </ul>
          <button className="bg-cyan-300/20 hover:bg-cyan-300/30 text-cyan-300 px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-cyan-300/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide">
            이 날로 회상해볼래요
          </button>
        </div>
      </section>

      {/* 회상 저장 예시/공유 UI */}
      <section className="max-w-3xl mx-auto my-16 px-4">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-extralight mb-6 text-cyan-300 text-shadow tracking-wide">
            <span className="animate-float inline-block">💾</span> 회상 저장하기
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex gap-3 mb-6">
                <span className="bg-cyan-300/20 text-cyan-300 px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-cyan-300/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide">그리움</span>
                <span className="bg-cyan-300/20 text-cyan-300 px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-cyan-300/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide">행복</span>
                <span className="bg-cyan-300/20 text-cyan-300 px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-cyan-300/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide">먹먹함</span>
              </div>
              <div className="text-sm mb-6 leading-relaxed font-extralight tracking-wide">&gt; 이 날 할머니랑 시장 갔었지</div>
              <button className="bg-cyan-300/20 hover:bg-cyan-300/30 text-cyan-300 px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-cyan-300/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide">
                친구에게 조심스레 건네기
              </button>
            </div>
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80" alt="회상 캡처 예시" className="w-40 h-40 object-cover rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* 사용자 후일담 */}
      <section className="max-w-4xl mx-auto my-16 px-4">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-extralight mb-6 text-cyan-300 text-shadow tracking-wide">
            <span className="animate-float inline-block">👥</span> 누군가의 회상
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
      <section className="max-w-3xl mx-auto my-16 px-4">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out">
          <h3 className="text-2xl font-extralight mb-6 text-cyan-300 text-shadow tracking-wide">
            <span className="animate-float inline-block">💎</span> 프리미엄 회상
          </h3>
          <ul className="list-disc pl-4 mb-8 space-y-3 text-sm leading-relaxed">
            <li className="font-extralight tracking-wide">AI가 당신의 나이, 그 날의 위치, 시간까지 고려해 당시의 하루를 정성스럽게 되살려드려요.</li>
            <li className="font-extralight tracking-wide">예: "1998년 5월 4일, 당신은 10살. 운동장에서 친구들과 비 맞으며 놀다 집에 돌아왔죠."</li>
          </ul>
          <div className="flex gap-6">
            <div className="flex-1 backdrop-blur-md bg-white/10 rounded-xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="font-extralight text-cyan-300 mb-3 text-sm tracking-wide">무료</div>
              <div className="text-xs mb-6 text-white/60 font-extralight">기본 회상, 저장</div>
              <button className="bg-cyan-300/20 hover:bg-cyan-300/30 text-cyan-300 px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-cyan-300/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide">
                무료로 시작
              </button>
            </div>
            <div className="flex-1 backdrop-blur-md bg-cyan-300/20 rounded-xl p-6 text-center border border-cyan-300/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="font-extralight text-cyan-300 mb-3 text-sm tracking-wide">유료</div>
              <div className="text-xs mb-6 text-white/60 font-extralight">AI 회상 + 정밀 뉴스/방송 기록 + 감정 분석 리포트</div>
              <button className="bg-cyan-300/30 hover:bg-cyan-300/40 text-cyan-300 px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-cyan-300/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide">
                구독하고 더 깊이 회상
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-white/10 py-12 mt-16 text-center text-white border-t border-white/20">
        <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-cyan-300 transition-all duration-300 hover:scale-105 font-extralight tracking-wide">회사 소개</a>
          <a href="#" className="hover:text-cyan-300 transition-all duration-300 hover:scale-105 font-extralight tracking-wide">이용약관</a>
          <a href="#" className="hover:text-cyan-300 transition-all duration-300 hover:scale-105 font-extralight tracking-wide">개인정보 처리방침</a>
          <a href="#" className="hover:text-cyan-300 transition-all duration-300 hover:scale-105 font-extralight tracking-wide">문의하기</a>
        </div>
        <div className="mb-6 flex justify-center gap-6">
          <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform duration-300"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" /></a>
          <a href="#" aria-label="YouTube" className="hover:scale-110 transition-transform duration-300"><img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="YouTube" /></a>
          <a href="#" aria-label="Kakao" className="hover:scale-110 transition-transform duration-300"><img src="https://img.icons8.com/ios-filled/24/ffffff/speech-bubble.png" alt="Kakao" /></a>
        </div>
        <div className="text-sm font-extralight text-cyan-300 text-shadow tracking-wide">
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
        .backdrop-blur-md {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
