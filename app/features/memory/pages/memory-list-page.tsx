import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";

export default function MemoryListPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">내 추억</h1>
        <Button>새 추억 작성</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item}>
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">추억 제목</h2>
              <p className="text-gray-600 mb-4">2024년 5월 20일</p>
              <div className="flex justify-between">
                <Button variant="outline">수정</Button>
                <Button variant="outline">공유</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 