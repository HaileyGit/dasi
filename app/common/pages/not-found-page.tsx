import { Button } from "~/common/components/ui/button";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function NotFoundPage() {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-6xl font-bold mb-4 text-shadow-strong">404</h1>
        <p className="text-xl mb-8 text-white/80 text-shadow-strong">
          페이지를 찾을 수 없습니다
        </p>
        <Button className="bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white rounded-xl shadow-md text-shadow-strong">
          홈으로 돌아가기
        </Button>
      </div>
    </CosmicBackgroundLayout>
  );
}
