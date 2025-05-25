import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function ExplorePage() {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-shadow-strong">
          오늘의 추억
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl"
            >
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white text-shadow-strong">
                  추억 제목
                </h2>
                <p className="text-white/70 mb-4">
                  추억에 대한 간단한 설명이 들어갑니다.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-fuchsia-400/30 text-white rounded-xl"
                  onClick={() => (window.location.href = `/memories/${item}`)}
                >
                  자세히 보기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CosmicBackgroundLayout>
  );
}
