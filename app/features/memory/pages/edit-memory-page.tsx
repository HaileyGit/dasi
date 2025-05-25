import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";
import { Input } from "~/common/components/ui/input";
import { Card, CardContent, CardFooter } from "~/common/components/ui/card";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function EditMemoryPage() {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10">
        <Card className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl">
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-white/80">
                  제목
                </label>
                <Input
                  id="title"
                  placeholder="추억의 제목을 입력하세요"
                  className="bg-white/10 border border-fuchsia-400/30 rounded-xl text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="content" className="text-white/80">
                  내용
                </label>
                <Textarea
                  id="content"
                  placeholder="추억에 대한 내용을 작성하세요"
                  className="min-h-[200px] bg-white/10 border border-fuchsia-400/30 rounded-xl text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="image" className="text-white/80">
                  이미지
                </label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  className="bg-white/10 border border-fuchsia-400/30 rounded-xl text-white file:text-white/60"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button
              variant="outline"
              className="rounded-xl border-fuchsia-400/30 text-white"
              onClick={() => (window.location.href = "/memories")}
            >
              취소
            </Button>
            <Button
              className="bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white rounded-xl shadow-md text-shadow-strong"
              onClick={() => (window.location.href = "/memories")}
            >
              저장하기
            </Button>
          </CardFooter>
        </Card>
      </div>
    </CosmicBackgroundLayout>
  );
}
