import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";
import { Input } from "~/common/components/ui/input";
import { Card, CardContent, CardFooter } from "~/common/components/ui/card";

export default function EditMemoryPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardContent className="pt-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title">제목</label>
              <Input id="title" placeholder="추억의 제목을 입력하세요" />
            </div>
            <div className="space-y-2">
              <label htmlFor="content">내용</label>
              <Textarea
                id="content"
                placeholder="추억에 대한 내용을 작성하세요"
                className="min-h-[200px]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="image">이미지</label>
              <Input id="image" type="file" accept="image/*" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline">취소</Button>
          <Button>저장하기</Button>
        </CardFooter>
      </Card>
    </div>
  );
} 