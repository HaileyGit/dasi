import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "~/common/components/ui/card";

export default function LoginPage() {
  return (
    <div className="container mx-auto py-10 flex justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">로그인</h1>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">이메일</label>
              <Input id="email" type="email" placeholder="이메일을 입력하세요" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">비밀번호</label>
              <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">로그인</Button>
          <Button variant="outline" className="w-full">회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  );
} 