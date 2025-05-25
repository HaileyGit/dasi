import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function MemoryDetailPage() {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10">
        <Card className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <div className="aspect-video bg-white/10 rounded-lg mb-6 border border-fuchsia-400/10" />
            <h1 className="text-3xl font-bold mb-4 text-shadow-strong">
              추억 제목
            </h1>
            <p className="text-white/70 mb-6">2024년 5월 20일</p>
            <div className="prose max-w-none mb-8 text-white/90">
              <p>
                추억에 대한 상세한 내용이 들어갑니다. 이곳에는 사용자가 작성한
                추억의 내용이 표시됩니다. 이미지, 텍스트 등 다양한 형태의
                콘텐츠가 포함될 수 있습니다.
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                className="rounded-xl border-fuchsia-400/30 text-white/90 hover:text-white font-medium bg-transparent hover:bg-white/5"
                onClick={() => (window.location.href = "/memories/1/edit")}
              >
                수정
              </Button>
              <Button
                className="bg-transparent hover:bg-fuchsia-400/20 text-white/90 hover:text-white rounded-xl shadow-md text-shadow-strong font-medium border border-fuchsia-400/30"
                onClick={() => (window.location.href = "/memories/1/share")}
              >
                공유하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </CosmicBackgroundLayout>
  );
}
