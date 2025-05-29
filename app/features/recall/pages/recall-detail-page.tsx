import { type FC, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { generateContentFromDate } from "../utils/generate-content-from-date";
import { generateRecallSummary } from "../utils/generate-recall-summary";
import { Button } from "~/common/components/ui/button";

type SelectionKey =
  | "weather"
  | "selectedMusic"
  | "selectedNews"
  | "selectedFood"
  | "selectedScent"
  | "quote";

interface Selections {
  weather: string;
  selectedMusic: string;
  selectedNews: string;
  selectedFood: string;
  selectedScent: string;
  quote: string;
}

const RecallDetailPage: FC = () => {
  const { date } = useParams<{ date: string }>();
  const navigate = useNavigate();
  const content = date ? generateContentFromDate(date) : null;

  const [stepIndex, setStepIndex] = useState(0);
  const [selections, setSelections] = useState<Selections>({
    weather: "",
    selectedMusic: "",
    selectedNews: "",
    selectedFood: "",
    selectedScent: "",
    quote: "",
  });

  if (!content || !date) return null;

  const steps = [
    {
      title: "그날의 날씨는 어땠나요?",
      options: [content.weather],
      key: "weather" as SelectionKey,
    },
    {
      title: "그 시절 유행했던 음악 중 기억나는 것을 골라주세요.",
      options: content.musicOptions,
      key: "selectedMusic" as SelectionKey,
    },
    {
      title: "당시 기억나는 뉴스가 있다면 선택해주세요.",
      options: content.newsOptions,
      key: "selectedNews" as SelectionKey,
    },
    {
      title: "그날 먹었던 음식이 있다면 골라주세요.",
      options: content.foodOptions,
      key: "selectedFood" as SelectionKey,
    },
    {
      title: "그날의 향이나 냄새 중 기억나는 것이 있다면?",
      options: content.scentOptions,
      key: "selectedScent" as SelectionKey,
    },
    {
      title: "그날을 한 문장으로 표현해보세요.",
      options: [content.quote],
      key: "quote" as SelectionKey,
    },
  ];

  const current = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;

  const handleSelect = (value: string) => {
    setSelections((prev) => ({ ...prev, [current.key]: value }));
    if (!isLastStep) {
      setStepIndex((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastStep) {
      const summary = generateRecallSummary({
        date,
        ...selections,
      });
      navigate(`/recall/${date}/summary`, { state: { summary } });
      return;
    }
    setStepIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStepIndex((prev) => prev - 1);
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-6 space-y-6">
      <h1 className="text-xl font-semibold text-white text-center">
        {current.title}
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {current.options.map((option: string) => (
          <Button
            key={option}
            onClick={() => handleSelect(option)}
            className={`w-full transition ${
              selections[current.key] === option
                ? "bg-white/20 border-white/30"
                : "bg-white/10 hover:bg-white/20"
            } text-white border border-white/10`}
          >
            {option}
          </Button>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={stepIndex === 0}
          className="text-white border-white/20 hover:bg-white/10"
        >
          이전
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selections[current.key]}
          className="bg-white text-black hover:bg-white/90"
        >
          {isLastStep ? "완료" : "다음"}
        </Button>
      </div>
    </div>
  );
};

export default RecallDetailPage;
