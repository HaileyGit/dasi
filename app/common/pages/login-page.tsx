import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
import CosmicBackgroundLayout from "~/common/components/layouts/CosmicBackgroundLayout";

export default function LoginPage() {
  return (
    <CosmicBackgroundLayout>
      <div className="container mx-auto py-10 flex justify-center">
        <Card className="w-[400px] backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl">
          <CardHeader>
            <h1 className="text-2xl font-bold text-center text-shadow-strong">
              로그인
            </h1>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-white/80">
                  이메일
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className="bg-white/10 border border-fuchsia-400/30 rounded-xl text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-white/80">
                  비밀번호
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  className="bg-white/10 border border-fuchsia-400/30 rounded-xl text-white placeholder:text-white/40"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-fuchsia-400/20 hover:bg-fuchsia-400/30 text-white rounded-xl shadow-md text-shadow-strong">
              로그인
            </Button>
            <Button
              variant="outline"
              className="w-full border-fuchsia-400/30 text-white rounded-xl"
              onClick={() => (window.location.href = "/signup")}
            >
              회원가입
            </Button>
          </CardFooter>
        </Card>
      </div>
    </CosmicBackgroundLayout>
  );
}
