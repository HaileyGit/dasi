import { type FC, type ReactNode } from "react";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";
import Navigation from "~/common/components/navigation";

interface RecallLayoutProps {
  children: ReactNode;
}

const RecallLayout: FC<RecallLayoutProps> = ({ children }) => {
  return (
    <CosmicBackgroundLayout>
      <div className="min-h-screen">
        <Navigation isLoggedIn={true} />
        <main className="pt-16">{children}</main>
      </div>
    </CosmicBackgroundLayout>
  );
};

export default RecallLayout;
