import { Card, CardContent } from "~/common/components/ui/card";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function AboutPage() {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10">
        <Card
          className="rounded-2xl p-8 transition-all duration-500 ease-in-out"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 8px 40px rgba(255, 182, 255, 0.2)",
          }}
        >
          <CardContent>
            <h1 className="text-3xl font-bold mb-6 text-white text-shadow-strong">
              DASI - 당신의 추억을 더 스마트하게
            </h1>
            <div className="space-y-6 text-white/90">
              <p className="text-lg leading-relaxed text-white/90">
                DASI는 당신의 소중한 추억을 더 스마트하게 관리하고 공유할 수
                있는 서비스입니다. 과거의 특별한 순간들을 AI의 도움을 받아 더욱
                생생하게 되살려보세요.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div
                  className="rounded-xl p-6 transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 4px 30px rgba(255, 182, 255, 0.15)",
                  }}
                >
                  <h2 className="text-xl font-semibold mb-4 text-white text-shadow-strong">
                    AI 기반 회상
                  </h2>
                  <p className="text-white/90">
                    당신의 나이, 위치, 시간을 고려하여 그날의 추억을 더욱
                    생생하게 되살려드립니다.
                  </p>
                </div>
                <div
                  className="rounded-xl p-6 transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 4px 30px rgba(255, 182, 255, 0.15)",
                  }}
                >
                  <h2 className="text-xl font-semibold mb-4 text-white text-shadow-strong">
                    감정 분석
                  </h2>
                  <p className="text-white/90">
                    당신의 추억에 담긴 감정을 분석하여 더 깊은 통찰을
                    제공합니다.
                  </p>
                </div>
              </div>
              {/* 서비스 구조 설명 */}
              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/20 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-white text-shadow-strong">
                  DASI가 여러분의 추억을 더 특별하게 만드는 방법
                </h2>
                <p className="mb-4 text-white/90">
                  DASI는 여러분의 소중한 추억을 더욱 생생하고 특별하게
                  만들어드립니다. 회원가입 없이도 추억을 남길 수 있고, 그날의
                  분위기와 감정을 더욱 풍부하게 되살려드립니다.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>
                    <b>나만의 특별한 날</b>: 그날의 제목과 감상을 자유롭게
                    기록하세요. 공개하고 싶은 추억만 선택적으로 공유할 수
                    있어요.
                  </li>
                  <li>
                    <b>그날의 분위기</b>: 그날의 날씨, 흘러나오던 음악, TV에서
                    나오던 프로그램까지. 당신의 추억을 더욱 생생하게
                    되살려드립니다.
                  </li>
                  <li>
                    <b>누구나 참여 가능</b>: 회원가입 없이도 추억을 남기고
                    공유할 수 있어요. 나중에 회원이 되어도 모든 기록은 그대로
                    보관됩니다.
                  </li>
                  <li>
                    <b>함께 나누는 감정</b>: 좋아요, 감정 태그, 코멘트로 서로의
                    추억에 공감하고 소통할 수 있어요. 익명으로도 참여
                    가능합니다.
                  </li>
                  <li>
                    <b>맞춤형 추억 여행</b>: 여러분의 취향과 관심사를 분석해서
                    더 특별한 추억 여행을 제안해드립니다.
                  </li>
                </ul>
                <div className="mt-6 text-white/80">
                  <b>DASI와 함께하는 추억 여행</b>
                  <br />
                  1. 특별했던 날짜를 선택하세요
                  <br />
                  2. AI가 그날의 분위기를 자동으로 찾아드려요
                  <br />
                  3. 당신만의 감상과 제목을 남겨보세요
                  <br />
                  4. 친구들과 추억을 공유하고 소통해보세요
                  <br />
                  5. 더 특별한 추억 여행을 위한 맞춤 추천을 받아보세요
                  <br />
                </div>
                <div className="mt-6 text-white/80">
                  <b>안전하고 편안한 추억 보관소</b>
                  <br />
                  - 회원가입 없이도 추억을 남길 수 있어요
                  <br />
                  - 공개하고 싶은 추억만 선택적으로 공유할 수 있어요
                  <br />
                  - 모든 추억은 안전하게 보관되며, 언제든 관리할 수 있어요
                  <br />
                  - 더 나은 추억 여행을 위해 지속적으로 개선되고 있어요
                  <br />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CosmicBackgroundLayout>
  );
}
