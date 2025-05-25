import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function MemoryListPage() {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-shadow-strong">내 추억</h1>
          <Button
            className="bg-transparent hover:bg-fuchsia-400/20 text-white/90 hover:text-white font-medium border border-fuchsia-400/30 rounded-xl shadow-md text-shadow-strong"
            onClick={() => (window.location.href = "/memories/new")}
          >
            새 추억 작성
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              key={item}
              className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="aspect-video bg-white/10 rounded-lg mb-4 border border-fuchsia-400/10" />
                <h2 className="text-xl font-semibold mb-2 text-white text-shadow-strong">
                  추억 제목
                </h2>
                <p className="text-white/70 mb-4">2024년 5월 20일</p>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    className="rounded-xl border-fuchsia-400/30 text-white/90 hover:text-white font-medium bg-transparent hover:bg-white/5"
                    onClick={() =>
                      (window.location.href = `/memories/${item}/edit`)
                    }
                  >
                    수정
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl border-fuchsia-400/30 text-white/90 hover:text-white font-medium bg-transparent hover:bg-white/5"
                    onClick={() =>
                      (window.location.href = `/memories/${item}/share`)
                    }
                  >
                    공유
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CosmicBackgroundLayout>
  );
}
