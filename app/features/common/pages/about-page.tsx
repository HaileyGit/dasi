import { type FC } from "react";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";

const AboutPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">DASI</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">서비스 소개</h2>
            <p className="text-gray-600 leading-relaxed">
              DASI는 특정 날짜를 기반으로 회상을 생성하고 공유하는 감성 회상
              서비스입니다. 과거의 소중한 순간들을 기록하고, 그날의 감정과
              추억을 되새겨보세요.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <h3 className="font-medium">날짜별 회상</h3>
                  <p className="text-gray-600">
                    특정 날짜를 선택하여 그날의 추억과 감정을 기록하세요.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <h3 className="font-medium">감정 통계</h3>
                  <p className="text-gray-600">
                    나의 감정 변화를 시각적으로 확인하고 분석해보세요.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <h3 className="font-medium">회상 공유</h3>
                  <p className="text-gray-600">
                    소중한 추억을 다른 사람들과 공유해보세요.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">지금 시작해보세요</h2>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/recall">회상 시작하기</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/examples">예시 보기</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
