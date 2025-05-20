import { Button } from "~/common/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">페이지를 찾을 수 없습니다</p>
      <Button>홈으로 돌아가기</Button>
    </div>
  );
} 