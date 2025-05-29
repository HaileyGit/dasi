import { useState } from "react";

type MenuItem = {
  title: string;
  to: string;
  onClick?: () => void;
};

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const guestMenu: MenuItem[] = [
    { title: "서비스 소개", to: "/about" },
    { title: "회상 예시 보기", to: "/examples" },
    { title: "로그인 / 회원가입", to: "/login" },
  ];

  const userMenu: MenuItem[] = [
    { title: "서비스 소개", to: "/about" },
    { title: "날짜로 회상하기", to: "/recall" },
    { title: "내 기록 보기", to: "/my-records" },
    {
      title: "로그아웃",
      to: "#",
      onClick: () => setIsLoggedIn(false),
    },
  ];

  const menu = isLoggedIn ? userMenu : guestMenu;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">
              DASI
            </a>
          </div>
          <div className="flex items-center space-x-8">
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.to}
                onClick={item.onClick}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
