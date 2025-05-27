import { Button } from "~/common/components/ui/button";
import { Card, CardHeader, CardContent } from "~/common/components/ui/card";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  // 네비게이션 메뉴
  const navMenu = [
    { title: "서비스 소개", href: "/about" },
    { title: "날짜로 회상하기", href: "/explore" },
    { title: "회상 예시 보기", href: "/examples" },
    { title: "내 기록 보기", href: "/memories" },
    { title: "로그인 / 회원가입", href: "/login" },
  ];

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      console.log(`/explore/${selectedDate.toISOString().split("T")[0]}`);
    }
  };

  return (
    <CosmicBackgroundLayout>
      {/* 네비게이션 바 */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                그날의 기억
              </span>
            </div>
          </div>
          <ul className="flex gap-6 text-sm">
            {navMenu.map((item, i) => (
              <li
                key={i}
                className="hover:text-pink-300 text-white/80 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 font-extralight tracking-wide"
                onClick={() => (window.location.href = item.href)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="기억 검색..."
                className="bg-white/10 border-none text-sm rounded-full py-2 pl-10 pr-4 w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-pink-400/50 backdrop-blur-sm transition-all"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 text-sm"></i>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer shadow-lg">
              <i className="fas fa-user text-white"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                그날의{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                  기억을 되살리다
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
                시간을 거슬러 올라가 그날의 순간들을 다시 만나보세요. 잊고 있던
                그날의 풍경, 소리, 그리고 감정들이 당신을 기다리고 있어요.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  회상 기록하기
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-white/20 transition-all duration-300">
                  타임라인 둘러보기
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Calendar 실제 렌더링 */}
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d);
            handleDateSelect(d);
          }}
          className="mt-12 w-full max-w-md mx-auto rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-4 shadow-lg"
        />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus:wght@400;700&display=swap');
          .hero-card-memecho {
            background: radial-gradient(ellipse at 60% 0%, #4b357a 0%, #2d1e4d 80%, #1a1333 100%);
            border-radius: 2.5rem;
            box-shadow: 0 8px 40px 0 #0008, 0 0 0 2px #a389f4cc, 0 0 32px 8px #c084fc44;
            padding: 3.5rem 2.5rem 2.5rem 2.5rem;
            border: 2px solid #a389f4cc;
            position: relative;
            overflow: hidden;
          }
          .hero-memecho-title {
            font-family: 'Marcellus', serif;
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.04em;
            text-shadow: 0 0 16px #fff8, 0 2px 24px #c084fc, 0 0 8px #fff8;
          }
          .hero-memecho-white {
            color: #fff;
            text-shadow: 0 0 16px #fff, 0 2px 24px #c084fc, 0 0 8px #fff8;
          }
          .hero-memecho-pink {
            color: #e0aaff;
            text-shadow: 0 0 24px #e0aaff, 0 0 32px #ffb6ff, 0 2px 24px #c084fc, 0 0 8px #fff8;
          }
          .hero-memecho-desc {
            color: #e6e6f0;
            text-shadow: 0 0 8px #fff4, 0 0 16px #a389f444;
          }
          .hero-memecho-btn-pink {
            background: #c084fc;
            color: #fff;
            font-weight: 600;
            font-size: 1.1rem;
            border-radius: 1.5rem;
            padding: 0.8rem 2.2rem;
            box-shadow: 0 2px 16px #c084fc88, 0 0 0 2px #fff8;
            border: 2px solid #fff8;
            transition: all 0.2s;
          }
          .hero-memecho-btn-pink:hover {
            background: #e0aaff;
            color: #4b357a;
            box-shadow: 0 4px 32px #e0aaffcc, 0 0 0 2px #fff8;
            border-color: #fff;
          }
          .hero-memecho-btn-outline {
            background: transparent;
            color: #fff;
            font-weight: 600;
            font-size: 1.1rem;
            border-radius: 1.5rem;
            padding: 0.8rem 2.2rem;
            border: 2px solid #fff8;
            box-shadow: 0 2px 16px #fff4, 0 0 0 2px #fff8;
            transition: all 0.2s;
          }
          .hero-memecho-btn-outline:hover {
            background: #fff2;
            color: #e0aaff;
            border-color: #e0aaff;
            box-shadow: 0 4px 32px #e0aaff88, 0 0 0 2px #e0aaff;
          }
          .hero-memecho-noise {
            background-image: url('https://grainy-gradients.vercel.app/noise.svg');
            opacity: 0.18;
            mix-blend-mode: screen;
            z-index: 2;
          }
        `}</style>
      </section>

      {/* 그날의 기록 예시 */}
      <section className="max-w-3xl mx-auto my-16 px-4 z-40">
        <Card className="glass-card">
          <CardHeader>
            <h3 className="text-white text-xl font-extralight text-shadow-strong">
              1995년 4월 15일의 기록
            </h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm leading-relaxed text-white">
              <li>&gt; 하늘은 흐렸고, 바람은 조용했어요</li>
              <li>&gt; 신문엔 새로운 주민번호 이야기가 실렸죠</li>
              <li>
                &gt; 거리마다 울려 퍼지던 노래:{" "}
                <span className="text-fuchsia-400">
                  서태지와 아이들 - Come Back Home
                </span>
              </li>
              <li>&gt; TV 속에선 전원일기와 토토즐이 흘러나왔어요</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 회상 저장 예시/공유 UI */}
      <section className="max-w-3xl mx-auto my-16 px-4 z-40">
        <div
          className="rounded-2xl p-8 transition-all duration-500 ease-in-out"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 8px 40px rgba(255, 182, 255, 0.2)",
          }}
        >
          <h3 className="text-2xl font-extralight mb-6 text-white text-shadow-strong tracking-wide">
            회상 저장하기
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex gap-3 mb-6">
                <span className="bg-fuchsia-400/20 text-white px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide text-shadow-strong">
                  그리움
                </span>
                <span className="bg-fuchsia-400/20 text-white px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide text-shadow-strong">
                  행복
                </span>
                <span className="bg-fuchsia-400/20 text-white px-4 py-2 text-xs font-extralight rounded-full backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide text-shadow-strong">
                  먹먹함
                </span>
              </div>
              <div className="text-sm mb-6 leading-relaxed font-extralight tracking-wide">
                &gt; 이 날 할머니랑 시장 갔었지
              </div>
              <button className="bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide text-shadow-strong">
                친구에게 조심스레 건네기
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80"
              alt="회상 캡처 예시"
              className="w-40 h-40 object-cover rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 사용자 후일담 */}
      <section className="max-w-4xl mx-auto my-16 px-4 z-40">
        <div
          className="rounded-2xl p-8 transition-all duration-500 ease-in-out"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 8px 40px rgba(255, 182, 255, 0.2)",
          }}
        >
          <h3 className="text-2xl font-extralight mb-6 text-white text-shadow-strong tracking-wide">
            누군가의 회상
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="rounded-xl p-6 text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 30px rgba(255, 182, 255, 0.15)",
              }}
            >
              <div className="mb-3 leading-relaxed font-extralight tracking-wide">
                &gt; "사진 한 장이, 그날의 냄새와 소리까지 떠오르게 했어요."
              </div>
              <div className="text-xs text-white/60 font-extralight">
                1993년 6월 22일 - 향수
              </div>
            </div>
            <div
              className="rounded-xl p-6 text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 30px rgba(255, 182, 255, 0.15)",
              }}
            >
              <div className="mb-3 leading-relaxed font-extralight tracking-wide">
                &gt; "소풍 전날 밤, 설렘에 잠 못 이루던 감정이 다시 찾아왔어요."
              </div>
              <div className="text-xs text-white/60 font-extralight">
                1997년 5월 3일 - 행복
              </div>
            </div>
            <div
              className="rounded-xl p-6 text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 30px rgba(255, 182, 255, 0.15)",
              }}
            >
              <div className="mb-3 leading-relaxed font-extralight tracking-wide">
                &gt; "오랜만에 가족이 함께 웃던 저녁 식탁이 생각났어요."
              </div>
              <div className="text-xs text-white/60 font-extralight">
                1990년 10월 12일 - 그리움
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프리미엄 회상 기능 */}
      <section className="max-w-3xl mx-auto my-16 px-4 z-40">
        <div
          className="rounded-2xl p-8 transition-all duration-500 ease-in-out"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 8px 40px rgba(255, 182, 255, 0.2)",
          }}
        >
          <h3 className="text-2xl font-extralight mb-6 text-white text-shadow-strong tracking-wide">
            프리미엄 회상
          </h3>
          <ul className="list-disc pl-4 mb-8 space-y-3 text-sm leading-relaxed">
            <li className="font-extralight tracking-wide">
              AI가 당신의 나이, 그 날의 위치, 시간까지 고려해 당시의 하루를
              정성스럽게 되살려드려요.
            </li>
            <li className="font-extralight tracking-wide">
              예: "1998년 5월 4일, 당신은 10살. 운동장에서 친구들과 비 맞으며
              놀다 집에 돌아왔죠."
            </li>
          </ul>
          <div className="flex gap-6">
            <div
              className="flex-1 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 30px rgba(255, 182, 255, 0.15)",
              }}
            >
              <div className="font-extralight text-white mb-3 text-sm tracking-wide text-shadow-strong">
                무료
              </div>
              <div className="text-xs mb-6 text-white/60 font-extralight">
                기본 회상, 저장
              </div>
              <button className="bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white px-6 py-2 font-extralight rounded-xl transition-all duration-300 ease-in-out text-sm backdrop-blur-md border border-fuchsia-400/30 shadow-md hover:shadow-lg hover:scale-105 tracking-wide text-shadow-strong">
                무료로 시작
              </button>
            </div>
            <div
              className="flex-1 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 182, 255, 0.12)",
                border: "1px solid rgba(255, 182, 255, 0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 30px rgba(255, 182, 255, 0.2)",
              }}
            >
              <div className="font-extralight text-white mb-3 text-sm tracking-wide text-shadow-strong">
                유료
              </div>
              <div className="text-xs mb-6 text-white/60 font-extralight">
                AI 회상 + 정밀 뉴스/방송 기록 + 감정 분석 리포트
              </div>
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
        .glass-card {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.5rem;
          backdrop-filter: blur(14px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 6px 40px rgba(255, 182, 255, 0.3);
        }
      `}</style>
    </CosmicBackgroundLayout>
  );
}
