import { ReactNode } from "react";
import { Card, CardHeader, CardContent } from "~/common/components/ui/card";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  footer?: ReactNode;
}

export default function AuthLayout({
  children,
  title,
  footer,
}: AuthLayoutProps) {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-16 px-4 flex justify-center items-center min-h-screen font-sans">
        <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-border/50 shadow-xl rounded-xl">
          <CardHeader>
            <h1 className="text-xl font-semibold text-center text-card-foreground tracking-wide text-shadow-strong">
              {title}
            </h1>
          </CardHeader>

          <CardContent className="space-y-5">
            {children}
            {footer && (
              <div className="pt-2 border-t border-border/50">{footer}</div>
            )}
          </CardContent>
        </Card>
      </div>
    </CosmicBackgroundLayout>
  );
}
