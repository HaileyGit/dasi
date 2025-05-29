import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  BarChart3Icon,
  FileTextIcon,
  LogOutIcon,
  LogInIcon,
  MenuIcon,
  UserPlusIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

// 메뉴 배열 정의
const commonMenus = [{ name: "서비스 소개", to: "/about" }];

const guestMenus = [{ name: "회상 예시 보기", to: "/examples" }];

const userMenus = [
  {
    name: "회상",
    items: [
      {
        name: "날짜로 회상하기",
        description: "특정 날짜를 선택해 회상을 시작하세요.",
        to: "/recall",
      },
      {
        name: "회상 예시 보기",
        description: "다른 사용자의 회상 예시를 확인하세요.",
        to: "/examples",
      },
    ],
  },
];

export default function Navigation({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const menus = [...commonMenus, ...(isLoggedIn ? userMenus : guestMenus)];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav className="flex h-16 items-center justify-between px-6 sm:px-16 fixed top-0 left-0 right-0 z-50 bg-[#0f0f1f]/80 backdrop-blur-md border-b border-white/10">
      {/* 좌측: 로고 & 메뉴 */}
      <div className="flex items-center">
        <Link to="/" className="font-bold text-lg tracking-tight">
          DASI
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="ml-6 space-x-4 hidden md:flex">
            {menus.map((menu) =>
              "items" in menu ? (
                <NavigationMenuItem key={menu.name}>
                  <NavigationMenuTrigger className="bg-[#1a1a2e] text-white hover:bg-[#2a2a3d] border border-white/10 rounded-md">
                    {menu.name}
                  </NavigationMenuTrigger>{" "}
                  <NavigationMenuContent className="bg-[#0f0f1f] text-white shadow-xl rounded-lg border border-white/10">
                    <ul className="w-60 p-4 grid gap-3">
                      {menu.items.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className={cn(
                              "block text-sm font-medium hover:underline text-white",
                              isActive(item.to) && "text-fuchsia-400 font-bold"
                            )}
                          >
                            {item.name}
                          </Link>
                          <p className="text-xs text-white/70">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={menu.to}>
                  <Link
                    to={menu.to}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-[#1a1a2e] text-white hover:bg-[#2a2a3d] rounded-md border border-white/10",
                      isActive(menu.to) && "text-fuchsia-400 font-bold"
                    )}
                  >
                    {menu.name}
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 모바일 햄버거 */}
        <Button
          className="md:hidden ml-4"
          variant="ghost"
          size="icon"
          aria-label="메뉴 열기"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* 우측: 유저 영역 */}
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <>
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/recall">회상하기</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar aria-label="사용자 메뉴">
                  <AvatarImage src="/user.png" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                  <span className="font-medium">홍길동</span>
                  <span className="text-xs text-muted-foreground">
                    @dasi_user
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link to="/my-records">
                      <FileTextIcon className="mr-2 h-4 w-4" />내 기록 보기
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/insights">
                      <BarChart3Icon className="mr-2 h-4 w-4" />
                      감정 통계
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/auth/logout">
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    로그아웃
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button asChild variant="ghost">
              <Link to="/auth/login">
                <LogInIcon className="mr-1 w-4 h-4" />
                로그인
              </Link>
            </Button>
            <Button asChild>
              <Link to="/auth/join">
                <UserPlusIcon className="mr-1 w-4 h-4" />
                회원가입
              </Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
