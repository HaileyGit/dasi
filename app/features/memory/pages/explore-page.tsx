import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";

export default function ExplorePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">오늘의 추억</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <Card key={item}>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">추억 제목</h2>
              <p className="text-gray-600 mb-4">추억에 대한 간단한 설명이 들어갑니다.</p>
              <Button variant="outline" className="w-full">자세히 보기</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 