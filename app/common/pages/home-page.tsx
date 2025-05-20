import { Button } from "~/common/components/ui/button";
import { Card, CardHeader, CardContent } from "~/common/components/ui/card";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      console.log(`/explore/${selectedDate.toISOString().split("T")[0]}`);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">DASI</h1>
        <p className="text-xl text-gray-600">당신의 소중한 순간을 회상하세요</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">날짜 선택</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              회상하고 싶은 날짜를 선택해보세요
            </p>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                className="rounded-md border"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">자동 콘텐츠 수집</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              선택한 날짜의 날씨, 뉴스, 음악 등 다양한 콘텐츠를 자동으로
              수집합니다.
            </p>
            <Button onClick={() => console.log("예시 보기 클릭")}>
              예시 보기
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">나만의 회상 만들기</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              감정 태그, 메모, 사진을 추가하여 특별한 순간을 기록하세요.
            </p>
            <Button onClick={() => console.log("시작하기 클릭")}>
              시작하기
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">지금 시작하세요</h2>
        <Button
          size="lg"
          className="mr-4"
          onClick={() => console.log("로그인 클릭")}
        >
          로그인
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => console.log("회원가입 클릭")}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}
