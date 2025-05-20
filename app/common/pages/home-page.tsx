import { Button } from "~/common/components/ui/button";
import { Card, CardHeader, CardContent } from "~/common/components/ui/card";

export default function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">DASI</h1>
        <p className="text-xl text-gray-600">당신의 일상을 더 스마트하게</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">편리한 일정 관리</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              스마트한 일정 관리로 당신의 시간을 효율적으로 관리하세요.
            </p>
            <Button>자세히 보기</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">실시간 알림</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              중요한 일정을 놓치지 않도록 실시간으로 알려드립니다.
            </p>
            <Button>자세히 보기</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">데이터 분석</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              당신의 일정 패턴을 분석하여 더 나은 시간 관리를 제안합니다.
            </p>
            <Button>자세히 보기</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">지금 시작하세요</h2>
        <Button size="lg" className="mr-4">로그인</Button>
        <Button size="lg" variant="outline">회원가입</Button>
      </div>
    </div>
  );
} 