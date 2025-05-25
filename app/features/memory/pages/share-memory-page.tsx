import { Button } from "~/common/components/ui/button";
import { Card, CardContent } from "~/common/components/ui/card";
import { Input } from "~/common/components/ui/input";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function ShareMemoryPage() {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10">
        <Card
          className="transition-all duration-500 ease-in-out"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 8px 40px rgba(255, 182, 255, 0.3)",
          }}
        >
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-shadow-strong">
              추억 공유하기
            </h1>
            <div className="space-y-6">
              <div
                className="aspect-video rounded-lg transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 4px 30px rgba(255, 182, 255, 0.2)",
                }}
              />
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    공유 링크
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      value="https://dasi.com/share/123"
                      readOnly
                      className="bg-white/5 border border-white/30 rounded-xl text-white placeholder:text-white/40 transition-all duration-300"
                      style={{
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        boxShadow: "0 2px 20px rgba(255, 182, 255, 0.1)",
                      }}
                    />
                    <Button
                      variant="outline"
                      className="border-fuchsia-400/30 text-white rounded-xl"
                    >
                      복사
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    공유 기간
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      type="date"
                      className="bg-white/5 border border-white/30 rounded-xl text-white placeholder:text-white/40 transition-all duration-300"
                      style={{
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        boxShadow: "0 2px 20px rgba(255, 182, 255, 0.1)",
                      }}
                    />
                    <Input
                      type="date"
                      className="bg-white/5 border border-white/30 rounded-xl text-white placeholder:text-white/40 transition-all duration-300"
                      style={{
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        boxShadow: "0 2px 20px rgba(255, 182, 255, 0.1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  className="rounded-xl border-fuchsia-400/30 text-white"
                >
                  취소
                </Button>
                <Button className="bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white rounded-xl shadow-md text-shadow-strong">
                  공유하기
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CosmicBackgroundLayout>
  );
}
