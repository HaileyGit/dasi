import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0f0f1f] text-white border-t border-white/10 px-6 py-12 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">DASI 감정 회상 서비스</h2>
          <p className="text-white/60">
            기억은 사라지지 않아요. 다시 꺼낼 수 있을 뿐이죠.
          </p>
          <p className="text-white/40">© 2025 DASI. All rights reserved.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold">서비스</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="hover:underline text-white/80">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link to="/examples" className="hover:underline text-white/80">
                  회상 예시 보기
                </Link>
              </li>
              <li>
                <Link to="/recall" className="hover:underline text-white/80">
                  날짜로 회상하기
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">내 활동</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/my-records"
                  className="hover:underline text-white/80"
                >
                  내 기록 보기
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:underline text-white/80">
                  감정 통계
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">지원</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy" className="hover:underline text-white/80">
                  개인정보 처리방침
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline text-white/80">
                  이용약관
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-white/80">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
