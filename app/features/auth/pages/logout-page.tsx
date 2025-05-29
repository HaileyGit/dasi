import { type FC } from "react";
import { useNavigate } from "react-router";

const LogoutPage: FC = () => {
  const navigate = useNavigate();

  // TODO: 로그아웃 로직 구현
  const handleLogout = () => {
    // 로그아웃 처리 후 홈으로 이동
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">로그아웃</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 mb-4 text-center">
            정말 로그아웃 하시겠습니까?
          </p>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
