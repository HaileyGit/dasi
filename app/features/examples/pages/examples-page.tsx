import { Card, CardContent } from "~/common/components/ui/card";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function ExamplesPage() {
  const examples = [
    {
      title: "1995년 4월 15일",
      description:
        "하늘은 흐렸고, 바람은 조용했어요. 신문엔 새로운 주민번호 이야기가 실렸죠.",
      song: "서태지와 아이들 - Come Back Home",
      tv: "전원일기와 토토즐",
      emotion: "그리움",
    },
    {
      title: "1993년 6월 22일",
      description: "사진 한 장이, 그날의 냄새와 소리까지 떠오르게 했어요.",
      emotion: "향수",
    },
    {
      title: "1997년 5월 3일",
      description: "소풍 전날 밤, 설렘에 잠 못 이루던 감정이 다시 찾아왔어요.",
      emotion: "행복",
    },
  ];

  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-shadow-strong">
          회상 예시
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card
              key={index}
              className="rounded-2xl transition-all duration-500 ease-in-out"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 8px 40px rgba(255, 182, 255, 0.2)",
              }}
            >
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white text-shadow-strong">
                  {example.title}
                </h2>
                <p className="text-white/70 mb-4">{example.description}</p>
                {example.song && (
                  <p className="text-fuchsia-400 mb-2">🎵 {example.song}</p>
                )}
                {example.tv && (
                  <p className="text-white/60 mb-2">📺 {example.tv}</p>
                )}
                <div className="mt-4">
                  <span className="bg-fuchsia-400/20 text-white px-3 py-1 text-xs font-extralight rounded-full backdrop-blur-md border border-fuchsia-400/30">
                    {example.emotion}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CosmicBackgroundLayout>
  );
}
