export type RecallContent = {
  weather: string;
  news: string;
  music: string;
  food: string;
  scent: string;
  quote: string;
  musicOptions: string[];
  newsOptions: string[];
  foodOptions: string[];
  scentOptions: string[];
};

export function generateContentFromDate(date: string): RecallContent {
  return {
    weather: `${date}의 날씨는 흐림이었습니다.`,
    news: "IMF 외환위기 관련 뉴스가 주요 이슈였습니다.",
    music: "조성모 - 투헤븐",
    food: "유부초밥과 바나나 우유",
    scent: "비온 뒤 운동장 냄새",
    quote: "그날은 그냥 웃고 싶었던 날이었어요.",
    musicOptions: [
      "조성모 – 투헤븐",
      "김건모 – 스피드",
      "젝스키스 – 커플",
      "핑클 – Blue Rain",
    ],
    newsOptions: [
      "IMF 외환위기",
      "월드컵 국가대표 발표",
      "PC방 열풍",
      "Y2K 밀레니엄 준비",
    ],
    foodOptions: [
      "유부초밥",
      "컵라면",
      "떡볶이와 순대",
      "도시락 반찬: 소시지와 계란말이",
    ],
    scentOptions: [
      "비 온 뒤 운동장 냄새",
      "체육복 냄새",
      "학교 복도 왁스 냄새",
      "책방 냄새",
    ],
  };
}
