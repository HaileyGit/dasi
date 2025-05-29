import { type FC } from "react";

const InsightsPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">감정 통계</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">
          나의 감정 변화를 한눈에 확인해보세요.
        </p>
        {/* TODO: 감정 통계 차트 컴포넌트 추가 */}
        <div className="grid gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">월간 감정 분포</h3>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              차트가 여기에 표시됩니다
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">계절별 감정 변화</h3>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              차트가 여기에 표시됩니다
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
