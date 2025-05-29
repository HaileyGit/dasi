import { type FC } from "react";
import { useParams } from "react-router";

const SharePage: FC = () => {
  const { emotionDayId } = useParams<{ emotionDayId: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">공유된 회상</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {/* TODO: 공유된 회상 내용 표시 컴포넌트 추가 */}
        <p className="text-gray-600">공유된 회상 내용이 여기에 표시됩니다.</p>
      </div>
    </div>
  );
};

export default SharePage;
