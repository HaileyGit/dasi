interface RecallSummaryInput {
  date: string;
  weather: string;
  selectedMusic: string;
  selectedNews: string;
  selectedFood: string;
  selectedScent: string;
  quote: string;
}

export function generateRecallSummary(input: RecallSummaryInput): string {
  const {
    date,
    weather,
    selectedMusic,
    selectedNews,
    selectedFood,
    selectedScent,
    quote,
  } = input;

  return `${date}의 회상

날씨: ${weather}

그날의 기억:
- 들었던 음악: ${selectedMusic}
- 기억나는 뉴스: ${selectedNews}
- 먹었던 음식: ${selectedFood}
- 기억나는 냄새: ${selectedScent}

그날의 한 문장:
"${quote}"`;
}
