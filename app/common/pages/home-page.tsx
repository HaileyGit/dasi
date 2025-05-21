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
    <div className="min-h-screen bg-[#000080] font-mono text-white">
      {/* 배경 패턴 */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/png;base64,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")`,
        backgroundRepeat: 'repeat'
      }} />

      {/* 네비게이션 바 */}
      <nav className="sticky top-0 z-20 bg-black border-b-2 border-white flex items-center justify-between px-4 py-2">
        <div className="text-lg font-bold tracking-wider" style={{fontFamily: "'MS Gothic', 'Dotum', monospace"}}>
          <span className="text-yellow-400">★</span> 그날의 기억 <span className="text-yellow-400">★</span>
        </div>
        <ul className="flex gap-4 text-sm">
          {navMenu.map((item, i) => (
            <li key={i} className="hover:text-yellow-400 cursor-pointer" onClick={item.onClick}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-3xl mx-auto border-2 border-white bg-black p-4">
          <div className="border-2 border-white p-4">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-4 text-yellow-400 tracking-wide" style={{fontFamily: "'MS Gothic', 'Dotum', monospace"}}>
                &gt; 어느 하루, 마음에 남아 있는 그때로
              </h1>
              <div className="text-sm text-gray-400">Welcome to the Memory Lane!</div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-none border-2 border-white bg-black text-white" />
              <button className="bg-yellow-400 text-black px-6 py-2 font-bold hover:bg-yellow-300 text-sm">
                그날로 떠나볼까요?
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 그날의 기록 예시 */}
      <section className="max-w-3xl mx-auto my-12 px-4">
        <div className="border-2 border-white bg-black p-4">
          <div className="border-2 border-white p-4">
            <h2 className="text-xl font-bold mb-4 text-yellow-400" style={{fontFamily: "'MS Gothic', 'Dotum', monospace"}}>
              📝 1995년 4월 15일의 기록
            </h2>
            <ul className="mb-6 space-y-2 text-sm">
              <li>&gt; 하늘은 흐렸고, 바람은 조용했어요</li>
              <li>&gt; 신문엔 새로운 주민번호 이야기가 실렸죠</li>
              <li>&gt; 거리마다 울려 퍼지던 노래: <span className="text-yellow-400">서태지와 아이들 - Come Back Home</span></li>
              <li>&gt; TV 속에선 전원일기와 토토즐이 흘러나왔어요</li>
            </ul>
            <button className="bg-yellow-400 text-black px-4 py-1 font-bold hover:bg-yellow-300 text-sm">
              이 날로 회상해볼래요
            </button>
          </div>
        </div>
      </section>

      {/* 회상 저장 예시/공유 UI */}
      <section className="max-w-3xl mx-auto my-12 px-4">
        <div className="border-2 border-white bg-black p-4">
          <div className="border-2 border-white p-4">
            <h3 className="text-xl font-bold mb-4 text-yellow-400" style={{fontFamily: "'MS Gothic', 'Dotum', monospace"}}>
              💾 회상 저장하기
            </h3>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <div className="flex gap-2 mb-4">
                  <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold">그리움</span>
                  <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold">행복</span>
                  <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold">먹먹함</span>
                </div>
                <div className="text-sm mb-4">&gt; 이 날 할머니랑 시장 갔었지</div>
                <button className="bg-yellow-400 text-black px-4 py-1 font-bold hover:bg-yellow-300 text-sm">
                  친구에게 조심스레 건네기
                </button>
              </div>
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80" alt="회상 캡처 예시" className="w-32 h-32 object-cover border-2 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* 사용자 후일담 */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <div className="border-2 border-white bg-black p-4">
          <div className="border-2 border-white p-4">
            <h3 className="text-xl font-bold mb-4 text-yellow-400" style={{fontFamily: "'MS Gothic', 'Dotum', monospace"}}>
              👥 누군가의 회상
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-white p-4 text-sm">
                <div className="mb-2">&gt; "사진 한 장이, 그날의 냄새와 소리까지 떠오르게 했어요."</div>
                <div className="text-xs text-gray-400">1993년 6월 22일 - 향수</div>
              </div>
              <div className="border border-white p-4 text-sm">
                <div className="mb-2">&gt; "소풍 전날 밤, 설렘에 잠 못 이루던 감정이 다시 찾아왔어요."</div>
                <div className="text-xs text-gray-400">1997년 5월 3일 - 행복</div>
              </div>
              <div className="border border-white p-4 text-sm">
                <div className="mb-2">&gt; "오랜만에 가족이 함께 웃던 저녁 식탁이 생각났어요."</div>
                <div className="text-xs text-gray-400">1990년 10월 12일 - 그리움</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프리미엄 회상 기능 */}
      <section className="max-w-3xl mx-auto my-12 px-4">
        <div className="border-2 border-white bg-black p-4">
          <div className="border-2 border-white p-4">
            <h3 className="text-xl font-bold mb-4 text-yellow-400" style={{fontFamily: "'MS Gothic', 'Dotum', monospace"}}>
              💎 프리미엄 회상
            </h3>
            <ul className="list-disc pl-4 mb-6 space-y-2 text-sm">
              <li>AI가 당신의 나이, 그 날의 위치, 시간까지 고려해 당시의 하루를 정성스럽게 되살려드려요.</li>
              <li>예: "1998년 5월 4일, 당신은 10살. 운동장에서 친구들과 비 맞으며 놀다 집에 돌아왔죠."</li>
            </ul>
            <div className="flex gap-4">
              <div className="flex-1 border border-white p-4 text-center">
                <div className="font-bold text-yellow-400 mb-2 text-sm">무료</div>
                <div className="text-xs mb-4">기본 회상, 저장</div>
                <button className="bg-yellow-400 text-black px-4 py-1 font-bold hover:bg-yellow-300 text-sm">
                  무료로 시작
                </button>
              </div>
              <div className="flex-1 border border-white p-4 text-center bg-yellow-400">
                <div className="font-bold text-black mb-2 text-sm">유료</div>
                <div className="text-xs mb-4 text-black">AI 회상 + 정밀 뉴스/방송 기록 + 감정 분석 리포트</div>
                <button className="bg-black text-yellow-400 px-4 py-1 font-bold hover:bg-gray-800 text-sm">
                  구독하고 더 깊이 회상
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 mt-12 text-center text-white border-t-2 border-white">
        <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:text-yellow-400">회사 소개</a>
          <a href="#" className="hover:text-yellow-400">이용약관</a>
          <a href="#" className="hover:text-yellow-400">개인정보 처리방침</a>
          <a href="#" className="hover:text-yellow-400">문의하기</a>
        </div>
        <div className="mb-4 flex justify-center gap-4">
          <a href="#" aria-label="Instagram"><img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" /></a>
          <a href="#" aria-label="YouTube"><img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="YouTube" /></a>
          <a href="#" aria-label="Kakao"><img src="https://img.icons8.com/ios-filled/24/ffffff/speech-bubble.png" alt="Kakao" /></a>
        </div>
        <div className="text-sm font-bold" style={{fontFamily: "'MS Gothic', 'Dotum', monospace"}}>
          &gt; "기억은 사라지지 않아요. 다시 꺼낼 수 있을 뿐이죠."
        </div>
      </footer>
    </div>
  );
}
