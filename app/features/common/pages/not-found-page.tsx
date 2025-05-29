import { type FC } from "react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

const NotFoundPage: FC = () => {
  return (
    <CosmicBackgroundLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-shadow-strong">404</h1>
          <p className="text-xl mb-8 text-white/80">
            찾으시는 페이지가 존재하지 않습니다.
          </p>
          <Button asChild>
            <Link to="/">홈으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </CosmicBackgroundLayout>
  );
};

export default NotFoundPage;
