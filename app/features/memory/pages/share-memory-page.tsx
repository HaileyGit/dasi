import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";
import { Input } from "~/common/components/ui/input";

export default function ShareMemoryPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-6">추억 공유하기</h1>
          <div className="space-y-6">
            <div className="aspect-video bg-gray-100 rounded-lg"></div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">공유 링크</label>
                <div className="flex space-x-2">
                  <Input value="https://dasi.com/share/123" readOnly />
                  <Button variant="outline">복사</Button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">공유 기간</label>
                <div className="flex space-x-2">
                  <Input type="date" />
                  <Input type="date" />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline">취소</Button>
              <Button>공유하기</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 