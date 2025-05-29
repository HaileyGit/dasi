import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
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
      <div className="container mx-auto py-10 flex justify-center">
        <Card className="w-[400px] backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl">
          <CardHeader>
            <h1 className="text-2xl font-bold text-center text-shadow-strong">
              {title}
            </h1>
          </CardHeader>
          <CardContent>{children}</CardContent>
          {footer && (
            <CardFooter className="flex flex-col space-y-4">
              {footer}
            </CardFooter>
          )}
        </Card>
      </div>
    </CosmicBackgroundLayout>
  );
}
