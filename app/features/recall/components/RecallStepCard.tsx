import { type FC } from "react";
import { Button } from "~/common/components/ui/button";

interface RecallStepCardProps {
  title: string;
  description: string;
  options: string[];
  selectedOptions: string[];
  onSelect: (option: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isLastStep: boolean;
}

export const RecallStepCard: FC<RecallStepCardProps> = ({
  title,
  description,
  options,
  selectedOptions,
  onSelect,
  onNext,
  onPrev,
  isLastStep,
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-sm text-white/80 mb-6">{description}</p>

      <div className="space-y-3 mb-8">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`w-full text-left p-4 rounded-xl transition
              ${
                selectedOptions.includes(option)
                  ? "bg-white/20 border-white/30"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }
              border backdrop-blur-sm`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrev}
          className="text-white border-white/20 hover:bg-white/10"
        >
          이전
        </Button>
        <Button
          onClick={onNext}
          className="bg-white text-black hover:bg-white/90"
        >
          {isLastStep ? "완료" : "다음"}
        </Button>
      </div>
    </div>
  );
};
