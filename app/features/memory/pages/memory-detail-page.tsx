import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";

export default function MemoryDetailPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardContent className="p-6">
          <div className="aspect-video bg-gray-100 rounded-lg mb-6"></div>
          <h1 className="text-3xl font-bold mb-4">추억 제목</h1>
          <p className="text-gray-600 mb-6">2024년 5월 20일</p>
          <div className="prose max-w-none mb-8">
            <p>
              추억에 대한 상세한 내용이 들어갑니다. 이곳에는 사용자가 작성한 추억의 내용이
              표시됩니다. 이미지, 텍스트 등 다양한 형태의 콘텐츠가 포함될 수 있습니다.
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="outline">수정</Button>
            <Button>공유하기</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 