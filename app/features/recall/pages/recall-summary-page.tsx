// /recall/pages/recall-summary-page.tsx

import { type FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card } from "~/common/components/ui/card";

const RecallSummaryPage: FC = () => {
  const { date } = useParams<{ date: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const summary = location.state?.summary || location.state;

  if (!summary || !date) {
    return (
      <div className="max-w-xl mx-auto py-16 px-6 text-center text-white/70">
        회상 요약 데이터를 불러올 수 없습니다.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-primary">
        {date}의 회상
      </h1>

      <Card className="relative overflow-hidden border border-white/10">
        <img
          src="/images/memory-template.png"
          alt="회상 템플릿"
          className="w-full h-auto object-cover"
        />

        {/* 오버레이 텍스트 */}
        <div className="absolute top-[8%] left-[8%] text-white text-sm font-medium">
          {date}, 서울: {summary.weather}
        </div>
        <div className="absolute top-[38%] left-[26%] text-white text-xs font-semibold bg-black/50 px-2 py-0.5 rounded">
          {summary.news}
        </div>
        <div className="absolute top-[65%] left-[24%] text-white text-xs">
          {summary.music}
        </div>

        <blockquote className="absolute bottom-[10%] left-[8%] w-[80%] text-white text-sm italic">
          “{summary.quote}”
        </blockquote>
      </Card>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <Button
          variant="outline"
          className="text-white border-white/20 hover:bg-white/10"
          onClick={() => navigate("/recall")}
        >
          다시 회상하기
        </Button>

        <div className="flex gap-4">
          <Button
            variant="outline"
            className="text-white border-white/20 hover:bg-white/10"
            onClick={() =>
              navigator.clipboard.writeText(JSON.stringify(summary, null, 2))
            }
          >
            텍스트 복사하기
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              console.log("이미지 저장 기능 구현 예정");
            }}
          >
            이미지로 저장
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecallSummaryPage;
