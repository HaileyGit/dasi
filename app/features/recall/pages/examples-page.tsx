import { type FC } from "react";

const ExamplesPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">회상 예시</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">
          다른 사용자들의 회상 예시를 확인해보세요.
        </p>
        {/* TODO: 회상 예시 목록 컴포넌트 추가 */}
        <div className="grid gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">2024년 3월 15일의 회상</h3>
            <p className="text-gray-600">
              봄날의 따뜻한 햇살과 함께한 소중한 추억...
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">2024년 2월 28일의 회상</h3>
            <p className="text-gray-600">
              겨울의 마지막 날, 눈 내리는 풍경을 보며...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;
